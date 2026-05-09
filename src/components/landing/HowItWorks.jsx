import { motion } from "framer-motion";
import { ClipboardList, Brain, Fingerprint } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Answer Honestly",
    description: "Respond to 20 carefully crafted statements. There are no right or wrong answers — just be yourself.",
  },
  {
    icon: Brain,
    title: "Get Analyzed",
    description: "Your responses are mapped across four key personality dimensions to determine your unique type.",
  },
  {
    icon: Fingerprint,
    title: "Discover Your Type",
    description: "Receive a detailed profile with your strengths, growth areas, ideal careers, and famous matches.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold">How It Works</h2>
          <p className="mt-4 text-muted-foreground text-lg">Three simple steps to self-discovery.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 md:right-auto md:left-[calc(50%+24px)] w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}