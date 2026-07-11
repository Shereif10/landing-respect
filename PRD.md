# PRD.md — RESPECT Landing Page

**Document status:** Draft — structural skeleton. Sections marked `[PENDING]` require business input before they can be considered final. This document must be updated (not silently reinterpreted) as that input arrives.

**Document type:** Product Requirements Document (business requirements only — no implementation detail; see CLAUDE.md for technical rules and workflow).

---

## 1. Project Overview

RESPECT Landing Page is a standalone, bilingual (Arabic / English) landing page built specifically to receive and convert traffic from paid advertising campaigns.

It is **not** the main RESPECT website. The main website is a separate, future project. This landing page shares the future website's visual identity but has its own independent structure, optimized for conversion rather than general navigation or information discovery.

- **Company / industry description:** `[PENDING — not yet provided]`
- **Product or service being advertised:** `[PENDING — not yet provided]`
- **Relationship to any existing brand assets beyond Figma/SEO Document:** `[PENDING — not yet provided]`

---

## 2. Business Goals

The landing page exists to serve a business objective, not to exist as a design exercise. At present, the following is confirmed:

- The page will drive traffic acquired through **Meta Ads** and **Google Ads**.
- The overarching business objective is **lead generation**.

The following are not yet defined and must not be assumed:

- Specific business KPIs or revenue targets: `[PENDING]`
- Target lead volume or lead quality bar: `[PENDING]`
- Sales/operations process that consumes the leads this page generates: `[PENDING]`
- Campaign timeline or launch date: `[PENDING]`

---

## 3. Landing Page Goals

Distinct from the broader business goals above, this section defines what this specific asset must accomplish.

- **Primary goal:** Convert paid ad traffic into leads.
- **Primary Objective:** Lead Generation.
- **Primary conversion methods:**
  - Lead Form
  - WhatsApp Conversation

  The exact CTA labels and implementation details will be defined later.
- **Secondary goals (if any):** `[PENDING]`
- **Non-goals for this asset:** general brand storytelling, SEO organic acquisition, or site-wide navigation — those belong to the future main website.

---

## 4. Target Audience

Confirmed:

- **Primary markets:** Egypt, Saudi Arabia, GCC.
- **Decision makers (personas):** Business Owners, Founders, CEOs, Managing Directors, Marketing Managers.
- **Traffic source:** Meta Ads and Google Ads. There is no organic/SEO acquisition path for this page.
- The audience is bilingual by design: it includes both an **Arabic-speaking segment** and an **English-speaking segment**, each treated as first-class (not one translated from the other).
- By virtue of the page's lead-generation objective (§2, §3), every visitor is treated as a prospective lead, not a general-interest or navigational visitor.

Still pending — must not be assumed:

- Detailed psychographic profile / specific pain points per persona
- What stage of awareness they arrive at (cold ad traffic vs. warm/retargeted traffic)
- Any segment differences between the Arabic-speaking and English-speaking audience, or between the Egypt / Saudi Arabia / GCC markets, beyond what is stated above

No audience assumptions beyond the confirmed points above have been made in this PRD.

---

## 5. Sources of Truth

This project operates on a strict, ordered hierarchy of sources. This hierarchy governs every content, structure, and design decision made for this landing page.

**Priority order (highest to lowest):**

1. **PRD.md** (this document) — business requirements, structure, journey, CTA/contact strategy, rules and principles.
2. **SEO Document** — the sole source of copy/content, in both Arabic and English.
3. **Figma** — the future main website's file, used only to extract visual language (colors, typography, components, spacing, motion style). Never used for layout or content.
4. **User Instructions** — direct conversational instructions, which may clarify or extend the above but must not silently override them.

**Conflict resolution:** If two sources disagree, the higher-priority source governs — but the conflict must be surfaced explicitly, never resolved silently. This applies equally to conflicts discovered during implementation and conflicts discovered during planning.

---

## 6. Brand Positioning

`[PENDING — no brand positioning, tone of voice, or messaging pillars have been provided yet.]`

This section will be populated from the SEO Document and/or explicit brand guidance once available. No positioning language should be invented in its absence.

---

## 7. User Journey

Confirmed end-to-end journey:

```
Paid Ad
  ↓
Hero
  ↓
Build Trust
  ↓
Present the Problem
  ↓
Present All Services Equally
  ↓
Show Previous Work
  ↓
Explain Philosophy
  ↓
Build Trust Through Values
  ↓
Explain the Process
  ↓
Final CTA
  ↓
Contact Form
  ↓
Lead Submitted
```

Mapped against the confirmed Information Architecture (§8):

| Journey stage | IA section |
|---|---|
| Paid Ad | (entry — Meta Ads / Google Ads, §4) |
| Hero | 1. Hero |
| Build Trust | 2. Trusted By |
| Present the Problem | 3. The Problem |
| Present All Services Equally | 4. How We Help Businesses Grow |
| Show Previous Work | 5. Businesses We've Helped Grow |
| Explain Philosophy | 6. Our Philosophy |
| Build Trust Through Values | 7. Our Values |
| Explain the Process | 8. How We Work |
| Final CTA | 9. Final CTA |
| Contact Form | 10. Contact Form |
| Lead Submitted | (exit — conversion complete) |

The Floating WhatsApp Button (§8) is a persistent, page-wide element and is not tied to a single journey stage — it is available as an alternate exit path at any point in the journey.

Still pending — must not be assumed:

- Decision points and friction points within each stage
- Any journey differences between the Arabic and English versions beyond language itself

No journey steps beyond this confirmed sequence have been assumed or invented in this draft.

---

## 8. Information Architecture

Confirmed section order (top to bottom):

1. Hero
2. Trusted By
3. The Problem
4. How We Help Businesses Grow
5. Businesses We've Helped Grow
6. Our Philosophy
7. Our Values
8. How We Work
9. Final CTA
10. Contact Form
11. Footer

