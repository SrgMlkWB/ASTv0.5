"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Settings, Clock, Smartphone, LogOut } from "lucide-react"

interface UserData {
  firstName: string
  lastName: string
  email: string
  specialty: string
  phone: string
  address: string
  registeredDevices: {
    name: string
    serialNumber: string
    lastUsed: string
    totalUsageTime: string
  }[]
  appUsageStats: {
    totalTime: string
    lastSession: string
    averageSessionLength: string
    mostUsedFeature: string
  }
}

const mockUserData: UserData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  specialty: "Kinésithérapeute",
  phone: "+33 6 12 34 56 78",
  address: "123 Rue de la Santé, 75001 Paris",
  registeredDevices: [
    {
      name: "BACK4",
      serialNumber: "WB-B4-2023-1234",
      lastUsed: "Aujourd'hui à 09:30",
      totalUsageTime: "127 heures"
    },
    {
      name: "BACK3TX",
      serialNumber: "WB-B3-2022-5678",
      lastUsed: "Hier à 16:45",
      totalUsageTime: "89 heures"
    }
  ],
  appUsageStats: {
    totalTime: "216 heures",
    lastSession: "Aujourd'hui à 09:30",
    averageSessionLength: "45 minutes",
    mostUsedFeature: "Assistance"
  }
}

export function UserProfileModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [userData, setUserData] = useState<UserData>(mockUserData)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Profil Utilisateur</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="devices">Appareils</TabsTrigger>
            <TabsTrigger value="stats">Statistiques</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-10 h-10 text-gray-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{userData.firstName} {userData.lastName}</h2>
                <p className="text-gray-500">{userData.specialty}</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    value={userData.firstName}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={userData.lastName}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Spécialité</Label>
                <Input
                  id="specialty"
                  value={userData.specialty}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={userData.phone}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  value={userData.address}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant={isEditing ? "outline" : "default"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Annuler" : "Modifier"}
              </Button>
              {isEditing && (
                <Button onClick={() => setIsEditing(false)}>
                  Enregistrer
                </Button>
              )}
            </div>
          </TabsContent>

          <TabsContent value="devices">
            <div className="space-y-4">
              {userData.registeredDevices.map((device, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{device.name}</h3>
                    <span className="text-sm text-gray-500">
                      {device.serialNumber}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Dernière utilisation</p>
                      <p>{device.lastUsed}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Temps total d'utilisation</p>
                      <p>{device.totalUsageTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <h3 className="font-semibold">Temps total</h3>
                  </div>
                  <p className="text-2xl font-bold">{userData.appUsageStats.totalTime}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <h3 className="font-semibold">Dernière session</h3>
                  </div>
                  <p>{userData.appUsageStats.lastSession}</p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Statistiques d'utilisation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Durée moyenne de session</span>
                    <span>{userData.appUsageStats.averageSessionLength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fonctionnalité la plus utilisée</span>
                    <span>{userData.appUsageStats.mostUsedFeature}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="border-t pt-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={onClose}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Se déconnecter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
