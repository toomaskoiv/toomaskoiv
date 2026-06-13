import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rivo",
      role: "Klient",
      content: "Kõik sujus laitmatult.",
      rating: 5,
    },
    {
      name: "Epp",
      role: "Müüja",
      content:
        "Koostöö Toomasega oli väga sujuv. Andsin Toomasele info ja võtmed ja juba varsti istusime notaris. Ma ei pidanud millegi pärast muretsema – ei piltide, võõraste kõnede, müügitekstide ega näitamisega. Aitäh, et müügiprotsessi nii mõnusaks tegite!",
      rating: 5,
    },
    {
      name: "Arne",
      role: "Klient",
      content:
        "Kokkulepped kehtisid. Kokkulepitud ajal kohal. Objekti hea tutvustus. Dokumendid ette valmistatud. Kiire notari aja broneering.",
      rating: 5,
    },
    {
      name: "Алексей",
      role: "Клиент",
      content: "Меня всё устроило.",
      rating: 5,
    },
    {
      name: "Margo",
      role: "Klient",
      content: "Ületas ootusi ning abistas mitmekülgselt.",
      rating: 5,
    },
    {
      name: "Олександр",
      role: "Клієнт",
      content: "Завжди відповідав на запитання і дзвінки.",
      rating: 5,
    },
    {
      name: "Svetlana",
      role: "Klient",
      content:
        "Väga hea maakler – kompetentne, abivalmis ja tunneb hästi oma tööd.",
      rating: 5,
    },
    {
      name: "Keit",
      role: "Klient",
      content:
        "Töö oli sujuv, info liikus, maakler mõtles aktiivselt kaasa ja pakkus lahendusi, viperusi ei esinenud.",
      rating: 5,
    },
    {
      name: "Алексей",
      role: "Клиент",
      content: "Скорость и качество.",
      rating: 5,
    },
    {
      name: "Marika",
      role: "Klient",
      content: "Meeldiv ja korrektne teenuse osutamine.",
      rating: 5,
    },
    {
      name: "Anna",
      role: "Ostja",
      content:
        "Tänu Toomasele leidsime endale uue kodu, mida poleks Toomase soovituseta osanud ise vaatamagi minna. Pea aastase koostöö vältel oli Toomasele hästi selgeks saanud, mida oma uue kodu puhul hindame, mistõttu julges ta meid veenda külastama korterit, mis asus meie esialgu valitud linnaosadest veidi väljas. Vaadatud korter oligi täpselt see, mida otsisime!",
      rating: 5,
    },
    {
      name: "Markkus",
      role: "Klient",
      content: "Hea, kerge suhelda ja otsekohene lähenemine.",
      rating: 5,
    },
    {
      name: "Eero",
      role: "Klient",
      content: "Kõik oli väga professionaalne ja kliendi huve arvestav.",
      rating: 5,
    },
    {
      name: "Kristel",
      role: "Klient",
      content:
        "Teenindus oli väga hea. Toomasega suhtlemine on lihtne ja meeldiv.",
      rating: 5,
    },
  ];

  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="tagasiside" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Tagasiside
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-6">
            Mida kliendid arvavad?
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Minu suurim tunnustus on rahulolev klient. Siin on mõned arvamused
            inimestelt, keda olen aidanud.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="px-4 md:px-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={`${testimonial.name}-${index}`}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <div className="bg-background rounded-2xl p-8 shadow-lg relative hover-lift h-full flex flex-col">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-1">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 md:-left-6 bg-background text-secondary" />
          <CarouselNext className="hidden md:flex -right-2 md:-right-6 bg-background text-secondary" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
