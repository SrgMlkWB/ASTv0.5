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
    <ScrollArea className="h-[400px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Step</TableHead>
            <TableHead>Way</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Intensity</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {protocolData.map((protocol) => (
            <TableRow key={`${protocol.step}-${protocol.way}-${protocol.mode}`}>
              <TableCell>{protocol.step}</TableCell>
              <TableCell>{protocol.way}</TableCell>
              <TableCell>{protocol.mode}</TableCell>
              <TableCell>{protocol.type}</TableCell>
              <TableCell>{protocol.intensity}</TableCell>
              <TableCell>{protocol.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}