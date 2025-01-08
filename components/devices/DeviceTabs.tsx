"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeviceInfo } from "./DeviceInfo"
import { DeviceActivity } from "./DeviceActivity"
import { DeviceRessources } from "./DeviceRessources"
import { DeviceFAQ } from "./DeviceFAQ"
import { Info } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"

const devices = [
  {
    name: "Back4",
    serialNumber: "16578647UI8O9P8",
    version: "3.15",
    config: "12.2",
    type: "3",
    subDevices: [
      {
        name: "SUB1",
        config: "12.2",
        type: "3",
        version: "3.15"
      },
      {
        name: "SUB2",
        config: "12.2",
        type: "3",
        version: "3.15"
      }
    ],
    specifications: {
      puissance: "100W",
      processeurs: "Dual core",
      frequences: {
        TECAR: ["300K Hz", "500K Hz", "1000K Hz"],
        "Hi-TENS": ["2 Hz", "5 Hz", "25 Hz"],
        "Hi-EMS": ["1500 Hz", "4000 Hz"]
      }
    }
  },
  {
    name: "BACK3TX",
    serialNumber: "16578647U8O9P8",
    version: "3.15",
    config: "12.2",
    type: "3",
    specifications: {
      puissance: "100W",
      processeurs: "Dual core",
      frequences: {
        TECAR: ["300K Hz", "500K Hz", "1000K Hz"],
        "Hi-TENS": ["2 Hz", "5 Hz", "25 Hz"],
        "Hi-EMS": ["1500 Hz", "4000 Hz"]
      },
      modes: {
        CET: ["deep", "soft", "dynamic"],
        "Hi-TENS": ["static", "dynamic"],
        "Hi-EMS": ["radial", "focal", "dynamic"]
      },
      intensite: ["low", "medium", "boost"],
      normes: [
        "Fabriqué sous normes ISO13485",
        "CE médical - MTIC 0068 - FDA-cleared"
      ],
      inclus: [
        "1 poignée TX",
        "11 électrodes :",
        "4 CET",
        "4 RET",
        "1 Hi-RET",
        "2 multipolaires",
        "2 bracelets",
        "1 câble splitter «Y»",
        "2 fixed pads",
        "1 câble TECAR mobile RET",
        "1 câble TECAR mobile neutre",
        "1 câble adhésif RET",
        "1 câble adhésif neutre",
        "1 poignée de retour",
        "1 plaque de retour",
        "1 chariot"
      ]
    },
    sub: [
      {
        name: "SUB1",
        config: "12.2",
        type: "3"
      }
    ]
  },
  {
    name: "Hi-TENS",
    serialNumber: "HT-45678901",
    version: "2.5",
    config: "8.1",
    type: "2",
    specifications: {
      puissance: "80W",
      processeurs: "Single core",
      frequences: {
        "Hi-TENS": ["2 Hz", "5 Hz", "10 Hz", "25 Hz", "50 Hz", "100 Hz"],
        "Hi-EMS": ["1000 Hz", "2000 Hz", "4000 Hz"]
      },
      modes: {
        "Hi-TENS": ["static", "dynamic", "burst", "modulation"],
        "Hi-EMS": ["continuous", "intermittent", "surge"]
      },
      intensite: ["low", "medium", "high"],
      normes: [
        "Fabriqué sous normes ISO13485",
        "CE médical - MTIC 0068"
      ],
      inclus: [
        "1 appareil Hi-TENS",
        "8 électrodes adhésives",
        "2 câbles de connexion",
        "1 chargeur",
        "1 mallette de transport"
      ]
    }
  }
]

export function DeviceTabs() {
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0)
  const [currentTab, setCurrentTab] = useState("info")
  const currentDevice = devices[currentDeviceIndex]

  const nextDevice = () => {
    setCurrentDeviceIndex((prev) => (prev + 1) % devices.length)
  }

  const previousDevice = () => {
    setCurrentDeviceIndex((prev) => (prev - 1 + devices.length) % devices.length)
  }

  return (
    <Tabs 
      defaultValue="info" 
      className="w-full"
      onValueChange={(value) => setCurrentTab(value)}
    >
      <div className="flex justify-center mb-4">
        <TabsList className="grid w-full max-w-[400px] grid-cols-3">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="protocols">Ressources</TabsTrigger>
        </TabsList>
      </div>

      {currentTab === "info" && (
        <div className="flex items-center justify-center gap-4 mb-6 px-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">{currentDevice.name}</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-5 w-5" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-[90vw] md:w-[450px] p-4 bg-white rounded-xl border border-gray-200 shadow-lg" 
                align="start"
                sideOffset={8}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <h3 className="text-lg font-bold">CARACTÉRISTIQUES {currentDevice.name}</h3>
                  <DeviceFAQ />
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Puissance:</span> {currentDevice.specifications.puissance}
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Processeurs:</span> {currentDevice.specifications.processeurs}
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Fréquences:</span>
                    <ul className="ml-4 mt-2 space-y-1">
                      {Object.entries(currentDevice.specifications.frequences).map(([key, values]) => (
                        <li key={key} className="flex flex-col">
                          <span className="font-medium">{key}:</span>
                          <span className="text-gray-600">{values.join(", ")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Modes:</span>
                    <ul className="ml-4 mt-2 space-y-1">
                      {currentDevice?.specifications?.modes && 
                        Object.entries(currentDevice.specifications.modes).map(([key, values]) => (
                          <li key={key} className="flex flex-col">
                            <span className="font-medium">{key}:</span>
                            <span className="text-gray-600">{values.join(", ")}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Intensité CET, RET et MIX:</span> 
                    <div className="mt-1 text-gray-600">
                      {currentDevice?.specifications?.intensite ? currentDevice.specifications.intensite.join(", ") : "N/A"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Normes:</span>
                    <ul className="ml-4 mt-2 space-y-1">
                      {currentDevice?.specifications?.normes?.map((norme, index) => (
                        <li key={index} className="text-gray-600">{norme}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold">Inclus:</span>
                    <ul className="ml-4 mt-2 space-y-1">
                      {currentDevice?.specifications?.inclus?.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      )}

      <div>
        <TabsContent value="info">
          <DeviceInfo 
            {...{
              ...currentDevice,
              sub: currentDevice.subDevices
            }}
            onNext={nextDevice}
            onPrevious={previousDevice}
            hasMultipleDevices={devices.length > 1}
          />
        </TabsContent>
        <TabsContent value="activity" className="mt-4">
          <DeviceActivity />
        </TabsContent>
        <TabsContent value="protocols">
          <DeviceRessources />
        </TabsContent>
      </div>
    </Tabs>
  )
}
