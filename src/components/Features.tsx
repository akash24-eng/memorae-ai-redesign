 import { Brain, Calendar, Zap, Shield, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced AI learns your patterns and suggests reminders before you even think about them.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Seamlessly integrates with your calendar and automatically organizes your day.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant sync across all devices. Your memories are always at your fingertips.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "End-to-end encryption ensures your personal data stays completely private.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share reminders and tasks with family, friends, or colleagues effortlessly.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Natural Language",
    description: "Just talk naturally. Memorae understands context and creates reminders automatically.",
    color: "from-pink-500 to-rose-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Powerful Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Effortless Organization
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay organized, productive, and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
