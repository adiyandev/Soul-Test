import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

export default function CareerFamous({ details }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Careers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-6 md:p-8"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-chart-3/15 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-chart-3" />
          </div>
          <h3 className="font-heading text-lg font-semibold">Ideal Careers</h3>
        </div>
        <ul className="space-y-3">
          {details.career.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 + 0.3 }}
              className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0"
            >
              <div className="w-6 h-6 rounded-full bg-chart-3/10 flex items-center justify-center shrink-0">
                <span className="text-chart-3 text-xs font-bold">{i + 1}</span>
              </div>
              <span className="text-sm text-foreground/80">{c}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Famous People */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-2xl p-6 md:p-8"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-chart-4/15 flex items-center justify-center">
            <Users className="w-4 h-4 text-chart-4" />
          </div>
          <h3 className="font-heading text-lg font-semibold">Famous {details.title}s</h3>
        </div>
        <ul className="space-y-3">
          {details.famousPeople.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 + 0.3 }}
              className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chart-4/20 to-chart-4/40 flex items-center justify-center shrink-0">
                <span className="text-chart-4 text-xs font-bold">{p[0]}</span>
              </div>
              <span className="text-sm text-foreground/80">{p}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}