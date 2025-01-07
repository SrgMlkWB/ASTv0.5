"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

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
}

export function DeviceInfo({ name, serialNumber, version, config, type, sub }: DeviceInfoProps) {
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
    <div className="space-y-8">
      <div className="aspect-video w-full max-w-[500px] mx-auto">
        <img
          src={getImageSrc(name)}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">{name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">Numéro de série</div>
              <div className="font-medium">{serialNumber}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Version</div>
              <div className="font-medium">{version}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Configuration</div>
              <div className="font-medium">{config}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Type</div>
              <div className="font-medium">{type}</div>
            </div>
          </div>
        </div>

        {sub && sub.map((subDevice, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">{subDevice.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Configuration</div>
                <div className="font-medium">{subDevice.config}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Type</div>
                <div className="font-medium">{subDevice.type}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Version</div>
                <div className="font-medium">{subDevice.version}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
