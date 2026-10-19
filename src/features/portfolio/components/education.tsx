"use client"

import * as React from "react"
import { GraduationCap } from "lucide-react"

import { EDUCATION } from "@/config/portfolio"
import { IconTile } from "@/components/ui/icon-tile"
import { Separator } from "@/components/ui/separator"
import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Panel, PanelHeader, PanelTitle } from "./panel"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID} className="screen-line-bottom">
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">Education</a>
        </PanelTitle>
      </PanelHeader>

      {EDUCATION.map((item) => {
        const isOngoing = item.status === "In Progress"

        return (
          <div
            key={item.id}
            id={`education-${item.id}`}
            className="screen-line-bottom scroll-mt-14 p-4 last:after:content-none"
          >
            <div className="group/education-item relative before:absolute before:left-3 before:h-full before:w-px before:bg-border">
              <Collapsible defaultOpen={true}>
                <CollapsibleTrigger className="group block w-full text-left outline-none cursor-pointer">
                  <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
                    <IconTile size="sm">
                      <GraduationCap className="size-3.5" />
                    </IconTile>

                    <div className="flex-1">
                      <h3 className="font-medium text-foreground text-balance">
                        {item.institution}
                      </h3>
                    </div>
                  </div>

                  <dl className="flex flex-wrap items-center gap-x-2 pl-9 text-xs sm:text-sm text-muted-foreground">
                    <div>
                      <dt className="sr-only">Academic Status</dt>
                      <dd className="flex items-center gap-1.5 font-mono">
                        <span className="text-foreground font-medium">
                          {item.academicStatus}
                        </span>
                        {isOngoing && (
                          <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </dd>
                    </div>

                    {item.degree && (
                      <>
                        <Separator
                          orientation="vertical"
                          className="h-3.5 self-center"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="sr-only">Degree</dt>
                          <dd>{item.degree}</dd>
                        </div>
                      </>
                    )}

                    {item.field && (
                      <>
                        <Separator
                          orientation="vertical"
                          className="h-3.5 self-center"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="sr-only">Field of study</dt>
                          <dd>{item.field}</dd>
                        </div>
                      </>
                    )}
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
