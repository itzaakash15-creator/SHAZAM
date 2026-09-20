import React, { useState, useEffect } from "react";

interface SectionMarker {
  id: string;
  num: string;
  label: string;
}

const SECTION_MARKERS: SectionMarker[] = [
  { id: "hero", num: "01", label: "Hero" },
  { id: "core-idea", num: "02", label: "Core Idea" },
  { id: "problem", num: "03", label: "The Challenge" },
  { id: "solution", num: "04", label: "Our Solution" },
  { id: "system", num: "05", label: "System Architecture" },
  { id: "controller", num: "06", label: "STM32 Controller" },
  { id: "adaptive-logic", num: "07", label: "Adaptive Logic" },
  { id: "frequency", num: "08", label: "Frequency Spectrum" },
  { id: "cognitive", num: "09", label: "Cognitive Feedback" },
  { id: "hardware", num: "10", label: "Hardware" },
  { id: "tech-stack", num: "11", label: "Tech Stack" },
  { id: "comparison", num: "12", label: "Why Adaptive?" },
  { id: "innovations", num: "13", label: "Key Innovations" },
  { id: "applications", num: "14", label: "Applications" },
  { id: "demo", num: "15", label: "System Demo" },
  { id: "timeline", num: "16", label: "Testing Timeline" },
  { id: "team", num: "17", label: "Team Shazam" },
  { id: "mentors", num: "18", label: "Mentors" },
  { id: "sih-showcase", num: "19", label: "SIH 2026" },
  { id: "resources", num: "20", label: "Resources" },
  { id: "contact", num: "21", label: "Contact" },
];

export const SectionNavigator: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTION_MARKERS.length - 1; i >= 0; i--) {
        const marker = SECTION_MARKERS[i];
        const el = document.getElementById(marker.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(marker.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Section Navigation"
      className="hidden 2xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1.5 py-3 px-1.5 rounded-full bg-slate-950/70 border border-cyan-500/20 backdrop-blur-md shadow-2xl"
    >
      <div className="text-[9px] font-mono text-cyan-400/80 mb-1 tracking-widest uppercase">HUD</div>

      <div className="flex flex-col gap-1 max-h-[72vh] overflow-y-auto pr-0.5 no-scrollbar">
        {SECTION_MARKERS.map((marker) => {
          const isActive = activeSection === marker.id;
          return (
            <a
              key={marker.id}
              href={`#${marker.id}`}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
              title={`${marker.num} — ${marker.label}`}
            >
              {/* Dot & Number */}
              <span
                className={`font-mono text-[9px] transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 font-bold scale-110"
                    : "text-slate-500 group-hover:text-slate-300"
                }`}
              >
                {marker.num}
              </span>

              {/* Active Glow Indicator */}
              {isActive && (
                <span className="absolute -left-1.5 w-1 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              )}

              {/* Tooltip on hover */}
              <span className="absolute right-8 px-2 py-1 rounded bg-slate-900/95 border border-cyan-500/30 text-[10px] font-mono text-cyan-200 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
                {marker.num} • {marker.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
