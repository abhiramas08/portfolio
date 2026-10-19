"use client"

import * as React from "react"

export function CurrentLocalTimeItem({ timeZone }: { timeZone: string }) {
  const [timeString, setTimeString] = React.useState<string>("")
  const [diffText, setDiffText] = React.useState<string>("")
  const [handsPath, setHandsPath] = React.useState<string>(() =>
    clockHandsPath(12, 0)
  )

  React.useEffect(() => {
    const updateTime = () => {
      const { time, hour, minute, diff } = computeClock(timeZone)
      setTimeString(time)
      setHandsPath(clockHandsPath(hour, minute))
      setDiffText(diff)
    }

    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [timeZone])

  return (
    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-muted-foreground">
      {/* SVG Analog Clock with dynamic hands */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 shrink-0 text-foreground"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d={handsPath} />
      </svg>

      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-foreground">{timeString || "IST Clock"}</span>
        <span className="text-muted-foreground/80">{diffText}</span>
      </div>
    </div>
  )
}

function clockHandsPath(hour: number, minute: number) {
  const h = hour % 12
  const round = (n: number) => Math.round(n * 1000) / 1000

  const minuteAngle = (minute / 60) * 2 * Math.PI
  const hourAngle = ((h + minute / 60) / 12) * 2 * Math.PI

  const hx = round(12 + 4 * Math.sin(hourAngle))
  const hy = round(12 - 4 * Math.cos(hourAngle))
  const mx = round(12 + 6.5 * Math.sin(minuteAngle))
  const my = round(12 - 6.5 * Math.cos(minuteAngle))

  return `M12 12 L${hx} ${hy} M12 12 L${mx} ${my}`
}

function computeClock(timeZone: string) {
  const now = new Date()

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now)

  const hour = parseInt(time, 10)
  const minute = parseInt(time.slice(3), 10)

  const viewerOffset = -now.getTimezoneOffset()
  const targetOffset =
    (new Date(now.toLocaleString("en-US", { timeZone })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
    60000

  const hoursDiff = Math.abs(targetOffset - viewerOffset) / 60
  const diff =
    hoursDiff < 0.25
      ? "// same time"
      : `// ${Math.round(hoursDiff * 10) / 10}h ${targetOffset > viewerOffset ? "ahead" : "behind"}`

  return { time, hour, minute, diff }
}
