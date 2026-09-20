import React from "react";
import { TEAM_MEMBERS, MENTORS } from "../../data/team";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export const RedesignedTeam: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
            THE TEAM
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Meet Team Shazam
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-light">
            Engineers and researchers developing the adaptive sonar prototype for SIH 2026.
          </p>
        </div>

        {/* Clean, Simple 6-Member Grid (Photo, Name, Role, Links) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-20">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center group"
            >
              {/* Member Photo */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 mb-3 group-hover:border-cyan-400/60 transition-colors">
                <img
                  src={member.avatarPlaceholder}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name & Role (No long bio) */}
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1 line-clamp-1">
                {member.name}
              </h3>
              <p className="text-[11px] font-mono text-slate-400 line-clamp-2 mb-3 min-h-[32px]">
                {member.role}
              </p>

              {/* Optional LinkedIn & GitHub Buttons */}
              <div className="flex items-center gap-1.5 pt-2 border-t border-slate-800/80 w-full justify-center">
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded text-slate-400 hover:text-cyan-300 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.githubUrl && (
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded text-slate-400 hover:text-cyan-300 transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mentors Below in Simple Clean Layout */}
        <div className="pt-10 border-t border-slate-900">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-medium">
              ADVISORY & GUIDANCE
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              Guided By
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {MENTORS.map((mentor) => (
              <div
                key={mentor.id}
                className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 flex items-center gap-4 text-left"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                  <img
                    src={mentor.avatarPlaceholder}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">
                    {mentor.name}
                  </h5>
                  <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                    {mentor.designation}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {mentor.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
