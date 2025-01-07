"use client"

import { ProtocolTable } from "./protocol-table"
import { ApplicationDomains } from "./application-domains"

export function Protocols() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Current Protocols</h3>
        <div className="grid gap-6">
          <ProtocolTable />
          <ProtocolTable />
        </div>
      </div>

      <div className="pt-8 border-t">
        <ApplicationDomains />
      </div>
    </div>
  )
}
