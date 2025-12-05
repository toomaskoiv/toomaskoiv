import { ArrowRight, Star } from "lucide-react";
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
          <div className="flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">100+ rahulolev klient</span>
          </div>

          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Teie usaldusväärne partner{" "}
            <span className="text-primary">kinnisvaratehingutes</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Olen kogenud kinnisvaramaakler Uus Maa meeskonnas. Aitan teil leida 
            unistuste kodu või müüa teie kinnisvara parima hinnaga. Professionaalne 
            teenindus ja personaalne lähenemine igas tehingus.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Võta ühendust
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="https://uusmaa.ee/toomas-koiv/" target="_blank" rel="noopener noreferrer">
                Vaata pakkumisi
              </a>
            </Button>
          </div>

          <div 
            className="mt-12 flex items-center gap-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-secondary">10+</div>
              <div className="text-sm text-muted-foreground">aastat kogemust</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm text-muted-foreground">tehingut</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">rahulolu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
