"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md p-2.5 hover:bg-white/10 focus:outline-none relative w-10 h-10 flex items-center justify-center"
    >
      <div className="relative w-[1.2rem] h-[1.2rem]">
        <Sun className="absolute inset-0 h-full w-full rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
