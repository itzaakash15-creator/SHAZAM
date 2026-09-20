import React from "react";
import { Cpu, Eye, Activity, Radio, CheckCircle2 } from "lucide-react";

export const RedesignedTech: React.FC = () => {
  const mcuTags = ["ADC", "DAC", "DMA", "Timers", "CORDIC / FPU", "GPIO", "UART"];

  const groups = [
    {
      title: "Sensing",
      icon: Eye,
      items: ["Temperature", "Pressure / Depth", "Salinity", "Turbidity"],
    },
    {
      title: "Signal",
      icon: Activity,
      items: ["Adaptive LFM Chirp", "Dynamic Parameter Selection", "Waveform Control"],
    },
    {
      title: "Output",
      icon: Radio,
      items: ["Power Amplifier", "Acoustic Transducer", "Hydrophone / Verification"],
    },
  ];

  return (
    <section id="technology" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
            TECHNOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Built Around a Compact Embedded Architecture.
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-light">
            Engineered for low-payload AUV energy budgets and deterministic real-time processing.
          </p>
        </div>

        {/* Central Controller Badge & Compact Tags */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/30 text-center mb-10 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 font-mono text-xs mb-3 border border-cyan-500/25">
            <Cpu className="w-3.5 h-3.5" />
            <span>CENTRAL CONTROLLER</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            STM32G474RE
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-lg mx-auto mb-6">
            170 MHz ARM Cortex-M4 • Hardware Math Acceleration • Integrated Analog
          </p>

          {/* Compact Peripheral Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {mcuTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Small Visual Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {groups.map((grp) => {
            const Icon = grp.icon;
            return (
              <div
                key={grp.title}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {grp.title}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {grp.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
