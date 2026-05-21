// Let user select spending category and purchase amount
"use client"

import useCardStore from "@/app/store/useCardStore"; 
import { useState } from "react";
import { OptimizationResult, RewardRates } from "@/app/types";
import getBestCard from "@/app/utils/optimizer";
import { categories } from "@/app/utils/constants";

export default function PurchaseAdvisor() {
    const [category, setCategory] = useState<keyof RewardRates>("dining")
    const [amount, setAmount] = useState(0)
    const { cards } = useCardStore();
    const [results, setResults] = useState<OptimizationResult[]>([])

    function handleOptimize() {
        // Check if there are user cards in array
        if (cards.length === 0) return;
        // Check if amount is there
        if (amount <= 0) return;
        const ranked = getBestCard(cards, category, amount)
        setResults(ranked)
    }

    return (
        <section className="flex w-full max-w-2xl flex-col gap-5">
            <select
                value={category}
                onChange={(event) => setCategory(event.target.value as keyof RewardRates)}
                className="rounded border px-3 py-2 capitalize"
            >
                {categories.map((category) =>(
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={amount}
                onChange={(event) => setAmount(parseFloat(event.target.value) || 0)}
                min="0"
                placeholder="0.00"
            />
        </section>
    )
}