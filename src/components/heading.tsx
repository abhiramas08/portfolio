"use client"

import * as React from "react"
import { Link2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingProps<T extends HeadingTypes> = React.ComponentProps<T> & {
  as?: T
}

export function Heading<T extends HeadingTypes = "h2">({
  as,
  className,
  id,
  children,
  ...props
}: HeadingProps<T>): React.ReactElement {
  const Comp = as ?? "h2"

  if (!id) {
    return (
      <Comp className={className} {...props}>
        {children}
      </Comp>
    )
  }

  const getUrl = () => {
    if (typeof window === "undefined") return `#${id}`
    const url = new URL(window.location.href)
    url.hash = id
    return url.toString()
  }

  return (
    <Comp
      id={id}
      className={cn(
        "group/heading flex scroll-mt-20 items-center gap-2",
        className
      )}
      {...props}
    >
      <a href={`#${id}`} className="not-prose link-underline">
        {children}
      </a>
      <CopyButton
        className="size-7 opacity-0 transition-opacity group-hover/heading:opacity-100 focus-visible:opacity-100"
        variant="ghost"
        size="icon-xs"
        text={getUrl}
        idleIcon={<Link2 className="size-3.5 text-muted-foreground" />}
        aria-label="Copy link to section"
      />
    </Comp>
  )
}
