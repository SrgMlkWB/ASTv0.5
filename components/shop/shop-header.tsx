"use client"

import { ShoppingCart, Heart, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useShop } from "@/context/shop-context"
import { Badge } from "../ui/badge"
import { NotificationsPopover } from "@/components/notifications/notifications-popover"

export function ShopHeader() {
  const { 
    searchQuery, 
    setSearchQuery, 
    cartItems, 
    favorites 
  } = useShop()

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Winback Shop</h1>
        </div>
        <div className="flex-1 mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher des produits..."
              className="pl-10 border-orange-200 focus:border-orange-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <NotificationsPopover />
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-orange-500 p-0 text-center text-xs">
                {cartItemCount}
              </Badge>
            )}
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            {favorites.length > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-orange-500 p-0 text-center text-xs">
                {favorites.length}
              </Badge>
            )}
            <span className="sr-only">Favorites</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
