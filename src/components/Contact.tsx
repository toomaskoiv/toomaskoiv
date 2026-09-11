import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
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
      value: "toomas.koiv@uusmaa.ee",
      href: "mailto:toomas.koiv@uusmaa.ee",
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
              Võtame ühendust!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kas Sul on küsimus kinnisvara kohta, plaanid oma kodu müüa või otsid uut? Võta minuga julgelt ühendust. Arutame Sinu olukorra läbi ja vaatame, milline võiks olla järgmine mõistlik samm.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold text-secondary">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="https://uusmaa.ee/toomas-koiv/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 w-5 h-5" />
                Vaata minu aktiivseid pakkumisi Uus Maa lehel
              </a>
            </Button>
          </div>

          {/* Right side - Contact form */}
          <div className="card-warm p-8">
            <h3 className="font-display text-2xl font-bold text-secondary mb-6">
              Saada sõnum
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Nimi
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Sinu nimi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="+372 XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="sinu@email.ee"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Teema
                </label>
                <select
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
                <label className="block text-sm font-medium text-secondary mb-2">
                  Sõnum
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Kirjelda oma soovi..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Saada sõnum
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
