import React from "react";
import { MENTORS } from "../../data/team";
import { GraduationCap } from "lucide-react";

export const MentorsSection: React.FC = () => {
  return (
    <section
      id="mentors"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4FBFD] border-t border-[rgba(8,51,68,0.10)] relative overflow-hidden"
    >
      {/* Soft ambient water caustics glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2EC4C9]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            MENTORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            Guided by Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B6673] font-light leading-relaxed">
            The guidance behind our journey from an idea to a working solution.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 3-MENTOR GRID (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.name}
              className="shazam-card group p-6 sm:p-8 flex flex-col items-center text-center relative transition-all duration-300"
            >
              {/* Minimal Mentor Icon / Subtle Visual Element */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F7FA] to-[#DDF5F7] border border-[rgba(8,51,68,0.12)] group-hover:border-[#2EC4C9]/60 flex items-center justify-center text-[#168AAD] group-hover:scale-105 shadow-[0_4px_14px_rgba(8,51,68,0.05)] transition-all mb-5">
                <GraduationCap className="w-7 h-7 text-[#168AAD]" />
              </div>

              {/* Subtle Tag */}
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#E8F7FA] border border-[#2EC4C9]/35 text-[10px] font-mono text-[#168AAD] font-semibold uppercase tracking-wider mb-3">
                <span>Mentor</span>
              </div>

              {/* Mentor Name */}
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#083344] group-hover:text-[#168AAD] transition-colors leading-snug">
                {mentor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
