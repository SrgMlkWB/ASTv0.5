"use client"

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

const generateData = (deviceName: string) => {
  const data = []
  const modes = ['CET', 'RET', 'HI-TENS', 'HI-EMS']
  const averageUsage = {
    CET: 35,
    RET: 30,
    'HI-TENS': 20,
    'HI-EMS': 15
  }

  for (let i = 1; i <= 30; i++) {
    const dayData: any = { day: i }
    modes.forEach(mode => {
      dayData[mode] = Math.floor(Math.random() * 100)
      dayData[`${mode}Average`] = averageUsage[mode] + Math.floor(Math.random() * 10 - 5)
    })
    data.push(dayData)
  }

  return data
}

interface DetailedUsageChartProps {
  deviceName: string
}

export function DetailedUsageChart({ deviceName }: DetailedUsageChartProps) {
  const [data] = useState(() => generateData(deviceName))
  const [left, setLeft] = useState<string | number>('dataMin')
  const [right, setRight] = useState<string | number>('dataMax')
  const [refAreaLeft, setRefAreaLeft] = useState('')
  const [refAreaRight, setRefAreaRight] = useState('')
  const [top, setTop] = useState<string | number>('dataMax+1')
  const [bottom, setBottom] = useState<string | number>('dataMin-1')
  const [animation, setAnimation] = useState(true)

  const getAxisYDomain = (from: number, to: number, ref: string, offset: number) => {
    const refData = data.slice(from - 1, to)
    let [bottom, top] = [refData[0][ref], refData[0][ref]]
    refData.forEach((d) => {
      if (d[ref] > top) top = d[ref]
      if (d[ref] < bottom) bottom = d[ref]
    })

    return [(bottom | 0) - offset, (top | 0) + offset]
  }

  const zoom = () => {
    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      setRefAreaLeft('')
      setRefAreaRight('')
      return
    }

    let [left, right] = [refAreaLeft, refAreaRight].map(Number).sort((a, b) => a - b)

    setRefAreaLeft('')
    setRefAreaRight('')

    setLeft(left)
    setRight(right)
    setBottom(getAxisYDomain(left, right, 'CET', 1)[0])
    setTop(getAxisYDomain(left, right, 'CET', 1)[1])
  }

  const zoomOut = () => {
    setLeft('dataMin')
    setRight('dataMax')
    setTop('dataMax+1')
    setBottom('dataMin')
    setAnimation(true)
  }

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Utilisation détaillée de {deviceName}</CardTitle>
        <CardDescription>Comparaison avec la moyenne des utilisateurs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end space-x-2 mb-4">
          <Button variant="outline" size="sm" onClick={zoomOut}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button variant="outline" size="sm" onClick={() => setAnimation(!animation)}>
            {animation ? <ZoomOut className="w-4 h-4 mr-2" /> : <ZoomIn className="w-4 h-4 mr-2" />}
            {animation ? 'Désactiver' : 'Activer'} l'animation
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            onMouseDown={(e) => e && setRefAreaLeft(e.activeLabel)}
            onMouseMove={(e) => e.isTooltipActive && setRefAreaRight(e.activeLabel)}
            onMouseUp={zoom}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" allowDataOverflow />
            <YAxis domain={[bottom, top]} allowDataOverflow />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="CET" stroke="#8884d8" animationDuration={300} />
            <Line type="monotone" dataKey="RET" stroke="#82ca9d" animationDuration={300} />
            <Line type="monotone" dataKey="HI-TENS" stroke="#ffc658" animationDuration={300} />
            <Line type="monotone" dataKey="HI-EMS" stroke="#ff7300" animationDuration={300} />

            <Line type="monotone" dataKey="CETAverage" stroke="#8884d8" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="RETAverage" stroke="#82ca9d" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="HI-TENSAverage" stroke="#ffc658" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="HI-EMSAverage" stroke="#ff7300" strokeDasharray="5 5" />

            {refAreaLeft && refAreaRight && (
              <ReferenceArea x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
