import React from "react";
import { Navbar } from "./components/ui/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { SonarCursor } from "./components/ui/SonarCursor";

// Streamlined Sections
import { RedesignedHero } from "./components/sections/RedesignedHero";
import { RedesignedProblem } from "./components/sections/RedesignedProblem";
import { RedesignedSolution } from "./components/sections/RedesignedSolution";
import { SystemWorkflowSection } from "./components/sections/SystemWorkflowSection";
import { RedesignedTech } from "./components/sections/RedesignedTech";
import { RedesignedTeam } from "./components/sections/RedesignedTeam";
import { RedesignedCTA } from "./components/sections/RedesignedCTA";

export function App() {
  return (
    <div className="relative min-h-screen bg-[#020817] text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Sonar Reticle Cursor */}
      <SonarCursor />

      {/* Sticky Ocean-Themed Navbar */}
      <Navbar />

      {/* Main Showcase Flow */}
      <main>
        {/* 1. Hero with Video & Bottom Gradient Overlay */}
        <RedesignedHero />

        {/* 2. The Problem (3 Minimal Cards) */}
        <RedesignedProblem />

        {/* 3. Our Solution (A Sonar Transmitter That Adapts) */}
        <RedesignedSolution />

        {/* 4. Workflow / Flowchart (10-Step Full Working Flow) */}
        <SystemWorkflowSection />

        {/* 5. Technology (Compact STM32 Architecture) */}
        <RedesignedTech />

        {/* 6. Team & Mentors */}
        <RedesignedTeam />

        {/* 7. Footer / CTA */}
        <RedesignedCTA />
      </main>
    </div>
  );
}

export default App;
