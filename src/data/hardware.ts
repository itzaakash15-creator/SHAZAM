/**
 * Prototype Hardware Architecture
 * Editable component models, specifications, and roles.
 * You can edit component model numbers, interface protocols, and specs without touching UI components.
 */

export interface HardwareComponent {
  id: string;
  tag: string;
  name: string;
  model: string;
  category: "controller" | "sensor" | "analog" | "acoustic" | "power";
  role: string;
  specs: { label: string; value: string }[];
  interfaceType: string;
  operatingVoltage: string;
  notes: string;
}

export const HARDWARE_COMPONENTS: HardwareComponent[] = [
  {
    id: "mcu-stm32",
    tag: "MCU-01",
    name: "Main Embedded Controller",
    model: "STM32G474RE",
    category: "controller",
    role: "Central intelligence executing real-time sensor polling, adaptive chirp parameter computation, CORDIC math, and DMA-driven DAC waveform generation.",
    specs: [
      { label: "Core", value: "ARM Cortex-M4 @ 170 MHz" },
      { label: "Hardware Math", value: "CORDIC + FPU + FMAC" },
      { label: "DAC Output", value: "12-bit Dual DAC @ 15 MSPS" },
      { label: "DMA Transfer", value: "Multi-channel Circular DMA" },
      { label: "Package", value: "LQFP64 Low-Power" },
    ],
    interfaceType: "Embedded C/C++ (Bare-metal + HAL)",
    operatingVoltage: "3.3V DC",
    notes: "High-resolution timers and integrated analog peripherals eliminate external DAC requirement.",
  },
  {
    id: "sensor-temp",
    tag: "SNS-TMP",
    name: "Temperature Sensor",
    model: "DS18B20 / NTC Precision Thermistor (Editable)",
    category: "sensor",
    role: "Measures localized underwater water temperature to compute acoustic velocity variation ($c \\approx 1449.2 + 4.6T - 0.055T^2$).",
    specs: [
      { label: "Measurement Range", value: "-10°C to +85°C" },
      { label: "Accuracy", value: "±0.5°C Precision" },
      { label: "Response Time", value: "< 750 ms" },
      { label: "Housing", value: "Waterproof Stainless Probe" },
    ],
    interfaceType: "1-Wire / High-Res ADC",
    operatingVoltage: "3.3V - 5.0V",
    notes: "Temperature dominates the sound speed profile in the upper epipelagic ocean layers.",
  },
  {
    id: "sensor-pressure",
    tag: "SNS-PRS",
    name: "Pressure / Depth Sensor",
    model: "MS5837-30BA / Bar30 (Editable)",
    category: "sensor",
    role: "Estimates current AUV operating depth and hydrostatic pressure to gauge absorption and acoustic thermocline boundaries.",
    specs: [
      { label: "Pressure Range", value: "0 to 30 bar (0 - 300m depth)" },
      { label: "Resolution", value: "0.2 mbar (approx. 2 mm depth)" },
      { label: "Linearity", value: "±50 mbar @ 25°C" },
      { label: "Gel Protection", value: "Marine potting compound" },
    ],
    interfaceType: "I2C Fast Mode (400 kHz)",
    operatingVoltage: "3.3V DC",
    notes: "Used to determine water column stratification and acoustic refractive index.",
  },
  {
    id: "sensor-salinity",
    tag: "SNS-SAL",
    name: "Salinity / Conductivity Sensor",
    model: "Four-Electrode Toroidal EC Probe (Editable)",
    category: "sensor",
    role: "Measures electrical conductivity and dissolved solids to derive ocean salinity, directly influencing acoustic absorption $\\alpha(f)$.",
    specs: [
      { label: "Conductivity Range", value: "0 to 100 mS/cm" },
      { label: "Salinity Derivation", value: "Practical Salinity Scale (PSS-78)" },
      { label: "Stability", value: "Temperature Compensated" },
      { label: "Electrode Material", value: "Corrosion-resistant Titanium" },
    ],
    interfaceType: "Differential ADC / Analog Conditioner",
    operatingVoltage: "3.3V DC",
    notes: "Salinity affects relaxation frequencies of Boric Acid and Magnesium Sulfate.",
  },
  {
    id: "sensor-turbidity",
    tag: "SNS-TRB",
    name: "Turbidity Sensor",
    model: "TSD-10 / Optical Nephelometric Probe (Editable)",
    category: "sensor",
    role: "Measures suspended particulate matter and sediment density to detect high-scattering turbid waters and initiate low-frequency fallbacks.",
    specs: [
      { label: "Range", value: "0 to 4000 NTU" },
      { label: "Wavelength", value: "880 nm Infrared LED" },
      { label: "Scattering Angle", value: "90° Nephelometric detection" },
      { label: "Drift", value: "< 2% full-scale" },
    ],
    interfaceType: "Analog Voltage to STM32 ADC",
    operatingVoltage: "5.0V Input / 3.3V Clamped",
    notes: "High turbidity prompts lower carrier frequencies to bypass particle backscattering.",
  },
  {
    id: "receiver-hydrophone",
    tag: "RX-HYD",
    name: "Hydrophone / Receiver",
    model: "Piezo Hydrophone + Low-Noise Preamplifier (Editable)",
    category: "analog",
    role: "Receives acoustic return signals and echoes for the cognitive verification feedback loop.",
    specs: [
      { label: "Frequency Band", value: "20 kHz - 600 kHz" },
      { label: "Sensitivity", value: "-180 dB re 1V/µPa" },
      { label: "Preamp Gain", value: "+40 dB Variable Gain (PGA)" },
      { label: "Input Noise", value: "< 1.2 nV/√Hz" },
    ],
    interfaceType: "Differential Analog to STM32 ADC",
    operatingVoltage: "Dual Rail ±5V / 3.3V ADC buffer",
    notes: "Enables closed-loop echo quality verification and adaptive parameter updates.",
  },
  {
    id: "amp-power",
    tag: "AMP-DRV",
    name: "Power Amplifier",
    model: "High-Efficiency Class-D Acoustic Driver (Editable)",
    category: "analog",
    role: "Amplifies the low-level analog chirp generated by the STM32 DAC to the voltage/current levels required to drive the piezo transducer.",
    specs: [
      { label: "Topology", value: "Full-Bridge Class-D PWM / Linear" },
      { label: "Peak Power", value: "50W - 150W Acoustic Peak" },
      { label: "Efficiency", value: "> 88% under resonance" },
      { label: "Impedance Match", value: "Ferrite Toroid LC Matching Tank" },
    ],
    interfaceType: "Analog Input from STM32 DAC",
    operatingVoltage: "12V - 24V Subsea Battery Rail",
    notes: "Custom reactive impedance matching network tuned for wideband chirp excitation.",
  },
  {
    id: "transducer-acoustic",
    tag: "TX-PZT",
    name: "Underwater Acoustic Transducer",
    model: "PZT-4 / PZT-8 Broadband Projector (Editable)",
    category: "acoustic",
    role: "Converts electrical voltage chirps into directional mechanical pressure waves in the water column.",
    specs: [
      { label: "Resonant Center", value: "Broadband Multi-Resonance" },
      { label: "Operating Range", value: "80 kHz to 550 kHz" },
      { label: "Beam Width", value: "Conical 18° (-3 dB)" },
      { label: "Pressure Rating", value: "300 meters submergence" },
    ],
    interfaceType: "High-Voltage AC Drive",
    operatingVoltage: "100V - 250V P-P Excitation",
    notes: "Encapsulated in acoustically matched polyurethane elastomer.",
  },
  {
    id: "pwr-mgmt",
    tag: "PWR-REG",
    name: "Power Management & Isolation",
    model: "Ultra-Low Noise Synchronous DC-DC Regulators (Editable)",
    category: "power",
    role: "Supplies clean, regulated, isolated DC rails to analog front-end, digital MCU core, and high-power transducer stage.",
    specs: [
      { label: "Input Range", value: "11V - 28V AUV Main Bus" },
      { label: "Output Rails", value: "3.3V (Digital), 5V (Analog), 24V (Amp)" },
      { label: "Ripple / Noise", value: "< 5 mV RMS on sensitive lines" },
      { label: "Protection", value: "Reverse polarity, OVP, UVLO, thermal" },
    ],
    interfaceType: "Hardware Power Distribution Bus",
    operatingVoltage: "Battery Input 12V-24V",
    notes: "Isolated grounds between noisy amplifier stage and precision ADC sensors.",
  },
];
