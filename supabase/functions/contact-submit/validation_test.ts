import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { contactSchema } from './validation.ts';

const valid = { name: 'Kontroll', email: 'test@example.com', phone: '', subject: 'sale', message: 'Kontrollsõnum' };

Deno.test('all six contact topics are accepted', () => {
  for (const subject of ['sale', 'buy', 'rent', 'valuation', 'consultation', 'other']) {
    assertEquals(contactSchema.safeParse({ ...valid, subject }).success, true);
  }
  assertEquals(contactSchema.safeParse({ ...valid, subject: 'unknown' }).success, false);
});
Deno.test('reject missing email and message', () => {
  assertEquals(contactSchema.safeParse({ ...valid, email: '' }).success, false);
  assertEquals(contactSchema.safeParse({ ...valid, message: '  ' }).success, false);
});
Deno.test('honeypot rejects automated submissions', () => {
  assertEquals(contactSchema.safeParse({ ...valid, website: 'spam' }).success, false);
});