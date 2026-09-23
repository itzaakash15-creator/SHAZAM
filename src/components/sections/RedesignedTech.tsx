import React from "react";
import { Cpu, Eye, Activity, Radio } from "lucide-react";

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
    <section id="technology" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4FBFD] border-t border-[#168AAD]/15">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            TECHNOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            Built Around a Compact Embedded Architecture.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B6673] font-light">
            Engineered for low-payload AUV energy budgets and deterministic real-time processing.
          </p>
        </div>

        {/* Central Controller Badge & Compact Tags */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-[rgba(8,51,68,0.10)] text-center mb-10 shadow-[0_4px_30px_rgba(8,51,68,0.06)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F7FA] text-[#168AAD] font-mono text-xs mb-3 border border-[#2EC4C9]/40 font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>CENTRAL CONTROLLER</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#083344] mb-2">
            STM32G474RE
          </h3>
          <p className="text-xs sm:text-sm text-[#4B6673] font-mono max-w-lg mx-auto mb-6">
            170 MHz ARM Cortex-M4 • Hardware Math Acceleration • Integrated Analog
          </p>

          {/* Compact Peripheral Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {mcuTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-[#E8F7FA] border border-[rgba(8,51,68,0.10)] text-xs font-mono text-[#168AAD] font-semibold"
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
                className="shazam-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F7FA] border border-[#2EC4C9]/30 flex items-center justify-center text-[#168AAD]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#083344]">
                    {grp.title}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {grp.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-xs sm:text-sm text-[#4B6673] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD]"></span>
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
