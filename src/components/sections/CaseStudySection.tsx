import React, { useState, useEffect } from "react";
import {
  CASE_STUDY_DATA,
  YOUTUBE_VIDEO_URL,
  CASE_STUDY_PDF_URL,
} from "../../data/caseStudy";
import {
  Play,
  FileText,
  ExternalLink,
  X,
  ChevronRight,
  Download,
  AlertCircle,
  HelpCircle,
  Cpu,
  TrendingUp,
  Shield,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const CaseStudySection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "specs" | "deliverables">("summary");

  const { header, blocks, videoCta, originalCaseStudy } = CASE_STUDY_DATA;

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  return (
    <section
      id="case-study"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4FBFD] border-t border-[#168AAD]/15 overflow-hidden"
    >
      {/* Ambient subsea lighting gradient */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2EC4C9]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER                                         */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] font-mono text-[#168AAD] uppercase tracking-widest block mb-3 font-semibold">
            {header.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#083344] tracking-tight leading-tight">
            {header.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B6673] font-light leading-relaxed">
            {header.subheading}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. CASE STUDY CONTENT: 4 BLOCKS (4-col / 2x2 / 1-col)    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {/* 01 — THE CHALLENGE */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-[#168AAD]/15 hover:border-[#2EC4C9]/50 shadow-[0_4px_20px_-4px_rgba(22,138,173,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(22,138,173,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-semibold px-2 py-0.5 rounded bg-rose-50 border border-rose-200">
                  {blocks.challenge.label}
                </span>
                <span className="text-xs font-mono text-[#4B6673] font-bold">
                  {blocks.challenge.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#083344] mb-3 group-hover:text-[#168AAD] transition-colors flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{blocks.challenge.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6673] font-light leading-relaxed">
                {blocks.challenge.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#168AAD]/10 flex items-center gap-1.5 text-[10px] font-mono text-[#4B6673]">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
              <span>Range vs Resolution conflict</span>
            </div>
          </div>

          {/* 02 — THE GAP */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-[#168AAD]/15 hover:border-[#2EC4C9]/50 shadow-[0_4px_20px_-4px_rgba(22,138,173,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(22,138,173,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-semibold px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                  {blocks.gap.label}
                </span>
                <span className="text-xs font-mono text-[#4B6673] font-bold">
                  {blocks.gap.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#083344] mb-3 group-hover:text-[#168AAD] transition-colors flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{blocks.gap.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6673] font-light leading-relaxed">
                {blocks.gap.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#168AAD]/10 flex items-center gap-1.5 text-[10px] font-mono text-[#4B6673]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
              <span>Static waveforms & blind transmission</span>
            </div>
          </div>

          {/* 03 — OUR APPROACH */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-[#168AAD]/20 hover:border-[#2EC4C9]/60 shadow-[0_4px_20px_-4px_rgba(22,138,173,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(22,138,173,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#168AAD] font-semibold px-2 py-0.5 rounded bg-[#E8F7FA] border border-[#2EC4C9]/30">
                  {blocks.approach.label}
                </span>
                <span className="text-xs font-mono text-[#4B6673] font-bold">
                  {blocks.approach.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#083344] mb-3 group-hover:text-[#168AAD] transition-colors flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#168AAD] shrink-0" />
                <span>{blocks.approach.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6673] font-light leading-relaxed">
                {blocks.approach.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#168AAD]/10 flex items-center gap-1.5 text-[10px] font-mono text-[#168AAD]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD] animate-pulse" />
              <span>CORDIC dynamic LFM chirp core</span>
            </div>
          </div>

          {/* 04 — THE IMPACT */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-[#2EC4C9]/30 shadow-[0_4px_24px_-4px_rgba(46,196,201,0.15)] hover:border-[#2EC4C9]/60 hover:shadow-[0_12px_32px_-6px_rgba(22,138,173,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                  {blocks.impact.label}
                </span>
                <span className="text-xs font-mono text-[#4B6673] font-bold">
                  {blocks.impact.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#083344] mb-3 group-hover:text-[#168AAD] transition-colors flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{blocks.impact.title}</span>
              </h3>

              <div className="space-y-2.5">
                {blocks.impact.highlights?.map((item) => (
                  <div key={item.tag} className="text-xs">
                    <span className="font-mono text-[10px] font-bold text-[#168AAD] block tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-[#4B6673] font-light text-[11px] leading-tight block">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#168AAD]/10 flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>4 Validated Subsea Outcomes</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. EXPANDABLE ELEMENT: VIEW ORIGINAL CASE STUDY          */}
        {/* ========================================================= */}
        <div className="flex justify-center mb-20 sm:mb-24">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:bg-[#E8F7FA] border border-[#168AAD]/25 hover:border-[#2EC4C9] text-xs sm:text-sm font-medium text-[#083344] hover:text-[#168AAD] transition-all shadow-[0_2px_12px_rgba(22,138,173,0.08)] group font-mono cursor-pointer"
            aria-haspopup="dialog"
            aria-expanded={modalOpen}
          >
            <FileText className="w-4 h-4 text-[#168AAD] group-hover:scale-110 transition-transform" />
            <span>VIEW ORIGINAL CASE STUDY</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#4B6673] group-hover:text-[#168AAD] group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* 4. PROJECT VIDEO CTA (Cinematic Poster Card)             */}
        {/* ========================================================= */}
        <div className="max-w-5xl mx-auto">
          {/* Video CTA Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] font-mono text-[#168AAD] uppercase tracking-widest block mb-2 font-semibold">
              {videoCta.videoLabel}
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#083344] tracking-tight">
              {videoCta.heading}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4B6673] font-light leading-relaxed">
              {videoCta.subheading}
            </p>
          </div>

          {/* Large Cinematic 16:9 Video Card */}
          <a
            href={YOUTUBE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-[#083344] hover:border-[#2EC4C9]/70 bg-[#062A3A] shadow-[0_15px_50px_-10px_rgba(8,51,68,0.35)] hover:shadow-[0_20px_60px_-10px_rgba(46,196,201,0.35)] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2EC4C9]/50"
            aria-label="Watch Team Shazam Full Project Video on YouTube (opens in a new tab)"
          >
            {/* Cinematic Poster Thumbnail */}
            <img
              src={videoCta.posterImage}
              alt="Team Shazam Subsea AUV Sonar Demonstration"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 select-none"
              loading="lazy"
            />

            {/* Dark Deep Ocean Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-[#020817]/60 pointer-events-none transition-opacity duration-500 group-hover:opacity-75" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#020817]/90 pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-10 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[10px] sm:text-xs font-mono text-cyan-300 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{videoCta.videoLabel}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-700/60 text-[10px] sm:text-xs font-mono text-slate-300 backdrop-blur-md">
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </div>
            </div>

            {/* Center: Large Circular Play Button & Labels */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 pointer-events-none">
              {/* Play Button Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/30 border-2 border-cyan-400/80 group-hover:border-cyan-300 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_45px_rgba(6,182,212,0.65)] group-hover:scale-110 transition-all duration-300 mb-4 sm:mb-5">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-cyan-400 group-hover:bg-cyan-300 text-slate-950 flex items-center justify-center pl-1 shadow-lg transition-colors">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-current" />
                </div>
                {/* Subtle radiating acoustic wave ping */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping pointer-events-none" />
              </div>

              {/* Title & Action Line */}
              <h4 className="text-lg sm:text-2xl font-heading font-extrabold text-white tracking-tight drop-shadow-md">
                {videoCta.actionText}
              </h4>
              <p className="text-[11px] sm:text-xs text-cyan-300/90 font-mono mt-1 drop-shadow">
                SIH 2026 Adaptive Sonar Engineering & Architecture
              </p>
            </div>

            {/* Bottom Bar: Configurable URL indicator & hint */}
            <div className="absolute bottom-3 sm:bottom-4 inset-x-4 sm:inset-x-6 flex items-center justify-between text-[10px] font-mono text-slate-400/80 z-10 pointer-events-none">
              <span className="hidden sm:inline-block">
                Click anywhere to launch YouTube stream
              </span>
              <span className="text-cyan-400/70 truncate max-w-[280px] sm:max-w-none ml-auto">
                {YOUTUBE_VIDEO_URL}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. ORIGINAL CASE STUDY MODAL DIALOG                      */}
      {/* ========================================================= */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] bg-[#030917] border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.2)] flex flex-col overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-950/60">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-semibold uppercase">
                    {originalCaseStudy.sihId}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {originalCaseStudy.category} • {originalCaseStudy.theme}
                  </span>
                </div>
                <h3
                  id="case-study-modal-title"
                  className="text-lg sm:text-xl font-bold text-white leading-snug"
                >
                  {originalCaseStudy.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mt-1">
                  {originalCaseStudy.organization}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors shrink-0 cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs Navigation */}
            <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800/60 bg-slate-950/40 text-xs font-mono">
              <button
                onClick={() => setActiveTab("summary")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "summary"
                    ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Problem Summary
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "specs"
                    ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Technical Scope
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "deliverables"
                    ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Key Deliverables
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {activeTab === "summary" && (
                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 text-xs font-mono">
                    Official SIH 2026 Problem Statement Scope: Addressing subsea acoustic trade-offs through in-situ physical telemetry and dynamic waveform modulation.
                  </div>
                  {originalCaseStudy.executiveSummary.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {activeTab === "specs" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {originalCaseStudy.technicalSpecifications.map((spec) => (
                    <div
                      key={spec.category}
                      className="p-4 rounded-xl bg-slate-900/50 border border-slate-800"
                    >
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                        {spec.category}
                      </span>
                      <p className="text-xs text-slate-200">{spec.details}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "deliverables" && (
                <div className="space-y-3 pt-1">
                  {originalCaseStudy.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer with Configurable PDF Download Action */}
            <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-slate-400">
                PDF Source: <span className="text-cyan-400/90">{CASE_STUDY_PDF_URL}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={CASE_STUDY_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Original PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
