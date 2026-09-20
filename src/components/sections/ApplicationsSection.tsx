import React from "react";
import { APPLICATION_AREAS } from "../../data/innovations";
import { Map, Crosshair, Waves, LifeBuoy, ShieldCheck, Navigation, Anchor, Target } from "lucide-react";

export const ApplicationsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Map,
    Crosshair,
    Waves,
    LifeBuoy,
    ShieldCheck,
    Navigation,
    Anchor,
    Target,
  };

  return (
    <section id="applications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>14 // OPERATIONAL HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Potential Application Areas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The adaptive sonar transmitter architecture provides a versatile acoustic front-end across commercial, oceanographic, and strategic subsea domains.
          </p>
          <div className="mt-3 text-xs font-mono text-slate-400">
            * Prospective operational mission envelopes enabled by dynamic waveform adaptation.
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATION_AREAS.map((app) => {
            const IconComponent = iconMap[app.icon] || Map;

            return (
              <div
                key={app.id}
                className="rounded-2xl p-6 glass-panel glass-panel-hover border border-cyan-500/15 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/20 text-cyan-400 font-medium">
                      {app.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-cyan-400/80 flex items-center justify-between">
                  <span>DEPLOYMENT</span>
                  <span>AUV PAYLOAD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
