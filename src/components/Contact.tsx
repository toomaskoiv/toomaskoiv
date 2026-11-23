import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema } from "@/lib/contact-validation";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      setStatus({ kind: 'error', text: parsed.error.issues[0]?.message ?? 'Palun kontrolli sisestatud andmeid.' });
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      const { data, error } = await supabase.functions.invoke('contact-submit', { body: parsed.data });
      if (error || !data?.success) throw new Error('submission failed');
      setStatus({ kind: 'success', text: 'Aitäh! Sinu sõnum on vastu võetud.' });
      form.reset();
    } catch {
      setStatus({ kind: 'error', text: 'Sõnumit ei õnnestunud saata. Palun proovi uuesti või kirjuta toomas.koiv@elamuskv.ee.' });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+372 509 6664",
      href: "tel:+3725096664",
    },
    {
      icon: Mail,
      label: "E-post",
      value: "toomas.koiv@elamuskv.ee",
      href: "mailto:toomas.koiv@elamuskv.ee",
    },
    {
      icon: MapPin,
      label: "Asukoht",
      value: "Tallinn ja Harjumaa",
      href: "#",
    },
    {
      icon: Clock,
      label: "Kättesaadavus",
      value: "Kokkuleppel ka õhtuti ja nädalavahetustel",
      href: "#",
    },
  ];

  return (
    <section id="kontakt" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Contact info */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Kontakt</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2 mb-6">
              Võta ühendust!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kas Sul on küsimus kinnisvara kohta, plaanid oma kodu müüa või otsid uut? Võta minuga julgelt ühendust. Arutame Sinu olukorra läbi ja vaatame, milline võiks olla järgmine mõistlik samm.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-xl bg-muted/50 p-4 transition-colors hover:bg-primary/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <item.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="break-words text-sm font-semibold text-secondary">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Button 
              size="lg"
              className="h-auto whitespace-normal bg-primary py-3 text-center font-semibold text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="https://elamuskv.ee/kuulutused/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 w-5 h-5" />
                Vaata minu aktiivseid pakkumisi Elamus Kinnisvara lehel
              </a>
            </Button>
          </div>

          {/* Right side - Contact form */}
          <div className="card-warm p-8">
            <h3 className="font-display text-2xl font-bold text-secondary mb-6">
              Saada sõnum
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit} aria-busy={submitting}>
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-secondary mb-2">
                    Nimi
                  </label>
                  <input
                    type="text"
                    id="contact-name" name="name" required maxLength={100} autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Sinu nimi"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-secondary mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="contact-phone" name="phone" maxLength={40} autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="+372 XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-secondary mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="contact-email" name="email" required maxLength={255} autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="sinu@email.ee"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-secondary mb-2">
                  Teema
                </label>
                <select
                  id="contact-subject" name="subject" required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                >
                  <option value="">Vali teema</option>
                  <option value="sale">Kinnisvara müük</option>
                  <option value="buy">Kinnisvara ost</option>
                  <option value="rent">Üüriteenus</option>
                  <option value="valuation">Kinnisvara hind</option>
                  <option value="consultation">Konsultatsioon</option>
                  <option value="other">Muu küsimus</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-secondary mb-2">
                  Sõnum
                </label>
                <textarea
                  id="contact-message" name="message" required maxLength={5000}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Kirjelda oma soovi..."
                />
              </div>

              <Button 
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                {submitting ? 'Saadan…' : 'Saada sõnum'}
              </Button>
              {status && <p role={status.kind === 'error' ? 'alert' : 'status'} className={status.kind === 'error' ? 'text-sm text-destructive' : 'text-sm text-secondary'}>{status.text}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
