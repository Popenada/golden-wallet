"use client"

import { categories } from "@/app/utils/constants"
import useCardStore from "@/app/store/useCardStore"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const BAR_COLORS = ["#D4AF37", "#60A5FA", "#34D399", "#F87171", "#A78BFA", "#FB923C"]

type TooltipPayload = { name: string; value: number; color: string }

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: TooltipPayload[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-[#3D3218] bg-[#161209] px-4 py-3 shadow-xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
        {label}
      </p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 text-sm">
          <span
            className="h-2 w-2 flex-shrink-0 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-[#9A8A6A]">{entry.name}</span>
          <span className="ml-auto pl-6 font-semibold text-[#F5EED6]">
            {entry.value}%
          </span>
        </div>
      ))}
    </div>
  )
}

export default function CardChart() {
  const { cards } = useCardStore()

  if (cards.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-[#2A2318] py-8 text-center text-sm text-[#5A4F3A]">
        Add cards to see a reward rate comparison
      </p>
    )
  }

  const data = categories.map((category) => ({
    category: category.charAt(0).toUpperCase() + category.slice(1),
    ...Object.fromEntries(cards.map((card) => [card.name, card.rates[category]])),
  }))

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} barCategoryGap="30%" barGap={3}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2A2318" vertical={false} />
        <XAxis
          dataKey="category"
          tick={{ fill: "#9A8A6A", fontSize: 12 }}
          axisLine={{ stroke: "#2A2318" }}
          tickLine={false}
        />
        <YAxis
          tickFormatter={(v) => `${v}%`}
          tick={{ fill: "#9A8A6A", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={38}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "rgba(212,175,55,0.05)" }}
        />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "#9A8A6A", paddingTop: 16 }}
        />
        {cards.map((card, i) => (
          <Bar
            key={card.id}
            dataKey={card.name}
            fill={BAR_COLORS[i % BAR_COLORS.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}