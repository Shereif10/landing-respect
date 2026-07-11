# CLAUDE.md — RESPECT Landing Page Operating Manual

This document is the permanent operating manual for this project. It governs every implementation decision made in this repository, for every future session, by any agent (human or AI) working on it. If a future instruction conflicts with this document, resolve the conflict per the **Sources of Truth** section below before proceeding.

---

## Project Identity

- **Project name:** RESPECT Landing Page
- **Purpose:** A standalone, bilingual (Arabic / English) landing page for RESPECT, built specifically for paid advertising campaigns. It is not a general-purpose marketing site — every decision on this project is filtered through its effect on conversion.
- **Business goals:** Drive qualified leads for RESPECT through Meta Ads and Google Ads traffic. Specific targets, offers, and business KPIs are defined in the PRD and are not to be assumed here.
- **Conversion goals:** Lead generation is the primary objective. The exact conversion action(s) (e.g. form submission, contact request) and the funnel/CTA strategy are defined by the PRD/Blueprint and SEO Document, not invented at the implementation layer.

---

## Sources of Truth

Priority order, highest first:

1. **PRD.md** — product requirements, structure, section order, user journey, CTA strategy, conversion flow.
2. **SEO Document** — all copy and content, in both Arabic and English.
3. **Figma** — visual language of the future main website (colors, typography, components, spacing, motion style, design principles only).
4. **User Instructions** — direct instructions given in conversation, which can clarify or extend the above but cannot silently override them.

**Conflict resolution:** If two sources disagree, the higher-priority source wins — but the conflict must be surfaced to the user rather than resolved silently. Never pick a side of a conflict without flagging it. User Instructions sit at the bottom of this list because they arrive live and unreviewed against the other three; a live instruction that contradicts the PRD, SEO Document, or Figma must be confirmed explicitly before acting on it, since it may be a mistake or may be an intentional override — either way, that has to be made explicit, not inferred.

---

## Project Scope

- This is **NOT** the main RESPECT website. The main website is a separate, future project.
- This is a **standalone Landing Page**, with its own codebase, its own structure, and its own purpose: converting paid ad traffic.
- The Landing Page **shares the visual identity** of the future main website (colors, type, components, spacing, motion language) so that ad traffic experiences visual continuity with the brand.
- The Landing Page does **not** share the main website's layout, information architecture, or navigation. It has its **own conversion-focused layout**, defined by the PRD/Blueprint — not by Figma's page structure.

---

## Non-Negotiable Rules

- Never invent marketing copy.
- Never rewrite or "improve" copy unless explicitly requested.
- Never inspect the Figma file until explicitly requested to do so.
- Never rebuild the main website, or any part of its layout/IA, inside this project.
- Never continue automatically past a milestone — always stop for approval.
- Stop after every major milestone and wait for explicit sign-off before continuing.
- Ask questions instead of assuming. If information is missing, stop and ask.
- Prefer maintainability over cleverness.
- Optimize for production quality, not for speed of first draft.

---

## Workflow

Every section of the landing page must be built following this exact sequence, with no steps skipped or merged:

1. **Inspect** — review the relevant PRD/Blueprint section, SEO content, and (if requested) Figma reference for this section.
2. **Analyze** — summarize what will be built, what content will be used, what design tokens/components apply, and flag any gaps or ambiguities.
3. **Wait for approval** — stop and get explicit user sign-off on the analysis before writing any code.
4. **Implement** — build the section per the approved analysis.
5. **Pixel Perfect Review** — compare the implementation against the design reference and content source; fix discrepancies.
6. **Wait for approval** — stop and get explicit user sign-off on the implementation before moving on.
7. **Continue** — proceed to the next section only after approval is given.

---

## Design Rules

- Figma is used **only** for visual language: colors, typography, components, buttons, radius, shadows, motion style, spacing, and design principles.
- Never copy Figma layouts blindly — the landing page's layout comes from the PRD/Blueprint, not from Figma's page structure.
- Components must be reusable across sections, not built as one-off, section-specific markup.
- Use design tokens (colors, spacing, typography, radius, shadows) rather than hard-coded values.
- Use semantic spacing (scale-based, purposeful) rather than arbitrary pixel values.
- Mobile-first: design and build for the smallest viewport first, then progressively enhance.
- Accessibility-first: accessibility is a design constraint from the start, not a pass applied afterward.

