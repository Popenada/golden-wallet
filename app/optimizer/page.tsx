import CardManager from "../components/CardManager";
import PurchaseAdvisor from "../components/PurchaseAdvisor";
import AIAdvisor from "../components/AIAdvisor";
import CardChart from "../components/CardChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0A06] px-6 py-12 text-[#F5EED6]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C040] via-[#D4AF37] to-[#8B6914] shadow-[0_0_16px_rgba(212,175,55,0.4)]">
              <span className="text-[10px] font-black tracking-tight text-[#0C0A06]">GW</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Golden Wallet
            </span>
          </div>

          <div>
            <h1 className="text-[2.5rem] font-bold leading-tight tracking-tight">
              Find the best card for{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5C842] bg-clip-text text-transparent">
                every purchase.
              </span>
            </h1>
            <p className="mt-2 max-w-lg text-[#9A8A6A]">
              Add your cards with reward rates, then compare which earns the most
              for any spending category.
            </p>
          </div>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#2A2318] bg-[#161209] shadow-xl">
            <div className="border-b border-[#2A2318] px-6 py-4">
              <h2 className="font-semibold text-[#F5EED6]">Your Cards</h2>
              <p className="mt-0.5 text-xs text-[#9A8A6A]">
                Save each card with its reward percentages by category.
              </p>
            </div>
            <div className="p-6">
              <CardManager />
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#2A2318] bg-[#161209] shadow-xl">
            <div className="border-b border-[#2A2318] px-6 py-4">
              <h2 className="font-semibold text-[#F5EED6]">Purchase Advisor</h2>
              <p className="mt-0.5 text-xs text-[#9A8A6A]">
                Choose a category and amount to rank your cards.
              </p>
            </div>
            <div className="p-6">
              <PurchaseAdvisor />
            </div>
          </div>

          <div
            id="ai-advisor"
            className="scroll-mt-8 flex flex-col overflow-hidden rounded-2xl border border-[#2A2318] bg-[#161209] shadow-xl"
          >
            <div className="border-b border-[#2A2318] px-6 py-4">
              <h2 className="font-semibold text-[#F5EED6]">AI Advisor</h2>
              <p className="mt-0.5 text-xs text-[#9A8A6A]">
                Describe your habits for personalized card recommendations.
              </p>
            </div>
            <div className="p-6">
              <AIAdvisor />
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#2A2318] bg-[#161209] shadow-xl">
          <div className="border-b border-[#2A2318] px-6 py-4">
            <h2 className="font-semibold text-[#F5EED6]">Reward Rate Comparison</h2>
            <p className="mt-0.5 text-xs text-[#9A8A6A]">
              Compare reward rates across all your cards by spending category.
            </p>
          </div>
          <div className="p-6">
            <CardChart />
          </div>
        </div>
      </div>
    </main>
  );
}
