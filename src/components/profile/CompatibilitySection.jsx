import { motion } from "framer-motion";
import { personalityTypes } from "@/lib/personalityData";
import { compatibility, typeColors } from "@/lib/personalityExtended";
import { Heart, ThumbsUp, Zap } from "lucide-react";

function TypePill({ type }) {
  const details = personalityTypes[type];
  const colors = typeColors[type];
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${colors?.badge || "bg-secondary text-secondary-foreground"}`}>
      <span className="text-base">{details?.emoji}</span>
      <span className="font-mono">{type}</span>
    </div>
  );
}

const sections = [
  { key: "best", label: "Best Matches", icon: Heart, color: "text-rose-500", description: "Natural complements with high chemistry and growth potential." },
  { key: "good", label: "Good Matches", icon: ThumbsUp, color: "text-primary", description: "Solid compatibility with shared values or complementary traits." },
  { key: "challenging", label: "Growth Matches", icon: Zap, color: "text-amber-500", description: "More effort required, but can lead to meaningful development." },
];

export default function CompatibilitySection({ type }) {
  const compat = compatibility[type];
  if (!compat) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-heading text-xl font-semibold mb-1">Relationship Compatibility</h3>
      <p className="text-muted-foreground text-sm mb-6">How {type} tends to connect with other personality types.</p>

      <div className="space-y-6">
        {sections.map(({ key, label, icon: Icon, color, description }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="font-semibold text-sm">{label}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {compat[key].map((t) => (
                <TypePill key={t} type={t} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
