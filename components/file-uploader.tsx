"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, File, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FileUploaderProps {
  accept: string
  onFileSelect: (file: File | null) => void
  selectedFile: File | null
}

export function FileUploader({ accept, onFileSelect, selectedFile }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      if (isValidFileType(file)) {
        onFileSelect(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (isValidFileType(file)) {
        onFileSelect(file)
      }
    }
  }

  const isValidFileType = (file: File) => {
    const acceptedTypes = accept.split(",")
    const fileType = `.${file.name.split(".").pop()}`
    return acceptedTypes.includes(fileType)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div>
      {!selectedFile ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            isDragging ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50",
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleButtonClick}
        >
          <Upload className="h-10 w-10 mx-auto mb-3 text-gray-400" />
          <p className="text-sm font-medium mb-1">Drag and drop your file here or click to browse</p>
          <p className="text-xs text-muted-foreground">Accepted file types: {accept}</p>
          <input type="file" ref={fileInputRef} accept={accept} onChange={handleFileChange} className="hidden" />
        </div>
      ) : (
        <div className="border rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <File className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium">{selectedFile.name}</p>
              <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleRemoveFile} aria-label="Remove file">
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
