import { DeviceActivity } from "@/components/devices/DeviceActivity"
import { DetailedUsageChart } from "@/components/charts/DetailedUsageChart"

export default function ActivityPage() {
  return (
    <div className="px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">Activité de l'appareil</h1>
      <DetailedUsageChart deviceName="Device1" />
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-primary">Recent Activity</h2>
        <DeviceActivity />
      </section>
    </div>
  )
}
