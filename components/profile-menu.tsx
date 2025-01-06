import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function ProfileMenu() {
  return (
    <Button variant="ghost" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gray-200" />
      <ChevronDown className="h-4 w-4" />
    </Button>
  )
}
