import { Home, Key, Building2, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Kinnisvara müük",
      description: "Aitan Sul oma kinnisvara müüa läbimõeldult ja parima võimaliku tulemuse nimel. Paneme paika õige hinnastrateegia, valmistame objekti müügiks ette ja hoolitsen selle eest, et Sinu kinnisvara jõuaks õigete inimesteni.",
      features: [
        "Tasuta turuväärtuse hinnang",
        "Müügistrateegia ja õige hinnastamine",
        "Professionaalsed fotod ja kuulutuse koostamine",
        "Reklaam kinnisvaraportaalides ja sotsiaalmeedias",
        "Huvilistega suhtlemine ja objektide näitamine",
        "Läbirääkimised Sinu huvides",
        "Tehingu saatmine algusest lõpuni",
      ],
      color: "primary",
    },
    {
      icon: Key,
      title: "Kinnisvara ost",
      description: "Aitan Sul leida kodu või investeerimisobjekti, mis vastab Sinu vajadustele ja võimalustele. Aitan võrrelda pakkumisi, hinnata objekti tegelikku väärtust ja märgata ka neid võimalusi, mida avalikest portaalidest kohe ei leia.",
      features: [
        "Vajadustele vastavate objektide otsing",
        "Sobivate pakkumiste võrdlemine",
        "Hinna ja turuväärtuse analüüs",
        "Objekti tausta ja dokumentide esmane kontroll",
        "Läbirääkimised müüjaga",
        "Tehingu korraldamine ja tugi lõpuni",
      ],
      color: "secondary",
    },
    {
      icon: Building2,
      title: "Üüriteenus",
      description: "Aitan leida Sinu kinnisvarale sobiva üürniku ja korraldada kogu üüriprotsessi. Eesmärk on leida hea üürnik ning teha protsess võimalikult lihtsaks ja turvaliseks.",
      features: [
        "Üürniku taustakontroll",
        "Üürikuulutuse koostamine ja turundus",
        "Huvilistega suhtlemine ja näitamised",
        "Üürilepingu koostamine",
        "Üüriprotsessi korraldamine",
        "Vajadusel abi probleemide lahendamisel",
      ],
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "Konsultatsioon",
      description: "Ei ole veel kindel, kas müüa, osta või oodata? Räägime läbi. Kui Sul on kinnisvaraga seotud küsimus või plaan, mida tahad enne otsustamist kellegagi läbi arutada, olen hea meelega abiks. Vajadusel aitan leida ka õige spetsialisti – näiteks hindaja, juristi, finantseerija või muu valdkonna eksperdi.",
      features: [],
      color: "secondary",
    },
  ];

  return (
    <section id="teenused" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Teenused</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2 mb-6">
            Kuidas saan Sind kinnisvaraasjades aidata?
          </h2>
          <p className="text-muted-foreground text-lg">
            Olen abiks kinnisvara müügil, ostmisel ja üürimisel ning annan nõu ka siis, kui alles kaalud oma järgmisi samme. Kui Sa ei ole veel kindel, mida teha, võime lihtsalt rääkida – esimene konsultatsioon on tasuta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-warm p-8 hover-lift group flex h-full flex-col ${
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

              {service.features.length > 0 && (
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
              )}

              <Button
                variant="ghost" 
                className={`mt-auto w-fit p-0 font-semibold ${
                  service.color === "primary" 
                    ? "text-primary hover:text-primary/80" 
                    : "text-secondary hover:text-secondary/80"
                }`}
                asChild
              >
                <a href="#kontakt">
                  Loe rohkem
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
