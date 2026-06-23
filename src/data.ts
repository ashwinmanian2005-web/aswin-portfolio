import { PersonalDetails, EducationItem, SkillItem, ProjectItem, CertificateItem, InterestItem } from './types';

export const personalData: PersonalDetails = {
  name: "Ashwin",
  dob: "24 August 2005",
  location: "Tirunelveli, Tamil Nadu, India",
  languages: ["Tamil", "English"],
  college: "Narayanaguru College of Engineering",
  degree: "B.E. Computer Science Engineering",
  year: "4th Year (Final Year)",
  dreamRole: "Software Developer",
  email: "ashwinmanian2005@gmail.com",
  phone: "6383261631"
};

export const educationData: EducationItem[] = [
  {
    stage: "Degree: B.E. Computer Science Engineering",
    institution: "Narayanaguru College of Engineering",
    status: "4th Year - Current (Completing 2026/2027)",
    yearRange: "2022 - Present",
    score: "Active Engineering Track"
  },
  {
    stage: "HSC Academic (Grade XII)",
    institution: "Sankar Higher Secondary School",
    status: "Completed",
    score: "Marks: 427 / 600",
    yearRange: "HSC Division"
  },
  {
    stage: "SSLC Academy (Grade X)",
    institution: "Sankar Higher Secondary School",
    status: "Completed",
    score: "Pass Status",
    yearRange: "SSLC Division"
  }
];

export const skillsData: SkillItem[] = [
  // Technical Skills
  {
    name: "Python Programming",
    level: 85,
    category: "Technical",
    description: "Algorithmic thinking, data handling, libraries, and logic implementation."
  },
  {
    name: "Programming Fundamentals",
    level: 80,
    category: "Technical",
    description: "OOPs concepts, data structures, and standard software design."
  },
  {
    name: "Problem Solving",
    level: 85,
    category: "Technical",
    description: "Analyzing logic requirements, resolving errors, and performance optimization."
  },
  {
    name: "Continuous Learning",
    level: 95,
    category: "Technical",
    description: "Quickly adapting to new developer frameworks, APIs, and stack environments."
  },
  // Soft Skills
  {
    name: "Communication",
    level: 80,
    category: "Soft",
    description: "Expressing engineering ideas, documentations, and team presentations clearly."
  },
  {
    name: "Critical Thinking",
    level: 85,
    category: "Soft",
    description: "Diagnosing architectural patterns and choosing clean implementation paths."
  },
  {
    name: "Quick Learning",
    level: 95,
    category: "Soft",
    description: "Absorbing technology concepts and transforming them into functional tools immediately."
  },
  // Strengths
  {
    name: "Self Motivated",
    level: 90,
    category: "Strength",
    description: "Proactively taking on code challenges and studying deep tech stacks."
  },
  {
    name: "Hardworking",
    level: 95,
    category: "Strength",
    description: "Persistent debugger and committed builder of application state flows."
  },
  {
    name: "Adaptability",
    level: 90,
    category: "Strength",
    description: "Navigating team projects, shifting specifications, and platform constraints fluidly."
  }
];

export const certificatesData: CertificateItem[] = [
  {
    title: "Python Certification",
    issuer: "Authorized Learning Academy / Academic Self-Study Program",
    date: "Completed In-Course Study",
    credentialUrl: "#"
  }
];

export const projectsData: ProjectItem[] = [
  {
    title: "Python Algorithm Suite",
    description: "A showcase of fundamental design patterns, searching, sorting, and helper modules written in optimized Python code.",
    status: "Academic / Self-Learning Track",
    tags: ["Python", "DSA", "Logic Basics"]
  },
  {
    title: "Continuous Learning Dev Env",
    description: "Ongoing modular projects exploring state systems, responsive interface layout configurations, and basic data visualizations.",
    status: "Active Practice Lab",
    tags: ["React", "CSS", "Frontend Engineering"]
  }
];

export const interestsData: InterestItem[] = [
  {
    name: "Gaming",
    iconName: "Gamepad2",
    description: "Strategizing and analyzing game loop architectures and mechanics."
  },
  {
    name: "Coin Collection",
    iconName: "Coins",
    description: "Preserving global history, cultural relics, and valuing physical currencies."
  },
  {
    name: "Learning New Technologies",
    iconName: "Cpu",
    description: "Studying state machinery, AI tools, developer operations, and cloud paradigms."
  }
];
