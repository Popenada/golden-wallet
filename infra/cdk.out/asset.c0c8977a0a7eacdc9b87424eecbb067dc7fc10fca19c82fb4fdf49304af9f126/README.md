# Golden Wallet

**Live demo:** [golden-wallet-chi.vercel.app](https://golden-wallet-chi.vercel.app)

A credit card rewards optimizer that tells you which card to use for any purchase to maximize cashback or points earned.

<img width="884" height="507" alt="GoldenWalletDemo" src="https://github.com/user-attachments/assets/4ac2a4cf-afca-4808-af5f-c4dca3015187" />


## Features

- **Card Manager** — Add cards with per-category reward rates (dining, groceries, travel, gas, entertainment, other)
- **Purchase Advisor** — Select a spending category and purchase amount to instantly rank all your cards by rewards earned
- **AI Advisor** — Describe your spending habits in plain text and get a personalized card recommendation powered by OpenAI
- **Reward Rate Chart** — Interactive grouped bar chart comparing all your cards across every spending category at a glance
- **Persistent storage** — Cards are saved to localStorage via Zustand persist middleware, so your wallet survives page refreshes

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| State | Zustand v5 with `persist` middleware |
| Charts | Recharts v3 |
| AI | OpenAI API (via `/api/advisor` route) |
| Runtime | React 19 |

## Project Structure

```
app/
├── components/
│   ├── CardManager/       # Form to add/remove cards and their reward rates
│   ├── PurchaseAdvisor/   # Category + amount selector with ranked results
│   ├── AIAdvisor/         # Free-text spending description → OpenAI recommendation
│   └── CardChart/         # Recharts grouped bar chart comparing cards by category
├── store/
│   └── useCardStore.ts    # Zustand store (cards, addCard, removeCard)
├── types/
│   └── index.tsx          # CreditCard, RewardRates, OptimizationResult types
├── utils/
│   ├── optimizer.ts       # getBestCard — ranks cards by reward amount for a category
│   └── constants.ts       # Shared category list
├── globals.css            # Tailwind base + golden wallet theme variables
└── page.tsx               # Root layout — 3-column grid + full-width chart
```

## How the Optimizer Works

`getBestCard(cards, category, amount)` maps each card to its reward amount using:

```
rewardAmount = amount × (rewardRate / 100)
```

Cards are sorted descending by `rewardAmount`, so the first result is always the highest-earning card for that category and spend.

## How the AI Advisor Works

The AI Advisor sends your saved cards and a plain-text description of your spending habits to `/api/advisor`, which forwards the request to the OpenAI API. The response is a personalized recommendation explaining which card best matches your described habits and why.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

> **Note:** The AI Advisor requires an OpenAI API key configured in your environment.

## Usage

### Adding a Card

1. Enter the card name and optional issuer
2. Fill in reward percentages for each spending category (leave at 0 if the card earns nothing for that category)
3. Click **Add Card** — it appears in your wallet immediately and persists across sessions

### Finding the Best Card

1. Select a spending category from the dropdown
2. Enter the purchase amount
3. Click **Find Best Card** — your cards are ranked by cash earned, with gold/silver/bronze badges for the top three

### Getting AI Advice

1. Add at least one card
2. Describe your typical spending habits in the text box (e.g. "I eat out a lot and travel frequently")
3. Click **Get AI Advice** — the advisor analyzes your cards against your habits and returns a recommendation

### Reading the Chart

The **Reward Rate Comparison** chart at the bottom shows a grouped bar chart with one bar per card for each spending category. Each card is assigned a distinct color, making it easy to spot which card dominates a particular category.
