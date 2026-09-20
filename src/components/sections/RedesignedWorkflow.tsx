import React from "react";
import { Eye, Cpu, Zap, RotateCw } from "lucide-react";

export const RedesignedWorkflow: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Sense",
      icon: Eye,
      desc: "Read underwater environmental conditions.",
    },
    {
      num: "02",
      title: "Decide",
      icon: Cpu,
      desc: "STM32 evaluates the data and selects suitable parameters.",
    },
    {
      num: "03",
      title: "Transmit",
      icon: Zap,
      desc: "Generate the chirp and send it through amplifier and transducer.",
    },
    {
      num: "04",
      title: "Adapt",
      icon: RotateCw,
      desc: "Update the waveform when conditions require a change.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#020617] border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Sense. Decide. Transmit. Adapt.
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-light">
            Continuous real-time closed loop running onboard the Autonomous Underwater Vehicle.
          </p>
        </div>

        {/* 4 Step Visual Workflow */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-cyan-500/20 via-cyan-400/60 to-cyan-500/20 -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
