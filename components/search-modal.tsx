"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full h-[100dvh] p-0 gap-0 rounded-none md:max-w-2xl md:h-auto md:rounded-lg md:p-6">
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          
          <div className="min-h-[200px]">
            {/* Search results will go here */}
            {searchQuery ? (
              <div className="text-center text-gray-500 py-8">
                Aucun résultat pour "{searchQuery}"
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                Commencez à taper pour rechercher
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
