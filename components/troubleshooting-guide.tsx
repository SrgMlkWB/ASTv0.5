"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TroubleshootingError {
  code: string;
  description: string;
  device: string;
  solution: string;
}

const errors: TroubleshootingError[] = [
  {
    code: "ERROR 239",
    description: "SD COMMUNICATION OUT",
    device: "BACK4",
    solution: "Check the SD card connection and restart the device."
  },
  {
    code: "ERROR 238",
    description: "TECAR IN UNDER VOLTAGE",
    device: "BACK4",
    solution: "Check the power supply and ensure stable voltage."
  },
  {
    code: "ERROR 237",
    description: "TECAR IN OVER VOLTAGE",
    device: "BACK4",
    solution: "Check the power supply and ensure stable voltage."
  },
  {
    code: "ERROR 101",
    description: "TEMPERATURE SENSOR FAILURE",
    device: "BACK3",
    solution: "Contact technical support for sensor replacement."
  },
  {
    code: "ERROR 102",
    description: "CALIBRATION ERROR",
    device: "BACK3",
    solution: "Perform device calibration or contact support."
  },
]

export function TroubleshootingGuide() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDevice, setSelectedDevice] = useState('all')

  const filteredErrors = errors.filter(error => 
    (selectedDevice === 'all' || error.device === selectedDevice) &&
    (error.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
     error.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Troubleshooting Guide</h2>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search for errors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedDevice} onValueChange={setSelectedDevice}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select device" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Devices</SelectItem>
            <SelectItem value="BACK3">BACK3</SelectItem>
            <SelectItem value="BACK4">BACK4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {filteredErrors.map((error) => (
          <AccordionItem key={error.code} value={error.code}>
            <AccordionTrigger className="text-left">
              <span className="font-semibold text-[#F18841]">{error.code}</span> - {error.description}
              <span className="ml-2 text-sm text-gray-500">({error.device})</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-4">
                <h3 className="font-semibold">Description:</h3>
                <p>{error.description}</p>
                <h3 className="font-semibold">Solution:</h3>
                <p>{error.solution}</p>
                <h3 className="font-semibold">Device:</h3>
                <p>{error.device}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filteredErrors.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No errors found. Try adjusting your search or device filter.</p>
      )}
    </div>
  )
}
