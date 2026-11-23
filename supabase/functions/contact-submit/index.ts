import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { contactSchema } from './validation.ts';

const respond = (status: number, data: object) => new Response(JSON.stringify(data), {
  status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
});

// Public contact intake: no session is required and no submission can be read back by a visitor.
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return respond(405, { error: 'Meetod pole lubatud.' });
  try {
    const text = await req.text();
    if (text.length > 16000) return respond(413, { error: 'Sõnum on liiga pikk.' });
    let body: unknown;
    try { body = JSON.parse(text); } catch { return respond(400, { error: 'Vigane päring.' }); }
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return respond(400, { error: 'Palun kontrolli sisestatud andmeid.' });
    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond(503, { error: 'Sõnumi salvestamine pole hetkel saadaval.' });
    const client = createClient(url, key);
    const { website: _website, ...submission } = parsed.data;
    const { data, error } = await client.from('contact_submissions').insert(submission).select('id').single();
    if (error || !data) return respond(500, { error: 'Sõnumit ei õnnestunud salvestada. Palun proovi uuesti.' });
    return respond(201, { success: true, id: data.id });
  } catch {
    return respond(500, { error: 'Sõnumit ei õnnestunud salvestada. Palun proovi uuesti.' });
  }
});