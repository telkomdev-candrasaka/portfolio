export type ProjectStatus = "planned" | "in-progress" | "completed";

export type ProjectCategory =
  | "backend"
  | "full-stack"
  | "data"
  | "infrastructure";

export type ProjectLink = {
  readonly label: string;
  readonly href: string;
  readonly type: "case-study" | "repository" | "demo" | "article";
};

export type ArchitectureDecision = {
  readonly title: string;
  readonly reason: string;
  readonly tradeoff: string;
};

export type ProjectArchitecture = {
  readonly summary: string;
  readonly components: readonly string[];
  readonly dataFlow: readonly string[];
  readonly decisions: readonly ArchitectureDecision[];
};

export type Project = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly category: ProjectCategory;
  readonly status: ProjectStatus;
  readonly featured: boolean;
  readonly role: string;
  readonly systemType: string;
  readonly stack: readonly string[];
  readonly capabilities: readonly string[];
  readonly impact: readonly string[];
  readonly architecture: ProjectArchitecture;
  readonly links: readonly ProjectLink[];
};

export const projects = [
  {
    slug: "smart-canteen",
    title: "Smart Canteen",
    summary:
      "A full stack ordering and admin workflow project with backend-first API and data modeling decisions.",
    description:
      "A product-oriented application used to practice full stack development while keeping backend architecture, API design, order state, and operational workflows at the center.",
    category: "full-stack",
    status: "in-progress",
    featured: true,
    role: "Backend Engineer / Full Stack Learner",
    systemType: "Full Stack Ordering System",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
    ],
    capabilities: [
      "Order workflow modeling",
      "Admin dashboard design",
      "API integration",
      "Relational data modeling",
      "Full stack UI implementation",
    ],
    impact: [
      "Demonstrates growth from backend engineering into full stack product delivery.",
      "Shows practical API and database design in a product context.",
      "Creates a foundation for future case studies and technical writing.",
    ],
    architecture: {
      summary:
        "The application separates customer ordering, admin operations, REST API boundaries, and relational persistence around explicit order states.",
      components: [
        "Customer interface",
        "Admin interface",
        "REST API",
        "PostgreSQL database",
        "Authentication boundary",
      ],
      dataFlow: [
        "Customer creates an order from available menu items.",
        "API validates request and persists order state.",
        "Admin interface reads and updates fulfillment status.",
        "Order history remains queryable for reporting and operations.",
      ],
      decisions: [
        {
          title: "Model the app around workflow states",
          reason:
            "Ordering systems depend on explicit status transitions and operational visibility.",
          tradeoff:
            "Requires more upfront data modeling than a simple CRUD demo.",
        },
      ],
    },
    links: [
      {
        label: "View project",
        href: "/projects/smart-canteen",
        type: "repository",
      },
    ],
  },
  {
    slug: "hris",
    title: "HRIS",
    summary:
      "A human resource information system focused on employee data, operational workflows, and backend service boundaries.",
    description:
      "A backend-oriented HRIS project designed around employee records, role-based workflows, structured data access, and maintainable API boundaries.",
    category: "backend",
    status: "planned",
    featured: true,
    role: "Backend Engineer",
    systemType: "Business Operations System",
    stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Redis",
    ],
    capabilities: [
      "Employee data modeling",
      "Role-based workflow design",
      "REST API boundaries",
      "Operational reporting",
      "Permission-aware access patterns",
    ],
    impact: [
      "Demonstrates backend modeling for business operations.",
      "Shows how workflow constraints influence API and schema design.",
      "Provides a future foundation for reporting and audit-focused architecture notes.",
    ],
    architecture: {
      summary:
        "The system is organized around employee records, permission-aware APIs, operational workflows, and reporting-ready relational data.",
      components: [
        "Employee service",
        "Role and permission boundary",
        "REST API",
        "PostgreSQL database",
        "Reporting module",
      ],
      dataFlow: [
        "Authorized users manage employee and organization records.",
        "API validates role permissions and workflow constraints.",
        "PostgreSQL stores normalized operational data.",
        "Reporting endpoints expose filtered summaries for administrators.",
      ],
      decisions: [
        {
          title: "Use relational modeling for HR data",
          reason:
            "HRIS workflows depend on structured relationships, constraints, and reporting queries.",
          tradeoff:
            "Requires more schema planning than flexible document storage.",
        },
      ],
    },
    links: [
      {
        label: "View project",
        href: "/projects/hris",
        type: "repository",
      },
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "A backend engineer portfolio built around case studies, system design thinking, technical writing, and structured content.",
    description:
      "A Next.js portfolio designed to present backend engineering credibility through reusable content models, case-study-driven navigation, and maintainable frontend architecture.",
    category: "full-stack",
    status: "in-progress",
    featured: true,
    role: "Full Stack Developer",
    systemType: "Content-Driven Portfolio",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React",
    ],
    capabilities: [
      "Feature-based architecture",
      "Typed content modeling",
      "Responsive UI implementation",
      "SEO-ready page structure",
      "Accessible component composition",
    ],
    impact: [
      "Positions backend experience through deeper architecture narratives.",
      "Creates a scalable foundation for projects, case studies, and articles.",
      "Demonstrates full stack growth with modern frontend tooling.",
    ],
    architecture: {
      summary:
        "The portfolio uses App Router pages, feature-owned components, typed data modules, and reusable shadcn/ui primitives.",
      components: [
        "App Router pages",
        "Feature-based homepage sections",
        "Typed data layer",
        "shadcn/ui primitives",
        "SEO-ready content structure",
      ],
      dataFlow: [
        "Typed data modules define profile, experience, projects, and case studies.",
        "Homepage imports featured content from the data layer.",
        "Reusable section components render data without owning content.",
        "Future detail pages can reuse the same content models.",
      ],
      decisions: [
        {
          title: "Keep content outside UI components",
          reason:
            "The portfolio needs to scale with more case studies, projects, and writing.",
          tradeoff:
            "Requires a small data layer before building visible UI.",
        },
      ],
    },
    links: [
      {
        label: "View project",
        href: "/projects/portfolio-website",
        type: "demo",
      },
    ],
  },
] satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.featured);
