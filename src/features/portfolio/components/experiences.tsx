"use client"

import * as React from "react"
import { Code2, Cpu, Bot, BookOpen, ExternalLink } from "lucide-react"

import { EXPERIENCES } from "@/config/portfolio"
import { IconTile } from "@/components/ui/icon-tile"
import { Separator } from "@/components/ui/separator"
import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Panel, PanelHeader, PanelTitle } from "./panel"

const ID = "experience"

function getTrackIcon(id: string) {
  switch (id) {
    case "frontend-self-learning":
      return <Code2 className="size-3.5" />
    case "embedded-vision-research":
      return <Cpu className="size-3.5" />
    case "drone-robotics-workshop":
      return <Bot className="size-3.5" />
    case "academic-cs-foundations":
      return <BookOpen className="size-3.5" />
    default:
      return <Code2 className="size-3.5" />
  }
}

export function Experiences() {
  return (
    <Panel id={ID} className="screen-line-bottom">
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">
            Experience & Learning
          </a>
        </PanelTitle>
      </PanelHeader>

      {EXPERIENCES.map((item) => {
        return (
          <div
            key={item.id}
            id={`experience-${item.id}`}
            className="screen-line-bottom scroll-mt-14 p-4 last:after:content-none"
          >
            <div className="group/experience-item relative before:absolute before:left-3 before:h-full before:w-px before:bg-border">
              <Collapsible defaultOpen={true}>
                <CollapsibleTrigger className="group block w-full text-left outline-none cursor-pointer">
                  <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
                    <IconTile size="sm">
                      {getTrackIcon(item.id)}
                    </IconTile>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-foreground text-balance">
                          {item.title}
                        </h3>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-foreground"
                            aria-label={`Open link for ${item.title}`}
                          >
                            <ExternalLink className="size-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <dl className="flex flex-wrap items-center gap-x-2 pl-9 text-xs sm:text-sm text-muted-foreground">
                    <div>
                      <dt className="sr-only">Track</dt>
                      <dd className="font-medium text-foreground/90">
                        {item.track}
                      </dd>
                    </div>

                    {item.location && (
                      <>
                        <Separator
                          orientation="vertical"
                          className="h-3.5 self-center"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="sr-only">Location</dt>
                          <dd>{item.location}</dd>
                        </div>
                      </>
                    )}

                    <Separator
                      orientation="vertical"
                      className="h-3.5 self-center"
                      aria-hidden="true"
                    />

                    <div>
                      <dt className="sr-only">Period</dt>
                      <dd className="font-mono text-xs">
                        {item.period}
                      </dd>
                    </div>
                  </dl>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden">
                  {item.description && (
                    <div className="pt-3 pb-1 pl-9 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>{item.description}</p>
                    </div>
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                      {item.skills.map((skill, index) => (
                        <li key={index} className="flex">
                          <Tag>{skill}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        )
      })}
    </Panel>
  )
}
