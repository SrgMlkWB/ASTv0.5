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
      <div className="sticky top-0 z-20 bg-background border-b">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-16 overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/icons/logo_3.png"
                alt="WinbackASSIST"
                fill
                className="object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] scale-120 p-3"
                />
            </div>
          </Link>
          <span className="text-gray-600 absolute left-1/2 transform -translate-x-1/2">My devices</span>
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
