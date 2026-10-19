"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  Box,
  Briefcase,
  Code2,
  Cpu,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Home,
  Laptop,
  Layers,
  Moon,
  Search,
  Sparkles,
  Sun,
  Terminal,
  User,
  Wrench,
} from "lucide-react"
import { useTheme } from "next-themes"

import { PROJECTS, TECH_STACK } from "@/config/portfolio"
import { getAllBlogPosts } from "@/features/blog/data/articles"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

export function CommandMenu() {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [playClick] = useClickSound()

  // Dynamic blog posts
  const blogPosts = React.useMemo(() => getAllBlogPosts(), [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isInput = ["INPUT", "TEXTAREA"].includes(
        (e.target as HTMLElement)?.tagName
      )

      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      } else if (e.key === "/" && !isInput) {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback(
    (command: () => void) => {
      playClick()
      setOpen(false)
      command()
    },
    [playClick]
  )

  const handleExternalNav = (url: string) => {
    playClick()
    setOpen(false)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        data-slot="command-menu-trigger"
        onClick={() => setOpen(true)}
        className="gap-1.5 border-none px-2 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Open command palette (Press ⌘K or /)"
      >
        <Search className="size-4" />
        <span className="font-sans text-xs font-medium sm:inline-block max-sm:hidden">
          Search…
        </span>
        <div className="hidden items-center gap-0.5 md:flex">
          <Kbd className="h-5 min-w-5 px-1 text-[10px]">⌘</Kbd>
          <Kbd className="h-5 min-w-5 px-1 text-[10px]">K</Kbd>
        </div>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, projects, components, blocks, craft, stack..." />
        <CommandList className="max-h-[380px]">
          <CommandEmpty>
            <div className="space-y-1.5 py-4">
              <p className="font-sans text-sm font-medium text-foreground">
                No matching results found
              </p>
              <p className="text-xs text-muted-foreground">
                Try searching for <code className="font-mono text-foreground">components</code>, <code className="font-mono text-foreground">medicine</code>, <code className="font-mono text-foreground">blocks</code>, or <code className="font-mono text-foreground">python</code>
              </p>
            </div>
          </CommandEmpty>

          {/* 1. Pages & Primary Navigation */}
          <CommandGroup heading="Pages & Routes">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <Home className="mr-2 size-4 text-muted-foreground" />
              <span>Home</span>
              <CommandShortcut>/</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
              <User className="mr-2 size-4 text-muted-foreground" />
              <span>About (Student Profile & Interests)</span>
              <CommandShortcut>/about</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
              <FileText className="mr-2 size-4 text-muted-foreground" />
              <span>Blog & Engineering Notes</span>
              <CommandShortcut>/blog</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Components Showcase</span>
              <CommandShortcut>/components</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Blocks Library</span>
              <CommandShortcut>/blocks</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/craft"))}>
              <Sparkles className="mr-2 size-4 text-muted-foreground" />
              <span>Craft & Hardware Experiments</span>
              <CommandShortcut>/craft</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/design-system"))}>
              <Eye className="mr-2 size-4 text-muted-foreground" />
              <span>Design System Preview</span>
              <CommandShortcut>/design-system</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* 2. Genuine Student Projects */}
          <CommandGroup heading="Projects">
            {PROJECTS.map((project) => (
              <CommandItem
                key={project.id}
                onSelect={() =>
                  project.link.includes("ace-college-drone")
                    ? handleExternalNav(project.link)
                    : runCommand(() => router.push("/#projects"))
                }
              >
                <Code2 className="mr-2 size-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="font-medium">{project.title}</span>
                  <span className="text-[11px] text-muted-foreground line-clamp-1">
                    {project.skills.slice(0, 3).join(", ")}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          {/* 3. Blog Articles */}
          <CommandGroup heading="Blog Articles">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <CommandItem
                  key={post.slug}
                  onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
                >
                  <FileText className="mr-2 size-4 text-muted-foreground" />
                  <span>{post.title}</span>
                </CommandItem>
              ))
            ) : (
              <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
                <FileText className="mr-2 size-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span>Blog Index (Articles In Progress)</span>
                  <span className="text-[11px] text-muted-foreground">
                    No articles published yet — view empty state
                  </span>
                </div>
              </CommandItem>
            )}
          </CommandGroup>

          <CommandSeparator />

          {/* 4. UI Components */}
          <CommandGroup heading="Components">
            <CommandItem onSelect={() => runCommand(() => router.push("/components#button"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Button (Base UI with soundCN click & variants)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#badge"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Badge (Status, counts, indicators)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#tag"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Tag (Keyword, filterable chips)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#card"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Card (Structured container panels)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#tabs"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Tabs (Accessible tab switcher)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#input"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Input (Form text input & clear action)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#tooltip"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Tooltip (Hover popover explanations)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#collapsible"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Collapsible (Expandable disclosure item)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#code-panel"))}>
              <Terminal className="mr-2 size-4 text-muted-foreground" />
              <span>Code Panel (Syntax-highlighted with copy button)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/components#icon-tile"))}>
              <Box className="mr-2 size-4 text-muted-foreground" />
              <span>Icon Tile (Blueprint bordered icon container)</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* 5. Blocks Library */}
          <CommandGroup heading="Blocks">
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#hero"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Hero Profile Header Block</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#overview"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Student Overview & Live Clock Block</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#tech-stack"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Categorized Tech Stack Block</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#education"))}>
              <GraduationCap className="mr-2 size-4 text-muted-foreground" />
              <span>Education Timeline Block (ACE College)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#experience"))}>
              <Briefcase className="mr-2 size-4 text-muted-foreground" />
              <span>Experience & Learning Block</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#projects"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Featured Projects Grid Block</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/blocks#contact"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Contact & Socials Block</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* 6. Craft & Hardware Experiments */}
          <CommandGroup heading="Craft & Hardware">
            <CommandItem onSelect={() => runCommand(() => router.push("/craft#medicine-expiry-detection"))}>
              <Cpu className="mr-2 size-4 text-muted-foreground" />
              <span>Medicine Expiry Detection System (ESP32-CAM, OpenCV, OCR)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/craft#drone-robotics-workshop"))}>
              <Cpu className="mr-2 size-4 text-muted-foreground" />
              <span>Drone & Robotics Workshop Schematics</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* 7. Technology Categories & Skills */}
          <CommandGroup heading="Technology Categories & Skills">
            <CommandItem onSelect={() => runCommand(() => router.push("/#stack"))}>
              <Code2 className="mr-2 size-4 text-muted-foreground" />
              <span>Languages: C, C++, Python, Java, JavaScript, TypeScript, SQL</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#stack"))}>
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Frontend & Web: React, Next.js, Tailwind CSS, HTML5, CSS3</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#stack"))}>
              <Terminal className="mr-2 size-4 text-muted-foreground" />
              <span>Backend & DB: Node.js, Express.js, PostgreSQL, MongoDB, REST APIs</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#stack"))}>
              <Cpu className="mr-2 size-4 text-muted-foreground" />
              <span>Embedded & AI: ESP32-CAM, Arduino, OpenCV, Tesseract OCR</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#stack"))}>
              <Wrench className="mr-2 size-4 text-muted-foreground" />
              <span>Tools & Workflow: Git, GitHub, VS Code, Linux / Shell, Postman</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* 8. Theme Controls */}
          <CommandGroup heading="Theme Preferences">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 size-4 text-muted-foreground" />
              <span>Light Theme</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 size-4 text-muted-foreground" />
              <span>Dark Theme</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop className="mr-2 size-4 text-muted-foreground" />
              <span>System Operating Preference</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
