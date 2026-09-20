import React, { useEffect, useState } from "react";

export const SonarCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.onclick !== null ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button";
        setIsPointer(isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden lg:block fixed pointer-events-none z-[999] transition-opacity duration-200"
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Outer Sonar Ring */}
      <div
        className={`absolute -top-3.5 -left-3.5 rounded-full border border-cyan-400/40 transition-all duration-150 ease-out ${
          isPointer ? "w-9 h-9 -top-4.5 -left-4.5 border-cyan-300 bg-cyan-500/10 scale-110" : "w-7 h-7"
        }`}
      />

      {/* Center Dot */}
      <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />

      {/* Reticle ticks */}
      {isPointer && (
        <div className="absolute -top-5 -left-5 w-10 h-10 pointer-events-none animate-spin" style={{ animationDuration: "12s" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyan-400/60" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyan-400/60" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-0.5 bg-cyan-400/60" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-0.5 bg-cyan-400/60" />
        </div>
      )}
    </div>
  );
};
