import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  image: string;
  prices: {
    "1kg": number;
    "500g": number;
    "250g": number;
  };
  categories: ("Premium" | "Most Popular" | "Rare" | "Standard")[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<"1kg" | "500g" | "250g">("500g");

  const sizes: ("1kg" | "500g" | "250g")[] = ["1kg", "500g", "250g"];

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "Premium":
        return "premium";
      case "Most Popular":
        return "popular";
      case "Rare":
        return "rare";
      default:
        return "secondary";
    }
  };

  const displayCategories = product.categories.filter(c => c !== "Standard");

  return (
    <div className="group relative bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden">
      {/* Badges */}
      {displayCategories.length > 0 && (
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          {displayCategories.map((category) => (
            <Badge key={category} variant={getBadgeVariant(category) as any}>
              {category}
            </Badge>
          ))}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-b from-secondary/50 to-secondary/20 p-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {product.name}
        </h3>

        {/* Size Selector */}
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border-2 transition-all duration-200 ${
                selectedSize === size
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 text-muted-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-2xl font-bold text-foreground">
              PKR {product.prices[selectedSize].toLocaleString()}
            </p>
          </div>
          <Button
            variant="cart"
            size="sm"
            onClick={() => onAddToCart(product, selectedSize)}
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
