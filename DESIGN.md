---
name: Golden Wallet
description: A sharp, direct, earned reward optimizer for everyday credit card users.
colors:
  wallet-ink: "oklch(11% 0.012 72)"
  wallet-panel: "oklch(16% 0.015 72)"
  wallet-field: "oklch(20% 0.018 72)"
  wallet-border: "oklch(27% 0.026 72)"
  wallet-border-strong: "oklch(32% 0.030 72)"
  wallet-text: "oklch(93% 0.039 88)"
  wallet-muted: "oklch(65% 0.045 82)"
  wallet-subtle: "oklch(44% 0.032 78)"
  gold: "oklch(76% 0.13 86)"
  gold-bright: "oklch(83% 0.15 89)"
  gold-soft: "oklch(84% 0.15 89)"
  gold-deep: "oklch(57% 0.12 80)"
  gold-brown: "oklch(48% 0.09 78)"
  success: "oklch(77% 0.18 147)"
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
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
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
  card-surface:
    backgroundColor: "{colors.wallet-panel}"
    textColor: "{colors.wallet-text}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.wallet-field}"
    textColor: "{colors.wallet-text}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
    typography: "{typography.body}"
---

# Design System: Golden Wallet

## 1. Overview

**Creative North Star: "The Sharp Wallet"**

Golden Wallet should feel like a financial tool that already has the answer ready. Warm dark surfaces, precise controls, and gold used only where it earns its place. The design is direct and spare: every element is there because it helps the user act, not because it builds atmosphere.

The system is warm dark by default. Users check a purchase category on a phone or laptop in a quick, focused moment, wanting an answer without a lecture. Gold is the primary action and confidence color, held to a strict job: brand, action, focus, ranking. Restraint here is not minimalism — it is precision.

**Key Characteristics:**
- Warm near-black surfaces with cream text.
- Gold reserved for identity, primary actions, focus, and ranking signals.
- Rounded controls and panels with consistent affordances.
- Rank ordering carried by numbers and reward values, never color alone.
- Practical density: enough to compare cards quickly without a cockpit feel.

### Color tokens

All canonical color values are OKLCH. The optimizer (`/optimizer`) currently uses hex aliases in Tailwind utility classes; those should migrate to CSS custom properties using OKLCH as the codebase evolves. The landing page (`/`) already uses OKLCH via CSS modules and is the reference implementation.

**Hex aliases for current Tailwind compatibility:**

| Token | OKLCH | Hex alias |
|---|---|---|
| wallet-ink | oklch(11% 0.012 72) | #0C0A06 |
| wallet-panel | oklch(16% 0.015 72) | #161209 |
| wallet-field | oklch(20% 0.018 72) | #1E1810 |
| wallet-border | oklch(27% 0.026 72) | #2A2318 |
| wallet-border-strong | oklch(32% 0.030 72) | #3D3218 |
| wallet-text | oklch(93% 0.039 88) | #F5EED6 |
| wallet-muted | oklch(65% 0.045 82) | #9A8A6A |
| wallet-subtle | oklch(44% 0.032 78) | #5A4F3A |
| gold | oklch(76% 0.13 86) | #D4AF37 |
| gold-bright | oklch(83% 0.15 89) | #F0C040 |
| gold-deep | oklch(57% 0.12 80) | #B8860B |
| success | oklch(77% 0.18 147) | #4ADE80 |

## 2. Colors

### Primary
- **Composed Gold** (oklch(76% 0.13 86)): The main brand and action color. Use for primary labels, focus borders, primary action gradients, selected emphasis, and the Golden Wallet mark.
- **Bright Coin** (oklch(83% 0.15 89)): Logo gradients, button hover states, strongest rank badge. Use sparingly.
- **Deep Bullion** (oklch(57% 0.12 80)): Darker side of primary buttons and gold gradients. Depth without neon energy.

### Secondary
- **Earned Green** (oklch(77% 0.18 147)): Positive reward amounts and earning signals only. Pair with text labels; meaning must not depend on color alone.

### Tertiary
Chart colors for reward-rate comparisons. Stay in charts and swatches, not general UI accents:
- Chart Blue oklch(72% 0.13 240), Chart Green oklch(77% 0.14 163), Chart Red oklch(72% 0.18 22), Chart Purple oklch(69% 0.15 295), Chart Orange oklch(76% 0.17 47).

### Neutral
- **Wallet Ink** oklch(11% 0.012 72): Page background and dark text on gold.
- **Panel Charcoal** oklch(16% 0.015 72): Primary card and container surface.
- **Field Walnut** oklch(20% 0.018 72): Inputs, result rows, recommendation blocks, compact nested surfaces.
- **Bronze Border** oklch(27% 0.026 72): Default borders, dividers, chart grid lines, dashed empty states.
- **Deep Bronze** oklch(32% 0.030 72): Tooltip borders, scrollbar thumbs.
- **Warm Cream** oklch(93% 0.039 88): Primary text on dark surfaces.
- **Muted Khaki** oklch(65% 0.045 82): Secondary descriptions, axis labels, helper text.
- **Quiet Umber** oklch(44% 0.032 78): Placeholders, disabled copy, empty-state copy.

### Named Rules

**The Gold Has a Job Rule.** Gold means brand, action, focus, or ranking. Do not scatter it as decoration.

**The No Neon Finance Rule.** Avoid high-chroma cyber colors on dark backgrounds outside chart roles.

## 3. Typography

**Font:** Geist, system-ui fallback. One family carries the full surface: headings, labels, buttons, body, data.

