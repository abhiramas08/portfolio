"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useHotkeys } from "react-hotkeys-hook"

import { META_THEME_COLORS } from "@/config/site"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [click] = useClickSound()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const switchTheme = React.useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    click()
    setTheme(next)

    try {
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) {
        meta.setAttribute(
          "content",
          next === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light
        )
      }
    } catch {}
  }, [resolvedTheme, setTheme, click])

  useHotkeys("d", () => switchTheme(), { preventDefault: true })

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Toggle theme"
        className="text-muted-foreground"
      >
        <div className="size-4 rounded-full border border-current opacity-40" />
      </Button>
    )
  }

  return (
    <div className="group relative flex items-center">
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Toggle mode (Press D)"
        onClick={switchTheme}
        className="relative touch-manipulation hover:text-foreground text-muted-foreground"
      >
        <DarkSideIcon className="size-4" />
      </Button>

      <div className="pointer-events-none absolute top-full right-0 mt-2 hidden rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:flex items-center gap-1.5 z-50 whitespace-nowrap">
        <span>Toggle mode</span>
        <Kbd>D</Kbd>
      </div>
    </div>
  )
}

function DarkSideIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"
        className="origin-center transition-transform duration-500 ease-out dark:rotate-180"
      />
    </svg>
  )
}
