import * as React from "react"
import { cn } from "@/lib/utils"

export function HandwrittenNote({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-10 font-handwritten text-sm sm:text-base text-muted-foreground select-none leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function HandwrittenArrow({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 50 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 text-muted-foreground", className)}
      {...props}
    >
      <path
        d="M5 25C15 28 35 25 42 10M42 10L36 7M42 10L44 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
