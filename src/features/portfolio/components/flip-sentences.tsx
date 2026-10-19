"use client"

import * as React from "react"
import { TextFlip } from "./text-flip"
import { cn } from "@/lib/utils"

export function FlipSentences({
  children,
  className,
}: {
  children: string[]
  className?: string
}) {
  return (
    <div className={cn("overflow-hidden flex items-center", className)}>
      <TextFlip
        className="font-mono text-xs sm:text-sm text-muted-foreground shimmer"
        interval={3.5}
      >
        {children}
      </TextFlip>
    </div>
  )
}
