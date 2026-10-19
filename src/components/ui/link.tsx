import * as React from "react"
import NextLink from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  external?: boolean
  showExternalIcon?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      href,
      children,
      external,
      showExternalIcon = false,
      ...props
    },
    ref
  ) => {
    const isExternal =
      external ??
      (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:"));

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1 font-normal link-underline",
            className
          )}
          {...props}
        >
          {children}
          {showExternalIcon && (
            <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          )}
        </a>
      )
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn("link-underline", className)}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)
Link.displayName = "Link"
