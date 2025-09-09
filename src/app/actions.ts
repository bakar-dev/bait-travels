"use server";

import { z } from "zod";
import { format } from "date-fns";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(formData: { name: string; email: string; message: string }) {
  const parsed = contactFormSchema.safeParse(formData);

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


const umrahEnquiryFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  adults: z.coerce.number().min(1),
  children: z.coerce.number().min(0),
  infants: z.coerce.number().min(0),
  departureDate: z.date(),
  packageType: z.enum(["Economy", "3-Star", "4-Star", "5-Star"]),
  message: z.string().optional(),
});

export async function sendUmrahEnquiry(formData: z.infer<typeof umrahEnquiryFormSchema>) {
    const parsed = umrahEnquiryFormSchema.safeParse(formData);

    if (!parsed.success) {
        return { success: false, error: "Invalid form data." };
    }

    // This is where you'd integrate with a service like Resend, Nodemailer, etc.
    // For this example, we're logging it to the console.
    console.log("New Umrah Enquiry Received:");
    console.log("Full Name:", parsed.data.fullName);
    console.log("Email:", parsed.data.email);
    console.log("Phone:", parsed.data.phone);
    console.log("Passengers:", `${parsed.data.adults} Adults, ${parsed.data.children} Children, ${parsed.data.infants} Infants`);
    console.log("Departure Date:", format(parsed.data.departureDate, "PPP"));
    console.log("Package Type:", parsed.data.packageType);
    console.log("Message:", parsed.data.message || "N/A");

    return { success: true };
}