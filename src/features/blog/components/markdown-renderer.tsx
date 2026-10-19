"use client"

import * as React from "react"
import Link from "next/link"
import { Info, AlertTriangle, Lightbulb, Link as LinkIcon } from "lucide-react"

import { CodePanel } from "@/components/ui/code-panel"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
}

function renderInlineText(text: string): React.ReactNode[] {
  // Regex for inline elements: `code`, **bold**, *italic*, [link](url)
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  const parts = text.split(regex)

  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-foreground"
        >
          {part.slice(1, -1)}
        </code>
      )
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-foreground">
          {part.slice(1, -1)}
        </em>
      )
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const [, label, href] = linkMatch
      const isExternal = href.startsWith("http://") || href.startsWith("https://")
      return isExternal ? (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          {label}
        </a>
      ) : (
        <Link
          key={i}
          href={href}
          className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          {label}
        </Link>
      )
    }

    return part
  })
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const elements = React.useMemo(() => {
    const lines = content.split("\n")
    const nodes: React.ReactNode[] = []
    let inCodeBlock = false
    let codeLanguage = ""
    let codeBuffer: string[] = []
    let inList = false
    let listType: "ul" | "ol" = "ul"
    let listItems: string[] = []

    const flushList = () => {
      if (!inList) return
      if (listType === "ul") {
        nodes.push(
          <ul
            key={`list-${nodes.length}`}
            className="my-4 list-disc space-y-1.5 pl-6 text-sm sm:text-base leading-relaxed text-muted-foreground"
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{renderInlineText(item)}</li>
            ))}
          </ul>
        )
      } else {
        nodes.push(
          <ol
            key={`list-${nodes.length}`}
            className="my-4 list-decimal space-y-1.5 pl-6 text-sm sm:text-base leading-relaxed text-muted-foreground"
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{renderInlineText(item)}</li>
            ))}
          </ol>
        )
      }
      listItems = []
      inList = false
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Code block start / end
      if (line.trim().startsWith("```")) {
        flushList()
        if (inCodeBlock) {
          nodes.push(
            <div key={`code-${nodes.length}`} className="my-6">
              <CodePanel
                code={codeBuffer.join("\n")}
                language={codeLanguage || "text"}
                showLineNumbers={codeBuffer.length > 3}
              />
            </div>
          )
          codeBuffer = []
          inCodeBlock = false
          codeLanguage = ""
        } else {
          inCodeBlock = true
          codeLanguage = line.trim().slice(3).trim()
        }
        continue
      }

      if (inCodeBlock) {
        codeBuffer.push(line)
        continue
      }

      // Empty line
      if (!line.trim()) {
        flushList()
        continue
      }

      // Headings
      if (line.startsWith("### ")) {
        flushList()
        const text = line.slice(4).trim()
        const id = slugify(text)
        nodes.push(
          <h3
            key={`h3-${nodes.length}`}
            id={id}
            className="group/h3 mt-8 mb-3 flex items-center gap-2 font-heading text-lg sm:text-xl font-semibold tracking-tight text-foreground scroll-mt-20"
          >
            <span>{renderInlineText(text)}</span>
            <a
              href={`#${id}`}
              className="opacity-0 group-hover/h3:opacity-100 text-muted-foreground hover:text-foreground transition-opacity"
              aria-label={`Link to ${text}`}
            >
              <LinkIcon className="size-3.5" />
            </a>
          </h3>
        )
        continue
      }

      if (line.startsWith("## ")) {
        flushList()
        const text = line.slice(3).trim()
        const id = slugify(text)
        nodes.push(
          <h2
            key={`h2-${nodes.length}`}
            id={id}
            className="group/h2 mt-10 mb-4 flex items-center gap-2 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground scroll-mt-20"
          >
            <span>{renderInlineText(text)}</span>
            <a
              href={`#${id}`}
              className="opacity-0 group-hover/h2:opacity-100 text-muted-foreground hover:text-foreground transition-opacity"
              aria-label={`Link to ${text}`}
            >
              <LinkIcon className="size-4" />
            </a>
          </h2>
        )
        continue
      }

      // Callouts / Blockquotes
      if (line.startsWith("> ")) {
        flushList()
        const rawQuote = line.slice(2).trim()

        let variant: "note" | "tip" | "warning" = "note"
        let quoteContent = rawQuote

        if (rawQuote.startsWith("[!NOTE]")) {
          variant = "note"
          quoteContent = rawQuote.slice(7).trim()
        } else if (rawQuote.startsWith("[!TIP]")) {
          variant = "tip"
          quoteContent = rawQuote.slice(6).trim()
        } else if (rawQuote.startsWith("[!WARNING]")) {
          variant = "warning"
          quoteContent = rawQuote.slice(10).trim()
        }

        const icon =
          variant === "warning" ? (
            <AlertTriangle className="size-4 text-amber-500 shrink-0 mt-0.5" />
          ) : variant === "tip" ? (
            <Lightbulb className="size-4 text-emerald-500 shrink-0 mt-0.5" />
          ) : (
            <Info className="size-4 text-blue-500 shrink-0 mt-0.5" />
          )

        nodes.push(
          <div
            key={`quote-${nodes.length}`}
            className={cn(
              "my-5 flex gap-3 rounded-lg border p-4 text-xs sm:text-sm leading-relaxed",
              variant === "warning"
                ? "border-amber-500/20 bg-amber-500/5 text-foreground"
                : variant === "tip"
                  ? "border-emerald-500/20 bg-emerald-500/5 text-foreground"
                  : "border-border bg-muted/40 text-muted-foreground"
            )}
          >
            {icon}
            <div className="flex-1 space-y-1">
              {quoteContent ? (
                <p>{renderInlineText(quoteContent)}</p>
              ) : null}
            </div>
          </div>
        )
        continue
      }

      // Unordered lists
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        if (!inList || listType !== "ul") {
          flushList()
          inList = true
          listType = "ul"
        }
        listItems.push(line.trim().slice(2).trim())
        continue
      }

      // Ordered lists
      const orderedMatch = line.trim().match(/^\d+\.\s+(.*)$/)
      if (orderedMatch) {
        if (!inList || listType !== "ol") {
          flushList()
          inList = true
          listType = "ol"
        }
        listItems.push(orderedMatch[1].trim())
        continue
      }

      // Normal paragraph
      flushList()
      nodes.push(
        <p
          key={`p-${nodes.length}`}
          className="my-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty"
        >
          {renderInlineText(line)}
        </p>
      )
    }

    flushList()
    return nodes
  }, [content])

  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none font-sans",
        className
      )}
    >
      {elements}
    </div>
  )
}
