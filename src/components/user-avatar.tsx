import * as React from "react"
import { cn } from "@/lib/utils"

export function UserAvatar({ className }: { className?: string }) {
  return (
    <div
      data-slot="user-avatar"
      className={cn(
        "relative flex size-full items-center justify-center overflow-hidden rounded-full bg-zinc-100 font-mono text-foreground select-none dark:bg-zinc-900",
        className
      )}
      aria-label="Abhiram A S illustrated CAD avatar"
    >
      {/* Background CAD crosshair grid */}
      <svg
        className="absolute inset-0 size-full text-foreground/15 dark:text-foreground/20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric blueprint rings */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Axis crosshairs */}
        <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.75" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.75" />

        {/* 45-degree angle ticks */}
        <line x1="20" y1="20" x2="26" y2="26" stroke="currentColor" strokeWidth="0.75" />
        <line x1="80" y1="20" x2="74" y2="26" stroke="currentColor" strokeWidth="0.75" />
        <line x1="20" y1="80" x2="26" y2="74" stroke="currentColor" strokeWidth="0.75" />
        <line x1="80" y1="80" x2="74" y2="74" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      {/* Foreground Monogram Initials & Spec Label */}
      <div className="relative z-1 flex flex-col items-center justify-center">
        <span className="font-heading text-2.5xl font-semibold tracking-tighter text-foreground sm:text-3xl">
          AS
        </span>
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase opacity-80 sm:text-[10px]">
          CAD · 08
        </span>
      </div>

      {/* Ring inset overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-full inset-ring-1 inset-ring-foreground/25 dark:inset-ring-foreground/15" />
    </div>
  )
}
