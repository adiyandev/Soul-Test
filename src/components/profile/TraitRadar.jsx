import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { traitScores } from "@/lib/personalityExtended";

export default function TraitRadar({ type }) {
  const scores = traitScores[type];
  if (!scores) return null;

  const data = [
    { trait: "Creativity", value: scores.creativity },
    { trait: "Empathy", value: scores.empathy },
    { trait: "Leadership", value: scores.leadership },
    { trait: "Structure", value: scores.structure },
    { trait: "Spontaneity", value: scores.spontaneity },
    { trait: "Sociability", value: scores.sociability },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-heading text-xl font-semibold mb-1">Trait Profile</h3>
      <p className="text-muted-foreground text-sm mb-6">Your natural tendencies across six core dimensions.</p>

      <div className="h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis
              dataKey="trait"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12, fontFamily: "var(--font-body)" }}
            />
            <Radar
              name="Traits"
              dataKey="value"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.25}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
        {data.map(({ trait, value }) => (
          <div key={trait} className="flex items-center justify-between bg-secondary/60 rounded-lg px-3 py-2">
            <span className="text-sm text-muted-foreground">{trait}</span>
            <span className="text-sm font-semibold text-foreground">{value}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}