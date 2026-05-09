import { motion } from "framer-motion";
import { personalityTypes } from "@/lib/personalityData";
import { Link } from "react-router-dom";

const groups = [
  { label: "Analysts", types: ["INTJ", "INTP", "ENTJ", "ENTP"], color: "bg-violet-500" },
  { label: "Diplomats", types: ["INFJ", "INFP", "ENFJ", "ENFP"], color: "bg-emerald-500" },
  { label: "Sentinels", types: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], color: "bg-sky-500" },
  { label: "Explorers", types: ["ISTP", "ISFP", "ESTP", "ESFP"], color: "bg-amber-500" },
];

export default function TypesPreview() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold max-w-xl">
            16 Unique Personalities
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Which one are you? Each type has its own set of strengths, dreams, and view of the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${group.color}`} />
                <h3 className="font-heading text-xl font-semibold">{group.label}</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {group.types.map((typeKey) => {
                  const t = personalityTypes[typeKey];
                  return (
                    <Link
                      key={typeKey}
                      to={`/types?type=${typeKey}`}
                      className="group relative bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl leading-none">{t.emoji}</div>
                        <div className="min-w-0">
                          <div className="font-mono text-sm text-primary font-semibold tracking-wider">
                            {typeKey}
                          </div>
                          <div className="font-heading text-base font-semibold mt-1">
                            {t.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {t.tagline}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
