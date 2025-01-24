"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DeviceDetailModal } from "@/components/devices/DeviceDetailModal"
import { SearchBar } from "@/components/search-bar"
import { NotificationsPopover } from "@/components/notifications-popover"
import { UserProfileModal } from "@/components/user-profile-modal"

const promotionalProducts = [
  {
    id: "1",
    name: "5+1 OFFERTE ! Crème conductrice",
    image: "/assets/products/CREME1.jpg",
    price: "165,00 €",
    originalPrice: "198,00 €"
  },
  {
    id: "2",
    name: "Carton 12 crèmes conductrices",
    image: "/assets/products/CREME2.jpg",
    price: "324,00 €",
    originalPrice: "396,00 €"
  },
  {
    id: "3",
    name: "Pack consommables TECAR",
    image: "/assets/products/PACK_TECAR1.jpg",
    price: "184,45 €",
    originalPrice: "217,00 €"
  },
  {
    id: "4",
    name: "Pack Doki Tape",
    image: "/assets/products/DOKI_TAPE1.jpg",
    price: "74,80 €",
    originalPrice: "88,00 €"
  }
]

const myDevices = [
  {
    name: "BACK4",
    version: "Version 3.15",
    image: "/assets/images/Back4/1BACK4.png"
  },
  {
    name: "BACK3TX",
    version: "Version 3.15",
    image: "/assets/devices/BACK3TX.jpg"
  }
]

const allDevices = [
  {
    name: "BACK4",
    version: "Version 3.15",
    image: "/assets/images/Back4/1BACK4.png"
  },
  {
    name: "BACK3TX",
    version: "Version 3.15",
    image: "/assets/devices/BACK3TX.jpg"
  },
  {
    name: "Hi-TENS",
    version: "Version 3.15",
    image: "/assets/devices/hitens.jpg"
  }
]

export default function HomePage() {
  const [selectedDevice, setSelectedDevice] = useState<(typeof allDevices)[0] | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
      <div className="flex items-center justify-between p-2 md:p-4 relative">
        <button 
          onClick={() => setIsProfileOpen(true)}
          className="w-12 h-12 md:w-15 md:h-15 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors overflow-hidden"
        >
          <Image
            src="/assets/images/LogoWBrand.png"
            alt="Profile"
            width={48}
            height={48}
            className="object-cover"
          />
        </button>
        <h1 className="pl-2 md:pl-4 flex-1 text-lg md:text-xl font-bold">Bienvenue, John!</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Image
              src="/assets/images/LogoLoupe.png"
              alt="Search"
              width={34}
              height={34}
              className="text-gray-500"
            />
          </button>
          <NotificationsPopover />
        </div>

        <SearchBar
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>

      {/* Promotional Carousel */}
      <div className="px-2 md:px-4 mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">Nos Promotions</h2>
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 pb-3 md:pb-4 hide-scrollbar">
            {promotionalProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex-none w-[280px] md:w-1/4 snap-center"
                onClick={() => setSelectedDevice({
                  name: product.name,
                  version: "Version 3.15", // Using the default version from allDevices
                  image: product.image
                })}
              >
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 h-10 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 font-bold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Devices Section */}
      <div className="px-2 md:px-4 mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700">My devices ({myDevices.length})</h2>
          <Link href="/devices" className="text-orange-500 text-sm md:text-base flex items-center hover:underline">
            See all 
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {myDevices.map((device) => (
            <Card 
              key={device.name} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedDevice(device)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 h-10 line-clamp-2">{device.name}</h3>
                <p className="text-sm text-gray-500">{device.version}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="px-2 md:px-4 mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">Services</h2>
        <div className="flex flex-col gap-3 md:gap-4">
          {/* <Link href="/assist">
            <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-6">
              Assistance
            </Button>
          </Link> */}
          <Link href="/academy">
            <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-6">
              Academy
            </Button>
          </Link>
          <Link href="/store">
            <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-6">
              Store
            </Button>
          </Link>
        </div>
      </div>

      {/* All Devices Section */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">All devices ({allDevices.length})</h2>
        <div className="grid grid-cols-2 gap-4">
          {allDevices.map((device) => (
            <Card 
              key={device.name} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedDevice(device)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 h-10 line-clamp-2">{device.name}</h3>
                <p className="text-sm text-gray-500">{device.version}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modals */}
      {selectedDevice && (
        <DeviceDetailModal
          isOpen={!!selectedDevice}
          onClose={() => setSelectedDevice(null)}
          device={selectedDevice}
        />
      )}
      
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </main>
  )
}
