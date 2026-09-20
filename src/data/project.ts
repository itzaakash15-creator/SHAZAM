/**
 * Project Configuration & Editable Metadata
 * Edit these fields to customize project links, hackathon details, and institutional metadata.
 */

export interface ProjectInfo {
  teamName: string;
  eventName: string;
  eventYear: string;
  projectTitle: string;
  projectSubtitle: string;
  tagline: string;
  statusLine: string;
  sihDetails: {
    problemStatementId: string;
    organization: string;
    category: string;
    theme: string;
    institution: string;
    department: string;
  };
  demoVideo: {
    title: string;
    subtitle: string;
    videoUrl: string; // Embed URL (e.g., YouTube embed) or raw MP4 URL
    isPlaceholder: boolean;
    posterImage: string;
    duration: string;
  };
  resources: {
    label: string;
    description: string;
    url: string;
    icon: string;
    isAvailable: boolean;
  }[];
  contact: {
    email: string;
    college: string;
    location: string;
    github: string;
    linkedin: string;
    callsign: string;
  };
}

export const PROJECT_DATA: ProjectInfo = {
  teamName: "TEAM SHAZAM",
  eventName: "SMART INDIA HACKATHON",
  eventYear: "2026",
  projectTitle: "Adaptive Sonar Transmitter for Autonomous Underwater Vehicles (AUVs)",
  projectSubtitle: "An intelligent, low-power sonar transmission system that dynamically adapts its acoustic waveform according to changing underwater environmental conditions.",
  tagline: "Intelligent Underwater Acoustic Waveform Adaptation",
  statusLine: "TEAM SHAZAM • SIH 2026 • ADAPTIVE UNDERWATER ACOUSTICS",

  sihDetails: {
    problemStatementId: "SIH2026-PS-XXXX (Placeholder)",
    organization: "Ministry of Defence / Naval Research & Ocean Tech (Placeholder)",
    category: "Hardware Edition",
    theme: "Robotics & Subsea Defence Systems",
    institution: "[College / University Name Placeholder]",
    department: "[Department of Electronics & Marine Engineering Placeholder]",
  },

  demoVideo: {
    title: "See Team Shazam in Action",
    subtitle: "From environmental sensing to adaptive acoustic transmission.",
    // You can replace this with your YouTube embed URL or MP4 link anytime:
    videoUrl: "https://www.youtube.com/embed/placeholder-video-id",
    isPlaceholder: true,
    posterImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    duration: "03:45",
  },

  resources: [
    {
      label: "System Architecture",
      description: "Complete hardware, firmware, and DAC-to-transducer acoustic pipeline schematic.",
      url: "#system",
      icon: "Cpu",
      isAvailable: true,
    },
    {
      label: "Project Technical Report",
      description: "Detailed 28-page research paper covering LFM chirp derivation and hydrodynamic tank test results.",
      url: "#",
      icon: "FileText",
      isAvailable: true,
    },
    {
      label: "SIH 2026 Presentation (PPT)",
      description: "Official evaluation deck with system benchmarks, power analysis, and field trial data.",
      url: "#",
      icon: "Presentation",
      isAvailable: true,
    },
    {
      label: "Demonstration Video",
      description: "Oscilloscope capture showing dynamic chirp modulation responding to real-time turbidity spikes.",
      url: "#demo",
      icon: "PlayCircle",
      isAvailable: true,
    },
    {
      label: "GitHub Firmware Repository",
      description: "STM32CubeIDE project repository with CORDIC chirp generation and DMA transfer routines.",
      url: "https://github.com/team-shazam-sih2026",
      icon: "Github",
      isAvailable: true,
    },
  ],

  contact: {
    email: "contact.teamshazam@sih2026.org",
    college: "[College / University Name Placeholder]",
    location: "India • Autonomous Maritime Robotics Lab",
    github: "https://github.com/team-shazam-sih2026",
    linkedin: "https://linkedin.com/company/team-shazam-sih2026",
    callsign: "SHAZAM-AUV-ALPHA-01",
  },
};
