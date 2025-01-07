"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeviceInfo } from "./DeviceInfo"
import { DeviceActivity } from "./DeviceActivity"
import { Protocols } from "./protocols"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const devices = [
  {
    name: "BACK4",
    serialNumber: "16578647U8O9P8",
    version: "3.15",
    config: "12.2",
    type: "3",
    sub: [
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
    ]
  },
  {
    name: "BACK3TX",
    serialNumber: "98765432ABC",
    version: "3.15",
    config: "11.8",
    type: "2",
    sub: [
      {
        name: "SUB1",
        config: "11.8",
        type: "2",
        version: "3.15"
      }
    ]
  },
  {
    name: "HI-TENS",
    serialNumber: "HITENS123456",
    version: "3.15",
    config: "10.5",
    type: "1",
    sub: []
  }
]

export function DeviceTabs() {
  const [currentDevice, setCurrentDevice] = useState(0)

  const nextDevice = () => {
    setCurrentDevice((prev) => (prev + 1) % devices.length)
  }

  const previousDevice = () => {
    setCurrentDevice((prev) => (prev - 1 + devices.length) % devices.length)
  }

  return (
    <Tabs defaultValue="info" className="w-full">
      <div className="sticky top-0 z-10 bg-background border-muted">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="protocols">Ressources</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className="px-4 py-6">
        <TabsContent value="info">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDevice}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <DeviceInfo 
                {...devices[currentDevice]} 
                onNext={nextDevice}
                onPrevious={previousDevice}
                hasMultipleDevices={devices.length > 1}
              />
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="activity">
          <DeviceActivity />
        </TabsContent>
        <TabsContent value="protocols">
          <Protocols />
        </TabsContent>
      </div>
    </Tabs>
  )
}
