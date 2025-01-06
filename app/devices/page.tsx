"use client"

import Link from "next/link"
import { DeviceTabs } from "@/components/devices/DeviceTabs"
import { FAQContactModal } from "@/components/faq-contact-modal"
import { Button } from "@/components/ui/button"
import { HelpCircle } from 'lucide-react'

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-20 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-orange-500 hover:underline">
            ← My devices
          </Link>
          <FAQContactModal>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </FAQContactModal>
        </div>
      </div>
      <DeviceTabs />
    </div>
  )
}
