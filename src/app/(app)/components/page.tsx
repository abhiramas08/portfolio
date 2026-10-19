"use client"

import * as React from "react"
import {
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tag } from "@/components/ui/tag"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { IconTile } from "@/components/ui/icon-tile"
import { CodePanel } from "@/components/ui/code-panel"
import { CopyButton } from "@/components/copy-button"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Heading } from "@/components/heading"
import { TextFlip } from "@/features/portfolio/components/text-flip"

export default function ComponentsPage() {
  const [inputValue, setInputValue] = React.useState("")
  const [activeTab, setActiveTab] = React.useState("tab-1")

  return (
    <div className="space-y-10 pb-20">
      <PageHeading>
        <PageHeadingTagline>Components</PageHeadingTagline>
        <PageHeadingTitle>Pixel-perfect, uniquely crafted.</PageHeadingTitle>
        <PageHeadingDescription>
          A modular library of accessible UI primitives and engineering micro-interactions,
          built with Base UI, Tailwind CSS v4, and semantic OKLCH tokens.
        </PageHeadingDescription>
      </PageHeading>

      <div className="mx-auto max-w-3xl space-y-12 px-4">
        {/* Component 1: Buttons */}
        <section aria-labelledby="comp-buttons" className="space-y-4">
          <Heading id="comp-buttons" className="text-lg font-medium">
            Buttons & Interaction States
          </Heading>
          <p className="text-sm text-muted-foreground">
            Accessible, micro-press scaling button components supporting variants, sizes, and slot rendering.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3">
              <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-6 shadow-xs">
                <Button variant="default">Default Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="icon-sm" variant="outline" aria-label="Terminal">
                  <Terminal className="size-4" />
                </Button>
                <Button size="icon-sm" variant="ghost" aria-label="External link">
                  <ExternalLink className="size-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="button-example.tsx"
                language="tsx"
                code={`import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Component 2: Badges & Tags */}
        <section aria-labelledby="comp-badges" className="space-y-4">
          <Heading id="comp-badges" className="text-lg font-medium">
            Badges & Technology Labels
          </Heading>
          <p className="text-sm text-muted-foreground">
            Compact metadata chips with monospace figures (`ss01`, `zero`) and semantic status indicators.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3">
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-xs">
                <div className="flex flex-wrap items-center gap-2">
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

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
                  <Tag>Next.js 16</Tag>
                  <Tag>React 19</Tag>
                  <Tag>Tailwind CSS v4</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>ESP32-CAM</Tag>
                  <Tag>OpenCV</Tag>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="badge-example.tsx"
                language="tsx"
                code={`import { Badge } from "@/components/ui/badge"
import { Tag } from "@/components/ui/tag"

export function StatusDisplay() {
  return (
    <div className="flex gap-2">
      <Badge variant="success">verified</Badge>
      <Badge variant="outline">outline</Badge>
      <Tag>Next.js 16</Tag>
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Component 3: Tabs & Panels */}
        <section aria-labelledby="comp-tabs" className="space-y-4">
          <Heading id="comp-tabs" className="text-lg font-medium">
            Tabs & Segmented Controls
          </Heading>
          <p className="text-sm text-muted-foreground">
            Accessible navigation tabs with animated indicator transitions powered by Base UI.
          </p>

          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">General</TabsTrigger>
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="system">Systems</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-3">
              <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">General Configuration</p>
                <p className="mt-1 text-xs">Standard portfolio layout and component parameters.</p>
              </div>
            </TabsContent>

            <TabsContent value="hardware" className="mt-3">
              <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Hardware & Embedded Devices</p>
                <p className="mt-1 text-xs">Microcontrollers, ESP32-CAM, and sensor interfaces.</p>
              </div>
            </TabsContent>

            <TabsContent value="system" className="mt-3">
              <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Systems Architecture</p>
                <p className="mt-1 text-xs">Computer vision, image thresholding, and OCR algorithms.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Component 4: Inputs & Forms */}
        <section aria-labelledby="comp-inputs" className="space-y-4">
          <Heading id="comp-inputs" className="text-lg font-medium">
            Form Inputs
          </Heading>
          <p className="text-sm text-muted-foreground">
            Refined input fields with ring focus highlights and dark mode support.
          </p>

          <div className="max-w-md space-y-3 rounded-xl border border-border bg-card p-6 shadow-xs">
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Search or Query
            </label>
            <div className="flex gap-2">
              <Input
                placeholder="Type here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                variant="outline"
                onClick={() => setInputValue("")}
                disabled={!inputValue}
              >
                Clear
              </Button>
            </div>
            {inputValue && (
              <p className="font-mono text-xs text-muted-foreground">
                Active query: <span className="text-foreground">{inputValue}</span>
              </p>
            )}
          </div>
        </section>

        <div className="stripe-divider" />

        {/* Component 5: Animated Headline (TextFlip) */}
        <section aria-labelledby="comp-animation" className="space-y-4">
          <Heading id="comp-animation" className="text-lg font-medium">
            Animated Text Flip (Hero Headline)
          </Heading>
          <p className="text-sm text-muted-foreground">
            Physics-spring 3D character rotation used in hero and section titles.
          </p>

          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-xs">
            <div className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
              <TextFlip>
                {["Systems Engineer", "Frontend Developer", "B.Tech CSE Student", "AI Explorer"]}
              </TextFlip>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              Rotates smoothly between sentences with spring damping.
            </p>
          </div>
        </section>

        <div className="stripe-divider" />

        {/* Component 6: IconTile & CopyButton */}
        <section aria-labelledby="comp-chips" className="space-y-4">
          <Heading id="comp-chips" className="text-lg font-medium">
            IconTile Chips & Copy Actions
          </Heading>
          <p className="text-sm text-muted-foreground">
            Layered square frames with double-ring borders and stateful copy buttons.
          </p>

          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-xs">
            <div className="flex items-center gap-2">
              <IconTile size="sm"><Code2 /></IconTile>
              <span className="font-mono text-xs">sm size</span>
            </div>

            <div className="flex items-center gap-2">
              <IconTile size="md"><Layers /></IconTile>
              <span className="font-mono text-xs">md size</span>
            </div>

            <div className="flex items-center gap-2">
              <IconTile size="lg"><Sparkles /></IconTile>
              <span className="font-mono text-xs">lg size</span>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">Click to copy:</span>
              <CopyButton text="npx @abhiram/ui add button" variant="outline" size="sm">
                <span className="font-mono text-xs">Copy Command</span>
              </CopyButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
