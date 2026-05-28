---
name: Golden Wallet
description: A confident, practical, premium reward optimizer for everyday credit card users.
colors:
  wallet-ink: "#0C0A06"
  wallet-panel: "#161209"
  wallet-field: "#1E1810"
  wallet-border: "#2A2318"
  wallet-border-strong: "#3D3218"
  wallet-text: "#F5EED6"
  wallet-muted: "#9A8A6A"
  wallet-subtle: "#5A4F3A"
  gold: "#D4AF37"
  gold-bright: "#F0C040"
  gold-soft: "#F5C842"
  gold-deep: "#B8860B"
  gold-brown: "#8B6914"
  success: "#4ADE80"
  chart-blue: "#60A5FA"
  chart-green: "#34D399"
  chart-red: "#F87171"
  chart-purple: "#A78BFA"
  chart-orange: "#FB923C"
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

**Creative North Star: "The Composed Wallet"**

Golden Wallet should feel like a well-made financial tool carried in a pocket: compact, useful, and quietly premium. The interface supports everyday decisions, so the design favors clear ranking, stable controls, and calm contrast over spectacle.

The system is warm dark by default because the product is often used in quick, focused moments: a user checking a purchase category on a phone or laptop, under mixed indoor light, wanting an answer without a lecture. Gold is the primary action and confidence color, but it must stay disciplined. Premium comes from restraint, alignment, and legibility, not from ornament.

It explicitly rejects the crypto dashboard anti-reference from PRODUCT.md: no neon-on-black speculation energy, trader-terminal density, hype language, token visuals, or dramatic market-screen aesthetics.

**Key Characteristics:**
- Warm near-black surfaces with cream text.
- Gold accents reserved for identity, labels, focus, and primary actions.
- Rounded controls and panels with consistent tactile affordances.
- Clear rank ordering supported by numbers and reward values, never color alone.
- Practical density: enough information to compare cards quickly, without feeling like a finance cockpit.

## 2. Colors

The palette is a restrained product palette: warm neutrals carry most of the interface, while gold marks confidence, action, and important focus.

