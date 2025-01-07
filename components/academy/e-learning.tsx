"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Play, Clock, Award } from "lucide-react"

interface Course {
  id: number
  title: string
  description: string
  duration: string
  progress: number
  level: "Beginner" | "Intermediate" | "Advanced"
  thumbnail: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction à la Technologie TECAR",
    description: "Découvrez les principes fondamentaux de la technologie TECAR et son application en physiothérapie.",
    duration: "2h 30min",
    progress: 75,
    level: "Beginner",
    thumbnail: "/course-tecar.jpg"
  },
  {
    id: 2,
    title: "Traitement des Blessures Sportives",
    description: "Apprenez à traiter efficacement les blessures sportives courantes avec Winback.",
    duration: "3h 15min",
    progress: 45,
    level: "Intermediate",
    thumbnail: "/course-sports.jpg"
  },
  {
    id: 3,
    title: "Techniques Avancées de Rééducation",
    description: "Maîtrisez les techniques avancées de rééducation pour optimiser les résultats de vos patients.",
    duration: "4h",
    progress: 10,
    level: "Advanced",
    thumbnail: "/course-rehab.jpg"
  }
]

export function ELearning() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Formations en ligne</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${course.thumbnail})` }}
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={
                  course.level === "Beginner" ? "default" :
                  course.level === "Intermediate" ? "secondary" : "destructive"
                }>
                  {course.level}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {course.description}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progression</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>

              <Button className="w-full">
                {course.progress === 0 ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Commencer
                  </>
                ) : course.progress === 100 ? (
                  <>
                    <Award className="w-4 h-4 mr-2" />
                    Terminé
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Continuer
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
