"use client"

import * as React from "react"
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Palette,
  Sparkles,
  Terminal,
  Type,
} from "lucide-react"

import { AbhiramMark } from "@/components/abhiram-mark"
import { AbhiramMarkIsometric } from "@/components/abhiram-mark-isometric"
import { CopyButton } from "@/components/copy-button"
import { Heading } from "@/components/heading"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CodePanel } from "@/components/ui/code-panel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconTile } from "@/components/ui/icon-tile"
import { Kbd } from "@/components/ui/kbd"
import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { Tag } from "@/components/ui/tag"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Code, Large, Lead, Muted, Prose } from "@/components/ui/typography"
import { HandwrittenNote } from "@/features/portfolio/components/handwritten-note"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/features/portfolio/components/panel"

export default function DesignSystemPage() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <TooltipProvider delay={100}>
      <div className="space-y-12 pb-20">
        {/* Page Header */}
        <PageHeading>
          <PageHeadingTagline>System Specification · v1.0.0</PageHeadingTagline>
          <PageHeadingTitle>Design System & Primitives</PageHeadingTitle>
          <PageHeadingDescription>
            Faithfully engineered blueprint tokens, neutral OKLCH palette,
            modular UI primitives, and accessible micro-interactions inspired by
            chanhdai.com.
          </PageHeadingDescription>
        </PageHeading>

        {/* 1. Color Palette Tokens */}
        <section aria-labelledby="tokens-heading" className="space-y-4 px-4">
          <Heading id="tokens-heading" className="text-xl font-medium tracking-tight">
            <Palette className="size-5 text-muted-foreground" />
            <span>Design Tokens & Neutral Palette (OKLCH)</span>
          </Heading>
          <p className="text-sm text-muted-foreground">
            Strict neutral palette calibrated across light and dark modes with
            subtle chromatic precision and high contrast ratios.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {[
              { name: "Background", token: "var(--background)", class: "bg-background text-foreground border" },
              { name: "Foreground", token: "var(--foreground)", class: "bg-foreground text-background" },
              { name: "Muted", token: "var(--muted)", class: "bg-muted text-muted-foreground border" },
              { name: "Muted Text", token: "var(--muted-foreground)", class: "bg-muted-foreground text-background" },
              { name: "Card", token: "var(--card)", class: "bg-card text-card-foreground border" },
              { name: "Border", token: "var(--border)", class: "bg-border text-foreground" },
              { name: "Line", token: "var(--line)", class: "bg-line text-foreground" },
              { name: "Accent", token: "var(--accent)", class: "bg-accent text-accent-foreground border" },
              { name: "Success", token: "var(--success)", class: "bg-success/20 text-success border border-success/30" },
              { name: "Destructive", token: "var(--destructive)", class: "bg-destructive/20 text-destructive border border-destructive/30" },
              { name: "Surface", token: "var(--surface)", class: "bg-surface text-surface-foreground border" },
              { name: "Code", token: "var(--code)", class: "bg-code text-code-foreground border" },
            ].map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-xl border border-border bg-card p-3 shadow-2xs"
              >
                <div
                  className={`h-12 w-full rounded-lg ${c.class} flex items-center justify-center font-mono text-xs`}
                >
                  Aa
                </div>
                <div className="mt-2">
                  <div className="text-xs font-medium text-foreground">{c.name}</div>
                  <div className="font-mono text-[10px] text-muted-foreground">{c.token}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blueprint Divider Line */}
        <div className="stripe-divider" />

        {/* 2. Typography Specimens */}
        <section aria-labelledby="typography-heading" className="space-y-4 px-4">
          <Heading id="typography-heading" className="text-xl font-medium tracking-tight">
            <Type className="size-5 text-muted-foreground" />
            <span>Typography System</span>
          </Heading>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Font Families</CardTitle>
                <CardDescription>
                  Geist Sans for precision UI, IBM Plex Serif for editorial depth,
                  and Caveat for architectural drafting notes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-mono text-xs text-muted-foreground">Geist Sans (Primary UI)</span>
                  <p className="font-sans text-lg font-medium text-foreground">
                    Abhiram A S — Systems Engineer & CS Student
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">Geist Mono (Code & Metadata)</span>
                  <p className="font-mono text-sm text-foreground">
                    0x7FFF_FFFF · sha256:d84f1a2 · B.Tech CSE (2023–2027)
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">IBM Plex Serif (Editorial)</span>
                  <p className="font-serif text-base italic text-foreground">
                    &ldquo;Premature optimization is the root of all evil.&rdquo; — Donald Knuth
                  </p>
                </div>
                <div className="relative">
                  <span className="font-mono text-xs text-muted-foreground">Caveat (Drafting Annotation)</span>
                  <div className="mt-1 flex items-center gap-2">
                    <HandwrittenNote className="text-base text-foreground">
                      verified CAD grid alignment & 100vw bleed!
                    </HandwrittenNote>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prose & Hierarchy</CardTitle>
                <CardDescription>Clean typographic scale with .prose-draft styling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Lead>Lead text introduces sections with elevated prominence.</Lead>
                <Prose>
                  <p>
                    Body text utilizes calibrated letter-spacing and optimal line height for
                    reading technical docs and system specifications. Includes inline <Code>code-inline</Code> elements
                    and <Link href="#typography-heading">interactive anchors</Link>.
                  </p>
                </Prose>
                <div className="flex items-center gap-2 pt-2">
                  <Large>Large Header</Large>
                  <Separator orientation="vertical" className="h-4" />
                  <Muted>Muted secondary label</Muted>
                  <Separator orientation="vertical" className="h-4" />
                  <Kbd>⌘K</Kbd>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blueprint Divider Line */}
        <div className="stripe-divider" />

        {/* 3. Button Primitives */}
        <section aria-labelledby="buttons-heading" className="space-y-4 px-4">
          <Heading id="buttons-heading" className="text-xl font-medium tracking-tight">
            <Sparkles className="size-5 text-muted-foreground" />
            <span>Button Primitives & Variants</span>
          </Heading>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Variants & Sizes</CardTitle>
              <CardDescription>
                Equipped with Base UI accessibility, native micro-press scaling, focus rings, and audio feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Variants */}
              <div>
                <span className="mb-2 block font-mono text-xs text-muted-foreground">Variants</span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Button variant="default">Default Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link Style</Button>
                  <Button variant="default" disabled>Disabled</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <span className="mb-2 block font-mono text-xs text-muted-foreground">Sizes</span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Button size="xs" variant="outline">Size XS</Button>
                  <Button size="sm" variant="outline">Size SM</Button>
                  <Button size="default" variant="outline">Size Default</Button>
                  <Button size="lg" variant="outline">Size LG</Button>
                  <Button size="icon-xs" variant="outline"><Code2 /></Button>
                  <Button size="icon-sm" variant="outline"><Terminal /></Button>
                  <Button size="icon" variant="outline"><ExternalLink /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blueprint Divider Line */}
        <div className="stripe-divider" />

        {/* 4. Badges, Tags, & Icon Tiles */}
        <section aria-labelledby="badges-heading" className="space-y-4 px-4">
          <Heading id="badges-heading" className="text-xl font-medium tracking-tight">
            <Layers className="size-5 text-muted-foreground" />
            <span>Badges, Tags & Status Indicators</span>
          </Heading>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Badges & Status</CardTitle>
                <CardDescription>Semantic statuses with tabular monospace numbers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">default</Badge>
                  <Badge variant="secondary">secondary</Badge>
                  <Badge variant="outline">outline</Badge>
                  <Badge variant="success">
                    <CheckCircle2 className="size-3" />
                    verified
                  </Badge>
                  <Badge variant="destructive">deprecated</Badge>
                  <Badge variant="accent">featured</Badge>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Tag>Next.js 16</Tag>
                  <Tag>React 19</Tag>
                  <Tag>TypeScript 5.9</Tag>
                  <Tag>Tailwind CSS v4</Tag>
                  <Tag>OKLCH Colors</Tag>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Icon Tiles & Interactive Tooltips</CardTitle>
                <CardDescription>Hover over any tile to preview animated Tooltip</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <IconTile
                          size="md"
                          className="cursor-pointer transition-transform hover:scale-105"
                        >
                          <Terminal className="size-5 text-foreground" />
                        </IconTile>
                      }
                    />
                    <TooltipContent>Unix Shell & POSIX Tools</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <IconTile
                          size="md"
                          className="cursor-pointer transition-transform hover:scale-105"
                        >
                          <Code2 className="size-5 text-foreground" />
                        </IconTile>
                      }
                    />
                    <TooltipContent>Systems Architecture</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <IconTile
                          size="md"
                          className="cursor-pointer transition-transform hover:scale-105"
                        >
                          <Sparkles className="size-5 text-foreground" />
                        </IconTile>
                      }
                    />
                    <TooltipContent>UI Engineering & Micro-Interactions</TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blueprint Divider Line */}
        <div className="stripe-divider" />

        {/* 5. Code Panel & Copy Interaction */}
        <section aria-labelledby="code-panel-heading" className="space-y-4 px-4">
          <Heading id="code-panel-heading" className="text-xl font-medium tracking-tight">
            <Code2 className="size-5 text-muted-foreground" />
            <span>Code Panel & Micro-Feedback</span>
          </Heading>

          <CodePanel
            filename="site.config.ts"
            language="typescript"
            showLineNumbers
            code={`export const siteConfig = {
  name: "ABHIRAM A S",
  tagline: "Computer Science Engineering Student & Software Craftsman",
  institution: "APJ Abdul Kalam Technological University",
  graduation: "2027",
  focus: ["Systems Architecture", "Distributed Systems", "Web Engineering"],
  security: {
    publicInterfacePhoneNumber: false, // Strict requirement preserved
  },
} as const`}
          />
        </section>

        {/* Blueprint Divider Line */}
        <div className="stripe-divider" />

        {/* 6. Collapsible & Panel Structures */}
        <section aria-labelledby="panels-heading" className="space-y-4 px-4">
          <Heading id="panels-heading" className="text-xl font-medium tracking-tight">
            <Layers className="size-5 text-muted-foreground" />
            <span>Drafting Panels & Collapsible Sections</span>
          </Heading>

          <Panel className="screen-line-bottom">
            <PanelHeader>
              <PanelTitle>Blueprint Drafting Panel Specimen</PanelTitle>
            </PanelHeader>
            <PanelContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Panels feature borderless infinite screen lines extending to the edges of the viewport
                via <Code>screen-line-top</Code> and <Code>screen-line-bottom</Code>.
              </p>

              {/* Accessible Collapsible Accordion */}
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
                  <span className="text-sm font-medium">
                    Technical Specifications (Click to expand)
                  </span>
                  <CollapsibleTrigger
                    render={
                      <Button variant="ghost" size="sm">
                        {isOpen ? "Collapse" : "Expand"}
                      </Button>
                    }
                  />
                </div>
                <CollapsibleContent className="mt-2 rounded-lg border border-border/60 bg-card p-4 text-sm text-muted-foreground">
                  <ul className="list-inside list-disc space-y-1 font-mono text-xs">
                    <li>Viewport Content Max-Width: 42rem (672px) standard portfolio column</li>
                    <li>Infinite Bleed Lines: 200vw width with -100vw left positioning</li>
                    <li>Audio Synthesis: Web Audio API Oscillator (metal click & soft click)</li>
                    <li>Color Format: OKLCH gamut for perceptually uniform lightness</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </PanelContent>
          </Panel>
        </section>

        {/* Blueprint Divider Line */}
        <div className="stripe-divider" />

        {/* 7. CAD Monogram Identity */}
        <section aria-labelledby="brand-heading" className="space-y-4 px-4">
          <Heading id="brand-heading" className="text-xl font-medium tracking-tight">
            <Sparkles className="size-5 text-muted-foreground" />
            <span>Original CAD Identity (ABHIRAM A S)</span>
          </Heading>
          <p className="text-sm text-muted-foreground">
            Original engineering monogram replacing reference trademark assets in compliance with TRADEMARK.md.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4">
                <AbhiramMark size={64} />
              </div>
              <span className="font-mono text-xs text-muted-foreground">2D CAD Geometric Mark</span>
              <p className="mt-1 text-xs text-muted-foreground">
                Isometric triangle grid forming &apos;A&apos; with drafting coordinates
              </p>
            </Card>

            <Card className="flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4">
                <AbhiramMarkIsometric />
              </div>
              <span className="font-mono text-xs text-muted-foreground">3D Interactive Monogram</span>
              <p className="mt-1 text-xs text-muted-foreground">
                Move mouse over icon for 3D physics tilt and click for audio feedback
              </p>
            </Card>
          </div>
        </section>
      </div>
    </TooltipProvider>
  )
}
