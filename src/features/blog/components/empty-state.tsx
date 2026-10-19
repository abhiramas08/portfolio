import * as React from "react"
import { FileText, Terminal, ArrowRight } from "lucide-react"
import Link from "next/link"

import { IconTile } from "@/components/ui/icon-tile"
import { Button } from "@/components/ui/button"

export function BlogEmptyState() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        {/* Icon */}
        <div className="mb-4 inline-flex">
          <IconTile size="lg" className="border-dashed">
            <FileText className="size-6 text-muted-foreground" />
          </IconTile>
        </div>

        {/* Heading & Notice */}
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          No Articles Published Yet
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
          I am currently working on engineering write-ups covering embedded
          computer vision, OCR experiments, and frontend component architecture.
          Genuine articles will be posted here as they are completed.
        </p>

        {/* Blueprint Developer Guide Box */}
        <div className="mt-8 rounded-xl border border-dashed border-border bg-card/40 p-5 text-left">
          <div className="mb-2.5 flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Terminal className="size-3.5" />
            <span>HOW TO PUBLISH AN ARTICLE</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Add a new article object to the registry file:
          </p>
          <div className="mt-2 rounded-md border border-border bg-muted/60 p-2.5 font-mono text-[11px] text-foreground">
            <code>src/features/blog/data/articles.ts</code>
          </div>
          <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
            Specify the <code className="font-mono text-foreground">slug</code>,{" "}
            <code className="font-mono text-foreground">title</code>,{" "}
            <code className="font-mono text-foreground">tags</code>,{" "}
            <code className="font-mono text-foreground">date</code>, and Markdown{" "}
            <code className="font-mono text-foreground">content</code>. Flip{" "}
            <code className="font-mono text-foreground">published: true</code>{" "}
            and it will immediately render.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-8 flex justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <Link href="/">
                Return to Home
                <ArrowRight className="ml-1 size-3.5" />
              </Link>
            }
          />
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={
              <Link href="/about">
                Read About Me
              </Link>
            }
          />
        </div>
      </div>
    </div>
  )
}
