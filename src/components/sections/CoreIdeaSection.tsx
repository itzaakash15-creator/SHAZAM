import React from "react";
import { ArrowDown, AlertTriangle, CheckCircle, Waves, Thermometer, Gauge, Droplets, EyeOff, Radio } from "lucide-react";

export const CoreIdeaSection: React.FC = () => {
  const envParams = [
    { name: "Temperature", icon: Thermometer, note: "Alters sound speed gradient & creates thermocline refraction shadows." },
    { name: "Hydrostatic Pressure", icon: Gauge, note: "Varies acoustic bulk modulus and sound propagation profile with depth." },
    { name: "Salinity", icon: Droplets, note: "Drives chemical relaxation absorption (Boric acid & MgSO4 salts)." },
    { name: "Turbidity", icon: EyeOff, note: "Suspended sediment causes severe Rayleigh & Mie particulate acoustic scattering." },
    { name: "Operating Depth", icon: Waves, note: "Defines water column layering, surface reverberation, and ducting channels." },
    { name: "Ambient Noise", icon: Radio, note: "Surface chop, vessel cavitation, and marine biology mask weak echo returns." },
  ];

  return (
    <section id="core-idea" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>02 // THE CORE PARADIGM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Ocean Changes. <br />
            <span className="text-cyan-400">Why Should the Sonar Signal Stay the Same?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Conventional sonar architectures transmit rigid, hardcoded waveforms regardless of whether the vehicle navigates through crystal-clear deep oceanic trenches or silt-heavy turbid river deltas.
          </p>
        </div>

        {/* Environmental Dynamics Cards */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider text-center mb-6">
            Dynamic Ocean Parameters That Continuously Distort Sonar Propagation:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {envParams.map((param, idx) => {
              const Icon = param.icon;
              return (
                <div
                  key={param.name}
                  className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col items-center text-center group border border-cyan-500/15"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-200 mb-1">{param.name}</span>
                  <span className="text-[11px] text-slate-400 leading-snug line-clamp-3">{param.note}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Visual Comparison Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LEFT: Conventional Sonar */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/40 border border-rose-500/20 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-rose-500/10 border-b border-l border-rose-500/20 text-rose-400 font-mono text-[11px] font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>CONVENTIONAL ARCHITECTURE</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-100 mb-2">Conventional Fixed Sonar</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Uses static frequency lookup tables with zero environmental awareness. Signal parameters remain immutable even when environmental attenuation skyrockets.
              </p>

              {/* Flow Steps */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-center">
                  Fixed Transmission Parameters
                </div>
                <div className="flex justify-center text-rose-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-rose-900/30 text-slate-300 text-center">
                  Changing Ocean Conditions
                </div>
                <div className="flex justify-center text-rose-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 font-semibold text-center">
                  Reduced Adaptability & Signal Degradation
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Outcome: Target echo buried in noise; premature mission failure or blind navigation in challenging waters.
            </div>
          </div>

          {/* RIGHT: Team Shazam */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-cyan-950/40 to-slate-900/60 border border-cyan-400/40 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-cyan-500/20 border-b border-l border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>TEAM SHAZAM PARADIGM</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-2">Adaptive Sonar Transmitter</h4>
              <p className="text-xs text-cyan-100/80 leading-relaxed mb-6">
                Directly couples real-time environmental multi-sensor acquisition with hardware CORDIC chirp modulation on the STM32G474RE MCU.
              </p>

              {/* Flow Steps */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-cyan-300 text-center font-medium shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                  Environmental Sensors (Temp, Press, Sal, Turb)
                </div>
                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-cyan-300 text-center font-medium">
                  Real-Time Embedded Analysis (STM32 Core)
                </div>
                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-cyan-300 text-center font-medium">
                  Adaptive Chirp Generation (CORDIC + DAC)
                </div>
                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-lg bg-cyan-950/80 border border-cyan-400 text-cyan-200 font-bold text-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Optimized Transmission & Cognitive Verification
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-500/20 text-[11px] font-mono text-cyan-300">
              Outcome: Robust acoustic penetration in turbidity + razor-sharp imaging in clear proximity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
