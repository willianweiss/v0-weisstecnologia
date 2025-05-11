"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploader } from "@/components/file-uploader"

export function FileUploadSection() {
  const [customersFile, setCustomersFile] = useState<File | null>(null)
  const [interactionsFile, setInteractionsFile] = useState<File | null>(null)

  const handleCustomersUpload = (file: File | null) => {
    setCustomersFile(file)
    // Here you would typically process the file or send it to your API
    if (file) {
      console.log("Customers file uploaded:", file.name)
    }
  }

  const handleInteractionsUpload = (file: File | null) => {
    setInteractionsFile(file)
    // Here you would typically process the file or send it to your API
    if (file) {
      console.log("Interactions file uploaded:", file.name)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Data</CardTitle>
        <CardDescription>Upload your customer data and interaction records for processing</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="customers" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="customers">Customers & Debts</TabsTrigger>
            <TabsTrigger value="interactions">Customer Interactions</TabsTrigger>
          </TabsList>

          <TabsContent value="customers" className="space-y-4">
            <div className="text-sm">Upload a CSV file containing customer information and debt records.</div>

            <FileUploader accept=".csv" onFileSelect={handleCustomersUpload} selectedFile={customersFile} />

            {customersFile && (
              <div className="mt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Process Data
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="interactions" className="space-y-4">
            <div className="text-sm">
              Upload a CSV or JSON file containing customer interaction data for AI training.
            </div>

            <FileUploader accept=".csv,.json" onFileSelect={handleInteractionsUpload} selectedFile={interactionsFile} />

            {interactionsFile && (
              <div className="mt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Train AI Model
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
