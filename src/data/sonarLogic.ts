/**
 * Adaptive Sonar Logic & Waveform Profiles
 * Environmental conditions, chirp parameters, and acoustic trade-off metrics.
 */

export interface SonarConditionProfile {
  id: string;
  name: string;
  badge: string;
  description: string;
  environmentalTrigger: string;
  strategy: string;
  acousticMetrics: {
    startFrequency: number; // in kHz
    endFrequency: number;   // in kHz
    bandwidth: number;      // in kHz
    pulseDurationMs: number;// in ms
    sweepType: "Linear Up-Chirp" | "Linear Down-Chirp" | "Hyperbolic";
    estimatedRangeMeters: number;
    spatialResolutionCm: number;
    absorptionCoefficient: string;
    powerConsumptionWatts: number;
  };
  whyThisChoice: string;
  waveformVisual: {
    color: string;
    glowColor: string;
    waveformDensity: number; // for canvas rendering
    amplitude: number;
  };
}

export const SONAR_CONDITIONS: SonarConditionProfile[] = [
  {
    id: "clear-water",
    name: "Clear / Normal Water",
    badge: "BASELINE BALANCED",
    description: "Nominal underwater conditions with low turbidity, moderate temperature gradients, and calm acoustic background.",
    environmentalTrigger: "Turbidity < 50 NTU • Salinity 32-35 PSU • Ambient Noise Low",
    strategy: "Balanced Frequency & Duration Strategy",
    acousticMetrics: {
      startFrequency: 180,
      endFrequency: 240,
      bandwidth: 60,
      pulseDurationMs: 15,
      sweepType: "Linear Up-Chirp",
      estimatedRangeMeters: 280,
      spatialResolutionCm: 4.5,
      absorptionCoefficient: "0.045 dB/m",
      powerConsumptionWatts: 24,
    },
    whyThisChoice: "Provides optimal compromise between spatial imaging clarity and acoustic penetration depth for standard AUV navigation and mapping.",
    waveformVisual: {
      color: "#22d3ee",
      glowColor: "rgba(34, 211, 238, 0.4)",
      waveformDensity: 1.0,
      amplitude: 0.8,
    },
  },
  {
    id: "high-turbidity",
    name: "High Turbidity",
    badge: "ROBUST PENETRATION",
    description: "Suspended sediment, silt plumes, or estuarine mixing layers that severely scatter high-frequency acoustic waves.",
    environmentalTrigger: "Turbidity > 250 NTU • Suspended Solids Detected • Backscatter Spikes",
    strategy: "Lower Frequency Fallback Strategy",
    acousticMetrics: {
      startFrequency: 95,
      endFrequency: 135,
      bandwidth: 40,
      pulseDurationMs: 25,
      sweepType: "Linear Up-Chirp",
      estimatedRangeMeters: 210,
      spatialResolutionCm: 8.2,
      absorptionCoefficient: "0.018 dB/m",
      powerConsumptionWatts: 38,
    },
    whyThisChoice: "Lower acoustic carrier frequencies have wavelengths longer than suspended particulate radii, drastically suppressing Rayleigh and Mie scattering.",
    waveformVisual: {
      color: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.4)",
      waveformDensity: 0.55,
      amplitude: 0.95,
    },
  },
  {
    id: "long-range",
    name: "Long-Range Operation",
    badge: "MAX RANGE / DEEP SCAN",
    description: "AUV conducting wide-area bathymetric reconnaissance or distant obstacle detection where mission range is paramount.",
    environmentalTrigger: "Mission Command: Recon En-Route • Low Echo SNR at Far Boundaries",
    strategy: "Low-Frequency High-Energy Chirp",
    acousticMetrics: {
      startFrequency: 85,
      endFrequency: 115,
      bandwidth: 30,
      pulseDurationMs: 40,
      sweepType: "Linear Up-Chirp",
      estimatedRangeMeters: 550,
      spatialResolutionCm: 12.0,
      absorptionCoefficient: "0.012 dB/m",
      powerConsumptionWatts: 65,
    },
    whyThisChoice: "Exploits the exponential decay law of underwater sound absorption: lower frequencies travel several times farther per unit transmitted power.",
    waveformVisual: {
      color: "#60a5fa",
      glowColor: "rgba(96, 165, 250, 0.4)",
      waveformDensity: 0.4,
      amplitude: 1.0,
    },
  },
  {
    id: "high-detail",
    name: "High-Detail Scanning",
    badge: "MICRO-BATHYMETRY",
    description: "AUV operating in close proximity (< 40m) to seafloor pipelines, submerged shipwrecks, or docking targets requiring millimeter-level precision.",
    environmentalTrigger: "Depth Altitude < 30m • Object Classification Mode • Clear Water",
    strategy: "High-Frequency Wideband Chirp",
    acousticMetrics: {
      startFrequency: 380,
      endFrequency: 490,
      bandwidth: 110,
      pulseDurationMs: 8,
      sweepType: "Linear Up-Chirp",
      estimatedRangeMeters: 65,
      spatialResolutionCm: 1.2,
      absorptionCoefficient: "0.142 dB/m",
      powerConsumptionWatts: 18,
    },
    whyThisChoice: "High acoustic bandwidth (110 kHz) produces an extremely sharp matched-filter autocorrelation spike, giving sub-centimeter range resolution.",
    waveformVisual: {
      color: "#a855f7",
      glowColor: "rgba(168, 85, 247, 0.4)",
      waveformDensity: 2.1,
      amplitude: 0.7,
    },
  },
  {
    id: "high-noise",
    name: "High Noise / Clutter",
    badge: "COGNITIVE DISCRIMINATION",
    description: "Surface wave chop, surface vessel propeller cavitation, or shallow-water multipath reverberation corrupting echo returns.",
    environmentalTrigger: "Ambient Hydrophone Noise > -45 dBV • Reverberation Index Elevated",
    strategy: "Non-Linear Chirp & Variable Windowing",
    acousticMetrics: {
      startFrequency: 140,
      endFrequency: 220,
      bandwidth: 80,
      pulseDurationMs: 30,
      sweepType: "Hyperbolic",
      estimatedRangeMeters: 175,
      spatialResolutionCm: 3.8,
      absorptionCoefficient: "0.038 dB/m",
      powerConsumptionWatts: 42,
    },
    whyThisChoice: "Applies non-linear frequency tapering and specialized window weighting (e.g., Tukey / Taylor) to push cross-correlation sidelobes below the ambient noise floor.",
    waveformVisual: {
      color: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.4)",
      waveformDensity: 1.35,
      amplitude: 0.85,
    },
  },
];

export const SONAR_DISCLAIMER = 
  "Exact operating frequencies and waveform parameters are selected according to transducer capability, mission requirements and measured environmental conditions.";
