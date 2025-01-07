import Image from "next/image"
import Link from "next/link"
import { Search, Bell, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const promotionalProducts = [
  {
    id: "1",
    name: "5+1 OFFERTE ! Crème conductrice",
    image: "/assets/products/creme-conductrice.jpg",
  },
  // Add more promotional products here
]

const myDevices = [
  {
    name: "BACK4",
    version: "Version 3.15",
    image: "/assets/devices/BACK4.jpg"
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
    image: "/assets/devices/BACK4.jpg"
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
  },
]

export default function HomePage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="flex items-center justify-between p-4">
        <Image
          src="/assets/icons/logo_3.png"
          alt="Winback Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-500" />
          <Bell className="w-6 h-6 text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Promotional Carousel */}
      <div className="relative w-full h-48 bg-gray-100 mb-6">
        <div className="carousel w-full h-full">
          {promotionalProducts.map((product) => (
            <div key={product.id} className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* My Devices Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">My devices ({myDevices.length})</h2>
          <Link href="/devices" className="text-orange-500 flex items-center">
            See all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {myDevices.map((device) => (
            <Card key={device.name} className="p-4">
              <div className="relative w-full h-32 mb-2">
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-center">{device.name}</h3>
              <p className="text-sm text-gray-500 text-center">{device.version}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Services</h2>
        <div className="flex flex-col gap-4">
          <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-6">
            Assistance
          </Button>
          <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-6">
            Academy
          </Button>
          <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-6">
            Store
          </Button>
        </div>
      </div>

      {/* All Devices Section */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">All devices ({allDevices.length})</h2>
        <div className="grid grid-cols-2 gap-4">
          {allDevices.map((device) => (
            <Card key={device.name} className="p-4">
              <div className="relative w-full h-32 mb-2">
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-center">{device.name}</h3>
              <p className="text-sm text-gray-500 text-center">{device.version}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
