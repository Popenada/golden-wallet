"use client"

import useCardStore from "@/app/store/useCardStore"
import { getWalletGaps, GapStatus } from "@/app/utils/gaps"

const statusConfig: Record<GapStatus, { label: string; dot: string; text: string }> = {
  strong: { label: "Strong",  dot: "bg-[#4ADE80]", text: "text-[#4ADE80]" },
  average: { label: "Average", dot: "bg-[#FBBF24]", text: "text-[#FBBF24]" },
  weak:    { label: "Gap",     dot: "bg-[#F87171]", text: "text-[#F87171]" },
}

export default function WalletGaps() {
  const { cards } = useCardStore()

  if (cards.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-[#2A2318] py-8 text-center text-sm text-[#5A4F3A]">
        Add cards to see where your wallet has gaps.
      </p>
    )
  }

  const gaps = getWalletGaps(cards)

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {gaps.map(({ category, bestRate, bestCardName, status, suggestion }) => {
        const cfg = statusConfig[status]
        return (
          <div
            key={category}
            className="flex flex-col gap-2 rounded-xl border border-[#2A2318] bg-[#1E1810] p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium capitalize text-[#F5EED6]">
                {category}
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                <span className={`text-xs font-semibold ${cfg.text}`}>
                  {cfg.label}
                </span>
              </div>
            </div>

            <p className="text-2xl font-bold leading-none text-[#F5EED6]">
              {bestRate > 0 ? `${bestRate.toFixed(1)}%` : "—"}
            </p>

            <p className="text-xs text-[#9A8A6A]">
              {bestCardName ?? "No card covers this category"}
            </p>

            {suggestion && (
              <div className="mt-1 rounded-lg border border-[#2A2318] bg-[#161209] px-3 py-2">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
                  Consider adding
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#F5EED6]">
                  {suggestion.name}
                </p>
                <p className="text-xs text-[#9A8A6A]">
                  {suggestion.rates[category]}% on {category}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
