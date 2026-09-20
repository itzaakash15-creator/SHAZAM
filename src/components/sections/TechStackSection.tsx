import React from "react";
import { Cpu, Activity, Radio, Eye, TestTube, CheckCircle, Terminal } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const stack = [
    {
      category: "EMBEDDED",
      badge: "FIRMWARE & SILICON",
      icon: Cpu,
      items: [
        { name: "STM32G474RE", note: "170 MHz ARM Cortex-M4 Microcontroller" },
        { name: "Embedded C / C++", note: "Bare-metal HAL, optimized low-level registers" },
        { name: "Hardware CORDIC", note: "Hardware accelerated trigonometric calculations" },
        { name: "Direct Memory Access (DMA)", note: "Autonomous circular DAC sample streaming" },
      ],
    },
    {
      category: "SIGNAL PROCESSING",
      badge: "DSP & ACOUSTICS",
      icon: Activity,
      items: [
        { name: "LFM Chirp Generation", note: "Linear frequency modulation direct synthesis" },
        { name: "Adaptive Parameter Selection", note: "Rule-based and empirical decision tables" },
        { name: "Matched Filtering", note: "Echo correlation for pulse compression gain" },
        { name: "Spectral Windowing", note: "Tukey and Taylor sidelobe suppression" },
      ],
    },
    {
      category: "COMMUNICATION",
      badge: "BUS PROTOCOLS",
      icon: Radio,
      items: [
        { name: "UART / Debug Interface", note: "115200 / 921600 baud high-speed telemetry" },
        { name: "I2C Fast Mode", note: "Interfacing depth & pressure sensor at 400 kHz" },
        { name: "SPI Master Bus", note: "High-rate digital sensor acquisition" },
        { name: "AUV CAN-Bus Ready", note: "Standardized subsea vehicle messaging" },
      ],
    },
    {
      category: "SENSING",
      badge: "WATER COLUMN METROLOGY",
      icon: Eye,
      items: [
        { name: "Temperature Metrology", note: "Sound speed gradient calculation c(T,S,z)" },
        { name: "Hydrostatic Pressure", note: "High-precision depth estimation down to 300m" },
        { name: "Conductivity / Salinity", note: "Chemical relaxation absorption profiling" },
        { name: "Optical Turbidity", note: "Infrared nephelometric sediment detection" },
        { name: "Ambient Noise Floor", note: "Hydrophone acoustic background sensing" },
      ],
    },
    {
      category: "PROTOTYPING & VALIDATION",
      badge: "LAB TESTBED",
      icon: TestTube,
      items: [
        { name: "Digital Storage Oscilloscope", note: "Chirp sweep timing and jitter verification" },
        { name: "RF / Audio Spectrum Analyzer", note: "Harmonic distortion and bandwidth analysis" },
        { name: "Acoustic Tank Testbed", note: "2.5m Hydrodynamic tank acoustic trials" },
        { name: "Benchtop Power Profiling", note: "Precision dynamic subsea battery drain logs" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>11 // TECHNOLOGY ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technology Stack & Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A rigorous engineering technology foundation combining embedded C/C++, hardware mathematical coprocessors, and marine acoustic metrology.
          </p>
        </div>

        {/* Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((group, idx) => {
            const Icon = group.icon;
            const isWide = idx === stack.length - 1 && stack.length % 3 !== 0;

            return (
              <div
                key={group.category}
                className={`rounded-2xl p-6 glass-panel glass-panel-hover border border-cyan-500/20 flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-semibold">
                      {group.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">
                    {group.category}
                  </h3>

                  <div className="space-y-3">
                    {group.items.map((it) => (
                      <div key={it.name} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{it.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-5 mt-0.5 font-mono">
                          {it.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
