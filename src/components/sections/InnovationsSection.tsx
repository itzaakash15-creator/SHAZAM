import React from "react";
import { KEY_INNOVATIONS, InnovationItem } from "../../data/innovations";
import { Compass, Activity, Sliders, Zap, RotateCw, Layers } from "lucide-react";

export const InnovationsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Activity,
    Sliders,
    Zap,
    RotateCw,
    Layers,
  };

  return (
    <section id="innovations" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>13 // TECHNICAL DIFFERENTIATORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Key Engineering Innovations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Six fundamental architectural breakthroughs enabling low-power dynamic waveform adaptability directly inside autonomous subsea vehicles.
          </p>
        </div>

        {/* 6 Large Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_INNOVATIONS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Activity;

            return (
              <div
                key={item.number}
                className="rounded-2xl p-7 glass-panel glass-panel-hover border border-cyan-500/20 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Number Watermark */}
                <div className="absolute -top-3 -right-2 font-mono text-6xl font-black text-cyan-500/10 group-hover:text-cyan-400/20 transition-colors pointer-events-none select-none">
                  {item.number}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-bold">
                      INNOVATION // {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">CORE METRIC</span>
                  <span className="text-cyan-300 font-semibold">{item.technicalMetric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
