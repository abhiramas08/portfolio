import * as React from "react"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar, Clock } from "lucide-react"

import type { BlogPost } from "../types"
import { Tag } from "@/components/ui/tag"

interface PostItemProps {
  post: BlogPost
  headingAs?: "h2" | "h3" | "h4"
}

export function PostItem({ post, headingAs = "h2" }: PostItemProps) {
  const Heading = headingAs

  let formattedDate = post.date
  try {
    formattedDate = format(new Date(post.date), "d MMM yyyy")
  } catch {}

  return (
    <article className="group/post relative flex h-full flex-col justify-between p-4 transition-colors hover:bg-muted/40 rounded-xl border border-border/80">
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-mono mb-2">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3 text-muted-foreground/70" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3 text-muted-foreground/70" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <Heading className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-foreground text-balance">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </Heading>

        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-3">
          {post.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
        {post.tags.map((tag) => (
          <Tag key={tag} className="text-[10px]">
            {tag}
          </Tag>
        ))}
      </div>
    </article>
  )
}
