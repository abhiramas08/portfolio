"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import type { NavItemType } from "@/components/nav"

export function NavMobile({ items }: { items: NavItemType[] }) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const [playClick] = useClickSound()

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen) => {
        playClick()
        setOpen(nextOpen)
      }}
    >
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle mobile menu"
            className="flex flex-col gap-1 rounded-lg border-none hover:bg-accent active:scale-95"
          >
            <span
              className={`h-0.5 w-4 rounded-full bg-foreground transition-transform duration-200 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-foreground transition-transform duration-200 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </Button>
        }
      />

      <PopoverContent side="top" align="end" sideOffset={10}>
        <div className="flex flex-col gap-0.5">
          {items.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
