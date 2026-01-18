import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Safa Honey" className="h-16 w-auto brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Premium Pakistani honey, harvested with care and delivered with love. 
              Experience the purity of nature in every drop.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                +92 300 1234567
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                info@safahoney.pk
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Lahore, Punjab, Pakistan
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Newsletter</h4>
            <p className="text-background/70 text-sm">
              Subscribe for exclusive offers and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 text-sm focus:outline-none focus:border-primary"
              />
              <Button variant="default" size="sm">
                Join
              </Button>
            </div>
            {/* Payment Methods */}
            <div className="pt-4">
              <p className="text-xs text-background/50 mb-2">We Accept</p>
              <div className="flex gap-2 text-background/40 text-xs">
                <span className="px-2 py-1 border border-background/20 rounded">VISA</span>
                <span className="px-2 py-1 border border-background/20 rounded">MC</span>
                <span className="px-2 py-1 border border-background/20 rounded">JazzCash</span>
                <span className="px-2 py-1 border border-background/20 rounded">COD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2026 Safa Honey. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
