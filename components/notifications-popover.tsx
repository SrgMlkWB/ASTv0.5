"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Bell } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

const notifications = [
  {
    id: 1,
    title: "Mise à jour disponible",
    message: "Une nouvelle version de votre appareil BACK4 est disponible.",
    time: "Il y a 2 heures",
    unread: true
  },
  {
    id: 2,
    title: "Maintenance prévue",
    message: "Une maintenance est prévue le 15 janvier 2025.",
    time: "Il y a 1 jour",
    unread: false
  }
]

export function NotificationsPopover() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
      >
        <Bell className="w-6 h-6 text-gray-500" />
        {notifications.some(n => n.unread) && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
        )}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-sm p-0">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Notifications</h2>
          </div>
          <ScrollArea className="h-[400px]">
            {notifications.length > 0 ? (
              <div className="divide-y">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer ${
                      notification.unread ? "bg-orange-50" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                Aucune notification
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}
