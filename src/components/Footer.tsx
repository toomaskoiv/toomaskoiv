import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0" />
            <span className="font-display text-xl font-semibold text-secondary-foreground uppercase tracking-wide">TK | TOOMAS KÕIV</span>
          </div>

          <div className="flex items-center gap-6 text-secondary-foreground/70">
            <a href="#minust" className="hover:text-secondary-foreground transition-colors">Minust</a>
            <a href="#teenused" className="hover:text-secondary-foreground transition-colors">Teenused</a>
            <a href="#blogi" className="hover:text-secondary-foreground transition-colors">Blogi</a>
            <a href="#kontakt" className="hover:text-secondary-foreground transition-colors">Kontakt</a>
          </div>

          <div className="flex items-center gap-1 text-secondary-foreground/70">
            <span>Loodud</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>Uus Maa partner</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/50 text-sm">
          © 2026 Toomas Kõiv. Kõik õigused kaitstud.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
