"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function DeviceFAQ() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Common questions about your device and its usage
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I connect my device?</AccordionTrigger>
          <AccordionContent>
            To connect your device, ensure it is powered on and within range. Open your device's Bluetooth settings and select the device from the list of available devices. Follow any on-screen prompts to complete the pairing process.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What should I do if my device isn't responding?</AccordionTrigger>
          <AccordionContent>
            If your device is not responding, try these steps:
            1. Ensure the device is charged
            2. Turn the device off and on again
            3. Reset the connection
            4. If problems persist, contact our support team
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How often should I update my device?</AccordionTrigger>
          <AccordionContent>
            We recommend checking for updates monthly. Updates are automatically pushed to your device when available, but you can manually check for updates in the device settings menu.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What's the battery life of the device?</AccordionTrigger>
          <AccordionContent>
            The battery life varies depending on usage, but typically lasts 8-10 hours with normal use. You can extend battery life by adjusting power settings and closing unused applications.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
