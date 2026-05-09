import { Link, useLocation } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <BrainCircuit className="w-4 h-4 text-background" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight">Soul Test</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/types">
            <Button
              variant={pathname === "/types" ? "secondary" : "ghost"}
              size="sm"
              className="text-sm"
            >
              All Types
            </Button>
          </Link>
          <Link to="/quiz">
            <Button size="sm" className="text-sm rounded-full px-5">
              Take Test
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
