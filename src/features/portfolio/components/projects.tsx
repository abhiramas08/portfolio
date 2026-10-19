"use client"

import * as React from "react"
import { Box, ChevronDown, ExternalLink, Infinity as InfinityIcon } from "lucide-react"

import { PROJECTS, type ProjectItem as ProjectItemType } from "@/config/portfolio"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID} className="screen-line-bottom">
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`} className="hover:underline">Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-line">
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.id} project={project} defaultOpen={index < 2} />
        ))}
      </div>
    </Panel>
  )
}

function ProjectRow({
  project,
  defaultOpen = false,
}: {
  project: ProjectItemType
  defaultOpen?: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)
  const { start, end } = project.period
  const isOngoing = project.isOngoing || !end
  const isSinglePeriod = end === start

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="relative flex items-center hover:bg-accent-muted transition-colors">
        <IconTile className="mx-4" size="md">
          <Box className="size-4 text-foreground" />
        </IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1 min-w-0">
            <h3 className="mb-1 leading-snug font-medium text-foreground text-sm sm:text-base">
              <CollapsibleTrigger className="text-left cursor-pointer outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {project.title}
              </CollapsibleTrigger>
            </h3>

            <dl className="text-xs font-mono text-muted-foreground">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-1">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span>—</span>
                    {isOngoing ? (
                      <span className="flex items-center gap-1 text-emerald-500">
                        <InfinityIcon className="size-3.5" />
                        <span>Present</span>
                      </span>
                    ) : (
                      <span>{end}</span>
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>

          {/* Direct External Link Trigger */}
          <TooltipProvider delay={100}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open repository or project for ${project.title}`}
                  >
                    <ExternalLink className="size-3.5" />
                  </a>
                }
              />
              <TooltipContent>
                <p>Open project on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="shrink-0 text-muted-foreground ml-1">
            <ChevronDown
              className={`size-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-3.5 border-t border-line bg-muted/20 p-4">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 pt-1">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
