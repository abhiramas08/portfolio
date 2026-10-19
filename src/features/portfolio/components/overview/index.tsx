"use client"

import * as React from "react"
import {
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  CheckIcon,
  CopyIcon,
  BookOpenIcon,
} from "lucide-react"

import { USER } from "@/config/portfolio"
import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"

export function Overview() {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = () => {
    try {
      const email = atob(USER.emailB64)
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <Panel className="screen-line-bottom-none screen-line-top-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-6 gap-y-3 sm:grid-cols-2 py-3 px-4">
        {/* Role & Degree */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
          <GraduationCapIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="font-medium truncate">{USER.degree}</span>
        </div>

        {/* Institution */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
          <BookOpenIcon className="size-4 shrink-0" />
          <span className="truncate">{USER.institution}</span>
        </div>

        {/* Location with Google Maps link */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
          <MapPinIcon className="size-4 shrink-0" />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-foreground"
          >
            {USER.location}
          </a>
        </div>

        {/* Live Local Time */}
        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        {/* Spam-Protected Email (Copy / Mailto) */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground sm:col-span-2">
          <MailIcon className="size-4 shrink-0" />
          <span className="font-mono">{USER.email}</span>
          <button
            onClick={handleCopyEmail}
            className="ml-2 inline-flex items-center gap-1 rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon className="size-3 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon className="size-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </PanelContent>

      {/* Center Dashed Drafting Line on Tablet/Desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  )
}
