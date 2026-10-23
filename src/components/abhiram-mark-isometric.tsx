"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

export function AbhiramMarkIsometric() {
  const [play] = useSound(metalClickSound)
  const shouldReduceMotion = useReducedMotion()
  const videoRef = React.useRef<HTMLVideoElement>(null)

  // Ensure video autoplays and loops cleanly when motion is allowed, or pause when reduced motion is requested
  React.useEffect(() => {
    if (shouldReduceMotion) {
      if (videoRef.current) {
        videoRef.current.pause()
      }
      return
    }

    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: muted video is allowed, catch any transient browser restriction
        })
      }
    }
  }, [shouldReduceMotion])

  return (
    <motion.div
      role="region"
      tabIndex={0}
      aria-label="ASCII Earth-to-computer communication artwork"
      className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-line bg-black select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      whileTap={{ scale: 0.985 }}
      onClick={() => play()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          play()
        }
      }}
    >
      {shouldReduceMotion ? (
        <Image
          src="/media/ascii-earth-computer.jpg"
          alt="ASCII Earth-to-computer communication artwork"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 556px"
          className="size-full object-contain"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/media/ascii-earth-computer.jpg"
          className="size-full object-contain pointer-events-none"
          aria-hidden="true"
        >
          <source src="/media/ascii-earth-computer.webm" type="video/webm" />
          <source src="/media/ascii-earth-computer.mp4" type="video/mp4" />
          {/* Static fallback for browsers without HTML5 video */}
          <Image
            src="/media/ascii-earth-computer.jpg"
            alt="ASCII Earth-to-computer communication artwork"
            fill
            sizes="(max-width: 640px) 100vw, 556px"
            className="size-full object-contain"
          />
        </video>
      )}
    </motion.div>
  )
}
