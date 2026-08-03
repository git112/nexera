# ⚡ Nexera

**A slick landing-page-to-dashboard concept for an AI-powered workflow automation platform (think Zapier, reimagined).**

## Problem

Teams that want to automate repetitive work across tools (email, chat, databases, calendars) usually reach for workflow-automation platforms, but many of those feel dated or overly technical. Nexera explores what a modern, visually striking automation product could look like — from marketing landing page to an interactive no-code workflow builder — with an emphasis on polish and motion.

## Solution / How it works

Nexera is a **React single-page app demo/prototype** built on the popular Vite + shadcn/ui + Tailwind stack (bootstrapped via the Lovable AI app builder, per the `lovable-tagger` dev dependency). A single page (`Index.tsx`) switches between three views using local component state — no real routing between them:

- **Landing** — a `Navbar` + animated `Hero` section (glassmorphism cards, floating blurred gradient orbs animated with Framer Motion, "AI-powered automation" messaging)
- **Dashboard** — an overview view (likely stats/automation summaries, built with the shadcn/ui + Recharts component set)
- **Workflow Builder** — an interactive builder UI showing chained trigger → action nodes (e.g. "Gmail – New Email" → "Slack – Send Message"), each represented as cards with icons from `lucide-react`

A floating "Demo Navigation" widget lets you jump between the three views to showcase the concept, rather than this being a fully-built multi-page product.

## Key Features

- 🎨 Animated hero/landing section with Framer Motion background effects
- 📊 Dashboard view scaffold for automation metrics
- 🔧 Visual workflow builder mockup with trigger/condition/action node types (Gmail, Slack, database, calendar, etc.)
- Full shadcn/ui component library pre-wired (accordion, dialog, dropdown, tabs, toast, tooltip, and more via Radix UI primitives)
- Dark, modern design system with Tailwind + `tailwindcss-animate`

## Tech Stack

- **Framework**: React 18 + TypeScript, built with Vite 5
- **UI Kit**: shadcn/ui components on top of Radix UI primitives
- **Styling**: Tailwind CSS 3, `tailwind-merge`, `class-variance-authority`
- **Animation**: Framer Motion
- **Routing**: React Router DOM (single route registered — `/` — plus a catch-all 404 page)
- **Data/forms**: TanStack React Query, React Hook Form + Zod, `date-fns`
- **Charts**: Recharts
- **Icons**: lucide-react
- **Notifications**: Sonner
- Scaffolded/assisted via **Lovable** (`lovable-tagger` package)

## Getting Started / Setup

```bash
npm install
npm run dev        # start Vite dev server
npm run build       # production build
npm run build:dev   # development-mode build
npm run lint         # run ESLint
npm run preview      # preview a production build locally
```

## Project Structure

```
nexera/
├── index.html
├── src/
│   ├── App.tsx                 # app shell: providers, router, routes
│   ├── main.tsx
│   ├── pages/
│   │   ├── Index.tsx           # view switcher: landing / dashboard / workflow
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx             # animated landing hero
│   │   ├── Dashboard.tsx        # dashboard view
│   │   ├── WorkflowBuilder.tsx  # workflow node builder view
│   │   └── ui/                  # shadcn/ui component library
│   ├── hooks/                   # use-mobile, use-toast
│   └── lib/utils.ts
├── tailwind.config.ts
└── vite.config.ts
```

## Status / Notes

This reads as a design-forward front-end concept/demo rather than a production product — there's no backend, no real automation execution engine, and no persistence; the "workflow builder" and "dashboard" are UI mockups navigated via local component state rather than real routes or live data. It's a strong showcase of a modern React/Tailwind/shadcn stack and motion design, built with help from the Lovable AI app builder.
