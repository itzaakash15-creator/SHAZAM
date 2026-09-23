import React, { useState } from "react";
import { TEAM_MEMBERS, MENTORS, TeamMember } from "../../data/team";
import { GraduationCap } from "lucide-react";

/**
 * Individual Team Member Card
 * Contains: 1. Member photo, 2. Full name, 3. Project role
 */
const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="shazam-card group p-5 sm:p-6 flex flex-col text-left">
      {/* 1. Member Photo Container (Consistent 4:5 Portrait Ratio) */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#E8F7FA] via-[#F4FBFD] to-[#DDF5F7] border border-[rgba(8,51,68,0.12)] group-hover:border-[#2EC4C9]/60 shadow-[0_4px_14px_rgba(8,51,68,0.06)] group-hover:shadow-[0_8px_24px_rgba(22,138,173,0.18)] transition-all duration-300 mb-4 sm:mb-5">
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          /* Neutral Fallback Placeholder if image fails to load */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[rgba(8,51,68,0.15)] flex items-center justify-center shadow-sm mb-3">
              <span className="text-lg sm:text-xl font-mono font-bold text-[#083344]">
                {member.initials}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#168AAD] font-semibold">
              Photo Pending
            </span>
          </div>
        )}

        {/* Subtle bottom ocean depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#083344]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Full Name */}
      <h3 className="text-lg sm:text-xl font-heading font-bold text-[#083344] mb-2 group-hover:text-[#168AAD] transition-colors leading-tight">
        {member.name}
      </h3>

      {/* 3. Project Role */}
      <div className="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-[#E8F7FA] border border-[#2EC4C9]/35 text-xs font-mono font-semibold text-[#168AAD] group-hover:bg-[#DDF5F7] group-hover:border-[#2EC4C9]/50 transition-all">
        <span className="truncate">{member.role}</span>
      </div>
    </div>
  );
};

export const RedesignedTeam: React.FC = () => {
  return (
    <section
      id="team"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ocean-subtle-gradient border-t border-[#168AAD]/15 relative overflow-hidden"
    >
      {/* Soft ambient water caustics glow */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[400px] bg-[#2EC4C9]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[350px] bg-[#168AAD]/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            MEET THE TEAM
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            The Minds Behind SHAZAM
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B6673] font-light leading-relaxed">
            Six minds. One mission.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 6-MEMBER GRID (Desktop: 3x2, Tablet: 2x3, Mobile: 1x6)    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* ========================================================= */}
        {/* ADVISORY & GUIDANCE (Mentors)                             */}
        {/* ========================================================= */}
        {MENTORS.length > 0 && (
          <div className="pt-12 border-t border-[#168AAD]/15">
            <div className="text-center mb-8">
              <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block font-semibold">
                ACADEMIC & DEFENCE ADVISORY
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#083344] mt-1">
                Guided By
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {MENTORS.map((mentor) => (
                <div
                  key={mentor.id}
                  className="shazam-card p-5 sm:p-6 flex items-center gap-4 text-left"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E8F7FA] to-[#DDF5F7] border border-[#168AAD]/20 flex items-center justify-center text-[#083344] font-mono font-bold text-base shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#168AAD]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#083344]">
                      {mentor.name}
                    </h4>
                    <p className="text-xs font-mono text-[#168AAD] font-semibold mt-0.5">
                      {mentor.designation}
                    </p>
                    <p className="text-[11px] text-[#4B6673] mt-0.5">
                      {mentor.department}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
