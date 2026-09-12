import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import pricingApartment from "../assets/blog-pricing-apartment.jpg";
import tallinnMarket from "../assets/blog-tallinn-market.jpg";
import sellingMistakes from "../assets/blog-selling-mistakes.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Kuidas määrata korterile õige müügihind? 7 asja, mida omanik peaks teadma",
      excerpt: "Mida tasub enne müügihinna määramist arvesse võtta ja kuidas vältida levinumaid hinnastamisvigu?",
      date: "September 2026",
      category: "Müügi nõuanded",
      image: pricingApartment,
      imageAlt: "Valgusküllane müügiks ette valmistatud Tallinna korter",
    },
    {
      title: "Kas praegu on õige aeg Tallinnas kinnisvara müüa?",
      excerpt: "Millised turuolukorra märgid aitavad otsustada, kas müügiga alustada praegu või veel oodata?",
      date: "September 2026",
      category: "Turu analüüs",
      image: tallinnMarket,
      imageAlt: "Vaade Tallinna kortermajadele kaasaegselt rõdult",
    },
    {
      title: "5 põhjust, miks korter müügis ei lähe",
      excerpt: "Levinumad põhjused, mis võivad müüki pidurdada, ning küsimused, mida tasub oma müügiplaani juures üle vaadata.",
      date: "September 2026",
      category: "Müügi nõuanded",
      image: sellingMistakes,
      imageAlt: "Korrastatud korter, mis on valmis ostuhuviliste vastuvõtuks",
    },
  ];

  return (
    <section id="blogi" className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Blogi</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2">
              Kinnisvaraalased nõuanded
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Praktilised mõtted ja nõuanded kinnisvara müügi, ostu ja turu kohta.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground self-start md:self-auto"
          >
            Vaata kõiki nõuandeid
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="card-warm overflow-hidden group cursor-pointer hover-lift flex h-full flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
