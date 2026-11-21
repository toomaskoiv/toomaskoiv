import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kaasaegne kodu interjöör"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span>Elamus Kinnisvara</span>
          </div>

          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Toomas Kõiv{" "}
            <span className="text-primary">– Sinu kinnisvaramaakler Tallinnas ja Harjumaal</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Aitan Sul müüa, osta ja üürida kinnisvara läbimõeldult ja personaalselt.
            Minu jaoks ei ole kinnisvaratehing lihtsalt number – oluline on leida lahendus,
            millega klient saab päriselt rahul olla.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="https://elamuskv.ee/kuulutused/" target="_blank" rel="noopener noreferrer">
                Soovin müüa
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="#kontakt">
                Võta ühendust
              </a>
            </Button>
          </div>

          <div 
            className="mt-12 flex items-center gap-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-secondary">2023</div>
              <div className="text-sm text-muted-foreground">alates maaklerina</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-secondary">100+</div>
              <div className="text-sm text-muted-foreground">inimest kinnisvarateemadel aidatud</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-secondary">15+</div>
              <div className="text-sm text-muted-foreground">aastat juhtimiskogemust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
