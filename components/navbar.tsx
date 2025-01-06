"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Monitor, MessageSquare, GraduationCap, ShoppingCart } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Devices", href: "/devices", icon: Monitor },
  { name: "Assist", href: "/assist", icon: MessageSquare },
  { name: "Academy", href: "/academy", icon: GraduationCap },
  { name: "Shop", href: "/shop", icon: ShoppingCart },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#F18841] text-white z-50">
      <div className="flex items-center justify-around h-16">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                pathname === link.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
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
