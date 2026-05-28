---
name: Golden Wallet
description: A sharp, direct reward optimizer for everyday card decisions.
colors:
  wallet-ink: "oklch(11% 0.012 72)"
  wallet-ink-raised: "oklch(13% 0.014 72)"
  wallet-panel: "oklch(16% 0.015 72)"
  wallet-field: "oklch(20% 0.018 72)"
  wallet-field-raised: "oklch(22% 0.018 72)"
  wallet-border: "oklch(27% 0.026 72)"
  wallet-border-strong: "oklch(32% 0.030 72)"
  wallet-text: "oklch(93% 0.039 88)"
  wallet-muted: "oklch(65% 0.045 82)"
  wallet-subtle: "oklch(44% 0.032 78)"
  gold: "oklch(76% 0.13 86)"
  gold-bright: "oklch(83% 0.15 89)"
  gold-deep: "oklch(57% 0.12 80)"
  gold-brown: "oklch(48% 0.09 78)"
  earned-green: "oklch(77% 0.18 147)"
  chart-blue: "oklch(72% 0.13 240)"
  chart-green: "oklch(77% 0.14 163)"
  chart-red: "oklch(72% 0.18 22)"
  chart-purple: "oklch(69% 0.15 295)"
  chart-orange: "oklch(76% 0.17 47)"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  landing-display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "5.6rem"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "normal"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.wallet-ink}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    typography: "{typography.body}"
  button-landing:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.wallet-ink}"
    rounded: "{rounded.full}"
    padding: "0 22px"
    height: "44px"
    typography: "{typography.body}"
  panel:
    backgroundColor: "{colors.wallet-panel}"
    textColor: "{colors.wallet-text}"
    rounded: "{rounded.lg}"
    padding: "24px"
  field:
    backgroundColor: "{colors.wallet-field}"
    textColor: "{colors.wallet-text}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
    typography: "{typography.body}"
  chip:
    backgroundColor: "{colors.wallet-border}"
    textColor: "{colors.wallet-muted}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    typography: "{typography.label}"
---

# Design System: Golden Wallet

## 1. Overview

**Creative North Star: "The Composed Wallet"**

Golden Wallet is a financial utility that should feel like it already knows where the answer lives. The optimizer is quiet, compact, and exact: warm dark surfaces, cream text, visible form controls, ranked results, and gold used only when it helps the user act. The landing page may be more expressive, but it still serves a practical promise: ask your wallet which card to use.

The physical scene is a cardholder making a quick purchase decision on a phone or laptop under ordinary ambient light, wanting clarity without financial homework. The warm dark theme is chosen for focus and continuity with the wallet metaphor, not for trader-screen drama. The interface rejects crypto dashboards, bank portals, deal-page clutter, luxury shine, and gamified finance.

**Key Characteristics:**
- Warm near-black surfaces with cream text and bronze borders.
- Gold reserved for brand, primary action, focus, selected emphasis, and ranking.
- Product panels use practical density; landing sections use larger type and more negative space.
- Ranking is communicated through order, numbers, rates, and reward amounts before color.
- Motion is short and stateful; reduced-motion users get simple fades or near-instant transitions.

## 2. Colors

The palette is a restrained warm-dark system with one primary accent and a small chart vocabulary. All canonical values are OKLCH; current Tailwind utilities may use hex aliases until tokens are centralized.

### Primary
- **Composed Gold** (oklch(76% 0.13 86)): Brand mark, primary calls to action, focus borders, selected emphasis, and top ranking support.
- **Bright Coin** (oklch(83% 0.15 89)): Button hover, logo highlights, and the highest-intensity gold moments. Use sparingly.
- **Deep Bullion** (oklch(57% 0.12 80)): The darker side of gold gradients and primary button depth.
- **Aged Gold Brown** (oklch(48% 0.09 78)): Supporting depth for gold marks or gradients, never body text.

### Secondary
- **Earned Green** (oklch(77% 0.18 147)): Positive reward amounts, ready states, and earning signals. It must be paired with text or numeric values.

