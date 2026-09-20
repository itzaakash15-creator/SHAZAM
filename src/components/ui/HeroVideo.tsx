import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Radio, Film, Sparkles } from "lucide-react";
import { PROJECT_DATA } from "../../data/project";

interface HeroVideoProps {
  className?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ className = "" }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasVideoFile, setHasVideoFile] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  // Configured video path from project data
  const videoSrc = PROJECT_DATA.heroVideo.videoSrc;

  // Check if video can play
  const handleVideoError = () => {
    // If local mp4 does not exist yet, fallback to the interactive canvas visualization
    setHasVideoFile(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  // Concept Visualization Fallback (Canvas Animated Ocean Sonar Environment)
  useEffect(() => {
    if (hasVideoFile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = 960);
    let height = (canvas.height = 540);
    let frame = 0;

    const renderSimulation = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Deep ocean gradient background
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#020a17");
      bg.addColorStop(0.5, "#041226");
      bg.addColorStop(1, "#020612");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Technical sonar grid lines
      ctx.strokeStyle = "rgba(6, 182, 212, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Circular sonar pulse radiating from left origin (AUV Transducer position)
      const originX = width * 0.22;
      const originY = height * 0.5;

      for (let r = 0; r < 4; r++) {
        const rad = ((frame * 1.5 + r * 140) % 650);
        const alpha = Math.max(0, 1 - rad / 650) * 0.45;
        ctx.beginPath();
        ctx.arc(originX, originY, rad, -Math.PI * 0.4, Math.PI * 0.4);
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Dynamic LFM Chirp Acoustic Stream traveling rightward
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#22d3ee";
      ctx.shadowColor = "#06b6d4";
      ctx.shadowBlur = 12;

      for (let x = originX; x < width - 60; x += 3) {
        const progress = (x - originX) / (width - originX);
        const freqSweep = 0.03 + progress * 0.12; // Frequency increases across space (LFM)
        const envelope = Math.sin(progress * Math.PI) * Math.min(1, progress * 4);
        const y = originY + Math.sin((x - frame * 3.5) * freqSweep) * (45 * envelope);

        if (x === originX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Subtle particles
      ctx.fillStyle = "rgba(103, 232, 249, 0.35)";
      for (let p = 0; p < 25; p++) {
        const px = ((p * 47 + frame * 0.6) % width);
        const py = ((p * 31 + Math.sin(frame * 0.02 + p) * 20) % height);
        ctx.fillRect(px, py, 2, 2);
      }

      // Origin Transducer Projector Marker
      ctx.beginPath();
      ctx.arc(originX, originY, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#22d3ee";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(originX, originY, 15, 0, Math.PI * 2);
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
      {/* Outer Glow & Ambient Vignette */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/25 bg-slate-950 shadow-[0_0_50px_rgba(6,182,212,0.15)] group transition-all duration-300 hover:border-cyan-400/40">
        
        {/* Aspect Ratio Container 16:9 */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
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
              {/* Concept Visualization Telemetry Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>ACOUSTIC SIMULATION REEL</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                    LFM CHIRP • 80–500 kHz
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/20 text-left">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold block">
                      TRANSMITTER TELEMETRY
                    </span>
                    <span className="text-xs text-slate-200 font-mono">
                      STM32 CORDIC Core • Dynamic Carrier Adaptation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

          {/* Video Controls (Mute & Play Toggles) */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white backdrop-blur-md transition-all shadow-lg cursor-pointer"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label="Toggle Mute"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {hasVideoFile && (
              <button
                onClick={togglePlay}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white backdrop-blur-md transition-all shadow-lg cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
                aria-label="Toggle Play State"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            )}
          </div>

          {/* Floating Badge on Top Left */}
          <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs font-mono text-cyan-300 backdrop-blur-md">
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PROJECT_DATA.heroVideo.badge}</span>
          </div>
        </div>
      </div>

      {/* Caption line below video */}
      <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>{PROJECT_DATA.heroVideo.caption}</span>
        </span>
        <span className="text-cyan-500/70 hidden sm:inline-block">
          SOURCE: public/videos/hero-demo.mp4
        </span>
      </div>
    </div>
  );
};
