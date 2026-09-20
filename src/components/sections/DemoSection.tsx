import React, { useState } from "react";
import { PROJECT_DATA } from "../../data/project";
import { Play, Eye, Sliders, Radio, ExternalLink, X, Film, Activity } from "lucide-react";

export const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const demo = PROJECT_DATA.demoVideo;

  const stages = [
    {
      num: "01",
      title: "SENSE",
      icon: Eye,
      description: "Analog optical turbidity probe & CTD sensors stream ambient water column metrics into the STM32 12-bit ADC channels at 50 Hz.",
      status: "Telemetry Active",
    },
    {
      num: "02",
      title: "ADAPT",
      icon: Sliders,
      description: "Onboard rule engine evaluates absorption curves, selecting optimal center frequency $f_c$ and pulse width $T$ within 12 ms.",
      status: "CORDIC Processing",
    },
    {
      num: "03",
      title: "TRANSMIT",
      icon: Radio,
      description: "Circular DMA triggers 15 MSPS DAC, driving the Class-D acoustic power amplifier and broadband piezo transducer into the test tank.",
      status: "Acoustic Projection",
    },
  ];

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>15 // SYSTEM VALIDATION & DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {demo.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            “{demo.subtitle}”
          </p>
        </div>

        {/* Cinematic Video Showcase Container */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] aspect-video bg-slate-950 flex items-center justify-center group">
            {/* If video URL is active or user clicked play */}
            {isPlaying && !demo.isPlaceholder ? (
              <iframe
                src={`${demo.videoUrl}?autoplay=1`}
                title="Team Shazam Demonstration Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Cinematic Background Backdrop Image */}
                <img
                  src={demo.posterImage}
                  alt="Underwater AUV Sonar Demonstration"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient Sonar Overlay Grid */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

                {/* Central Play Button */}
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-110 transition-all cursor-pointer group/btn"
                    aria-label="Play Demonstration Video"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center pl-1 group-hover/btn:bg-cyan-300 transition-colors shadow-lg">
                      <Play className="w-7 h-7 fill-current" />
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border border-cyan-400/60 animate-ping"></div>
                  </button>

                  <div className="mt-6">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
                      SIH 2026 HARDWARE PROTOTYPE DEMONSTRATION
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Benchtop Oscilloscope & Hydrophone Tank Test
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      (Video URL easily replaceable in src/data/project.ts)
                    </p>
                  </div>
                </div>

                {/* Top Corner Telemetry HUD */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                  <Film className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DEMO DURATION: {demo.duration}</span>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/20 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>HYDROPHONE CAPTURE: 1080p 60FPS</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Three Stages Underneath: 01 SENSE, 02 ADAPT, 03 TRANSMIT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stages.map((st) => {
            const IconComponent = st.icon;

            return (
              <div
                key={st.num}
                className="rounded-2xl p-6 glass-panel border border-cyan-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-cyan-400/40">
                      {st.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">STATUS</span>
                  <span className="text-cyan-300 font-semibold">{st.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
