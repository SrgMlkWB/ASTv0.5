"use client"

import Link from "next/link"
import Image from "next/image"
import { DeviceTabs } from "@/components/devices/DeviceTabs"

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-6">
        <DeviceTabs />
      </div>
    </div>
  )
}
