"use client"

import * as React from "react"
import { AnimatePresence, motion, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

const defaultVariants: Variants = {
  initial: { y: "-20%", opacity: 0, filter: "blur(1px)" },
  animate: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },
  exit: {
    y: "40%",
    opacity: 0,
    filter: "blur(1px)",
    transition: { ease: "easeOut" },
  },
}

export interface TextFlipProps {
  children: string[]
  interval?: number
  className?: string
}

export function TextFlip({
  children,
  interval = 3,
  className,
}: TextFlipProps) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (children.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % children.length)
    }, interval * 1000)
    return () => clearInterval(timer)
  }, [children.length, interval])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={index}
        className={cn("inline-block", className)}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultVariants}
      >
        {children[index]}
      </motion.span>
    </AnimatePresence>
  )
}
