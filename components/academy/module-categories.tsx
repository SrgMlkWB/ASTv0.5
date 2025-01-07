"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Play, Trophy, GraduationCap, BookOpen, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ModuleCategory {
  title: string
  description: string
  icon: React.ReactNode
  modules: number
  isLocked?: boolean
  badge?: string
  href: string
}

const categories: ModuleCategory[] = [
  {
    title: "Débutant",
    description: "Les bases essentielles pour bien démarrer avec Winback",
    icon: <BookOpen className="h-6 w-6" />,
    modules: 5,
    href: "/academy/beginner"
  },
  {
    title: "Intermédiaire",
    description: "Approfondissez vos connaissances et techniques",
    icon: <GraduationCap className="h-6 w-6" />,
    modules: 8,
    href: "/academy/intermediate"
  },
  {
    title: "Avancé",
    description: "Maîtrisez les techniques avancées",
    icon: <Trophy className="h-6 w-6" />,
    modules: 10,
    badge: "Populaire",
    href: "/academy/advanced"
  },
  {
    title: "Expert",
    description: "Contenus exclusifs pour les praticiens experts",
    icon: <Zap className="h-6 w-6" />,
    modules: 12,
    isLocked: true,
    href: "/academy/expert"
  }
]

export function ModuleCategories() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={category.href} className={!category.isLocked ? "block" : "cursor-not-allowed"}>
            <Card className="relative group overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                        {category.badge && (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            {category.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>
                  {category.isLocked ? (
                    <Lock className="h-5 w-5 text-gray-400" />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Play className="h-4 w-4 text-orange-600" />
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{category.modules} modules</span>
                  {category.isLocked && (
                    <span className="ml-2 text-orange-600">
                      • Nécessite le grade Expert
                    </span>
                  )}
                </div>
              </div>
              {category.isLocked && (
                <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-[1px]" />
              )}
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
