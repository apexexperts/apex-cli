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
      const { error } = await resend.emails.send({
        from: process.env.CONTACT_FORM_FROM || "onboarding@resend.dev",
        to: [process.env.CONTACT_FORM_TO || "hello@apexexperts.net"],
        subject: `[Lead] ${validatedData.service} request from ${validatedData.name}`,
        replyTo: validatedData.email,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #f2a24b;">New Contact Request</h2>
            <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
            <p><strong>Company:</strong> ${validatedData.company || "Not provided"} - ${validatedData.job_title || "No Title"}</p>
            <p><strong>Location:</strong> ${validatedData.country} (${validatedData.country_code})</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Service:</strong> ${validatedData.service}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #f2a24b;">
              <strong>Message:</strong><br />
              ${validatedData.message.replace(/\n/g, '<br />')}
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
