/**
 * Development and Testing Timeline
 * Stages from mathematical research to hardware validation.
 */

export interface TimelineStage {
  id: string;
  phaseNumber: string;
  title: string;
  category: "Theory" | "Embedded" | "Integration" | "Field Trials";
  description: string;
  milestones: string[];
  status: "Completed" | "In-Progress" | "SIH Milestone";
  telemetrySnapshot?: {
    label: string;
    value: string;
  };
}

export const DEVELOPMENT_STAGES: TimelineStage[] = [
  {
    id: "stage-01",
    phaseNumber: "PHASE 01",
    title: "Acoustic Research & Mathematical Modeling",
    category: "Theory",
    description: "Deep dive into underwater acoustic propagation mechanics, Francois-Garrison ocean absorption models, and LFM ambiguity functions.",
    milestones: [
      "Absorption spectrum simulation across 50 kHz - 600 kHz",
      "Matlab / Python synthesis of Linear & Hyperbolic FM chirps",
      "Analysis of Rayleigh backscattering vs particle grain size",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "Absorption Model", value: "Francois-Garrison Derived" },
  },
  {
    id: "stage-02",
    phaseNumber: "PHASE 02",
    title: "System Architecture & Subsystem Definition",
    category: "Theory",
    description: "Formulation of closed-loop adaptive pipeline: environmental acquisition, parameter calculation, DAC synthesis, and acoustic verification.",
    milestones: [
      "End-to-end signal flow definition from transducer to MCU",
      "Power budget calculation for subsea battery operations",
      "Safety interlocks and fault-handling state machines",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "System Loop Latency", value: "< 12 ms" },
  },
  {
    id: "stage-03",
    phaseNumber: "PHASE 03",
    title: "Hardware Selection & Circuit Simulation",
    category: "Embedded",
    description: "Selection of STM32G474RE for integrated CORDIC and high-speed analog peripherals, alongside low-noise sensor front-ends.",
    milestones: [
      "SPICE modeling of Class-D acoustic power driver stage",
      "LC resonant tank matching network impedance design",
      "Power regulation topology to isolate analog sensors",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "Driver Efficiency", value: "91.4% Simulated" },
  },
  {
    id: "stage-04",
    phaseNumber: "PHASE 04",
    title: "STM32 Firmware Development & Bare-Metal HAL",
    category: "Embedded",
    description: "Development of peripheral drivers on STM32G474RE using C/C++, configuring TIM1 master triggers, DMA channels, and CORDIC coprocessor.",
    milestones: [
      "TIM-triggered circular DMA transfer to 12-bit DAC",
      "Hardware CORDIC acceleration for high-speed sine generation",
      "Real-time sensor interrupt handlers with zero CPU stall",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "MCU Core Speed", value: "170 MHz Cortex-M4" },
  },
  {
    id: "stage-05",
    phaseNumber: "PHASE 05",
    title: "Real-Time Chirp Waveform Generation",
    category: "Embedded",
    description: "Successful real-time synthesis of linear up-chirp waveforms directly from mathematical parameters without pre-stored lookup tables.",
    milestones: [
      "Dual-buffer ping-pong DMA DAC waveform output",
      "Jitter measurement: < 12 picoseconds phase variance",
      "Harmonic distortion analysis using digital spectrum analyzer",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "DAC Output Sample Rate", value: "10 MSPS Double-Buffered" },
  },
  {
    id: "stage-06",
    phaseNumber: "PHASE 06",
    title: "Sensor Integration & ADC Telemetry",
    category: "Integration",
    description: "Interfacing turbidity, salinity, temperature, and hydrostatic pressure sensors with STM32 analog inputs and digital buses.",
    milestones: [
      "Temperature drift calibration in controlled thermal bath",
      "MS5837 pressure sensor I2C reading down to 0.2 mbar",
      "Nephelometric optical turbidity calibration with Formazin standards",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "Sensor Polling Period", value: "50 Hz Continuous" },
  },
  {
    id: "stage-07",
    phaseNumber: "PHASE 07",
    title: "Bench Testing & Oscilloscope Validation",
    category: "Integration",
    description: "Connecting the STM32 controller to high-bandwidth digital oscilloscopes to verify dynamic chirp parameter transitions under simulated environmental shifts.",
    milestones: [
      "Real-time frequency transition verification (100 kHz <-> 450 kHz)",
      "Power rail stability verification under peak acoustic pulses",
      "Thermal dissipation profiling of Class-D switching FETs",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "Bandwidth Dynamic Range", value: "20 kHz - 550 kHz" },
  },
  {
    id: "stage-08",
    phaseNumber: "PHASE 08",
    title: "Adaptive Decision Logic Implementation",
    category: "Integration",
    description: "Encoding heuristic and empirical decision rules into embedded firmware to dynamically assign chirp slope, duration, and carrier frequency.",
    milestones: [
      "Automated turbidity threshold fallback to 100 kHz band",
      "Clutter discrimination windowing with Tukey filter weights",
      "Low-battery conservation mode reducing chirp duty cycle",
    ],
    status: "Completed",
    telemetrySnapshot: { label: "Decision Algorithm", value: "Deterministic Rule Matrix" },
  },
  {
    id: "stage-09",
    phaseNumber: "PHASE 09",
    title: "Prototype Validation & Water Tank Trials",
    category: "Field Trials",
    description: "Submerging the transducer and hydrophone inside an acoustic test tank to measure acoustic transmission, echo SNR, and cognitive verification loops.",
    milestones: [
      "Acoustic pulse propagation verified in 2.5m water testbed",
      "Echo matched-filter correlation verified on embedded DSP",
      "Cognitive retransmit loop triggered upon simulated clutter",
    ],
    status: "SIH Milestone",
    telemetrySnapshot: { label: "Test Status", value: "SIH 2026 Ready" },
  },
];
