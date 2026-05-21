# Golden Wallet

**Live demo:** [golden-wallet-chi.vercel.app](https://golden-wallet-chi.vercel.app)

A credit card rewards optimizer that tells you which card to use for any purchase to maximize cashback or points earned.

## Features

- **Card Manager** — Add cards with per-category reward rates (dining, groceries, travel, gas, entertainment, other)
- **Purchase Advisor** — Select a spending category and purchase amount to instantly rank all your cards by rewards earned
- **Persistent storage** — Cards are saved to localStorage via Zustand persist middleware, so your wallet survives page refreshes

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| State | Zustand v5 with `persist` middleware |
| Runtime | React 19 |

## Project Structure

```
app/
├── components/
│   ├── CardManager/       # Form to add/remove cards and their reward rates
│   └── PurchaseAdvisor/   # Category + amount selector with ranked results
├── store/
│   └── useCardStore.ts    # Zustand store (cards, addCard, removeCard)
├── types/
│   └── index.tsx          # CreditCard, RewardRates, OptimizationResult types
├── utils/
│   ├── optimizer.ts       # getBestCard — ranks cards by reward amount for a category
│   └── constants.ts       # Shared category list
├── globals.css            # Tailwind base + golden wallet theme variables
└── page.tsx               # Root layout with two-panel grid
```

## How the Optimizer Works

`getBestCard(cards, category, amount)` maps each card to its reward amount using:

```
rewardAmount = amount × (rewardRate / 100)
```

Cards are then sorted descending by `rewardAmount`, so the first result is always the highest-earning card for that category and spend.

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

## Adding a Card

1. Enter the card name and optional issuer
2. Fill in reward percentages for each spending category (leave at 0 if the card earns nothing for that category)
3. Click **Add Card** — it appears in your wallet immediately and persists across sessions

## Finding the Best Card

1. Select a spending category from the dropdown
2. Enter the purchase amount
3. Click **Find Best Card** — your cards are ranked by cash earned, with gold/silver/bronze badges for the top three
