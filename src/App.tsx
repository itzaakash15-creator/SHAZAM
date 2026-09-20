import React from "react";
import { Navbar } from "./components/ui/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { SectionNavigator } from "./components/ui/SectionNavigator";
import { SonarCursor } from "./components/ui/SonarCursor";

// Sections
import { HeroSection } from "./components/sections/HeroSection";
import { CoreIdeaSection } from "./components/sections/CoreIdeaSection";
import { ProblemSection } from "./components/sections/ProblemSection";
import { SolutionSection } from "./components/sections/SolutionSection";
import { SystemArchitectureSection } from "./components/sections/SystemArchitectureSection";
import { ControllerSection } from "./components/sections/ControllerSection";
import { AdaptiveLogicSection } from "./components/sections/AdaptiveLogicSection";
import { FrequencyConceptSection } from "./components/sections/FrequencyConceptSection";
import { CognitiveSonarSection } from "./components/sections/CognitiveSonarSection";
import { HardwareSection } from "./components/sections/HardwareSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { ComparisonSection } from "./components/sections/ComparisonSection";
import { InnovationsSection } from "./components/sections/InnovationsSection";
import { ApplicationsSection } from "./components/sections/ApplicationsSection";
import { DemoSection } from "./components/sections/DemoSection";
import { TimelineSection } from "./components/sections/TimelineSection";
import { TeamSection } from "./components/sections/TeamSection";
import { SihSection } from "./components/sections/SihSection";
import { ResourcesSection } from "./components/sections/ResourcesSection";
import { ContactSection } from "./components/sections/ContactSection";

export function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Sonar HUD Cursor */}
      <SonarCursor />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Desktop Floating HUD Section Index (01, 02, 03...) */}
      <SectionNavigator />

      {/* Main Showcase Flow */}
      <main>
        {/* 01: Hero */}
        <HeroSection />

        {/* 02: Core Idea */}
        <CoreIdeaSection />

        {/* 03: The Challenge / Problem */}
        <ProblemSection />

        {/* 04: Our Solution */}
        <SolutionSection />

        {/* 05: System Architecture */}
        <SystemArchitectureSection />

        {/* 06: Embedded Controller (STM32G474RE) */}
        <ControllerSection />

        {/* 07: Adaptive Sonar Logic (Interactive Synthesizer) */}
        <AdaptiveLogicSection />

        {/* 08: Frequency Concept Spectrum */}
        <FrequencyConceptSection />

        {/* 09: Cognitive Sonar Feedback Loop */}
        <CognitiveSonarSection />

        {/* 10: Prototype Hardware */}
        <HardwareSection />

        {/* 11: Technology Stack */}
        <TechStackSection />

        {/* 12: Why Adaptive Sonar? (Comparison) */}
        <ComparisonSection />

        {/* 13: Key Innovations */}
        <InnovationsSection />

        {/* 14: Potential Application Areas */}
        <ApplicationsSection />

        {/* 15: System in Action / Demo */}
        <DemoSection />

        {/* 16: Development & Testing Timeline */}
        <TimelineSection />

        {/* 17 & 18: Meet Team Shazam & Mentors */}
        <TeamSection />

        {/* 19: SIH 2026 Submission Showcase */}
        <SihSection />

        {/* 20: Documentation & Resources */}
        <ResourcesSection />

        {/* 21: Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
