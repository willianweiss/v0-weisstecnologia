"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card } from "@/components/ui/card"

interface PerformanceData {
  channel: string
  success: number
  attempts: number
}

interface PerformanceChartProps {
  data: PerformanceData[]
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  // Transform data for the chart
  const chartData = Array.isArray(data)
    ? data.map((item) => ({
        name: item.channel,
        "Success Rate": (item.success / item.attempts) * 100,
      }))
    : []

  return (
    <Card className="p-4">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Success Rate (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} />
            <Tooltip
              formatter={(value: number) => [`${value.toFixed(1)}%`, "Success Rate"]}
              labelFormatter={(label) => `Channel: ${label}`}
            />
            <Legend />
            <Bar dataKey="Success Rate" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
