import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Share2 } from "lucide-react";
import { toast } from "sonner";
import { personalityTypes } from "@/lib/personalityData";

const traitInfo = [
  { key: "openness", label: "Openness", low: "Practical and familiar", high: "Curious and exploratory", description: "Interest in novelty, ideas, imagination, and unfamiliar perspectives." },
  { key: "conscientiousness", label: "Conscientiousness", low: "Flexible and unstructured", high: "Organised and persistent", description: "Approach to commitments, planning, detail, and follow-through." },
  { key: "sociability", label: "Social energy", low: "Reserved and inwardly recharged", high: "Outgoing and socially energised", description: "How much social interaction you seek and how it affects your energy." },
  { key: "compassion", label: "Interpersonal compassion", low: "Direct and task-focused", high: "Empathic and people-aware", description: "Attention to other people's feelings, needs, and perspectives." },
  { key: "emotionalReactivity", label: "Emotional reactivity", low: "Steady under everyday stress", high: "Strongly affected by emotional events", description: "How intensely everyday stressors tend to affect your emotional state. This is not a diagnosis." },
  { key: "assertiveness", label: "Assertiveness", low: "Accommodating and cautious", high: "Direct and self-advocating", description: "How readily you express your views, needs, boundaries, and preferences." },
  { key: "independence", label: "Independence", low: "Feedback-oriented and interdependent", high: "Self-directed and self-reliant", description: "How much you rely on your own judgement and maintain a sense of self in relationships." },
  { key: "adaptability", label: "Adaptability", low: "Consistent and plan-oriented", high: "Flexible and change-ready", description: "How readily you revise plans, approaches, and opinions when circumstances change." },
];

export default function Profile() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult") || localStorage.getItem("quizResult");
    if (!stored) return;
    try { setResult(JSON.parse(stored)); } catch { setResult(null); }
  }, []);

  const share = async () => {
    const profile = result?.profile || {};
    const text = traitInfo.map((trait) => `${trait.label}: ${profile[trait.key] ?? 50}%`).join("\n");
    try {
      if (navigator.share) await navigator.share({ title: "My Soul Test profile", text });
      else { await navigator.clipboard.writeText(text); toast.success("Profile copied!"); }
    } catch (error) {
      if (error?.name !== "AbortError") toast.error("Unable to share this profile.");
    }
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 px-4">
          <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-card p-8 text-center">
            <h1 className="font-heading text-3xl font-bold">Your profile</h1>
            <p className="mt-3 text-muted-foreground">Complete the assessment to build your multidimensional profile.</p>
            <Link to="/quiz"><Button className="mt-6 rounded-full">Start assessment</Button></Link>
          </div>
        </main>
      </div>
    );
  }

  const scores = result.profile || {};
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/results" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to results
          </Link>
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Soul Test · Personal profile</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3">Your personality, in dimensions.</h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
              A profile is more useful than a box. These scores describe tendencies in your answers, not fixed traits or limits on who you can become.
            </p>
          </div>

          {result.type && personalityTypes[result.type] && (
            <section className="rounded-3xl border border-border bg-card p-6 md:p-8 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Classic 16-type result</div>
                  <h2 className="font-heading text-2xl font-bold mt-2">{result.type} · {personalityTypes[result.type].title}</h2>
                  <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{personalityTypes[result.type].tagline}</p>
                  <p className="text-xs text-muted-foreground mt-2">A secondary shorthand, not a complete or definitive description of you.</p>
                </div>
                <div className="text-5xl" aria-hidden="true">{personalityTypes[result.type].emoji}</div>
              </div>
              <Link to={`/types?type=${result.type}`} className="inline-block text-sm text-primary hover:underline mt-5">Explore this type and all 16 types</Link>
            </section>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {traitInfo.map((trait, index) => {
              const score = scores[trait.key] ?? 50;
              return (
                <section key={trait.key} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h2 className="font-semibold">{trait.label}</h2>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{trait.description}</p>
                    </div>
                    <span className="font-mono text-xl font-semibold">{score}%</span>
                  </div>
                  <div className="relative h-2.5 rounded-full bg-secondary mt-5 overflow-hidden">
                    <div className="absolute left-1/2 inset-y-0 w-px bg-foreground/30 z-10" />
                    <div className="h-full rounded-full bg-primary" style={{ width: `${score}%` }} />
                  </div>
                  <div className="flex justify-between gap-3 text-[11px] text-muted-foreground mt-2">
                    <span>{trait.low}</span><span>{trait.high}</span>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border p-5 mt-8">
            <h2 className="font-heading text-xl font-semibold">Keep this in perspective</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              This questionnaire is an informal self-reflection tool, not a clinically validated assessment. Scores may change with context, mood, experience, and time. In particular, emotional reactivity is not a mental-health diagnosis.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button onClick={share} variant="outline" className="rounded-full gap-2"><Share2 className="w-4 h-4" /> Share profile</Button>
            <Button onClick={() => navigate("/quiz")} className="rounded-full gap-2"><RotateCcw className="w-4 h-4" /> Retake assessment</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
