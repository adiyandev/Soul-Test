import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Share2, User } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import ResultCard from "@/components/results/ResultCard";
import DimensionBar from "@/components/results/DimensionBar";
import { toast } from "sonner";

export default function Results() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult") || localStorage.getItem("quizResult");
    if (stored) {
      const parsed = JSON.parse(stored);
      setResult(parsed);
      sessionStorage.setItem("quizResult", JSON.stringify(parsed));
      localStorage.setItem("quizResult", JSON.stringify(parsed));
    } else {
      navigate("/quiz");
    }
  }, [navigate]);

  if (!result) return null;

  const { type, percentages, details } = result;

  const handleShare = () => {
    const text = `I'm a ${type} - ${details.title}! ${details.tagline}`;
    if (navigator.share) {
      navigator.share({ title: "My Personality Type", text });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Your Result
            </span>
          </motion.div>

          <ResultCard details={details} type={type} />

          <div className="mt-10 space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold mb-2">Your Dimensions</h3>
            <DimensionBar leftLabel="Extraverted" rightLabel="Introverted" leftLetter="E" rightLetter="I" percentage={percentages.EI} delay={0} />
            <DimensionBar leftLabel="Sensing" rightLabel="Intuitive" leftLetter="S" rightLetter="N" percentage={percentages.SN} delay={0.1} />
            <DimensionBar leftLabel="Thinking" rightLabel="Feeling" leftLetter="T" rightLetter="F" percentage={percentages.TF} delay={0.2} />
            <DimensionBar leftLabel="Judging" rightLabel="Perceiving" leftLetter="J" rightLetter="P" percentage={percentages.JP} delay={0.3} />
          </div>

          <div className="mt-8">
            <Link to="/profile">
              <Button size="lg" className="w-full rounded-full gap-2 text-base py-6 shadow-lg shadow-primary/20">
                <User className="w-5 h-5" />
                View My Profile
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5">
            <Button variant="outline" className="gap-2 rounded-full px-6" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
              Share Result
            </Button>
            <Link to="/quiz">
              <Button variant="outline" className="gap-2 rounded-full px-6">
                <RotateCcw className="w-4 h-4" />
                Retake Test
              </Button>
            </Link>
            <Link to="/types">
              <Button className="gap-2 rounded-full px-6">
                Explore All Types
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
