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
        <div className="px-2 sm:px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 py-2">
          <TabsList className="h-9 w-full sm:w-auto grid grid-cols-3 gap-1">
            <TabsTrigger value="modules" className="text-xs sm:text-sm px-2 sm:px-3">Modules</TabsTrigger>
            <TabsTrigger value="encours" className="text-xs sm:text-sm px-2 sm:px-3">En cours</TabsTrigger>
            <TabsTrigger value="certification" className="text-xs sm:text-sm px-2 sm:px-3">Certification</TabsTrigger>
          </TabsList>
          <div className="self-end sm:self-auto">
            <FaqPopover />
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-4 py-4 sm:py-6">
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
            <div className="text-center py-8 sm:py-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Certification Winback</h2>
              <p className="text-gray-500">Le contenu de certification sera bientôt disponible</p>
            </div>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  )
}
