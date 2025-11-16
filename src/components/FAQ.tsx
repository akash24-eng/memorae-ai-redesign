import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Memorae's AI work?",
    answer:
      "Memorae uses advanced natural language processing to understand your reminders in context. It analyzes your input, extracts key information like dates, times, and priorities, and organizes everything intelligently. The AI learns from your patterns over time to provide increasingly accurate suggestions and reminders.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. We use end-to-end encryption for all your data, meaning only you can access your reminders and tasks. We never sell your data to third parties, and all information is stored securely in compliance with GDPR and other privacy regulations. You can delete your data at any time.",
  },
  {
    question: "What platforms does Memorae support?",
    answer:
      "Memorae works seamlessly across all platforms including iOS, Android, Web, and Desktop (Mac and Windows). Your data syncs instantly across all devices, so you can access your reminders anywhere. We also integrate with popular tools like Google Calendar, Outlook, Slack, and more.",
  },
  {
    question: "Can I use Memorae for free?",
    answer:
      "Yes! Our free plan includes up to 50 reminders, basic AI features, and access on all platforms. It's perfect for personal use. You can upgrade to Pro or Business plans anytime for unlimited reminders, advanced AI features, and team collaboration tools.",
  },
  {
    question: "How does the team collaboration work?",
    answer:
      "With our Business plan, you can create shared spaces where team members can collaborate on tasks and reminders. Assign tasks to team members, set up recurring team reminders, and track progress through our admin dashboard. It's perfect for small teams and enterprises alike.",
  },
  {
    question: "Can I import my existing reminders?",
    answer:
      "Yes, we support imports from most major reminder and task management apps including Apple Reminders, Google Tasks, Todoist, and more. Simply go to Settings > Import Data and follow the wizard. Your existing reminders will be organized and enhanced by our AI.",
  },
  {
    question: "What if I need to cancel my subscription?",
    answer:
      "You can cancel your subscription at any time with no questions asked. You'll continue to have access to your paid features until the end of your billing period. After cancellation, you'll automatically move to our free plan, and all your data remains intact.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days of your subscription, contact our support team for a full refund. We also provide a free trial so you can test all features before committing.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Memorae
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl px-6 bg-card hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="text-primary font-semibold hover:underline"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};
