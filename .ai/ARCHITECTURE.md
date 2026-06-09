# Architecture

This document describes the current architecture of the portfolio application.

The project is a content-driven engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui-style primitives. Its primary purpose is to present backend engineering experience, system design thinking, technical case studies, projects, and professional credibility in a clean documentation-like interface.

## Application Architecture

The application follows a server-first, content-driven architecture.

```txt
src/
├── app/                     # Next.js App Router routes, layout, and global styles
├── components/
│   ├── ui/                  # Shared shadcn/ui-style primitives
│   └── sections/            # Older or parallel section components
├── data/                    # Typed content modules
├── features/
│   └── home/
│       └── components/      # Active homepage feature sections
├── lib/                     # Shared utilities
└── types/                   # Shared domain types
```

The main architectural boundaries are:

- `src/app/` owns routing and page composition.
- `src/data/` owns portfolio content and typed content models.
- `src/features/` owns feature-specific UI, currently focused on the homepage.
- `src/components/ui/` owns reusable design-system primitives.
- `src/lib/` owns shared helper utilities.
- `src/types/` owns shared TypeScript domain types.

The homepage is the most complete part of the application. It composes data from `src/data/` into feature-owned components under `src/features/home/components/`.

## Routing Architecture

The application uses the Next.js App Router.

Current route files include:

```txt
src/app/layout.tsx
src/app/page.tsx
src/app/projects/page.tsx
src/app/system-design/page.tsx
src/app/blog/page.tsx
src/app/contact/page.tsx
```

Current routes:

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Main portfolio homepage |
| `/projects` | `src/app/projects/page.tsx` | Intended projects page |
| `/system-design` | `src/app/system-design/page.tsx` | Intended case studies / system design page |
| `/blog` | `src/app/blog/page.tsx` | Intended technical writing page |
| `/contact` | `src/app/contact/page.tsx` | Intended contact page |

The root layout in `src/app/layout.tsx` defines global metadata, font variables, base body styling, and renders route children.

## Data Flow

The project intentionally separates content from UI.

Data lives in TypeScript modules under `src/data/` and is imported by route-level components or feature sections.

Typical homepage data flow:

```txt
src/data/*.ts
     ↓
src/app/page.tsx
     ↓
src/features/home/components/*
     ↓
src/components/ui/*
```

For example, `src/app/page.tsx` imports:

- `profile` from `src/data/profile.ts`
- `experienceSummary` from `src/data/experience.ts`
- `mainNavigation` from `src/data/navigation.ts`
- `featuredProjects` from `src/data/projects.ts`
- `featuredCaseStudies` from `src/data/case-studies.ts`

It then passes those values into section components as props.

This keeps UI components focused on rendering and layout while content modules remain responsible for portfolio copy, project descriptions, case study details, navigation metadata, and profile information.

## Data Layer Architecture

The content layer is composed of typed modules:

| File | Responsibility |
| --- | --- |
| `src/data/profile.ts` | Profile, role, headline, summary, focus areas, stack, skills, contact links, socials |
| `src/data/experience.ts` | Experience summaries and detailed professional/learning experience records |
| `src/data/navigation.ts` | Site routes, main navigation, footer navigation, and CTA links |
| `src/data/projects.ts` | Project models, architecture decisions, capabilities, impact, links, and featured projects |
| `src/data/case-studies.ts` | Case study content, architecture flows, tradeoffs, lessons learned, technologies, and featured case studies |
| `src/data/articles.ts` | Technical article metadata |
| `src/types/case-study.ts` | Shared case study domain types |

Most content modules use explicit TypeScript types and `satisfies` checks to keep content shape predictable without losing literal type information.

## Component Hierarchy

The active homepage hierarchy is:

```txt
RootLayout
└── HomePage
    ├── HeroSection
    ├── ExperienceHighlightsSection
    ├── FeaturedCaseStudiesSection
    ├── FeaturedProjectsSection
    ├── TechnicalExpertiseSection
    ├── RecentArticlesSection
    └── ContactCtaSection
```

`HomePage` is responsible for composition only. It imports data and passes it to sections.

Feature sections are responsible for:

- layout structure
- section headings
- responsive grids
- rendering cards, badges, buttons, and links
- preserving semantic HTML and accessibility attributes

Shared UI primitives are responsible for low-level reusable presentation patterns.

## Shared UI Components

Reusable UI primitives live under `src/components/ui/`.

Current shared primitives include:

- `button.tsx`
- `card.tsx`
- `badge.tsx`
- `avatar.tsx`
- `navigation-menu.tsx`
- `separator.tsx`
- `sheet.tsx`

These components follow a shadcn/ui-style approach:

