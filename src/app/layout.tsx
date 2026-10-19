import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { SITE_INFO, META_THEME_COLORS } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: SITE_INFO.title,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
  creator: SITE_INFO.name,
  openGraph: {
    siteName: SITE_INFO.name,
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    url: "/",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.title,
    description: SITE_INFO.description,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.dark,
}

// Inline script to prevent theme flash before hydration
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_) {}
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ABHIRAM A S",
              alternateName: "Abhiram A S",
              jobTitle: "Computer Science Student & Frontend Developer",
              affiliation: {
                "@type": "CollegeOrUniversity",
                name: "ACE College of Engineering",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "Kerala",
                  addressCountry: "IN",
                },
              },
              url: SITE_INFO.url,
              sameAs: [
                "https://github.com/abhiramas08",
                "https://www.linkedin.com/in/abhiram-a-s-24a52232b/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_INFO.name,
              url: SITE_INFO.url,
              description: SITE_INFO.description,
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
