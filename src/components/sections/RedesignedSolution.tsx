import React from "react";
import { ArrowRight, ChevronRight, Cpu, Radio, Eye, Zap, Waves, Activity } from "lucide-react";

export const RedesignedSolution: React.FC = () => {
  const pipeline = [
    { label: "Environmental Sensors", sub: "Temp • Pressure • Salinity • Turbidity", icon: Eye },
    { label: "STM32G474RE", sub: "Onboard Real-Time Decision Core", icon: Cpu, highlight: true },
    { label: "Adaptive Chirp Generation", sub: "Hardware CORDIC Direct Synthesis", icon: Activity },
    { label: "Power Amplifier", sub: "Class-D Acoustic Transducer Driver", icon: Zap },
    { label: "Acoustic Transducer", sub: "Broadband Piezoceramic Projector", icon: Radio },
    { label: "Underwater Transmission", sub: "Optimized Dynamic Waveform", icon: Waves },
  ];

  return (
    <section id="solution" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
            OUR SOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            A Sonar Transmitter That Adapts.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Team Shazam is developing an embedded sonar transmitter that senses underwater conditions, selects suitable transmission parameters and generates an adaptive LFM chirp in real time.
          </p>
        </div>

        {/* Clean, Elegant Horizontal / Vertical Block Diagram */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/60 border border-cyan-500/20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {pipeline.map((block, idx) => {
              const Icon = block.icon;
              return (
                <div key={block.label} className="flex flex-col items-center text-center relative group">
                  <div
                    className={`w-full p-4 rounded-2xl border transition-all flex flex-col items-center justify-between min-h-[140px] ${
                      block.highlight
                        ? "bg-cyan-950/70 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                        : "bg-slate-900/60 border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                        block.highlight
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-950 text-cyan-400 border border-slate-800"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug">
                      {block.label}
                    </h4>

                    <span className="text-[10px] text-slate-400 font-mono line-clamp-2">
                      {block.sub}
                    </span>
                  </div>

                  {/* Flow Arrow (visible on desktop between items) */}
                  {idx < pipeline.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-cyan-400/60">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Fully Integrated Embedded Architecture</span>
            </span>
            <span className="text-cyan-400">
              Low-Power • Direct CORDIC Synthesis • Subsea AUV Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
