export interface UserProfile {
  name: string
  displayName: string
  role: string
  headline: string
  institution: string
  academicYear: string
  degree: string
  location: string
  timeZone: string
  email: string
  emailB64: string // Base64 encoded for spam bot protection in DOM
  bio: string
  about: string[]
  flipSentences: string[]
  avatar: string
  interests: {
    title: string
    description: string
    icon: string
  }[]
}

export interface EducationItem {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  academicStatus: string
  period?: {
    start?: string
    end?: string
  }
  status: "In Progress" | "Completed"
  description: string
  skills: string[]
  coursework?: string[]
}

export interface ExperienceItem {
  id: string
  title: string
  track: string
  organization?: string
  location?: string
  period: string
  description: string
  skills: string[]
  link?: string
}

export interface TechStackItem {
  key: string
  title: string
  category: "Languages" | "Frontend & Web" | "Backend & Databases" | "Embedded, AI & Systems" | "Tools & Workflow"
  href?: string
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  period: {
    start: string
    end?: string
  }
  isOngoing?: boolean
  link: string
  skills: string[]
  highlights?: string[]
}

export interface SocialLink {
  name: "github" | "linkedin" | "email" | "instagram"
  title: string
  href: string
  handle: string
}

export const USER: UserProfile = {
  name: "Abhiram A S",
  displayName: "ABHIRAM A S",
  headline: "Computer Science Student | Frontend Developer | Aspiring Full-Stack & AI Engineer",
  role: "Computer Science Student & Frontend Developer",
  institution: "ACE College of Engineering, Kerala",
  academicYear: "Third-Year Student",
  degree: "B.Tech Computer Science Engineering",
  location: "Kerala, India",
  timeZone: "Asia/Kolkata",
  email: "abhiakshay2005@gmail.com",
  emailB64: "YWJoaWFrc2hheTIwMDVAZ21haWwuY29t",
  bio: "Third-year Computer Science Engineering student at ACE College of Engineering, Kerala. Focused on frontend development, software engineering, AI, robotics, and space technology.",
  about: [
    "I am a third-year B.Tech Computer Science Engineering student at ACE College of Engineering, Kerala.",
    "My technical curiosity centers on frontend development, software engineering fundamentals, artificial intelligence, robotics, and space technology.",
    "I enjoy building clean, resilient user interfaces, exploring embedded vision pipelines, and applying core computer science concepts to practical, real-world problems.",
  ],
  flipSentences: [
    "Third-year CSE student at ACE College of Engineering.",
    "Frontend Developer building clean, accessible interfaces.",
    "Exploring Artificial Intelligence, Computer Vision, and OCR.",
    "Interested in Robotics, Embedded Systems, and Space Technology.",
  ],
  avatar: "/images/avatar.webp",
  interests: [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible web interfaces using React, Next.js, TypeScript, and modern component design systems.",
      icon: "layout",
    },
    {
      title: "Software Engineering",
      description:
        "Strengthening algorithmic problem solving, clean system design, data structures, and maintainable software architecture.",
      icon: "code",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Investigating computer vision pipelines, optical character recognition (OCR), and machine learning applications.",
      icon: "brain",
    },
    {
      title: "Robotics & Embedded Systems",
      description:
        "Hands-on prototyping with ESP32-CAM, Arduino microcontrollers, sensor integration, and workshop hardware firmware.",
      icon: "cpu",
    },
    {
      title: "Space Technology",
      description:
        "Fascinated by aerospace software engineering, orbital mechanics fundamentals, telemetry systems, and satellite communication.",
      icon: "rocket",
    },
  ],
}

export const EDUCATION: EducationItem[] = [
  {
    id: "btech-cse-ace",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "ACE College of Engineering",
    location: "Kerala, India",
    academicStatus: "Third-Year Student",
    status: "In Progress",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering. Active coursework covers data structures, algorithms, database management systems, operating systems, and computer networks.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "frontend-self-learning",
    title: "Frontend & Web Engineering",
    track: "Self-Directed Student Development",
    period: "Student Projects & Self-Learning",
    description:
      "Independently designed and built interactive web applications, browser extensions, and utility tools. Focused on responsive layout architecture, DOM manipulation, client-side state handling, and component-driven UI using React, Next.js, and TypeScript.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chrome Extension APIs",
    ],
  },
  {
    id: "embedded-vision-research",
    title: "Embedded Computer Vision & OCR",
    track: "Project Development",
    period: "Ongoing Student Project",
    description:
      "Developing an automated pharmaceutical expiration date recognition pipeline using an ESP32-CAM module, Arduino microcontroller, OpenCV image processing, and Tesseract OCR to parse printed text under controlled illumination.",
    skills: [
      "ESP32-CAM",
      "Arduino",
      "OpenCV",
      "Python",
      "Tesseract OCR",
      "Embedded Systems",
    ],
  },
  {
    id: "drone-robotics-workshop",
    title: "Robotics Firmware & Sensor Integration",
    track: "ACE College of Engineering Workshop",
    location: "Kerala, India",
    period: "Workshop Prototyping",
    description:
      "Participated in hands-on drone and robotics engineering sessions at ACE College of Engineering. Authored and maintained microcontroller firmware for sensor interfacing, motor telemetry, and hardware debugging.",
    skills: [
      "Robotics",
      "Arduino",
      "Embedded C",
      "Sensor Interfacing",
      "Hardware Debugging",
    ],
    link: "https://github.com/abhiramas08/ace-college-drone-robotics-workshop",
  },
  {
    id: "academic-cs-foundations",
    title: "Computer Science Foundations & Lab Work",
    track: "Undergraduate Curriculum",
    location: "ACE College of Engineering",
    period: "Third-Year Academic Coursework",
    description:
      "Rigorous coursework and laboratory problem-solving in Data Structures, Object-Oriented Analysis, Relational Databases (SQL), Computer Networks, and Unix/Linux system commands.",
    skills: [
      "Data Structures",
      "Algorithms",
      "C / C++",
      "Java",
      "SQL",
      "Linux",
    ],
  },
]

