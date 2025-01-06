"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface DeviceTabsProps {
  children?: React.ReactNode
}

export function DeviceTabs({ children }: DeviceTabsProps) {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">All Devices</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="inactive">Inactive</TabsTrigger>
      </TabsList>
      <TabsContent value="all">{children}</TabsContent>
      <TabsContent value="active">Active devices content</TabsContent>
      <TabsContent value="inactive">Inactive devices content</TabsContent>
    </Tabs>
  )
}
