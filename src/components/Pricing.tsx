 import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 50 reminders",
      "Basic AI suggestions",
      "Mobile & web access",
      "Email notifications",
      "7-day history",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "Most popular for individuals",
    monthlyPrice: 12,
    yearlyPrice: 120,
    features: [
      "Unlimited reminders",
      "Advanced AI intelligence",
      "Voice commands",
      "Calendar integration",
      "Unlimited history",
      "Priority support",
      "Custom categories",
      "Smart scheduling",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "For teams and organizations",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "Advanced analytics",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SSO & security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your needs
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-muted rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isYearly
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary bg-gradient-to-b from-primary/5 to-background shadow-xl scale-105"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-display font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && plan.yearlyPrice > 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      ${(plan.yearlyPrice / 12).toFixed(2)} per month
                    </p>
                  )}
                </div>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full rounded-full font-semibold mb-8 ${
                    plan.popular && "shadow-lg hover:shadow-xl"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          All plans include a 14-day free trial. No credit card required to start.
          Cancel anytime with no questions asked.
        </p>
      </div>
    </section>
  );
};
