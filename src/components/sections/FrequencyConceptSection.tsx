import React, { useState } from "react";
import { Sliders, ArrowLeftRight, HelpCircle, Layers, Activity } from "lucide-react";

export const FrequencyConceptSection: React.FC = () => {
  const [sliderFreq, setSliderFreq] = useState<number>(250); // in kHz

  // Simplified physical approximations based on Francois-Garrison and speed of sound c = 1500 m/s
  const wavelengthMm = (1500 / (sliderFreq * 1000)) * 1000;
  // Approximate absorption in dB/km (scales ~ quadratically above 100kHz)
  const absorptionDbPerKm = (0.001 * Math.pow(sliderFreq, 1.85)).toFixed(1);
  // Estimated usable range in meters under typical power
  const maxRangeEst = Math.round(75000 / (sliderFreq + 40));
  // Range resolution with 20% bandwidth chirp
  const resolutionCm = (1500 / (2 * (sliderFreq * 0.2) * 1000) * 100).toFixed(1);

  return (
    <section id="frequency" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>08 // ACOUSTIC SPECTRUM DYNAMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Frequency Continuum
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Understanding the physics behind dynamic carrier frequency selection: balancing water column absorption losses against acoustic imaging resolution.
          </p>
        </div>

        {/* Conceptual Dual-Pole Spectrum Visualizer */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/25 mb-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            {/* Low Frequency Region Card */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-sky-500/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase px-2 py-0.5 rounded bg-sky-950/90 border border-sky-500/30">
                  LOW FREQUENCY REGION (~100 kHz)
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">
                  Longer Range • Coarser Resolution
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Acoustic energy suffers dramatically lower viscous and chemical absorption. Ideal when the vehicle must detect distant sea trenches, seafloor profiles, or traverse suspended silt plumes.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div>
                  <span className="text-slate-400 block">Absorption Loss:</span>
                  <span className="text-emerald-400 font-bold">~0.015 dB/m (Low)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Penetration:</span>
                  <span className="text-sky-300 font-bold">&gt; 500 meters</span>
                </div>
              </div>
            </div>

            {/* High Frequency Region Card */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-300 font-semibold uppercase px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-500/30">
                  HIGH FREQUENCY REGION (~500 kHz)
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">
                  Shorter Range • High-Definition Detail
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Millimeter acoustic wavelengths provide sharp target echo discrimination. Ideal for close-up seabed bathymetry, submerged pipeline welds, and docking latch alignment.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div>
                  <span className="text-slate-400 block">Absorption Loss:</span>
                  <span className="text-rose-400 font-bold">~0.150 dB/m (High)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Resolution:</span>
                  <span className="text-cyan-300 font-bold">&lt; 2 cm Precision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Spectrum Slider */}
          <div className="p-5 rounded-xl bg-slate-950/90 border border-cyan-500/20">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                INTERACTIVE SPECTRUM SCRUBBER (80 kHz – 550 kHz):
              </span>
              <span className="text-sm font-mono font-bold text-white bg-cyan-950/80 px-3 py-1 rounded border border-cyan-500/40">
                Operating Carrier: {sliderFreq} kHz
              </span>
            </div>

            {/* Slider Track */}
            <input
              type="range"
              min={80}
              max={550}
              step={5}
              value={sliderFreq}
              onChange={(e) => setSliderFreq(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />

            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
              <span>80 kHz (Max Range)</span>
              <span>250 kHz (Mid-Band)</span>
              <span>550 kHz (Max Detail)</span>
            </div>

            {/* Real-Time Calculated Physics Metrics */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Acoustic Wavelength (λ)</span>
                <span className="text-sm font-bold text-cyan-300">{wavelengthMm.toFixed(2)} mm</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Absorption Loss</span>
                <span className="text-sm font-bold text-slate-200">{absorptionDbPerKm} dB/km</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Est. Max Usable Range</span>
                <span className="text-sm font-bold text-emerald-400">~{maxRangeEst} m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Range Resolution (ΔR)</span>
                <span className="text-sm font-bold text-cyan-300">~{resolutionCm} cm</span>
              </div>
            </div>
          </div>

          {/* Conceptual Disclaimer */}
          <div className="mt-4 text-center">
            <p className="text-[11px] font-mono text-slate-400">
              * Note: Operating frequencies (~100 kHz to ~500 kHz) are conceptual operating regions used to demonstrate the adaptive design principle. Actual operating bands depend on the physical piezoceramic transducer resonant aperture and mission constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
