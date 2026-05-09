import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import TypesPreview from "@/components/landing/TypesPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TypesPreview />

      <section className="py-16 md:py-20 px-4 sm:px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-background/10">
            <BrainCircuit className="w-7 h-7 text-background" />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Ready for the actual test?
            </h2>
            <p className="mt-3 text-background/70 text-lg max-w-2xl">
              Start with your first instinct. The result gets better when you answer like yourself, not like your ideal self.
            </p>
          </div>
          <Link to="/quiz" className="md:justify-self-end">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base px-8 py-6 rounded-full group">
              Start Free Test
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
              <BrainCircuit className="w-3 h-3 text-background" />
            </div>
            <span className="font-heading font-semibold text-foreground">Soul Test</span>
          </div>
          <p>Discover who you truly are. For entertainment purposes.</p>
        </div>
      </footer>
    </div>
  );
}
