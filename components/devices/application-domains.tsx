"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const domains = [
  {
    id: "rehabilitation",
    title: "Rééducation",
    icon: "/assets/icons/rehabilitation.png",
  },
  {
    id: "sport",
    title: "Sport",
    icon: "/assets/icons/sport.png",
  },
  {
    id: "women-winback-pelvic-aesthetics",
    title: "Wo(men)",
    icon: "/assets/icons/women.png",
  },
  {
    id: "equine",
    title: "Équin & petits animaux",
    icon: "/assets/icons/equine.png",
  },
]

export function ApplicationDomains() {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-muted-foreground">
          Nous développons continuellement nos connaissances dans 4 domaines d'application avec un objectif: 
          vous permettre d'améliorer la vie de vos patients et clients, que vous soyez kinésithérapeute, 
          masseur, coach sportif, ostéopathe, chiropracteur, sage-femme, gynécologue, vétérinaire, spécialiste bien-être.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {domains.map((domain) => (
          <Card key={domain.id} className="group cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="relative w-16 h-16">
                <Image
                  src={domain.icon}
                  alt={domain.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <h3 className="font-semibold text-lg">{domain.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
