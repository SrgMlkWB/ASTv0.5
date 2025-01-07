"use client"

import { Card } from "@/components/ui/card"

export function DeviceActivity() {
  return (
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
  )
}
