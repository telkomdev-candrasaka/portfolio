# Candra Saka Rahardian Portfolio

Personal engineering portfolio for Candra Saka Rahardian, focused on backend systems, event-driven architecture, reporting pipelines, media management services, object storage workflows, projects, and technical case studies.

The site is designed for engineering managers, senior engineers, and technical recruiters who want to quickly understand practical backend experience, system design thinking, and production engineering focus areas.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style primitives
- Radix UI primitives
- next-themes
- lucide-react icons

## Current Features

- Responsive homepage with:
  - hero section
  - profile picture
  - experience highlights
  - featured case studies
  - featured projects
  - technical expertise
  - recent articles section
  - contact CTA
- Responsive navbar with mobile sheet navigation.
- Footer with GitHub, LinkedIn, email, resume, and route links.
- Dark/light theme toggle using `next-themes`.
- Theme persistence with system preference support.
- Projects page sourced from `src/data/projects.ts`.
- Experience page sourced from `src/data/experience.ts`, `src/data/profile.ts`, and case-study data.
- Case Studies / System Design page sourced from `src/data/case-studies.ts`.
- Dynamic case-study detail pages at `/system-design/[slug]`.
- Blog placeholder page for future writing.
- Contact page with email, resume, GitHub, and LinkedIn links.
- Route-specific metadata for public pages.

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio overview and featured content |
| `/experience` | Professional backend engineering experience |
| `/projects` | Backend-focused project summaries |
| `/system-design` | Case-study index and architecture summaries |
| `/system-design/[slug]` | Dynamic case-study detail pages |
| `/blog` | Technical writing placeholder |
| `/contact` | Contact and professional links |

## Project Structure

```txt
src/
├── app/                 # Next.js App Router routes and layout
├── components/          # Shared layout and UI primitives
├── data/                # Static portfolio content and navigation data
├── features/            # Feature-specific page sections
├── lib/                 # Shared utilities
└── types/               # Shared TypeScript types

public/
└── default_pp.jpeg      # Profile picture asset

.ai/
├── AGENTS.md            # Agent and repository guidance
├── ARCHITECTURE.md      # Application architecture notes
├── PROJECT_CONTEXT.md   # Concise project context for future agents
└── ROADMAP.md           # Roadmap and phase notes
```

## Data Layer

Portfolio content is stored as typed static data under `src/data/`:

- `profile.ts` — identity, headline, avatar, contact links, socials, skills.
- `experience.ts` — professional experience, responsibilities, and highlights.
- `projects.ts` — project summaries and stack information.
- `case-studies.ts` — system design case studies and dynamic route content.
- `articles.ts` — article metadata for the homepage/blog surface.
- `navigation.ts` — main navigation, footer navigation, and CTA links.

This keeps page components mostly presentational and makes future content updates straightforward.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Implementation Notes

- Server Components are used by default.
- Client Components are limited to interactive behavior such as theme support.
- Theme handling uses `next-themes` with class-based dark mode, system preference support, and hydration-safe rendering.
- Styling follows Tailwind CSS utility classes and existing UI primitives in `src/components/ui/`.
- Case-study detail pages are generated from static data with App Router dynamic routes.
- Supporting agent/internal documentation lives in `.ai/`; the root `README.md` is the public project overview.

## Roadmap

Completed:

- Homepage sections
- Responsive navbar
- Footer
- Theme toggle
- Projects page
- Experience page
- Case Studies page
- Dynamic case-study detail pages
- Contact page
- Blog placeholder

Planned:

- Project detail pages
- Blog implementation
- More technical writing
- Expanded case-study content
