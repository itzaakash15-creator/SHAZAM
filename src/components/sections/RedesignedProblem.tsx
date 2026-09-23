import React from "react";
import { Waves, Sliders, AlertTriangle } from "lucide-react";

export const RedesignedProblem: React.FC = () => {
  const cards = [
    {
      icon: Waves,
      title: "Changing Environment",
      desc: "Water temperature, salinity, turbidity, and pressure fluctuate continuously, shifting acoustic absorption and sound speed.",
    },
    {
      icon: Sliders,
      title: "Range vs Resolution",
      desc: "Low frequencies travel farther but lose spatial clarity; high frequencies provide fine imaging but attenuate rapidly.",
    },
    {
      icon: AlertTriangle,
      title: "Fixed Parameters",
      desc: "Conventional sonar systems use static, hardcoded waveforms that cannot adapt when ocean conditions degrade signal return.",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ocean-subtle-gradient border-t border-[#168AAD]/15">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            The Ocean Changes. <br />
            <span className="text-[#168AAD]">The Signal Should Too.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6673] font-light leading-relaxed">
            Temperature, pressure, salinity, turbidity, depth and underwater noise affect acoustic propagation. A fixed sonar waveform cannot always provide the ideal balance between range and resolution.
          </p>
        </div>

        {/* 3 Minimal Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#168AAD]/15 hover:border-[#2EC4C9]/50 shadow-[0_4px_20px_-4px_rgba(22,138,173,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(22,138,173,0.18)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#E8F7FA] border border-[#2EC4C9]/30 flex items-center justify-center text-[#168AAD] mb-5 group-hover:border-[#2EC4C9]/60 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#083344] mb-2.5 group-hover:text-[#168AAD] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B6673] leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#168AAD]/10 flex items-center gap-1.5 text-[10px] font-mono text-[#168AAD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD]" />
                  <span>Acoustic Limitation</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
