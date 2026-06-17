"use client";

import useCardStore from "@/app/store/useCardStore";
import { useEffect, useState } from "react";
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

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

export default function PurchaseAdvisor() {
  const [category, setCategory] = useState<keyof RewardRates>("dining");
  const [amount, setAmount] = useState(0);
  const { cards } = useCardStore();
  const [results, setResults] = useState<OptimizationResult[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setResults((current) => {
      if (current.length === 0) return current;
      setStatus("Saved wallet changed. Run the comparison again.");
      return [];
    });
  }, [cards.length]);

  function clearResults(message = "") {
    if (results.length > 0) setResults([]);
    setStatus(message);
  }

  function handleOptimize() {
    if (cards.length === 0) {
      setStatus("Add a card before comparing a purchase.");
      return;
    }
    if (amount <= 0) {
      setStatus("Enter a purchase amount above $0.");
      return;
    }
    const nextResults = getBestCard(cards, category, amount);
    setResults(nextResults);
    setStatus(
      `${nextResults[0].card.name} is best for ${formatCurrency(amount)} in ${category}.`
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
          Category
          <div className="relative">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as keyof RewardRates);
                clearResults("Category changed. Run the comparison again.");
              }}
              className={`${inputCls} cursor-pointer appearance-none pr-8 normal-case tracking-normal`}
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
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
          Purchase Amount
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#9A8A6A]">
              $
            </span>
            <input
              type="number"
              value={amount || ""}
              onChange={(e) => {
                setAmount(parseFloat(e.target.value) || 0);
                clearResults("Amount changed. Run the comparison again.");
              }}
              min="0"
              placeholder="0.00"
              className={`${inputCls} pl-7 normal-case tracking-normal`}
            />
          </div>
        </label>
      </div>

      <button
        onClick={handleOptimize}
        disabled={cards.length === 0 || amount <= 0}
        className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] py-2.5 text-sm font-semibold text-[#0C0A06] shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all hover:from-[#D4AF37] hover:to-[#F0C040] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Find Best Card
      </button>

      <p aria-live="polite" className="text-xs leading-5 text-[#9A8A6A]">
        {status || "Results update only after you run a comparison."}
      </p>

      {results.length > 0 ? (
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-[#3D3218] bg-[#1E1810] p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#D4AF37]">
              Best card now
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h3 className="truncate text-2xl font-bold leading-tight text-[#F5EED6]">
                  {results[0].card.name}
                </h3>
                <p className="mt-1 text-sm text-[#9A8A6A]">
                  {results[0].rewardRate}% back on {category}
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-3xl font-bold leading-none text-[#4ADE80]">
                  {formatCurrency(results[0].effectiveValue)}
                </p>
                {(results[0].card.pointValue ?? 1) > 1 ? (
                  <p className="mt-1 text-xs text-[#9A8A6A]">
                    from {formatCurrency(results[0].rewardAmount)} earned · {results[0].card.pointValue}¢/pt
                  </p>
                ) : (
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9A8A6A]">
                    estimated reward
                  </p>
                )}
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            {results.slice(1).map((result, i) => (
              <li
                key={result.card.id}
                className="flex items-center gap-3 rounded-xl border border-[#2A2318] bg-[#1E1810] p-4"
              >
                <div
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    rankColors[i + 1] ?? "bg-[#2A2318] text-[#9A8A6A]"
                  }`}
                >
                  {i + 2}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#F5EED6]">
                    {result.card.name}
                  </p>
                  <p className="text-xs text-[#9A8A6A]">
                    {result.rewardRate}% rate
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#4ADE80]">
                    {formatCurrency(result.effectiveValue)}
                  </p>
                  <p className="text-xs text-[#9A8A6A]">
                    {(result.card.pointValue ?? 1) > 1 ? `${result.card.pointValue}¢/pt` : "earned"}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => clearResults("Comparison cleared. Enter a new amount when ready.")}
            className="self-start rounded-md border border-[#2A2318] px-3 py-1.5 text-xs font-semibold text-[#9A8A6A] transition-colors hover:border-[#D4AF37]/40 hover:text-[#F5EED6] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
          >
            Clear comparison
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#2A2318] bg-[#1E1810]/40 px-4 py-10 text-center">
          <p className="text-sm font-medium text-[#9A8A6A]">
            {cards.length === 0
              ? "Add cards to unlock purchase advice."
              : "Enter an amount to compare your cards."}
          </p>
          <p className="mt-2 text-xs leading-5 text-[#5A4F3A]">
            The advisor ranks by estimated reward dollars, not just rate.
          </p>
        </div>
      )}
    </div>
  );
}
