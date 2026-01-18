import { ProductCard, Product } from "./ProductCard";

import sidrHoney from "@/assets/products/sidr-honey.jpg";
import acaciaHoney from "@/assets/products/acacia-honey.jpg";
import wildflowerHoney from "@/assets/products/wildflower-honey.jpg";
import cloverHoney from "@/assets/products/clover-honey.jpg";
import buckwheatHoney from "@/assets/products/buckwheat-honey.jpg";
import orangeBlossomHoney from "@/assets/products/orange-blossom-honey.jpg";
import ajwainHoney from "@/assets/products/ajwain-honey.jpg";
import organicRawHoney from "@/assets/products/organic-raw-honey.jpg";

const products: Product[] = [
  {
    id: "sidr-honey",
    name: "Sidr Honey",
    image: sidrHoney,
    prices: { "1kg": 6000, "500g": 3500, "250g": 2000 },
    categories: ["Premium", "Most Popular"],
  },
  {
    id: "wildflower-honey",
    name: "Wildflower Honey",
    image: wildflowerHoney,
    prices: { "1kg": 7500, "500g": 4000, "250g": 2200 },
    categories: ["Rare", "Most Popular"],
  },
  {
    id: "organic-raw-honey",
    name: "Organic / Raw Honey",
    image: organicRawHoney,
    prices: { "1kg": 6000, "500g": 3500, "250g": 2000 },
    categories: ["Premium", "Most Popular"],
  },
  {
    id: "ajwain-honey",
    name: "Ajwain Specialty Honey",
    image: ajwainHoney,
    prices: { "1kg": 5000, "500g": 2800, "250g": 1600 },
    categories: ["Premium"],
  },
  {
    id: "acacia-honey",
    name: "Acacia Honey",
    image: acaciaHoney,
    prices: { "1kg": 3500, "500g": 2000, "250g": 1200 },
    categories: ["Standard"],
  },
  {
    id: "clover-honey",
    name: "Clover Honey",
    image: cloverHoney,
    prices: { "1kg": 4000, "500g": 2200, "250g": 1200 },
    categories: ["Standard"],
  },
  {
    id: "buckwheat-honey",
    name: "Buckwheat Honey",
    image: buckwheatHoney,
    prices: { "1kg": 4000, "500g": 2200, "250g": 1200 },
    categories: ["Standard"],
  },
  {
    id: "orange-blossom-honey",
    name: "Orange Blossom Honey",
    image: orangeBlossomHoney,
    prices: { "1kg": 4000, "500g": 2200, "250g": 1200 },
    categories: ["Standard"],
  },
];

interface ProductsSectionProps {
  onAddToCart: (product: Product, size: string) => void;
}

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Premium Honey Selection
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of pure, natural honey varieties sourced from the finest apiaries across Pakistan.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
