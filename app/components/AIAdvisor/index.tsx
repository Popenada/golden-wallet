"use client"

import { useState } from "react"
import useCardStore from "@/app/store/useCardStore"

export default function AIAdvisor() {
    const [spendingDescription, setSpendingDescription] = useState("")
    const [recommendation, setRecommendation] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { cards } = useCardStore()

    async function handleGetAdvice() {
        if (cards.length === 0 || !spendingDescription) return;

        setIsLoading(true)
        try {
            // Sends REST API POST method to backend server cards and spendingDescription
            // Backend server sends calls API to fetch OpenAI response
            const response = await fetch('/api/advisor', {
                method: 'POST',
                // Header tells server your sending a JSON
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify( {cards, spendingDescription})
            })

            // Check if response is returned from backend server
            if (!response.ok) {
                throw new Error('Request failed')
            }
            // Store data variable of response from backend server
            const data = await response.json()
            
            setRecommendation(data.recommendation)
        } catch (error) {
            console.error(error)
            setRecommendation("Sorry, something went wrong.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-[#D4AF37]">
                    Describe Your Spending
                </label>
                <textarea
                    value={spendingDescription}
                    onChange={(e) => setSpendingDescription(e.target.value)}
                    placeholder="e.g. I spend a lot on dining out and travel, occasionally groceries..."
                    rows={4}
                    className="w-full resize-none rounded-xl bg-[#1E1810] border border-[#2A2318] px-3 py-2.5 text-sm text-[#F5EED6] placeholder-[#5A4F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors"
                />
            </div>

            <button
                onClick={handleGetAdvice}
                disabled={cards.length === 0 || !spendingDescription || isLoading}
                className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] py-2.5 text-sm font-semibold text-[#0C0A06] shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all hover:from-[#D4AF37] hover:to-[#F0C040] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            >
                {isLoading ? "Analyzing..." : "Get AI Advice"}
            </button>

            {recommendation ? (
                <div className="rounded-xl border border-[#2A2318] bg-[#1E1810] p-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#D4AF37]">
                        Recommendation
                    </p>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#F5EED6]">
                        {recommendation}
                    </p>
                </div>
            ) : (
                <p className="rounded-xl border border-dashed border-[#2A2318] py-8 text-center text-sm text-[#5A4F3A]">
                    {cards.length === 0
                        ? "Add cards to get started"
                        : "Describe your spending to get personalized advice"}
                </p>
            )}
        </div>
    )
}