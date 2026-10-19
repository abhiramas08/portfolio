"use client"

import * as React from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1200

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full items-center justify-center py-6">
          <svg
            className="w-full h-auto max-w-2xl px-4"
            viewBox="0 0 1200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="ABHIRAM"
          >
            <defs>
              <motion.linearGradient
                id="footer-brand-gradient"
                x1={gradientX1}
                y1="0"
                x2="600"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="var(--color-muted-foreground)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.2" />
              </motion.linearGradient>
            </defs>

            {/* Geometric Drafting Block Lettering "ABHIRAM" */}
            <text
              x="50%"
              y="115"
              textAnchor="middle"
              className="font-mono font-black uppercase tracking-[0.28em]"
              fill="url(#footer-brand-gradient)"
              stroke="var(--color-border)"
              strokeWidth="1.5"
              fontSize="108"
            >
              ABHIRAM
            </text>

            {/* Blueprint Grid Baseline and Ascender Guides */}
            <line x1="40" y1="20" x2="1160" y2="20" stroke="var(--color-line)" strokeDasharray="6 6" strokeWidth="1" />
            <line x1="40" y1="120" x2="1160" y2="120" stroke="var(--color-line)" strokeWidth="1" />
            <line x1="40" y1="140" x2="1160" y2="140" stroke="var(--color-line)" strokeDasharray="4 4" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  )
}
