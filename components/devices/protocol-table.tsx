"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

const protocolData = [
  {
    step: 1,
    way: 1,
    mode: "CET",
    type: "SOFT MEDIUM",
    intensity: "50%",
    duration: "5'"
  },
  {
    step: 1,
    way: 2,
    mode: "RET",
    type: "SOFT MEDIUM",
    intensity: "10%",
    duration: "5'"
  },
  {
    step: 2,
    way: 1,
    mode: "CET",
    type: "SOFT MEDIUM",
    intensity: "50%",
    duration: "10'"
  },
  {
    step: 2,
    way: 2,
    mode: "RET",
    type: "SOFT MEDIUM",
    intensity: "10%",
    duration: "10'"
  },
  {
    step: 2,
    way: 2,
    mode: "HI-TENS",
    type: "DYN",
    intensity: "2%",
    duration: "10'"
  }
]

export function ProtocolTable() {
  return (
    <div className="rounded-lg border">
      <div className="bg-muted/50 p-3">
        <h3 className="font-semibold">Protocol 1</h3>
        <div className="text-sm text-muted-foreground">15:15 / 15:30</div>
      </div>
      <ScrollArea className="h-[300px] rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Step</TableHead>
              <TableHead className="w-[60px]">Way</TableHead>
              <TableHead className="w-[80px]">Mode</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="w-[80px]">Intensity</TableHead>
              <TableHead className="w-[80px]">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {protocolData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{row.step}</TableCell>
                <TableCell className="text-center">{row.way}</TableCell>
                <TableCell>{row.mode}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell className="text-center">{row.intensity}</TableCell>
                <TableCell className="text-center">{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}
