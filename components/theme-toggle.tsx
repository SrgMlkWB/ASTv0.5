"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="rounded-md p-2.5 hover:bg-white/10 focus:outline-none relative w-10 h-10 flex items-center justify-center">
        <div className="relative w-[1.2rem] h-[1.2rem]" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md p-2.5 hover:bg-white/10 focus:outline-none relative w-10 h-10 flex items-center justify-center"
    >
      <div className="relative w-[1.2rem] h-[1.2rem]">
        {theme === "light" ? (
          <Moon className="h-full w-full" />
        ) : (
          <Sun className="h-full w-full" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
