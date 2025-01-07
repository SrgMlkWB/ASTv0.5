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
  const [selectedDate, setSelectedDate] = useState("8 Jan. - 31 Jan. 2024")
  const [activeTab, setActiveTab] = useState("charts")

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className={`flex-1 bg-white border-gray-200 hover:bg-gray-50 text-gray-900 font-medium ${
            activeTab === "charts" ? "border-[#F18841] text-[#F18841]" : ""
          }`}
          onClick={() => setActiveTab("charts")}
        >
          Charts
        </Button>
        <Button
          variant="outline"
          className={`flex-1 bg-white border-gray-200 hover:bg-gray-50 text-gray-900 font-medium ${
            activeTab === "protocols" ? "border-[#F18841] text-[#F18841]" : ""
          }`}
          onClick={() => setActiveTab("protocols")}
        >
          My protocols
        </Button>
      </div>

      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-100">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium text-gray-900">{selectedDate}</span>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {activeTab === "charts" ? (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gray-900">263</div>
                <div className="text-sm text-gray-500 mt-1">minutes</div>
              </motion.div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gray-900">19</div>
                <div className="text-sm text-gray-500 mt-1">Treatments</div>
              </motion.div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-base font-medium text-gray-900 mb-6">Number of treatments (%)</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentData} margin={{ top: 0, right: 0, bottom: 0, left: -15 }}>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Bar
                    dataKey="treatments"
                    fill="#F18841"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-base font-medium text-gray-900 mb-6">Mode usage (%)</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={modeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {modeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {modeData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-base font-medium text-gray-900 mb-6">Accessory usage (%)</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={accessoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {accessoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {accessoryData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {protocols.map((protocol) => (
            <div key={protocol.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-base font-medium text-gray-900">
                  Protocol {protocol.id} - {protocol.time}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Way</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intensity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {protocol.steps.map((step, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{step.step}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{step.way}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
                        <td className="px-4 py-3 text-sm text-gray-900">{step.type}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{step.intensity}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{step.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
