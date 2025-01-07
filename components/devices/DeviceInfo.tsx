"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ProtocolTable } from "./protocol-table"

interface DeviceInfoProps {
  serialNumber: string
  version: string
  config: string
  type: string
}

export function DeviceInfo({ serialNumber, version, config, type }: DeviceInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-center p-8 bg-gradient-to-b from-[#F18841]/10 to-white rounded-xl">
        <Image
          src="/images/back4-device.png"
          alt="BACK4 Device"
          width={400}
          height={250}
          className="w-auto h-auto drop-shadow-xl"
          priority
        />
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Device Information</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Serial Number:</span>
                <span className="font-medium">{serialNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version:</span>
                <span className="font-medium">{version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Config:</span>
                <span className="font-medium">{config}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-medium">{type}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Current Protocol</h3>
          <ProtocolTable />
        </div>
      </div>
    </div>
  )
}