- local component ownership rather than a closed external component library
- Tailwind utility classes for styling
- CSS variable-based theme tokens
- `class-variance-authority` for component variants
- `clsx` and `tailwind-merge` through the shared `cn()` utility
- Radix-based primitives for interactive/accessibility-sensitive components

The `cn()` helper in `src/lib/utils.ts` combines conditional class names and resolves Tailwind class conflicts.

## Feature Sections

Homepage feature sections live in `src/features/home/components/`.

### `HeroSection`

Renders the primary portfolio introduction, backend engineering positioning, CTA links, focus area badges, and a backend system overview card.

### `ExperienceHighlightsSection`

Renders high-level experience metrics and summary cards from `experienceSummary`.

### `FeaturedCaseStudiesSection`

Renders architecture-focused case study cards from `featuredCaseStudies`. This section is important because case studies are the primary credibility signal for backend/system design experience.

### `FeaturedProjectsSection`

Renders project cards from `featuredProjects`, including status, summary, backend capabilities, and technology stack.

### `TechnicalExpertiseSection`

Renders grouped backend and full stack skills from `profile.skillGroups`.

### `RecentArticlesSection`

Renders the writing/blog preview area. The current data model exists, but article content is still minimal.

### `ContactCtaSection`

Renders contact-oriented calls to action using profile contact and social links.

### `SectionHeading`

Provides a shared section heading pattern with optional eyebrow text and description.

## Styling Architecture

Global styles live in `src/app/globals.css`.

The styling approach is:

- Tailwind-first
- mobile-first responsive layouts
- CSS variables for design tokens
- restrained visual design
- documentation/product-site feel
- dark mode variables prepared through a `.dark` class

Common layout conventions include:

- centered content containers
- `max-w-7xl`
- responsive padding with `px-4 sm:px-6 lg:px-8`
- section separators with `border-b`
- cards with `border`, `bg-card`, and `rounded-lg`
- secondary text with `text-muted-foreground`

The visual direction intentionally avoids excessive animation, gradients, decorative effects, and generic portfolio patterns.

## Server and Client Component Boundaries

The architecture is server-component-first.

Most route and section components do not use client-side interactivity and can remain server components.

Client components should be limited to interactive UI primitives such as dialogs, sheets, menus, or future theme controls.

Current client-marked UI primitives include interactive Radix-style components such as sheet/avatar/separator primitives where required by their implementation.

Future interactive features should be isolated into small client components instead of making entire pages client-rendered.

## Future Scalability Considerations

### 1. Keep content separate from UI

New projects, case studies, articles, and profile updates should be added through `src/data/` modules first. UI components should continue receiving content through props rather than hardcoding portfolio content inside component files.

### 2. Preserve the feature-folder pattern

As pages become more complex, prefer feature-specific folders such as:

```txt
src/features/projects/
src/features/system-design/
src/features/contact/
```

This keeps route files thin and avoids turning `src/components/` into a dumping ground for page-specific code.

### 3. Consolidate duplicate section implementations

The active homepage uses `src/features/home/components/`, while `src/components/sections/` contains a parallel set of section components. Long term, the project should keep one clear pattern to avoid duplicated layouts and inconsistent content rendering.

### 4. Build detail pages from existing slugs

Project and case study data already include slugs and rich structured content. Future detail routes can be built around those models, for example:

```txt
src/app/projects/[slug]/page.tsx
src/app/system-design/[slug]/page.tsx
```

### 5. Prioritize case studies before blog expansion

Case studies are the most important portfolio content. The system design / case studies route should be completed before investing heavily in blog infrastructure, CMS, MDX, RSS, analytics, or contact forms.

### 6. Add a global app shell

Navigation and footer data already exist in `src/data/navigation.ts`. A scalable next step is to introduce a global app shell through `src/app/layout.tsx` or layout-adjacent components:

- navbar
- mobile navigation
- footer
- theme provider
- theme toggle

### 7. Keep interactive code isolated

Theme toggles, mobile menus, and dialogs should be small client components. Static portfolio sections should remain server-rendered.

### 8. Maintain accessibility as pages expand

Future sections should continue using:

- semantic headings
- labelled sections
- descriptive link text
- keyboard-visible focus states
- accessible Radix primitives for interactive components
- mobile-first responsive layouts

### 9. Avoid unnecessary dependencies

The current stack already supports the portfolio requirements. New dependencies should be added only when they solve a clear architectural problem.

## Current Architecture Summary

The repository currently has a solid foundation for a typed, content-driven engineering portfolio. The homepage demonstrates the intended architecture: route-level composition, typed data modules, feature-owned sections, shared UI primitives, and Tailwind-based styling.

The main scalability work is not a large refactor. It is to complete the missing app shell and subpages while preserving the existing separation between content, route composition, feature sections, and reusable UI primitives.
