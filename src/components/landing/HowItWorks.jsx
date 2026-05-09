import { motion } from "framer-motion";
import { Brain, ClipboardList, Fingerprint } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Answer Honestly",
    description: "Respond to 20 carefully crafted statements. There are no right or wrong answers - just be yourself.",
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
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-secondary/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold">What you get</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A quick test that turns your answers into a profile you can actually recognize.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
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
