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
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-muted-foreground leading-relaxed">
          Nous développons continuellement nos connaissances dans 4 domaines d'application avec un objectif: 
          vous permettre d'améliorer la vie de vos patients et clients, que vous soyez kinésithérapeute, 
          masseur, coach sportif, ostéopathe, chiropracteur, sage-femme, gynécologue, vétérinaire, spécialiste bien-être.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((domain) => (
          <Card key={domain.id} className="group hover:shadow-md transition-all duration-200">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={domain.icon}
                  alt={domain.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">{domain.id}</div>
                <h3 className="font-semibold text-lg">{domain.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
