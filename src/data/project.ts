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
  shortDescription: string;
  tagline: string;
  statusLine: string;
  heroTags: string[];
  heroVideo: {
    videoSrc: string; // local path like "/videos/hero-demo.mp4" or remote URL
    caption: string;
    badge: string;
  };
  demoVideo: {
    title: string;
    subtitle: string;
    videoUrl: string;
    isPlaceholder: boolean;
    posterImage: string;
    duration: string;
  };
  sihDetails: {
    problemStatementId: string;
    organization: string;
    category: string;
    theme: string;
    institution: string;
    department: string;
  };
  resources: {
    label: string;
    description?: string;
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
  };
}

export const PROJECT_DATA: ProjectInfo = {
  teamName: "TEAM SHAZAM",
  eventName: "SMART INDIA HACKATHON 2026",
  eventYear: "2026",
  projectTitle: "Adaptive Sonar Transmitter for AUVs",
  projectSubtitle: "An intelligent sonar transmission system that adapts its waveform according to changing underwater environmental conditions.",
  shortDescription: "An intelligent sonar transmission system that adapts its waveform according to changing underwater environmental conditions.",
  tagline: "Intelligent Underwater Acoustic Waveform Adaptation",
  statusLine: "TEAM SHAZAM • SIH 2026 • ADAPTIVE UNDERWATER ACOUSTICS",

  heroTags: [
    "Real-Time Adaptation",
    "Low-Power Embedded System",
    "Underwater Acoustics",
  ],

  demoVideo: {
    title: "See Team Shazam in Action",
    subtitle: "From environmental sensing to adaptive acoustic transmission.",
    videoUrl: "https://www.youtube.com/embed/placeholder-video-id",
    isPlaceholder: true,
    posterImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    duration: "03:45",
  },

  heroVideo: {
    // Drop your video in public/videos/hero-demo.mp4
    videoSrc: "/videos/hero-demo.mp4",
    caption: "Project Demonstration • Adaptive Acoustic Waveform Modulation",
    badge: "Concept & Simulation Reel",
  },

  sihDetails: {
    problemStatementId: "SIH2026-PS-XXXX",
    organization: "Ministry of Defence / Naval Research Board",
    category: "Hardware Edition",
    theme: "Robotics & Subsea Defence Systems",
    institution: "[Institution / University Name Placeholder]",
    department: "[Department of Electronics & Marine Engineering Placeholder]",
  },

  resources: [
    {
      label: "Documentation",
      url: "#solution",
      icon: "FileText",
      isAvailable: true,
    },
    {
      label: "GitHub",
      url: "https://github.com/itzaakash15-creator/SHAZAM",
      icon: "Github",
      isAvailable: true,
    },
    {
      label: "Demo Video",
      url: "#hero",
      icon: "PlayCircle",
      isAvailable: true,
    },
  ],

  contact: {
    email: "contact.teamshazam@sih2026.org",
    college: "[College / University Name Placeholder]",
    location: "India • Autonomous Maritime Robotics Lab",
    github: "https://github.com/itzaakash15-creator/SHAZAM",
    linkedin: "https://linkedin.com/company/team-shazam-sih2026",
  },
};
