import React, { useState, useEffect } from "react";
import { PROJECT_DATA } from "../../data/project";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Case Study", href: "#case-study" },
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Workflow", href: "#how-it-works" },
  { name: "Technology", href: "#technology" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link detection
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F4FBFD]/92 backdrop-blur-md border-b border-[#168AAD]/15 py-3 shadow-[0_4px_25px_rgba(22,138,173,0.08)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img
                src="/logo-light.png"
                alt="Team Shazam Logo"
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(46,196,201,0.35)] group-hover:scale-105 transition-transform"
              />
            </div>

            <span className={`hidden sm:inline-block text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold tracking-wider transition-colors ${
              isScrolled
                ? "bg-[#E8F7FA] text-[#168AAD] border-[#2EC4C9]/40"
                : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            }`}>
              SIH 2026
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all ${
            isScrolled
              ? "bg-white/90 border-[#168AAD]/20 shadow-sm"
              : "bg-[#083344]/80 border-[#2EC4C9]/30 shadow-md"
          }`}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? "text-[#168AAD] bg-[#E8F7FA] border border-[#2EC4C9]/40 font-semibold shadow-xs"
                        : "text-[#4B6673] hover:text-[#083344] hover:bg-[#E8F7FA]/60"
                      : isActive
                        ? "text-cyan-200 bg-[#0c4a63] border border-[#2EC4C9]/60 font-semibold"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Explore Project Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#solution"
              className="shazam-btn-primary"
            >
              <span>Explore Project</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#solution"
              className="shazam-btn-primary text-[11px] px-3 py-1.5"
            >
              Explore
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isScrolled
                  ? "bg-white border-[rgba(8,51,68,0.12)] text-[#083344] hover:text-[#168AAD]"
                  : "bg-[#083344]/80 border-[rgba(46,196,201,0.3)] text-slate-200 hover:text-[#2EC4C9]"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl transition-all ${
          isScrolled
            ? "bg-[#F4FBFD]/98 border-[rgba(8,51,68,0.12)] text-[#083344]"
            : "bg-[#062A3A]/98 border-[rgba(46,196,201,0.25)] text-slate-200"
        }`}>
          <div className="grid grid-cols-1 gap-1 py-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-between ${
                  isScrolled
                    ? "text-[#083344] hover:text-[#168AAD] hover:bg-[#E8F7FA]"
                    : "text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
