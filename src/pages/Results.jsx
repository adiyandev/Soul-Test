import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Share2, User, Sparkles } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { toast } from "sonner";
import { personalityTypes } from "@/lib/personalityData";
import ResultCard from "@/components/results/ResultCard";

const fallbackTraits = [
  { key: "openness", label: "Openness", low: "Practical and familiar", high: "Curious and exploratory", description: "Your interest in novelty, ideas, imagination, and unfamiliar perspectives." },
  { key: "conscientiousness", label: "Conscientiousness", low: "Flexible and unstructured", high: "Organised and persistent", description: "How you approach commitments, planning, detail, and follow-through." },
  { key: "sociability", label: "Social energy", low: "Reserved and inwardly recharged", high: "Outgoing and socially energised", description: "How much social interaction you tend to seek and how it affects your energy." },
  { key: "compassion", label: "Interpersonal compassion", low: "Direct and task-focused", high: "Empathic and people-aware", description: "How much you naturally attend to other people's feelings and needs." },
  { key: "emotionalReactivity", label: "Emotional reactivity", low: "Steady under everyday stress", high: "Strongly affected by emotional events", description: "How intensely everyday stressors tend to affect your emotional state. This is not a diagnosis." },
  { key: "assertiveness", label: "Assertiveness", low: "Accommodating and cautious", high: "Direct and self-advocating", description: "How readily you express your views, needs, boundaries, and preferences." },
  { key: "independence", label: "Independence", low: "Feedback-oriented and interdependent", high: "Self-directed and self-reliant", description: "How much you rely on your own judgement and maintain a sense of self in relationships." },
  { key: "adaptability", label: "Adaptability", low: "Consistent and plan-oriented", high: "Flexible and change-ready", description: "How readily you revise plans, approaches, and opinions when circumstances change." },
];

function scoreLabel(score) {
  if (score >= 65) return "More pronounced";
  if (score <= 35) return "Less pronounced";
  return "Somewhere in the middle";
}

function TraitRow({ trait, score, index }) {
  const value = Number.isFinite(score) ? score : 50;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-card p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{trait.label}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono text-xl font-semibold tabular-nums">{value}%</div>
          <div className="text-xs text-muted-foreground">{scoreLabel(value)}</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative h-2.5 rounded-full bg-secondary overflow-hidden">
          <div className="absolute inset-y-0 left-1/2 w-px bg-foreground/30 z-10" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="h-full rounded-full bg-primary"
          />
        </div>
        <div className="mt-2 flex justify-between gap-3 text-[11px] text-muted-foreground">
          <span>{trait.low}</span>
          <span>{trait.high}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult") || localStorage.getItem("quizResult");
    if (!stored) {
      navigate("/quiz");
      return;
    }
    try {
      const parsed = JSON.parse(stored);
      setResult(parsed);
      sessionStorage.setItem("quizResult", JSON.stringify(parsed));
      localStorage.setItem("quizResult", JSON.stringify(parsed));
    } catch {
      navigate("/quiz");
    }
  }, [navigate]);

  if (!result) return null;

  const traitList = result.traits || fallbackTraits;
  const scores = result.profile || {};
  const strongest = traitList
    .map((trait) => ({ ...trait, score: scores[trait.key] ?? 50 }))
    .sort((a, b) => b.score - a.score);
  const topTraits = strongest.slice(0, 3);
  const shareText = [
    `My Soul Test personality type: ${result.type || "Not available"}${personalityTypes[result.type] ? ` — ${personalityTypes[result.type].title}` : ""}`,
    "My multidimensional personality profile",
    ...strongest.map((trait) => `${trait.label}: ${trait.score}%`),
    "A self-reflection profile, not a diagnosis or fixed personality label.",
  ].join("\n");

  const handleShare = async () => {
    try {
      if (navigator.share) await navigator.share({ title: "My Soul Test Profile", text: shareText });
      else {
        await navigator.clipboard.writeText(shareText);
        toast.success("Profile copied to clipboard!");
      }
    } catch (error) {
      if (error?.name !== "AbortError") toast.error("Unable to share this profile.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <div className="flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.18em]">
              <Sparkles className="w-4 h-4" /> Your personality profile
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3">More than one type.</h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Your answers create a pattern across several traits. None of these scores is your entire personality, and none is a permanent label.
            </p>
          </motion.header>

          <section className="rounded-3xl border border-border bg-card p-6 md:p-8 mb-8">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your strongest current tendencies</div>
            <p className="font-heading text-2xl md:text-3xl font-semibold mt-3 leading-snug">{result.summary || "Your profile is a combination of different tendencies that can vary by context."}</p>
            <div className="grid sm:grid-cols-3 gap-3 mt-7">
              {topTraits.map((trait) => (
                <div key={trait.key} className="rounded-2xl bg-secondary/70 p-4">
                  <div className="text-sm text-muted-foreground">{trait.label}</div>
                  <div className="font-mono text-2xl font-semibold mt-1">{trait.score}%</div>
                  <div className="text-xs text-muted-foreground mt-1">{scoreLabel(trait.score)}</div>
                </div>
              ))}
            </div>
          </section>

          {result.type && personalityTypes[result.type] && (
            <section className="mb-10 rounded-3xl border border-border bg-card/40 p-5 md:p-8">
              <div className="mb-7 text-center">
                <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Your classic 16-type result</div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mt-2">Your type, alongside your full profile</h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">This familiar four-letter framework is a secondary shorthand based on four broad preferences. It does not capture every dimension measured above.</p>
              </div>
              <ResultCard details={personalityTypes[result.type]} type={result.type} />
              <div className="text-center mt-7">
                <Link to={`/types?type=${result.type}`} className="text-sm text-primary hover:underline">Explore all 16 personality types</Link>
              </div>
            </section>
          )}

          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <h2 className="font-heading text-2xl font-semibold">Your trait dimensions</h2>
              <p className="text-sm text-muted-foreground mt-1">Scores show where your answers currently lean on each spectrum.</p>
            </div>
            <span className="hidden sm:block text-xs text-muted-foreground">8 dimensions · 48 questions</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {traitList.map((trait, index) => (
              <TraitRow key={trait.key} trait={trait} score={scores[trait.key]} index={index} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border p-5 md:p-6">
            <h2 className="font-heading text-xl font-semibold">A note on interpretation</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              These scores are descriptive estimates from your answers, not objective measurements. They can shift with age, experience, mood, context, and how you interpret a question. Soul Test is an informal self-reflection tool; it has not been clinically validated and cannot diagnose a mental-health condition.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              A four-letter personality code can be interesting shorthand, but it should never replace this broader profile or be treated as your identity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Button variant="outline" className="gap-2 rounded-full px-6" onClick={handleShare}>
              <Share2 className="w-4 h-4" /> Share profile
            </Button>
            <Link to="/quiz">
              <Button variant="outline" className="gap-2 rounded-full px-6">
                <RotateCcw className="w-4 h-4" /> Retake assessment
              </Button>
            </Link>
            <Link to="/profile">
              <Button className="gap-2 rounded-full px-6">
                <User className="w-4 h-4" /> View full profile <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
