"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { fr } from "date-fns/locale"
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

export function DateRangePicker({
  className,
  onSelect,
}: {
  className?: string
  onSelect?: (range: DateRange | undefined) => void
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -7),
    to: new Date(),
  })

  React.useEffect(() => {
    if (date && onSelect) {
      onSelect(date)
    }
  }, [date, onSelect])

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal bg-white",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "d MMM yyyy", { locale: fr })} -{" "}
                  {format(date.to, "d MMM yyyy", { locale: fr })}
                </>
              ) : (
                format(date.from, "d MMM yyyy", { locale: fr })
              )
            ) : (
              <span>Sélectionner une période</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={fr}
            className="rounded-md border"
            classNames={{
              day_range_start: "bg-[#F18841] text-white",
              day_range_end: "bg-[#F18841] text-white",
              day_range_middle: "bg-[#F18841]/20",
              day_selected: "bg-[#F18841] text-white hover:bg-[#F18841]/90",
              day_today: "bg-accent text-accent-foreground",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
              ),
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
