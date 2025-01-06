"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function AssistPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Assist</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4">Live Support</h2>
            <p className="text-muted-foreground mb-4">
              Connect with our support team for real-time assistance with your medical devices.
            </p>
            <Button className="w-full">
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Chat
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4">Troubleshooting Guide</h2>
            <p className="text-muted-foreground mb-4">
              Access our comprehensive troubleshooting guides and FAQs.
            </p>
            <Button variant="outline" className="w-full">
              View Guides
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
