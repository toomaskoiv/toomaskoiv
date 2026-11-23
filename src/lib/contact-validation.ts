import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Palun kirjuta oma nimi.').max(100),
  phone: z.string().trim().max(40),
  email: z.string().trim().email('Palun sisesta korrektne e-posti aadress.').max(255),
  subject: z.enum(['sale', 'buy', 'rent', 'valuation', 'consultation', 'other'], { errorMap: () => ({ message: 'Palun vali teema.' }) }),
  message: z.string().trim().min(1, 'Palun kirjuta oma sõnum.').max(5000),
  website: z.string().max(0),
});