 import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Free forever plan available",
  "No credit card required",
  "Setup in under 60 seconds",
  "Cancel anytime",
];

export const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Ready to Never
          <br />
          Forget Again?
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join over 60,000 users who've transformed how they manage their memories and tasks
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-white/90 justify-center sm:justify-start">
              <Check className="w-5 h-5 text-white" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
