"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface DeviceInfoProps {
  serialNumber: string
  version: string
  config: string
  type: string
}

export function DeviceInfo({ serialNumber, version, config, type }: DeviceInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-center p-8 bg-gradient-to-b from-gray-100 to-white rounded-xl">
        <Image
          src="/images/back4-device.png"
          alt="BACK4 Device"
          width={400}
          height={250}
          className="w-auto h-auto"
          priority
        />
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Device</h3>
          <p className="text-gray-900">Back4</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Serial number</h3>
          <p className="text-gray-900">{serialNumber}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium px-4">SUB1</h3>
          <div className="bg-white rounded-xl divide-y">
            <div className="p-4">
              <h4 className="text-gray-500 text-sm mb-2">Config</h4>
              <p className="text-gray-900">{config}</p>
            </div>
            <div className="p-4">
              <h4 className="text-gray-500 text-sm mb-2">Type</h4>
              <p className="text-gray-900">{type}</p>
            </div>
            <div className="p-4">
              <h4 className="text-gray-500 text-sm mb-2">Version</h4>
              <p className="text-gray-900">{version}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium px-4">SUB2</h3>
          <div className="bg-white rounded-xl divide-y">
            <div className="p-4">
              <h4 className="text-gray-500 text-sm mb-2">Config</h4>
              <p className="text-gray-900">{config}</p>
            </div>
            <div className="p-4">
              <h4 className="text-gray-500 text-sm mb-2">Type</h4>
              <p className="text-gray-900">{type}</p>
            </div>
            <div className="p-4">
              <h4 className="text-gray-500 text-sm mb-2">Version</h4>
              <p className="text-gray-900">{version}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}