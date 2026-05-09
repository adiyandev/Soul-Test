import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import TypesPreview from "@/components/landing/TypesPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TypesPreview />

      {/* CTA Footer */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Ready to Discover Yourself?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            It only takes 5 minutes. Your personality profile awaits.
          </p>
          <Link to="/quiz" className="inline-block mt-8">
            <Button size="lg" className="text-base px-10 py-6 rounded-full group shadow-lg shadow-primary/25">
              Start Free Test
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-heading font-semibold text-foreground">PersonaLens</span>
          </div>
          <p>Discover who you truly are. For entertainment purposes.</p>
        </div>
      </footer>
    </div>
  );
}