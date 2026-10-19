import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        secondary:
          "border-border/60 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border-border bg-background text-foreground hover:bg-muted/50",
        success:
          "border-success/25 bg-success/15 text-success dark:border-success/30 dark:bg-success/20",
        destructive:
          "border-destructive/25 bg-destructive/15 text-destructive dark:border-destructive/30 dark:bg-destructive/20",
        accent:
          "border-border/40 bg-accent text-accent-foreground hover:bg-accent/80",
      },
      size: {
        sm: "px-1.5 py-px text-[10px] [&_svg]:size-2.5",
        default: "px-2 py-0.5 text-xs [&_svg]:size-3",
        lg: "px-2.5 py-1 text-sm [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
}
