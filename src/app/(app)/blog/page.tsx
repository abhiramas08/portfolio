import type { Metadata } from "next"

import { SITE_INFO } from "@/config/site"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
  PageHeadingDescription,
} from "@/components/page-heading"
import { getAllBlogPosts } from "@/features/blog/data/articles"
import { BlogEmptyState } from "@/features/blog/components/empty-state"
import { PostSearchList } from "@/features/blog/components/post-search-input"

const title = `Blog – ${SITE_INFO.name}`
const description =
  "Stories, engineering milestones, and computer science concepts I learn along the way."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-svh pb-16">
      <PageHeading>
        <PageHeadingTagline>Blog</PageHeadingTagline>
        <PageHeadingTitle>
          Stories, milestones, and things I learn along the way.
        </PageHeadingTitle>
        <PageHeadingDescription>
          Engineering notes, hardware lab logs, and technical write-ups.
        </PageHeadingDescription>
      </PageHeading>

      <div className="h-4" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {posts.length === 0 ? (
          <BlogEmptyState />
        ) : (
          <PostSearchList posts={posts} />
        )}
      </div>
    </div>
  )
}
