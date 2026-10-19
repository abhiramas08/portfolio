import { SiteHeader } from "@/components/site-header"
import { SiteBottomNav } from "@/components/site-bottom-nav"
import { SiteFooterCad } from "@/components/site-footer-cad"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative isolate min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="max-w-screen overflow-x-clip px-2 flex-1">
        {children}
      </main>
      <SiteFooterCad />
      <SiteBottomNav />

      {/* Subtle bottom fade gradient */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-(--fade-bottom-height) bg-linear-to-b from-transparent to-background/80 backdrop-blur-[1px]"
        aria-hidden="true"
      />
    </div>
  )
}
