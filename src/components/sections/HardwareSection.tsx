import React, { useState } from "react";
import { HARDWARE_COMPONENTS, HardwareComponent } from "../../data/hardware";
import { Cpu, Thermometer, Gauge, Droplets, EyeOff, Radio, Zap, Activity, Battery, Edit3 } from "lucide-react";

export const HardwareSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Subsystems" },
    { id: "controller", label: "Embedded MCU" },
    { id: "sensor", label: "Sensors" },
    { id: "analog", label: "Analog Drivers" },
    { id: "acoustic", label: "Acoustic Transducer" },
    { id: "power", label: "Power Isolation" },
  ];

  const filteredComponents = activeCategory === "all"
    ? HARDWARE_COMPONENTS
    : HARDWARE_COMPONENTS.filter((item) => item.category === activeCategory);

  return (
    <section id="hardware" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>10 // PROTOTYPE HARDWARE SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Prototype Hardware Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Modular, marine-grade subsea electronic components designed for seamless integration inside standard cylindrical AUV pressure hulls.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Configured via src/data/hardware.ts (Easily editable component models)</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                  : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/30 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Hardware Component Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((comp) => (
            <div
              key={comp.id}
              className="rounded-2xl p-6 glass-panel glass-panel-hover flex flex-col justify-between border border-cyan-500/20 group relative overflow-hidden"
            >
              {/* Header Badge */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-semibold">
                    {comp.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {comp.operatingVoltage}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors mb-1">
                  {comp.name}
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 font-medium mb-3">
                  Model: {comp.model}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {comp.role}
                </p>

                {/* Specs List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-4">
                  {comp.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">{s.label}:</span>
                      <span className="text-slate-200 font-medium">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400/80">Bus: </span>
                <span>{comp.interfaceType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
