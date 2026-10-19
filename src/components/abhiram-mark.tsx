import * as React from "react"
import { cn } from "@/lib/utils"

export interface AbhiramMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

export function AbhiramMark({
  className,
  size,
  style,
  ...props
}: AbhiramMarkProps) {
  const customStyle: React.CSSProperties = {
    ...(size ? { width: size, height: size } : {}),
    ...style,
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyle}
      className={cn("size-6 text-foreground", className)}
      aria-label="Abhiram A S Monogram"
      {...props}
    >
      {/* Outer CAD grid boundary */}
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      {/* Geometric 'A' CAD structure */}
      <path
        d="M16 6L7 25H11.5L13.5 20.5H18.5L20.5 25H25L16 6ZM16 11.5L17.5 17H14.5L16 11.5Z"
        fill="currentColor"
      />
      {/* Precision corner crosshairs */}
      <path
        d="M2 8H6M26 8H30M2 24H6M26 24H30"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
    </svg>
  )
}
