import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mari Tamm",
      role: "Korteri müüja",
      content: "Suurepärane kogemus! Korter müüdi nädalaga ja hind oli isegi parem kui lootsime. Väga professionaalne ja sõbralik lähenemine.",
      rating: 5,
    },
    {
      name: "Andres Kask",
      role: "Esmaostja",
      content: "Esimese kodu ostmine tundus hirmutav, aga maakler tegi kogu protsessi lihtsaks. Selgitas kõike põhjalikult ja oli alati kättesaadav.",
      rating: 5,
    },
    {
      name: "Kristina Mägi",
      role: "Ärikinnisvara ostja",
      content: "Professionaalne lähenemine ja suurepärane turutundmine. Aitas leida ideaalse äripinna meie ettevõttele. Soovitan soojalt!",
      rating: 5,
    },
    {
      name: "Peeter Laur",
      role: "Üürileandja",
      content: "Kiire ja tõhus teenindus. Leidis usaldusväärsed üürnikud vähem kui nädalaga. Kogu paberimajandus oli korrektselt ajatud.",
      rating: 5,
    },
  ];

  return (
    <section id="tagasiside" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Tagasiside</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-6">
            Mida kliendid arvavad?
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Minu suurim tunnustus on rahulolev klient. Siin on mõned arvamused 
            inimestelt, keda olen aidanud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 shadow-lg relative hover-lift"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