### Primary
- **Composed Gold** (#D4AF37): The main brand and action color. Use for primary labels, focus borders, primary action gradients, selected emphasis, and the Golden Wallet mark.
- **Bright Coin** (#F0C040): A highlight for logo gradients, button hover states, and the strongest rank badge. Use sparingly.
- **Deep Bullion** (#B8860B): The darker side of primary buttons and gold gradients, useful for depth without introducing neon energy.

### Secondary
- **Earned Green** (#4ADE80): Used only for positive reward amounts and success-like earning signals. Pair with text labels so the meaning does not depend on color alone.

### Tertiary
- **Chart Blue** (#60A5FA), **Chart Green** (#34D399), **Chart Red** (#F87171), **Chart Purple** (#A78BFA), and **Chart Orange** (#FB923C): Data comparison colors for the reward-rate chart. These should stay in charts and swatches, not become general UI accents.

### Neutral
- **Wallet Ink** (#0C0A06): Page background and dark text on gold.
- **Panel Charcoal** (#161209): Primary card and container surface.
- **Field Walnut** (#1E1810): Inputs, result rows, recommendation blocks, and compact nested surfaces.
- **Bronze Border** (#2A2318): Default borders, dividers, chart grid lines, and dashed empty states.
- **Deep Bronze** (#3D3218): Stronger tooltip borders and scrollbar thumbs.
- **Warm Cream** (#F5EED6): Primary text on dark surfaces.
- **Muted Khaki** (#9A8A6A): Secondary descriptions, axis labels, helper text.
- **Quiet Umber** (#5A4F3A): Placeholders, disabled copy, empty-state copy.

### Named Rules

**The Gold Has a Job Rule.** Gold should mean brand, action, focus, or ranking. Do not scatter it as decoration.

**The No Neon Finance Rule.** Avoid high-chroma cyber colors on dark backgrounds outside chart roles; this is a wallet tool, not a trading terminal.

## 3. Typography

**Display Font:** Geist, with system-ui fallback  
**Body Font:** Geist, with system-ui fallback  
**Label/Mono Font:** Geist Mono is available, but the current UI does not rely on monospace.

**Character:** The typography is product-native and efficient: crisp sans-serif forms, practical sizes, and enough weight contrast to guide scanning. It should feel modern and trustworthy without editorial drama.

### Hierarchy
- **Display** (700, 2.5rem, 1.1): Root page headline only. Avoid using display sizing inside panels.
- **Headline** (700, 1.5rem to 2rem, 1.2): Reserved for future major screen titles or empty-state headlines.
- **Title** (600, 1rem, 1.5): Panel headers such as Your Cards, Purchase Advisor, AI Advisor, and Reward Rate Comparison.
- **Body** (400, 0.875rem, 1.625): Main prose, recommendations, result details, and form text. Cap long prose at 65 to 75 characters per line.
- **Label** (500 to 700, 0.75rem, uppercase with 0.05em to 0.2em letter spacing): Form labels, section tags, and the small Golden Wallet brand line.

### Named Rules

**The Panel Scale Rule.** Keep panel typography compact. The interface is a tool surface, so headings inside cards should never compete with the main decision.

## 4. Elevation

Golden Wallet uses a hybrid of tonal layering and restrained shadows. Depth mostly comes from darker nested surfaces, borders, and spacing. Shadows appear on major panels and primary actions to create tactile confidence, especially around the gold action buttons.

### Shadow Vocabulary
- **Panel Shadow** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): Tailwind `shadow-xl` on main panels and tooltips.
- **Mark Glow** (`box-shadow: 0 0 16px rgba(212,175,55,0.4)`): Logo mark only.
- **Button Rest Glow** (`box-shadow: 0 2px 12px rgba(212,175,55,0.25)`): Primary button at rest.
- **Button Hover Glow** (`box-shadow: 0 4px 20px rgba(212,175,55,0.4)`): Primary button hover state.

### Named Rules

**The Surface Before Shadow Rule.** Use background steps and borders first. Add shadow only when the element needs to read as a primary panel, tooltip, logo mark, or pressed action.

## 5. Components

### Buttons
- **Shape:** Rounded rectangle with 12px radius.
- **Primary:** Gold horizontal gradient from #B8860B to #D4AF37, dark text #0C0A06, 10px vertical padding, 0.875rem semibold text.
- **Hover / Focus:** Hover brightens toward #D4AF37 and #F0C040 with a stronger gold glow. Focus should use the same gold border/ring vocabulary as fields.
- **Active / Disabled:** Active uses a slight scale reduction. Disabled uses lower opacity with a not-allowed cursor and must preserve readable text.

### Chips
- **Style:** Reward-rate chips use Field Walnut or Bronze Border backgrounds, compact 6px radius, 0.75rem text, and muted khaki labels.
- **State:** Chips are informational, not filters. If they become interactive later, add selected and focus states before shipping.

### Cards / Containers
- **Corner Style:** Main panels use 16px radius. Inner rows and empty states use 12px radius.
- **Background:** Main panel surfaces use #161209. Inputs, result rows, recommendations, and card-list items use #1E1810.
- **Shadow Strategy:** Main panels use Panel Shadow; inner rows stay flat and rely on borders.
- **Border:** Default border is #2A2318. Tooltip and scrollbar strength may use #3D3218.
- **Internal Padding:** Panel headers use 24px horizontal and 16px vertical padding. Panel bodies use 24px. Compact rows use 16px.

### Inputs / Fields
- **Style:** 12px radius, #1E1810 background, #2A2318 border, #F5EED6 text, #5A4F3A placeholder.
- **Focus:** Border shifts to #D4AF37 with a subtle gold ring (`rgba(212,175,55,0.2)`).
- **Error / Disabled:** Error states are not yet implemented. Add text labels and borders, not color alone. Disabled should reduce opacity while preserving contrast.

### Navigation
- **Style:** There is no navigation shell yet. Future navigation should use the same compact product vocabulary: warm dark surfaces, 0.75rem to 0.875rem labels, clear active state, and no decorative motion.

### Reward Ranking

Reward rankings use numbered circular badges plus card names, reward rates, and earned dollar values. The number is the primary ranking signal; gold, silver, and bronze are supporting cues only.

### Reward Chart

Charts use muted axes, Bronze Border grid lines, and colored bars. Tooltips use Panel Charcoal with Deep Bronze borders. Chart colors should remain distinct enough for quick comparison, but values and labels must carry meaning for accessibility.

## 6. Do's and Don'ts

### Do:
- **Do** keep the interface restrained: warm neutral surfaces should carry most of every screen.
- **Do** use #D4AF37 for primary action, focus, and brand emphasis.
- **Do** make the best card obvious through order, numbers, reward amount, and plain copy.
- **Do** keep form labels visible and direct; users should not need placeholders to understand fields.
- **Do** use 12px and 16px radii consistently across controls and panels.
- **Do** pair chart colors with labels, legends, and values.
- **Do** preserve WCAG AA contrast as the palette evolves.

### Don't:
- **Don't** make Golden Wallet feel like a crypto dashboard: avoid neon-on-black speculation energy, trader-terminal density, hype language, token-style visuals, and dramatic market-screen aesthetics.
- **Don't** use gradient text for future emphasis. Use solid #D4AF37 or stronger weight instead.
- **Don't** use side-stripe borders as colored accents on cards, list items, callouts, or alerts.
- **Don't** turn every surface into a card. Use cards for actual panels, repeated result rows, and framed tools.
- **Don't** introduce luxury cliches such as excessive black-and-gold ornament, glossy metal textures, or casino-like shine.
- **Don't** rely on gold alone to communicate a result, state, or ranking.
