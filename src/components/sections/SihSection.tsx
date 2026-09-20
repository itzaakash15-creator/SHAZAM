import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { Award, Shield, Landmark, Building, FileText, CheckCircle2 } from "lucide-react";

export const SihSection: React.FC = () => {
  const sih = PROJECT_DATA.sihDetails;

  return (
    <section id="sih-showcase" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>19 // SMART INDIA HACKATHON 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Competition Submission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Official project metadata, ministry alignment, and institutional credentials for Smart India Hackathon 2026.
          </p>
        </div>

        {/* SIH Official Credentials Showcase Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cyan-500/20 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                  NATIONAL HACKATHON INITIATIVE
                </span>
                <h3 className="text-2xl font-bold text-white">
                  SMART INDIA HACKATHON 2026
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold">
              {sih.category}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase block">Team Designation:</span>
              <span className="text-base font-bold text-cyan-300">{PROJECT_DATA.teamName}</span>
              <span className="text-[11px] text-slate-400 block mt-1">SIH 2026 Core Engineering Division</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase block">Problem Statement ID:</span>
              <span className="text-base font-bold text-white">{sih.problemStatementId}</span>
              <span className="text-[11px] text-slate-400 block mt-1">Editable in src/data/project.ts</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase block">Organization / Ministry:</span>
              <span className="text-sm font-semibold text-slate-200">{sih.organization}</span>
              <span className="text-[11px] text-slate-400 block mt-1">Theme: {sih.theme}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase block">College / Institution:</span>
              <span className="text-sm font-semibold text-slate-200">{sih.institution}</span>
              <span className="text-[11px] text-slate-400 block mt-1">{sih.department}</span>
            </div>
          </div>

          {/* Project Title Callout */}
          <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/25">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              OFFICIAL PROJECT TITLE
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {PROJECT_DATA.projectTitle}
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {PROJECT_DATA.projectSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
