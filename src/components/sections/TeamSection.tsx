import React from "react";
import { TEAM_MEMBERS, MENTORS } from "../../data/team";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Edit3 } from "lucide-react";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#020617] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Team Shazam */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>17 // CORE ENGINEERING TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet Team Shazam
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The multidisciplinary engineering unit behind the Adaptive Sonar Transmitter for SIH 2026.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Configured via src/data/team.ts (Edit names, roles, and links in one array)</span>
          </div>
        </div>

        {/* 6 Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl p-6 glass-panel glass-panel-hover border border-cyan-500/20 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Member Header & Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-500/40 shrink-0 group-hover:border-cyan-400 transition-colors">
                    <img
                      src={member.avatarPlaceholder}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-cyan-300 bg-slate-950/90 px-1 rounded">
                      {member.initials}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                      {member.code}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs text-slate-300 font-mono block">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Specialization & Contribution */}
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-cyan-400/90 font-mono text-[10px] uppercase block font-semibold">
                      Specialization:
                    </span>
                    <span className="text-slate-300 font-medium">{member.specialization}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400 font-mono text-[10px] uppercase block">
                      Key Contribution:
                    </span>
                    <span className="text-slate-300 leading-relaxed">{member.contribution}</span>
                  </div>
                </div>
              </div>

              {/* Social Action Links */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">SIH 2026 RESEARCHER</span>
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 18: MENTORS ("Guided By") */}
        <div id="mentors" className="pt-8 border-t border-cyan-500/15">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
              <span>18 // ACADEMIC & INDUSTRY ADVISORY</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Guided By
            </h3>
            <p className="mt-3 text-sm text-slate-300 font-light">
              Mentored by esteemed researchers in underwater acoustics, autonomous systems, and embedded DSP engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MENTORS.map((mentor) => (
              <div
                key={mentor.id}
                className="rounded-2xl p-6 glass-panel border border-cyan-500/20 flex flex-col sm:flex-row items-center gap-6 group hover:border-cyan-500/40 transition-all"
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-500/30 shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={mentor.avatarPlaceholder}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                <div className="text-center sm:text-left flex-1">
                  <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                    PROJECT ADVISOR
                  </span>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {mentor.name}
                  </h4>
                  <p className="text-xs text-slate-300 font-mono mt-0.5 font-medium">
                    {mentor.designation}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {mentor.department} • {mentor.organization}
                  </p>

                  <div className="mt-3 inline-block text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/20">
                    Focus: {mentor.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
