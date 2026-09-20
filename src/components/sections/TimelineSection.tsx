import React from "react";
import { DEVELOPMENT_STAGES, TimelineStage } from "../../data/timeline";
import { CheckCircle2, Clock, Image as ImageIcon, Camera, Activity, TestTube } from "lucide-react";

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>16 // DEVELOPMENT & VALIDATION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Concept to Prototype
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A step-by-step engineering progression tracking our transition from theoretical acoustic wave derivations to physical bench testing and water tank prototype trials.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Vertical central tracking line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400 via-teal-500 to-cyan-900 -translate-x-1/2" />

          <div className="space-y-8">
            {DEVELOPMENT_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stage.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Marker on desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center text-cyan-300 font-mono text-xs font-bold z-10 shadow-[0_0_12px_#22d3ee]">
                    {idx + 1}
                  </div>

                  {/* Content Card (occupies 1/2 of the container) */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}>
                    <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-cyan-500/20 group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                          {stage.phaseNumber} • {stage.category}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            stage.status === "Completed"
                              ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                              : "bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 font-bold"
                          }`}
                        >
                          {stage.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                        {stage.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {stage.description}
                      </p>

                      {/* Milestones bullet points */}
                      <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                        {stage.milestones.map((m, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-1.5">
                            <span className="text-cyan-400 font-bold">›</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>

                      {stage.telemetrySnapshot && (
                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>{stage.telemetrySnapshot.label}</span>
                          <span className="text-cyan-300 font-semibold">{stage.telemetrySnapshot.value}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prototype Photographs Placeholders Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              BENCHTOP & WATER TANK TESTBED
            </span>
            <h3 className="text-2xl font-bold text-white">
              Prototype Photographic Evidence
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              (Photo placeholders ready to be updated with physical prototype build photos)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo Placeholder 1 */}
            <div className="rounded-2xl glass-panel border border-cyan-500/20 p-4 overflow-hidden group">
              <div className="relative aspect-video rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center p-4 overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="STM32 Board Prototyping"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <Camera className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white">STM32G474RE Controller PCB</span>
                  <span className="text-[10px] font-mono text-slate-300 mt-1">DAC Output & DMA Signal Routing</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>LAB PHOTO // 01</span>
                <span className="text-cyan-400">BENCH VERIFIED</span>
              </div>
            </div>

            {/* Photo Placeholder 2 */}
            <div className="rounded-2xl glass-panel border border-cyan-500/20 p-4 overflow-hidden group">
              <div className="relative aspect-video rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center p-4 overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                  alt="Oscilloscope Chirp Measurement"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <Activity className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white">Digital Oscilloscope Trace</span>
                  <span className="text-[10px] font-mono text-slate-300 mt-1">LFM Up-Chirp Waveform Verification</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>LAB PHOTO // 02</span>
                <span className="text-cyan-400">BANDWIDTH CHECK</span>
              </div>
            </div>

            {/* Photo Placeholder 3 */}
            <div className="rounded-2xl glass-panel border border-cyan-500/20 p-4 overflow-hidden group">
              <div className="relative aspect-video rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center p-4 overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
                  alt="Acoustic Water Tank Testing"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <TestTube className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-white">Hydrodynamic Testbed</span>
                  <span className="text-[10px] font-mono text-slate-300 mt-1">Submerged PZT Transducer & Hydrophone</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>LAB PHOTO // 03</span>
                <span className="text-cyan-400">ACOUSTIC PING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
