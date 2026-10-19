"use client"

import * as React from "react"


import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Heading } from "@/components/heading"
import { CodePanel } from "@/components/ui/code-panel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { Education } from "@/features/portfolio/components/education"
import { Projects } from "@/features/portfolio/components/projects"
import { Overview } from "@/features/portfolio/components/overview"

export default function BlocksPage() {
  return (
    <div className="space-y-10 pb-20">
      <PageHeading>
        <PageHeadingTagline>Blocks</PageHeadingTagline>
        <PageHeadingTitle>Interface patterns & layout blocks.</PageHeadingTitle>
        <PageHeadingDescription>
          Pre-assembled composite layouts built from the shared design system.
          Engineered for technical portfolios, system specifications, and developer documentation.
        </PageHeadingDescription>
      </PageHeading>

      <div className="mx-auto max-w-3xl space-y-14 px-4">
        {/* Block 1: Hero Profile Header */}
        <section aria-labelledby="block-hero" className="space-y-4">
          <Heading id="block-hero" className="text-lg font-medium">
            01. Blueprint Hero & Monogram Block
          </Heading>
          <p className="text-sm text-muted-foreground">
            A technical personal hero header incorporating a 3D isometric interactive CAD figure,
            illustrated avatar, verified badge, and spring flip text.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
              <TabsTrigger value="code">Source Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
              <ProfileHeader />
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="hero-block.tsx"
                language="tsx"
                code={`import { ProfileHeader } from "@/features/portfolio/components/profile-header"

export function HeroSection() {
  return (
    <div className="border-x border-line">
      <ProfileHeader />
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Block 2: Student Overview & Contact Coordinates */}
        <section aria-labelledby="block-overview" className="space-y-4">
          <Heading id="block-overview" className="text-lg font-medium">
            02. Contact & Overview Coordinates Block
          </Heading>
          <p className="text-sm text-muted-foreground">
            Two-column metadata grid featuring live IST analog clock with dynamic trigonometric hands,
            location coordinates, degree, and protected copyable email.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
              <TabsTrigger value="code">Source Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
              <Overview />
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="overview-block.tsx"
                language="tsx"
                code={`import { Overview } from "@/features/portfolio/components/overview"

export function ContactBlock() {
  return (
    <div className="border border-border rounded-xl">
      <Overview />
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Block 3: Categorized Tech Stack */}
        <section aria-labelledby="block-stack" className="space-y-4">
          <Heading id="block-stack" className="text-lg font-medium">
            03. Categorized Technical Stack Block
          </Heading>
          <p className="text-sm text-muted-foreground">
            Engineering skills matrix grouped by domains with numbered monospace indices (`01` through `05`)
            and vertical dashed separator guide.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
              <TabsTrigger value="code">Source Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
              <TechStack />
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="stack-block.tsx"
                language="tsx"
                code={`import { TechStack } from "@/features/portfolio/components/tech-stack"

export function StackSection() {
  return (
    <div className="border border-border rounded-xl">
      <TechStack />
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Block 4: Education Timeline */}
        <section aria-labelledby="block-education" className="space-y-4">
          <Heading id="block-education" className="text-lg font-medium">
            04. Education Timeline Block
          </Heading>
          <p className="text-sm text-muted-foreground">
            Academic progression rail with graduation cap icon chips, study period dates, in-progress badges,
            and collapsible coursework tags.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
              <TabsTrigger value="code">Source Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
              <Education />
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="education-block.tsx"
                language="tsx"
                code={`import { Education } from "@/features/portfolio/components/education"

export function AcademicSection() {
  return (
    <div className="border border-border rounded-xl">
      <Education />
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>

        <div className="stripe-divider" />

        {/* Block 5: Projects Showcase */}
        <section aria-labelledby="block-projects" className="space-y-4">
          <Heading id="block-projects" className="text-lg font-medium">
            05. Projects Showcase Pattern
          </Heading>
          <p className="text-sm text-muted-foreground">
            Detailed project rows featuring timeline ranges, external repository triggers,
            expandable description panels, and technology badges.
          </p>

          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
              <TabsTrigger value="code">Source Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
              <Projects />
            </TabsContent>

            <TabsContent value="code" className="mt-3">
              <CodePanel
                filename="projects-block.tsx"
                language="tsx"
                code={`import { Projects } from "@/features/portfolio/components/projects"

export function PortfolioProjects() {
  return (
    <div className="border border-border rounded-xl">
      <Projects />
    </div>
  )
}`}
              />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}
