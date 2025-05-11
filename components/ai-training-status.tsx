import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function AITrainingStatus() {
  // Mock data for AI training status
  const trainingStatus = {
    status: "In Progress",
    progress: 68,
    lastUpdated: "2 hours ago",
    dataPoints: 12500,
  }

  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">AI Training Status</CardTitle>
          <Badge variant="outline">{trainingStatus.status}</Badge>
        </div>
        <CardDescription>Model training with customer interaction data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{trainingStatus.progress}%</span>
            </div>
            <Progress value={trainingStatus.progress} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Data Points</p>
              <p className="text-sm font-medium">{trainingStatus.dataPoints.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Last Updated</p>
              <p className="text-sm font-medium">{trainingStatus.lastUpdated}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-muted-foreground">
          The AI model is being trained to optimize collection strategies based on historical interaction data.
        </p>
      </CardFooter>
    </Card>
  )
}
