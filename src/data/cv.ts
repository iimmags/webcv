export type SkillCategory =
  | "Languages & Markup"
  | "Frameworks & UI"
  | "Performance & SEO"
  | "Testing"
  | "Tooling & CI/CD"
  | "Cloud & APIs";

export const profile = {
  name: "Inês Magalhães",
  title: "Frontend Engineer",
  location: "Porto, Portugal",
  email: "inn.mendes.11@gmail.com",
  phone: "+351 917 843 194",
  linkedin: "https://www.linkedin.com/in/inesmmagalhaes/",
  github: "https://github.com/iimmags",
  cv: "/webcv/cv.pdf",
  summary:
    "Frontend Engineer with 8+ years of experience building scalable web applications in multi-market environments. Specialized in React, TypeScript, SEO, performance optimization, and platform engineering to improve user engagement and delivery efficiency.",
};

export const skills: { category: SkillCategory; items: string[] }[] = [
  {
    category: "Languages & Markup",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & UI",
    items: [
      "React",
      "Angular",
      "Styled-components",
      "Tailwind CSS",
      "Design Systems",
      "State Management",
      "Scalable Frontend Architecture",
    ],
  },
  {
    category: "Performance & SEO",
    items: [
      "Core Web Vitals (LCP, CLS, TBT, FCP)",
      "Technical SEO",
      "Lighthouse",
      "Sitespeed",
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Cypress"],
  },
  {
    category: "Tooling & CI/CD",
    items: ["Git", "GitHub", "GitLab", "Jenkins", "GitLab CI"],
  },
  {
    category: "Cloud & APIs",
    items: ["AWS", "REST APIs"],
  },
];

export type Role = {
  team: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  blurb?: string;
  roles?: Role[];
  extras?: string[];
};

export const experience: Experience[] = [
  {
    company: "OLX Group",
    title: "Frontend Engineer",
    period: "Jun 2021 – Present",
    roles: [
      {
        team: "Discovery Experience",
        period: "Nov 2025 – Present",
        bullets: [
          "Build and enhance multi-market vehicle discovery experiences, with focus on search and filtering used by millions of users.",
          "Implement advanced filter state management and responsive interfaces to improve findability, engagement, and SEO outcomes.",
        ],
      },
      {
        team: "Core Platform",
        period: "Feb 2025 – Oct 2025",
        bullets: [
          "Improved frontend architecture, performance, and reliability to support scale across multiple teams and markets.",
          "Enhanced developer experience through resilient platform capabilities and modern CI/CD workflows.",
        ],
      },
      {
        team: "Buyer Experience",
        period: "Nov 2023 – Feb 2025",
        bullets: [
          "Delivered buyer-facing features that improved engagement, UX, and transaction safety across key journeys.",
          "Partnered with product and design to ship high-impact iterations that supported user and business growth.",
        ],
      },
      {
        team: "SEO, Performance & Account Platform",
        period: "Jun 2021 – Nov 2023",
        bullets: [
          "Improved technical SEO and Core Web Vitals (FCP, LCP, CLS, TBT) using Lighthouse and Sitespeed.",
          "Developed CIAM-related account capabilities to support secure, seamless user experiences across OLX platforms.",
        ],
      },
    ],
    extras: [
      "Led the OLX Women Workshop (2023), mentoring university trainees in frontend development.",
      "Managed the Frontend Guild, organizing monthly engineering knowledge-sharing sessions.",
    ],
  },
  {
    company: "Metyis",
    title: "Frontend Engineer",
    period: "2021",
    blurb:
      "Contributed to e-commerce and IoT web applications in cross-functional delivery teams.",
  },
  {
    company: "Talkdesk",
    title: "Frontend Engineer",
    period: "2019 – 2021",
    blurb:
      "Built features for workforce engagement management and speech analytics products.",
  },
  {
    company: "Critical Software",
    title: "Frontend Engineer",
    period: "2018 – 2019",
    blurb:
      "Developed frontend features for an internal platform supporting company process management.",
  },
  {
    company: "Enso Origins",
    title: "Software Engineer",
    period: "2017",
    blurb:
      "Contributed to web applications for school energy-saving initiatives and internal financial control.",
  },
];

export const education = [
  {
    school: "Instituto Superior de Engenharia de Coimbra",
    degree: "Bachelor's Degree in Computer Engineering (Information Systems)",
    period: "2014 – 2017",
  },
];

export const certifications = [
  { name: "Product Manager", issuer: "Udacity", year: "2023" },
  { name: "React Intermediate", issuer: "Code Academy", year: "2022" },
  { name: "JavaScript Intermediate", issuer: "Code Academy", year: "2021" },
  { name: "Training in Data Basics", issuer: "Critical Software", year: "2019" },
  { name: "Training in Java I", issuer: "Critical Software", year: "2019" },
];
