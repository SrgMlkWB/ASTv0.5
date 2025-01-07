"use client"

import { FileText } from "lucide-react"

export function DeviceRessources() {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <FileText className="h-5 w-5 text-[#F18841] mr-2" />
        <span className="text-lg font-semibold">WINBACK BACK4 MANUEL UTILISATEUR</span>
      </div>
      <iframe
        src="https://www.manualslib.fr/manual/637603/Winback-Back4.html"
        className="w-full h-[calc(100vh-200px)] border-none"
        title="WINBACK BACK4 MANUEL UTILISATEUR"
      />
    </div>
  )
}
