export type SocialLink = {
  readonly label: string;
  readonly href: string;
  readonly username: string;
};

export type ContactLink = {
  readonly label: string;
  readonly href: string;
  readonly value: string;
};

export type SkillGroup = {
  readonly title: string;
  readonly items: readonly string[];
};

export type Profile = {
  readonly name: string;
  readonly role: string;
  readonly headline: string;
  readonly avatar: string;
  readonly location: string;
  readonly timezone: string;
  readonly experienceLabel: string;
  readonly availability: string;
  readonly summary: string;
  readonly focusAreas: readonly string[];
  readonly primaryStack: readonly string[];
  readonly skillGroups: readonly SkillGroup[];
  readonly contact: {
    readonly email: ContactLink;
    readonly resume?: ContactLink;
  };
  readonly socials: readonly SocialLink[];
};

export const profile = {
  name: "Candra Saka Rahardian",
  role: "Backend Engineer",
  headline:
    "Backend Engineer building scalable APIs, event-driven systems, reporting pipelines, and production data workflows.",
  avatar: "/default_pp.jpeg",
  location: "Indonesia",
  timezone: "Asia/Jakarta",
  experienceLabel: "Nearly 5 years",
  availability:
    "Open to Backend Engineer and Full Stack Engineer opportunities.",
  summary:
    "I design and build backend systems using Node.js, PostgreSQL, MongoDB, RabbitMQ, Redis, REST APIs, and S3-compatible object storage. My work focuses on reliability, scalability, high-volume processing, and clear architecture decisions.",
  focusAreas: [
    "Scalable backend services",
    "REST API design",
    "Event-driven architecture",
    "Queue-based processing",
    "High-volume data processing",
    "Reporting pipelines",
    "Media storage systems",
    "Production backend systems",
  ],
  primaryStack: [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "RabbitMQ",
    "Redis",
    "REST APIs",
    "S3-compatible Object Storage",
  ],
  skillGroups: [
    {
      title: "API & Services",
      items: [
        "REST API design",
        "Service boundaries",
        "Validation",
        "Pagination",
        "Error handling",
      ],
    },
    {
      title: "Data Systems",
      items: [
        "PostgreSQL schema design",
        "MongoDB document modeling",
        "Indexing",
        "Reporting queries",
        "Redis caching",
      ],
    },
    {
      title: "Async Processing",
      items: [
        "RabbitMQ workflows",
        "Background workers",
        "Retry handling",
        "Dead-letter flows",
        "Job status tracking",
      ],
    },
    {
      title: "Storage",
      items: [
        "S3-compatible storage",
        "Upload workflows",
        "Metadata persistence",
        "Media lifecycle design",
      ],
    },
  ],
  contact: {
    email: {
      label: "Email",
      href: "mailto:candrasakar@gmail.com",
      value: "candrasakar@gmail.com",
    },
    resume: {
      label: "Resume",
      href: "https://drive.google.com/file/d/1IDm3Q_RI2laLT8gjfKgLgRlSsfqF6Tfi/view?usp=sharing",
      value: "Download resume",
    },
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/telkomdev-candrasaka",
      username: "telkomdev-candrasaka",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/candrasakar/",
      username: "candrasakar",
    },
  ],
} satisfies Profile;
