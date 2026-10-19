import Link from "next/link"
import { GitHubIcon } from "@/components/icons"

import { MAIN_NAV, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { AbhiramMark } from "@/components/abhiram-mark"
import { CommandMenu } from "@/components/command-menu"
import { NavDesktop } from "@/components/nav-desktop"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/95 backdrop-blur-xs px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-4 md:max-w-3xl">
        {/* Personal CAD Monogram Brand */}
        <Link
          href="/"
          aria-label="Home - Abhiram A S"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <AbhiramMark className="size-6 shrink-0 text-foreground" />
          <span className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
            A·S
          </span>
        </Link>

        <div className="flex-1" />

        {/* Desktop Navigation Links */}
        <NavDesktop items={MAIN_NAV} />

        {/* Action Controls: Search, GitHub, Theme */}
        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="mr-1 ml-2 hidden h-4 self-center sm:block"
          />

          <CommandMenu />

          <Separator
            orientation="vertical"
            className="mx-1 hidden h-4 self-center sm:block"
          />

          <TooltipProvider delay={100}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    nativeButton={false}
                    className="text-muted-foreground hover:text-foreground"
                    render={
                      <a
                        href={SOURCE_CODE_GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile: abhiramas08"
                      >
                        <GitHubIcon className="size-4" />
                      </a>
                    }
                  />
                }
              />
              <TooltipContent>
                <p>GitHub @abhiramas08</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator
            orientation="vertical"
            className="mx-1 h-4 self-center"
          />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
