/**
 * Team Members & Mentors Configuration
 * Modify this file to update member names, photos, roles, contributions, and social links.
 */

export interface TeamMember {
  id: string;
  code: string;
  name: string;
  role: string;
  specialization: string;
  contribution: string;
  avatarPlaceholder: string;
  linkedinUrl: string;
  githubUrl: string;
  email?: string;
  initials: string;
}

export interface Mentor {
  id: string;
  name: string;
  designation: string;
  department: string;
  organization: string;
  expertise: string;
  avatarPlaceholder: string;
  initials: string;
  linkedinUrl?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-01",
    code: "MEMBER // 01",
    name: "TEAM MEMBER 01",
    role: "Team Lead & System Architect",
    specialization: "Autonomous Marine Robotics & System Integration",
    contribution: "End-to-end system architecture design, multi-subsystem synchronization, and AUV mission envelope definition.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    initials: "TM1",
  },
  {
    id: "member-02",
    code: "MEMBER // 02",
    name: "TEAM MEMBER 02",
    role: "Embedded Systems & Firmware",
    specialization: "STM32 Microcontrollers & Real-Time Firmware (FreeRTOS)",
    contribution: "STM32G474RE firmware development, DMA double-buffering for high-rate DAC chirp generation, and hardware timers.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    initials: "TM2",
  },
  {
    id: "member-03",
    code: "MEMBER // 03",
    name: "TEAM MEMBER 03",
    role: "Digital Signal Processing (DSP)",
    specialization: "Acoustic Waveform Synthesis & Matched Filtering",
    contribution: "Linear Frequency Modulated (LFM) chirp mathematical models, CORDIC hardware acceleration, and environmental adaptation algorithms.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    initials: "TM3",
  },
  {
    id: "member-04",
    code: "MEMBER // 04",
    name: "TEAM MEMBER 04",
    role: "Hardware & Transducer Electronics",
    specialization: "Analog Front-End & Acoustic Power Amplifiers",
    contribution: "Class-D acoustic power amplifier design, impedance matching networks for underwater piezoceramic transducers, and power regulation.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    initials: "TM4",
  },
  {
    id: "member-05",
    code: "MEMBER // 05",
    name: "TEAM MEMBER 05",
    role: "Research & Acoustic Testing",
    specialization: "Underwater Hydrodynamics & Acoustic Propagation Modeling",
    contribution: "Turbidity and salinity chamber testing, reverberation profile characterization, and oscilloscope benchmark validation.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    initials: "TM5",
  },
  {
    id: "member-06",
    code: "MEMBER // 06",
    name: "TEAM MEMBER 06",
    role: "Documentation & Presentation",
    specialization: "Technical Communication & UI/UX Systems",
    contribution: "System schematics documentation, SIH 2026 technical deliverables, benchmark data visualizations, and project demonstration showcase.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    initials: "TM6",
  },
];

export const MENTORS: Mentor[] = [
  {
    id: "mentor-01",
    name: "MENTOR 01",
    designation: "Professor & Head of Marine Robotics Lab (Placeholder)",
    department: "Department of Electronics / Ocean Engineering (Placeholder)",
    organization: "[Institution / University Name Placeholder]",
    expertise: "Underwater Acoustics, Signal Processing & Sonar Array Systems",
    avatarPlaceholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    initials: "M1",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "mentor-02",
    name: "MENTOR 02",
    designation: "Senior Scientist / Industry Advisor (Placeholder)",
    department: "Subsea Technology & Autonomous Systems (Placeholder)",
    organization: "[Defence / Maritime Research Organization Placeholder]",
    expertise: "Embedded DSP Architectures, Transducer Driver Design & AUV Navigation",
    avatarPlaceholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    initials: "M2",
    linkedinUrl: "https://linkedin.com",
  },
];
