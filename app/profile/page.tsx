"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="hospital" className="text-sm font-medium">
                Hospital/Institution
              </label>
              <Input id="hospital" placeholder="General Hospital" />
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Role
              </label>
              <Input id="role" placeholder="Medical Technician" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
