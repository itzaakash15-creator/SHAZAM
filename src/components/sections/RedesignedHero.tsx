import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { HeroVideo } from "../ui/HeroVideo";
import { ArrowRight, ChevronDown, Radio, Activity, Zap } from "lucide-react";

export const RedesignedHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden"
    >
      {/* Soft oceanic ambient light behind video */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Top Text & Branding Container */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{PROJECT_DATA.eventName}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Adaptive Sonar <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 bg-clip-text text-transparent">
              Transmitter for AUVs
            </span>
          </h1>

          {/* Short Crisp Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            “{PROJECT_DATA.shortDescription}”
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all font-mono"
            >
              <span>Explore Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/25 hover:border-cyan-400/50 transition-all backdrop-blur-sm font-mono"
            >
              <span>How It Works</span>
            </a>
          </div>

          {/* Exactly 3 Project Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {PROJECT_DATA.heroTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Centerpiece Hero Video Showcase */}
        <div className="max-w-5xl mx-auto">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
};
