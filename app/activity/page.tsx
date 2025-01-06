"use client"

import { DeviceActivity } from "@/components/devices/DeviceActivity"

export default function ActivityPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Device Activity</h1>
      <DeviceActivity />
    </div>
  )
}