**Persistent global element:** Floating WhatsApp Button — visible across the entire page, independent of scroll position and not part of the linear section order above.

This order is a confirmed business decision, not inferred from Figma. Figma's page layout (main website) remains out of scope for this page's structure (§13).

---

## 9. Section Specifications

`[PENDING — no section-by-section specification exists yet.]`

Once defined, each section in the Information Architecture above will have its own specification covering:

- Purpose of the section within the journey
- Content source (mapped to specific SEO Document content)
- Presence/placement of CTA, if any
- Any section-specific behavioral requirements

No section content or copy has been drafted or invented in this document.

---

## 10. CTA Strategy

Confirmed:

- **Primary CTA:** `[PENDING — Will be mapped directly from the SEO Document.]`
- **Secondary CTA:** Floating WhatsApp — the persistent, page-wide element defined in §8.
- Both CTAs share the same single goal: **lead generation**, consistent with the Business Goals (§2) and Landing Page Goals (§3). Neither CTA serves a secondary commerce or navigation objective.

Still pending — must not be assumed:

- Full CTA placement/repetition map across all IA sections (§8) beyond the confirmed Final CTA / Contact Form / Floating WhatsApp placements
- Exact CTA copy in each language — sourced from the SEO Document (§12), not invented here
- Language-specific CTA behavior (Arabic vs. English), if different beyond translation of the same label

No CTA copy or placement beyond what is confirmed above has been invented in this draft.

---

## 11. Contact Strategy

Confirmed:

- **Primary contact channel:** Lead Form (Contact Form section, §8, IA #10).
- **Secondary contact channel:** Floating WhatsApp Button (§8).
- The contact strategy exists to serve the page's lead-generation objective (§2, §3) — it is the mechanism through which the primary conversion action is captured.
- **Contact Form Fields:** `[PENDING — Will be mapped from business requirements or the SEO document if specified.]`

Still pending — must not be assumed:

- What happens after a visitor initiates contact (confirmation, redirect, follow-up expectation)
- Any compliance/consent requirements tied to contact collection (e.g. data protection notices)

---

## 12. Content Rules

These rules are confirmed and non-negotiable:

- The **SEO Document** is the only source of copy for this landing page.
- Arabic and English content **already exist** in the SEO Document as first-class, final content.
- No translation is to be generated between languages — both are sourced directly.
- No marketing copy is to be invented under any circumstance.
- No existing copy is to be rewritten or "improved" unless explicitly requested.
- No placeholder marketing content (filler headlines, fabricated testimonials, generic lorem-ipsum-style text) may appear in the final implementation. Where content is missing, the gap must be flagged, not filled.

---

## 13. Design Principles

These principles are confirmed at the business/requirements level (implementation detail lives in CLAUDE.md):

- The landing page must share the **visual identity** of the future main website.
- Figma is used **only** to extract visual language: colors, typography, components, buttons, radius, shadows, spacing, and general design principles.
- Figma's **page layout** is never copied — this landing page's structure comes from this PRD's Information Architecture, not from Figma.
- The landing page must **not** be a rebuild, subset, or clone of the future main website.
- Design must be mobile-first and accessibility-first from the outset.

---

## 14. Motion Principles

These principles are confirmed at the business/requirements level:

- Motion must support content and conversion — never be decorative for its own sake.
- Motion must be subtle, not attention-seeking.
- Motion must respect `prefers-reduced-motion` and degrade gracefully.
- Motion must never delay or distract from a conversion action.
- Specific motion direction (easing, duration, style) is to be derived from Figma's motion language once Figma is reviewed: `[PENDING]`

---

## 15. Responsive Principles

- The landing page must be designed and verified across three breakpoints: **Desktop**, **Tablet**, and **Mobile**.
- **Arabic (RTL)** and **English (LTR)** must behave equally well at every breakpoint. RTL is a first-class layout mode, independently verified — not assumed to mirror correctly because LTR works.

---

## 16. Success Metrics

`[PENDING — no success metrics have been defined yet.]`

Once defined, this section will cover:

- Primary conversion metric and target (e.g. conversion rate, cost per lead)
- Secondary/supporting metrics (e.g. bounce rate, scroll depth, page speed benchmarks)
- Analytics/tracking requirements needed to measure the above

---

## 17. Out of Scope

Confirmed exclusions:

- Rebuilding, cloning, or replicating the future main website or its layout/IA.
- Generating translations between Arabic and English.
- Inventing marketing copy, section content, brand positioning, or messaging.
- Rewriting or "improving" existing SEO Document copy without explicit request.
- Any implementation activity (code, scaffolding, framework initialization) — this document is business requirements only.

Additional exclusions, if any: `[PENDING]`

---

## Open Items Requiring Business Input

The following must be provided before the corresponding sections can be finalized:

- Company/industry/product description (§1)
- Business KPIs, targets, and timeline (§2)
- Secondary Landing Page goals, if any (§3)
- Detailed audience psychographics, pain points, and awareness stage (§4)
- Brand positioning and tone of voice (§6)
- Decision points and friction points within each journey stage (§7)
- Section-by-section specifications: purpose, content mapping, CTA placement per section (§9)
- Full CTA placement/repetition map beyond Final CTA, Contact Form, and Floating WhatsApp (§10)
- Post-submission behavior and compliance/consent requirements for the Contact Form (§11)
- Success metrics (§16)
- Any additional out-of-scope items (§17)

**Resolved in this update:** Information Architecture (§8), User Journey sequence (§7), Target Audience — markets and decision-maker personas (§4), CTA Strategy — primary/secondary CTA (§10), Contact Strategy — channels and form fields (§11), Primary conversion action (§3).
