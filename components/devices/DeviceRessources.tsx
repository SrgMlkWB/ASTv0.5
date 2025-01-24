"use client"

import { FileText, Download, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DeviceRessources() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="p-1 hover:bg-yellow-100 transition-colors"
              >
                <Lightbulb className="h-24 w-24 text-[#F18841]" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[800px] max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-[#F18841]">Conseils d&apos;utilisation Winback</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[calc(80vh-100px)] pr-4">
                <div className="space-y-4">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Conseils Généraux</h3>
                    <h4 className="font-medium">Formation et Connaissance du Dispositif</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Les kinésithérapeutes doivent impérativement suivre une formation dispensée par WINBACK avant d&apos;utiliser les appareils.</li>
                      <li>Il est essentiel de se tenir informé des derniers développements cliniques, des indications et contre-indications appropriées pour chaque traitement.</li>
                    </ul>
                    
                    <h4 className="font-medium mt-4">Sécurité du Patient</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Toujours s&apos;assurer qu&apos;il n&apos;y a pas de contre-indications avant de commencer un traitement.</li>
                      <li>Ne jamais utiliser le dispositif lorsque le patient est connecté à un autre appareil.</li>
                      <li>Le bouton d&apos;arrêt d&apos;urgence doit toujours être branché et accessible au patient.</li>
                      <li>Ne pas traiter directement certaines zones comme le cerveau, les yeux et la région du cœur.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Conseils Techniques</h3>
                    <h4 className="font-medium">Modes de Traitement</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Le mode CET est plus superficiel et cible les tissus mous, tandis que le mode RET est plus profond et cible les tissus durs.</li>
                      <li>Utiliser le mode MIX pour une action superficielle sur l&apos;épiderme et le derme.</li>
                      <li>Choisir le mode de traitement adapté en fonction de la pathologie et du patient.</li>
                    </ul>

                    <h4 className="font-medium mt-4">Intensité du Traitement</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Commencer avec une intensité faible lors des premières séances, surtout en cas d&apos;inflammation importante.</li>
                      <li>En mode mains-libres avec les électrodes fixes, ne pas dépasser 40% d&apos;intensité et utiliser le mode LOW.</li>
                      <li>En cas de douleur ressentie par le patient pendant le traitement, réduire immédiatement l&apos;intensité.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Maintenance et Application Mobile</h3>
                    <h4 className="font-medium">Maintenance de l&apos;appareil</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nettoyer et désinfecter les accessoires après chaque traitement.</li>
                      <li>Le dispositif doit être révisé par le fabricant tous les deux ans.</li>
                      <li>Ne jamais ouvrir le dispositif soi-même.</li>
                    </ul>

                    <h4 className="font-medium mt-4">Application Winback Assist</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Utiliser l&apos;application pour optimiser l&apos;utilisation du dispositif.</li>
                      <li>Consulter les manuels et les vidéos explicatives disponibles.</li>
                      <li>Utiliser l&apos;historique des traitements pour adapter les protocoles.</li>
                    </ul>
                  </section>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
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
