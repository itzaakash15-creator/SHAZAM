import React, { useState } from "react";
import { STM32_PERIPHERALS, Stm32Peripheral } from "../../data/architecture";
import { Cpu, Zap, Activity, Radio, ArrowRight, CheckCircle } from "lucide-react";

export const ControllerSection: React.FC = () => {
  const [selectedPeripheral, setSelectedPeripheral] = useState<Stm32Peripheral>(STM32_PERIPHERALS[4]); // CORDIC default

  return (
    <section id="controller" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>06 // EMBEDDED MICROCONTROLLER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Intelligence Inside
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Powered by the high-performance ARM Cortex-M4 <span className="text-cyan-400 font-semibold">STM32G474RE</span> with integrated hardware mathematical accelerators and direct analog peripherals.
          </p>
        </div>

        {/* Central Quote Callout */}
        <div className="max-w-4xl mx-auto mb-14 p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/25 text-center">
          <p className="text-sm sm:text-base text-cyan-200 font-light italic">
            “The STM32G474RE performs environmental acquisition, waveform parameter selection and real-time chirp generation within a compact low-power embedded architecture.”
          </p>
        </div>

        {/* Interactive MCU Visualization Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Center: Visual STM32 Microcontroller IC Graphic with Peripheral Pin Busses */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* The Chip Card */}
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-b from-[#0c1e38] to-[#040b17] border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col items-center text-center">
              {/* Corner Pin Marks */}
              <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#22d3ee]"></div>
              <div className="absolute top-3 right-3 text-[9px] font-mono text-cyan-500/60">LQFP-64</div>
              <div className="absolute bottom-3 left-3 text-[9px] font-mono text-cyan-500/60">170 MHz</div>
              <div className="absolute bottom-3 right-3 text-[9px] font-mono text-cyan-500/60">3.3V DC</div>

              {/* Silicon Die Core Icon */}
              <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-cyan-400 flex items-center justify-center text-cyan-300 mb-4 shadow-inner relative group">
                <Cpu className="w-10 h-10 animate-pulse" />
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-sm"></div>
              </div>

              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-semibold">
                STMicroelectronics
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-wider my-1">
                STM32G474RE
              </h3>
              <p className="text-xs text-slate-300 font-mono">
                ARM Cortex-M4 with FPU • CORDIC • FMAC
              </p>

              {/* Internal Bus Speed Indicator */}
              <div className="mt-5 pt-4 border-t border-cyan-500/20 w-full grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block">FLASH</span>
                  <span className="text-cyan-300 font-bold">512 KB</span>
                </div>
                <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block">SRAM</span>
                  <span className="text-cyan-300 font-bold">128 KB</span>
                </div>
                <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block">MATH</span>
                  <span className="text-emerald-400 font-bold">CORDIC</span>
                </div>
              </div>
            </div>

            {/* Quick Peripheral Selector Pill Row */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-lg">
              {STM32_PERIPHERALS.map((p) => {
                const isSelected = selectedPeripheral.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPeripheral(p)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        : "bg-slate-900/80 text-cyan-300 border-cyan-500/25 hover:border-cyan-400/60 hover:bg-slate-850"
                    }`}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Peripheral Specifications Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-semibold">
                  {selectedPeripheral.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {selectedPeripheral.technicalMetric}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedPeripheral.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {selectedPeripheral.description}
              </p>

              {/* Deep Dive Details */}
              <div className="space-y-3 font-mono text-xs bg-slate-950/80 p-4 rounded-xl border border-cyan-500/20 mb-6">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Firmware Role & Task:</span>
                  <span className="text-slate-200">{selectedPeripheral.role}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Pin Mapping / Channels:</span>
                  <span className="text-cyan-300 font-bold">{selectedPeripheral.pinoutInfo}</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Synchronized via STM32 HAL & Master Timer Trigger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
