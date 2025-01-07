"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DeviceInfo } from "./DeviceInfo"
import { DeviceActivity } from "./DeviceActivity"
import { Protocols } from "./protocols"

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
      <div className="sticky top-0 z-10 bg-background border-muted">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className="px-4 py-6">
        <TabsContent value="info">
          <DeviceInfo {...deviceInfo} />
        </TabsContent>
        <TabsContent value="protocols">
          <Protocols />
        </TabsContent>
        <TabsContent value="activity">
          <DeviceActivity />
        </TabsContent>
      </div>
    </Tabs>
  )
}
