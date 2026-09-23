import React from "react";
import { 
  Eye, 
  Activity, 
  Cpu, 
  Sliders, 
  AudioWaveform, 
  Zap, 
  Radio, 
  Waves, 
  ShieldCheck, 
  RotateCw,
  ArrowRight,
  ArrowDown
} from "lucide-react";

export interface WorkflowStepItem {
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  tag: string;
  isFeedback?: boolean;
}

export const SystemWorkflowSection: React.FC = () => {
  const steps: WorkflowStepItem[] = [
    {
      number: "01",
      title: "Environmental Sensing",
      shortDesc: "Measures localized water temperature, salinity, turbidity, and hydrostatic depth.",
      icon: Eye,
      tag: "IN-SITU PROBES",
    },
    {
      number: "02",
      title: "Sensor Data Collection",
      shortDesc: "Differential analog conditioning with 12-bit SAR ADC acquisition.",
      icon: Activity,
      tag: "ADC SAMPLING",
    },
    {
      number: "03",
      title: "STM32G474RE Analysis",
      shortDesc: "Calculates sound velocity gradient c(T,S,z) and absorption attenuation.",
      icon: Cpu,
      tag: "CORE PROCESSING",
    },
    {
      number: "04",
      title: "Adaptive Parameter Selection",
      shortDesc: "Selects optimal carrier band (80–500 kHz), bandwidth, and pulse width.",
      icon: Sliders,
      tag: "DECISION MATRIX",
    },
    {
      number: "05",
      title: "LFM Chirp Generation",
      shortDesc: "Direct synthesis via CORDIC hardware math streamed directly into DAC.",
      icon: AudioWaveform,
      tag: "CORDIC + DAC",
    },
    {
      number: "06",
      title: "Power Amplifier",
      shortDesc: "Class-D high-efficiency driver amplifies analog voltage for the piezo crystal.",
      icon: Zap,
      tag: "CLASS-D STAGE",
    },
    {
      number: "07",
      title: "Acoustic Transducer",
      shortDesc: "Broadband piezoceramic projector converts electrical chirp to sound wave.",
      icon: Radio,
      tag: "PZT PROJECTOR",
    },
    {
      number: "08",
      title: "Underwater Transmission",
      shortDesc: "Acoustic pressure wave propagates through the marine water column.",
      icon: Waves,
      tag: "ACOUSTIC WAVE",
    },
    {
      number: "09",
      title: "Receive & Verification",
      shortDesc: "Hydrophone captures returned echo to assess signal-to-noise ratio (SNR).",
      icon: ShieldCheck,
      tag: "ECHO METRICS",
    },
    {
      number: "10",
      title: "Adaptive Update / Repeat",
      shortDesc: "Closed-loop feedback retunes next ping parameters if conditions shift.",
      icon: RotateCw,
      tag: "CLOSED LOOP",
      isFeedback: true,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ocean-subtle-gradient relative border-t border-[rgba(8,51,68,0.10)] overflow-hidden">
      {/* Soft underwater ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#2EC4C9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            SYSTEM WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            Complete Project Working Flow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B6673] font-light leading-relaxed">
            The end-to-end adaptive transmission pipeline running continuously onboard the Autonomous Underwater Vehicle.
          </p>
        </div>

        {/* 10-Step Flowchart Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[rgba(8,51,68,0.10)] shadow-[0_4px_30px_rgba(8,51,68,0.06)]">
          {/* Desktop Serpentine Grid: Row 1 (Steps 1 to 5) & Row 2 (Steps 6 to 10) */}
          <div className="space-y-6">
            
            {/* ROW 1: Steps 1 to 5 (Left to Right) */}
            <div>
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-[10px] font-mono text-[#168AAD] font-bold uppercase tracking-wider">
                  PHASE 1: SENSING & CHIRP SYNTHESIS
                </span>
                <span className="text-[10px] font-mono text-[#4B6673] hidden sm:inline">
                  STEPS 01 → 05
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {steps.slice(0, 5).map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="shazam-card p-4 flex flex-col justify-between group relative"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-bold text-[#168AAD] bg-[#E8F7FA] px-2 py-0.5 rounded border border-[#2EC4C9]/35">
                            {step.number}
                          </span>
                          <span className="text-[9px] font-mono text-[#4B6673] uppercase">
                            {step.tag}
                          </span>
                        </div>

                        <div className="w-8 h-8 rounded-xl bg-[#E8F7FA] border border-[#2EC4C9]/30 flex items-center justify-center text-[#168AAD] mb-2.5 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-[#083344] mb-1 leading-snug group-hover:text-[#168AAD] transition-colors">
                          {step.title}
                        </h4>

                        <p className="text-[11px] text-[#4B6673] font-light leading-relaxed">
                          {step.shortDesc}
                        </p>
                      </div>

                      {/* Directional indicator between steps on desktop */}
                      {idx < 4 && (
                        <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#168AAD]/60">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connecting transition badge between row 1 and row 2 */}
            <div className="flex items-center justify-center gap-3 py-1">
              <div className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent to-[#168AAD]/25" />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F7FA] border border-[#2EC4C9]/40 text-[10px] font-mono text-[#168AAD] font-semibold">
                <span>STAGE ADVANCE: DAC TO TRANSDUCER EMISSION</span>
                <ArrowDown className="w-3 h-3 text-[#168AAD]" />
              </div>
              <div className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent to-[#168AAD]/25" />
            </div>

            {/* ROW 2: Steps 6 to 10 (Transmission & Closed-Loop Verification) */}
            <div>
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-[10px] font-mono text-[#168AAD] font-bold uppercase tracking-wider">
                  PHASE 2: EMISSION & COGNITIVE FEEDBACK
                </span>
                <span className="text-[10px] font-mono text-[#4B6673] hidden sm:inline">
                  STEPS 06 → 10
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {steps.slice(5, 10).map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === 4;

                  return (
                    <div
                      key={step.number}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between group relative ${
                        isLast
                          ? "bg-gradient-to-br from-[#E8F7FA] to-[#DDF5F7] border-[#2EC4C9] shadow-[0_4px_20px_rgba(22,138,173,0.15)]"
                          : "shazam-card"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                            isLast 
                              ? "bg-[#168AAD] text-white border-transparent"
                              : "text-[#168AAD] bg-[#E8F7FA] border-[#2EC4C9]/35"
                          }`}>
                            {step.number}
                          </span>
                          <span className={`text-[9px] font-mono uppercase ${
                            isLast ? "text-[#168AAD] font-semibold" : "text-[#4B6673]"
                          }`}>
                            {step.tag}
                          </span>
                        </div>

                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-105 ${
                          isLast 
                            ? "bg-[#168AAD] text-white shadow-xs" 
                            : "bg-[#E8F7FA] text-[#168AAD] border border-[#2EC4C9]/30"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-[#083344] mb-1 leading-snug group-hover:text-[#168AAD] transition-colors">
                          {step.title}
                        </h4>

                        <p className="text-[11px] text-[#4B6673] font-light leading-relaxed">
                          {step.shortDesc}
                        </p>
                      </div>

                      {/* Directional indicator between steps on desktop */}
                      {idx < 4 && (
                        <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#168AAD]/60">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Closed Loop Return Callout Banner */}
          <div className="mt-8 pt-6 border-t border-[rgba(8,51,68,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#168AAD]">
              <RotateCw className="w-4 h-4 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="font-semibold text-[#083344]">CLOSED-LOOP FEEDBACK:</span>
              <span className="text-[#4B6673] font-sans">
                Echo degradation automatically recalculates chirp carrier and bandwidth for the next ping cycle.
              </span>
            </div>
            <span className="text-[#168AAD] font-semibold shrink-0">
              CONTINUOUS ADAPTIVE CYCLE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
