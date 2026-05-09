import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalityTypes } from "@/lib/personalityData";
import Navbar from "@/components/shared/Navbar";
import ResultCard from "@/components/results/ResultCard";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const groups = [
  { label: "Analysts", types: ["INTJ", "INTP", "ENTJ", "ENTP"], color: "bg-violet-500" },
  { label: "Diplomats", types: ["INFJ", "INFP", "ENFJ", "ENFP"], color: "bg-emerald-500" },
  { label: "Sentinels", types: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], color: "bg-sky-500" },
  { label: "Explorers", types: ["ISTP", "ISFP", "ESTP", "ESFP"], color: "bg-amber-500" },
];

export default function Types() {
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type");
    if (t && personalityTypes[t]) {
      setSelectedType(t);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold">All Personality Types</h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Explore all 16 personality types. Click on any type to learn more.
            </p>
          </motion.div>

          {/* Selected type detail */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-12 overflow-hidden"
              >
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedType(null)}
                    className="absolute top-0 right-0 z-10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                  <ResultCard
                    details={personalityTypes[selectedType]}
                    type={selectedType}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid */}
          <div className="space-y-10">
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${group.color}`} />
                  <h2 className="font-heading text-2xl font-semibold">{group.label}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {group.types.map((typeKey) => {
                    const t = personalityTypes[typeKey];
                    const isActive = selectedType === typeKey;

                    return (
                      <button
                        key={typeKey}
                        onClick={() => setSelectedType(isActive ? null : typeKey)}
                        className={`
                          group relative text-left bg-card border rounded-xl p-5 transition-all duration-300
                          ${isActive
                            ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary/20"
                            : "border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                          }
                        `}
                      >
                        <div className="text-3xl mb-3">{t.emoji}</div>
                        <div className="font-mono text-sm text-primary font-semibold tracking-wider">
                          {typeKey}
                        </div>
                        <div className="font-heading text-base font-semibold mt-1">
                          {t.title}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                          {t.tagline}
                        </p>
                        {isActive && (
                          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px]">
                            Viewing
                          </Badge>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}