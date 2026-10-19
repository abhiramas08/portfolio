import type { Metadata } from "next"
import {
  GraduationCap,
  MapPin,
  ExternalLink,
  Code2,
  Cpu,
  Rocket,
  Brain,
  Layout,
  Terminal,
} from "lucide-react"

import { USER, EDUCATION, EXPERIENCES, SOCIAL_LINKS } from "@/config/portfolio"
import { SITE_INFO } from "@/config/site"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
  PageHeadingDescription,
} from "@/components/page-heading"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: `About – ${SITE_INFO.name}`,
  description:
    "About Abhiram A S, a third-year B.Tech Computer Science Engineering student at ACE College of Engineering, Kerala. Focus on frontend engineering, AI, robotics, and space technology.",
  alternates: {
    canonical: "/about",
  },
}

function getInterestIcon(iconName: string) {
  switch (iconName) {
    case "layout":
      return <Layout className="size-4" />
    case "code":
      return <Code2 className="size-4" />
    case "brain":
      return <Brain className="size-4" />
    case "cpu":
      return <Cpu className="size-4" />
    case "rocket":
      return <Rocket className="size-4" />
    default:
      return <Terminal className="size-4" />
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-svh pb-16">
      {/* 1. Page Header */}
      <PageHeading>
        <PageHeadingTagline>About</PageHeadingTagline>
        <PageHeadingTitle>Abhiram A S</PageHeadingTitle>
        <PageHeadingDescription>
          Third-year Computer Science Engineering student at ACE College of
          Engineering, Kerala. Focused on frontend development, software
          engineering, artificial intelligence, robotics, and space technology.
        </PageHeadingDescription>
      </PageHeading>

      <div className="h-4" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        {/* 2. Concise Professional Bio */}
        <section className="screen-line-top screen-line-bottom p-6 bg-card/40 rounded-xl border border-border">
          <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">
            Background & Technical Focus
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
            {USER.about.map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-border/60 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <GraduationCap className="size-4 text-muted-foreground" />
              <span>{USER.degree}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" />
              <span>{USER.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-xs">
                {USER.academicYear}
              </span>
            </div>
          </div>
        </section>

        {/* 3. Areas of Genuine Technical Interest */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Technical Interests
            </h2>
            <p className="text-sm text-muted-foreground">
              Core domains and engineering disciplines I actively study and
              prototype in.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {USER.interests.map((interest) => (
              <div
                key={interest.title}
                className="group relative rounded-xl border border-border bg-card/30 p-5 transition-colors hover:border-foreground/30 hover:bg-muted/30"
              >
                <div className="mb-3 flex items-center gap-3">
                  <IconTile size="md">
                    {getInterestIcon(interest.icon)}
                  </IconTile>
                  <h3 className="font-medium text-foreground text-base">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Education (ACE College of Engineering) */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Education
            </h2>
            <p className="text-sm text-muted-foreground">
              Academic undergraduate studies and verified coursework.
            </p>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="rounded-xl border border-border bg-card/30 p-5 space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground text-base">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.degree} — {edu.field}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-foreground bg-muted px-2 py-1 rounded border border-border">
                      {edu.academicStatus}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      In Progress
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Key Academic Subjects & Lab Modules
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {edu.skills.map((skill, index) => (
                      <li key={index} className="flex">
                        <Tag>{skill}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Self-Directed Experience & Projects */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Experience & Learning Milestones
            </h2>
            <p className="text-sm text-muted-foreground">
              Genuine self-directed programming, project implementations, and
              workshop engineering.
            </p>
          </div>

          <div className="grid gap-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="rounded-xl border border-border bg-card/30 p-5 space-y-2.5 transition-colors hover:border-foreground/30"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground text-base">
                      {exp.title}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground inline-flex items-center"
                        aria-label={`Open link for ${exp.title}`}
                      >
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="font-medium text-xs text-foreground/80">
                  {exp.track}
                  {exp.location ? ` • ${exp.location}` : ""}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                  {exp.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill, i) => (
                    <li key={i} className="flex">
                      <Tag className="text-[11px]">{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Contact & Socials */}
        <section className="rounded-xl border border-border bg-card/40 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground mb-2">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Open to engineering conversations, academic discussions, and
            collaborative student software initiatives.
          </p>

          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="sm"
                className="h-8 gap-1.5"
                nativeButton={false}
                render={
                  <a
                    href={link.href}
                    target={link.name !== "email" ? "_blank" : undefined}
                    rel={link.name !== "email" ? "noopener noreferrer" : undefined}
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="size-3 text-muted-foreground" />
                  </a>
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