---

## Content Rules

- The SEO Document is the **only** source of copy. No exceptions.
- Arabic and English content already exist in the SEO Document — both are first-class, final content.
- Never generate translations. If a piece of content is missing in one language, stop and ask rather than translating or inventing it.
- Never create placeholder marketing content ("Lorem ipsum," filler headlines, fabricated testimonials, etc.). If content for a section is not yet available, stop and ask.

---

## Animation Rules

Animations must:

- Support the content and conversion goal — never be decorative for its own sake.
- Be subtle, not attention-seeking.
- Be performant (GPU-accelerated properties, no layout thrashing, no jank).
- Respect `prefers-reduced-motion` and provide a non-animated equivalent experience.
- Never distract from or delay conversion actions (CTAs, forms).

---

## Responsive Rules

The landing page must be built and verified across three breakpoints:

- **Desktop**
- **Tablet**
- **Mobile**

Arabic (RTL) and English (LTR) must behave equally well at every breakpoint — RTL is not a mirrored afterthought, it is a first-class layout mode that must be verified independently at each breakpoint, not assumed to "just work" because LTR works.

---

## Technical Rules

Stack:

- Next.js 16
- TypeScript
- Tailwind CSS
- App Router
- next-intl
- GSAP
- React Hook Form
- Zod

**Coding philosophy:** Code should be boring, explicit, and easy to delete. Favor clarity over abstraction, composition over inheritance, and explicit types over inferred convenience. TypeScript strictness is not optional. No implementation code is written until the corresponding section has passed the Inspect/Analyze/Approval steps in the Workflow above.

---

## Component Rules

- Reusable across sections and languages.
- Small — a component should do one thing.
- Composable — complex sections are built by composing small components, not by writing large monolithic ones.
- Accessible by default — semantics and keyboard behavior are part of the component contract, not an add-on.

---

## Performance Rules

- Core Web Vitals (LCP, CLS, INP) are hard requirements, not aspirational.
- Lazy-load non-critical content and below-the-fold sections.
- Images must be optimized (correct format, sizing, and loading strategy).
- Minimize JavaScript shipped to the client.
- Server Components by default; Client Components only where interactivity requires them.

---

## Accessibility Rules

- Semantic HTML first — use the correct element before reaching for ARIA.
- Full keyboard navigation support.
- ARIA attributes only where semantic HTML is insufficient.
- Build with WCAG conformance in mind throughout, not audited in only at the end.

---

## SEO Rules

- Metadata (title, description, Open Graph, etc.) must be correctly set per page/locale.
- Structured data must be used where applicable to the content.
- Performance is treated as an SEO requirement, not only a UX one.
- Heading hierarchy must be semantic and correctly nested (single H1, logical H2/H3 structure).

---

## Definition of Done

A section is complete only when **all** of the following are true:

- ✓ Pixel Perfect — matches the approved visual reference
- ✓ Responsive — verified on Desktop, Tablet, and Mobile
- ✓ RTL/LTR verified — both directions confirmed correct, not assumed
- ✓ Accessible — keyboard, semantics, and ARIA verified
- ✓ Performance verified — Core Web Vitals checked
- ✓ SEO verified — metadata, structured data, heading hierarchy checked
- ✓ User approved — explicit sign-off received

---

## What Claude Must Never Do

- Never invent, rewrite, or "improve" marketing copy.
- Never generate translations between Arabic and English.
- Never create placeholder or filler marketing content.
- Never inspect or reference the Figma file unless explicitly instructed to.
- Never copy the Figma file's page layout or rebuild the main website's structure.
- Never treat this landing page's layout as derived from Figma — it comes from the PRD/Blueprint.
- Never skip, merge, or reorder steps in the defined Workflow.
- Never continue past a milestone without explicit user approval.
- Never assume missing information — always stop and ask.
- Never initialize, scaffold, or write application code without explicit instruction to do so.
- Never optimize for cleverness over maintainability.
- Never ship a section that has not met every criterion in the Definition of Done.


Implementation Rule:

If a UI label (navigation, buttons, links, form labels, badges, microcopy) is missing from the SEO document but exists in the approved Figma design, treat it as approved UI copy.

Do not stop implementation for UI labels.

Only stop for missing business content or contradictory requirements.