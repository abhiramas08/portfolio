import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export interface NavItemType {
  title: string
  href: string
}

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItemType[]
  activeId?: string
  className?: string
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const isActive = activeId === href

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
          >
            {title}
          </Link>
        )
      })}
    </nav>
  )
}