**Character:** Product-native and efficient. Crisp sans-serif, practical sizes, enough weight contrast to guide scanning. Modern and trustworthy without editorial drama.

### Hierarchy
- **Display** (700, 2.5rem, 1.1): Root page headline only. Never inside panels.
- **Headline** (700, 1.5–2rem, 1.2): Major screen titles, empty-state headlines.
- **Title** (600, 1rem, 1.5): Panel headers (Your Cards, Purchase Advisor, AI Advisor, Reward Rate Comparison).
- **Body** (400, 0.875rem, 1.625): Prose, recommendations, result details, form text. Cap at 65–75ch.
- **Label** (500–700, 0.75rem, uppercase, 0.05–0.2em tracking): Form labels, section tags, brand line.

### Named Rules

**The Panel Scale Rule.** Headings inside panels never compete with the main decision. Keep them compact.

**The No Gradient Text Rule.** Do not use `background-clip: text` with gradient backgrounds for emphasis. Use solid gold or stronger weight. The optimizer's hero headline currently violates this — it should be replaced with solid color.

## 4. Elevation

Depth comes from darker nested surfaces and borders first. Shadows appear only on primary panels and actions.

### Shadow Vocabulary
- **Panel Shadow** (`0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): Main panels and tooltips.
- **Mark Glow** (`0 0 16px oklch(76% 0.13 86 / 0.4)`): Logo mark only.
- **Button Rest Glow** (`0 2px 12px oklch(76% 0.13 86 / 0.25)`): Primary button at rest.
- **Button Hover Glow** (`0 4px 20px oklch(76% 0.13 86 / 0.4)`): Primary button hover.

### Named Rules

**The Surface Before Shadow Rule.** Use background steps and borders first. Add shadow only for primary panels, tooltips, the logo mark, or pressed actions.

## 5. Components

### Buttons
- **Shape:** 12px radius (pill on landing: 9999px).
- **Primary:** Gold gradient deep→main, dark ink text, 10px vertical padding, 0.875rem semibold.
- **Hover:** Brightens toward gold-bright with stronger glow.
- **Focus:** Gold border/ring matching field vocabulary.
- **Active:** Slight scale reduction.
- **Disabled:** Lower opacity, not-allowed cursor, readable text preserved.

### Chips
- **Style:** Field Walnut or Bronze Border background, 6px radius, 0.75rem text, muted khaki labels.
- **State:** Informational only. Add selected and focus states before making them interactive.

### Cards / Containers
- **Corner Style:** Main panels 16px radius. Inner rows and empty states 12px.
- **Background:** Panel surfaces Panel Charcoal. Inputs, result rows, recommendations, card-list items use Field Walnut.
- **Shadow:** Main panels use Panel Shadow. Inner rows stay flat and rely on borders.
- **Border:** Default Bronze Border. Tooltip/scrollbar strength Deep Bronze.
- **Padding:** Panel headers 24px horizontal / 16px vertical. Panel bodies 24px. Compact rows 16px.

### Inputs / Fields
- **Style:** 12px radius, Field Walnut background, Bronze Border border, Warm Cream text, Quiet Umber placeholder.
- **Focus:** Border shifts to gold with subtle gold ring (oklch(76% 0.13 86 / 0.2)).
- **Error / Disabled:** Error states are not yet implemented. Use text labels and borders, not color alone. Disabled reduces opacity while preserving contrast.

### Navigation
The landing page has a sticky nav. The optimizer has no shell nav yet. Future nav should use the same compact product vocabulary: warm dark surfaces, 0.75–0.875rem labels, clear active state, no decorative motion.

### Landing-specific
The landing page uses its own CSS module and adds:
- Radial gradient hero background (warm gold bloom at top right)
- Pill-shaped nav and CTA buttons (9999px radius)
- AI Advisor preview shell with mini card stack and answer box
- Numbered step grid with sparse layout

These patterns are brand register and should not bleed into the optimizer surface.

### Reward Ranking
Numbered circular badges plus card names, rates, and earned dollar values. Number is the primary ranking signal; gold/silver/bronze are supporting cues only.

### Reward Chart
Muted axes, Bronze Border grid lines, colored bars. Tooltips use Panel Charcoal with Deep Bronze borders. Values and labels must carry meaning; chart colors are secondary.

## 6. Do's and Don'ts

### Do:
- Use OKLCH for all new color work. Hex aliases are for Tailwind compatibility only.
- Use gold (oklch(76% 0.13 86)) for primary action, focus, and brand emphasis.
- Make the best card obvious through order, numbers, reward amount, and plain copy.
- Keep form labels visible; users should not need placeholders to understand fields.
- Use 12px and 16px radii consistently across controls and panels.
- Pair chart colors with labels, legends, and numeric values.
- Preserve WCAG AA contrast as the palette evolves.

### Don't:
- Use `background-clip: text` with gradients. Use solid gold or weight for emphasis.
- Use side-stripe borders as colored accents on cards, list items, callouts, or alerts.
- Scatter gold as decoration. It has a job: brand, action, focus, ranking.
- Turn every surface into a card. Use cards for panels, result rows, and framed tools.
- Introduce luxury clichés: excessive black-and-gold ornament, glossy textures, casino shine.
- Rely on gold alone to communicate a result, state, or ranking.
- Add gamification patterns: streaks, badges, confetti, engagement hooks.
- Let landing-specific patterns (hero gradients, pill buttons, preview shells) leak into the optimizer.
