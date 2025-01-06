"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const treatmentData = [
  { day: "Fri", treatments: 0 },
  { day: "Sat", treatments: 0 },
  { day: "Sun", treatments: 0 },
  { day: "Mon", treatments: 0 },
  { day: "Tue", treatments: 7 },
  { day: "Wed", treatments: 10 },
  { day: "Thu", treatments: 2 }
]

const modeData = [
  { name: "CET", value: 30, color: "#F18841" },
  { name: "RET", value: 25, color: "#3B82F6" },
  { name: "HI-TENS", value: 35, color: "#06B6D4" },
  { name: "HI-EMS", value: 10, color: "#93C5FD" }
]

const accessoryData = [
  { name: "TECARX_MIX_FACE", value: 20, color: "#F472B6" },
  { name: "TECARX CET", value: 20, color: "#F18841" },
  { name: "TECARX_MIX_BODY", value: 15, color: "#FCD34D" },
  { name: "TECAR3_RET_40_CVX", value: 15, color: "#2DD4BF" },
  { name: "TECAR3_HYB_40", value: 15, color: "#60A5FA" },
  { name: "MIX_BODY", value: 15, color: "#A78BFA" }
]

const protocols = [
  {
    id: 1,
    time: "15:15 / 15:30",
    steps: [
      { step: 1, way: 1, mode: "CET", type: "SOFT MEDIUM", intensity: "50%", duration: "5'" },
      { step: 1, way: 2, mode: "RET", type: "SOFT MEDIUM", intensity: "10%", duration: "5'" },
      { step: 2, way: 1, mode: "CET", type: "SOFT MEDIUM", intensity: "50%", duration: "10'" },
      { step: 2, way: 2, mode: "RET", type: "SOFT MEDIUM", intensity: "10%", duration: "10'" },
      { step: 2, way: 2, mode: "HI-TENS", type: "DYN", intensity: "2%", duration: "10'" }
    ]
  }
]

export function DeviceActivity() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [view, setView] = useState<"week" | "day">("week")

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="card p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl font-bold">263</div>
            <div className="text-lg text-muted-foreground">minutes</div>
          </motion.div>
        </Card>
        <Card className="card p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-5xl font-bold">19</div>
            <div className="text-lg text-muted-foreground">Treatments</div>
          </motion.div>
        </Card>
      </div>

      <Card className="card p-4">
        <h3 className="font-medium mb-4">Number of treatments</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={treatmentData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Bar
              dataKey="treatments"
              fill="var(--primary)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="card p-4">
          <h3 className="font-medium mb-4">Mode usage (%)</h3>
          <Tabs defaultValue="week" className="mb-4">
            <TabsList>
              <TabsTrigger value="week" onClick={() => setView("week")}>Week</TabsTrigger>
              <TabsTrigger value="day" onClick={() => setView("day")}>Day</TabsTrigger>
            </TabsList>
          </Tabs>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={modeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
              >
                {modeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="card p-4">
          <h3 className="font-medium mb-4">Accessories usage (%)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={accessoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
              >
                {accessoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="card p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon" className="btn">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h2 className="text-xl font-medium">12 Aout 2023</h2>
          <Button variant="ghost" size="icon" className="btn">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {protocols.map((protocol) => (
          <div key={protocol.id} className="mb-6">
            <h3 className="text-lg font-medium mb-4">
              Protocole {protocol.id} - {protocol.time}
            </h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-4 py-2 text-left">Step</th>
                    <th className="px-4 py-2 text-left">Way</th>
                    <th className="px-4 py-2 text-left">Mode</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Intensity</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {protocol.steps.map((step, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2">{step.step}</td>
                      <td className="px-4 py-2">{step.way}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            step.mode === "CET"
                              ? "bg-[#F18841] text-white"
                              : step.mode === "RET"
                              ? "bg-blue-500 text-white"
                              : "bg-cyan-500 text-white"
                          }`}
                        >
                          {step.mode}
                        </span>
                      </td>
                      <td className="px-4 py-2">{step.type}</td>
                      <td className="px-4 py-2">{step.intensity}</td>
                      <td className="px-4 py-2">{step.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
