"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { ChartDetailModal } from "./ChartDetailModal";
import { ProtocolTable } from "./protocol-table";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { addDays } from "date-fns";

const treatmentData = [
  {
    day: "Fri",
    CET: 3,
    RET: 2,
    "HI-TENS": 4,
    "HI-EMS": 2,
    average: 8,
  },
  {
    day: "Sat",
    CET: 2,
    RET: 1,
    "HI-TENS": 2,
    "HI-EMS": 1,
    average: 8,
  },
  {
    day: "Sun",
    CET: 1,
    RET: 1,
    "HI-TENS": 2,
    "HI-EMS": 0,
    average: 8,
  },
  {
    day: "Mon",
    CET: 2,
    RET: 2,
    "HI-TENS": 3,
    "HI-EMS": 1,
    average: 8,
  },
  {
    day: "Tue",
    CET: 3,
    RET: 3,
    "HI-TENS": 4,
    "HI-EMS": 2,
    average: 8,
  },
  {
    day: "Wed",
    CET: 4,
    RET: 3,
    "HI-TENS": 5,
    "HI-EMS": 2,
    average: 8,
  },
  {
    day: "Thu",
    CET: 2,
    RET: 2,
    "HI-TENS": 3,
    "HI-EMS": 1,
    average: 8,
  },
];

const modeData = [
  { name: "CET", value: 30, color: "#F18841" },
  { name: "RET", value: 25, color: "#3B82F6" },
  { name: "HI-TENS", value: 35, color: "#06B6D4" },
  { name: "HI-EMS", value: 10, color: "#93C5FD" },
];

const accessoryData = [
  { name: "TECARX_MIX_FACE", value: 20, color: "#F472B6" },
  { name: "TECARX CET", value: 20, color: "#F18841" },
  { name: "TECARX_MIX_BODY", value: 15, color: "#FCD34D" },
  { name: "TECAR3_RET_40_CVX", value: 15, color: "#2DD4BF" },
  { name: "TECAR3_HYB_40", value: 15, color: "#60A5FA" },
  { name: "MIX_BODY", value: 15, color: "#A78BFA" },
];

const protocols = [
  {
    id: 1,
    time: "15:15 / 15:30",
    steps: [
      {
        step: 1,
        way: 1,
        mode: "CET",
        type: "SOFT MEDIUM",
        intensity: "50%",
        duration: "5'",
      },
      {
        step: 1,
        way: 2,
        mode: "RET",
        type: "SOFT MEDIUM",
        intensity: "10%",
        duration: "5'",
      },
      {
        step: 2,
        way: 1,
        mode: "CET",
        type: "SOFT MEDIUM",
        intensity: "50%",
        duration: "10'",
      },
      {
        step: 2,
        way: 2,
        mode: "RET",
        type: "SOFT MEDIUM",
        intensity: "10%",
        duration: "10'",
      },
      {
        step: 2,
        way: 2,
        mode: "HI-TENS",
        type: "DYN",
        intensity: "2%",
        duration: "10'",
      },
    ],
  },
];

export function DeviceActivity() {
  const [selectedDate, setSelectedDate] = useState<DateRange>({
    from: addDays(new Date(), -7),
    to: new Date(),
  });
  const [activeTab, setActiveTab] = useState("charts");
  const [selectedChart, setSelectedChart] = useState<{
    type: "bar" | "pie";
    data: any[];
    title: string;
  } | null>(null);

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range) {
      setSelectedDate(range);
      // Here you would typically fetch new data for the selected date range
    }
  };

  return (
    <div className="space-y-8">
      <ChartDetailModal
        isOpen={!!selectedChart}
        onClose={() => setSelectedChart(null)}
        chartType={selectedChart?.type || "bar"}
        data={selectedChart?.data || []}
        title={selectedChart?.title || ""}
      />
      <div className="flex flex-col space-y-4 px-4">
        <div className="flex justify-center">
          <DateRangePicker onSelect={handleDateSelect} className="w-full md:w-[300px]" />
        </div>
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
            Protocols
          </Button>
        </div>
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
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-medium text-gray-900">
                Number of treatments (%)
              </h3>
              <button
                onClick={() =>
                  setSelectedChart({
                    type: "bar",
                    data: treatmentData,
                    title: "Number of treatments (%)",
                  })
                }
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Maximize2 className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={treatmentData}
                  margin={{ top: 0, right: 0, bottom: 0, left: -15 }}
                  barSize={20}
                  maxBarSize={20}
                >
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="CET" stackId="a" fill="#F18841" />
                  <Bar dataKey="RET" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="HI-TENS" stackId="a" fill="#06B6D4" />
                  <Bar dataKey="HI-EMS" stackId="a" fill="#93C5FD" />
                  <Line
                    type="monotone"
                    dataKey="average"
                    stroke="#000"
                    strokeDasharray="3 3"
                    strokeWidth={2}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-medium text-gray-900">
                  Mode usage (%)
                </h3>
                <button
                  onClick={() =>
                    setSelectedChart({
                      type: "pie",
                      data: modeData,
                      title: "Mode usage (%)",
                    })
                  }
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Maximize2 className="h-4 w-4 text-gray-500" />
                </button>
              </div>
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
                        <Cell key={`mode-${entry.name}-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {modeData.map((item) => (
                  <div key={`mode-legend-${item.name}`} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-medium text-gray-900">
                  Accessory usage (%)
                </h3>
                <button
                  onClick={() =>
                    setSelectedChart({
                      type: "pie",
                      data: accessoryData,
                      title: "Accessory usage (%)",
                    })
                  }
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Maximize2 className="h-4 w-4 text-gray-500" />
                </button>
              </div>
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
                        <Cell key={`accessory-${entry.name}-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {accessoryData.map((item) => (
                  <div key={`accessory-legend-${item.name}`} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-6">
          <Card className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Nos domaines d'application</h2>
            <p className="mb-4">
              Nous développons continuellement nos connaissances dans 4 domaines d'application avec un objectif: vous permettre d'améliorer la vie de vos patients et clients, que vous soyez kinésithérapeute, masseur, coach sportif, ostéopathe, chiropracteur, sage-femme, gynécologue, vétérinaire, spécialiste bien-être.
            </p>
            <ul className="list-disc pl-5">
              <li>Rééducation</li>
              <li>Sport</li>
              <li>Wo(men)</li>
              <li>Équin & petits animaux</li>
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
}
