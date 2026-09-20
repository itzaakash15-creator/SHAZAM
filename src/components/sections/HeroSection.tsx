import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { SonarRadar } from "../ui/SonarRadar";
import { ChevronDown, ArrowUpRight, Radio, Shield, Waves, Cpu, Database } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid"
    >
      {/* Ambient Underwater Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-b from-cyan-600/15 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Depth Markers */}
      <div className="hidden lg:block absolute left-8 top-1/3 space-y-8 font-mono text-[10px] text-cyan-500/40 pointer-events-none select-none border-l border-cyan-500/20 pl-3">
        <div>
          <span className="block text-cyan-400/80 font-bold">DEPTH PROFILE</span>
          <span>Z = -120m [EPIPELAGIC]</span>
        </div>
        <div>
          <span className="block text-cyan-400/80 font-bold">SOUND SPEED</span>
          <span>c = 1502.4 m/s</span>
        </div>
        <div>
          <span className="block text-cyan-400/80 font-bold">THERMOCLINE</span>
          <span>ΔT/Δz = -0.14 °C/m</span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/3 space-y-8 font-mono text-[10px] text-cyan-500/40 pointer-events-none select-none border-r border-cyan-500/20 pr-3 text-right">
        <div>
          <span className="block text-cyan-400/80 font-bold">MCU ARCHITECTURE</span>
          <span>STM32G474RE 170MHz</span>
        </div>
        <div>
          <span className="block text-cyan-400/80 font-bold">CHIRP MODULATION</span>
          <span>LFM DIRECT SYNTHESIS</span>
        </div>
        <div>
          <span className="block text-cyan-400/80 font-bold">TELEMETRY LINK</span>
          <span>USART / 115200 BAUD</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>{PROJECT_DATA.eventName} {PROJECT_DATA.eventYear}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-sans tracking-normal">{PROJECT_DATA.teamName}</span>
        </div>

        {/* Main Heading with Subtle Cyan Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 bg-clip-text text-transparent">
            ADAPTIVE SONAR
          </span>{" "}
          <br />
          <span className="text-slate-100">TRANSMITTER FOR AUVs</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8">
          “{PROJECT_DATA.projectSubtitle}”
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#system"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer font-mono"
          >
            <span>Explore the System</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all backdrop-blur-md cursor-pointer font-mono"
          >
            <span>Meet Team Shazam</span>
          </a>
        </div>

        {/* Central Sonar Radar Visualization with AUV Silhouette HUD */}
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
          <SonarRadar size={420} className="scale-90 sm:scale-100" />

          {/* Minimal AUV Silhouette Overlay Tag */}
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs font-mono text-slate-300 backdrop-blur-sm">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>PAYLOAD: EMBEDDED TRANSDUCER DRIVER</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">ACTIVE ACOUSTIC PING</span>
          </div>
        </div>

        {/* Project Status Line */}
        <div className="mt-12 pt-6 border-t border-cyan-500/15 w-full max-w-xl flex items-center justify-center">
          <p className="text-[11px] sm:text-xs font-mono tracking-wider text-cyan-400/90 font-medium">
            {PROJECT_DATA.statusLine}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
