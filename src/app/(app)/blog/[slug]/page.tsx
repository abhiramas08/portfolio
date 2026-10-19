import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
} from "lucide-react"

import { SITE_INFO } from "@/config/site"
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  findArticleNeighbours,
} from "@/features/blog/data/articles"
import { MarkdownRenderer } from "@/features/blog/components/markdown-renderer"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"
import { CopyButton } from "@/components/copy-button"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: `Article Not Found – ${SITE_INFO.name}`,
    }
  }

  const postUrl = `${SITE_INFO.url}/blog/${post.slug}`

  return {
    title: `${post.title} – ${SITE_INFO.name}`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.name || SITE_INFO.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { previous, next } = findArticleNeighbours(slug)

  let formattedDate = post.date
  try {
    formattedDate = format(new Date(post.date), "MMMM d, yyyy")
  } catch {}

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author?.name || SITE_INFO.name,
      url: SITE_INFO.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_INFO.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-svh pb-20">
        {/* Navigation Bar */}
        <div className="screen-line-bottom py-2.5 px-4 sm:px-6">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              className="gap-1.5 -ml-2 text-muted-foreground hover:text-foreground"
              render={
                <Link href="/blog">
                  <ArrowLeft className="size-4" />
                  <span>Blog</span>
                </Link>
              }
            />

            <div className="flex items-center gap-2">
              <CopyButton
                text={`${SITE_INFO.url}/blog/${post.slug}`}
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 text-xs text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Article Header Container */}
        <header className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-8">
          {/* Metadata chips */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground font-mono mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              <span>{post.readingTime}</span>
            </div>
            {post.author && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <User className="size-3.5" />
                  <span>{post.author.name}</span>
                </div>
              </>
            )}
          </div>

          {/* Title & Description */}
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            {post.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag} className="text-xs">
                {tag}
              </Tag>
            ))}
          </div>
        </header>

        {/* Blueprint Divider */}
        <div className="screen-line-top screen-line-bottom py-px">
          <div className="h-4" />
        </div>

        {/* Article Body Content */}
        <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
          <MarkdownRenderer content={post.content} />
        </main>

        {/* Previous / Next Article Navigation */}
        <footer className="screen-line-top mt-12 py-8 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-border p-4 transition-colors hover:border-foreground/30 hover:bg-muted/30"
                >
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-2">
                    <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" />
                    <span>Previous Article</span>
                  </div>
                  <span className="font-medium text-sm sm:text-base text-foreground group-hover:underline">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-border p-4 text-right transition-colors hover:border-foreground/30 hover:bg-muted/30"
                >
                  <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground font-mono mb-2">
                    <span>Next Article</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                  <span className="font-medium text-sm sm:text-base text-foreground group-hover:underline">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}
