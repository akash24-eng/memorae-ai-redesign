import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-accent to-accent shadow-lg"></div>
          <span className="text-2xl font-display font-bold text-white">memorae</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/90 hover:text-white transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors font-medium">
            How It Works
          </a>
          <a href="#testimonials" className="text-white/90 hover:text-white transition-colors font-medium">
            Testimonials
          </a>
          <a href="#pricing" className="text-white/90 hover:text-white transition-colors font-medium">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex text-white hover:bg-white/10"
          >
            Sign In
          </Button>
          <Button 
            variant="secondary" 
            className="rounded-full font-semibold shadow-lg"
          >
            Get Started
          </Button>
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-foreground/95 backdrop-blur-lg border-b border-white/10 py-4">
          <div className="flex flex-col gap-4 px-6">
            <a href="#features" className="text-white/90 hover:text-white transition-colors font-medium py-2">
              Features
            </a>
            <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors font-medium py-2">
              How It Works
            </a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors font-medium py-2">
              Testimonials
            </a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors font-medium py-2">
              Pricing
            </a>
            <a href="#signin" className="text-white/90 hover:text-white transition-colors font-medium py-2">
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
