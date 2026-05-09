import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import ProfileHero from "@/components/profile/ProfileHero";
import TraitRadar from "@/components/profile/TraitRadar";
import CognitiveFunctions from "@/components/profile/CognitiveFunctions";
import CompatibilitySection from "@/components/profile/CompatibilitySection";
import WorkStyleSection from "@/components/profile/WorkStyleSection";
import DimensionsSection from "@/components/profile/DimensionsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertCircle, Lightbulb, Briefcase, Users, Copy, Check, Heart, MessageCircle, CalendarDays, Sparkles } from "lucide-react";
import { strengthDetails, recommendations } from "@/lib/personalityExtended";
import { toast } from "sonner";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground px-2">{children}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

function getRelationshipInsights(type) {
  return [
    {
      title: "How you connect",
      text: type[0] === "E"
        ? "You build closeness through shared momentum, frequent contact, and being actively involved in each other's world."
        : "You build closeness slowly and deeply. Trust grows through consistency, privacy, and conversations that feel honest rather than performative.",
    },
    {
      title: "What you need",
      text: type[2] === "F"
        ? "Emotional safety, warmth, and signs that your feelings are being considered before decisions are made."
        : "Directness, competence, and a partner or friend who respects clear thinking without taking every disagreement personally.",
    },
    {
      title: "Watch out for",
      text: type[3] === "J"
        ? "Trying to define the relationship too quickly when the other person needs more time or flexibility."
        : "Leaving important things vague for too long. A little clarity can make your freedom feel safer, not smaller.",
    },
  ];
}

function getProfileRecommendations(type) {
  return [
    {
      icon: CalendarDays,
      title: "Weekly reset",
      text: type[3] === "J"
        ? "Leave one open block each week with no plan. Your structure works better when it has room to breathe."
        : "Pick one fixed weekly reset time. It gives your spontaneity a home base instead of turning into scattered energy.",
    },
    {
      icon: MessageCircle,
      title: "Communication habit",
      text: type[2] === "F"
        ? "Say the need underneath the feeling. It keeps emotional honesty from becoming guesswork for other people."
        : "Name the human impact before the solution. People hear your logic better when they feel considered first.",
    },
    {
      icon: Sparkles,
      title: "Growth move",
      text: type[1] === "N"
        ? "Turn one big idea into a small visible action this week. Insight becomes confidence when it touches reality."
        : "Try one new angle before choosing the practical answer. Your groundedness gets stronger when it stays curious.",
    },
  ];
}

