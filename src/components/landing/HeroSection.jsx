import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, CheckCircle2, Clock3, Compass, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

const previewTraits = [
  { label: "Energy", value: "Introverted", width: "72%" },
  { label: "Focus", value: "Intuitive", width: "84%" },
  { label: "Decisions", value: "Feeling", width: "64%" },
  { label: "Lifestyle", value: "Perceiving", width: "78%" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-28 pb-14 md:pt-32 md:pb-20">
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.88fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 border border-border">
            <BrainCircuit className="w-4 h-4" />
            20-question personality profile
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] max-w-3xl">
            Soul Test
            <span className="block text-primary">for the way you actually think.</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Answer fast, get a readable profile, and see the habits, strengths, and blind spots that shape how you move through life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link to="/quiz">
              <Button size="lg" className="w-full sm:w-auto text-base px-7 py-6 rounded-full group shadow-lg shadow-primary/20">
                Take the Test
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/types">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-7 py-6 rounded-full">
                Explore Types
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
            {[
              [Clock3, "5 min"],
              [CheckCircle2, "20 prompts"],
              [Fingerprint, "16 results"],
            ].map(([Icon, label]) => (
              <div key={label} className="rounded-lg border border-border bg-card px-3 py-3">
                <Icon className="w-4 h-4 text-primary mb-2" />
                <div className="text-sm font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl border border-border bg-card shadow-xl shadow-primary/5 p-5 md:p-6"
        >
          <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
            <div>
              <div className="text-sm text-muted-foreground">Sample result</div>
              <h2 className="font-heading text-3xl font-bold mt-1">INFP</h2>
              <p className="text-sm text-muted-foreground mt-1">The Mediator - reflective, imaginative, values-led.</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Compass className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {previewTraits.map((trait) => (
              <div key={trait.label}>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium">{trait.label}</span>
                  <span className="text-muted-foreground">{trait.value}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: trait.width }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-secondary p-4">
              <div className="text-xs text-muted-foreground">Strength</div>
              <div className="mt-1 font-semibold">Reads people deeply</div>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <div className="text-xs text-muted-foreground">Growth edge</div>
              <div className="mt-1 font-semibold">Overthinks choices</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
