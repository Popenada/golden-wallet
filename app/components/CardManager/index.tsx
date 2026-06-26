"use client";

import { useState } from "react";
import useCardStore from "@/app/store/useCardStore";
import { RewardRates } from "@/app/types";
import { CARD_DATABASE, CardTemplate } from "@/app/data/cards-database";

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

type Notice = { tone: "success" | "error"; message: string }

export default function CardManager() {
  const { addCard } = useCardStore();
  const [name, setName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [rates, setRates] = useState<RewardRates>(initialRates);
  const [pointValue, setPointValue] = useState(1);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions: CardTemplate[] =
    query.length > 0
      ? CARD_DATABASE.filter(
          (c) =>
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            c.issuer.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6)
      : [];

  function handleSelectTemplate(template: CardTemplate) {
    setName(template.name);
    setIssuer(template.issuer);
    setRates(template.rates);
    setQuery("");
    setShowSuggestions(false);
  }

  const hasRewardRate = Object.values(rates).some((rate) => rate > 0);
  const canAddCard = name.trim().length > 0 && hasRewardRate;

  function handleRateChange(category: keyof RewardRates, value: string) {
    setRates((prev) => ({ ...prev, [category]: parseFloat(value) || 0 }));
  }

  function handleAddCard(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setNotice({ tone: "error", message: "Enter a card name before saving." });
      return;
    }
    if (!hasRewardRate) {
      setNotice({
        tone: "error",
        message: "Add at least one reward rate above 0% before saving.",
      });
      return;
    }
    addCard({ name: trimmedName, issuer: issuer.trim(), rates, pointValue });
    setName("");
    setIssuer("");
    setRates(initialRates);
    setPointValue(1);
    setNotice({ tone: "success", message: `${trimmedName} added to your wallet.` });
  }


  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleAddCard} className="flex flex-col gap-4">
        <div className="relative flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
            Search cards
          </label>
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            placeholder="Chase Sapphire, Amex Gold..."
            className={`${inputCls} normal-case tracking-normal`}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full z-10 mt-1 w-full overflow-hidden rounded-xl border border-[#2A2318] bg-[#161209] shadow-xl">
              {suggestions.map((card) => (
                <li key={card.name}>
                  <button
                    type="button"
                    onMouseDown={() => handleSelectTemplate(card)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-[#2A2318]"
                  >
                    <span className="text-sm font-medium text-[#F5EED6]">{card.name}</span>
                    <span className="flex-shrink-0 text-xs text-[#9A8A6A]">{card.issuer}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
            Card name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Everyday Cash"
              className={`${inputCls} normal-case tracking-normal`}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
            Issuer
            <input
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              placeholder="Optional"
              className={`${inputCls} normal-case tracking-normal`}
            />
          </label>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
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
          <p className="mt-2 text-xs leading-5 text-[#5A4F3A]">
            Use the card&apos;s reward percentage for each category. Leave unused
            categories at 0.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
            Point Value (¢)
          </label>
          <div className="relative">
            <input
              type="number"
              value={pointValue}
              onChange={(e) => setPointValue(parseFloat(e.target.value) || 1)}
              min="0.1"
              max="10"
              step="0.1"
              className={`${inputCls} pr-7`}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5A4F3A]">
              ¢
            </span>
          </div>
          <p className="text-xs leading-5 text-[#5A4F3A]">
            1.0 = cash back · Chase UR ≈ 2.0 · Amex MR ≈ 1.8 · Citi TY ≈ 1.7
          </p>
        </div>

        <button
          type="submit"
          disabled={!canAddCard}
          className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] py-2.5 text-sm font-semibold text-[#0C0A06] shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all hover:from-[#D4AF37] hover:to-[#F0C040] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.98]"
        >
          Add Card
        </button>
      </form>

      <div aria-live="polite" className="min-h-0">
        {notice && (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              notice.tone === "error"
                ? "border-[#7F1D1D] bg-[#2A1411] text-[#FCA5A5]"
                : "border-[#3D3218] bg-[#1E1810] text-[#F5EED6]"
            }`}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="leading-5">{notice.message}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
