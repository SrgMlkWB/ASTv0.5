"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const products = [
  {
    id: "cream-51-offer",
    name: "5+1 OFFERTE ! Crème conductrice Tecar & Thermo-Cryo",
    description: "OFFRE AVANTAGEUSE : 5 CRÈMES ACHETÉES = +1 OFFERTE (dans la limite des stocks disponibles)",
    fullDescription: `Crème conductrice pour Traitements par transfert d'Energie Capacitive et Résistive (T.E.C.A.R.) et Cryo-thermo thérapie (Essential Conductive Cream for professionnal HF massage).

Cette crème est à appliquer à juste quantité en fonction de la zone à traiter et de la durée du traitement sur la zone où on fera glisser l'électrode capacitive ou résistive. Flacon équipé d'une pompe doseuse.

Compatible avec les appareils : BACK1, BACK3 et BACK3 COLOR, RSHOCK, CRYOBACK, WINSHOCK, BACK4, BACK3TX`,
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg",
    price: 165.00,
    originalPrice: 198.00,
    inStock: true,
    reference: "CREAM-51",
    category: "Consommables",
    compatibleDevices: ["BACK1", "BACK3", "BACK3 COLOR", "RSHOCK", "CRYOBACK", "WINSHOCK", "BACK4", "BACK3TX"]
  },
  {
    id: "cream-12pack",
    name: "Carton 12 crèmes conductrice Tecar & Thermo-Cryo",
    description: "Profitez d'une offre commerciale préférentielle sur le carton de 12 crèmes conductrices",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg",
    price: 324.00,
    originalPrice: 396.00,
    inStock: true,
    reference: "CREAM-12PACK",
    category: "Consommables"
  },
  {
    id: "pack-consumables",
    name: "Pack consommables TECAR Winback",
    description: "Retrouvez l'essentiel de vos consommables favoris WINBACK dans ce pack à prix avantageux",
    image: "https://m3.winback.store/14900-large_default/pack-consommables-tecar-winback.jpg",
    price: 184.45,
    originalPrice: 217.00,
    discount: 15,
    inStock: true,
    reference: "PACK-CONS",
    category: "Consommables"
  },
  {
    id: "electrodes-cryo",
    name: "ELECTRODES ADHESIVES POUR CRYOBACK/WINSHOCK 45x80 (x4)",
    description: "Sachet de 4 électrodes pour Cryoback/Winshock",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg",
    price: 6.00,
    inStock: true,
    reference: "ELECT-CRYO",
    category: "Accessoires"
  },
  {
    id: "cable-stim",
    name: "Cable Stim Pad 60 cm",
    description: "Câble reliant les stim patchs aux Mouse Pads",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg",
    price: 39.00,
    inStock: true,
    reference: "CABLE-STIM",
    category: "Accessoires"
  },
  {
    id: "cable-neutral",
    name: "Câble pression Neutral",
    description: "Le câble de pression neutral permet de créer le circuit de stimulation",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg",
    price: 65.00,
    inStock: true,
    reference: "CABLE-NEUT",
    category: "Accessoires"
  }
]

export default function ShopPage() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div className="container mx-auto p-4 pb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Boutique Winback</h1>
        <div className="text-xs sm:text-sm text-muted-foreground">
          SAV interne à votre écoute du lundi au vendredi 9h à 17h00
        </div>
      </div>

      {showBanner && (
        <div className="bg-orange-100 p-3 sm:p-4 rounded-lg mb-6 relative">
          <p className="text-center text-orange-800 text-xs sm:text-sm pr-8">
            À partir de 900 € TTC, possibilité de payer en 2 ou 3 fois sans frais par CB (uniquement valable pour les professionnels de santé)
          </p>
          <button 
            className="absolute top-1 right-1 text-orange-800 hover:text-orange-600" 
            onClick={() => setShowBanner(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">Tous les produits</TabsTrigger>
          <TabsTrigger value="consommables">Consommables</TabsTrigger>
          <TabsTrigger value="accessoires">Accessoires</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="consommables" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "Consommables")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="accessoires" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "Accessoires")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.originalPrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold">{product.price.toFixed(2)} €</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toFixed(2)} €
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-green-600">
            {product.inStock ? "En stock" : "Rupture de stock"}
          </span>
          <Button>Ajouter au panier</Button>
        </div>
        {product.reference && (
          <p className="text-sm text-muted-foreground mt-2">
            Réf: {product.reference}
          </p>
        )}
      </div>
    </Card>
  )
}
