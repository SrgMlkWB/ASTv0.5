"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, BookOpen, Timer, ArrowRight } from "lucide-react"

interface Protocol {
  id: number
  title: string
  category: string
  duration: string
  difficulty: "Easy" | "Medium" | "Hard"
  description: string
  views: number
}

const protocols: Protocol[] = [
  {
    id: 1,
    title: "Traitement de la Lombalgie Chronique",
    category: "Rachis",
    duration: "30-45 min",
    difficulty: "Medium",
    description: "Protocole complet pour le traitement de la lombalgie chronique, incluant les paramètres TECAR et les exercices recommandés.",
    views: 1250
  },
  {
    id: 2,
    title: "Récupération Post-Entorse de la Cheville",
    category: "Traumatologie",
    duration: "20-30 min",
    difficulty: "Easy",
    description: "Protocole de rééducation pour les entorses de la cheville, de la phase aiguë à la reprise sportive.",
    views: 890
  },
  {
    id: 3,
    title: "Tendinopathie Rotulienne",
    category: "Tendinopathies",
    duration: "25-35 min",
    difficulty: "Medium",
    description: "Traitement des tendinopathies rotuliennes chez les sportifs, combinant TECAR et exercices excentriques.",
    views: 750
  },
  {
    id: 4,
    title: "Syndrome du Canal Carpien",
    category: "Neurologie",
    duration: "15-20 min",
    difficulty: "Easy",
    description: "Protocole de traitement conservateur du syndrome du canal carpien.",
    views: 680
  },
  {
    id: 5,
    title: "Réhabilitation Post-Ligamentoplastie LCA",
    category: "Chirurgie",
    duration: "45-60 min",
    difficulty: "Hard",
    description: "Protocole détaillé de rééducation après reconstruction du LCA, phases précoces à tardives.",
    views: 1100
  }
]

const categories = ["Tous", "Rachis", "Traumatologie", "Tendinopathies", "Neurologie", "Chirurgie"]

export function Protocols() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredProtocols = protocols.filter(protocol => {
    const matchesSearch = protocol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         protocol.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || protocol.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold">Protocoles de Traitement</h2>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un protocole..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex p-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className="mx-1"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProtocols.map((protocol) => (
          <Card key={protocol.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{protocol.title}</h3>
                <p className="text-sm text-muted-foreground">{protocol.description}</p>
              </div>
              <Badge variant={
                protocol.difficulty === "Easy" ? "secondary" :
                protocol.difficulty === "Medium" ? "default" : "destructive"
              }>
                {protocol.difficulty}
              </Badge>
            </div>
            
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Timer className="mr-1 h-4 w-4" />
                {protocol.duration}
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-1 h-4 w-4" />
                {protocol.views} vues
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button>
                Voir le protocole
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
