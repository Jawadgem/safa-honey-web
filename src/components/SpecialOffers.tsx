import { Gift, Truck } from "lucide-react";

export function SpecialOffers() {
  return (
    <section className="bg-honey-navy py-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="flex items-center gap-3 text-honey-cream">
            <div className="p-2 rounded-full bg-honey-cream/10">
              <Gift className="h-5 w-5" />
            </div>
            <p className="text-sm md:text-base font-medium">
              <span className="font-bold text-honey-gold">10% OFF</span> on all online orders
            </p>
          </div>
          <div className="hidden md:block w-px h-6 bg-honey-cream/20" />
          <div className="flex items-center gap-3 text-honey-cream">
            <div className="p-2 rounded-full bg-honey-cream/10">
              <Truck className="h-5 w-5" />
            </div>
            <p className="text-sm md:text-base font-medium">
              <span className="font-bold text-honey-gold">Free Delivery</span> on orders above PKR 5,000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
