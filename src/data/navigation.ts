export type NavigationItem = {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly external?: boolean;
};

export type NavigationGroup = {
  readonly label: string;
  readonly items: readonly NavigationItem[];
};

export type SiteRoute = {
  readonly label: string;
  readonly href: string;
  readonly description: string;
};

export const siteRoutes = [
  {
    label: "Home",
    href: "/",
    description:
      "Backend engineering portfolio overview, featured work, writing, and contact links.",
  },
  {
    label: "Projects",
    href: "/projects",
    description:
      "Backend-heavy projects and case studies covering APIs, queues, data workflows, and storage systems.",
  },
  {
    label: "Experience",
    href: "/experience",
    description:
      "Professional backend engineering experience, responsibilities, technologies, and selected work.",
  },
  {
    label: "System Design",
    href: "/system-design",
    description:
      "Architecture notes and system design breakdowns focused on real backend tradeoffs.",
  },
  {
    label: "Blog",
    href: "/blog",
    description:
      "Technical writing about backend architecture, databases, queues, APIs, and full stack learning.",
  },
  {
    label: "Contact",
    href: "/contact",
    description:
      "Contact information for Backend Engineer and Full Stack Engineer opportunities.",
  },
] satisfies readonly SiteRoute[];

export const mainNavigation = [
  {
    label: "Projects",
    href: "/projects",
    description: "Backend projects and architecture-focused case studies.",
  },
  {
    label: "Experience",
    href: "/experience",
    description: "Backend engineering role, responsibilities, and technology focus.",
  },
  {
    label: "System Design",
    href: "/system-design",
    description: "System design notes, decisions, and tradeoffs.",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Technical articles on backend and full stack engineering.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Email, resume, GitHub, and LinkedIn links.",
  },
] satisfies readonly NavigationItem[];

export const footerNavigation = [
  {
    label: "Explore",
    items: [
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "Experience",
        href: "/experience",
      },
      {
        label: "System Design",
        href: "/system-design",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    label: "Connect",
    items: [
      {
        label: "Email",
        href: "mailto:candrasakar@gmail.com",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/telkomdev-candrasaka",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/candrasakar/",
        external: true,
      },
    ],
  },
] satisfies readonly NavigationGroup[];

export const callToActionLinks = [
  {
    label: "View Projects",
    href: "/projects",
    description: "Review backend-focused engineering work.",
  },
  {
    label: "Read Writing",
    href: "/blog",
    description: "Read technical articles and architecture notes.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start a conversation about relevant roles.",
  },
] satisfies readonly NavigationItem[];
