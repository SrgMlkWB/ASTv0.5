"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ModuleCategories } from "./module-categories"
import { BeginnerModule } from "./modules/beginner-module"
import { FaqPopover } from "./faq-popover"

export function AcademyTabs() {
  return (
    <Tabs defaultValue="modules" className="w-full">
      <div className="sticky top-0 z-10 bg-background">
        <div className="flex justify-between items-center py-4 px-2 sm:px-4">
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/LogoAcademy.png"
              alt="Academy Logo"
              width={200}
              height={80}
              priority
              className="object-contain"
            />
          </div>
          <div>
            <FaqPopover />
          </div>
        </div>
        <div className="px-2 sm:px-4 flex justify-center py-2">
          <TabsList className="h-9 w-full max-w-[400px] grid grid-cols-3 gap-1 bg-gray-100">
            <TabsTrigger 
              value="modules" 
              className="text-sm px-3 data-[state=active]:bg-white data-[state=active]:text-[#F18841] transition-colors"
            >
              Modules
            </TabsTrigger>
            <TabsTrigger 
              value="encours" 
              className="text-sm px-3 data-[state=active]:bg-white data-[state=active]:text-[#F18841] transition-colors"
            >
              En cours
            </TabsTrigger>
            <TabsTrigger 
              value="certification" 
              className="text-sm px-3 data-[state=active]:bg-white data-[state=active]:text-[#F18841] transition-colors"
            >
              Certification
            </TabsTrigger>
          </TabsList>
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
