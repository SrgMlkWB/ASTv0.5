"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: string
  image: string
  badge?: string
  description: string
  reference?: string
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
    name: "Gel conducteur Intimity Women friendly 1000 mL - Winback",
    price: 28.00,
    category: "Consommables",
    image: "/images/products/gel-conducteur-intimity.jpg",
    description: "Gel conducteur pour Traitements par transfert d'Énergie Capacitive"
  },
  {
    id: 2,
    name: "Back 1S - Winback",
    price: 999.99,
    category: "Équipement Professionnel",
    image: "/images/products/back-1s.jpg",
    description: "L'énergie WINBACK est un courant à Haute Fréquence oscillant entre"
  },
  {
    id: 3,
    name: "Winshock - Winback",
    price: 499.99,
    category: "Équipement Professionnel",
    image: "/images/products/winshock.jpg",
    description: "Winshock est composé de 2 générateurs thermoélectriques"
  },
  {
    id: 4,
    name: "Hi TENS - l'électrothérapie by Winback",
    price: 299.99,
    category: "Équipement Professionnel",
    image: "/images/products/hi-tens.jpg",
    description: "Innovation de la marque Winback®, Hi-TENS se démarque en proposant"
  },
  {
    id: 5,
    name: "Back 3 Color - Winback",
    price: 1499.99,
    category: "Équipement Professionnel",
    image: "/images/products/back-3-color.jpg",
    description: "L'énergie WINBACK est un courant à Haute Fréquence oscillant entre"
  },
  {
    id: 6,
    name: "Cryoback - Winback",
    price: 1299.99,
    category: "Équipement Professionnel",
    image: "/images/products/cryoback.jpg",
    description: "La Cryoback 4 dispose de quatre ou huit pads réglables chacun de"
  },
  {
    id: 7,
    name: "5+1 OFFERTE! Crèmes conductrice Tecar & Thermo-Cryo (HF",
    price: 165.00,
    originalPrice: 198.00,
    category: "Consommables",
    image: "/images/products/creme-conductrice-pack.jpg",
    description: "OFFRE AVANTAGEUSE : 5 CRÈMES ACHETÉES + 1 OFFERTE (dans la",
    badge: "-15%"
  },
  {
    id: 8,
    name: "Pack consommables TECAR Winback",
    price: 184.45,
    originalPrice: 217.00,
    category: "Consommables",
    image: "/images/products/pack-consommables.jpg",
    description: "Retrouvez l'essentiel de vos consommables favoris WINBACK",
    badge: "-15%"
  },
  {
    id: 9,
    name: "Carton 12 crèmes conductrice Tecar & Thermo-Cryo 1000 ml",
    price: 324.00,
    originalPrice: 396.00,
    category: "Consommables",
    image: "/images/products/carton-cremes.jpg",
    description: "Profitez d'une offre commerciale préférentielle sur le carton de 12",
    badge: "-72.00€"
  },
  {
    id: 10,
    name: "ELECTRODES ADHESIVES POUR CRYOBACK/WINSHOCK 45x80 (x4)",
    price: 6.00,
    category: "Accessoires",
    image: "/images/products/electrodes-adhesives.jpg",
    description: "Sachet de 4 électrodes pour Cryoback/Winshock"
  },
  {
    id: 11,
    name: "Câble pression Neutral - Winback",
    price: 65.00,
    category: "Accessoires",
    image: "/images/products/cable-pression.jpg",
    description: "Le câble de pression neutral permet de créer le circuit de simulation"
  },
  {
    id: 12,
    name: "Sangle large de cuisse pour Winshock & Cryoback",
    price: 66.50,
    category: "Accessoires",
    image: "/images/products/sangle-cuisse.jpg",
    description: "La sangle large de cuisse vous permet d'utiliser les Mouse Pads"
  }
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
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
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
        case "popular":
          return (b.originalPrice ? b.originalPrice - b.price : 0) - 
                 (a.originalPrice ? a.originalPrice - a.price : 0)
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
