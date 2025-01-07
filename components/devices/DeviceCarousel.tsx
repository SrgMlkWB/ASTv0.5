"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export type Device = {
  id: string
  name: string
  image: string
  version: string
  serialNumber: string
  config: string
  type: string
  subVersion: string
}

const devices: Device[] = [
  {
    id: "back4",
    name: "BACK4",
    image: "/assets/devices/BACK4.jpg",
    version: "3.15",
    serialNumber: "16578647U8O9P8",
    config: "12.2",
    type: "3",
    subVersion: "3.15"
  },
  {
    id: "back3tx",
    name: "BACK3TX",
    image: "/assets/devices/BACK3TX.jpg",
    version: "3.15",
    serialNumber: "98765432ABC",
    config: "11.8",
    type: "2",
    subVersion: "3.10"
  }
]

interface DeviceCarouselProps {
  onDeviceChange: (device: Device) => void
}

export function DeviceCarousel({ onDeviceChange }: DeviceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? devices.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    onDeviceChange(devices[newIndex])
  }

  const handleNext = () => {
    const newIndex = currentIndex === devices.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    onDeviceChange(devices[newIndex])
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="relative h-[400px] w-full max-w-md">
          <Image
            src={devices[currentIndex].image}
            alt={devices[currentIndex].name}
            fill
            className="object-contain"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {devices.map((device, index) => (
          <button
            key={device.id}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              onDeviceChange(device)
            }}
          />
        ))}
      </div>
    </div>
  )
}
