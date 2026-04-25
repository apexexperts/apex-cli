"use server";

import { Resend } from "resend";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Rate Limiter Setup (3 requests per 10 minutes per IP) ──
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

const ratelimit = redis 
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(3, "10 m"),
      analytics: true,
      prefix: "@upstash/ratelimit",
    })
  : null;

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  job_title: z.string().optional(),
  company: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  country_code: z.string().min(1, "Country code is required"),
  phone: z.string().min(5, "Phone number is too short"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected"),
  turnstileToken: z.string().min(1, "Verification required"),
});

const HTML_ESCAPE_LOOKUP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPE_LOOKUP[character]);
}

function emailFallback(value: string | undefined, fallback: string) {
  const trimmedValue = value?.trim();
  return trimmedValue ? trimmedValue : fallback;
}

function formatEmailMessage(value: string) {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br />");
}

function sanitizeSubjectPart(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]+/g, " ").trim();
}

async function verifyTurnstile(token: string) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) return true; // Skip if not configured (dev)

  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);

  try {
    const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      body: formData,
      method: "POST",
    });
    const outcome = await result.json();
    return outcome.success;
  } catch {
    return false;
  }
}

export async function submitContactForm(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
  try {
    // 1. Rate Limiting Check
    if (ratelimit) {
      const headerList = await headers();
      const ip = headerList.get("x-forwarded-for") || "anonymous";
      const { success } = await ratelimit.limit(`contact_${ip}`);
      if (!success) {
        return { success: false, error: "Too many requests. Please wait 10 minutes before retrying." };
      }
    }

    // 2. Validate Data with Zod
    const validatedData = ContactSchema.parse(rawData);

    // 3. Turnstile Verification
    const isHuman = await verifyTurnstile(validatedData.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Security verification failed. Please try again." };
    }

    // 4. Simulate network delay (Keep for UX feel)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 5. Transmission Logic
    if (process.env.RESEND_API_KEY) {
      const emailHtml = {
        name: escapeHtml(validatedData.name),
        email: escapeHtml(validatedData.email),
        company: escapeHtml(emailFallback(validatedData.company, "Not provided")),
        jobTitle: escapeHtml(emailFallback(validatedData.job_title, "No Title")),
        country: escapeHtml(validatedData.country),
        countryCode: escapeHtml(validatedData.country_code),
        phone: escapeHtml(validatedData.phone),
        service: escapeHtml(validatedData.service),
        message: formatEmailMessage(validatedData.message),
      };

      const { error } = await resend.emails.send({
        from: process.env.CONTACT_FORM_FROM || "onboarding@resend.dev",
        to: [process.env.CONTACT_FORM_TO || "hello@apexexperts.net"],
        subject: `[Lead] ${sanitizeSubjectPart(validatedData.service)} request from ${sanitizeSubjectPart(validatedData.name)}`,
        replyTo: validatedData.email,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #f2a24b;">New Contact Request</h2>
            <p><strong>From:</strong> ${emailHtml.name} (${emailHtml.email})</p>
            <p><strong>Company:</strong> ${emailHtml.company} - ${emailHtml.jobTitle}</p>
            <p><strong>Location:</strong> ${emailHtml.country} (${emailHtml.countryCode})</p>
            <p><strong>Phone:</strong> ${emailHtml.phone}</p>
            <p><strong>Service:</strong> ${emailHtml.service}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #f2a24b;">
              <strong>Message:</strong><br />
              ${emailHtml.message}
            </div>
            <p style="font-size: 10px; color: #999; margin-top: 30px;">
              Submitted via APEX Experts AI Solutions CLI Interface.
            </p>
          </div>
        `,
      });

      if (error) {
        console.error("Transmission Error (Resend):", error);
        return { success: false, error: "System congestion. Please try again later." };
      }
    } else {
      console.log("Transmission Simulation (DEV):", validatedData);
    }

    return { success: true };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return { success: false, error: err.errors[0].message };
    }
    console.error("Contact Form Critical Error:", err);
    return { success: false, error: "Protocol mismatch. Please refresh and try again." };
  }
}
