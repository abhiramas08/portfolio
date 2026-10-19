"use client"

import * as React from "react"
import { MOBILE_NAV } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { CommandMenu } from "@/components/command-menu"
import { NavMobile } from "@/components/nav-mobile"

export function SiteBottomNav() {
  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed! bottom-[calc(0.75rem+env(safe-area-inset-bottom,0))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-2xl border border-border/80 bg-background/90 px-2 py-1 shadow-lg backdrop-blur-md ring-1 ring-foreground/5 sm:hidden dark:bg-card/90"
    >
      <CommandMenu />
      <Separator orientation="vertical" className="mx-1 h-5" />
      <NavMobile items={MOBILE_NAV} />
    </nav>
  )
}
