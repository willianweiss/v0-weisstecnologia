import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Customers | Collection SaaS",
  description: "Manage your customers and their debts",
}

// Mock data for customers
const customers = [
  {
    id: "CUST-1001",
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "+55 11 98765-4321",
    totalDebt: 1250.75,
    status: "active",
  },
  {
    id: "CUST-1002",
    name: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    phone: "+55 11 91234-5678",
    totalDebt: 3450.0,
    status: "delinquent",
  },
  {
    id: "CUST-1003",
    name: "Carlos Santos",
    email: "carlos.santos@example.com",
    phone: "+55 21 98765-4321",
    totalDebt: 780.5,
    status: "paid",
  },
  {
    id: "CUST-1004",
    name: "Ana Pereira",
    email: "ana.pereira@example.com",
    phone: "+55 21 91234-5678",
    totalDebt: 2100.25,
    status: "active",
  },
  {
    id: "CUST-1005",
    name: "Roberto Almeida",
    email: "roberto.almeida@example.com",
    phone: "+55 31 98765-4321",
    totalDebt: 5600.0,
    status: "delinquent",
  },
]

export default function CustomersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Customers" text="Manage your customers and their debt information." />

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
          <CardDescription>View and manage all your customer records.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Total Debt</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>R$ {customer.totalDebt.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === "paid"
                            ? "success"
                            : customer.status === "delinquent"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {customer.status === "paid"
                          ? "Paid"
                          : customer.status === "delinquent"
                            ? "Delinquent"
                            : "Active"}
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
