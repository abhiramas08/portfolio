"use client"

import * as React from "react"
import { Code2, Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"
import { Tag } from "@/components/ui/tag"

export interface CodePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  filename?: string
  language?: string
  showLineNumbers?: boolean
}

export function CodePanel({
  code,
  filename,
  language = "bash",
  showLineNumbers = false,
  className,
  ...props
}: CodePanelProps) {
  const lines = React.useMemo(() => code.trim().split("\n"), [code])

  return (
    <div
      data-slot="code-panel"
      className={cn(
        "group/code-panel relative overflow-hidden rounded-xl border border-border bg-card shadow-xs",
        className
      )}
      {...props}
    >
      {/* Code Header */}
      <div className="flex h-10 items-center justify-between border-b border-border bg-muted/40 px-3.5 py-2">
        <div className="flex items-center gap-2">
          {language === "bash" || language === "sh" ? (
            <Terminal className="size-3.5 text-muted-foreground" />
          ) : (
            <Code2 className="size-3.5 text-muted-foreground" />
          )}
          {filename && (
            <span className="font-mono text-xs font-medium text-foreground">
              {filename}
            </span>
          )}
          {language && (
            <Tag className="text-[10px] uppercase tracking-wider">
              {language}
            </Tag>
          )}
        </div>

        <div className="flex items-center gap-1">
          <CopyButton
            text={code}
            size="icon-xs"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          />
        </div>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-foreground">
        <pre className="flex">
          {showLineNumbers && (
            <div
              aria-hidden="true"
              className="mr-4 select-none text-right font-mono text-muted-foreground/40"
            >
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <code className="flex-1 font-mono text-foreground whitespace-pre">
            {lines.map((line, i) => (
              <div key={i} className="line">
                {line || "\n"}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
