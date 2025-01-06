import Image from "next/image"
import Link from "next/link"
import { Search, Bell, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProfileMenu } from "@/components/profile-menu"

const myDevices = [
  {
    name: "BACK4",
    version: "Version 3.15",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg"
  },
  {
    name: "BACK3TX",
    version: "Version 3.15",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg"
  }
]

const allDevices = [
  {
    name: "BACK4",
    version: "Version 3.15",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg"
  },
  {
    name: "BACK3TX",
    version: "Version 3.15",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg"
  },
  {
    name: "Hi-TENS",
    version: "Version 3.15",
    image: "https://m3.winback.store/14344-large_default/hi-tens-l-electrotherapie-by-winback.jpg"
  },
  {
    name: "BACK3",
    version: "Version 3.00",
    image: "https://m1.winback.store/15357-thickbox_default/back-3tx-winback.jpg"
  }
]

export default function HomePage() {
  return (
    <div className="pb-16">
      <header className="p-4 flex items-center">
        <div className="flex-1"></div>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <Search className="h-6 w-6" />
          </button>
          <button className="p-2">
            <Bell className="h-6 w-6" />
          </button>
          <ProfileMenu />
        </div>
      </header>

      <main className="space-y-6 p-4">
        {/* Promotional Banner */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="https://m3.winback.store/14900-large_default/pack-consommables-tecar-winback.jpg"
            alt="5+1 Offer on Essential products"
            fill
            className="object-cover"
          />
        </div>

        {/* My Devices Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My devices (3)</h2>
            <Link href="/devices" className="text-[#F18841] flex items-center">
              See all
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {myDevices.map((device) => (
              <Card key={device.name} className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-center">{device.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{device.version}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full bg-[#F18841] text-white hover:bg-[#F18841]/90 border-none h-12"
            >
              Assistance
            </Button>
            <Button
              variant="outline"
              className="w-full bg-[#F18841] text-white hover:bg-[#F18841]/90 border-none h-12"
            >
              Academy
            </Button>
            <Button
              variant="outline"
              className="w-full bg-[#F18841] text-white hover:bg-[#F18841]/90 border-none h-12"
            >
              Store
            </Button>
          </div>
        </section>

        {/* All Devices Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">All devices (5)</h2>
          <div className="grid grid-cols-2 gap-4">
            {allDevices.map((device) => (
              <Card key={device.name} className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-center">{device.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{device.version}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
