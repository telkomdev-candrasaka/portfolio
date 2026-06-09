export type ExperienceType = "professional" | "learning" | "project";

export type ExperienceHighlight = {
  readonly label: string;
  readonly description: string;
};

export type ExperienceItem = {
  readonly id: string;
  readonly type: ExperienceType;
  readonly role: string;
  readonly organization: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string | "Present";
  readonly summary: string;
  readonly stack: readonly string[];
  readonly responsibilities: readonly string[];
  readonly highlights: readonly ExperienceHighlight[];
};

export type ExperienceSummary = {
  readonly label: string;
  readonly value: string;
  readonly description: string;
};

export const experienceSummary = [
  {
    label: "Experience",
    value: "Nearly 5 years",
    description:
      "Professional backend engineering experience across production services and data workflows.",
  },
  {
    label: "Core Focus",
    value: "Backend systems",
    description:
      "APIs, queue workers, reporting pipelines, media storage, and database-backed services.",
  },
  {
    label: "Architecture",
    value: "System design",
    description:
      "Practical decisions around scalability, reliability, data access, and failure handling.",
  },
  {
    label: "Current Growth",
    value: "Full stack",
    description:
      "Expanding into Next.js, TypeScript, Tailwind CSS, and modern product interfaces.",
  },
] satisfies readonly ExperienceSummary[];

export const experience = [
  {
    id: "backend-engineer-production-systems",
    type: "professional",
    role: "Backend Developer",
    organization: "PT Telkom Indonesia / OCA",
    location: "Indonesia",
    startDate: "Jul 2021",
    endDate: "Present",
    summary:
      "Built and maintained production backend services, REST APIs, queue-based workflows, reporting systems, and storage-backed media features.",
    stack: [
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "Redis",
      "REST APIs",
      "S3-compatible Object Storage",
    ],
    responsibilities: [
      "Designed and implemented REST APIs for production workflows.",
      "Built background processing flows using RabbitMQ and worker services.",
      "Modeled data in PostgreSQL and MongoDB based on access patterns.",
      "Integrated Redis for caching and temporary job state.",
      "Implemented media storage flows with S3-compatible object storage.",
      "Supported reporting pipelines and high-volume data processing use cases.",
    ],
    highlights: [
      {
        label: "API Design",
        description:
          "Created predictable REST endpoints with validation, pagination, and consistent error handling.",
      },
      {
        label: "Async Processing",
        description:
          "Moved slow or unreliable work into queues and background workers.",
      },
      {
        label: "Data Workflows",
        description:
          "Worked on reporting and data-heavy backend flows that require careful query and job design.",
      },
    ],
  },
  {
    id: "full-stack-development-learning",
    type: "learning",
    role: "Full Stack Development Learner",
    organization: "Personal Growth",
    location: "Remote",
    startDate: "2026",
    endDate: "Present",
    summary:
      "Learning modern full stack development while preserving a backend-first approach to product architecture.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React",
      "Node.js",
    ],
    responsibilities: [
      "Build product interfaces with accessible, responsive UI patterns.",
      "Connect frontend workflows to clear API boundaries.",
      "Practice content modeling, SEO, and maintainable App Router structure.",
      "Translate backend systems thinking into full stack product delivery.",
    ],
    highlights: [
      {
        label: "Frontend Growth",
        description:
          "Practicing component-driven UI development with TypeScript and design-system primitives.",
      },
      {
        label: "Product Thinking",
        description:
          "Learning how frontend workflows expose backend architecture and data modeling decisions.",
      },
    ],
  },
] satisfies readonly ExperienceItem[];
