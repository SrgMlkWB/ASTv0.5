"use client"

import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Comment un patient peut-il se préparer à une séance de Tecar WINBACK pour en maximiser les effets ?",
    answer: "Il est recommandé aux patients de bien s'hydrater entre chaque séance. Le patient doit éviter d'appliquer des cosmétiques, des crèmes ou des huiles essentielles sur la zone devant être traitée avant de venir à une séance Winback."
  },
  {
    question: "À quoi doit s'attendre un patient lors de ses traitements WINBACK : pendant et après le traitement ?",
    answer: "Pendant le traitement, le patient ne ressent aucune sensation électrique. Selon l'intensité et le mode sélectionnés, la sensation de chaleur peut varier de douce à chaude, de superficielle à profonde. Le traitement doit toujours être confortable. Les patients ressentent généralement une réduction immédiate de la douleur. Après le traitement, la sensation de chaleur peut durer jusqu'à une heure ou deux."
  },
  {
    question: "À quelle fréquence, la Tecar WINBACK peut-elle être employée ?",
    answer: "Ces traitements peuvent être effectués plusieurs fois par jour. Il est nécessaire d'ajuster l'intensité et la durée des traitements en fonction de la pathologie traitée et des retours du patient. En cas de pathologie aiguë, il est nécessaire de laisser à l'organisme le temps de récupérer."
  },
  {
    question: "Combien de temps doit durer une séance ?",
    answer: "Une séance peut durer de 5 minutes, à plus de 45 minutes. Il est important d'adapter la durée et l'intensité du traitement à l'état du patient (aigu, subaigu, chronique). Plus la séance sera longue, plus l'intensité sera faible."
  },
  {
    question: "Quel type de crème puis-je utiliser ?",
    answer: "Utilisez uniquement une crème conductrice spécifique. N'utilisez pas de gel à ultrasons ou de crèmes de massage qui peuvent altérer le revêtement de l'électrode capacitive (CET). Les huiles essentielles sont à éviter car elles modifient l'impédance de la peau."
  },
  {
    question: "Qui peut effectuer un traitement Tecar WINBACK ?",
    answer: "Les traitements Tecar WINBACK doivent être effectués par des professionnels de santé qualifiés et formés à l'utilisation de l'appareil, comme des kinésithérapeutes, physiothérapeutes ou ostéopathes certifiés."
  }
]

export function FaqPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">FAQ</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[400px] p-0">
        <div className="flex items-center justify-between border-b p-4">
          <h4 className="font-semibold">FAQ</h4>
        </div>
        <ScrollArea className="h-[500px]">
          <div className="p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-sm text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
