import React, { useState, useEffect, useRef } from "react";
import { SONAR_CONDITIONS, SonarConditionProfile, SONAR_DISCLAIMER } from "../../data/sonarLogic";
import { Volume2, VolumeX, Radio, Cpu, Info, Sliders, Zap, CheckCircle2 } from "lucide-react";

export const WaveformVisualizer: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<SonarConditionProfile>(SONAR_CONDITIONS[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Canvas waveform rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let timeOffset = 0;

    const renderWaveform = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Technical background grid
      ctx.strokeStyle = "rgba(34, 211, 238, 0.08)";
      ctx.lineWidth = 1;
      const gridStep = 30;
      for (let x = 0; x < width; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Zero-crossing center axis
      ctx.strokeStyle = "rgba(34, 211, 238, 0.25)";
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Compute LFM (Linear Frequency Modulated) Chirp
      // s(t) = A * Envelope(t) * sin(2*pi*(f0*t + 0.5*k*t^2) + phase)
      timeOffset += 0.015;

      const density = selectedCondition.waveformVisual.waveformDensity;
      const ampMax = (height * 0.38) * selectedCondition.waveformVisual.amplitude;

      ctx.beginPath();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = selectedCondition.waveformVisual.color;
      ctx.shadowColor = selectedCondition.waveformVisual.color;
      ctx.shadowBlur = 10;

      for (let px = 0; px < width; px++) {
        // Normalized t from 0 to 1 across the screen
        const t = px / width;
        // Smooth Tukey / Hanning envelope window to avoid abrupt edge clipping
        const window = Math.sin(Math.PI * t);

        // Chirp frequency increases across x (Up-Chirp) or non-linear
        const f0 = 2.0 * density;
        const chirpRate = 14.0 * density;
        const instantaneousPhase = (2 * Math.PI * (f0 * t + 0.5 * chirpRate * t * t)) - timeOffset * 4;

        const y = centerY - ampMax * window * Math.sin(instantaneousPhase);

        if (px === 0) {
          ctx.moveTo(px, y);
        } else {
          ctx.lineTo(px, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 3. Envelope boundary curves (Top & Bottom envelope)
      ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
      ctx.setLineDash([3, 3]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let px = 0; px < width; px++) {
        const t = px / width;
        const window = Math.sin(Math.PI * t);
        const yTop = centerY - ampMax * window;
        if (px === 0) ctx.moveTo(px, yTop);
        else ctx.lineTo(px, yTop);
      }
      ctx.stroke();

      ctx.beginPath();
      for (let px = 0; px < width; px++) {
        const t = px / width;
        const window = Math.sin(Math.PI * t);
        const yBottom = centerY + ampMax * window;
        if (px === 0) ctx.moveTo(px, yBottom);
        else ctx.lineTo(px, yBottom);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      animFrameRef.current = requestAnimationFrame(renderWaveform);
    };

    renderWaveform();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [selectedCondition]);

  // Audio synthesis of chirp (scaled down to audible human range: 300Hz to 2800Hz)
  const triggerAcousticPing = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Map sonar ultrasound frequencies (e.g. 80-500kHz) to human audible spectrum (350Hz - 2200Hz)
      const startAudible = 350 + (selectedCondition.acousticMetrics.startFrequency - 80) * 3.5;
      const endAudible = startAudible + selectedCondition.acousticMetrics.bandwidth * 8;
      const durationSec = Math.max(0.12, selectedCondition.acousticMetrics.pulseDurationMs / 100);

      osc.type = "sine";
      osc.frequency.setValueAtTime(startAudible, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(50, endAudible), now + durationSec);

      // Volume envelope with soft attack and decay
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + durationSec);

      setAudioFeedback(`Emitted ${selectedCondition.acousticMetrics.bandwidth} kHz LFM Chirp Ping`);
      setTimeout(() => setAudioFeedback(""), 2200);
    } catch {
      setAudioFeedback("Web Audio initialized");
    }
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-cyan-500/20 overflow-hidden shadow-2xl">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-950/80 border-b border-cyan-500/15">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
          <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider uppercase">
            LIVE ADAPTIVE WAVEFORM GENERATOR • STM32 SIMULATION
          </span>
        </div>

        <div className="flex items-center gap-2">
          {audioFeedback && (
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              {audioFeedback}
            </span>
          )}
          <button
            onClick={() => {
              setIsPlayingAudio(!isPlayingAudio);
              triggerAcousticPing();
            }}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-lg transition-colors cursor-pointer"
            title="Audible Chirp Simulation (Muted by default, synthesized via Web Audio)"
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span>{isPlayingAudio ? "TEST ACOUSTIC PING" : "PREVIEW AUDIO CHIRP"}</span>
          </button>
        </div>
      </div>

      {/* Ocean Condition Selector Tabs */}
      <div className="p-4 bg-slate-900/40 border-b border-cyan-500/10">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          Select Ocean Environment Scenario:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {SONAR_CONDITIONS.map((cond) => {
            const isSelected = selectedCondition.id === cond.id;
            return (
              <button
                key={cond.id}
                onClick={() => {
                  setSelectedCondition(cond);
                  if (isPlayingAudio) triggerAcousticPing();
                }}
                className={`flex flex-col text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-cyan-950/70 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    : "bg-slate-950/40 border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-medium">
                    {cond.badge}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                </div>
                <span className="text-xs font-semibold text-slate-200 line-clamp-1">{cond.name}</span>
                <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {cond.acousticMetrics.startFrequency}-{cond.acousticMetrics.endFrequency} kHz
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Canvas Oscilloscope Display */}
      <div className="relative p-4 bg-slate-950/90">
        <div className="relative w-full h-44 sm:h-56 bg-slate-950 rounded-xl overflow-hidden border border-cyan-500/20 shadow-inner">
          <canvas
            ref={canvasRef}
            width={840}
            height={220}
            className="w-full h-full block"
          />

          {/* Canvas Telemetry HUD Overlay */}
          <div className="absolute top-2 left-3 flex items-center gap-2 text-[10px] font-mono text-cyan-300/80 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/20">
            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>MODULATION: {selectedCondition.acousticMetrics.sweepType}</span>
            <span className="text-slate-600">|</span>
            <span>CHIRP SLOPE k = {((selectedCondition.acousticMetrics.bandwidth / selectedCondition.acousticMetrics.pulseDurationMs) * 1000).toFixed(1)} kHz/s</span>
          </div>

          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
            f(t) = f₀ + (B/T)t • Tukey Window
          </div>
        </div>
      </div>

      {/* Dynamic Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-cyan-500/10 border-t border-cyan-500/15">
        <div className="p-3.5 bg-slate-950/90">
          <span className="block text-[11px] font-mono text-slate-400 uppercase">Carrier Band</span>
          <span className="text-base sm:text-lg font-mono font-bold text-cyan-300">
            {selectedCondition.acousticMetrics.startFrequency} → {selectedCondition.acousticMetrics.endFrequency}
            <span className="text-xs text-slate-400 ml-1">kHz</span>
          </span>
          <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
            Bandwidth: {selectedCondition.acousticMetrics.bandwidth} kHz
          </span>
        </div>

        <div className="p-3.5 bg-slate-950/90">
          <span className="block text-[11px] font-mono text-slate-400 uppercase">Pulse Width (T)</span>
          <span className="text-base sm:text-lg font-mono font-bold text-slate-100">
            {selectedCondition.acousticMetrics.pulseDurationMs}
            <span className="text-xs text-slate-400 ml-1">ms</span>
          </span>
          <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
            Power: {selectedCondition.acousticMetrics.powerConsumptionWatts}W Peak
          </span>
        </div>

        <div className="p-3.5 bg-slate-950/90">
          <span className="block text-[11px] font-mono text-slate-400 uppercase">Estimated Range</span>
          <span className="text-base sm:text-lg font-mono font-bold text-emerald-400">
            ~{selectedCondition.acousticMetrics.estimatedRangeMeters}
            <span className="text-xs text-slate-400 ml-1">meters</span>
          </span>
          <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
            Loss: {selectedCondition.acousticMetrics.absorptionCoefficient}
          </span>
        </div>

        <div className="p-3.5 bg-slate-950/90">
          <span className="block text-[11px] font-mono text-slate-400 uppercase">Range Resolution (ΔR)</span>
          <span className="text-base sm:text-lg font-mono font-bold text-cyan-300">
            {selectedCondition.acousticMetrics.spatialResolutionCm}
            <span className="text-xs text-slate-400 ml-1">cm</span>
          </span>
          <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
            ΔR = c / (2 · Bandwidth)
          </span>
        </div>
      </div>

      {/* Engineering Rationale Box */}
      <div className="p-4 bg-slate-900/50 border-t border-cyan-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-200">Environmental Strategy: </span>
            <span className="text-slate-300">{selectedCondition.whyThisChoice}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/20">
          <Cpu className="w-3.5 h-3.5" />
          <span>CORDIC Generated</span>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="px-4 py-2 bg-slate-950 text-center border-t border-slate-900 text-[10px] font-mono text-slate-500">
        DISCLAIMER: {SONAR_DISCLAIMER}
      </div>
    </div>
  );
};
