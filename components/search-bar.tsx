"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return isOpen ? (
    <div className="absolute inset-x-0 top-0 bg-white p-4 flex items-center gap-2 shadow-lg animate-in slide-in-from-top">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1"
      />
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  ) : null
}
