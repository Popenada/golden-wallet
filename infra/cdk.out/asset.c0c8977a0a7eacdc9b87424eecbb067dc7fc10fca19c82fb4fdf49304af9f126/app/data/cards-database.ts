import { RewardRates } from "../types"

export type CardTemplate = {
  name: string
  issuer: string
  rates: RewardRates
}

export const CARD_DATABASE: CardTemplate[] = [
  // Chase
  {
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    rates: { dining: 3, travel: 2, groceries: 1, gas: 1, entertainment: 1, other: 1 },
  },
  {
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    rates: { dining: 3, travel: 3, groceries: 1, gas: 1, entertainment: 1, other: 1 },
  },
  {
    name: "Chase Freedom Flex",
    issuer: "Chase",
    rates: { dining: 3, travel: 1, groceries: 1, gas: 1, entertainment: 1, other: 1 },
  },
  {
    name: "Chase Freedom Unlimited",
    issuer: "Chase",
    rates: { dining: 3, travel: 1.5, groceries: 1.5, gas: 1.5, entertainment: 1.5, other: 1.5 },
  },
  {
    name: "Chase Ink Business Cash",
    issuer: "Chase",
    rates: { dining: 2, travel: 1, groceries: 1, gas: 2, entertainment: 1, other: 1 },
  },
  // American Express
  {
    name: "Amex Gold",
    issuer: "American Express",
    rates: { dining: 4, groceries: 4, travel: 3, gas: 1, entertainment: 1, other: 1 },
  },
  {
    name: "Amex Platinum",
    issuer: "American Express",
    rates: { dining: 1, groceries: 1, travel: 5, gas: 1, entertainment: 1, other: 1 },
  },
  {
    name: "Amex Blue Cash Preferred",
    issuer: "American Express",
    rates: { dining: 1, groceries: 6, travel: 1, gas: 3, entertainment: 1, other: 1 },
  },
  {
    name: "Amex Blue Cash Everyday",
    issuer: "American Express",
    rates: { dining: 1, groceries: 3, travel: 1, gas: 2, entertainment: 1, other: 1 },
  },
  {
    name: "Amex EveryDay Preferred",
    issuer: "American Express",
    rates: { dining: 1, groceries: 3, travel: 1, gas: 1, entertainment: 1, other: 1 },
  },
  // Citi
  {
    name: "Citi Double Cash",
    issuer: "Citi",
    rates: { dining: 2, groceries: 2, travel: 2, gas: 2, entertainment: 2, other: 2 },
  },
  {
    name: "Citi Premier",
    issuer: "Citi",
    rates: { dining: 3, groceries: 3, travel: 3, gas: 3, entertainment: 1, other: 1 },
  },
  {
    name: "Citi Custom Cash",
    issuer: "Citi",
    rates: { dining: 5, groceries: 1, travel: 1, gas: 1, entertainment: 1, other: 1 },
  },
  // Capital One
  {
    name: "Capital One Venture X",
    issuer: "Capital One",
    rates: { dining: 2, groceries: 2, travel: 2, gas: 2, entertainment: 2, other: 2 },
  },
  {
    name: "Capital One Venture",
    issuer: "Capital One",
    rates: { dining: 2, groceries: 2, travel: 2, gas: 2, entertainment: 2, other: 2 },
  },
  {
    name: "Capital One SavorOne",
    issuer: "Capital One",
    rates: { dining: 3, groceries: 3, travel: 1, gas: 1, entertainment: 3, other: 1 },
  },
  {
    name: "Capital One Quicksilver",
    issuer: "Capital One",
    rates: { dining: 1.5, groceries: 1.5, travel: 1.5, gas: 1.5, entertainment: 1.5, other: 1.5 },
  },
  // Wells Fargo
  {
    name: "Wells Fargo Active Cash",
    issuer: "Wells Fargo",
    rates: { dining: 2, groceries: 2, travel: 2, gas: 2, entertainment: 2, other: 2 },
  },
  {
    name: "Wells Fargo Autograph",
    issuer: "Wells Fargo",
    rates: { dining: 3, groceries: 1, travel: 3, gas: 3, entertainment: 3, other: 1 },
  },
  // Bank of America
  {
    name: "Bank of America Customized Cash Rewards",
    issuer: "Bank of America",
    rates: { dining: 2, groceries: 2, travel: 1, gas: 3, entertainment: 1, other: 1 },
  },
  {
    name: "Bank of America Travel Rewards",
    issuer: "Bank of America",
    rates: { dining: 1.5, groceries: 1.5, travel: 1.5, gas: 1.5, entertainment: 1.5, other: 1.5 },
  },
  // Discover
  {
    name: "Discover it Cash Back",
    issuer: "Discover",
    rates: { dining: 1, groceries: 1, travel: 1, gas: 1, entertainment: 1, other: 1 },
  },
  {
    name: "Discover it Miles",
    issuer: "Discover",
    rates: { dining: 1.5, groceries: 1.5, travel: 1.5, gas: 1.5, entertainment: 1.5, other: 1.5 },
  },
  // US Bank
  {
    name: "US Bank Cash+",
    issuer: "US Bank",
    rates: { dining: 2, groceries: 2, travel: 1, gas: 1, entertainment: 5, other: 1 },
  },
  {
    name: "US Bank Altitude Go",
    issuer: "US Bank",
    rates: { dining: 4, groceries: 2, travel: 2, gas: 2, entertainment: 2, other: 1 },
  },
]
