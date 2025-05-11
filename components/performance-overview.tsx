"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PerformanceChart } from "@/components/performance-chart"
import { PerformanceTable } from "@/components/performance-table"

// Mock data for the performance metrics
const performanceData = [
  { channel: "Email", success: 68, attempts: 100 },
  { channel: "Phone call", success: 82, attempts: 100 },
  { channel: "WhatsApp", success: 75, attempts: 100 },
  { channel: "SMS", success: 62, attempts: 100 },
  { channel: "Voice bot", success: 58, attempts: 100 },
]

export function PerformanceOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Collection Performance</CardTitle>
        <CardDescription>Performance metrics for each collection channel</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chart">Chart View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>

          <TabsContent value="chart" className="pt-4">
            <PerformanceChart data={performanceData} />
          </TabsContent>

          <TabsContent value="table" className="pt-4">
            <PerformanceTable data={performanceData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
