"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
  badge?: string
}

type CartItem = Product & {
  quantity: number
}

type ShopContextType = {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  favorites: number[]
  toggleFavorite: (productId: number) => void
  filteredProducts: Product[]
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Winback Back Pro 3",
    price: 1299.99,
    category: "Équipement Professionnel",
    image: "/images/products/back-pro-3.jpg",
    badge: "Nouveau",
  },
  {
    id: 2,
    name: "Winback Back 1",
    price: 999.99,
    category: "Équipement Professionnel",
    image: "/images/products/back-1.jpg",
    badge: "Populaire",
  },
  // Add more products here
]

export function ShopProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev =>
      prev.filter(item => item.id !== productId)
    )
  }

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const filteredProducts = initialProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "newest":
          return b.id - a.id
        default:
          return 0
      }
    })

  return (
    <ShopContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      sortBy,
      setSortBy,
      cartItems,
      addToCart,
      removeFromCart,
      favorites,
      toggleFavorite,
      filteredProducts,
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider')
  }
  return context
}
