"use client"

import { motion } from "framer-motion"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useShop } from "@/context/shop-context"
import { cn } from "@/lib/utils"

export function ProductList() {
  const { 
    filteredProducts, 
    addToCart, 
    favorites, 
    toggleFavorite 
  } = useShop()

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg border border-orange-100 bg-white shadow-sm transition-all hover:shadow-lg"
        >
          <div className="absolute right-2 top-2 z-10 flex space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "h-8 w-8 bg-white/80 hover:bg-white",
                favorites.includes(product.id) && "text-orange-500"
              )}
              onClick={() => toggleFavorite(product.id)}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {product.badge && (
            <Badge className="absolute left-2 top-2 bg-orange-500">{product.badge}</Badge>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold">
                {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
              </span>
              <Button 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
