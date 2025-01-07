"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { FileText } from "lucide-react"

const domains = [
  {
    title: "Rééducation",
    image: "https://winback-academy.org/wp-content/uploads/2022/11/WINBACK_09-10-21_Florian-Leger-275-scaled-1-1024x682.jpg",
    alt: "Rééducation avec Winback"
  },
  {
    title: "Sport",
    image: "https://winback-academy.org/wp-content/uploads/2022/11/WINBACK_09-10-21_Florian-Leger-275-scaled-1-1024x682.jpg",
    alt: "Sport avec Winback"
  },
  {
    title: "Périnéo-Pelvien",
    image: "https://winback-academy.org/wp-content/uploads/2022/11/WINBACK_09-10-21_Florian-Leger-275-scaled-1-1024x682.jpg",
    alt: "Périnéo-Pelvien avec Winback"
  },
  {
    title: "Physio-Esthétique",
    image: "https://winback-academy.org/wp-content/uploads/2022/11/WINBACK_09-10-21_Florian-Leger-275-scaled-1-1024x682.jpg",
    alt: "Physio-Esthétique avec Winback"
  },
  {
    title: "Vétérinaire",
    image: "https://winback-academy.org/wp-content/uploads/2022/11/WINBACK_09-10-21_Florian-Leger-275-scaled-1-1024x682.jpg",
    alt: "Vétérinaire avec Winback"
  }
]

export function DeviceRessources() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center mb-4">
        <FileText className="h-5 w-5 text-[#F18841] mr-2" />
        <span className="text-lg font-semibold">WINBACK BACK4 MANUEL UTILISATEUR</span>
      </div>
      <iframe
        src="https://www.manualslib.fr/manual/637603/Winback-Back4.html"
        className="w-full h-[calc(100vh-200px)] border-none"
        title="WINBACK BACK4 MANUEL UTILISATEUR"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">Nos domaines d'application</h2>
        <p className="text-gray-600 mb-6">
          Nous développons continuellement nos connaissances dans différents domaines d'application avec un objectif: 
          vous permettre d'améliorer la vie de vos patients et clients, que vous soyez kinésithérapeute, masseur, 
          coach sportif, ostéopathe, chiropracteur, sage-femme, gynécologue, vétérinaire, spécialiste bien-être.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={domain.image}
                alt={domain.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center">{domain.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
