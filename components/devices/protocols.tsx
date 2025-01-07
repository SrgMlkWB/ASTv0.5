"use client"

import { ProtocolTable } from "./protocol-table"
import { ApplicationDomains } from "./application-domains"

export function Protocols() {
  return (
    <div className="space-y-12">
      <div className="pt-8 border-t">
        <ApplicationDomains />
      </div>
    </div>
  )
}
