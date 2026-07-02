"use client"

import { useState } from "react"
import CardManager from "../components/CardManager";
import PurchaseAdvisor from "../components/PurchaseAdvisor";
import AIAdvisor from "../components/AIAdvisor";
import CardChart from "../components/CardChart";
import WalletGaps from "../components/WalletGaps";
import Wallet from "../components/Wallet";
import type { ReactNode } from "react";

type Tab = "purchase" | "ai" | "wallet" | "insights"

function AdvisorPanel({
  title,
  eyebrow,
  description,
  children,
  id,
  className = "",
}: {
  title: string;
  eyebrow: string;
  description: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-8 overflow-hidden rounded-2xl border border-[#2A2318] bg-[#161209] shadow-xl ${className}`}
    >
      <div className="border-b border-[#2A2318] px-5 py-4 sm:px-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
          {eyebrow}
        </p>
        <div className="mt-1 flex flex-col gap-1">
          <h2 className="text-base font-semibold leading-6 text-[#F5EED6]">
            {title}
          </h2>
          <p className="max-w-[64ch] text-xs leading-5 text-[#9A8A6A]">
            {description}
          </p>
        </div>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}

const tabs: { id: Tab; label: string; icon: ReactNode }[] = [
  {
    id: "purchase",
    label: "Purchase",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    id: "wallet",
    label: "Wallet",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
  },
  {
    id: "insights",
    label: "Insights",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("purchase")

  return (
    <>
      {/* ── MOBILE LAYOUT ── */}
      <div className="flex min-h-screen flex-col bg-[#0C0A06] lg:hidden">
        {/* compact header */}
        <header className="flex items-center gap-3 border-b border-[#2A2318] bg-[#161209] px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C040] via-[#D4AF37] to-[#8B6914] shadow-[0_0_12px_rgba(212,175,55,0.4)]">
            <span className="text-[9px] font-black tracking-tight text-[#0C0A06]">GW</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Golden Wallet
          </span>
        </header>

        {/* tab content */}
        <div className="flex-1 overflow-y-auto p-4 pb-24">
          {activeTab === "purchase" && (
            <AdvisorPanel
              eyebrow="Exact answer"
              title="Purchase Advisor"
              description="Pick the category and amount to find the best card in your wallet."
            >
              <PurchaseAdvisor />
            </AdvisorPanel>
          )}

          {activeTab === "ai" && (
            <AdvisorPanel
              eyebrow="Pattern answer"
              title="AI Advisor"
              description="Describe your spending habits to get a broader recommendation."
            >
              <AIAdvisor />
            </AdvisorPanel>
          )}

          {activeTab === "wallet" && (
            <div className="flex flex-col gap-4">
              <AdvisorPanel
                eyebrow="Your wallet"
                title="Cards you carry"
                description="Cards you've added. The advisor uses this for every recommendation."
              >
                <Wallet />
              </AdvisorPanel>
              <AdvisorPanel
                eyebrow="Wallet setup"
                title="Add a card"
                description="Search for your card or enter rates manually."
              >
                <CardManager />
              </AdvisorPanel>
            </div>
          )}

          {activeTab === "insights" && (
            <div className="flex flex-col gap-4">
              <AdvisorPanel
                eyebrow="Wallet health"
                title="Coverage Gaps"
                description="See where your wallet is strong and where a better card could earn you more."
              >
                <WalletGaps />
              </AdvisorPanel>
              <AdvisorPanel
                eyebrow="Rate map"
                title="Reward Rate Comparison"
                description="Scan where each card wins across categories."
              >
                <CardChart />
              </AdvisorPanel>
            </div>
          )}
        </div>

        {/* bottom tab bar */}
        <nav className="fixed bottom-0 inset-x-0 border-t border-[#2A2318] bg-[#161209] pb-safe">
          <div className="grid grid-cols-4">
            {tabs.map((tab) => {
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    active ? "text-[#D4AF37]" : "text-[#5A4F3A]"
                  }`}
                >
                  <span className={active ? "text-[#D4AF37]" : "text-[#5A4F3A]"}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              )
            })}
          </div>
        </nav>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <main className="hidden min-h-screen bg-[#0C0A06] px-4 py-6 text-[#F5EED6] lg:block sm:px-6 lg:py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <header className="overflow-hidden rounded-3xl border border-[#2A2318] bg-[#161209] shadow-xl">
            <div className="flex flex-col gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid lg:grid-cols-[1fr_360px] lg:items-end">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C040] via-[#D4AF37] to-[#8B6914] shadow-[0_0_16px_rgba(212,175,55,0.4)]">
                    <span className="text-[10px] font-black tracking-tight text-[#0C0A06]">GW</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    Golden Wallet
                  </span>
                </div>
                <div className="mt-8 max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A8A6A]">
                    Financial advisor
                  </p>
                  <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-normal text-[#F5EED6] sm:text-5xl">
                    The right card, before you pay.
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[#9A8A6A] sm:text-base">
                    Save the cards you carry, compare the exact purchase in front of you, then use AI for the spending patterns that do not fit a single category.
                  </p>
                </div>
              </div>
              <div className="grid gap-2 rounded-2xl border border-[#2A2318] bg-[#1E1810] p-3">
                {[
                  ["01", "Add card rates"],
                  ["02", "Rank this purchase"],
                  ["03", "Ask about habits"],
                ].map(([step, label]) => (
                  <div
                    key={step}
                    className="flex items-center justify-between gap-3 rounded-xl border border-[#2A2318] px-3 py-2.5"
                  >
                    <span className="text-xs font-bold text-[#D4AF37]">{step}</span>
                    <span className="text-sm font-medium text-[#F5EED6]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <AdvisorPanel
            eyebrow="Your wallet"
            title="Cards you carry"
            description="Cards added below appear here. The advisor uses this wallet for every recommendation."
          >
            <Wallet />
          </AdvisorPanel>

          <div className="grid items-start gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
            <AdvisorPanel
              eyebrow="Wallet setup"
              title="Add a card"
              description="Search for your card or enter rates manually. It will appear in your wallet above."
            >
              <CardManager />
            </AdvisorPanel>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
              <AdvisorPanel
                eyebrow="Exact answer"
                title="Purchase Advisor"
                description="Choose the category and amount. The first result is the card that earns the most from your saved wallet."
                className="lg:min-h-[640px]"
              >
                <PurchaseAdvisor />
              </AdvisorPanel>

              <AdvisorPanel
                id="ai-advisor"
                eyebrow="Pattern answer"
                title="AI Advisor"
                description="Describe the month ahead when the decision is broader than one purchase."
                className="lg:min-h-[640px]"
              >
                <AIAdvisor />
              </AdvisorPanel>
            </div>
          </div>

          <AdvisorPanel
            eyebrow="Wallet health"
            title="Coverage Gap Analysis"
            description="See where your wallet is strong and where a better card could earn you more."
          >
            <WalletGaps />
          </AdvisorPanel>

          <AdvisorPanel
            eyebrow="Rate map"
            title="Reward Rate Comparison"
            description="Scan where each card wins before you change rates or ask for a broader recommendation."
          >
            <CardChart />
          </AdvisorPanel>
        </div>
      </main>
    </>
  )
}
