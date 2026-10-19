import * as React from "react"
import { ExternalLink, GitBranch, GitFork, Star } from "lucide-react"

import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { GitHubIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const ID = "github"

export function GitHubPanel() {
  return (
    <Panel id={ID} className="screen-line-bottom">
      <PanelHeader>
        <div className="flex items-center justify-between w-full pr-4">
          <PanelTitle>
            <a href={`#${ID}`} className="flex items-center gap-2">
              <GitHubIcon className="size-4.5 text-muted-foreground" />
              <span>GitHub & Repositories</span>
            </a>
          </PanelTitle>

          <Button
            variant="ghost"
            size="xs"
            nativeButton={false}
            className="text-muted-foreground hover:text-foreground font-mono text-xs gap-1"
            render={
              <a
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>@abhiramas08</span>
                <ExternalLink className="size-3" />
              </a>
            }
          />
        </div>
      </PanelHeader>

      <PanelContent className="space-y-4">
        {/* Genuine Repository Card */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <IconTile size="md">
                <GitBranch className="size-4 text-foreground" />
              </IconTile>
              <div>
                <a
                  href="https://github.com/abhiramas08/ace-college-drone-robotics-workshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:underline link-underline text-sm sm:text-base flex items-center gap-1.5"
                >
                  <span>ace-college-drone-robotics-workshop</span>
                  <ExternalLink className="size-3 text-muted-foreground" />
                </a>
                <span className="font-mono text-[11px] text-muted-foreground">
                  abhiramas08 / ace-college-drone-robotics-workshop
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              <GitFork className="size-3" />
              <span>Workshop</span>
            </span>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Drone and Robotics Workshop codebase and firmware integration developed at ACE College of Engineering.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <Tag>Robotics</Tag>
            <Tag>Drone</Tag>
            <Tag>Arduino / Embedded</Tag>
            <Tag>ACE College</Tag>

            <div className="ml-auto flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1">
                <Star className="size-3" />
                <span>0</span>
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="size-3" />
                <span>main</span>
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Activity Summary Footer */}
        <div className="flex items-center justify-between border-t border-line pt-3 font-mono text-xs text-muted-foreground">
          <span>Profile: github.com/abhiramas08</span>
          <a
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            View all activity →
          </a>
        </div>
      </PanelContent>
    </Panel>
  )
}
