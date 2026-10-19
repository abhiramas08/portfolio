"use client"

import { usePathname } from "next/navigation"
import { Nav, type NavItemType } from "@/components/nav"

export function NavDesktop({ items }: { items: NavItemType[] }) {
  const pathname = usePathname()

  return <Nav className="max-sm:hidden" items={items} activeId={pathname} />
}
