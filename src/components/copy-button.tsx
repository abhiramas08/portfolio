"use client"

import * as React from "react"
import { Check, Copy, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { IconSwap, IconSwapItem } from "@/components/ui/icon-swap"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export interface CopyButtonProps extends Omit<ButtonProps, "children"> {
  text: string | (() => string)
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
  idleIcon?: React.ReactNode
  doneIcon?: React.ReactNode
  errorIcon?: React.ReactNode
  children?: React.ReactNode
}

export function CopyButton({
  className,
  size = "icon-sm",
  variant = "ghost",
  text,
  onCopySuccess,
  onCopyError,
  idleIcon,
  doneIcon,
  errorIcon,
  children,
  onClick,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError,
  })

  return (
    <Button
      className={cn("relative will-change-transform", className)}
      variant={variant}
      size={size}
      onClick={(e) => {
        copy(text)
        onClick?.(e)
      }}
      aria-label="Copy to clipboard"
      {...props}
    >
      <IconSwap>
        <IconSwapItem key={state}>
          {state === "idle" && (idleIcon ?? <Copy className="size-3.5" />)}
          {state === "done" && (doneIcon ?? <Check className="size-3.5 text-success" />)}
          {state === "error" && (errorIcon ?? <X className="size-3.5 text-destructive" />)}
        </IconSwapItem>
      </IconSwap>
      {children}
    </Button>
  )
}
