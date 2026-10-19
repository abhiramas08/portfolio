"use client"

import * as React from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

export function AbhiramMarkIsometric() {
  const id = React.useId()
  const ids = {
    facePattern: `abhiram-face-pattern-${id}`,
    radialGradient: `abhiram-radial-gradient-${id}`,
  }

  const ref = React.useRef<SVGSVGElement>(null)
  const [play] = useSound(metalClickSound)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [40, 516]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [30, 324]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  React.useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible cursor-pointer select-none"
      viewBox="0 0 556 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Interactive Isometric Monogram for Abhiram"
      whileTap={{ scale: 0.98 }}
      onClick={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 12 0 L 0 12 M 0 0 L 12 12"
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeWidth="0.8"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="260"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
          <stop offset="70%" stopColor="var(--color-background)" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      {/* Dynamic Lighting Halo */}
      <rect
        x="20"
        y="10"
        width="516"
        height="300"
        rx="16"
        fill={`url(#${ids.radialGradient})`}
      />

      {/* Outer CAD Framing Box */}
      <rect
        x="20"
        y="10"
        width="516"
        height="300"
        rx="16"
        stroke="var(--color-line)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* 3D Isometric Prism Letterform 'A' */}
      <g className="text-foreground transition-colors duration-200" transform="translate(148, 40)">
        {/* Top facet */}
        <polygon
          points="130,10 160,25 160,50 130,35"
          fill="currentColor"
          fillOpacity="0.85"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
        {/* Left sloping leg - isometric face */}
        <polygon
          points="130,10 40,165 65,185 145,55"
          fill="currentColor"
          fillOpacity="0.75"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
        {/* Right sloping leg - isometric face */}
        <polygon
          points="160,25 250,180 225,200 145,55"
          fill="currentColor"
          fillOpacity="0.6"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
        {/* Isometric Crossbar */}
        <polygon
          points="85,115 195,120 185,145 95,140"
          fill="currentColor"
          fillOpacity="0.9"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
        {/* Drafting hatch fill overlay */}
        <polygon
          points="20,10 270,10 270,220 20,220"
          fill={`url(#${ids.facePattern})`}
        />
      </g>

      {/* Isometric Axis Indicator in Bottom Left */}
      <g transform="translate(40, 270)" className="text-muted-foreground opacity-60">
        <line x1="0" y1="0" x2="30" y2="-15" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="-25" y2="-15" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="25" stroke="currentColor" strokeWidth="1" />
        <text x="35" y="-12" fontSize="9" fontFamily="monospace" fill="currentColor">X</text>
        <text x="-35" y="-12" fontSize="9" fontFamily="monospace" fill="currentColor">Y</text>
        <text x="-4" y="36" fontSize="9" fontFamily="monospace" fill="currentColor">Z</text>
      </g>
    </motion.svg>
  )
}
