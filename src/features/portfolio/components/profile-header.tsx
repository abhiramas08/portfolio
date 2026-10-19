import { USER } from "@/config/portfolio"
import { AbhiramMarkIsometric } from "@/components/abhiram-mark-isometric"
import { UserAvatar } from "@/components/user-avatar"
import { FlipSentences } from "./flip-sentences"
import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[auto_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      {/* 3D Isometric CAD Monogram & Figure 1 */}
      <figure className="relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <AbhiramMarkIsometric />

        {/* Handwritten Annotation */}
        <HandwrittenNote
          className="bottom-14 left-full hidden w-36 flex-col items-start xl:flex"
          aria-hidden
        >
          <HandwrittenArrow className="-scale-y-100 -rotate-6" />
          <span className="ml-3 -rotate-6 text-xs sm:text-sm">
            follows your cursor
            <span className="block" />
            click for audio
          </span>
        </HandwrittenNote>

        <figcaption className="pointer-events-none absolute right-3 bottom-3 text-xs tracking-wide text-muted-foreground/60 font-mono select-none">
          Fig. 1.
        </figcaption>
      </figure>

      {/* Illustrated CAD Avatar Column */}
      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line p-3 sm:p-4">
          <div className="relative size-24 sm:size-32 rounded-full border border-border/80 bg-muted/30 p-1">
            <UserAvatar className="size-full" />
            <div className="pointer-events-none absolute inset-0 rounded-full inset-ring-1 inset-ring-foreground/20" />
          </div>
        </div>
      </div>

      {/* Display Name and Animated Flip Tagline */}
      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4 py-2 sm:py-3">
            <h1 className="text-xl sm:text-3xl font-medium tracking-tight text-foreground">
              {USER.displayName}
            </h1>

            {/* Verified student engineer badge */}
            <svg
              className="size-4.5 text-blue-500 fill-current select-none shrink-0"
              viewBox="0 0 24 24"
              aria-label="Verified Profile"
            >
              <path
                fillRule="evenodd"
                d="M8.6 2.25A2.25 2.25 0 0110.8 1.1h2.4a2.25 2.25 0 012.2 1.15l1.2 2.1a2.25 2.25 0 001.6 1.15l2.4.35a2.25 2.25 0 011.9 1.95l.35 2.4a2.25 2.25 0 001.15 1.6l2.1 1.2a2.25 2.25 0 010 3.9l-2.1 1.2a2.25 2.25 0 00-1.15 1.6l-.35 2.4a2.25 2.25 0 01-1.9 1.95l-2.4.35a2.25 2.25 0 00-1.6 1.15l-1.2 2.1a2.25 2.25 0 01-3.9 0l-1.2-2.1a2.25 2.25 0 00-1.6-1.15l-2.4-.35a2.25 2.25 0 01-1.9-1.95l-.35-2.4a2.25 2.25 0 00-1.15-1.6l-2.1-1.2a2.25 2.25 0 010-3.9l2.1-1.2a2.25 2.25 0 001.15-1.6l.35-2.4a2.25 2.25 0 011.9-1.95l2.4-.35a2.25 2.25 0 001.6-1.15l1.2-2.1zm5.95 6.25a.75.75 0 00-1.1-1l-3.95 4.35-1.4-1.4a.75.75 0 10-1.05 1.05l2 2a.75.75 0 001.1 0l4.4-5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <FlipSentences className="h-10 border-t border-line px-4">
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>
    </div>
  )
}
