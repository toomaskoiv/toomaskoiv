import { z } from 'npm:zod@3.25.76';

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().max(40).default(''),
  email: z.string().trim().email().max(255),
  subject: z.enum(['sale', 'buy', 'rent', 'valuation', 'consultation', 'other']),
  message: z.string().trim().min(1).max(5000),
  website: z.string().max(0).optional(),
});