import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Collections | Collection SaaS",
  description: "Manage your debt collections",
}

// Mock data for collections
const collections = [
  {
    id: "COL-1234",
    customer: "João Silva",
    amount: 1250.75,
    dueDate: "2025-06-15",
    status: "pending",
    channel: "Email",
  },
  {
    id: "COL-1235",
    customer: "Maria Oliveira",
    amount: 3450.0,
    dueDate: "2025-05-30",
    status: "overdue",
    channel: "Phone call",
  },
  {
    id: "COL-1236",
    customer: "Carlos Santos",
    amount: 780.5,
    dueDate: "2025-07-10",
    status: "paid",
    channel: "WhatsApp",
  },
  {
    id: "COL-1237",
    customer: "Ana Pereira",
    amount: 2100.25,
    dueDate: "2025-06-05",
    status: "pending",
    channel: "SMS",
  },
  {
    id: "COL-1238",
    customer: "Roberto Almeida",
    amount: 5600.0,
    dueDate: "2025-05-20",
    status: "overdue",
    channel: "Voice bot",
  },
]

export default function CollectionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Collections" text="Manage your debt collections and track their status." />

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Active Collections</CardTitle>
          <CardDescription>View and manage all your active debt collections.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {collections.map((collection) => (
                  <TableRow key={collection.id}>
                    <TableCell className="font-medium">{collection.id}</TableCell>
                    <TableCell>{collection.customer}</TableCell>
                    <TableCell>R$ {collection.amount.toFixed(2)}</TableCell>
                    <TableCell>{new Date(collection.dueDate).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell>{collection.channel}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          collection.status === "paid"
                            ? "success"
                            : collection.status === "overdue"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {collection.status === "paid"
                          ? "Paid"
                          : collection.status === "overdue"
                            ? "Overdue"
                            : "Pending"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