### Tertiary
- **Chart Blue** (oklch(72% 0.13 240)), **Chart Green** (oklch(77% 0.14 163)), **Chart Red** (oklch(72% 0.18 22)), **Chart Purple** (oklch(69% 0.15 295)), and **Chart Orange** (oklch(76% 0.17 47)): Chart and swatch roles only. Do not promote these into general UI accents.

### Neutral
- **Wallet Ink** (oklch(11% 0.012 72)): Page background and dark text on gold.
- **Raised Ink** (oklch(13% 0.014 72)): Landing gradient depth and subtle lifted backgrounds.
- **Panel Charcoal** (oklch(16% 0.015 72)): Main optimizer panels and framed preview shells.
- **Field Walnut** (oklch(20% 0.018 72)): Inputs, result rows, recommendation blocks, card-list rows, and compact nested surfaces.
- **Raised Walnut** (oklch(22% 0.018 72)): Landing prompt boxes and slightly higher inner surfaces.
- **Bronze Border** (oklch(27% 0.026 72)): Default borders, dividers, chart grid lines, and dashed empty states.
- **Deep Bronze** (oklch(32% 0.030 72)): Tooltip borders, stronger preview-shell borders, and scrollbar thumbs.
- **Warm Cream** (oklch(93% 0.039 88)): Primary text on dark surfaces and light recommendation blocks.
- **Muted Khaki** (oklch(65% 0.045 82)): Helper copy, axis labels, placeholders when stronger than subtle text is needed.
- **Quiet Umber** (oklch(44% 0.032 78)): Empty states, disabled copy, low-emphasis metadata.

### Named Rules

**The Gold Has a Job Rule.** Gold means brand, action, focus, selected emphasis, or ranking. If an element is merely decorative, it should not be gold.

**The No Neon Finance Rule.** Avoid neon-on-black, token-style colors, and high-chroma speculative cues outside the defined chart palette.

## 3. Typography

**Display Font:** Geist, system-ui fallback.
**Body Font:** Geist, system-ui fallback.
**Label/Mono Font:** Geist for labels, Geist Mono only where code or technical values require it.

**Character:** Crisp, product-native, and direct. The optimizer uses compact type so users can scan cards, rates, and amounts quickly. The landing uses heavier display weight to make the product promise immediate without drifting into luxury or crypto styling.

### Hierarchy
- **Landing Display** (900, 5.6rem desktop / 2.75rem mobile, 0.95): Landing hero only. Keep it plain, solid, and short.
- **Display** (700, 2.5rem, 1.1): Optimizer page headline only. Do not use inside panels.
- **Headline** (700, 1.5rem, 1.2): Major empty states or future section-level decisions.
- **Title** (600, 1rem, 1.5): Panel headers such as Your Cards, Purchase Advisor, AI Advisor, and Reward Rate Comparison.
- **Body** (400, 0.875rem, 1.625): Form text, helper copy, recommendations, and result details. Cap prose at 65-75ch.
- **Label** (700, 0.75rem, 0.12em, uppercase): Form labels, section tags, tooltip labels, and brand kicker text.

### Named Rules

**The Panel Scale Rule.** Headings inside panels should not compete with the card recommendation or reward amount. Keep them compact.

**The No Gradient Text Rule.** Use solid colors and weight for emphasis. Do not use gradient text or `background-clip: text`.

## 4. Elevation

Golden Wallet uses tonal layering before shadow. Main panels sit on Wallet Ink through Panel Charcoal, inner rows sit on Field Walnut, and borders carry most of the separation. Shadows are reserved for main panels, landing hero media, tooltips, logo marks, and primary actions.

