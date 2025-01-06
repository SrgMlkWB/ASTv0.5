"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DeviceInfo } from "./DeviceInfo"
import { DeviceActivity } from "./DeviceActivity"
import { DeviceResources } from "./DeviceResources"

interface DeviceTabsProps {
  children?: React.ReactNode
}

export function DeviceTabs() {
  const deviceInfo = {
    serialNumber: "16578647U8O9P8",
    version: "3.15",
    config: "12.2",
    type: "3"
  }

  return (
    <Tabs defaultValue="info" className="w-full">
      <div className="border-b">
        <TabsList className="max-w-screen-xl mx-auto">
          <TabsTrigger value="info" className="flex-1">Info</TabsTrigger>
          <TabsTrigger value="activity" className="flex-1">Activity</TabsTrigger>
          <TabsTrigger value="resources" className="flex-1">Resources</TabsTrigger>
        </TabsList>
      </div>
      
      <div className="max-w-screen-xl mx-auto p-4">
        <TabsContent value="info">
          <DeviceInfo {...deviceInfo} />
        </TabsContent>
        <TabsContent value="activity">
          <DeviceActivity />
        </TabsContent>s
        <TabsContent value="resources">
          <DeviceResources />
        </TabsContent>
      </div>
    </Tabs>
  )
}
