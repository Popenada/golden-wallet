"use client";

import useCardStore from "@/app/store/useCardStore";
import { useState } from "react";
import { OptimizationResult, RewardRates } from "@/app/types";
import getBestCard from "@/app/utils/optimizer";
import { categories } from "@/app/utils/constants";

const inputCls =
  "w-full rounded-xl bg-[#1E1810] border border-[#2A2318] px-3 py-2.5 text-sm text-[#F5EED6] placeholder-[#5A4F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors";

const rankColors: Record<number, string> = {
  0: "bg-gradient-to-br from-[#F0C040] to-[#B8860B] text-[#0C0A06]",
  1: "bg-gradient-to-br from-[#C0C0C0] to-[#8A8A8A] text-[#0C0A06]",
  2: "bg-gradient-to-br from-[#CD7F32] to-[#8B4513] text-[#0C0A06]",
};

export default function PurchaseAdvisor() {
  const [category, setCategory] = useState<keyof RewardRates>("dining");
  const [amount, setAmount] = useState(0);
  const { cards } = useCardStore();
  const [results, setResults] = useState<OptimizationResult[]>([]);

  function handleOptimize() {
    if (cards.length === 0 || amount <= 0) return;
    setResults(getBestCard(cards, category, amount));
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-wider text-[#D4AF37]">
          Category
        </label>
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as keyof RewardRates)}
            className={`${inputCls} cursor-pointer appearance-none pr-8`}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9A8A6A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-wider text-[#D4AF37]">
          Purchase Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#9A8A6A]">
            $
          </span>
          <input
            type="number"
            value={amount || ""}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            min="0"
            placeholder="0.00"
            className={`${inputCls} pl-7`}
          />
        </div>
      </div>

      <button
        onClick={handleOptimize}
        disabled={cards.length === 0 || amount <= 0}
        className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] py-2.5 text-sm font-semibold text-[#0C0A06] shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all hover:from-[#D4AF37] hover:to-[#F0C040] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Find Best Card
      </button>

      {results.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {results.map((result, i) => (
            <li
              key={result.card.id}
              className="flex items-center gap-3 rounded-xl border border-[#2A2318] bg-[#1E1810] p-4"
            >
              <div
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  rankColors[i] ?? "bg-[#2A2318] text-[#9A8A6A]"
                }`}
              >
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#F5EED6]">
                  {result.card.name}
                </p>
                <p className="text-xs text-[#9A8A6A]">{result.rewardRate}% rate</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#4ADE80]">
                  ${result.rewardAmount.toFixed(2)}
                </p>
                <p className="text-xs text-[#9A8A6A]">earned</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-dashed border-[#2A2318] py-8 text-center text-sm text-[#5A4F3A]">
          {cards.length === 0
            ? "Add cards to get started"
            : "Enter an amount to compare cards"}
        </p>
      )}
    </div>
  );
}
