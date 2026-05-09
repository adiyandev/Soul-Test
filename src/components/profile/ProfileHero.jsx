import { motion } from "framer-motion";
import { typeColors } from "@/lib/personalityExtended";
import { Share2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function ProfileHero({ type, details }) {
  const colors = typeColors[type] || typeColors.INTJ;

  const handleShare = () => {
    const text = `I'm a ${type} — ${details.title}! "${details.tagline}"`;
    if (navigator.share) {
      navigator.share({ title: "My Personality Type", text });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className={`relative bg-gradient-to-br ${colors.bg} overflow-hidden`}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex-1">
            {/* Type badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-5xl md:text-6xl">{details.emoji}</span>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-widest uppercase mb-1">
                  Personality Type
                </div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-white tracking-[0.3em]">
                  {type}
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              The {details.title.replace("The ", "")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/75 text-lg md:text-xl max-w-lg leading-relaxed italic"
            >
              "{details.tagline}"
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              onClick={handleShare}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 gap-2 backdrop-blur-sm"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Link to="/quiz">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 gap-2 backdrop-blur-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Test
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Type letters broken down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 md:mt-14 grid grid-cols-4 gap-3 md:gap-4 max-w-xl"
        >
          {[
            { letter: type[0], label: type[0] === "E" ? "Extraverted" : "Introverted" },
            { letter: type[1], label: type[1] === "S" ? "Sensing" : "Intuitive" },
            { letter: type[2], label: type[2] === "T" ? "Thinking" : "Feeling" },
            { letter: type[3], label: type[3] === "J" ? "Judging" : "Perceiving" },
          ].map(({ letter, label }) => (
            <div key={letter} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white">{letter}</div>
              <div className="text-white/70 text-xs mt-1 leading-tight">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}