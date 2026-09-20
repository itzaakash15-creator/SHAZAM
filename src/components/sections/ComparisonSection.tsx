import React from "react";
import { COMPARISON_TABLE } from "../../data/innovations";
import { Check, X, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>12 // ARCHITECTURAL COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Adaptive Sonar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A methodical architectural breakdown of how real-time acoustic parameter selection overcomes the limitations of legacy fixed systems.
          </p>

          {/* Explicit framing required by prompt */}
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
            * Compared with a fixed-parameter sonar transmitter architecture.
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-2xl glass-panel border border-cyan-500/25 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/90 border-b border-cyan-500/20 text-xs font-mono">
                  <th className="py-4 px-5 text-slate-400 font-semibold w-1/4">ENGINEERING PARAMETER</th>
                  <th className="py-4 px-5 text-rose-400 font-semibold w-5/12 bg-rose-950/20 border-r border-slate-800">
                    TRADITIONAL FIXED ARCHITECTURE
                  </th>
                  <th className="py-4 px-5 text-cyan-300 font-bold w-5/12 bg-cyan-950/30">
                    TEAM SHAZAM ADAPTIVE TRANSMITTER
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors ${idx % 2 === 0 ? "bg-slate-950/30" : "bg-slate-900/20"} hover:bg-slate-900/60`}
                  >
                    {/* Feature Label */}
                    <td className="py-4 px-5 font-semibold text-slate-200 font-mono text-xs">
                      {row.feature}
                      <span className="block text-[11px] text-slate-400 font-sans font-normal mt-0.5">
                        {row.impact}
                      </span>
                    </td>

                    {/* Traditional Approach */}
                    <td className="py-4 px-5 text-slate-400 border-r border-slate-800/80 bg-rose-950/5">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    {/* Team Shazam Approach */}
                    <td className="py-4 px-5 text-cyan-100 bg-cyan-950/10">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                        <span className="font-medium text-slate-100">{row.shazam}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Qualification Note */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Evaluation Criteria: Subsea Operational Endurance & Echo Discrimination</span>
            <span className="text-cyan-400 font-semibold">SIH 2026 BENCHMARK</span>
          </div>
        </div>
      </div>
    </section>
  );
};
