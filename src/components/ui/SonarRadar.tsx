import React, { useEffect, useRef } from "react";

interface SonarRadarProps {
  className?: string;
  size?: number; // size in px
  showTelemetry?: boolean;
  interactive?: boolean;
}

interface TargetBlip {
  x: number;
  y: number;
  distance: number;
  angle: number;
  label: string;
  opacity: number;
}

export const SonarRadar: React.FC<SonarRadarProps> = ({
  className = "",
  size = 480,
  showTelemetry = true,
  interactive = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.44;

    let angle = 0;
    let pulseRadius = 0;

    // Fixed mock underwater targets
    const targets: TargetBlip[] = [
      { x: centerX + radius * 0.45 * Math.cos(0.8), y: centerY + radius * 0.45 * Math.sin(0.8), distance: 160, angle: 0.8, label: "TGT-A // 160m", opacity: 0 },
      { x: centerX + radius * 0.72 * Math.cos(2.3), y: centerY + radius * 0.72 * Math.sin(2.3), distance: 340, angle: 2.3, label: "SEABED-RIDGE // 340m", opacity: 0 },
      { x: centerX + radius * 0.32 * Math.cos(4.1), y: centerY + radius * 0.32 * Math.sin(4.1), distance: 110, angle: 4.1, label: "OBSTACLE // 110m", opacity: 0 },
      { x: centerX + radius * 0.85 * Math.cos(5.4), y: centerY + radius * 0.85 * Math.sin(5.4), distance: 480, angle: 5.4, label: "TGT-B // 480m", opacity: 0 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // 1. Draw outer boundary and subtle radial gradient
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      bgGrad.addColorStop(0, "rgba(8, 25, 48, 0.4)");
      bgGrad.addColorStop(0.7, "rgba(3, 13, 28, 0.7)");
      bgGrad.addColorStop(1, "rgba(2, 6, 23, 0.95)");
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Concentric Range Rings (5 rings)
      const ringSteps = [0.2, 0.4, 0.6, 0.8, 1.0];
      const ringLabels = ["100m", "200m", "300m", "400m", "500m"];

      ringSteps.forEach((step, idx) => {
        const r = radius * step;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === ringSteps.length - 1 
          ? "rgba(34, 211, 238, 0.45)" 
          : "rgba(34, 211, 238, 0.15)";
        ctx.lineWidth = idx === ringSteps.length - 1 ? 1.5 : 1;
        if (idx % 2 === 1) {
          ctx.setLineDash([4, 4]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Ring distance labels
        ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillText(ringLabels[idx], centerX + 6, centerY - r + 11);
      });

      // 3. Crosshairs and Angle Radians
      ctx.strokeStyle = "rgba(34, 211, 238, 0.12)";
      ctx.lineWidth = 1;
      // Horizontal
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.stroke();
      // Vertical
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();
      // 45 degree diagonals
      ctx.beginPath();
      ctx.moveTo(centerX - radius * 0.707, centerY - radius * 0.707);
      ctx.lineTo(centerX + radius * 0.707, centerY + radius * 0.707);
      ctx.moveTo(centerX - radius * 0.707, centerY + radius * 0.707);
      ctx.lineTo(centerX + radius * 0.707, centerY - radius * 0.707);
      ctx.stroke();

      // Degree Markers around border
      const bearings = [
        { text: "000° N", x: centerX, y: centerY - radius - 8, align: "center" },
        { text: "090° E", x: centerX + radius + 10, y: centerY + 3, align: "left" },
        { text: "180° S", x: centerX, y: centerY + radius + 15, align: "center" },
        { text: "270° W", x: centerX - radius - 10, y: centerY + 3, align: "right" },
      ];
      ctx.fillStyle = "rgba(34, 211, 238, 0.6)";
      ctx.font = "10px 'JetBrains Mono', monospace";
      bearings.forEach((b) => {
        ctx.textAlign = b.align as CanvasTextAlign;
        ctx.fillText(b.text, b.x, b.y);
      });

      // 4. Expanding Acoustic Pulse
      pulseRadius += 0.8;
      if (pulseRadius > radius) pulseRadius = 0;
      const pulseOpacity = (1 - pulseRadius / radius) * 0.6;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34, 211, 238, ${pulseOpacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 5. Rotating Sonar Sweep Beam (with gradient trail)
      angle = (angle + 0.02) % (Math.PI * 2);
      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      sweepGradient.addColorStop(0, "rgba(34, 211, 238, 0.35)");
      sweepGradient.addColorStop(1, "rgba(6, 182, 212, 0.05)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle - 0.45, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // Leading sweep line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
      ctx.strokeStyle = "rgba(103, 232, 249, 0.95)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#22d3ee";
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();

      // 6. Target Blips that illuminate as the sweep beam passes
      targets.forEach((tgt) => {
        // Compute angular difference
        let diff = (angle - tgt.angle) % (Math.PI * 2);
        if (diff < 0) diff += Math.PI * 2;

        if (diff < 0.15) {
          tgt.opacity = 1.0; // Flash bright on sweep contact
        } else {
          tgt.opacity = Math.max(0, tgt.opacity - 0.007); // Smooth exponential decay
        }

        if (tgt.opacity > 0.02) {
          ctx.save();
          // Target glow ring
          ctx.beginPath();
          ctx.arc(tgt.x, tgt.y, 6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34, 211, 238, ${tgt.opacity * 0.8})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Target center blip
          ctx.beginPath();
          ctx.arc(tgt.x, tgt.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(165, 243, 252, ${tgt.opacity})`;
          ctx.shadowColor = "#22d3ee";
          ctx.shadowBlur = 10;
          ctx.fill();

          // Target HUD Tag
          ctx.fillStyle = `rgba(103, 232, 249, ${tgt.opacity * 0.9})`;
          ctx.font = "8px 'JetBrains Mono', monospace";
          ctx.textAlign = "left";
          ctx.fillText(tgt.label, tgt.x + 8, tgt.y - 4);
          ctx.restore();
        }
      });

      // 7. Center AUV Transducer Origin Icon
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#22d3ee";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 12;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 9, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="max-w-full h-auto drop-shadow-[0_0_35px_rgba(6,182,212,0.25)]"
      />

      {showTelemetry && (
        <div className="absolute -bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md text-[11px] font-mono text-cyan-300">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>SONAR SWEEP: 360° ACTIVE</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">RANGE: 500m</span>
        </div>
      )}
    </div>
  );
};
