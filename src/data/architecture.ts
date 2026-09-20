/**
 * System Architecture Flow and STM32 Embedded Controller Specifications
 */

export interface ArchitectureStep {
  step: number;
  label: string;
  category: "mcu" | "sensors" | "analog" | "transducer" | "feedback";
  subtext: string;
  hardwareActor: string;
  description: string;
}

export const ARCHITECTURE_STEPS: ArchitectureStep[] = [
  {
    step: 1,
    label: "System Initialization",
    category: "mcu",
    subtext: "Clock configuration, RCC, PLL setup to 170 MHz.",
    hardwareActor: "STM32G474RE Core",
    description: "Core boots up, configures system clocks, initializes NVIC vector table, and validates internal voltage regulators.",
  },
  {
    step: 2,
    label: "Startup Diagnostics",
    category: "mcu",
    subtext: "Self-test of peripheral registers & memory.",
    hardwareActor: "Hardware BIST",
    description: "Executes peripheral health checks, bus integrity tests, and verifies internal reference voltages.",
  },
  {
    step: 3,
    label: "Read Environmental Sensors",
    category: "sensors",
    subtext: "Poll temperature, pressure, salinity & turbidity.",
    hardwareActor: "Subsea Sensor Cluster",
    description: "Gathers ambient oceanic parameters from external probes exposed to the subsea environment.",
  },
  {
    step: 4,
    label: "ADC Acquisition",
    category: "mcu",
    subtext: "12-bit SAR ADC conversion with hardware oversampling.",
    hardwareActor: "STM32 Internal ADC1/ADC2",
    description: "Fast multi-channel ADC captures calibrated sensor analog voltages with DMA offloading.",
  },
  {
    step: 5,
    label: "Environmental Analysis",
    category: "mcu",
    subtext: "Compute sound speed, absorption alpha, & turbidity index.",
    hardwareActor: "CORDIC + FPU Math Engine",
    description: "Calculates real-time sound velocity $c$ and Francois-Garrison attenuation loss $\\alpha(f)$ in firmware.",
  },
  {
    step: 6,
    label: "Choose Sonar Chirp Parameters",
    category: "mcu",
    subtext: "Select start/stop frequency, duration, & amplitude profile.",
    hardwareActor: "Adaptive Decision Rule Engine",
    description: "Determines optimal center frequency $f_c$, bandwidth $B$, and pulse width $T$ based on environmental thresholds.",
  },
  {
    step: 7,
    label: "Generate LFM Chirp",
    category: "mcu",
    subtext: "Synthesize instantaneous phase $s(t) = A \\cos(2\\pi f_0 t + \\pi k t^2)$.",
    hardwareActor: "CORDIC Coprocessor",
    description: "High-speed hardware sine generator computes chirp sample points into double-buffered DMA memory.",
  },
  {
    step: 8,
    label: "DAC Output",
    category: "mcu",
    subtext: "Continuous 12-bit analog voltage chirp stream.",
    hardwareActor: "STM32 15 MSPS DAC Channel",
    description: "DAC converts computed digital samples into a smooth analog voltage waveform triggered by TIM6.",
  },
  {
    step: 9,
    label: "Power Amplifier",
    category: "analog",
    subtext: "Class-D high-efficiency acoustic driver stage.",
    hardwareActor: "LC Resonant Power Stage",
    description: "Amplifies low-voltage DAC signal to high-voltage AC excitation suitable for driving the piezo crystal.",
  },
  {
    step: 10,
    label: "Underwater Transducer",
    category: "transducer",
    subtext: "Piezoceramic acoustic projector.",
    hardwareActor: "PZT-4 Broadband Transducer",
    description: "Converts electrical voltage oscillations into mechanical pressure sound waves in the ocean.",
  },
  {
    step: 11,
    label: "Acoustic Transmission",
    category: "transducer",
    subtext: "Acoustic wave propagates into water column.",
    hardwareActor: "Ocean Acoustic Waveguide",
    description: "Sound pulses travel through the water column, penetrating marine layers and reflecting off targets.",
  },
  {
    step: 12,
    label: "Receive / Verify Response",
    category: "feedback",
    subtext: "Hydrophone captures returned target echoes.",
    hardwareActor: "Acoustic Hydrophone Receiver",
    description: "Broadband hydrophone picks up the reflected acoustic echo and passes it to the low-noise preamplifier.",
  },
  {
    step: 13,
    label: "Evaluate Performance",
    category: "feedback",
    subtext: "Calculate echo SNR, pulse compression peak & reverberation.",
    hardwareActor: "DSP Matched Filter Core",
    description: "Cross-correlates received echo with transmitted reference chirp to assess SNR and target resolution.",
  },
  {
    step: 14,
    label: "Adapt Parameters if Required",
    category: "feedback",
    subtext: "Trigger cognitive parameter update if SNR is below threshold.",
    hardwareActor: "Cognitive Feedback Logic",
    description: "If reflection is degraded by sudden turbidity or noise, adapts carrier frequency and re-tunes waveform.",
  },
  {
    step: 15,
    label: "Repeat Continuous Cycle",
    category: "mcu",
    subtext: "Next ping cycle executed with updated optimal waveform.",
    hardwareActor: "Autonomous AUV Mission Loop",
    description: "Cycle seamlessly repeats at the programmed ping repetition interval (PRI).",
  },
];

