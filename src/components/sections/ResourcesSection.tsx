import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { Cpu, FileText, Presentation, PlayCircle, ArrowUpRight, Download, Edit3 } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export const ResourcesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    FileText,
    Presentation,
    PlayCircle,
    Github: GithubIcon,
  };

  return (
    <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>20 // TECHNICAL DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Documentation & Resources
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Access engineering schematics, mathematical research documentation, evaluation slide decks, and open-source embedded firmware repositories.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Resource links are editable in src/data/project.ts</span>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROJECT_DATA.resources.map((res) => {
            const IconComponent = iconMap[res.icon] || FileText;

            return (
              <a
                key={res.label}
                href={res.url}
                target={res.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-2xl p-6 glass-panel glass-panel-hover border border-cyan-500/20 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {res.label}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span>ACCESS DELIVERABLE</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
