import React, { useState } from "react";
import { ARCHITECTURE_STEPS, ArchitectureStep } from "../../data/architecture";
import { Cpu, ArrowRight, CheckCircle2, ChevronRight, Activity, Radio, Repeat } from "lucide-react";

export const SystemArchitectureSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(5); // Default to Step 6: Choose Chirp Parameters
  const activeStep: ArchitectureStep = ARCHITECTURE_STEPS[activeStepIndex];

  return (
    <section id="system" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>05 // ENGINEERING PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How the System Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            An end-to-end 15-step hardware and firmware pipeline orchestrated by the central STM32 embedded controller—from multi-sensor acquisition to acoustic projection and cognitive echo verification.
          </p>
        </div>

        {/* Central Brain Callout Banner */}
        <div className="mb-12 p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-blue-950/60 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                CENTRAL PROCESSING NEXUS
              </span>
              <span className="text-sm font-semibold text-white">
                STM32G474RE High-Resolution Embedded Microcontroller
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>PIPELINE CLOCK: 170 MHz</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-300">15-STAGE CLOSED LOOP</span>
          </div>
        </div>

        {/* Interactive Architecture Flow View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Horizontal / Vertical Flow Step Navigator (Steps 1 to 15) */}
          <div className="lg:col-span-7 space-y-2 max-h-[640px] overflow-y-auto pr-2">
            {ARCHITECTURE_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              const isMcu = step.category === "mcu";
              const isFeedback = step.category === "feedback";

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-cyan-950/80 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] translate-x-1"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center ${
                        isSelected
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-900 text-cyan-400 border border-cyan-500/20"
                      }`}
                    >
                      {String(step.step).padStart(2, "0")}
                    </span>

                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                        {step.label}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono line-clamp-1">
                        {step.subtext}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase hidden sm:inline-block ${
                        isMcu
                          ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                          : isFeedback
                          ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {step.category}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-cyan-400 translate-x-0.5" : "text-slate-600"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Step Deep Dive Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30 font-semibold">
                  STEP {String(activeStep.step).padStart(2, "0")} OF 15
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>SUBSYSTEM LIVE</span>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {activeStep.label}
              </h3>

              <div className="mb-4 inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                Primary Hardware Actor: <strong className="text-white">{activeStep.hardwareActor}</strong>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* Subsystem Telemetry Badge */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Processing Category</span>
                  <span className="text-cyan-300 font-semibold uppercase">{activeStep.category} Domain</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Execution Priority</span>
                  <span className="text-emerald-400 font-semibold">Real-Time Deterministic</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Memory Transfer</span>
                  <span className="text-slate-200">Autonomous DMA Buffers</span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : ARCHITECTURE_STEPS.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-800 transition-colors cursor-pointer"
                >
                  ← PREV STEP
                </button>

                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                  <Repeat className="w-3.5 h-3.5" />
                  <span>CONTINUOUS CYCLE</span>
                </div>

                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < ARCHITECTURE_STEPS.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-xs font-mono text-cyan-200 transition-colors cursor-pointer"
                >
                  NEXT STEP →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
