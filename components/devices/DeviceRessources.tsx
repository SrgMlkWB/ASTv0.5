"use client"

import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DeviceRessources() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/devices/BACK4/back4.pdf';
    link.download = 'WINBACK_BACK4_Manuel_Utilisateur.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FileText className="h-5 w-5 text-[#F18841] mr-2" />
          <span className="text-lg font-semibold">WINBACK BACK4 MANUEL UTILISATEUR</span>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 text-[#F18841] border-[#F18841] hover:bg-[#F18841] hover:text-white"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          Télécharger
        </Button>
      </div>
      
      <div className="w-full h-[calc(100vh-200px)] relative">
        <object
          data="/assets/devices/BACK4/back4.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full bg-gray-100 rounded-lg p-6">
            <p className="text-gray-600 mb-4">Le PDF ne peut pas être affiché directement.</p>
            <Button 
              variant="default" 
              className="bg-[#F18841] hover:bg-[#F18841]/90 text-white"
              onClick={handleDownload}
            >
              Télécharger le PDF
            </Button>
          </div>
        </object>
      </div>
    </div>
  )
}
