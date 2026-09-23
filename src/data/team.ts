/**
 * Team Members & Mentors Configuration
 * 
 * Centralized data structure for Team Shazam.
 * Managed from one place: name, role, and image.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  initials: string;
  roleCategory?: "lead" | "dsp" | "embedded" | "hardware" | "sensor" | "testing";
  code?: string;
  specialization?: string;
  avatarPlaceholder?: string;
  contribution?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Mentor {
  id?: string;
  name: string;
  designation?: string;
  department?: string;
  organization?: string;
  expertise?: string;
  avatarPlaceholder?: string;
  initials?: string;
  linkedinUrl?: string;
}

/**
 * 6 Team Shazam Core Members
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-01",
    name: "Akshayagomathy S",
    role: "Team Lead & System Design",
    image: "/images/team/member-1.jpg",
    initials: "AS",
    roleCategory: "lead",
    code: "MEMBER // 01",
    specialization: "Team Lead & System Design",
    avatarPlaceholder: "/images/team/member-1.jpg",
  },
  {
    id: "member-02",
    name: "Bakirathan S",
    role: "Signal Processing & DSP",
    image: "/images/team/member-2.jpg",
    initials: "BS",
    roleCategory: "dsp",
    code: "MEMBER // 02",
    specialization: "Signal Processing & DSP",
    avatarPlaceholder: "/images/team/member-2.jpg",
  },
  {
    id: "member-03",
    name: "Mohammed Ameen H",
    role: "Embedded Systems & STM32",
    image: "/images/team/member-3.jpg",
    initials: "MA",
    roleCategory: "embedded",
    code: "MEMBER // 03",
    specialization: "Embedded Systems & STM32",
    avatarPlaceholder: "/images/team/member-3.jpg",
  },
  {
    id: "member-04",
    name: "Aakash K",
    role: "Hardware & Circuit Design",
    image: "/images/team/member-4.jpg",
    initials: "AK",
    roleCategory: "hardware",
    code: "MEMBER // 04",
    specialization: "Hardware & Circuit Design",
    avatarPlaceholder: "/images/team/member-4.jpg",
  },
  {
    id: "member-05",
    name: "Shree Varshan P",
    role: "Sensor & Environmental Analysis",
    image: "/images/team/member-5.jpg",
    initials: "SV",
    roleCategory: "sensor",
    code: "MEMBER // 05",
    specialization: "Sensor & Environmental Analysis",
    avatarPlaceholder: "/images/team/member-5.jpg",
  },
  {
    id: "member-06",
    name: "Rishikesh Potty R",
    role: "Testing & System Integration",
    image: "/images/team/member-6.jpg",
    initials: "RP",
    roleCategory: "testing",
    code: "MEMBER // 06",
    specialization: "Testing & System Integration",
    avatarPlaceholder: "/images/team/member-6.jpg",
  },
];

/**
 * Mentors
 */
export const MENTORS: Mentor[] = [
  {
    id: "mentor-01",
    name: "Muthusamy K",
  },
  {
    id: "mentor-02",
    name: "Gajendran Parthasarathi Er",
  },
  {
    id: "mentor-03",
    name: "Mukuntharaj C",
  },
];
