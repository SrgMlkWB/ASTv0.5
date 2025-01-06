"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Monitor, MessageSquare, GraduationCap, ShoppingCart } from 'lucide-react'
import { cn } from "@/lib/utils"

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Devices", href: "/devices", icon: Monitor },
  { name: "Assist", href: "/assist", icon: MessageSquare },
  { name: "Academy", href: "/academy", icon: GraduationCap },
  { name: "Shop", href: "/shop", icon: ShoppingCart },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#F18841] text-white">
      <div className="flex justify-around items-center h-16">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                pathname === link.href
                  ? "bg-white text-[#F18841]"
                  : "text-white hover:bg-[#F18841]/90"
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
