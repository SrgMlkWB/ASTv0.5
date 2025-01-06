"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  discount?: number
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`product-row-${title.replace(/\s+/g, '-')}`)
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div
          id={`product-row-${title.replace(/\s+/g, '-')}`}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <Card key={product.id} className="flex-none w-[250px] p-4">
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-center">{product.name}</h3>
              <div className="text-center mt-2">
                <span className="font-bold text-[#F18841]">{product.price}€</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">{product.originalPrice}€</span>
                )}
              </div>
            </Card>
          ))}
        </div>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