export interface Stm32Peripheral {
  id: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  role: string;
  pinoutInfo: string;
  technicalMetric: string;
}

export const STM32_PERIPHERALS: Stm32Peripheral[] = [
  {
    id: "adc",
    name: "ADC",
    badge: "ANALOG IN",
    title: "Environmental Sensor Acquisition",
    description: "Multi-channel 12-bit SAR ADC continuously samples analog outputs from turbidity, temperature, and conductivity sensors.",
    role: "Samples 4 analog environmental channels with 0.5 µs conversion time and 16x hardware oversampling for noise suppression.",
    pinoutInfo: "PA0, PA1, PA2, PA3 (ADC1_IN1..4)",
    technicalMetric: "Up to 4 MSPS • 12-bit Precision",
  },
  {
    id: "timers",
    name: "TIMERS",
    badge: "CLOCK SYNCH",
    title: "Accurate Waveform Timing",
    description: "High-resolution 32-bit timers synchronize ADC sampling intervals and precisely clock DAC waveform output buffers.",
    role: "TIM6 acts as the master trigger output (TRGO) driving the DAC without CPU interrupt overhead.",
    pinoutInfo: "TIM1, TIM2, TIM6, TIM8 (High-Res 170MHz)",
    technicalMetric: "Sub-nanosecond Phase Precision",
  },
  {
    id: "dma",
    name: "DMA",
    badge: "ZERO CPU OVERHEAD",
    title: "Continuous High-Speed Data Transfer",
    description: "Direct Memory Access controller streams chirp sample buffers directly from RAM to the DAC peripheral autonomously.",
    role: "Circular double-buffering allows the CPU to calculate the next adapted chirp while the current chirp is transmitting.",
    pinoutInfo: "DMA1 Channel 3 (DAC1_CH1 stream)",
    technicalMetric: "Zero CPU stall during acoustic pulse",
  },
  {
    id: "dac",
    name: "DAC",
    badge: "ANALOG OUT",
    title: "Analog LFM Chirp Generation",
    description: "Integrated high-speed 12-bit digital-to-analog converter generates smooth, continuous analog acoustic chirp signals.",
    role: "Directly drives the preamplifier input, eliminating external DDS synthesizer ICs and saving board space.",
    pinoutInfo: "PA4 (DAC1_OUT1)",
    technicalMetric: "15 MSPS Max Conversion Rate",
  },
  {
    id: "cordic",
    name: "CORDIC / FPU",
    badge: "HARDWARE MATH",
    title: "Fast Mathematical Computation",
    description: "Dedicated hardware CORDIC accelerator computes trigonometric sine/cosine values in hardware cycles.",
    role: "Enables real-time synthesis of $s(t) = \\sin(2\\pi (f_0 t + \\frac{k}{2} t^2))$ without pre-computed look-up tables in flash.",
    pinoutInfo: "Internal Hardware Math Engine",
    technicalMetric: "CORDIC Sine in 4 Clock Cycles",
  },
  {
    id: "gpio",
    name: "GPIO",
    badge: "HARDWARE CONTROL",
    title: "Control Signals & Power Switching",
    description: "High-speed GPIO pins control power amplifier gates, sensor power rails, and status diagnostic indicators.",
    role: "Executes microsecond-accurate amplifier transmit/receive (T/R) switching and sensor power gating.",
    pinoutInfo: "PB0..PB15, PC0..PC12",
    technicalMetric: "5V Tolerant • 50 MHz Slew Rate",
  },
  {
    id: "uart",
    name: "UART",
    badge: "COMMUNICATION",
    title: "Debugging & AUV Mission Bus",
    description: "High-speed USART connects the transmitter board to the AUV's main mission computer and development telemetry.",
    role: "Transmits real-time environmental logs, acoustic health diagnostics, and receives mission override commands.",
    pinoutInfo: "PA9 (TX), PA10 (RX) / USART1",
    technicalMetric: "Up to 10 Mbps DMA Telemetry",
  },
];
