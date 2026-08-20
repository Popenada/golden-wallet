"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import useCardStore from "@/app/store/useCardStore"

const examples = [
    "I dine out on weekends, buy groceries weekly, and have one trip next month.",
    "I mostly spend on gas, groceries, and a few streaming subscriptions.",
]

export default function AIAdvisor() {
    const [spendingDescription, setSpendingDescription] = useState("")
    const [recommendation, setRecommendation] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { cards } = useCardStore()

    async function handleGetAdvice() {
        if (cards.length === 0 || !spendingDescription) return;

        setIsLoading(true)
        setErrorMessage("")
        setRecommendation("")
        try {
            const response = await fetch('/api/advisor', {
                // Send POST request to backend with card information and spending description
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify( {cards, spendingDescription})
            })

            if (!response.ok) {
                const data = await response.json().catch(() => null)
                throw new Error(data?.error ?? 'Request failed')
            }
            // Have a reader process to get response back from the ReadableStream pipe
            // response.body forced to be not null
            const reader = response.body!.getReader()
            const decoder = new TextDecoder()
            
            while (true) {
                const { done, value } = await reader.read()
                if (done) break
                const token = decoder.decode(value)
                setRecommendation(prev => prev + token)
            }
        } catch (error) {
            console.error(error)
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "The advisor could not read your wallet right now."
            )
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
                    Spending pattern
                </label>
                <textarea
                    value={spendingDescription}
                    onChange={(e) => {
                        setSpendingDescription(e.target.value)
                        setErrorMessage("")
                        setRecommendation("")
                    }}
                    placeholder="Dining, travel, groceries, gas, subscriptions, upcoming trips..."
                    rows={6}
                    className="w-full resize-none rounded-xl bg-[#1E1810] border border-[#2A2318] px-3 py-2.5 text-sm text-[#F5EED6] placeholder-[#5A4F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors"
                />
            </div>

            <div className="flex flex-wrap gap-2">
                {examples.map((example) => (
                    <button
                        key={example}
                        type="button"
                        onClick={() => {
                            setSpendingDescription(example)
                            setErrorMessage("")
                            setRecommendation("")
                        }}
                        className="rounded-md border border-[#2A2318] bg-[#1E1810] px-2.5 py-1.5 text-left text-xs leading-5 text-[#9A8A6A] transition-colors hover:border-[#D4AF37]/40 hover:text-[#F5EED6] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                    >
                        {example}
                    </button>
                ))}
            </div>

            <button
                onClick={handleGetAdvice}
                disabled={cards.length === 0 || !spendingDescription || isLoading}
                className="w-full rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] py-2.5 text-sm font-semibold text-[#0C0A06] shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all hover:from-[#D4AF37] hover:to-[#F0C040] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            >
                {isLoading ? "Analyzing..." : "Get AI Advice"}
            </button>

            <div aria-live="polite">
            {isLoading && !recommendation ? (
                <div className="rounded-xl border border-[#2A2318] bg-[#1E1810] p-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
                        Reading wallet
                    </p>
                    <div className="space-y-2" aria-hidden="true">
                        <div className="h-2.5 w-5/6 rounded-full bg-[#2A2318]" />
                        <div className="h-2.5 w-full rounded-full bg-[#2A2318]" />
                        <div className="h-2.5 w-2/3 rounded-full bg-[#2A2318]" />
                    </div>
                </div>
            ) : errorMessage ? (
                <div className="rounded-xl border border-[#7F1D1D] bg-[#2A1411] p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#FCA5A5]">
                        Advice unavailable
                    </p>
                    <p className="text-sm leading-relaxed text-[#F5EED6]">
                        {errorMessage}
                    </p>
                    <button
                        type="button"
                        onClick={handleGetAdvice}
                        disabled={isLoading || cards.length === 0 || !spendingDescription}
                        className="mt-4 rounded-md border border-[#7F1D1D] px-3 py-1.5 text-xs font-semibold text-[#FCA5A5] transition-colors hover:border-[#FCA5A5]/60 hover:text-[#FECACA] focus:outline-none focus:ring-1 focus:ring-[#FCA5A5]/40 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Try again
                    </button>
                </div>
            ) : recommendation ? (
                <div className="rounded-xl border border-[#2A2318] bg-[#1E1810] p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37]">
                        Recommendation
                    </p>
                    <div className="text-sm leading-relaxed text-[#F5EED6] [&_strong]:text-[#D4AF37] [&_ol]:list-decimal [&_ol]:pl-4 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-1">
                        <ReactMarkdown>{recommendation}</ReactMarkdown>
                    </div>
                    <button
                        type="button"
                        onClick={() => setRecommendation("")}
                        className="mt-4 rounded-md border border-[#2A2318] px-3 py-1.5 text-xs font-semibold text-[#9A8A6A] transition-colors hover:border-[#D4AF37]/40 hover:text-[#F5EED6] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                    >
                        Clear advice
                    </button>
                </div>
            ) : (
                <div className="rounded-xl border border-dashed border-[#2A2318] bg-[#1E1810]/40 px-4 py-8 text-center">
                    <p className="text-sm font-medium text-[#9A8A6A]">
                        {cards.length === 0
                            ? "Add cards before asking for advice."
                            : "Describe the month ahead to get a recommendation."}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#5A4F3A]">
                        Best for trips, mixed habits, and recurring spend.
                    </p>
                </div>
            )}
            </div>
        </div>
    )
}
