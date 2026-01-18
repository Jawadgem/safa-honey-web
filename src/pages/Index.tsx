import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SpecialOffers } from "@/components/SpecialOffers";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { Product } from "@/components/ProductCard";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = useCallback((product: Product, size: string) => {
    const sizeKey = size as "1kg" | "500g" | "250g";
    
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          size,
          price: product.prices[sizeKey],
          quantity: 1,
        },
      ];
    });

    toast.success(`${product.name} (${size}) added to cart!`, {
      description: "Click the cart icon to view your items.",
    });
  }, []);

  const handleUpdateQuantity = useCallback(
    (id: string, size: string, delta: number) => {
      setCartItems((prev) =>
        prev
          .map((item) =>
            item.id === id && item.size === size
              ? { ...item, quantity: Math.max(0, item.quantity + delta) }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    },
    []
  );

  const handleRemoveItem = useCallback((id: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
    toast.info("Item removed from cart");
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="pt-16 md:pt-20">
        <Hero />
        <SpecialOffers />
        <ProductsSection onAddToCart={handleAddToCart} />
        <AboutSection />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
