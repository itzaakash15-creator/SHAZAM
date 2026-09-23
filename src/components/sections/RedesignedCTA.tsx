import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { ArrowUpRight, FileText, PlayCircle } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export const RedesignedCTA: React.FC = () => {
  // Only show buttons with valid, non-empty URLs
  const activeResources = PROJECT_DATA.resources.filter(
    (res) => res.isAvailable && res.url && res.url !== "#"
  );

  return (
    <footer id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#062A3A] border-t border-[#168AAD]/30 relative overflow-hidden">
      {/* Soft subsea lighting caustics in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#2EC4C9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Official Logo Display */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo-light.png"
            alt="Team Shazam Logo"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(46,196,201,0.3)]"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
          Engineering Smarter <br />
          <span className="text-[#2EC4C9]">Underwater Systems.</span>
        </h2>

        {/* Project Attribution Text */}
        <div className="space-y-1 mb-8 font-mono text-xs sm:text-sm text-slate-300">
          <p className="font-bold text-white tracking-wider">{PROJECT_DATA.teamName}</p>
          <p className="text-cyan-200/90">{PROJECT_DATA.projectTitle}</p>
          <p className="text-[#2EC4C9] font-semibold">{PROJECT_DATA.eventName}</p>
        </div>

        {/* Verified Action Buttons Only */}
        {activeResources.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {activeResources.map((res) => (
              <a
                key={res.label}
                href={res.url}
                target={res.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[#083344] hover:bg-[#0c445c] text-white border border-[#2EC4C9]/30 hover:border-[#2EC4C9]/70 transition-all shadow-md"
              >
                {res.label === "GitHub" && <GithubIcon className="w-4 h-4 text-[#2EC4C9]" />}
                {res.label === "Documentation" && <FileText className="w-4 h-4 text-[#2EC4C9]" />}
                {res.label === "Demo Video" && <PlayCircle className="w-4 h-4 text-[#2EC4C9]" />}
                <span>{res.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
              </a>
            ))}
          </div>
        )}

        {/* Minimal Footer Attribution Line */}
        <div className="pt-8 border-t border-[#168AAD]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <img src="/logo-light.png" alt="Shazam Logo" className="h-5 w-auto object-contain" />
            <span>© {PROJECT_DATA.eventYear} {PROJECT_DATA.teamName}</span>
            <span className="text-[#168AAD]">•</span>
            <span>SIH 2026</span>
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <a href="#hero" className="hover:text-[#2EC4C9] transition-colors">
              Back to Top ↑
            </a>
            <a href={`mailto:${PROJECT_DATA.contact.email}`} className="hover:text-[#2EC4C9] transition-colors">
              {PROJECT_DATA.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
