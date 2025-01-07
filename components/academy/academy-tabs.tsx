"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ELearning } from "./e-learning"
import { Protocols } from "./protocols"

export function AcademyTabs() {
  return (
    <Tabs defaultValue="elearning" className="w-full">
      <div className="sticky top-0 z-10 bg-background">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="elearning">E-Learning</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className="px-4 py-6">
        <TabsContent value="elearning">
          <ELearning />
        </TabsContent>
        <TabsContent value="protocols">
          <Protocols />
        </TabsContent>
      </div>
    </Tabs>
  )
}
