"use client"

import { useState } from 'react'
import { Search, Info, Activity, Wrench } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"

interface TroubleshootingError {
  code: string;
  description: string;
  device: string;
  analysis: string;
  repair: string;
}

const errors: TroubleshootingError[] = [
  {
    code: "ERROR 237",
    description: "Un pop-up \"ERREUR : COMMUNICATION SD INTERROMPUE\" est apparu à l'écran.\n\nIl n'y a pas de communication avec la carte SD (carte mémoire de l'appareil).",
    device: "BACK4",
    analysis: "1. Éteignez et rallumez l'appareil avec le bouton arrière.\n2. Même si l'appareil est éteint et rallumé, l'erreur se reproduira.\n3. L'appareil est inutilisable et le problème ne peut pas être résolu à distance.\n4. L'appareil doit être envoyé au service après-vente de WINBACK pour remplacer la carte SD.",
    repair: "La carte SD doit être remplacée par une nouvelle.\n\n1. Ouvrez l'appareil. Dévissez les 4 vis avec un tournevis TORX de type 25mm ou un tournevis cruciforme.\n2. Retirez le boîtier supérieur de l'appareil du boîtier inférieur sans déconnecter aucun câble.\n3. Retirez la carte SD de la carte GMU (carte sous le boîtier supérieur).\n4. Remplacez la carte SD par une nouvelle.\n5. Fermez l'appareil et apposez une nouvelle étiquette de garantie.\n6. Allumez l'appareil pour vérifier s'il fonctionne."
  },
  {
    code: "ERROR 239",
    description: "SD COMMUNICATION OUT",
    device: "BACK4",
    analysis: "1. Check the SD card connection.\n2. Restart the device.",
    repair: "Replace the SD card with a new one.\n\n1. Open the device. Unscrew the 4 screws with a TORX screwdriver of type 25mm or a cross-shaped screwdriver.\n2. Remove the upper casing of the device from the lower casing without disconnecting any cables.\n3. Remove the SD card from the GMU card (card under the upper casing).\n4. Replace the SD card with a new one.\n5. Close the device and apply a new warranty label.\n6. Turn on the device to check if it works."
  },
  {
    code: "ERROR 238",
    description: "TECAR IN UNDER VOLTAGE",
    device: "BACK4",
    analysis: "1. Check the power supply.\n2. Ensure stable voltage.",
    repair: "Check the power supply and ensure stable voltage.\n\n1. Check the power cord and connections.\n2. Ensure the device is properly plugged in.\n3. Check the voltage of the power supply.\n4. Replace the power supply if necessary."
  },
  {
    code: "ERROR 237",
    description: "TECAR IN OVER VOLTAGE",
    device: "BACK4",
    analysis: "1. Check the power supply.\n2. Ensure stable voltage.",
    repair: "Check the power supply and ensure stable voltage.\n\n1. Check the power cord and connections.\n2. Ensure the device is properly plugged in.\n3. Check the voltage of the power supply.\n4. Replace the power supply if necessary."
  },
  {
    code: "ERROR 101",
    description: "TEMPERATURE SENSOR FAILURE",
    device: "BACK3",
    analysis: "1. Check the temperature sensor.\n2. Ensure proper connection.",
    repair: "Contact technical support for sensor replacement.\n\n1. Contact technical support for assistance.\n2. Provide the device's serial number and a detailed description of the issue.\n3. Follow the instructions provided by technical support."
  },
  {
    code: "ERROR 102",
    description: "CALIBRATION ERROR",
    device: "BACK3",
    analysis: "1. Check the device's calibration.\n2. Ensure proper calibration.",
    repair: "Perform device calibration or contact support.\n\n1. Perform device calibration according to the user manual.\n2. Contact technical support if the issue persists.\n3. Provide the device's serial number and a detailed description of the issue."
  },
]

export function TroubleshootingGuide() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDevice, setSelectedDevice] = useState('all')

  const filteredErrors = errors.filter(error => 
    (selectedDevice === 'all' || error.device === selectedDevice) &&
    (error.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
     error.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Troubleshooting Guide</h2>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search for errors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedDevice} onValueChange={setSelectedDevice}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select device" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Devices</SelectItem>
            <SelectItem value="BACK3">BACK3</SelectItem>
            <SelectItem value="BACK4">BACK4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {filteredErrors.map((error) => (
          <AccordionItem key={error.code} value={error.code}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#F18841]">{error.code}</span>
                <span>{error.description.split('\n')[0]}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4">
                <Card className="p-6">
                  <div className="flex items-center gap-2 text-[#F18841] mb-3">
                    <Info className="h-5 w-5" />
                    <h3 className="font-semibold">Description</h3>
                  </div>
                  <div className="text-gray-700 whitespace-pre-wrap">
                    {error.description}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 text-[#F18841] mb-3">
                    <Activity className="h-5 w-5" />
                    <h3 className="font-semibold">Analyse</h3>
                  </div>
                  <div className="text-gray-700 whitespace-pre-wrap">
                    {error.analysis}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 text-[#F18841] mb-3">
                    <Wrench className="h-5 w-5" />
                    <h3 className="font-semibold">Réparation</h3>
                  </div>
                  <div className="text-gray-700 whitespace-pre-wrap">
                    {error.repair}
                  </div>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
