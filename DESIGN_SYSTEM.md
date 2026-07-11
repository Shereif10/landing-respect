# RESPECT — Design Language

Source: Figma file "Respect New" (`V5pzeX8I915VtuCx1y9cFN`) — Page "Design System" (`975:14184`) — Frame "Design System" (`975:16160`).

Scope: This document captures only the **design language** (tokens and component styling attributes) found in the Design System frame. Page composition, layout arrangement, and section structure were intentionally not inspected or documented here.

---

## Color Palette

| Name | Value | Usage | Notes |
|---|---|---|---|
| Main Colors/Normal | `#EFBA43` | Primary accent — strokes on cards, active nav text, section highlight labels (e.g. "Home", "Peace", "Our Vision" is main-green though) | Gold/amber accent |
| Main Colors/main | `#00770E` | Primary brand green — CTA button fill, headline accents ("Our Story", "Our Mission"), highlighted card fill | Core brand color |
| Main Colors/Light | `#FFFDFA` | Card backgrounds, input backgrounds | Off-white / cream |
| Grey/grey-1 | `#F5F5F5` | Text on dark/green fills (footer, buttons, nav) | Near-white |
| Grey/grey-2 | `#DFDFDF` | Secondary text on dark fills (card descriptions on green bg) | |
| Grey/grey-5 | `#929292` | Input placeholder/value text | |
| Grey/grey-7 | `#686868` | Secondary body text on light cards | |
| Grey/grey-9 | `#464646` | Primary body text on light cards, input labels | |
| Grey/grey-10 | `#21201F` | Heading text (service card titles) | |
| Unnamed tint | `#EAF0E8` | Subtext on the highlighted (green) value card | Raw fill, not a named Figma variable — **[PENDING naming]** |

**[PENDING]** Full grey scale (grey-3, grey-4, grey-6, grey-8) — not present in this frame.
**[PENDING]** Semantic/functional colors (success, error, warning, info) — none observed.

**Notes:**
- A purple `#8A38F5` dashed stroke appears around several component-set groupings in this frame. This is a Figma documentation/annotation convention (marking "this is a component group"), not a brand color token — excluded from the palette above.
- Section-level canvas background fills (`#2F312E`, `#444444`, `#26262B`, `rgba(255,255,255,0.1)`) were seen only as Design-System-page organizational backgrounds, not as UI tokens — excluded as out of scope (page composition).

---

## Typography

### Font Families
| Name | Value | Usage | Notes |
|---|---|---|---|
| Primary | Roobert TRIAL | All Title and Body text styles | Trial license name as labeled in Figma — flag for licensing check before production use |
| Secondary | Roboto | Large Title styles only (56px, 40px) | Used exclusively for large display headlines |

### Font Weights
| Name | Value | Usage | Notes |
|---|---|---|---|
| Regular | 400 | Body/Title "Regular" variants | |
| Medium | 500 | Body/Title "Medium" variants | |
| Bold (Roobert) | 750 | Body/Title "Bold" variants | Non-standard weight value (750, not 700) — verify variable font supports it |
| Bold (Roboto) | 700 | Large Title "Bold" variants | Standard bold |

### Font Sizes / Type Scale
| Name | Size | Family/Weight | Line Height | Usage |
|---|---|---|---|---|
| Large Title/56px/Bold | 56px | Roboto Bold (700) | 1.2em | Major section headlines ("Our Story", "Our Mission") |
| Large Title/40px/40 Bold | 40px | Roboto Bold (700) | 1.25em | Service card titles |
| Title/32px/Bold | 32px | Roobert Bold (750) | 1.2em | Section labels (footer headings, CTA button text) |
| Title/24px/Bold | 24px | Roobert Bold (750) | 1.2em | Card titles, nav labels, value names |
| Title/24px/Medium | 24px | Roobert Medium (500) | 1.2em | Card body copy, subheadings |
| Title/24px/regular | 24px | Roobert Regular (400) | 1.2em | Secondary descriptive text |
| Title/18px/Bold | 18px | Roobert Bold (750) | 1.2em | Input labels |
| Title/18px/Medium | 18px | Roobert Medium (500) | 1.2em | Value card subtext |
| Title/18px/regular | 18px | Roobert Regular (400) | 1.2em | Social link labels, trust-badge body copy |
| Body/16px/Bold | 16px | Roobert Bold (750) | 1.2em | Nav "Contact" pill, bullet list emphasis |
| Body/16px/Medium | 16px | Roobert Medium (500) | 1.2em | Phone numbers, contact details |
| Body/16px/Regular | 16px | Roobert Regular (400) | 1.2em | Body paragraphs, bullet lists, input values |

