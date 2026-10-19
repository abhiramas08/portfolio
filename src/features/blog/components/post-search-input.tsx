"use client"

import * as React from "react"
import { Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Tag } from "@/components/ui/tag"
import type { BlogPost } from "../types"
import { PostItem } from "./post-item"

interface PostSearchListProps {
  posts: BlogPost[]
}

export function PostSearchList({ posts }: PostSearchListProps) {
  const [query, setQuery] = React.useState("")
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null)

  const allTags = React.useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [posts])

  const filteredPosts = React.useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))

      const matchesTag = !selectedTag || post.tags.includes(selectedTag)

      return matchesQuery && matchesTag
    })
  }, [posts, query, selectedTag])

  return (
    <div className="space-y-6">
      {/* Search Bar & Tag Filters */}
      <div className="screen-line-top screen-line-bottom p-3 bg-card/20 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by title, keyword, or tag..."
            className="pl-9 pr-9 text-xs sm:text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search query"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-mono text-muted-foreground mr-1">
              Filter:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className="cursor-pointer"
            >
              <Tag
                className={
                  selectedTag === null
                    ? "bg-foreground text-background"
                    : "opacity-75 hover:opacity-100"
                }
              >
                All ({posts.length})
              </Tag>
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
                className="cursor-pointer"
              >
                <Tag
                  className={
                    selectedTag === tag
                      ? "bg-foreground text-background"
                      : "opacity-75 hover:opacity-100"
                  }
                >
                  {tag}
                </Tag>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results List */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="p-8 text-center rounded-xl border border-dashed border-border">
          <p className="text-sm text-muted-foreground font-mono">
            No articles match your search criteria.
          </p>
          <button
            onClick={() => {
              setQuery("")
              setSelectedTag(null)
            }}
            className="mt-3 text-xs underline text-foreground cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  )
}
