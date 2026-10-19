import { Caveat, IBM_Plex_Serif } from "next/font/google"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

export const fontSans = GeistSans

export const fontSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
})

export const fontHandwritten = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
})

export const fontVariables = cn(
  fontSans.variable,
  fontSerif.variable,
  fontHandwritten.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace]"
)