### Line Heights
- Standard: `1.2em` (used across nearly all styles)
- Exception: `1.25em` on Large Title/40px/40 Bold
- **[PENDING]** No other line-height variants observed.

### Letter Spacing
- **[PENDING]** — No letter-spacing values were present on any inspected text style; Figma returned no tracking data for this frame.

---

## Spacing Scale

Observed gap/padding values across components in this frame:

| Value | Observed as |
|---|---|
| 8px | small gap (nav pill padding, icon container padding) |
| 10px | gap (icon container, nav pill content gap) |
| 16px | gap/padding (card internal gaps, input padding-x) |
| 24px | gap (card content gap, input padding-y) |
| 32px | gap/padding (standard card padding, section gaps) |
| 48px | padding (Our Team card) |
| 64px | gap/padding (large section padding, service card padding) |
| 128px | padding (CTA button horizontal padding, section horizontal padding) |
| 160px | padding (outer content padding) |

**Notes:** Values approximate an 8px base unit (8, 16, 24, 32, 48, 64, 128, 160). No explicit named spacing tokens (e.g. `space-1`, `space-2`) were found in Figma — this table is inferred from raw padding/gap values, not from a documented scale.

**[PENDING]** Officially named spacing tokens/variables, if they exist elsewhere in the file.

---

## Grid

- **[PENDING]** — No explicit grid/column/gutter definitions (Figma layout grids) were exposed by the API for this frame.

---

## Container Widths

| Observed Width | Context |
|---|---|
| 1408px | Card/component fixed width (Our Story, Our Mission containers) |
| 1728px–1729px | Footer/content section fixed width |
| 1604px | Values component-set fixed width |

**Notes:** These are component fixed-widths observed within the Design System frame, not a confirmed page container/max-width token. Horizontal outer padding of 160px was observed consistently alongside these widths.

**[PENDING]** Confirmed responsive container/max-width tokens (desktop/tablet/mobile).

---

## Border Radius

| Value | Usage |
|---|---|
| 8px 8px 96px 8px | Value cards (Peace, Love, Humanity, Forgiveness, Humility), trust-badge cards |
| 8px 8px 128px 8px | Story/Culture/Mission/Vision cards |
| 16px 16px 128px 16px | Service cards (e.g. "Websites & SEO") |
| 12px 12px 96px 12px | Primary CTA button ("Start your project") |
| 8px 8px 8px 64px | "Our Team" card |
| 2px 2px 24px 2px | Small icon/QR container |
| 12px | Input field |
| 8px | Nav pill (hover/pressed variant only) |

**Notes:** A consistent asymmetric pattern appears throughout: three small/sharp corners paired with one large, exaggerated corner radius (most often bottom-right, but bottom-left on the Team card). This appears to be an intentional brand shape signature rather than incidental.

---

## Shadows

- **[PENDING]** — No shadow/effect properties (drop shadow, inner shadow, blur) were present on any node inspected in this frame.

---

## Buttons

| Variant | Fill | Text Style | Text Color | Padding | Radius | Notes |
|---|---|---|---|---|---|---|
| Primary CTA | Main Colors/main (`#00770E`) | Title/32px/Bold | Grey/grey-1 (`#F5F5F5`) | 32px 128px | 12px 12px 96px 12px | e.g. "Start your project" |
| Nav pill — default | none specified | Title/24px/Bold | Grey/grey-1 | 10px | none (0) | |
| Nav pill — pressed | none specified | Title/24px/Bold | Main Colors/Normal (`#EFBA43`) | 10px | none (0) | Color shifts to accent gold on press |
| Nav pill — variant3 (likely hover) | none specified | Title/24px/Bold | Main Colors/Normal | 10px | 8px | Adds radius vs. default/pressed |
| Text/contact link | not specified | Body/16px/Bold | Grey/grey-1 | — | — | Fixed box 117×29, likely a link-style button — **[PENDING]** fill/border confirmation |