export const TECH_STACK: TechStackItem[] = [
  // Languages
  { key: "c", title: "C", category: "Languages" },
  { key: "cpp", title: "C++", category: "Languages" },
  { key: "python", title: "Python", category: "Languages" },
  { key: "java", title: "Java", category: "Languages" },
  { key: "javascript", title: "JavaScript", category: "Languages" },
  { key: "typescript", title: "TypeScript", category: "Languages" },
  { key: "sql", title: "SQL", category: "Languages" },

  // Frontend & Web
  { key: "react", title: "React", category: "Frontend & Web" },
  { key: "nextjs", title: "Next.js", category: "Frontend & Web" },
  { key: "tailwind", title: "Tailwind CSS", category: "Frontend & Web" },
  { key: "html5", title: "HTML5", category: "Frontend & Web" },
  { key: "css3", title: "CSS3", category: "Frontend & Web" },

  // Backend & Databases
  { key: "nodejs", title: "Node.js", category: "Backend & Databases" },
  { key: "express", title: "Express.js", category: "Backend & Databases" },
  { key: "postgresql", title: "PostgreSQL", category: "Backend & Databases" },
  { key: "mongodb", title: "MongoDB", category: "Backend & Databases" },
  { key: "rest-api", title: "REST APIs", category: "Backend & Databases" },

  // Embedded, AI & Systems
  { key: "esp32", title: "ESP32-CAM", category: "Embedded, AI & Systems" },
  { key: "arduino", title: "Arduino", category: "Embedded, AI & Systems" },
  { key: "opencv", title: "OpenCV", category: "Embedded, AI & Systems" },
  { key: "ocr", title: "Tesseract / OCR", category: "Embedded, AI & Systems" },

  // Tools & Workflow
  { key: "git", title: "Git", category: "Tools & Workflow" },
  { key: "github", title: "GitHub", category: "Tools & Workflow" },
  { key: "vscode", title: "VS Code", category: "Tools & Workflow" },
  { key: "linux", title: "Linux / Shell", category: "Tools & Workflow" },
  { key: "postman", title: "Postman", category: "Tools & Workflow" },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: "medicine-expiry-detection",
    title: "Medicine Expiry Detection System",
    description:
      "Embedded computer vision and character recognition pipeline built with ESP32-CAM, Arduino, OpenCV, and OCR. Captures packaging text under controlled lighting to detect, parse, and verify pharmaceutical expiration dates automatically.",
    period: {
      start: "2025",
    },
    isOngoing: true,
    link: "https://github.com/abhiramas08",
    skills: ["ESP32-CAM", "Arduino", "OpenCV", "Python", "OCR", "Embedded Systems"],
  },
  {
    id: "leads-tab-saver",
    title: "Leads Tab Saver",
    description:
      "A focused productivity Google Chrome extension that lets users instantly capture, label, and persist active browser tabs and client lead links into local storage with one-click restoration.",
    period: {
      start: "2024",
      end: "2024",
    },
    link: "https://github.com/abhiramas08",
    skills: ["JavaScript", "Chrome Extensions API", "LocalStorage", "DOM Manipulation"],
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    description:
      "Interactive computational converter utility supporting real-time unit transformations across length, volume, mass, and temperature systems with precision floating-point handling.",
    period: {
      start: "2024",
      end: "2024",
    },
    link: "https://github.com/abhiramas08",
    skills: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "Cryptographically randomized credential generator featuring custom character-set selection, dynamic password length sliders, entropy estimation, and clipboard copy integration.",
    period: {
      start: "2024",
      end: "2024",
    },
    link: "https://github.com/abhiramas08",
    skills: ["JavaScript", "Web Crypto API", "Clipboard API", "CSS"],
  },
  {
    id: "blackjack-game",
    title: "Blackjack Game",
    description:
      "Interactive browser-based recreation of the classic Blackjack card game with dealer AI logic, state-driven chip tracking, card drawing probability, and dynamic score calculation.",
    period: {
      start: "2024",
      end: "2024",
    },
    link: "https://github.com/abhiramas08",
    skills: ["JavaScript", "Game State Logic", "DOM Event Handling", "CSS"],
  },
  {
    id: "counter-app",
    title: "Counter App",
    description:
      "Lightweight passenger and event increment tracker designed for quick counting, historical count logging, and memory reset functions.",
    period: {
      start: "2023",
      end: "2023",
    },
    link: "https://github.com/abhiramas08",
    skills: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "drone-robotics-workshop",
    title: "Drone & Robotics Workshop Repository",
    description:
      "Firmware and sensor integration codebase developed and maintained during the Drone and Robotics Workshop held at ACE College of Engineering.",
    period: {
      start: "2025",
      end: "2025",
    },
    link: "https://github.com/abhiramas08/ace-college-drone-robotics-workshop",
    skills: ["Robotics", "Arduino", "Embedded C", "Hardware Prototyping"],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    title: "GitHub",
    href: "https://github.com/abhiramas08",
    handle: "@abhiramas08",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abhiram-a-s-24a52232b/",
    handle: "abhiram-a-s",
  },
  {
    name: "instagram",
    title: "Instagram",
    href: "https://www.instagram.com/abhrm.io/",
    handle: "@abhrm.io",
  },
  {
    name: "email",
    title: "Email",
    href: "mailto:abhiakshay2005@gmail.com",
    handle: "abhiakshay2005@gmail.com",
  },
]
