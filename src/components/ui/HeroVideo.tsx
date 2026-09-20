import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Radio } from "lucide-react";
import { PROJECT_DATA } from "../../data/project";

interface HeroVideoProps {
  className?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ className = "" }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoFile, setHasVideoFile] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  // Configured video path from project data
  const videoSrc = PROJECT_DATA.heroVideo.videoSrc;

  // Graceful fallback if video file is missing or still being placed
  const handleVideoError = () => {
    setHasVideoFile(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Attempt play immediately on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted autoplay always succeeds
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  // Concept Visualization Fallback (Canvas Animated Deep Ocean Sonar Waveform)
  useEffect(() => {
    if (hasVideoFile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = 1280);
    let height = (canvas.height = 720);
    let frame = 0;

    const renderSimulation = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Deep ocean gradient
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#031024");
      bg.addColorStop(0.5, "#041633");
      bg.addColorStop(1, "#020817");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Soft underwater caustic light rays
      for (let i = 0; i < 6; i++) {
        const rayX = (width * 0.15 * i + Math.sin(frame * 0.01 + i) * 60);
        const rayGrad = ctx.createLinearGradient(rayX, 0, rayX + 180, height);
        rayGrad.addColorStop(0, "rgba(34, 211, 238, 0.08)");
        rayGrad.addColorStop(0.6, "rgba(6, 182, 212, 0.02)");
        rayGrad.addColorStop(1, "transparent");
        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(rayX, 0);
        ctx.lineTo(rayX + 160, 0);
        ctx.lineTo(rayX + 320, height);
        ctx.lineTo(rayX + 80, height);
        ctx.closePath();
        ctx.fill();
      }

      // Origin point: Submerged AUV Transducer
      const originX = width * 0.22;
      const originY = height * 0.48;

      // Concentric expanding acoustic pulse rings
      for (let r = 0; r < 5; r++) {
        const rad = ((frame * 1.8 + r * 140) % 800);
        const alpha = Math.max(0, 1 - rad / 800) * 0.35;
        ctx.beginPath();
        ctx.arc(originX, originY, rad, -Math.PI * 0.45, Math.PI * 0.45);
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Linear Frequency Modulated (LFM) Acoustic Wave Stream
      ctx.beginPath();
      ctx.lineWidth = 2.8;
      ctx.strokeStyle = "#22d3ee";
      ctx.shadowColor = "#06b6d4";
      ctx.shadowBlur = 14;

      for (let x = originX; x < width - 60; x += 3) {
        const progress = (x - originX) / (width - originX);
        const freqSweep = 0.025 + progress * 0.14;
        const envelope = Math.sin(progress * Math.PI) * Math.min(1, progress * 4);
        const y = originY + Math.sin((x - frame * 4.2) * freqSweep) * (55 * envelope);

        if (x === originX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Submerged AUV Transducer Core
      ctx.beginPath();
      ctx.arc(originX, originY, 9, 0, Math.PI * 2);
      ctx.fillStyle = "#22d3ee";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(originX, originY, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animRef.current = requestAnimationFrame(renderSimulation);
    };

    renderSimulation();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [hasVideoFile]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Outer Container with Marine Border & Depth Shadow */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#020817] shadow-[0_15px_60px_-15px_rgba(6,182,212,0.2)] group transition-all duration-300">
        
        {/* Aspect Ratio 16:9 Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#020817] flex items-center justify-center">
          {hasVideoFile ? (
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              onError={handleVideoError}
              className="w-full h-full object-cover select-none"
            />
          ) : (
            <div className="relative w-full h-full">
              <canvas
                ref={canvasRef}
                className="w-full h-full block"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>DYNAMIC ACOUSTIC CHIRP SIMULATION</span>
              </div>
            </div>
          )}

          {/* CRITICAL USER REQUIREMENT:
              Gradient overlay at the bottom of the video so it blends nicely into the next section.
              Starts transparent above, becomes darker toward the bottom, blends into page background. */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-44 bg-gradient-to-t from-[#020817] via-[#020817]/75 to-transparent pointer-events-none z-10" />

          {/* Clean, unobtrusive Mute / Unmute Button */}
          {hasVideoFile && (
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={toggleMute}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white backdrop-blur-md transition-all shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label="Toggle Mute"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] text-slate-400 hidden sm:inline">MUTED</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] text-cyan-300 hidden sm:inline">AUDIO ON</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Subtitle Caption Line */}
      <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>{PROJECT_DATA.heroVideo.caption}</span>
        </span>
        <span className="text-cyan-500/70 hidden sm:inline-block">
          SOURCE: {videoSrc}
        </span>
      </div>
    </div>
  );
};
