"use client"

import * as React from "react"
import { USER } from "@/config/portfolio"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function Hello() {
  return (
    <Panel id="about" className="screen-line-bottom">
      <PanelHeader>
        <PanelTitle
          as="h2"
          className="font-handwritten text-3xl sm:text-4xl leading-none text-foreground select-none"
        >
          About Me
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-3 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
        {USER.about.map((paragraph, index) => (
          <p key={index} className="text-pretty">
            {paragraph}
          </p>
        ))}

        <div className="pt-2 flex flex-wrap gap-2">
          {USER.interests.map((interest) => (
            <span
              key={interest.title}
              className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground"
            >
              {interest.title}
            </span>
          ))}
        </div>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
    </Panel>
  )
}
