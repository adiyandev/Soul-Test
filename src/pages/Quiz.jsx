import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import QuestionCard from "@/components/quiz/QuestionCard";
import ProgressBar from "@/components/quiz/ProgressBar";
import { questions, calculateResult } from "@/lib/personalityData";

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const answeredCount = Object.keys(answers).length;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQ]: value };
    setAnswers(newAnswers);

    // Auto-advance after short delay
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      }
    }, 350);
  };

  const handleFinish = () => {
    const result = calculateResult(answers);
    // Store result in sessionStorage and navigate
    sessionStorage.setItem("quizResult", JSON.stringify(result));
    navigate("/results");
  };

  const canFinish = answeredCount === questions.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <ProgressBar current={answeredCount} total={questions.length} />
          </motion.div>

          {/* Question */}
          <div className="min-h-[300px] flex items-center justify-center">
            <QuestionCard
              question={questions[currentQ]}
              questionIndex={currentQ}
              total={questions.length}
              answer={answers[currentQ]}
              onAnswer={handleAnswer}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <Button
              variant="ghost"
              onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
              disabled={currentQ === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <div className="flex items-center gap-1.5">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQ(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === currentQ
                      ? "bg-primary w-6"
                      : answers[i] !== undefined
                        ? "bg-primary/40"
                        : "bg-border"
                  }`}
                />
              ))}
            </div>

            {currentQ < questions.length - 1 ? (
              <Button
                variant="ghost"
                onClick={() => setCurrentQ(currentQ + 1)}
                className="gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                disabled={!canFinish}
                className="gap-2 rounded-full px-6"
              >
                See Results
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Skip unanswered hint */}
          {!canFinish && currentQ === questions.length - 1 && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Please answer all {questions.length} questions to see your results.
              You have {questions.length - answeredCount} remaining.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}