import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-honey-cream/90 text-sm md:text-base font-medium tracking-widest uppercase">
              100% Pure & Natural
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-honey-cream leading-tight">
              Pure. Rare.{" "}
              <span className="text-gradient-honey">Safa Honey.</span>
            </h1>
            <p className="text-honey-cream/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Experience the finest selection of premium Pakistani honey, 
              harvested from nature's purest sources with care and tradition.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#products">Shop Now</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-honey-cream/70">
              <div className="w-10 h-10 rounded-full bg-honey-cream/10 flex items-center justify-center">
                <span className="text-lg">🍯</span>
              </div>
              <span className="text-sm">100% Natural</span>
            </div>
            <div className="flex items-center gap-2 text-honey-cream/70">
              <div className="w-10 h-10 rounded-full bg-honey-cream/10 flex items-center justify-center">
                <span className="text-lg">🌿</span>
              </div>
              <span className="text-sm">Organic</span>
            </div>
            <div className="flex items-center gap-2 text-honey-cream/70">
              <div className="w-10 h-10 rounded-full bg-honey-cream/10 flex items-center justify-center">
                <span className="text-lg">🇵🇰</span>
              </div>
              <span className="text-sm">Made in Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
