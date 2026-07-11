# RESPECT Landing Page

Bilingual (Arabic / English) landing page for RESPECT, built for paid advertising campaigns. See `CLAUDE.md` for the project's operating rules and `PRD.md` for product requirements — both govern all work in this repository.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · next-intl · GSAP · Lenis · React Hook Form · Zod · Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — this redirects to the default locale (`/en`). Arabic is available at `/ar`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit
- `npm run format` / `npm run format:check` — Prettier

## Localization

Locales live under `src/app/[locale]`. Routing, navigation helpers, and request config live in `src/i18n/`. UI strings come from `messages/en.json` and `messages/ar.json` — no hardcoded UI text.
