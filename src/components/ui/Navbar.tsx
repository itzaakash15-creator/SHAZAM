import React, { useState, useEffect } from "react";
import { PROJECT_DATA } from "../../data/project";
import { Menu, X, ChevronRight, Compass, Shield, Waves } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "System", href: "#system" },
  { name: "Adaptive Logic", href: "#adaptive-logic" },
  { name: "Hardware", href: "#hardware" },
  { name: "Innovation", href: "#innovations" },
  { name: "Demo", href: "#demo" },
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
          ? "bg-[#030917]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 transition-colors">
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Radar ring icon */}
              <div className="w-5 h-5 rounded-full border border-cyan-400/60 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-base tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  {PROJECT_DATA.teamName}
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  SIH 2026
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:block">
                ADAPTIVE SONAR TRANSMITTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-950/60 px-3 py-1.5 rounded-full border border-cyan-500/15 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Explore Project Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#system"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Project</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="#system"
              className="px-3 py-1.5 text-xs font-medium text-slate-950 bg-cyan-400 rounded-md font-mono"
            >
              Explore
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#030a1c]/98 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 mb-2 rounded bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between text-xs font-mono text-cyan-300">
            <span>TEAM SHAZAM • SIH 2026</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 py-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 rounded-lg border border-transparent hover:border-cyan-500/20 transition-all flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <a
              href="#system"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-lg shadow-lg font-mono"
            >
              <span>EXPLORE FULL ARCHITECTURE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
