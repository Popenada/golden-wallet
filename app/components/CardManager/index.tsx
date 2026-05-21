"use client";

import { useState } from "react";
import useCardStore from "@/app/store/useCardStore";
import { RewardRates } from "@/app/types";

const initialRates: RewardRates = {
  dining: 0,
  groceries: 0,
  travel: 0,
  entertainment: 0,
  gas: 0,
  other: 0,
};

const categories: (keyof RewardRates)[] = [
  "dining",
  "groceries",
  "travel",
  "gas",
  "entertainment",
  "other",
];

const inputCls =
  "w-full rounded-xl bg-[#1E1810] border border-[#2A2318] px-3 py-2.5 text-sm text-[#F5EED6] placeholder-[#5A4F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors";

export default function CardManager() {
  const { cards, addCard, removeCard } = useCardStore();
  const [name, setName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [rates, setRates] = useState<RewardRates>(initialRates);

  function handleRateChange(category: keyof RewardRates, value: string) {
    setRates((prev) => ({ ...prev, [category]: parseFloat(value) || 0 }));
  }

  function handleAddCard(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    addCard({ name, issuer, rates });
    setName("");
    setIssuer("");
    setRates(initialRates);
  }

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleAddCard} className="flex flex-col gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Card name"
            className={inputCls}
          />
          <input
            value={issuer}
            onChange={(e) => setIssuer(e.target.value)}
            placeholder="Issuer (optional)"
            className={inputCls}
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#D4AF37]">
            Reward Rates (%)
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {categories.map((cat) => (
              <label key={cat} className="flex flex-col gap-1">
                <span className="text-xs capitalize text-[#9A8A6A]">{cat}</span>
                <div className="relative">
                  <input
                    type="number"
                    value={rates[cat] || ""}
                    onChange={(e) => handleRateChange(cat, e.target.value)}
                    placeholder="0"
                    min="0"
                    max="20"
                    step="0.01"
                    className={`${inputCls} pr-7`}
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5A4F3A]">
                    %
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] py-2.5 text-sm font-semibold text-[#0C0A06] shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all hover:from-[#D4AF37] hover:to-[#F0C040] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.98]"
        >
          Add Card
        </button>
      </form>

      {cards.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[#2A2318] py-8 text-center text-sm text-[#5A4F3A]">
          No cards added yet
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {cards.map((card) => (
            <li
              key={card.id}
              className="group flex items-start gap-3 rounded-xl border border-[#2A2318] bg-[#1E1810] p-4 transition-colors hover:border-[#D4AF37]/25"
            >
              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-[#F0C040] to-[#8B6914]" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate font-medium text-[#F5EED6]">{card.name}</p>
                  <button
                    type="button"
                    onClick={() => removeCard(card.id)}
                    className="flex-shrink-0 rounded-md px-1.5 py-0.5 text-xs text-[#5A4F3A] transition-colors hover:bg-red-950/50 hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>
                {card.issuer && (
                  <p className="text-xs text-[#9A8A6A]">{card.issuer}</p>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {Object.entries(card.rates)
                    .filter(([, r]) => r > 0)
                    .sort(([, a], [, b]) => b - a)
                    .map(([cat, r]) => (
                      <span
                        key={cat}
                        className="rounded-md bg-[#2A2318] px-2 py-0.5 text-xs capitalize text-[#9A8A6A]"
                      >
                        {cat} {r}%
                      </span>
                    ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
