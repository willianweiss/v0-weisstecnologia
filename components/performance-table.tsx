import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface PerformanceData {
  channel: string
  success: number
  attempts: number
}

interface PerformanceTableProps {
  data: PerformanceData[]
}

export function PerformanceTable({ data = [] }: PerformanceTableProps) {
  if (!Array.isArray(data)) {
    return <div>No data available</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Channel</TableHead>
            <TableHead className="text-right">Success Rate</TableHead>
            <TableHead className="text-right">Attempts</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => {
            const successRate = (item.success / item.attempts) * 100
            let status = "Poor"
            let statusColor = "destructive"

            if (successRate >= 80) {
              status = "Excellent"
              statusColor = "success"
            } else if (successRate >= 70) {
              status = "Good"
              statusColor = "success"
            } else if (successRate >= 60) {
              status = "Average"
              statusColor = "warning"
            }

            return (
              <TableRow key={item.channel}>
                <TableCell className="font-medium">{item.channel}</TableCell>
                <TableCell className="text-right">{successRate.toFixed(1)}%</TableCell>
                <TableCell className="text-right">{item.attempts}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={statusColor as any}>{status}</Badge>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
