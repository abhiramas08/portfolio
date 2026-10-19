"use client"

import * as React from "react"
import { Mail } from "lucide-react"

import { SOCIAL_LINKS } from "@/config/portfolio"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"

export function SocialLinks() {
  return (
    <Panel className="screen-line-bottom">
      <h2 className="sr-only">Social links</h2>

      <PanelContent>
        <TooltipProvider delay={100}>
          <ul className="flex flex-wrap items-center gap-2">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        className="text-foreground/80 hover:text-foreground [&_svg]:size-4"
                        variant="outline"
                        size="icon-sm"
                        nativeButton={false}
                        render={
                          <a
                            href={item.href}
                            target={item.name === "email" ? undefined : "_blank"}
                            rel={item.name === "email" ? undefined : "noopener noreferrer"}
                            aria-label={`${item.title}: ${item.handle}`}
                          >
                            {item.name === "github" && <GitHubIcon />}
                            {item.name === "linkedin" && <LinkedInIcon />}
                            {item.name === "email" && <Mail />}
                          </a>
                        }
                      />
                    }
                  />
                  <TooltipContent>
                    {item.title} ({item.handle})
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </PanelContent>

      <HandwrittenNote className="-top-4 right-full mr-4 hidden w-24 flex-col items-end lg:flex">
        <span className="-rotate-6 text-xs">connect here</span>
        <HandwrittenArrow className="size-6 translate-x-2 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  )
}
