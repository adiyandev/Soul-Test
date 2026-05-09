import { motion } from "framer-motion";
import DimensionBar from "@/components/results/DimensionBar";

export default function DimensionsSection({ percentages }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-heading text-xl font-semibold mb-1">Your Dimensions</h3>
      <p className="text-muted-foreground text-sm mb-8">
        The four spectrums that define your personality type. Each score reflects your natural tendency.
      </p>

      <div className="space-y-8">
        <div>
          <DimensionBar
            leftLabel="Extraverted"
            rightLabel="Introverted"
            leftLetter="E"
            rightLetter="I"
            percentage={percentages.EI}
            delay={0}
          />
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {percentages.EI >= 50
              ? "You tend to gain energy from social interactions and the outer world."
              : "You tend to recharge through solitude and inner reflection."}
          </p>
        </div>
        <div>
          <DimensionBar
            leftLabel="Sensing"
            rightLabel="Intuitive"
            leftLetter="S"
            rightLetter="N"
            percentage={percentages.SN}
            delay={0.1}
          />
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {percentages.SN >= 50
              ? "You focus on concrete facts, details, and present realities."
              : "You focus on patterns, possibilities, and future potential."}
          </p>
        </div>
        <div>
          <DimensionBar
            leftLabel="Thinking"
            rightLabel="Feeling"
            leftLetter="T"
            rightLetter="F"
            percentage={percentages.TF}
            delay={0.2}
          />
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {percentages.TF >= 50
              ? "You prioritize logic and objective analysis when making decisions."
              : "You prioritize harmony and people's feelings when making decisions."}
          </p>
        </div>
        <div>
          <DimensionBar
            leftLabel="Judging"
            rightLabel="Perceiving"
            leftLetter="J"
            rightLetter="P"
            percentage={percentages.JP}
            delay={0.3}
          />
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {percentages.JP >= 50
              ? "You prefer structure, planning, and decisiveness in your daily life."
              : "You prefer flexibility, spontaneity, and keeping options open."}
          </p>
        </div>
      </div>
    </motion.div>
  );
}