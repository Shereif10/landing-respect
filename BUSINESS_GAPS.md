# BUSINESS_GAPS.md — RESPECT Landing Page

**Purpose:** This document prepares the business team for the decisions and content still required to complete the remaining sections of the Landing Page. It does not propose solutions, copy, or content — it documents exactly what is missing, why it blocks implementation, and who needs to provide what.

**Status as of this document:** Implementation Phase 1 is complete. 7 of 11 Information Architecture sections (Hero, Trusted By, The Problem, How We Help Businesses Grow, Businesses We've Helped Grow, Our Philosophy, Our Values) are implemented and approved. The 5 items below remain blocked.

---

## 1. How We Work

**PRD reference:** §8, Information Architecture #8. Journey stage: "Explain the Process" (§7).

**Why implementation is blocked:**
The SEO document contains 10 separate, per-service methodologies (e.g. Brand Systems: Discovery → Positioning → Identity → Guidelines → Rollout), each structured differently, each specific to one service. No single, unified, company-wide process is described anywhere in the SEO document. Combining or summarizing the 10 methodologies into one process would require editorial judgment — deciding what to keep, what to drop, and how to phrase it — which is content creation, not extraction of approved copy.

**Business decisions required:**
- Does a single, unified, company-wide process actually exist as a business practice?
- If yes: what are its steps, in what order, and how should each step be named/described?
- If no unified process exists: should this section be omitted, or represented differently (e.g. referencing the per-service methodologies individually, once those service pages exist)?

**Missing copy/content:**
- Process step names (count unconfirmed)
- Process step order
- Process step descriptions
- Any section-level introductory copy
- All of the above in both English and Arabic

**Owning document:**
- The business decision (whether a unified process exists) is a business decision, not a document update.
- Once decided, the actual step names/descriptions/order belong in the SEO document, as with all other landing page copy.
- PRD.md §9 (Section Specifications) is currently `[PENDING]` for this section and should be updated once the decision is made.

**Can implementation continue without it:** Yes. This section can remain unbuilt without blocking any other section already implemented or any section addressed below.

---

## 2. Final CTA

**PRD reference:** §8, Information Architecture #9. §10 CTA Strategy (Primary CTA still `[PENDING]` at the PRD level, though the button label itself has since been separately approved — see below).

**Why implementation is blocked:**
No landing-page-level closing headline or supporting/persuasive copy exists anywhere in the SEO document. The SEO document contains 10 distinct, service-specific CTAs (e.g. "Request a Free Brand Audit," "Book a Business Consultation"), none of which speaks to the business as a whole or is a candidate for a company-wide closing statement.

Note: the CTA **button label** itself ("Let's Talk") was separately approved as a reusable UI label during implementation and is already in use elsewhere on the page (Hero, navigation). That approval does not cover this section's headline/supporting copy, which is still missing.

**Business decisions required:**
- Approve a company-wide closing headline and any supporting copy for this section.
- Confirm whether "Let's Talk" is the intended button label for this specific closing moment, or whether a different label is wanted here.

**Missing copy/content:**
- Section headline text
- Any supporting/persuasive body copy
- Both of the above in both English and Arabic

**Owning document:** SEO document — the sole confirmed source of landing-page copy.

**Can implementation continue without it:** Yes. This section can remain unbuilt without blocking any other section.

---

## 3. Contact Form

**PRD reference:** §8, Information Architecture #10. §11 Contact Strategy (Contact Form Fields listed as `[PENDING]`).

**Why implementation is blocked:**
This is not only a copy gap — the form's functional definition is undecided. No form field list, field labels, placeholder copy, validation rules, consent/compliance text, or confirmation/success/error messaging exist anywhere in the SEO document or PRD.

**Business decisions required:**
- Which fields are required and which are optional (e.g. name, email, phone, company, message — none of these are confirmed).
- What validation rules apply to each field.
- What consent/compliance text is required, given the target markets (Egypt, Saudi Arabia, GCC per PRD §4) — e.g. data protection/privacy notices.
- What happens after a visitor submits the form: confirmation screen copy, redirect, follow-up expectation/SLA, and where the submitted lead data is sent (CRM, email, etc.).

**Missing copy/content:**
- Field labels and placeholder text
- Consent/legal text
- Success and error messaging
- All of the above in both English and Arabic

**Missing non-copy specification:**
- Final field list and validation rules
- Submission handling / integration destination (this is a technical/product decision, not a content one, but implementation cannot proceed without it)

**Owning document:**
- Field list, validation rules, and post-submission behavior: PRD.md §11 (Contact Strategy), to be updated once decided.
- Field labels, consent text, success/error messaging: SEO document.
- Consent/compliance text specifically may require legal review given the target markets.

**Can implementation continue without it:** Other sections are not blocked by this gap. However, per PRD §2/§3, this is the page's **primary lead-generation mechanism** — the landing page cannot fulfill its core business objective without it, even though it does not block the rest of the page from being built.

---

## 4. Footer

**PRD reference:** §8, Information Architecture #11 (final section).

**Why implementation is blocked:**
No footer content — legal/copyright text, social media links, or footer navigation — exists anywhere in the SEO document.

**Business decisions required:**
- What legal/copyright text should appear.
- Which social media accounts (if any) should be linked, and their handles/URLs.
- Whether any footer navigation content is wanted, and what it should say.

**Missing copy/content:**
- Copyright/legal notice text
- Social media handles/links
- Footer navigation labels (if applicable)
- All of the above in both English and Arabic

**Missing assets (if social links are included):** social media icon assets for each linked platform.

**Owning document:**
- Copyright/legal text: business/legal, then recorded in the SEO document.
- Social media links: business decision (which accounts to link).
- Footer navigation copy (if any): SEO document.

**Can implementation continue without it:** Yes. The Footer does not block any other section or the page's core conversion function.

---

## 5. Floating WhatsApp Button (persistent global element)

**PRD reference:** §8, Information Architecture — persistent, page-wide element, not tied to a single journey stage. §10 confirms this as the secondary CTA/contact channel.

**Why implementation is blocked:**
No WhatsApp business number/handle, greeting/pre-filled message copy, or button label/tooltip copy exists anywhere in the SEO document.

**Business decisions required:**
- Supply the actual WhatsApp business number/handle to be used.
- Decide whether a greeting or pre-filled message should open automatically when a visitor starts a chat, and if so, what it should say.
- Confirm whether any visible label/tooltip text is wanted on the button itself.

**Missing copy/content/assets:**
- WhatsApp business number (this is an operational/business asset, not copy)
- Greeting/pre-filled message copy, if wanted (English and Arabic)
- Button label/tooltip copy, if wanted (English and Arabic)

**Owning document:**
- The WhatsApp number is a business decision/asset, not a document update.
- Any greeting or label copy belongs in the SEO document once decided.

**Can implementation continue without it:** Yes. Per PRD §10/§11, this is the **secondary** contact channel (the Contact Form is primary) — its absence does not block the page's core conversion function, though the PRD identifies it as a confirmed, page-wide element intended to be present.

---

## Summary Table

| # | Section | Blocks core conversion function? | Owning document(s) |
|---|---|---|---|
| 1 | How We Work | No | Business decision → SEO document → PRD §9 |
| 2 | Final CTA | No | SEO document |
| 3 | Contact Form | **Yes** — primary lead-gen mechanism | PRD §11 (fields/behavior) + SEO document (copy) + Legal (consent text) |
| 4 | Footer | No | Business/legal → SEO document |
| 5 | Floating WhatsApp Button | No | Business decision (number) → SEO document (copy, if any) |
