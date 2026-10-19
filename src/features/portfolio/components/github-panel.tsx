"use client"

import * as React from "react"
import { ExternalLink, GitBranch, GitFork, Star, Users, FolderGit2, AlertCircle } from "lucide-react"

import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { GitHubIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  default_branch: string
  fork?: boolean
}

interface GitHubData {
  user: {
    login: string
    name: string
    html_url: string
    public_repos: number
    followers: number
  }
  repos: GitHubRepo[]
  isFallback: boolean
  isRateLimited?: boolean
  error?: string
}

const DEFAULT_DATA: GitHubData = {
  user: {
    login: "abhiramas08",
    name: "Abhiram A S",
    html_url: "https://github.com/abhiramas08",
    public_repos: 1,
    followers: 1,
  },
  repos: [
    {
      id: 1009979876,
      name: "ace-college-drone-robotics-workshop",
      full_name: "abhiramas08/ace-college-drone-robotics-workshop",
      html_url: "https://github.com/abhiramas08/ace-college-drone-robotics-workshop",
      description: "Drone and Robotics Workshop at ACE College",
      stargazers_count: 0,
      forks_count: 0,
      language: "Embedded C / Arduino",
      default_branch: "main",
      fork: true,
    },
  ],
  isFallback: false,
}

const ID = "github"

export function GitHubPanel() {
  const [data, setData] = React.useState<GitHubData>(DEFAULT_DATA)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let isMounted = true

    async function loadGitHubData() {
      try {
        const res = await fetch("/api/github")
        if (res.ok) {
          const json = await res.json()
          if (isMounted && json?.user) {
            setData(json)
          }
        }
      } catch {
        // Keep verified real default data if network is offline
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadGitHubData()
    return () => {
      isMounted = false
    }
  }, [])

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
                aria-label="View Abhiram's GitHub profile"
              >
                <span>@{data.user.login}</span>
                <ExternalLink className="size-3" />
              </a>
            }
          />
        </div>
      </PanelHeader>

      <PanelContent className="space-y-4">
        {/* Profile Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-xl border border-border/70 bg-card/40 p-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FolderGit2 className="size-3.5 text-foreground/80" />
            <span>Public Repos:</span>
            <span className="font-semibold text-foreground">{data.user.public_repos}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="size-3.5 text-foreground/80" />
            <span>Followers:</span>
            <span className="font-semibold text-foreground">{data.user.followers}</span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-end text-muted-foreground">
            <span className="text-[11px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Verified Profile
            </span>
          </div>
        </div>

        {/* Notice if rate-limited or using fallback */}
        {data.isRateLimited && (
          <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-500">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>GitHub API rate limit reached. Displaying verified cached repository data.</span>
          </div>
        )}

        {/* Real Repositories List */}
        <div className="space-y-3">
          {data.repos.map((repo) => (
            <div
              key={repo.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <IconTile size="md">
                    <GitBranch className="size-4 text-foreground" />
                  </IconTile>
                  <div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:underline link-underline text-sm sm:text-base flex items-center gap-1.5"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink className="size-3 text-muted-foreground" />
                    </a>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {repo.full_name}
                    </span>
                  </div>
                </div>

                {repo.fork && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    <GitFork className="size-3" />
                    <span>Workshop</span>
                  </span>
                )}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {repo.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                <Tag>Robotics</Tag>
                <Tag>Arduino / Embedded</Tag>
                <Tag>ACE College</Tag>

                <div className="ml-auto flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1" title="Stars count">
                    <Star className="size-3" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1" title="Default branch">
                    <GitFork className="size-3" />
                    <span>{repo.default_branch}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity Summary Footer */}
        <div className="flex items-center justify-between border-t border-line pt-3 font-mono text-xs text-muted-foreground">
          <span>Profile: github.com/{data.user.login}</span>
          <a
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground flex items-center gap-1"
          >
            <span>View all activity</span>
            <ExternalLink className="size-3" />
          </a>
        </div>
      </PanelContent>
    </Panel>
  )
}
