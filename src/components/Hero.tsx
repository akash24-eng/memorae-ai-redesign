 import { Button } from "@/components/ui/button";
import { Star, Play, CheckCircle2 } from "lucide-react";
 import mascot from "@/assets/mascot.png";
import sphere from "@/assets/sphere-decoration.png";



export const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
        <img
          src={sphere}
          alt=""
          className="absolute top-1/4 right-1/4 w-16 h-16 opacity-40 animate-float-slow"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20">
        {/* Rating Badge */}
        <div className="mb-8 flex items-center gap-3 glass-card px-5 py-3 rounded-full backdrop-blur-xl border border-white/20 shadow-xl animate-fade-in">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-bold text-foreground">4.8</span>
          <div className="w-px h-4 bg-foreground/20"></div>
          <span className="text-sm font-medium text-foreground/80">60k+ users</span>
        </div>

        {/* Mascot with glow effect */}
        <div className="relative mb-10 animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl"></div>
          <img
            src={mascot}
            alt="Memorae AI Assistant"
            className="w-40 h-40 relative z-10"
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white text-center max-w-6xl leading-[1.1] mb-6">
          Never Forget
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
            What Matters
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mb-12 font-medium leading-relaxed">
          Your intelligent AI companion that remembers everything—tasks, meetings, ideas—so you can focus on what truly matters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            Get Started Free
            <CheckCircle2 className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-10 py-7 rounded-full bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Free forever plan</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Setup in 60 seconds</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
