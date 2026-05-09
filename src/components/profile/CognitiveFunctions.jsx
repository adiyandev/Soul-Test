import { motion } from "framer-motion";
import { cognitiveFunctions } from "@/lib/personalityExtended";

const functionData = [
  {
    key: "dominant",
    label: "Dominant",
    description: "Your primary mental process — the function you rely on most.",
    strength: 100,
    color: "bg-primary text-primary-foreground",
    barColor: "bg-primary",
  },
  {
    key: "auxiliary",
    label: "Auxiliary",
    description: "Supports your dominant function and provides balance.",
    strength: 75,
    color: "bg-accent text-accent-foreground",
    barColor: "bg-accent",
  },
  {
    key: "tertiary",
    label: "Tertiary",
    description: "Develops later in life; provides relief from dominant pressures.",
    strength: 50,
    color: "bg-chart-3 text-white",
    barColor: "bg-chart-3",
  },
  {
    key: "inferior",
    label: "Inferior",
    description: "Least developed — the source of stress and growth opportunity.",
    strength: 25,
    color: "bg-muted text-muted-foreground",
    barColor: "bg-muted-foreground/40",
  },
];

export default function CognitiveFunctions({ type }) {
  const fns = cognitiveFunctions[type];
  if (!fns) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-heading text-xl font-semibold mb-1">Cognitive Functions</h3>
      <p className="text-muted-foreground text-sm mb-6">The mental processes that drive how you think, feel, and perceive the world.</p>

      <div className="space-y-5">
        {functionData.map(({ key, label, description, strength, color, barColor }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            className="flex gap-4 items-start"
          >
            <div className={`shrink-0 px-3 py-1 rounded-lg text-xs font-bold tracking-wide ${color} min-w-[80px] text-center`}>
              {label}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-foreground text-sm">{fns[key]}</div>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
              <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${strength}%` }}
                  transition={{ delay: 0.15 * i + 0.5, duration: 0.6, ease: "easeOut" }}
                  className={`h-full rounded-full ${barColor}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}