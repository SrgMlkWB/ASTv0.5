"use client"

import { Card } from "@/components/ui/card"

interface DeviceInfoProps {
  serialNumber: string
  version: string
  config: string
  type: string
}

export function DeviceInfo({ serialNumber, version, config, type }: DeviceInfoProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-6">BACK4</h2>
          <div className="grid grid-cols-2 gap-y-4">
            <div>
              <p className="text-gray-500">Serial Number</p>
              <p className="font-medium">{serialNumber}</p>
            </div>
            <div>
              <p className="text-gray-500">Version</p>
              <p className="font-medium">{version}</p>
            </div>
            <div>
              <p className="text-gray-500">Config</p>
              <p className="font-medium">{config}</p>
            </div>
            <div>
              <p className="text-gray-500">Type</p>
              <p className="font-medium">{type}</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-[#F18841] text-white py-2 rounded-md mt-4 hover:bg-[#E07731] transition-colors">
          View Details
        </button>
      </div>
    </Card>
  )
}
