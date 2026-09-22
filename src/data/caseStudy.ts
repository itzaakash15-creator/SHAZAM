/**
 * Case Study Data Module & Configurable Links
 * 
 * Edit YOUTUBE_VIDEO_URL and CASE_STUDY_PDF_URL directly here.
 * All text and metrics are based on official Team Shazam project documentation.
 */

// ==========================================
// CONFIGURABLE VARIABLES (REPLACE WHEN READY)
// ==========================================

/**
 * Replace this URL with your final YouTube video link.
 * When users click the video card or play button, it opens this URL in a new tab.
 */
export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

/**
 * Replace this URL with your actual Case Study PDF path or remote link.
 * Used in the "VIEW ORIGINAL CASE STUDY" modal download/view action.
 */
export const CASE_STUDY_PDF_URL = "/documents/shazam-case-study-sih2026.pdf";

// ==========================================
// CASE STUDY SECTION CONTENT
// ==========================================

export interface CaseStudyBlock {
  number: string;
  label: string;
  title: string;
  description: string;
  highlights?: {
    tag: string;
    detail: string;
  }[];
}

export interface CaseStudyData {
  header: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  blocks: {
    challenge: CaseStudyBlock;
    gap: CaseStudyBlock;
    approach: CaseStudyBlock;
    impact: CaseStudyBlock;
  };
  videoCta: {
    heading: string;
    subheading: string;
    videoLabel: string;
    actionText: string;
    posterImage: string;
    durationPlaceholder: string;
  };
  originalCaseStudy: {
    title: string;
    subtitle: string;
    sihId: string;
    organization: string;
    category: string;
    theme: string;
    executiveSummary: string[];
    technicalSpecifications: {
      category: string;
      details: string;
    }[];
    deliverables: string[];
  };
}

export const CASE_STUDY_DATA: CaseStudyData = {
  header: {
    eyebrow: "CASE STUDY",
    heading: "From Problem to Possibility.",
    subheading: "A concise look at the challenge, our approach, and the impact behind SHAZAM.",
  },

  blocks: {
    // 01 — THE CHALLENGE (2–3 concise sentences)
    challenge: {
      number: "01",
      label: "THE PROBLEM",
      title: "THE CHALLENGE",
      description:
        "Underwater environments fluctuate continuously in temperature, salinity, turbidity, and pressure, shifting acoustic absorption and sound speed. In conventional marine operations, acoustic transmitters must either sacrifice long-distance range or forfeit high-resolution imaging due to rigid transmission trade-offs.",
    },

    // 02 — THE GAP (Existing approaches insufficient)
    gap: {
      number: "02",
      label: "THE GAP",
      title: "THE GAP",
      description:
        "Traditional subsea sonars rely on static, pre-programmed waveforms and single-frequency hardware. They operate blindly without awareness of environmental shifts, running open-loop without echo verification and requiring manual surface intervention.",
    },

    // 03 — OUR APPROACH (What SHAZAM is building)
    approach: {
      number: "03",
      label: "OUR APPROACH",
      title: "OUR APPROACH",
      description:
        "SHAZAM combines in-situ environmental sensors with an onboard STM32G474RE micro-core to dynamically synthesize Linear Frequency Modulated (LFM) chirps via hardware CORDIC acceleration tailored to active water column conditions.",
    },

    // 04 — THE IMPACT (2–4 short measurable/meaningful outcomes)
    impact: {
      number: "04",
      label: "THE IMPACT",
      title: "THE IMPACT",
      description:
        "Validated subsea engineering capabilities engineered for real-world AUV operations:",
      highlights: [
        {
          tag: "REAL-TIME",
          detail: "Dynamic multi-band adaptation (80–500 kHz) tailored to water column conditions.",
        },
        {
          tag: "AUTONOMOUS",
          detail: "Embedded onboard decision core eliminates dependence on manual surface intervention.",
        },
        {
          tag: "AUV-OPTIMIZED",
          detail: "Ultra low-power standby (< 1.8W) and pulse scaling to preserve subsea battery life.",
        },
        {
          tag: "SCALABLE",
          detail: "Standardized cylindrical payload form factor designed for marine pressure hulls.",
        },
      ],
    },
  },

  videoCta: {
    heading: "SEE SHAZAM IN ACTION",
    subheading: "Explore the project, our approach, and the technology behind the solution.",
    videoLabel: "PROJECT VIDEO",
    actionText: "Watch the Full Explanation",
    posterImage: "/case-study-video-poster.jpg",
    durationPlaceholder: "Full Demo Walkthrough",
  },

  originalCaseStudy: {
    title: "Official Problem Statement & Technical Case Study",
    subtitle: "Smart India Hackathon 2026 • Ministry of Defence / Naval Research Board",
    sihId: "SIH2026-PS-XXXX",
    organization: "Ministry of Defence / Naval Research Board",
    category: "Hardware Edition",
    theme: "Robotics & Subsea Defence Systems",
    executiveSummary: [
      "In modern autonomous subsea missions, underwater acoustic surveillance and bathymetry represent the sole long-range sensing mechanism available to unmanned underwater vehicles (UUVs / AUVs) due to the complete opacity of seawater to radio frequency (RF) and optical radiation.",
      "However, oceanic water columns are intrinsically heterogeneous: thermoclines, salinity haloclines, suspended sediment plumes, and depth pressure gradients dynamically distort acoustic impedance, sound velocity profiles (c ≈ 1440 to 1540 m/s), and frequency-dependent absorption losses α(f) ∝ f².",
      "Existing commercial off-the-shelf (COTS) sonar transmitters emit static, predefined narrowband or single-frequency pings. When an AUV passes through high turbidity or shallow water reverberation, these static pulses suffer severe signal attenuation or excessive reverberation clutter, blind to physical medium shifts.",
      "Team Shazam's Adaptive Sonar Transmitter resolves this physical bottleneck by sensing in-situ water column telemetry in real-time, executing onboard acoustic adaptation algorithms on an STM32G474RE microcontroller, and generating dynamic Linear Frequency Modulated (LFM) chirps with closed-loop echo verification.",
    ],
    technicalSpecifications: [
      {
        category: "Processing Core",
        details: "ARM Cortex-M4 STM32G474RE (170 MHz) with hardware CORDIC mathematical accelerator & FPU.",
      },
      {
        category: "Acoustic Modulation",
        details: "Mathematical LFM Chirp Direct Waveform Synthesis (80 kHz to 500 kHz wideband sweep).",
      },
      {
        category: "Environmental Telemetry",
        details: "In-situ acquisition of hydrostatic depth (barometric pressure), temperature, salinity/conductivity, and optical turbidity at 50 Hz.",
      },
      {
        category: "Amplification & Transducer",
        details: "High-efficiency Class-D acoustic power amplifier driving broadband piezoceramic composite transducer.",
      },
      {
        category: "Power Budget",
        details: "< 1.8W idle standby power with dynamic transmission duty cycling for subsea battery preservation.",
      },
      {
        category: "Physical Packaging",
        details: "Compact marine PCB layout engineered for standard 3-inch/4-inch cylindrical AUV pressure vessels.",
      },
    ],
    deliverables: [
      "Embedded firmware for real-time sound velocity and absorption calculation using empirical acoustic models.",
      "Hardware CORDIC trigonometric synthesis yielding low total harmonic distortion (THD) acoustic chirps.",
      "Closed-loop feedback integration assessing return echo SNR for dynamic pulse width and gain compensation.",
      "Complete benchtop laboratory validation with hydrophone acoustic tank tests.",
    ],
  },
};
