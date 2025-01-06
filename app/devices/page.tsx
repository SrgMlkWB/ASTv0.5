"use client"

import { useState } from "react"
import Link from "next/link"
import { DeviceTabs } from "@/components/devices/DeviceTabs"
import { FAQContactModal } from "@/components/faq-contact-modal"
import { Button } from "@/components/ui/button"
import { HelpCircle } from 'lucide-react'

export default function DevicesPage() {
  return (
    <div>
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-orange-500">← My devices</Link>
          <h1 className="text-xl font-semibold">My Devices</h1>
        </div>
        <FAQContactModal>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </FAQContactModal>
      </header>
      <DeviceTabs />
    </div>
  )
}
