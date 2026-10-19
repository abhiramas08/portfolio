"use client"

import { useCallback } from "react"
import { playSound } from "@/lib/soundcn/sound-engine"
import type { PlaySoundOptions, SoundEffect } from "@/lib/soundcn/sound-types"

export function useSound(sound: SoundEffect, defaultOptions?: PlaySoundOptions) {
  const play = useCallback(
    (options?: PlaySoundOptions) => {
      return playSound(sound.dataUri, { ...defaultOptions, ...options })
    },
    [sound.dataUri, defaultOptions]
  )

  return [play] as const
}
