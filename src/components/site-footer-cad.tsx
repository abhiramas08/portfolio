
import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { USER } from "@/config/portfolio"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"

export function SiteFooterCad() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2 mt-12">
      <div className="mx-auto border-x md:max-w-3xl">
        {/* Top diagonal stripe divider */}
        <div className="screen-line-top screen-line-bottom screen-line-top-border">
          <div className="stripe-divider h-10" />
        </div>

        {/* Blueprint Title Block Header */}
        <div className="relative">
          <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-xs sm:text-sm">
            <span className="font-semibold tracking-wider text-foreground">
              {USER.displayName}
            </span>
            <span className="text-muted-foreground text-xs">
              {USER.degree} · Semester 6
            </span>
          </div>

          {/* Technical Drawing Metadata Grid */}
          <dl className="grid grid-cols-2 gap-px bg-line font-mono text-xs md:grid-cols-4">
            <Field label="Crafted by">
              <span className="text-foreground">{USER.name}</span>
            </Field>

            <Field label="Program">
              <span className="text-foreground">B.Tech CSE</span>
            </Field>

            <Field label="Institution">
              <span className="text-foreground truncate" title={USER.institution}>
                ACE College
              </span>
            </Field>

            <Field label="Status">
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                3rd Year
              </span>
            </Field>

            <Field label="Location">
              <span className="text-foreground">{USER.location}</span>
            </Field>

            <Field label="Timezone">
              <span className="text-foreground">{USER.timeZone} (IST)</span>
            </Field>

            <Field label="Stack">
              <span className="text-foreground">Next.js 16 · Tailwind v4</span>
            </Field>

            <Field label="Source Code">
              <a
                className="link-underline text-foreground"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Field>
          </dl>
        </div>

        {/* Bottom Interactive CAD Logotype */}
        <SiteFooterInteractiveLogotype />

        {/* Copyright & Disclaimer note */}
        <div className="p-4 text-center font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {USER.name}. Built with Next.js App Router & Tailwind CSS v4. Inspired by the engineering aesthetics of chanhdai.com.
        </div>
      </div>
    </footer>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-0.5 bg-background p-2.5 sm:p-3">
      <dt className="text-[10px] tracking-wider uppercase text-muted-foreground">
        {label}
      </dt>
      <dd className="font-medium text-foreground">{children}</dd>
    </div>
  )
}
