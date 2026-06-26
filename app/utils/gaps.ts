import { CreditCard, RewardRates } from "../types"
import { CARD_DATABASE, CardTemplate } from "../data/cards-database"
import { categories } from "./constants"

export type GapStatus = "strong" | "average" | "weak"

export type CategoryGap = {
  category: keyof RewardRates
  bestRate: number
  bestCardName: string | null
  status: GapStatus
  suggestion: CardTemplate | null
}

export function getWalletGaps(cards: CreditCard[]): CategoryGap[] {
  return categories.map((category) => {
    let bestRate = 0
    let bestCardName: string | null = null

    for (const card of cards) {
      const effectiveRate = card.rates[category] * (card.pointValue ?? 1)
      if (effectiveRate > bestRate) {
        bestRate = effectiveRate
        bestCardName = card.name
      }
    }

    const status: GapStatus =
      bestRate >= 3 ? "strong" : bestRate >= 1.5 ? "average" : "weak"

    const suggestion: CardTemplate | null =
      status === "strong"
        ? null
        : CARD_DATABASE.filter(
            (c) =>
              !cards.some((owned) => owned.name === c.name) &&
              c.rates[category] > bestRate
          ).sort((a, b) => b.rates[category] - a.rates[category])[0] ?? null

    return { category, bestRate, bestCardName, status, suggestion }
  })
}