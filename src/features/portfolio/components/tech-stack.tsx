import { TECH_STACK, type TechStackItem } from "@/config/portfolio"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

export function TechStack() {
  const grouped = TECH_STACK.reduce<Record<string, TechStackItem[]>>((acc, item) => {
    ;(acc[item.category] ??= []).push(item)
    return acc
  }, {})

  return (
    <Panel id="stack" className="screen-line-bottom">
      <PanelHeader>
        <PanelTitle>
          <a href="#stack" className="hover:underline">Stack</a>
          <PanelTitleSup>({TECH_STACK.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative font-mono [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        {/* Vertical Dashed Line Divider */}
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden="true"
        />

        {Object.entries(grouped).map(([category, items], index) => {
          const categoryId = `stack-${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line py-3.5 px-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              {/* Category column with 01, 02 numbering */}
              <div id={categoryId} className="text-xs sm:text-sm text-foreground flex items-center gap-2">
                <span className="text-muted-foreground/70 select-none" aria-hidden="true">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="font-medium">{category}</span>
              </div>

              {/* Skill chips */}
              <ul aria-labelledby={categoryId} className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <li key={item.key} className="flex">
                    <span className="flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2.5 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
