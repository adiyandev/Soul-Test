import { motion } from "framer-motion";
import { workStyle } from "@/lib/personalityExtended";
import { Building2, Flame, MessageSquare, Crown } from "lucide-react";

const fields = [
  { key: "environment", label: "Ideal Environment", icon: Building2 },
  { key: "motivation", label: "What Motivates You", icon: Flame },
  { key: "conflict", label: "Conflict Style", icon: MessageSquare },
  { key: "leadership", label: "Leadership Style", icon: Crown },
];

export default function WorkStyleSection({ type }) {
  const style = workStyle[type];
  if (!style) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-heading text-xl font-semibold mb-1">Work & Leadership</h3>
      <p className="text-muted-foreground text-sm mb-6">How you operate, what drives you, and how you lead.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            className="bg-secondary/50 rounded-xl p-4 border border-border/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-sm">{label}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{style[key]}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}