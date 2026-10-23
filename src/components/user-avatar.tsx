import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function UserAvatar({ className }: { className?: string }) {
  return (
    <div
      data-slot="user-avatar"
      className={cn(
        "relative flex size-full items-center justify-center overflow-hidden rounded-full bg-zinc-100 font-mono text-foreground select-none dark:bg-zinc-900",
        className
      )}
      aria-label="Abhiram A S profile photo"
    >
      {/* Profile Photo Crop */}
      <Image
        src="/images/avatar.webp"
        alt="Abhiram A S profile photo"
        fill
        sizes="(max-width: 640px) 96px, 128px"
        className="size-full object-cover object-top select-none pointer-events-none"
        priority
      />

      {/* Ring inset overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-full inset-ring-1 inset-ring-foreground/25 dark:inset-ring-foreground/15" />
    </div>
  )
}
