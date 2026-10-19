"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Code2,
  FileText,
  GraduationCap,
  Home,
  Laptop,
  Layers,
  Moon,
  Search,
  Sun,
  User,
} from "lucide-react"
import { useTheme } from "next-themes"

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
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

export function CommandMenu() {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [playClick] = useClickSound()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    playClick()
    setOpen(false)
    command()
  }, [playClick])

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        data-slot="command-menu-trigger"
        onClick={() => setOpen(true)}
        className="gap-1.5 border-none px-2 text-muted-foreground hover:text-foreground"
        aria-label="Open command palette"
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
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/"))}
            >
              <Home className="mr-2 size-4 text-muted-foreground" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/about"))}
            >
              <User className="mr-2 size-4 text-muted-foreground" />
              <span>About (Student Profile & Interests)</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/blog"))}
            >
              <FileText className="mr-2 size-4 text-muted-foreground" />
              <span>Blog & Engineering Notes</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#experience"))}
            >
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Experience & Learning</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#education"))}
            >
              <GraduationCap className="mr-2 size-4 text-muted-foreground" />
              <span>Education</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#projects"))}
            >
              <Code2 className="mr-2 size-4 text-muted-foreground" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/components"))}
            >
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Components</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/blocks"))}
            >
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Blocks</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/craft"))}
            >
              <Code2 className="mr-2 size-4 text-muted-foreground" />
              <span>Craft & Hardware</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#github"))}
            >
              <Code2 className="mr-2 size-4 text-muted-foreground" />
              <span>GitHub & Repositories</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#stack"))}
            >
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Technology Stack</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/design-system"))}
            >
              <Layers className="mr-2 size-4 text-muted-foreground" />
              <span>Design System Preview</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
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
              <span>System Preference</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
