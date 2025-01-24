"use client"

import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "../ui/button"
import { useShop } from "@/context/shop-context"
import { Badge } from "../ui/badge"
import { NotificationsPopover } from "@/components/notifications/notifications-popover"
import Image from "next/image"
import { useState } from "react"
import { SearchBar } from "@/components/search-bar"

export function ShopHeader() {
  const { 
    cartItems, 
    favorites 
  } = useShop()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/images/LogoStore.png"
              alt="Winback Shop"
              width={150}
              height={60}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative w-15 h-15 flex items-center justify-center"
            >
              <Image
                src="/assets/images/LogoLoupe.png"
                alt="Search"
                width={35}
                height={35}
                className="text-gray-500"
              />
            </button>
            <div className="relative w-10 h-10">
              <NotificationsPopover />
            </div>
            <Button variant="ghost" size="icon" className="relative w-10 h-10 p-0">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-500 p-0 text-center text-xs flex items-center justify-center">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative w-10 h-10 p-0">
              <Heart className="h-6 w-6" />
              {favorites.length > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-500 p-0 text-center text-xs flex items-center justify-center">
                  {favorites.length}
                </Badge>
              )}
              <span className="sr-only">Favorites</span>
            </Button>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm">
          <SearchBar
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      )}
    </>
  )
}
