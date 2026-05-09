import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function StrengthsWeaknesses({ details }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid md:grid-cols-2 gap-4"
    >
      {/* Strengths */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-heading text-lg font-semibold">Strengths</h3>
        </div>
        <ul className="space-y-3">
          {details.strengths.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 + 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground/80">{s}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Growth Areas */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-accent" />
          </div>
          <h3 className="font-heading text-lg font-semibold">Growth Areas</h3>
        </div>
        <ul className="space-y-3">
          {details.weaknesses.map((w, i) => (
            <motion.li
              key={w}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 + 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-foreground/80">{w}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}