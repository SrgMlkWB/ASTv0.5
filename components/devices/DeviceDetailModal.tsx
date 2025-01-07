"use client"

import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface DeviceDetailModalProps {
  isOpen: boolean
  onClose: () => void
  device: {
    name: string
    image: string
    description?: string
    reference?: string
    specs?: string[]
  }
}

const deviceDetails: Record<string, {
  description: string;
  reference: string;
  storeUrl?: string;
  specs?: string[];
}> = {
  "BACK4": {
    description: "L'innovation aux multiples brevets la plus puissante et efficiente du marché pour améliorer vos traitements.\n\nCombinez 3 courants d'électrothérapie : TECAR, Hi-TENS et Hi-EMS.\n\nTravaillez avec vos deux mains et traitez jusqu'à 3 zones du corps en même temps.",
    reference: "WBK_BACK4_LOT",
    storeUrl: "https://store.winback.com/fr/back-4-winback.html"
  },
  "BACK3TX": {
    description: "La BACK3TX sera votre solution tout-en-un.\n\nDans un seul appareil, combinez 3 courants d'électrothérapie : TECAR, Hi-TENS et Hi-EMS pour gagner en rapidité et efficience…et en confort pour vos patients !",
    reference: "WBK_BACK3TX_LOT",
    storeUrl: "https://store.winback.com/fr/back-3tx-winback.html"
  },
  "Hi-TENS": {
    description: "Innovation de la marque Winback®, HI-TENS se démarque en proposant la combinaison des points forts de plusieurs technologies d'électrothérapie; tel que diminuer la douleur, réduire les tensions musculaires et fibrose, favoriser le processus de cicatrisation.\n\nAinsi, son action peut être multiple : localisée, superficielle, en profondeur ou purement antalgique. Mieux, il est même possible de les combiner pour amplifier les effets.",
    reference: "WBK_RSHOCK_LOT",
    specs: [
      "Puissance : 100-240 Vac 50/60Hz",
      "Fréquence : 300 kHz",
      "Durée traitement : 0-10 min",
      "Fonction : Hi-TENS - PULSE",
      "Poids : 1,2 kg",
      "Dimensions : 222x 205x 80 mm",
      "Garantie Équipements : 2 ans - Accessoires : 1 an"
    ],
    storeUrl: "https://store.winback.com/fr/hi-tens-l-electrotherapie-by-winback.html"
  }
}

export function DeviceDetailModal({ isOpen, onClose, device }: DeviceDetailModalProps) {
  const details = deviceDetails[device.name as keyof typeof deviceDetails]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full h-[100dvh] p-0 gap-0 rounded-none md:max-w-3xl md:h-auto md:rounded-lg md:gap-4 md:p-6">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="flex flex-col h-full md:grid md:grid-cols-2 md:gap-8">
          {/* Image Section */}
          <div className="relative h-[40vh] bg-gray-50 md:h-[400px] rounded-t-lg md:rounded-lg">
            <Image
              src={device.image}
              alt={device.name}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 md:p-0">
            <div>
              <h2 className="text-2xl font-bold mb-4">{device.name} - Winback</h2>
              <p className="text-gray-600 whitespace-pre-line text-sm">{details?.description}</p>
            </div>

            {details?.reference && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">
                  <span className="text-gray-500">Référence : </span>
                  <span className="font-medium">{details.reference}</span>
                </p>
              </div>
            )}

            {details?.specs && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Caractéristiques</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {details.specs.map((spec, index) => (
                    <li key={index} className="text-sm text-gray-600">{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">SAV INTERNE</h4>
                <p className="text-sm text-gray-600">à votre écoute du lundi au vendredi 9h à 17h00</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-center">PAIEMENT 100% SÉCURISÉ</p>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href={details?.storeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gray-900 hover:bg-gray-800">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Acheter sur la boutique
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
