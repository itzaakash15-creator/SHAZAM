import React from "react";
import { WaveformVisualizer } from "../ui/WaveformVisualizer";
import { Sliders, Activity, Info } from "lucide-react";

export const AdaptiveLogicSection: React.FC = () => {
  return (
    <section id="adaptive-logic" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>07 // REAL-TIME ACOUSTIC ADAPTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            One Ocean. <br />
            <span className="text-cyan-400">Different Conditions. Different Waveforms.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Interact with our simulated embedded waveform synthesizer below to see how carrier frequency, chirp rate, bandwidth, and pulse width adapt dynamically to overcome varying subsea conditions.
          </p>
        </div>

        {/* The Waveform Visualizer & Interactive Simulator */}
        <div className="max-w-5xl mx-auto">
          <WaveformVisualizer />
        </div>
      </div>
    </section>
  );
};
