# AGENT.md

## Project Overview

This repository contains a personal engineering portfolio for Candra Saka Rahardian.

The portfolio is intentionally engineering-focused rather than design-focused.

Primary goal:
Showcase backend engineering experience, system design thinking, case studies, and technical expertise.

Target audience:

* Engineering Managers
* Senior Engineers
* Technical Recruiters

---

## Technology Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui

---

## Architecture Principles

1. Server Components by default.
2. Strong TypeScript typing.
3. Content separated from UI.
4. Reusable section components.
5. No hardcoded content inside UI components.
6. Mobile-first responsive design.
7. Accessibility is required.

---

## Data Layer

Content is stored in:

src/data/

Files:

* profile.ts
* experience.ts
* navigation.ts
* projects.ts
* case-studies.ts
* articles.ts

Components should consume data from these modules.

Do not hardcode project, case study, or profile content.

---

## Design Principles

The portfolio should feel like:

* Engineering documentation
* Technical product website
* Professional backend engineer portfolio

Avoid:

* Fancy animations
* Excessive gradients
* Overly decorative UI
* Skill progress bars
* Generic developer portfolio templates

Prefer:

* Clean layouts
* Strong typography
* Clear information hierarchy
* Architecture-focused presentation

---

## Case Studies

Case studies are the most important content.

Current focus areas:

* Session Reporting Pipeline
* Media Management Service
* Event-Driven Processing
* Object Storage Lifecycle

When implementing features, prioritize visibility of case studies.

---

## Coding Rules

* Follow existing code style.
* Reuse existing components.
* Avoid unnecessary dependencies.
* Prefer composition over duplication.
* Keep components small and focused.
* Do not perform large refactors unless requested.

---

## Current Roadmap

Immediate priorities:

1. Navbar
2. Footer
3. Theme Toggle
4. Projects Page
5. Case Studies Page

Do not implement Blog, CMS, MDX, RSS, Analytics, or Contact Forms unless explicitly requested.
