"use server";

export async function submitContactForm(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name");
  const email = formData.get("email");
  const jobTitle = formData.get("job_title");
  const company = formData.get("company");
  const country = formData.get("country");
  const countryCode = formData.get("country_code");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  // Validation
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // LOG DATA (Placeholder for real CRM/Email integration)
  console.log("Contact Form Submission:", {
    name,
    email,
    jobTitle,
    company,
    country,
    countryCode,
    phone,
    service,
    message,
  });

  // In a real production app, you would use Resend, SendGrid, or a CRM API here.
  
  return { success: true };
}
