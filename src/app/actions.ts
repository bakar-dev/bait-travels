"use server";

import { z } from "zod";
import { format } from "date-fns";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});



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
