// Reward rate types
export type RewardRates = {
  dining: number
  groceries: number
  travel: number
  gas: number
  entertainment: number
  other: number
}

// Credit card types
export type CreditCard = {
    id: string
    name: string
    issuer?: string
    rates: RewardRates
}
// Optimization result type of getBestCard to be returned
export type OptimizationResult = {
    card: CreditCard
    rewardAmount: number
    rewardRate: number
}
export type CardStore = {
    cards: CreditCard[] // Cards is type object of credit card type 
    addCard: (card: Omit<CreditCard, 'id'>) => void
    removeCard: (id: string) => void
}

