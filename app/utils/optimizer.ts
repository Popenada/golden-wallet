
// Parameters that take list of cards, spending category, and purchase amount

import { CreditCard, OptimizationResult, RewardRates } from "../types";

// Returns list of cards ranked by how much reward each one earns for category and amount
export default function getBestCard (
    cards: CreditCard[], 
    category: keyof RewardRates, 
    amount: number
    ): OptimizationResult[] {
        return cards
            .map((card) => {
                const rewardRate = card.rates[category]

                return {
                    // return card, rewardAmount, and rewardRate from Optimization result
                    card,
                    rewardRate,
                    rewardAmount: amount * (rewardRate / 100)
                }
            })
            // Sort from increasing to decreasing
            .sort((a, b) => b.rewardAmount - a.rewardAmount)
    // Map every card in cards to an OptimizationResult object and calulcate reward amount
}