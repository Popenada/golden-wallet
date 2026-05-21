import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CardStore } from '../types/index'

// Use persist middleware so credit card info is saved
// User enters card information types and card id is automatically generated
const useCardStore = create<CardStore>()(
    persist(
        (set) => ({
            // cards array that holds the state of cards 
            cards: [],

            addCard: (card) =>
                set((state) => ({
                    cards: [
                        ...state.cards,
                        {...card, id: crypto.randomUUID()},
                    ],
                })),
            removeCard: (id) =>
                set((state) => ({
                    cards: state.cards.filter((c) => c.id !== id),
                })),
        }),
        { name: 'golden_wallet-cards' }
    )
)
export default useCardStore