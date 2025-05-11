import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { FileUploadSection } from "@/components/file-upload-section"
import { PerformanceOverview } from "@/components/performance-overview"
import { AITrainingStatus } from "@/components/ai-training-status"

export const metadata: Metadata = {
  title: "Dashboard | Collection SaaS",
  description: "Dashboard for collection management",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your collection data and view performance metrics." />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AITrainingStatus />
      </div>

      <div className="mt-6">
        <FileUploadSection />
      </div>

      <div className="mt-6">
        <PerformanceOverview />
      </div>
    </DashboardShell>
  )
}
