import React from "react";
import { Eye, SlidersHorizontal, BatteryCharging, Cpu, ArrowUpRight } from "lucide-react";

export const SolutionSection: React.FC = () => {
  const cards = [
    {
      num: "01",
      title: "ENVIRONMENT AWARE",
      icon: Eye,
      tagline: "In-Situ Sensor Intelligence",
      description: "Reads environmental sensor data in real time, measuring temperature, salinity, turbidity, and hydrostatic depth to dynamically characterize sound velocity and acoustic attenuation.",
      metric: "50 Hz Telemetry Polling",
    },
    {
      num: "02",
      title: "ADAPTIVE WAVEFORM",
      icon: SlidersHorizontal,
      tagline: "Dynamic LFM Synthesis",
      description: "Changes chirp characteristics—including center frequency, modulation bandwidth, pulse duration, and window envelope—depending on measured water column conditions.",
      metric: "80 kHz to 500 kHz Span",
    },
    {
      num: "03",
      title: "LOW POWER",
      icon: BatteryCharging,
      tagline: "Autonomous Subsea Endurance",
      description: "Designed around an efficient embedded STM32 architecture that minimizes quiescent battery draw, extending the operational mission duration of autonomous underwater vehicles.",
      metric: "< 1.8W Standby / High Efficiency",
    },
    {
      num: "04",
      title: "REAL-TIME CONTROL",
      icon: Cpu,
      tagline: "Zero-Latency Edge Decision",
      description: "Waveform generation, parameter optimization, and adaptation happen entirely onboard the AUV without relying on surface umbilical cables or remote operator commands.",
      metric: "< 12 ms Adaptation Latency",
    },
  ];

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>04 // THE PROPOSED INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet the Adaptive Sonar Transmitter
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Team Shazam proposes a low-power, real-time adaptive sonar transmitter for Autonomous Underwater Vehicles. Instead of transmitting one fixed waveform, the system reads environmental conditions and dynamically selects suitable sonar transmission parameters.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="rounded-2xl p-6 glass-panel glass-panel-hover flex flex-col justify-between group border border-cyan-500/20 relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    {card.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>METRIC</span>
                  <span className="text-cyan-300 font-semibold">{card.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA row */}
        <div className="mt-14 text-center">
          <a
            href="#system"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 tracking-wider"
          >
            <span>See Detailed System Architecture Flow</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
