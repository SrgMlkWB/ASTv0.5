"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { ModuleCategories } from "./module-categories"
import { BeginnerModule } from "./modules/beginner-module"
import { FaqPopover } from "./faq-popover"

export function AcademyTabs() {
  return (
    <Tabs defaultValue="modules" className="w-full">
      <div className="sticky top-0 z-10 bg-background">
        <div className="px-4 flex items-center justify-between">
          <TabsList className="grid w-full max-w-[400px] grid-cols-3">
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="encours">En cours</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>
          <FaqPopover />
        </div>
      </div>
      <div className="px-4 py-6">
        <TabsContent value="modules" className="m-0">
          <Card className="border-0 shadow-none">
            <ModuleCategories />
          </Card>
        </TabsContent>
        <TabsContent value="encours" className="m-0">
          <Card className="border-0 shadow-none">
            <BeginnerModule />
          </Card>
        </TabsContent>
        <TabsContent value="certification" className="m-0">
          <Card className="border-0 shadow-none">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Certification Winback</h2>
              <p className="text-gray-500">Le contenu de certification sera bientôt disponible</p>
            </div>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  )
}
