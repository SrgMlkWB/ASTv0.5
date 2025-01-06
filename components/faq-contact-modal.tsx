"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { TroubleshootingGuide } from "./troubleshooting-guide"
import { ContactForm } from "./contact-form"

export function FAQContactModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
        <DialogTitle className="sr-only">Troubleshooting Guide and Contact Information</DialogTitle>
        <Tabs defaultValue="troubleshooting" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="troubleshooting">Troubleshooting Guide</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="troubleshooting">
            <TroubleshootingGuide />
          </TabsContent>
          <TabsContent value="contact">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center">Contact the Winback team, leader in tecartherapy</h2>
              <ContactForm />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
