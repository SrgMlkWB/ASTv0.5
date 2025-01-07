"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'

interface ModuleSection {
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface ELearningModuleProps {
  title: string
  sections: ModuleSection[]
  onComplete?: () => void
}

export function ELearningModule({ title, sections, onComplete }: ELearningModuleProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])

  const progress = (completedSections.length / sections.length) * 100

  const markSectionComplete = (index: number) => {
    if (!completedSections.includes(index)) {
      setCompletedSections([...completedSections, index])
    }
  }

  const goToNextSection = () => {
    markSectionComplete(currentSection)
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else if (onComplete) {
      onComplete()
    }
  }

  const goToPreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                currentSection === index
                  ? 'bg-orange-100 text-orange-900'
                  : 'hover:bg-gray-100'
              } ${completedSections.includes(index) ? 'text-green-600' : ''}`}
            >
              <div className="flex items-center space-x-2">
                {completedSections.includes(index) ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  section.icon
                )}
                <span className="text-sm font-medium">{section.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              {sections[currentSection].content}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={goToPreviousSection}
              disabled={currentSection === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>
            <Button
              onClick={goToNextSection}
              className="bg-orange-500 hover:bg-orange-600"
            >
              {currentSection === sections.length - 1 ? 'Terminer' : 'Suivant'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
