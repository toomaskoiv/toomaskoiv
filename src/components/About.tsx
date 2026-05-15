import { Award, Heart, Users, Shield } from "lucide-react";
import profileImage from "@/assets/toomas-koiv.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Personaalne lähenemine",
      description: "Iga klient on minu jaoks oluline. Kuulan teie soove ja leian parima lahenduse.",
    },
    {
      icon: Shield,
      title: "Usaldusväärne partner",
      description: "Aus ja läbipaistev suhtlus kogu tehingu vältel. Teie huvid on alati esiplaanil.",
    },
    {
      icon: Award,
      title: "Professionaalsus",
      description: "Pikaajaline kogemus ja põhjalik turutundmine tagavad parima tulemuse.",
    },
    {
      icon: Users,
      title: "Uus Maa meeskond",
      description: "Olen osa Eesti suurimast kinnisvarabüroost, mis tagab laia võrgustiku ja võimalused.",
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
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-xl">
              <div className="font-display text-4xl font-bold text-primary-foreground">2,5</div>
              <div className="text-primary-foreground/80">aastat maaklerina</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Minust</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2 mb-6">
              Toomas Koiv
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tere! Olen kinnisvaramaakler juba 2,5 aastat ning toon sellesse töösse
              kaasa pikaajalise tootmisettevõtte juhtimise tausta. Just sealt on pärit
              minu oskus inimesi kuulata, protsesse hallata ja keerulisi olukordi
              lahendada — omadused, mis kinnisvaratehingus on hindamatud.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Töötan Uus Maa meeskonnas, ühes Eesti tunnustatumas kinnisvarabüroos.
              See annab mulle juurdepääsu laiale võrgustikule ja parimatele turuandmetele,
              et iga tehing — olgu see müük, ost või üür — sujuks teie jaoks
              võimalikult mugavalt ja tulemuslikult.
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
