import React from "react";
import { Navbar } from "./components/ui/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { SonarCursor } from "./components/ui/SonarCursor";

// Streamlined 8 Sections
import { RedesignedHero } from "./components/sections/RedesignedHero";
import { RedesignedProblem } from "./components/sections/RedesignedProblem";
import { RedesignedSolution } from "./components/sections/RedesignedSolution";
import { RedesignedWorkflow } from "./components/sections/RedesignedWorkflow";
import { RedesignedTech } from "./components/sections/RedesignedTech";
import { RedesignedWhyItMatters } from "./components/sections/RedesignedWhyItMatters";
import { RedesignedTeam } from "./components/sections/RedesignedTeam";
import { RedesignedCTA } from "./components/sections/RedesignedCTA";

export function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Sonar Reticle Cursor */}
      <SonarCursor />

      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Streamlined Visual-First Showcase Flow */}
      <main>
        {/* 01: Hero with Video */}
        <RedesignedHero />

        {/* 02: The Problem (3 Minimal Cards) */}
        <RedesignedProblem />

        {/* 03: Our Solution (Clean Block Diagram) */}
        <RedesignedSolution />

        {/* 04: How It Works (4 Visual Steps) */}
        <RedesignedWorkflow />

        {/* 05: Technology (STM32 Central Architecture) */}
        <RedesignedTech />

        {/* 06: Why It Matters (Visual Comparison) */}
        <RedesignedWhyItMatters />

        {/* 07: Team & Mentors */}
        <RedesignedTeam />

        {/* 08: Final CTA & Footer */}
        <RedesignedCTA />
      </main>
    </div>
  );
}

export default App;
