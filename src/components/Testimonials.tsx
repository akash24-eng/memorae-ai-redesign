  import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "Memorae has completely transformed how I manage my work. I never miss a deadline anymore, and the AI suggestions are incredibly accurate.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Entrepreneur",
    content: "Running multiple businesses means juggling countless tasks. Memorae keeps everything organized without any effort on my part. It's like having a personal assistant.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Graduate Student",
    content: "Between classes, research, and part-time work, life was chaotic. Memorae helps me stay on top of everything with minimal mental overhead.",
    rating: 5,
    avatar: "EW",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our users are saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
