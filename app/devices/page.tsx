"use client"

import Link from "next/link"
import Image from "next/image"
import { DeviceTabs } from "@/components/devices/DeviceTabs"
import { FAQContactModal } from "@/components/faq-contact-modal"
import { Button } from "@/components/ui/button"
import { HelpCircle } from 'lucide-react'

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-20 bg-background">
        <div className="flex items-center justify-between px-4 h-5">
          <div className="w-9" /> {/* Spacer to maintain layout balance */}
          <div className="w-9" /> {/* Spacer to maintain layout balance */}
          <FAQContactModal>
            <Button variant="ghost" size="icon" className="h-12 w-12 -mt-1.5 -mr-1.5">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </FAQContactModal>
        </div>
      </div>
      <DeviceTabs />
    </div>
  )
}
