 import { MessageSquare, BrainCircuit, Bell } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Memorae",
    description: "Simply speak or type what you need to remember. Use natural language - no complex commands needed.",
    step: "01",
  },
  {
    icon: BrainCircuit,
    title: "AI Processes",
    description: "Our advanced AI understands context, extracts key details, and organizes everything intelligently.",
    step: "02",
  },
  {
    icon: Bell,
    title: "Get Reminded",
    description: "Receive timely reminders exactly when you need them, across all your devices.",
    step: "03",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to never forget anything again
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 relative z-10">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-6xl font-display font-bold text-muted-foreground/10">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
