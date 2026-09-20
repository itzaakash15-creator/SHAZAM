import React from "react";
import { RotateCw, ArrowRight, ArrowDown, Check, X, ShieldCheck, Zap, Radio, Activity } from "lucide-react";

export const CognitiveSonarSection: React.FC = () => {
  const loopStages = [
    { step: "SENSE", label: "Read Multi-Sensor Water Column Telemetry", icon: Radio },
    { step: "DECIDE", label: "Formulate Chirp Parameters on STM32 Core", icon: Activity },
    { step: "TRANSMIT", label: "Drive Transducer via Class-D Power Amp", icon: Zap },
    { step: "VERIFY", label: "Measure Echo SNR via Hydrophone", icon: ShieldCheck },
    { step: "ADAPT", label: "Modify Parameters if Return is Degraded", icon: RotateCw },
  ];

  return (
    <section id="cognitive" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>09 // CLOSED-LOOP INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Beyond Adaptation: <br />
            <span className="text-cyan-400">Cognitive Feedback</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Standard adaptive systems react once and stop. Team Shazam introduces an optional cognitive echo verification loop that inspects returned acoustic reflections and self-corrects in real time.
          </p>
        </div>

        {/* 5-Stage Circular Badge Banner */}
        <div className="max-w-4xl mx-auto mb-14 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs text-center shadow-lg">
          {loopStages.map((stage, idx) => (
            <React.Fragment key={stage.step}>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/25 text-cyan-300 font-bold">
                <span>{stage.step}</span>
              </div>
              {idx < loopStages.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Cognitive Decision Tree Diagram */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Animated Ambient Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center space-y-4 font-mono text-xs relative z-10">
            {/* Step 1: Sense */}
            <div className="w-full max-w-md p-3.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-center text-slate-200 shadow-md">
              <span className="text-[10px] text-cyan-400 uppercase block font-bold">STAGE 01</span>
              Sense Environment (Temp, Turbidity, Salinity, Pressure)
            </div>

            <ArrowDown className="w-4 h-4 text-cyan-400" />

            {/* Step 2: Select */}
            <div className="w-full max-w-md p-3.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-center text-slate-200 shadow-md">
              <span className="text-[10px] text-cyan-400 uppercase block font-bold">STAGE 02</span>
              Select Optimal Chirp Parameters (f₀, Bandwidth, Duration)
            </div>

            <ArrowDown className="w-4 h-4 text-cyan-400" />

            {/* Step 3: Transmit */}
            <div className="w-full max-w-md p-3.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-center text-slate-200 shadow-md">
              <span className="text-[10px] text-cyan-400 uppercase block font-bold">STAGE 03</span>
              Transmit Acoustic Pulse into Water Column
            </div>

            <ArrowDown className="w-4 h-4 text-cyan-400" />

            {/* Step 4: Evaluate */}
            <div className="w-full max-w-md p-3.5 rounded-xl bg-cyan-950/70 border border-cyan-400 text-center text-cyan-200 font-bold shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <span className="text-[10px] text-cyan-300 uppercase block font-bold">STAGE 04</span>
              Evaluate Received Echo: Matched Filter SNR & Clutter Peak
            </div>

            <ArrowDown className="w-4 h-4 text-cyan-400" />

            {/* Decision Diamond */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-2 border-cyan-400/80 text-center shadow-xl max-w-sm w-full">
              <span className="text-xs uppercase text-cyan-300 font-bold tracking-wider block">
                DECISION FORK
              </span>
              <span className="text-sm font-bold text-white block mt-0.5">
                Echo Performance Acceptable?
              </span>
            </div>

            {/* Branching YES / NO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl pt-2">
              {/* YES Branch */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 flex flex-col items-center text-center">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-2">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-bold text-emerald-300 text-xs">YES // ACCEPTABLE</span>
                <span className="text-[11px] text-slate-300 mt-1">
                  Continue autonomous mission trajectory at nominal ping cadence.
                </span>
              </div>

              {/* NO Branch */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 flex flex-col items-center text-center">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-2">
                  <RotateCw className="w-4 h-4" />
                </div>
                <span className="font-bold text-amber-300 text-xs">NO // DEGRADED SNR</span>
                <span className="text-[11px] text-slate-300 mt-1">
                  Modify chirp parameters (lower frequency or increase duration) → Retransmit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
