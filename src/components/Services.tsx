import { Home, Key, Building2, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Kinnisvara müük",
      description: "Aitan teil kinnisvara müüa parima võimaliku hinnaga. Professionaalne turundus, kvaliteetsed fotod ja laialdane reklaam tagavad kiire ja kasuliku tehingu.",
      features: ["Tasuta turuväärtuse hindamine", "Professionaalne fotosessioon", "Reklaam kõikides kanalites", "Läbirääkimised teie eest"],
      color: "primary",
    },
    {
      icon: Key,
      title: "Kinnisvara ost",
      description: "Leian teie jaoks sobiva kodu või äripinna. Tunnen turgu põhjalikult ja tean, millised on parimad pakkumised.",
      features: ["Vajadustele vastav otsing", "Peidetud pakkumiste leidmine", "Hindade analüüs", "Tehingu tugi"],
      color: "secondary",
    },
    {
      icon: Building2,
      title: "Üüriteenus",
      description: "Aitan leida sobiva üüripinna või leida teie kinnisvarale usaldusväärsed üürnikud.",
      features: ["Üürnike taustakontroll", "Lepingute koostamine", "Üüripinna haldus", "Probleemide lahendamine"],
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "Konsultatsioon",
      description: "Plaanid kinnisvaraga tehinguid või vajad lihtsalt mõtlemiseks kaaslast? Võime vabalt arutada – kui vaja, leian ka õiged spetsialistid ja kontaktid, et saaksid kindlalt edasi minna.",
      features: ["Vaba arutelu sinu olukorrast", "Parimate sammude planeerimine", "Õigete kontaktide leidmine", "Isiklik ja kohandatud lähenemine"],
      color: "secondary",
    },
  ];

  return (
    <section id="teenused" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Teenused</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2 mb-6">
            Kuidas saan teid aidata?
          </h2>
          <p className="text-muted-foreground text-lg">
            Pakun täisteenust kõigis kinnisvaraküsimustes. Olenemata sellest, kas soovite 
            osta, müüa, üürida või vajate lihtsalt nõu – olen teie jaoks olemas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-warm p-8 hover-lift group ${
                service.color === "primary" ? "hover:border-primary/50" : "hover:border-secondary/50"
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                service.color === "primary" 
                  ? "bg-primary/10 group-hover:bg-primary" 
                  : "bg-secondary/10 group-hover:bg-secondary"
              }`}>
                <service.icon className={`w-8 h-8 transition-colors ${
                  service.color === "primary"
                    ? "text-primary group-hover:text-primary-foreground"
                    : "text-secondary group-hover:text-secondary-foreground"
                }`} />
              </div>

              <h3 className="font-display text-2xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      service.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                className={`p-0 font-semibold ${
                  service.color === "primary" 
                    ? "text-primary hover:text-primary/80" 
                    : "text-secondary hover:text-secondary/80"
                }`}
              >
                Loe rohkem
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
