import React from "react";
import { ChevronRight, Cpu, Radio, Eye, Zap, Waves, Activity } from "lucide-react";

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
    <section id="solution" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4FBFD] border-t border-[#168AAD]/15">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            OUR SOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            A Sonar Transmitter That Adapts.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6673] font-light leading-relaxed">
            Team Shazam is developing an embedded sonar transmitter that senses underwater conditions, selects suitable transmission parameters and generates an adaptive LFM chirp in real time.
          </p>
        </div>

        {/* Clean, Elegant Horizontal / Vertical Block Diagram */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[rgba(8,51,68,0.10)] shadow-[0_4px_30px_rgba(8,51,68,0.06)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {pipeline.map((block, idx) => {
              const Icon = block.icon;
              return (
                <div key={block.label} className="flex flex-col items-center text-center relative group">
                  <div
                    className={`w-full p-4 rounded-2xl border transition-all flex flex-col items-center justify-between min-h-[140px] ${
                      block.highlight
                        ? "bg-gradient-to-br from-[#168AAD] to-[#083344] text-white border-[#2EC4C9] shadow-[0_6px_20px_rgba(22,138,173,0.25)]"
                        : "bg-[#F4FBFD] border-[#168AAD]/15 hover:border-[#2EC4C9]/60 hover:bg-[#E8F7FA]/80 text-[#083344]"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                        block.highlight
                          ? "bg-white text-[#083344]"
                          : "bg-white text-[#168AAD] border border-[#168AAD]/20 shadow-xs"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <h4 className={`text-xs sm:text-sm font-bold mb-1 leading-snug ${
                      block.highlight ? "text-white" : "text-[#083344]"
                    }`}>
                      {block.label}
                    </h4>

                    <span className={`text-[10px] font-mono line-clamp-2 ${
                      block.highlight ? "text-cyan-100" : "text-[#4B6673]"
                    }`}>
                      {block.sub}
                    </span>
                  </div>

                  {/* Flow Arrow (visible on desktop between items) */}
                  {idx < pipeline.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#168AAD]/60">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#168AAD]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#4B6673]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[#083344] font-medium">Fully Integrated Embedded Architecture</span>
            </span>
            <span className="text-[#168AAD] font-semibold">
              Low-Power • Direct CORDIC Synthesis • Subsea AUV Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
