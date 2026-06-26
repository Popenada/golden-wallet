import CardManager from "../components/CardManager";
import PurchaseAdvisor from "../components/PurchaseAdvisor";
import AIAdvisor from "../components/AIAdvisor";
import CardChart from "../components/CardChart";
import WalletGaps from "../components/WalletGaps";
import type { ReactNode } from "react";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0A06] px-4 py-6 text-[#F5EED6] sm:px-6 lg:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="overflow-hidden rounded-3xl border border-[#2A2318] bg-[#161209] shadow-xl">
          <div className="flex flex-col gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C040] via-[#D4AF37] to-[#8B6914] shadow-[0_0_16px_rgba(212,175,55,0.4)]">
                  <span className="text-[10px] font-black tracking-tight text-[#0C0A06]">
                    GW
                  </span>
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
                  Save the cards you carry, compare the exact purchase in front
                  of you, then use AI for the spending patterns that do not fit a
                  single category.
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
                  <span className="text-sm font-medium text-[#F5EED6]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="grid items-start gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <AdvisorPanel
            eyebrow="Wallet setup"
            title="Cards you actually carry"
            description="Add each card once with the rates that matter. The advisor uses this saved wallet for every recommendation."
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
  );
}
