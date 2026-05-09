import { motion, AnimatePresence } from "framer-motion";

const labels = [
  "Strongly Disagree",
  "Disagree",
  "Slightly Disagree",
  "Neutral",
  "Slightly Agree",
  "Agree",
  "Strongly Agree",
];

const dotSizes = [
  "w-12 h-12",
  "w-10 h-10",
  "w-9 h-9",
  "w-8 h-8",
  "w-9 h-9",
  "w-10 h-10",
  "w-12 h-12",
];

export default function QuestionCard({ question, questionIndex, total, answer, onAnswer }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full"
      >
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Question {questionIndex + 1} of {total}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 leading-snug max-w-2xl mx-auto">
            {question.text}
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {labels.map((label, i) => {
            const value = i + 1;
            const isSelected = answer === value;
            const isDisagree = i < 3;
            const isAgree = i > 3;

            return (
              <button
                key={i}
                onClick={() => onAnswer(value)}
                className="flex flex-col items-center group"
                title={label}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    ${dotSizes[i]} rounded-full border-2 transition-all duration-200 flex items-center justify-center
                    ${isSelected
                      ? isDisagree
                        ? "bg-accent border-accent shadow-lg shadow-accent/25"
                        : isAgree
                          ? "bg-primary border-primary shadow-lg shadow-primary/25"
                          : "bg-muted-foreground border-muted-foreground shadow-lg"
                      : "border-border hover:border-primary/40 bg-card"
                    }
                  `}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-white"
                    />
                  )}
                </motion.div>
                <span className="text-[10px] mt-2 text-muted-foreground hidden md:block max-w-[60px] text-center leading-tight">
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-3 md:hidden text-xs text-muted-foreground px-1">
          <span>Disagree</span>
          <span>Agree</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}