import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Error 404 · Dimension Undefined
      </div>
      <h1 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="max-w-md text-sm text-muted-foreground mb-6">
        The coordinate you requested does not exist on this blueprint drafting plane.
      </p>
      <Button
        variant="outline"
        nativeButton={false}
        render={<Link href="/">Return to Origin (Home)</Link>}
      />
    </div>
  )
}
