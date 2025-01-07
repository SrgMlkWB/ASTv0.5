"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SubDevice {
  name: string
  config: string
  type: string
  version: string
}

interface DeviceInfoProps {
  name: string
  serialNumber: string
  version: string
  config: string
  type: string
  sub?: SubDevice[]
  onNext: () => void
  onPrevious: () => void
  hasMultipleDevices: boolean
}

export function DeviceInfo({ 
  name, 
  serialNumber, 
  version, 
  config, 
  type, 
  sub,
  onNext,
  onPrevious,
  hasMultipleDevices
}: DeviceInfoProps) {
  const getImageSrc = (deviceName: string) => {
    switch(deviceName.toLowerCase()) {
      case "back4":
        return "/assets/devices/BACK4.jpg"
      case "back3tx":
        return "/assets/devices/BACK3TX.jpg"
      case "hi-tens":
        return "/assets/devices/hitens.jpg"
      default:
        return "/assets/devices/default-device.jpg"
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 space-y-8">
      <div className="relative w-full flex justify-center items-center mb-12">
        {hasMultipleDevices && (
          <>
            <button 
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white/90 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white/90 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </>
        )}
        <div className="w-[50vw] aspect-video">
          <img
            src={getImageSrc(name)}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-4 max-w-lg mx-auto">
        <div className="bg-gray-50/50 rounded-lg p-4">
          <div className="divide-y divide-gray-200">
            <div className="flex justify-between items-center py-2.5">
              <div className="text-gray-600">Device</div>
              <div className="font-medium">{name}</div>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <div className="text-gray-600">Serial number</div>
              <div className="font-medium">{serialNumber}</div>
            </div>
          </div>
        </div>

        {sub && sub.map((subDevice, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-gray-600 font-medium">{subDevice.name}</h3>
            <div className="bg-gray-50/50 rounded-lg p-4">
              <div className="divide-y divide-gray-200">
                <div className="flex justify-between items-center py-2.5">
                  <div className="text-gray-600">Config</div>
                  <div className="font-medium">{subDevice.config}</div>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <div className="text-gray-600">Type</div>
                  <div className="font-medium">{subDevice.type}</div>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <div className="text-gray-600">Version</div>
                  <div className="font-medium">{subDevice.version}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
