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
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#020617] border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            The Ocean Changes. <br />
            <span className="text-cyan-400">The Signal Should Too.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
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
                className="p-6 sm:p-7 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
