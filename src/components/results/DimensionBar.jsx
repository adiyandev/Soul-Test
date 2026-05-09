import { motion } from "framer-motion";

export default function DimensionBar({ leftLabel, rightLabel, leftLetter, rightLetter, percentage, delay = 0 }) {
  const isLeft = percentage >= 50;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-end">
        <div className="text-left">
          <span className={`text-2xl font-bold font-heading ${isLeft ? "text-primary" : "text-muted-foreground/50"}`}>
            {leftLetter}
          </span>
          <span className="text-sm text-muted-foreground ml-2">{leftLabel}</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground mr-2">{rightLabel}</span>
          <span className={`text-2xl font-bold font-heading ${!isLeft ? "text-accent" : "text-muted-foreground/50"}`}>
            {rightLetter}
          </span>
        </div>
      </div>
      
      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "50%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
        <motion.div
          initial={{ width: "50%" }}
          animate={{ width: `${100 - percentage}%` }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute right-0 top-0 h-full bg-gradient-to-l from-accent to-accent/70 rounded-full"
        />
      </div>
      
      <div className="flex justify-between text-sm font-semibold">
        <span className={isLeft ? "text-primary" : "text-muted-foreground"}>
          {percentage}%
        </span>
        <span className={!isLeft ? "text-accent" : "text-muted-foreground"}>
          {100 - percentage}%
        </span>
      </div>
    </motion.div>
  );
}