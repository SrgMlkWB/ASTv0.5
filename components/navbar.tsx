"use client"

import Link from "next/link"
import Image from "next/image"
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
    <nav className="bg-[#F18841] text-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="relative w-24 h-16 overflow-hidden">
                <Image
                  src="https://mma.prnewswire.com/media/1895822/WINBACK_Logo.jpg?p=facebook"
                  alt="Winback Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xl font-bold">ASSIST</span>
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                      pathname === link.href
                        ? "bg-white text-[#F18841]"
                        : "text-white hover:bg-[#F18841]/90"
                    )}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
