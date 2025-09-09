"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(formData: { name: string; email: string; message: string }) {
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  // Here you would integrate with an email service like EmailJS, Formspree, or Resend.
  // For this example, we'll just log the data to the console.
  console.log("New contact message received:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);
  
  // Simulate a successful submission
  return { success: true };
}
