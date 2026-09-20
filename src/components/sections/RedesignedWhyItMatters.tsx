import React from "react";
import { X, Check } from "lucide-react";

export const RedesignedWhyItMatters: React.FC = () => {
  const points = [
    {
      fixed: "Rigid, predefined carrier frequency",
      shazam: "Dynamic frequency adaptation (80–500 kHz)",
    },
    {
      fixed: "Blind to temperature, salinity & turbidity",
      shazam: "Real-time in-situ multi-sensor acquisition",
    },
    {
      fixed: "Signal degrades when water clarity changes",
      shazam: "Adjusts chirp slope and duration automatically",
    },
    {
      fixed: "Open-loop transmission",
      shazam: "Cognitive feedback & echo verification potential",
    },
  ];

  return (
    <section id="why-it-matters" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#020617] border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
            WHY IT MATTERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            From Fixed Transmission <br />
            <span className="text-cyan-400">to Environment-Aware Sonar.</span>
          </h2>
        </div>

        {/* Minimalist Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Left: Fixed-Parameter */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 font-semibold block mb-4 uppercase tracking-wider">
                TRADITIONAL APPROACH
              </span>
              <h3 className="text-xl font-bold text-slate-300 mb-6">
                Fixed-Parameter Transmitter
              </h3>
              <ul className="space-y-4">
                {points.map((p) => (
                  <li key={p.fixed} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{p.fixed}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Team Shazam */}
          <div className="p-6 sm:p-8 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold block mb-4 uppercase tracking-wider">
                SIH 2026 INNOVATION
              </span>
              <h3 className="text-xl font-bold text-white mb-6">
                Team Shazam
              </h3>
              <ul className="space-y-4">
                {points.map((p) => (
                  <li key={p.shazam} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                    <span className="font-medium text-white">{p.shazam}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* One Strong Bold Takeaway Line */}
        <div className="text-center p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-cyan-500/20 shadow-lg">
          <p className="text-base sm:text-xl md:text-2xl font-heading font-bold text-white leading-snug">
            “Better control over the trade-off between range, resolution and changing underwater conditions.”
          </p>
        </div>
      </div>
    </section>
  );
};
