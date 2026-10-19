import * as React from "react"
import { cn } from "@/lib/utils"

export function Tag({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.25 rounded-full bg-muted/60 px-2 py-0.5 font-mono text-xs font-normal text-muted-foreground border border-border/80 transition-colors hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}
