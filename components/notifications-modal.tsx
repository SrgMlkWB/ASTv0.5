"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Bell } from "lucide-react"

export function NotificationsModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full h-[100dvh] p-0 gap-0 rounded-none md:max-w-md md:h-auto md:rounded-lg">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Aucune notification pour le moment</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
