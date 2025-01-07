"use client"

import { Button } from "../ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { useShop } from "@/context/shop-context"

export function SearchAndFilter() {
  const { 
    selectedCategory, 
    setSelectedCategory,
    sortBy,
    setSortBy
  } = useShop()

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[200px] border-orange-200">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            <SelectItem value="Équipement Professionnel">Équipement Pro</SelectItem>
            <SelectItem value="Accessoires">Accessoires</SelectItem>
            <SelectItem value="Consommables">Consommables</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px] border-orange-200">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Plus récent</SelectItem>
            <SelectItem value="price-low">Prix croissant</SelectItem>
            <SelectItem value="price-high">Prix décroissant</SelectItem>
            <SelectItem value="popular">Popularité</SelectItem>
          </SelectContent>
        </Select>

        <Button 
          variant="outline" 
          className="border-orange-200 hover:bg-orange-50"
        >
          Filtrer
        </Button>
      </div>
    </div>
  )
}
