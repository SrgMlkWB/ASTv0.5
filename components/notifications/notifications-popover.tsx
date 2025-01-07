"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const mockNotifications = [
  {
    id: 1,
    user: {
      name: "Dr. Sophie Martin",
      avatar: "/avatars/sophie.jpg",
      initials: "SM"
    },
    action: "a partagé un nouveau protocole",
    target: "Traitement post-opératoire genou",
    timeAgo: "Il y a 2 heures",
    read: false
  },
  {
    id: 2,
    user: {
      name: "Marc Dubois",
      avatar: "/avatars/marc.jpg",
      initials: "MD"
    },
    action: "a posé une question sur",
    target: "Réglages TECAR pour tendinopathie",
    timeAgo: "Il y a 5 heures",
    read: false
  },
  {
    id: 3,
    user: {
      name: "Winback Academy",
      avatar: "/logo.png",
      initials: "WA"
    },
    action: "Nouveau module disponible",
    target: "Techniques avancées BACK3",
    timeAgo: "Il y a 1 jour",
    read: true
  }
]

export function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500 text-[10px] font-medium text-white flex items-center justify-center">
            2
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[380px] p-0">
        <div className="flex items-center justify-between border-b p-4">
          <h4 className="font-semibold">NOTIFICATIONS</h4>
          <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
            Mark all as read
          </Button>
        </div>
        <ScrollArea className="h-[400px]">
          <div className="flex flex-col">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-4 hover:bg-muted/50 ${
                  !notification.read ? "bg-orange-50" : ""
                }`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                  <AvatarFallback>{notification.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{notification.user.name}</span>{" "}
                    {notification.action}{" "}
                    <span className="font-medium text-orange-600">
                      {notification.target}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.timeAgo}
                  </p>
                </div>
                {!notification.read && (
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <Button variant="ghost" className="w-full justify-center" size="sm">
            Afficher les Notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