**[PENDING]** Disabled state styling — not present in this frame.

---

## Inputs

| Element | Value |
|---|---|
| Label style | Title/18px/Bold, color Grey/grey-9 |
| Field fill | Main Colors/Light (`#FFFDFA`) |
| Field border | Grey/grey-9 (`#464646`), 1px |
| Field radius | 12px |
| Field padding | 24px (vertical) 16px (horizontal) |
| Value/placeholder text style | Body/16px/Regular, color Grey/grey-5 (`#929292`) |

**Notes:** Only a single text input ("Email Address") was present in this frame. No variants for focus, error, or disabled states were found.

**[PENDING]** Textarea, select, checkbox, radio styling — not present in this frame.

---

## Cards

| Card Type | Fill | Border | Padding | Radius | Fixed Size |
|---|---|---|---|---|---|
| Story/Mission/Vision/Culture | Main Colors/Light | Main Colors/Normal, 2px | 32px | 8px 8px 128px 8px | 1408px wide (container) |
| Value card (standard) | Main Colors/Light | Main Colors/Normal, 2px | 32px | 8px 8px 96px 8px | 256×376 |
| Value card (highlighted) | Main Colors/main | Main Colors/Normal, 2px | 32px | 8px 8px 96px 8px | 296×434 |
| Service card (default) | Main Colors/Light | Main Colors/Normal, 2px | 64px | 16px 16px 128px 16px | 448×705 |
| Service card (alt) | Main Colors/Light | Main Colors/main, 2px | 64px | 16px 16px 128px 16px | 451×705 |
| Trust badge (dark) | Main Colors/main | none | 32px | 8px 8px 96px 8px | 698×172 |
| Trust badge (light) | Main Colors/Light | Main Colors/Normal, 1px | 32px | 8px 8px 96px 8px | 698×172 |
| Team card | Main Colors/Light | Main Colors/Normal, 2px | 48px | 8px 8px 8px 64px | 268 wide |

---

## Icons

| Element | Value |
|---|---|
| Standard icon container | 48×48, padding 8px, gap 10px, radius 2px 2px 24px 2px |
| Icon container fill | `rgba(253,248,236,0.05)` (on green) or `rgba(55,55,55,0.05)` (on light) — near-transparent tint of surrounding surface |
| Social icons | Component instances: "Instagram - Original" (`1185:5478`), "LinkedIn - Dark" (`1185:5484`) — fill Grey/grey-1 |
| Generic icon glyph sizing | Variable per icon (e.g. Facebook glyph 14.59×26.08px), typically constrained within a 32px-wide container |

**[PENDING]** A confirmed, complete icon set/library — only a handful of icon instances (social, QR/proof) were visible in this frame.

---

## Motion Principles

- **[PENDING]** — Figma static frame data does not expose interaction/prototype/motion specs. No animation, transition, or easing data is available from this inspection. Motion principles must come from the PRD/Blueprint or a dedicated prototype inspection, not this frame.

---

## Responsive Principles

- **[PENDING]** — This frame (Design System, desktop-scale artboard) does not contain breakpoint definitions or responsive behavior rules. Mobile-specific frames exist on the separate "Mobile design" page, which was explicitly out of scope for this inspection.

---

## Open Items Requiring Follow-Up

1. Letter spacing values — not exposed anywhere in this frame.
2. Named spacing token scale — inferred from raw values only, not confirmed as documented tokens.
3. Grid/column system — not exposed by the API for this frame.
4. Shadows/elevation — none found; confirm whether elevation is intentionally flat or simply not present in this frame.
5. Roobert TRIAL is a trial font license — confirm production font licensing before build.
6. Motion and responsive rules must be sourced from PRD/Blueprint, not Figma.
