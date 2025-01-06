"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function AcademyPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Academy</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Training Modules</h2>
            <p className="text-muted-foreground">
              Access our comprehensive training modules to enhance your medical device knowledge.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <p className="text-muted-foreground">
              Complete courses and earn certifications in medical device operation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Resources</h2>
            <p className="text-muted-foreground">
              Download educational materials and documentation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
