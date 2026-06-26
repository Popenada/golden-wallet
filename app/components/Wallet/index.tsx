"use client"

import useCardStore from "@/app/store/useCardStore"
import { CreditCard } from "@/app/types"
import { useState } from "react"

const CARD_GRADIENTS = [
  "from-[#2A1F00] via-[#3D2E00] to-[#1A1400]",
  "from-[#0A1628] via-[#0F2040] to-[#061020]",
  "from-[#1A0A28] via-[#2A1040] to-[#100618]",
  "from-[#0A2018] via-[#0F3025] to-[#061510]",
  "from-[#280A0A] via-[#401010] to-[#180606]",
]

export default function Wallet() {
  const { cards, removeCard, restoreCard } = useCardStore()
  const [removed, setRemoved] = useState<CreditCard | null>(null)

  function handleRemove(card: CreditCard) {
    removeCard(card.id)
    setRemoved(card)
    setTimeout(() => setRemoved((prev) => (prev?.id === card.id ? null : prev)), 4000)
  }

  function handleUndo() {
    if (!removed) return
    restoreCard(removed)
    setRemoved(null)
  }

  if (cards.length === 0 && !removed) {
    return (
      <div className="rounded-xl border border-dashed border-[#2A2318] bg-[#1E1810]/40 px-4 py-10 text-center">
        <p className="text-sm font-medium text-[#9A8A6A]">Your wallet is empty.</p>
        <p className="mt-2 text-xs leading-5 text-[#5A4F3A]">
          Add a card above to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {removed && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-[#3D3218] bg-[#1E1810] px-4 py-3">
          <p className="text-sm text-[#F5EED6]">{removed.name} removed.</p>
          <button
            type="button"
            onClick={handleUndo}
            className="rounded-md border border-[#3D3218] px-2.5 py-1 text-xs font-semibold text-[#D4AF37] transition-colors hover:border-[#D4AF37]/50 hover:text-[#F0C040] focus:outline-none"
          >
            Undo
          </button>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => {
          const topRates = Object.entries(card.rates)
            .filter(([, r]) => r > 0)
            .sort(([, a], [, b]) => b - a)

          return (
            <div
              key={card.id}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]} border border-[#2A2318] p-5 shadow-lg`}
            >
              {/* shimmer line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-[#F5EED6]">{card.name}</p>
                  {card.issuer && (
                    <p className="mt-0.5 text-xs text-[#9A8A6A]">{card.issuer}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(card)}
                  className="flex-shrink-0 rounded-md border border-transparent p-1 text-[#5A4F3A] transition-colors hover:border-[#7F1D1D] hover:bg-[#2A1411] hover:text-[#FCA5A5] focus:outline-none"
                  aria-label={`Remove ${card.name}`}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.47 4.47a.75.75 0 0 1 1.06 0L8 6.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L9.06 8l2.47 2.47a.75.75 0 1 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {topRates.map(([cat, r]) => (
                  <span
                    key={cat}
                    className="rounded-md bg-[#ffffff08] px-2 py-1 text-xs capitalize text-[#D4AF37]"
                  >
                    {cat} {r}%
                  </span>
                ))}
                {card.pointValue && card.pointValue > 1 && (
                  <span className="rounded-md bg-[#D4AF37]/10 px-2 py-1 text-xs text-[#D4AF37]">
                    {card.pointValue}¢/pt
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
