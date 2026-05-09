import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Star, AlertTriangle, Users } from "lucide-react";

export default function ResultCard({ details, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="text-7xl md:text-8xl mb-4"
        >
          {details.emoji}
        </motion.div>
        <div className="font-mono text-xl text-primary font-bold tracking-[0.3em]">{type}</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2">{details.title}</h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto italic">
          "{details.tagline}"
        </p>
      </div>

      {/* Description */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          {details.description}
        </p>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-lg font-semibold">Strengths</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {details.strengths.map((s) => (
              <Badge key={s} variant="secondary" className="bg-primary/10 text-primary border-0 px-3 py-1">
                {s}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <h3 className="font-heading text-lg font-semibold">Growth Areas</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {details.weaknesses.map((w) => (
              <Badge key={w} variant="secondary" className="bg-accent/10 text-accent border-0 px-3 py-1">
                {w}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Career & Famous */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-chart-3" />
            <h3 className="font-heading text-lg font-semibold">Ideal Careers</h3>
          </div>
          <ul className="space-y-2">
            {details.career.map((c) => (
              <li key={c} className="flex items-center gap-2 text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-chart-3" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-chart-4" />
            <h3 className="font-heading text-lg font-semibold">Famous People</h3>
          </div>
          <ul className="space-y-2">
            {details.famousPeople.map((p) => (
              <li key={p} className="flex items-center gap-2 text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-chart-4" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}