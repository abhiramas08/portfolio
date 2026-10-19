import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const iconTileVariants = cva(
  "flex shrink-0 items-center justify-center rounded-md select-none border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "size-6 [&_svg:not([class*='size-'])]:size-3.5",
        md: "size-8 rounded-lg [&_svg:not([class*='size-'])]:size-4.5",
        lg: "size-10 rounded-lg [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
)

export interface IconTileProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof iconTileVariants> {}

/**
 * Layered square chip that frames a leading icon in list items and metadata rows.
 * Signature visual element matching the reference blueprint style.
 */
export function IconTile({ className, size, ...props }: IconTileProps) {
  return (
    <div
      data-slot="icon-tile"
      className={cn(iconTileVariants({ size, className }))}
      {...props}
    />
  )
}
