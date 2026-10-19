"use client"

import { useCallback, useRef, useState } from "react"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"

export type CopyState = "idle" | "done" | "error"

export interface UseCopyToClipboardOptions {
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
  resetDelay?: number
}

export function useCopyToClipboard({
  onCopySuccess,
  onCopyError,
  resetDelay = 1500,
}: UseCopyToClipboardOptions = {}) {
  const [state, setState] = useState<CopyState>("idle")
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [playClick] = useClickSound()

  const copy = useCallback(
    async (text: string | (() => string)) => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }

      try {
        const finalText = typeof text === "function" ? text() : text
        await navigator.clipboard.writeText(finalText)

        setState("done")
        playClick()
        onCopySuccess?.(finalText)
      } catch (error) {
        setState("error")
        onCopyError?.(error instanceof Error ? error : new Error("Copy failed"))
      } finally {
        resetTimeoutRef.current = setTimeout(() => {
          setState("idle")
        }, resetDelay)
      }
    },
    [onCopySuccess, onCopyError, playClick, resetDelay]
  )

  return { state, copy } as const
}
