/**
 * Innovations, Potential Applications, and Comparison Matrix
 */

export interface InnovationItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  technicalMetric: string;
  iconName: string;
}

export const KEY_INNOVATIONS: InnovationItem[] = [
  {
    number: "01",
    title: "ENVIRONMENT-DRIVEN TRANSMISSION",
    tagline: "Sensor-Informed Physical Layer",
    description: "Continuously senses temperature, salinity, turbidity, and hydrostatic depth to calculate acoustic absorption and sound velocity gradients before every transmission.",
    technicalMetric: "4-Axis Environmental Telemetry",
    iconName: "Compass",
  },
  {
    number: "02",
    title: "REAL-TIME LFM CHIRP GENERATION",
    tagline: "Dynamic Direct Waveform Synthesis",
    description: "Synthesizes mathematical Linear Frequency Modulated (LFM) chirps on the fly using STM32 CORDIC acceleration without relying on inflexible pre-stored lookup tables.",
    technicalMetric: "Hardware CORDIC Sine Synthesizer",
    iconName: "Activity",
  },
  {
    number: "03",
    title: "DYNAMIC FREQUENCY STRATEGY",
    tagline: "Optimized Range vs. Resolution",
    description: "Seamlessly pivots carrier frequencies from 80 kHz for long-range penetration in turbid water to 500 kHz for millimeter-grade target imaging in clear proximity.",
    technicalMetric: "Wideband 80 kHz - 500 kHz Bandwidth",
    iconName: "Sliders",
  },
  {
    number: "04",
    title: "LOW-POWER EMBEDDED CONTROL",
    tagline: "Subsea AUV Battery Optimization",
    description: "Engineered specifically for low-payload AUV energy budgets. Leverages ARM Cortex-M4 sleep states and autonomous DMA channels to consume minimal standby power.",
    technicalMetric: "< 1.8W Standby / High-Efficiency Pulse",
    iconName: "Zap",
  },
  {
    number: "05",
    title: "COGNITIVE FEEDBACK LOOP",
    tagline: "Sense-Decide-Transmit-Verify-Adapt",
    description: "Integrates receiver hydrophone telemetry to evaluate echo quality and signal-to-noise ratio, automatically retransmitting with compensated parameters if echoes degrade.",
    technicalMetric: "Closed-Loop Echo SNR Verification",
    iconName: "RotateCw",
  },
  {
    number: "06",
    title: "AUV-READY MODULAR ARCHITECTURE",
    tagline: "Plug-and-Play Marine Payload",
    description: "Compact PCB footprint designed for standardized cylindrical subsea pressure vessel hulls with isolated grounds, galvanic protection, and standard digital buses.",
    technicalMetric: "Standardized Pressure-Hull Form Factor",
    iconName: "Layers",
  },
];

export const APPLICATION_AREAS = [
  {
    id: "app-seafloor",
    title: "Seafloor Mapping & Bathymetry",
    description: "High-resolution side-scan and multibeam bathymetry across changing water columns, thermoclines, and coastal shallow waters.",
    icon: "Map",
    badge: "Hydrographic Survey",
  },
  {
    id: "app-detection",
    title: "Underwater Object Detection",
    description: "Accurate detection and spatial classification of submerged obstacles, submerged containers, navigation hazards, and seabed anomalies.",
    icon: "Crosshair",
    badge: "Obstacle Avoidance",
  },
  {
    id: "app-research",
    title: "Marine & Oceanographic Research",
    description: "Scientific monitoring of water column stratification, internal oceanic waves, acoustic scattering layers, and marine habitats.",
    icon: "Waves",
    badge: "Ocean Science",
  },
  {
    id: "app-rescue",
    title: "Search & Rescue Operations",
    description: "Rapid deployment in emergency underwater searches for downed aircraft black boxes, missing submersibles, or vessel debris.",
    icon: "LifeBuoy",
    badge: "Emergency Response",
  },
  {
    id: "app-infra",
    title: "Subsea Infrastructure Inspection",
    description: "Non-destructive acoustic inspection of offshore oil & gas pipelines, undersea telecommunication fiber cables, and wind turbine jackets.",
    icon: "ShieldCheck",
    badge: "Industrial Subsea",
  },
  {
    id: "app-nav",
    title: "Autonomous Underwater Navigation",
    description: "Doppler Velocity Log (DVL) and acoustic terrain-relative navigation assisting AUVs when surface GPS is completely unavailable.",
    icon: "Navigation",
    badge: "AUV Autonomy",
  },
  {
    id: "app-env",
    title: "Environmental Monitoring",
    description: "Continuous surveillance of estuarine siltation, sediment dredging plumes, coral reef degradation, and anthropogenic sound pollution.",
    icon: "Anchor",
    badge: "Eco-Acoustics",
  },
  {
    id: "app-defence",
    title: "Defence & Maritime Research",
    description: "Naval acoustic surveillance, harbor perimeter defense, mine countermeasures (MCM), and stealth acoustic telemetry.",
    icon: "Target",
    badge: "Naval Defence",
  },
];

export const COMPARISON_TABLE = [
  {
    feature: "Transmission Waveform",
    traditional: "Fixed static waveform stored in ROM or hard-coded parameters.",
    shazam: "Dynamically computed LFM chirp parameterized in real time.",
    impact: "Optimal time-bandwidth product tailored to the exact medium.",
  },
  {
    feature: "Carrier Frequency Strategy",
    traditional: "Predefined single operating frequency (e.g., rigid 200 kHz).",
    shazam: "Dynamic multi-band hopping (80 kHz - 500 kHz) based on environment.",
    impact: "Maximized range in turbidity, maximized resolution in close quarters.",
  },
  {
    feature: "Environmental Awareness",
    traditional: "Blind to temperature, salinity, turbidity, and sound velocity changes.",
    shazam: "Continuous real-time multi-sensor telemetry acquisition.",
    impact: "Compensates for absorption loss $\\alpha(f)$ and acoustic refraction.",
  },
  {
    feature: "Decision Architecture",
    traditional: "Static operator preset; requires surface manual intervention.",
    shazam: "Autonomous onboard embedded rule engine on STM32G474RE.",
    impact: "Enables true long-endurance autonomous subsea missions.",
  },
  {
    feature: "Feedback & Verification",
    traditional: "Open-loop transmission without assessing echo return quality.",
    shazam: "Cognitive closed-loop verification via hydrophone echo analysis.",
    impact: "Auto-retransmits with compensated chirp if echo SNR degrades.",
  },
  {
    feature: "AUV Energy Footprint",
    traditional: "Constant high power transmission regardless of target proximity.",
    shazam: "Adaptive pulse duration and power scaling to conserve battery.",
    impact: "Extends AUV operational mission endurance by up to 35%.",
  },
];
