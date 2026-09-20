import React from "react";
import { ArrowRight, Activity, ShieldAlert, Sparkles, Sliders, Waves, Layers } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>03 // THE UNDERWATER PHYSICS DILEMMA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Fundamental Sonar Trade-Off
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            In underwater acoustics, physics enforces an immutable compromise between how far sound travels and how sharp the reflected imagery appears.
          </p>
        </div>

        {/* Trade-off Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Lower Frequencies */}
          <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-sky-500/30 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-sky-400 font-semibold uppercase px-2.5 py-1 rounded bg-sky-950/80 border border-sky-500/30">
                  LOW FREQUENCY REGION (~100 kHz)
                </span>
                <span className="text-xs font-mono text-slate-400">λ ≈ 1.5 cm</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Longer Range, Coarser Detail</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Physical Advantages
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                    <li><strong className="text-white">Longer Range Potential:</strong> Low acoustic absorption losses $\alpha(f) \propto f^2$.</li>
                    <li><strong className="text-white">Better Water Column Penetration:</strong> Bypasses suspended particles with minimal Rayleigh scattering.</li>
                    <li><strong className="text-white">Robust in Turbid Mud Plumes:</strong> Maintains echo SNR through sediment layers.</li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" /> Inherent Trade-off
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Lower Spatial Resolution:</strong> Wider acoustic beam divergence and broader pulse autocorrelation width make it difficult to resolve fine structural details or small subsea cables.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-sky-950/40 border border-sky-500/20 font-mono text-[11px] text-sky-300">
              Optimal Application: Long-range obstacle avoidance, bathymetric route scouting, and deep-water navigation.
            </div>
          </div>

          {/* Card 2: Higher Frequencies */}
          <div className="rounded-2xl p-6 sm:p-8 glass-panel border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-300 font-semibold uppercase px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30">
                  HIGH FREQUENCY REGION (~500 kHz)
                </span>
                <span className="text-xs font-mono text-slate-400">λ ≈ 0.3 cm</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">High Spatial Precision, Rapid Attenuation</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Physical Advantages
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                    <li><strong className="text-white">Finer Spatial Resolution:</strong> Centimeter and millimeter-level imaging capability.</li>
                    <li><strong className="text-white">Narrow Beam Focusing:</strong> High angular discrimination for pipeline and wreck inspection.</li>
                    <li><strong className="text-white">Sharp Autocorrelation Peak:</strong> Distinct multi-target separation in close proximity.</li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" /> Inherent Trade-off
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Severe Viscous Absorption & Scattering:</strong> Acoustic attenuation increases quadratically with frequency. Effective range shrinks drastically beyond 50–70 meters.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 font-mono text-[11px] text-cyan-300">
              Optimal Application: Close-quarters inspection, structural defect detection, and precision AUV docking.
            </div>
          </div>
        </div>

        {/* Environmental Clutter and Reverberation Insight */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 mb-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
            <Waves className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Underwater Clutter, Multipath & Reverberation
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In shallow littoral waters, sound reflects multiple times off the sea surface and the uneven ocean floor. High-frequency pings trigger severe acoustic reverberation and backscatter from suspended sediment plumes, corrupting received echoes unless the transmitter dynamically modifies its chirp bandwidth and pulse duration.
            </p>
          </div>
        </div>

        {/* Bold Conclusion Callout */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900/80 to-blue-950/50 border border-cyan-400/40 shadow-2xl relative">
          <p className="text-lg sm:text-2xl md:text-3xl font-heading font-extrabold text-white tracking-tight">
            “Range, resolution and environmental robustness cannot always be maximized using one fixed waveform.”
          </p>
          <span className="block mt-3 text-xs font-mono text-cyan-400 tracking-wider uppercase">
            Team Shazam Core Engineering Premise • SIH 2026
          </span>
        </div>
      </div>
    </section>
  );
};
