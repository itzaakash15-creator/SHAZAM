import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { Mail, MapPin, Building, Radio } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export const ContactSection: React.FC = () => {
  const contact = PROJECT_DATA.contact;

  return (
    <footer id="contact" className="relative bg-[#01040a] border-t border-cyan-500/20 pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>21 // COMMUNICATIONS CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect With Team Shazam
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Have questions regarding our adaptive chirp modulation algorithms, STM32 firmware architecture, or hardware tank validation?
          </p>

          <div className="mt-6 text-xl sm:text-2xl font-heading font-extrabold text-cyan-400">
            “Let’s Build Smarter Underwater Systems.”
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {/* Email */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Direct Inquiries</span>
              <h4 className="text-sm font-bold text-white mb-1">Official Email</h4>
              <a
                href={`mailto:${contact.email}`}
                className="text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* College / Institution */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Academic Base</span>
              <h4 className="text-sm font-bold text-white mb-1">Institution</h4>
              <p className="text-xs text-slate-300">
                {contact.college}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Deployment Station</span>
              <h4 className="text-sm font-bold text-white mb-1">Location</h4>
              <p className="text-xs text-slate-300">
                {contact.location}
              </p>
            </div>
          </div>

          {/* Social Channels */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Digital Telemetry</span>
              <h4 className="text-sm font-bold text-white mb-3">Repositories & Social</h4>
              <div className="flex items-center gap-3">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER SECTION */}
        <div className="pt-12 border-t border-cyan-500/15 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          {/* Left Brand Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading font-extrabold text-base text-white tracking-wider">
                {PROJECT_DATA.teamName}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                SIH 2026
              </span>
            </div>
            <p className="text-slate-400 font-mono text-[11px]">
              Adaptive Sonar Transmitter for AUVs • Smart India Hackathon 2026
            </p>
            <p className="text-slate-500 text-[10px] mt-1">
              Designed & Developed by Team Shazam
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-slate-300">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">
              Project
            </a>
            <a href="#system" className="hover:text-cyan-300 transition-colors">
              System
            </a>
            <a href="#team" className="hover:text-cyan-300 transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
