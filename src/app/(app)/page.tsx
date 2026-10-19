import type { Metadata } from "next"

import { SITE_INFO } from "@/config/site"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { Overview } from "@/features/portfolio/components/overview"
import { GitHubPanel } from "@/features/portfolio/components/github-panel"
import { Hello } from "@/features/portfolio/components/hello"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { Projects } from "@/features/portfolio/components/projects"
import { Separator } from "@/features/portfolio/components/panel"

export const metadata: Metadata = {
  title: `${SITE_INFO.name} – ${SITE_INFO.title}`,
  description: SITE_INFO.description,
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
      <div className="mx-auto md:max-w-3xl">
        {/* 1. Hero Profile Header & Animated Flip Headline */}
        <ProfileHeader />
        <Separator />

        {/* 2. Accurate Social Links */}
        <SocialLinks />

        {/* 3. Student Overview (Degree, College, Location, IST Clock, Email) */}
        <Overview />
        <Separator />

        {/* 4. Genuine GitHub Profile & Repositories Panel */}
        <GitHubPanel />
        <Separator />

        {/* 5. Student Introduction & About Narrative */}
        <Hello />
        <Separator />

        {/* 6. Categorized Technical Stack */}
        <TechStack />
        <Separator />

        {/* 7. Education (ACE College of Engineering) */}
        <Education />
        <Separator />

        {/* 8. Genuine Student Experience & Self-Learning */}
        <Experiences />
        <Separator />

        {/* 9. Genuine Candidate Projects */}
        <Projects />
      </div>
    </div>
  )
}