export default function Profile() {
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult") || localStorage.getItem("quizResult");
    if (stored) {
      const parsed = JSON.parse(stored);
      setResult(parsed);
      sessionStorage.setItem("quizResult", JSON.stringify(parsed));
    }
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20 px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold">My Profile</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Take the Soul Test once and this page becomes your saved dashboard for recommendations, relationship style, work habits, and type insights.
            </p>
            <Link to="/quiz" className="inline-block mt-7">
              <Button size="lg" className="rounded-full gap-2 px-8">
                Take the Test
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const { type, percentages, details } = result;
  const strengths = strengthDetails[type] || [];
  const recs = recommendations[type] || [];
  const relationshipInsights = getRelationshipInsights(type);
  const profileRecommendations = getProfileRecommendations(type);

  const handleCopyType = () => {
    navigator.clipboard.writeText(`${type} — ${details.title}\n"${details.tagline}"\n\n${details.description}`);
    setCopied(true);
    toast.success("Profile copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <div className="pt-16">
        <ProfileHero type={type} details={details} />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-20 pb-24">

        <section>
          <SectionLabel>My Profile Dashboard</SectionLabel>
          <div className="grid lg:grid-cols-3 gap-4">
            <motion.div {...fade(0)} className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Heart className="w-5 h-5 text-rose-500" />
                <h2 className="font-heading text-xl font-semibold">Relationships</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {relationshipInsights.map((item) => (
                  <div key={item.title} className="rounded-xl bg-secondary/60 border border-border/60 p-4">
                    <div className="font-semibold text-sm mb-2">{item.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.08)} className="bg-card border border-border rounded-2xl p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Profile Snapshot</div>
              <div className="font-heading text-4xl font-bold">{type}</div>
              <p className="text-sm text-muted-foreground mt-2">{details.title}</p>
              <div className="mt-5 space-y-2">
                {details.strengths.slice(0, 3).map((strength) => (
                  <div key={strength} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {profileRecommendations.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title} {...fade(i * 0.06)} className="bg-card border border-border rounded-2xl p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section>
          <SectionLabel>About Your Type</SectionLabel>
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div {...fade(0)} className="md:col-span-2 bg-card border border-border rounded-2xl p-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-mono text-primary font-bold tracking-widest text-sm mb-1">{type}</div>
                  <h2 className="font-heading text-2xl font-bold">{details.title}</h2>
                </div>
                <button
                  onClick={handleCopyType}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-foreground/80 leading-relaxed text-base">{details.description}</p>
              <p className="text-muted-foreground text-sm italic mt-4 border-l-2 border-primary/30 pl-4">"{details.tagline}"</p>
            </motion.div>

            <div className="space-y-4">
              <motion.div {...fade(0.1)} className="bg-card border border-border rounded-2xl p-5">
                <div className="text-4xl mb-2">{details.emoji}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Archetype</div>
                <div className="font-heading font-bold text-lg">{details.title.replace("The ", "")}</div>
              </motion.div>
              <motion.div {...fade(0.15)} className="bg-card border border-border rounded-2xl p-5 space-y-2">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Type Breakdown</div>
                {[
                  { l: type[0], label: type[0] === "E" ? "Extraverted" : "Introverted" },
                  { l: type[1], label: type[1] === "S" ? "Sensing" : "Intuitive" },
                  { l: type[2], label: type[2] === "T" ? "Thinking" : "Feeling" },
                  { l: type[3], label: type[3] === "J" ? "Judging" : "Perceiving" },
                ].map(({ l, label }) => (
                  <div key={l} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-primary text-sm">{l}</div>
                    <span className="text-sm text-foreground/80">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DIMENSIONS ── */}
        <section>
          <SectionLabel>Your Dimensions</SectionLabel>
          <motion.div {...fade(0)}>
            <DimensionsSection percentages={percentages} />
          </motion.div>
        </section>

        {/* ── STRENGTHS ── */}
        <section>
          <SectionLabel>Strengths in Depth</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.07)} className="bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-base">{s.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── GROWTH AREAS ── */}
        <section>
          <SectionLabel>Growth Areas</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {details.weaknesses.map((w, i) => (
              <motion.div key={i} {...fade(i * 0.07)} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">{w}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {i % 3 === 0 ? "Can become a blind spot under stress." : i % 3 === 1 ? "Worth developing with intentional practice." : "Awareness here accelerates personal growth."}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TRAIT RADAR ── */}
        <section>
          <SectionLabel>Trait Profile</SectionLabel>
          <motion.div {...fade(0)}>
            <TraitRadar type={type} />
          </motion.div>
        </section>

        {/* ── COGNITIVE FUNCTIONS ── */}
        <section>
          <SectionLabel>Cognitive Functions</SectionLabel>
          <motion.div {...fade(0)}>
            <CognitiveFunctions type={type} />
          </motion.div>
        </section>

        {/* ── WORK & LEADERSHIP ── */}
        <section>
          <SectionLabel>Work & Leadership</SectionLabel>
          <motion.div {...fade(0)}>
            <WorkStyleSection type={type} />
          </motion.div>
        </section>

        {/* ── CAREER & FAMOUS ── */}
        <section>
          <SectionLabel>Careers & Inspirations</SectionLabel>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div {...fade(0)} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-chart-3/15 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-chart-3" />
                </div>
                <h3 className="font-heading text-lg font-semibold">Ideal Careers</h3>
              </div>
              <div className="space-y-2">
                {details.career.map((c, i) => (
                  <div key={c} className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0">
                    <div className="w-6 h-6 rounded-full bg-chart-3/10 flex items-center justify-center shrink-0 text-xs font-bold text-chart-3">{i + 1}</div>
                    <span className="text-sm text-foreground/80">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.1)} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-chart-4/15 flex items-center justify-center">
                  <Users className="w-4 h-4 text-chart-4" />
                </div>
                <h3 className="font-heading text-lg font-semibold">Famous {details.title}s</h3>
              </div>
              <div className="space-y-2">
                {details.famousPeople.map((p) => (
                  <div key={p} className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chart-4/20 to-chart-4/40 flex items-center justify-center shrink-0 font-bold text-xs text-chart-4">{p[0]}</div>
                    <span className="text-sm text-foreground/80">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── RELATIONSHIPS ── */}
        <section>
          <SectionLabel>Relationships & Compatibility</SectionLabel>
          <div className="space-y-4">
            <motion.div {...fade(0)} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-3">Your Relationship Style</h3>
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                {type[0] === "E"
                  ? `As an Extraverted type, ${type}s build relationships through shared experiences and energetic engagement. They tend to be open, warm, and proactive in forming connections.`
                  : `As an Introverted type, ${type}s form relationships slowly but deeply. They value quality over quantity and invest fully in the connections they choose.`}
                {" "}
                {type[2] === "F"
                  ? " Their Feeling preference means they lead with empathy and prioritize harmony, making them emotionally attuned and nurturing partners."
                  : " Their Thinking preference means they express care through honesty, problem-solving, and action rather than emotional expression."}
                {" "}
                {type[3] === "J"
                  ? " The Judging preference means they tend to seek stability and clarity in relationships — they appreciate knowing where things stand."
                  : " The Perceiving preference means they enjoy keeping things flexible and spontaneous, bringing a sense of adventure to close relationships."}
              </p>
            </motion.div>
            <motion.div {...fade(0.1)}>
              <CompatibilitySection type={type} />
            </motion.div>
          </div>
        </section>

        {/* ── PERSONAL RECOMMENDATIONS ── */}
        <section>
          <SectionLabel>Personal Recommendations</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recs.map((r, i) => (
              <motion.div key={i} {...fade(i * 0.06)} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="text-2xl mb-3">{r.emoji}</div>
                <div className="flex items-start gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <h4 className="font-heading font-semibold text-sm">{r.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-semibold">Curious about other types?</p>
            <p className="text-muted-foreground text-sm">Explore all 16 personality profiles.</p>
          </div>
          <Link to="/types">
            <Button className="rounded-full gap-2 px-6">
              Explore All Types
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
