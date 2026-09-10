import { Award, Heart, Users, Shield } from "lucide-react";
import profileImage from "@/assets/toomas-koiv.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Personaalne lähenemine",
      description: "Iga müüja, ostja ja kinnisvara on erinev. Kuulan ära sinu eesmärgi ja paneme koos paika kõige mõistlikuma lahenduse.",
    },
    {
      icon: Shield,
      title: "Aus suhtlus",
      description: "Räägin asjadest otse ja annan ka siis ausa hinnangu, kui see ei ole kõige mugavam vastus.",
    },
    {
      icon: Award,
      title: "15+ aastat juhtimiskogemust",
      description: "Pikaajaline kogemus tootmisettevõtete juhtimises on õpetanud mind vastutama, lahendusi leidma ja kokkulepetest kinni pidama.",
    },
    {
      icon: Users,
      title: "Uus Maa",
      description: "Töötan Uus Maa Kadrioru meeskonnas, kus saan kasutada tugeva kinnisvarabüroo teadmisi, kontakte ja võimalusi.",
    },
  ];

  return (
    <section id="minust" className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Avatar side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={profileImage} 
                alt="Toomas Koiv - Kinnisvaramaakler"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-xl text-center">
              <div className="font-display text-4xl font-bold text-primary-foreground">2023</div>
              <div className="text-primary-foreground/80">alates maaklerina</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Minust</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2 mb-6">
              Toomas Kõiv
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Olen kinnisvaramaakler alates 2023. aastast ja töötan Uus Maa Kadrioru meeskonnas. Tegutsen peamiselt Tallinnas ja Harjumaal ning aitan klientidel kinnisvara müüa, osta ja üürida.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Enne kinnisvarasse tulekut töötasin aastaid tootmisettevõtetes ning mul on üle 15 aasta juhtimiskogemust. See taust on õpetanud mulle vastutust võtma, inimestega arvestama, keerulisi olukordi lahendama ja asju lõpuni viima.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kinnisvaras pean kõige olulisemaks usaldust ja head suhtlust. Iga inimene ja tema olukord on erinev ning seetõttu ei usu ma ka ühe lahenduse sobivusse kõigile. Kuulan ära, räägin asjad ausalt läbi ja otsin koos kliendiga lahenduse, mis päriselt töötab.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Minu eesmärk on, et klient tunneks kogu protsessi vältel, et tema asjad on heades kätes — alates esimesest kohtumisest kuni tehingu lõpuni.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kui sul on kinnisvaraga seoses mõni küsimus või plaan, räägime. Ka siis, kui sa ei ole veel otsustanud, mida täpselt teha.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="flex gap-4 opacity-0 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
