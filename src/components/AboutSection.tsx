import { Shield, Leaf, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Pure",
    description: "No additives, no preservatives. Just pure, natural honey.",
  },
  {
    icon: Leaf,
    title: "Organic Source",
    description: "Harvested from pristine, pesticide-free environments.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully selected and tested for the highest standards.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Rich in antioxidants, vitamins, and natural enzymes.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                About Safa Honey
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Nature's Golden Treasure
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Safa Honey, we are dedicated to bringing you the purest honey from 
                Pakistan's most pristine regions. Our honey is carefully harvested using 
                traditional methods that preserve its natural goodness and nutritional value.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From the rare Sidr honey of Sindh to the wildflower varieties of the northern 
                highlands, each jar tells a story of nature's incredible bounty.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-honey flex items-center justify-center shadow-card">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-honey rounded-3xl transform rotate-3 opacity-20" />
            <div className="relative bg-card rounded-3xl p-8 shadow-premium space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-honey shadow-card">
                  <span className="text-4xl">🍯</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Why Choose Us?
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <span className="text-2xl">✓</span>
                  <span className="font-medium text-foreground">Lab Tested for Purity</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <span className="text-2xl">✓</span>
                  <span className="font-medium text-foreground">Direct from Beekeepers</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <span className="text-2xl">✓</span>
                  <span className="font-medium text-foreground">Ethically Sourced</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <span className="text-2xl">✓</span>
                  <span className="font-medium text-foreground">Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
