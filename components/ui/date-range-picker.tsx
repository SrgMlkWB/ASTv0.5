"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { fr } from 'date-fns/locale'

export function DateRangePicker({
  className,
  onSelect,
}: {
  className?: string
  onSelect?: (range: DateRange | undefined) => void
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })
  const [view, setView] = React.useState<"day" | "month" | "week" | "year">("week")

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "d MMMM", { locale: fr })} -{" "}
                  {format(date.to, "d MMMM", { locale: fr })}
                </>
              ) : (
                format(date.from, "d MMMM", { locale: fr })
              )
            ) : (
              <span>Sélectionner une date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 space-y-3">
            <div className="flex rounded-lg p-1 bg-gray-100">
              <Button
                variant={view === "day" ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setView("day")}
              >
                Jour
              </Button>
              <Button
                variant={view === "week" ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setView("week")}
              >
                Semaine
              </Button>
              <Button
                variant={view === "month" ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setView("month")}
              >
                Mois
              </Button>
              <Button
                variant={view === "year" ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setView("year")}
              >
                Année
              </Button>
            </div>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate)
                onSelect?.(newDate)
              }}
              numberOfMonths={2}
              locale={fr}
              className="rounded-md border"
              classNames={{
                day_selected: "bg-orange-500 text-white hover:bg-orange-400",
                day_today: "bg-orange-100 text-orange-900",
                day_range_middle: "bg-orange-100",
                day_range_end: "bg-orange-500 text-white hover:bg-orange-400",
                day_range_start: "bg-orange-500 text-white hover:bg-orange-400",
              }}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setDate(undefined)}>
                Annuler
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  // Close popover and handle confirmation
                }}
              >
                Valider
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