### Shadow Vocabulary
- **Panel Shadow** (`0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): Main optimizer panels and chart container.
- **Landing Media Shadow** (`0 2rem 5rem oklch(8% 0.01 72 / 0.32)`): First-viewport landing visual only.
- **Preview Shadow** (`0 1.5rem 3rem oklch(8% 0.01 72 / 0.28)`): Landing AI Advisor preview shell.
- **Mark Glow** (`0 0 16px oklch(76% 0.13 86 / 0.4)`): Golden Wallet mark only.
- **Button Rest Glow** (`0 2px 12px oklch(76% 0.13 86 / 0.25)`): Primary optimizer buttons.
- **Button Hover Glow** (`0 4px 20px oklch(76% 0.13 86 / 0.4)`): Primary optimizer button hover.

### Named Rules

**The Surface Before Shadow Rule.** Use background steps and borders first. Add shadow only when it clarifies layer, affordance, or first-viewport emphasis.

## 5. Components

### Buttons
- **Shape:** Optimizer buttons use 12px radius. Landing CTAs and nav buttons use full pills.
- **Primary:** Gold gradient from Deep Bullion to Composed Gold, Wallet Ink text, 10px vertical padding in the optimizer, 44px minimum height on landing.
- **Hover / Focus:** Hover may brighten toward Bright Coin and raise the gold glow. Focus uses a visible gold outline or field-style ring. Active state may scale to 0.98.
- **Disabled:** Reduce opacity, preserve readable text, and use `not-allowed` cursor when appropriate.

### Chips
- **Style:** 6px radius, Bronze Border or Field Walnut background, muted text, compact padding.
- **State:** Informational by default, especially card reward-rate tags. Add selected and focus states before making chips interactive.

### Cards / Containers
- **Corner Style:** Optimizer panels use 16px radius; landing hero media can use 24px; inner rows and empty states use 12px.
- **Background:** Main panels use Panel Charcoal. Inputs, result rows, recommendation blocks, and saved card rows use Field Walnut.
- **Shadow Strategy:** Main panels can use Panel Shadow. Inner rows stay flat with borders.
- **Border:** Bronze Border by default; Deep Bronze only for higher-emphasis preview shells or tooltips.
- **Internal Padding:** Panel headers use 24px horizontal and 16px vertical. Panel bodies use 24px. Compact rows use 16px.

### Inputs / Fields
- **Style:** 12px radius, Field Walnut background, Bronze Border stroke, Warm Cream text, Quiet Umber placeholder.
- **Focus:** Border shifts to Composed Gold with a subtle gold ring.
- **Error / Disabled:** Use text labels, borders, and state copy. Do not rely on red or opacity alone.

### Navigation
- **Landing:** Sticky top nav with Wallet Ink translucency, a blur-backed divider, compact brand mark, muted text links, and pill CTA.
- **Optimizer:** No persistent shell navigation yet. Future optimizer nav should use compact product vocabulary, clear active state, and no decorative motion.
- **Mobile:** Preserve tap targets, keep nav actions from crowding the brand, and collapse secondary links before shrinking text.

### Reward Ranking
Use numbered circular badges, card names, rates, and earned dollar values. Number and ordering are the primary ranking signals. Gold, silver, and bronze are supporting cues only.

### Reward Chart
Use muted axes, Bronze Border grid lines, labeled legends, and grouped bars. Tooltip surfaces use Panel Charcoal with Deep Bronze borders. Chart colors are secondary to labels and numeric values.

### Landing Preview
The landing preview combines the wallet image, saved-card mini cards, a prompt box, and a light recommendation block. It belongs to the brand surface only. Do not import the hero media shell, radial bloom, or preview composition into the optimizer.

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH for all new canonical color work.
- **Do** make the best card obvious through order, rank number, reward amount, and rate.
- **Do** keep gold rare and purposeful: brand, action, focus, selected emphasis, ranking.
- **Do** keep form labels visible; placeholders are examples, not the only instruction.
- **Do** pair chart colors with legends, labels, and values.
- **Do** respect reduced motion on landing animations and CTA transitions.
- **Do** keep optimizer density practical rather than decorative.

### Don't:
- **Don't** use crypto dashboard cues: neon-on-black, trader-terminal density, token visuals, hype language, or market-screen drama.
- **Don't** use bank-portal patterns: bureaucratic copy, dull hierarchy, generic institutional forms.
- **Don't** use cashback aggregator clutter: sale-event colors, competing badges, deal-page density.
- **Don't** use luxury finance clichés: excessive black-and-gold ornament, glossy metal, casino shine.
- **Don't** add gamified finance patterns: streaks, badges, confetti, challenge loops, or engagement bait.
- **Don't** use gradient text or side-stripe borders as decorative accents.
- **Don't** rely on color alone for rankings, chart meaning, success, or failure.
- **Don't** let landing-specific hero gradients, preview shells, or pill-heavy composition bleed into optimizer panels.
