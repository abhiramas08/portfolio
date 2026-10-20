# Complete Portfolio Editing, Updating & Maintenance Roadmap
**Owner:** Abhiram A S  
**Technology Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript 5.8  
**Project Workspace:** `C:\Users\windows 10\.gemini\antigravity\scratch\abhiram-portfolio`  
**Guide Purpose:** A comprehensive, beginner-friendly manual for manually editing, adding, removing, replacing, and maintaining every section of your portfolio using VS Code without breaking layout, styling, or functionality.

---

## Table of Contents

1. [Architecture & Project Anatomy](#part-1--architecture--project-anatomy)
2. [Top-to-Bottom Editing Roadmap (Visual Order)](#part-2--top-to-bottom-editing-roadmap)
   - [2.1 Header & Brand Monogram](#21-header--brand-monogram)
   - [2.2 Hero Profile Header & Animated Tagline](#22-hero-profile-header--animated-tagline)
   - [2.3 Social Links Bar](#23-social-links-bar)
   - [2.4 Overview Bar (Degree, College, IST Clock, Email)](#24-overview-bar-degree-college-ist-clock-email)
   - [2.5 GitHub & Repositories Panel](#25-github--repositories-panel)
   - [2.6 About Me Section](#26-about-me-section)
   - [2.7 Skills & Technology Stack](#27-skills--technology-stack)
   - [2.8 Education](#28-education)
   - [2.9 Experience & Learning Journey](#29-experience--learning-journey)
   - [2.10 Projects Section](#210-projects-section)
     - [Deep Dive: Manual Projects vs. Automatic GitHub Sync](#deep-dive-manual-projects-vs-automatic-github-sync)
     - [Scenarios 1 through 8 Answered](#scenarios-1-through-8-answered)
3. [Other Dedicated Pages & Reusable Components](#part-3--other-dedicated-pages--reusable-components)
   - [3.1 /craft (Hardware & Embedded Showcase)](#31-craft-hardware--embedded-showcase)
   - [3.2 /blog & /blog/[slug] (Article Registry & Markdown Engine)](#32-blog--blogslug-article-registry--markdown-engine)
   - [3.3 /about (Dedicated About Route)](#33-about-dedicated-about-route)
   - [3.4 /components & /blocks (UI Showcase Pages)](#34-components--blocks-ui-showcase-pages)
   - [3.5 /design-system (Design Tokens & Color Palette)](#35-design-system-design-tokens--color-palette)
   - [3.6 CAD Blueprint Footer & Interactive Logotype](#36-cad-blueprint-footer--interactive-logotype)
   - [3.7 Mobile Bottom Navigation](#37-mobile-bottom-navigation)
   - [3.8 Global Command Palette (Search Dialog)](#38-global-command-palette-search-dialog)
   - [3.9 Theme Switcher (Dark / Light Mode)](#39-theme-switcher-dark--light-mode)
4. [Manual Editing in VS Code: Step-by-Step Tutorial](#part-4--manual-editing-in-vs-code)
5. [How to Avoid Breaking Your Website (Safety Checklist)](#part-5--how-to-avoid-breaking-your-website)
6. [Git, GitHub & Deployment Workflow](#part-6--git-github--deployment-workflow)
7. [Quick Reference Tables](#part-7--quick-reference-tables)
8. [Beginner Editing Exercises](#part-8--beginner-editing-exercises)

---

# Part 1 — Architecture & Project Anatomy

Your portfolio is built with the **Next.js 16 App Router**. It does not rely on an external database or third-party CMS; instead, it uses a **Single Source of Truth Configuration Pattern**. 

All your personal details, project lists, technical skills, education records, and experience milestones live in two centralized configuration files. This means you rarely need to touch complex React or Tailwind code to update your profile.

### 1. Project Directory Map

```text
abhiram-portfolio/
├── public/                       # Static public assets (images, videos, icons)
│   ├── images/
│   │   └── avatar.webp           # User portrait image file
│   └── media/
│       ├── ascii-earth-computer.mp4   # Autonomous ASCII video animation
│       ├── ascii-earth-computer.webm  # VP9 video stream
│       └── ascii-earth-computer.jpg   # Static poster / reduced-motion fallback
├── src/
│   ├── app/                      # Next.js App Router routes & layouts
│   │   ├── (app)/                # Route group sharing the main layout
│   │   │   ├── layout.tsx        # App shell: SiteHeader, Footer, BottomNav
│   │   │   ├── page.tsx          # Homepage (/)
│   │   │   ├── about/page.tsx    # Dedicated /about route
│   │   │   ├── blocks/page.tsx   # Reusable layout blocks showcase (/blocks)
│   │   │   ├── blog/             # Blog index (/blog)
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx  # Dynamic article route (/blog/:slug)
│   │   │   ├── components/page.tsx # UI components showcase (/components)
│   │   │   ├── craft/page.tsx    # Hardware/IoT showcase (/craft)
│   │   │   └── design-system/page.tsx # System tokens (/design-system)
│   │   ├── api/
│   │   │   └── github/route.ts   # Server-side GitHub API proxy with 1-hr caching
│   │   ├── layout.tsx            # Root HTML document, font loading, theme provider
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── robots.ts             # Search engine robots.txt generator
│   │   └── sitemap.ts            # Dynamic sitemap.xml generator
│   ├── components/               # Global components shared across pages
│   │   ├── abhiram-mark.tsx      # SVG monogram brand icon
│   │   ├── abhiram-mark-isometric.tsx # ASCII Earth animation visual panel
│   │   ├── command-menu.tsx      # Global search modal (⌘K or /)
│   │   ├── copy-button.tsx       # Reusable clipboard action button
│   │   ├── nav.tsx               # Base navigation renderer
│   │   ├── nav-desktop.tsx       # Desktop header links
│   │   ├── nav-mobile.tsx        # Mobile menu popover
│   │   ├── page-heading.tsx      # Standard title + tagline + description header
│   │   ├── site-bottom-nav.tsx   # Floating mobile bottom navigation pill
│   │   ├── site-footer-brand.tsx # Interactive vector CAD text "ABHIRAM"
│   │   ├── site-footer-cad.tsx   # Blueprint title block metadata & copyright
│   │   ├── site-header.tsx       # Sticky top navigation bar
│   │   ├── theme-toggle.tsx      # Light/Dark toggle button (Hotkey 'D')
│   │   ├── user-avatar.tsx       # CAD vector crosshair avatar with "AS" monogram
│   │   └── ui/                   # Reusable atomic primitives (button, card, dialog, tag, etc.)
│   ├── config/                   # Centralized data files (YOUR PRIMARY EDITING ZONE)
│   │   ├── portfolio.ts          # Personal data: USER, EDUCATION, EXPERIENCES, TECH_STACK, PROJECTS, SOCIAL_LINKS
│   │   └── site.ts               # Site metadata: SITE_INFO, MAIN_NAV, MOBILE_NAV, GITHUB_URL
│   ├── features/                 # Modular feature domains
│   │   ├── blog/                 # Blog post registry, markdown parser, types
│   │   │   └── data/articles.ts  # ARTICLES array and SAMPLE_DRAFT_POST
│   │   └── portfolio/            # Homepage section components
│   │       └── components/       # profile-header, overview, tech-stack, education, etc.
│   ├── lib/                      # Helper utilities, font definitions, audio synthesis
│   └── styles/
│       └── globals.css           # Tailwind CSS v4 directives & OKLCH color theme variables
├── package.json                  # Scripts & dependencies
├── README.md                     # Technical overview & deployment instructions
└── tsconfig.json                 # TypeScript compiler configuration
```

---

# Part 2 — Top-to-Bottom Editing Roadmap

This section follows the **exact visual order** of your website as seen in your browser when loading the homepage (`http://localhost:3000`).

---

## 2.1 Header & Brand Monogram

**Visual Location:** Sticky bar fixed at the very top of every page.  
**Primary Files:**
- Content & Links: `src/config/site.ts`
- Component Markup: `src/components/site-header.tsx`
- Brand Monogram: `src/components/abhiram-mark.tsx`

### What it renders
1. **Brand Link:** The CAD Monogram icon and bold monogram initials `A·S`. Clicking this returns to `/`.
2. **Desktop Navigation:** Links for `About`, `Projects`, `Components`, `Blocks`, `Craft`, and `Blog`.
3. **Action Controls:** Search button (`⌘K`), GitHub icon button, and Dark/Light Mode toggle (`D`).

### How to edit
- **To rename or add a navigation link:**  
  Open `src/config/site.ts` and locate the `MAIN_NAV` array (Line 25):
  ```typescript
  export const MAIN_NAV = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/#projects" },
    { title: "Components", href: "/components" },
    { title: "Blocks", href: "/blocks" },
    { title: "Craft", href: "/craft" },
    { title: "Blog", href: "/blog" },
  ]
  ```
  - **Change a link destination:** Change `href: "/about"` to any page route (e.g. `href: "/contact"`).
  - **Add a new link:** Add `{ title: "Resume", href: "/resume.pdf" },` to the array.
  - **Internal page vs Section jump:** If an `href` begins with `/#` (like `/#projects`), clicking it smooth-scrolls to that section on the homepage. If it begins with `/` (like `/about`), it navigates to that distinct page route.
- **To update the brand text initials:**  
  Open `src/components/site-header.tsx` and find lines 29–31:
  ```tsx
  <span className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
    A·S
  </span>
  ```
  Change `A·S` to any text or initials you prefer.
- **To change the header GitHub button URL:**  
  Open `src/config/site.ts` and change line 100:
  ```typescript
  export const SOURCE_CODE_GITHUB_URL = "https://github.com/abhiramas08"
  ```

---

## 2.2 Hero Profile Header & Animated Tagline

**Visual Location:** The top visual grid containing the ASCII visual panel, circular avatar, name, and vertical text-flip ticker.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`USER.displayName`, `USER.flipSentences`, `USER.avatar`)
- Component: `src/features/portfolio/components/profile-header.tsx`
- Animation Panel: `src/components/abhiram-mark-isometric.tsx`
- Avatar Component: `src/components/user-avatar.tsx`

### What it renders
1. **Rectangular Visual Panel (Figure 1):** The looping ASCII Earth-to-computer communication video animation with image fallback and tactile click sound.
2. **CAD Avatar:** Concentric drafting rings with monogram `AS` and spec label `CAD · 08`.
3. **Display Name:** `ABHIRAM A S` with the blue verified student engineer badge.
4. **Vertical Flip Sentences:** Animated text ticker cycling through your engineering specializations.

### How to edit
- **Change your display name:**  
  Open `src/config/portfolio.ts` and edit line 83:
  ```typescript
  displayName: "ABHIRAM A S",
  ```
- **Update or add flip sentences (rotating titles):**  
  Open `src/config/portfolio.ts` and edit the `flipSentences` array (Lines 99–104):
  ```typescript
  flipSentences: [
    "Third-year CSE student at ACE College of Engineering.",
    "Frontend Developer building clean, accessible interfaces.",
    "Exploring Artificial Intelligence, Computer Vision, and OCR.",
    "Interested in Robotics, Embedded Systems, and Space Technology.",
  ],
  ```
  You can add new strings, edit wording, or change the order. The animation adjusts automatically.
- **Updating or Replacing Your Profile Photo:**  
  Your profile photo is displayed cleanly in `src/components/user-avatar.tsx` inside a circular frame with a subtle ring border.
  To change the photo:
  1. Crop your new photo into a square (1:1 aspect ratio) with your face vertically centered.
  2. Save it as `public/images/avatar.webp` (or `avatar.jpg`).
  3. The avatar component automatically renders the clean image within the circular frame.

---

## 2.3 Social Links Bar

**Visual Location:** Row of outline icon buttons immediately beneath the Hero Profile Header.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`SOCIAL_LINKS`)
- Component: `src/features/portfolio/components/social-links.tsx`

### How to edit
Open `src/config/portfolio.ts` lines 356–375:
```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    title: "GitHub",
    href: "https://github.com/abhiramas08",
    handle: "@abhiramas08",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abhiram-a-s-24a52232b/",
    handle: "abhiram-a-s",
  },
  {
    name: "instagram",
    title: "Instagram",
    href: "https://www.instagram.com/abhrm.io/",
    handle: "@abhrm.io",
  },
  {
    name: "email",
    title: "Email",
    href: "mailto:abhiakshay2005@gmail.com",
    handle: "abhiakshay2005@gmail.com",
  },
]
```
- **Update Instagram URL:** Edit `href` under the `instagram` entry to update your profile link.
- **Update LinkedIn URL:** Edit `href` under the `linkedin` entry.
- **Add a new social link (e.g., X / Twitter):**
  1. Add a new item to `SOCIAL_LINKS` in `src/config/portfolio.ts`:
     ```typescript
     {
       name: "twitter",
       title: "X (Twitter)",
       href: "https://x.com/yourhandle",
       handle: "@yourhandle",
     },
     ```
  2. Open `src/components/icons.tsx` and export your brand SVG icon (e.g. `TwitterIcon`).
  3. Open `src/features/portfolio/components/social-links.tsx` and render `{item.name === "twitter" && <TwitterIcon />}`.

---

## 2.4 Overview Bar (Degree, College, IST Clock, Email)

**Visual Location:** A blueprint specification grid showing degree, institution, location link, real-time clock, and a one-click copyable email button.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`USER.degree`, `USER.institution`, `USER.location`, `USER.timeZone`, `USER.email`, `USER.emailB64`)
- Component: `src/features/portfolio/components/overview/index.tsx`
- Clock Component: `src/features/portfolio/components/overview/current-local-time-item.tsx`

### How to edit
- **Change Degree or College:**  
  Edit `degree` or `institution` in `src/config/portfolio.ts`.
- **Change Location or Google Maps destination:**  
  Edit `location: "Kerala, India"` in `src/config/portfolio.ts`. The Google Maps link in `overview/index.tsx` generates its query dynamically using `encodeURIComponent(USER.location)`.
- **Change Email & Spam Protection:**  
  `portfolio.ts` stores both plain `email` and base64-encoded `emailB64` to prevent bot scraping:
  ```typescript
  email: "abhiakshay2005@gmail.com",
  emailB64: "YWJoaWFrc2hheTIwMDVAZ21haWwuY29t",
  ```
  If you change your email, generate the Base64 version in your terminal using:
  ```powershell
  [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes("your-new-email@gmail.com"))
  ```
  and update both values in `portfolio.ts`.

---

## 2.5 GitHub & Repositories Panel

**Visual Location:** Section titled `GitHub & Repositories` displaying live repository count, followers, verified badge, and repository cards.  
**Primary Files:**
- Component: `src/features/portfolio/components/github-panel.tsx`
- API Proxy: `src/app/api/github/route.ts`

### How it works
This panel connects dynamically to GitHub’s REST API via your local Next.js server route `/api/github`:
1. It requests `https://api.github.com/users/abhiramas08` and `https://api.github.com/users/abhiramas08/repos?sort=updated&per_page=10`.
2. It caches results for **1 hour (3600 seconds)** for fast load times and to avoid rate limits.
3. If GitHub rate limits requests or your network is offline, it gracefully falls back to `VERIFIED_FALLBACK` in `src/app/api/github/route.ts`.

### How to edit the fallback repository
If GitHub's API is unreachable, the fallback repo shown is configured in `src/app/api/github/route.ts` lines 15–30. Edit `VERIFIED_FALLBACK.repos` to update title, stars, or description.

---

## 2.6 About Me Section

**Visual Location:** Handwritten title "About Me" followed by descriptive paragraphs and technical interest pills.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`USER.about`, `USER.interests`)
- Component: `src/features/portfolio/components/hello.tsx`

### How to edit
Open `src/config/portfolio.ts` lines 94–137:
```typescript
about: [
  "I am a third-year B.Tech Computer Science Engineering student at ACE College of Engineering, Kerala.",
  "My technical curiosity centers on frontend development, software engineering fundamentals, artificial intelligence, robotics, and space technology.",
  "I enjoy building clean, resilient user interfaces, exploring embedded vision pipelines, and applying core computer science concepts to practical, real-world problems.",
],
```
- **Add a paragraph:** Add a new quoted string inside the `about` array.
- **Remove a paragraph:** Delete the string line.
- **Edit Interest Pills:**  
  The `interests` array supplies both the pill labels on the homepage and the detailed cards on the `/about` page:
  ```typescript
  interests: [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible web interfaces...",
      icon: "layout",
    },
    ...
  ]
  ```

---

## 2.7 Skills & Technology Stack

**Visual Location:** Technical drafting table with numbered categories (`01 Languages`, `02 Frontend & Web`, etc.) and rounded skill chips.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`TECH_STACK`)
- Component: `src/features/portfolio/components/tech-stack.tsx`

### How it works
The component dynamically groups items from `TECH_STACK` by their `category` string. You do not need to manually create layout columns or change component code when adding or removing skills!

### How to edit
Open `src/config/portfolio.ts` lines 231–267:
```typescript
export const TECH_STACK: TechStackItem[] = [
  // Languages
  { key: "c", title: "C", category: "Languages" },
  { key: "python", title: "Python", category: "Languages" },
  { key: "typescript", title: "TypeScript", category: "Languages" },

  // Frontend & Web
  { key: "react", title: "React", category: "Frontend & Web" },
  { key: "nextjs", title: "Next.js", category: "Frontend & Web" },
  ...
]
```
- **Add a new technology:** Insert a new object:
  ```typescript
  { key: "docker", title: "Docker", category: "Tools & Workflow" },
  ```
- **Remove a technology:** Delete the line corresponding to that technology.
- **Rename a technology:** Change the `title` field (e.g. change `"C++"` to `"Modern C++20"`).
- **Add a completely new category:** Set `category` to a new string, e.g. `category: "Cloud & DevOps"`. The component automatically creates category `06 Cloud & DevOps` with its own row!
- **Reorder technologies:** Move lines up or down within the array.

---

## 2.8 Education

**Visual Location:** Collapsible timeline panel titled `Education` featuring academic status badges and coursework tags.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`EDUCATION`)
- Component: `src/features/portfolio/components/education.tsx`

### How to edit
Open `src/config/portfolio.ts` lines 140–160:
```typescript
export const EDUCATION: EducationItem[] = [
  {
    id: "btech-cse-ace",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "ACE College of Engineering",
    location: "Kerala, India",
    academicStatus: "Third-Year Student",
    status: "In Progress",
    description: "Currently pursuing B.Tech in Computer Science and Engineering...",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      ...
    ],
  },
]
```
- **Update Academic Status:** Change `academicStatus: "Third-Year Student"` to `"Fourth-Year Student"` or `"Graduate"`.
- **Update Degree or Status:** Change `status: "In Progress"` to `"Completed"` when you graduate (this automatically toggles off the pulsing "Current" badge).
- **Add another education record (e.g., Higher Secondary or Master's):** Add a second object to the `EDUCATION` array. The component will render both in clean chronological order.

---

## 2.9 Experience & Learning Journey

**Visual Location:** Collapsible timeline panel titled `Experience & Learning` highlighting your self-directed student projects, workshops, and lab coursework.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`EXPERIENCES`)
- Component: `src/features/portfolio/components/experiences.tsx`

### How to edit
Open `src/config/portfolio.ts` lines 162–229:
```typescript
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "frontend-self-learning",
    title: "Frontend & Web Engineering",
    track: "Self-Directed Student Development",
    period: "Student Projects & Self-Learning",
    description: "Independently designed and built interactive web applications...",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  ...
]
```
- **Add an internship, project, or role:** Copy an existing block, assign a unique `id` (e.g. `id: "ai-internship"`), and fill in `title`, `track`, `period`, `description`, `skills`, and optional `link`.
- **Change Icons:** `experiences.tsx` assigns icons based on `item.id` via `getTrackIcon()` (Line 19). If you create a new `id`, add a case in `getTrackIcon()` to choose `Code2`, `Cpu`, `Bot`, or `BookOpen`.

---

## 2.10 Projects Section

**Visual Location:** Collapsible project rows at the bottom of the homepage displaying project titles, active years, descriptions, skills tags, and external repository links.  
**Primary Files:**
- Data: `src/config/portfolio.ts` (`PROJECTS`)
- Component: `src/features/portfolio/components/projects.tsx`

### Deep Dive: Manual Projects vs. Automatic GitHub Sync

> [!IMPORTANT]
> Your website uses **two separate, complementary project presentations**:
> 1. **Candidate Projects Section (`Projects`):** **Manually Maintained** in `src/config/portfolio.ts`. This allows you to showcase curated projects with custom descriptions, year spans, and tags, even for offline or embedded hardware projects.
> 2. **GitHub & Repositories Panel (`GitHubPanel`):** **Automatically Fetched** from GitHub API (`https://api.github.com/users/abhiramas08/repos`).

---

### Scenarios 1 through 8 Answered

#### Scenario 1: I create a new public repository on GitHub. Will it automatically appear on my portfolio?
- **In GitHub & Repositories Panel:** **YES**. Within 1 hour (after cache revalidation), your new repository will automatically appear in the `GitHub & Repositories` list.
- **In Candidate Projects Section:** **NO**. The `Projects` list is manually curated in `src/config/portfolio.ts` so you have total control over which projects are featured.

#### Scenario 2: I delete a repository from GitHub. Will its portfolio card automatically disappear?
- **In GitHub & Repositories Panel:** **YES**. Once the 1-hour cache expires, GitHub's API will no longer return it, and it will disappear automatically.
- **In Candidate Projects Section:** **NO**. You must remove the entry from `src/config/portfolio.ts`.

#### Scenario 3: I archive a repository on GitHub. Will it still appear?
- **In GitHub & Repositories Panel:** **YES**, GitHub's public API still returns archived public repositories.
- **In Candidate Projects Section:** **YES**, until you edit or remove it in `src/config/portfolio.ts`.

#### Scenario 4: I rename a repository on GitHub. Will the portfolio link update automatically?
- **In GitHub & Repositories Panel:** **YES**. The API returns the new name and new `html_url`.
- **In Candidate Projects Section:** **NO**. You must update the `link` property in `src/config/portfolio.ts`.

#### Scenario 5: I change a repository description or add topics on GitHub. Will those appear?
- **In GitHub & Repositories Panel:** **YES**, the updated description appears upon next cache refresh.
- **In Candidate Projects Section:** **NO**, descriptions in `portfolio.ts` are static and custom-written.

#### Scenario 6: I want a repository to remain on GitHub but disappear from my portfolio. How do I hide it?
- **In Candidate Projects Section:** Simply delete or comment out that project object from `PROJECTS` in `src/config/portfolio.ts`.
- **In GitHub & Repositories Panel:** Open `src/app/api/github/route.ts` line 96 and filter it out by name:
  ```typescript
  const repos = Array.isArray(reposData)
    ? (reposData as RawGitHubRepo[])
        .filter((repo) => repo.name !== "repo-to-hide")
        .map((repo) => ...)
  ```

#### Scenario 7: I want to feature selected repositories instead of displaying every repository. How do I configure that?
In `src/app/api/github/route.ts`, filter `reposData` by an allowlist:
```typescript
const FEATURED = ["medicine-expiry-detection", "ace-college-drone-robotics-workshop"]
const repos = (reposData as RawGitHubRepo[])
  .filter((repo) => FEATURED.includes(repo.name))
  .map(...)
```

#### Scenario 8: I want to manually add a project that does not have a GitHub repository. How do I do that?
Add it directly to `PROJECTS` in `src/config/portfolio.ts`:
```typescript
{
  id: "robotics-lab-sensor",
  title: "Robotics Ultrasonic Telemetry Sensor",
  description: "Hardware breadboard project designed during ACE College lab sessions...",
  period: { start: "2024", end: "2024" },
  link: "https://your-writeup-or-demo.com",
  skills: ["Arduino", "Hardware", "C++"],
}
```
If you have no link, set `link: "#projects"`.

---

# Part 3 — Other Dedicated Pages & Reusable Components

---

## 3.1 /craft (Hardware & Embedded Showcase)

**Route:** [http://localhost:3000/craft](http://localhost:3000/craft)  
**File:** `src/app/(app)/craft/page.tsx`

This page showcases your hardware engineering, IoT, and embedded prototypes (e.g., *Medicine Expiry Date Detection System*, *Drone Workshop Platform*).

### How to edit Craft projects
Open `src/app/(app)/craft/page.tsx` and find the `CRAFTS` array (Lines 35–78):
```typescript
const CRAFTS: CraftProject[] = [
  {
    id: "medicine-expiry-ocr",
    figureNumber: "01",
    title: "Medicine Expiry Date Detection System",
    category: "Computer Vision & IoT",
    status: "In Active Development",
    date: "2025 — Present",
    description: "An embedded computer vision system engineered with an ESP32-CAM module...",
    hardware: ["ESP32-CAM Module", "Arduino Uno / Nano", "OV2640 Camera Sensor"],
    software: ["OpenCV (Python)", "Tesseract OCR Engine", "C++ / Arduino IDE"],
    repositoryUrl: "https://github.com/abhiramas08",
    schematicType: "medicine-ocr",
  },
  ...
]
```
- **Add a new experiment:** Copy an existing entry, update `figureNumber: "04"`, list the hardware parts and software libraries, and add the repository URL.

---

## 3.2 /blog & /blog/[slug] (Article Registry & Markdown Engine)

**Routes:**
- Index: [http://localhost:3000/blog](http://localhost:3000/blog)
- Article: [http://localhost:3000/blog/:slug](http://localhost:3000/blog/medicine-expiry-detection-pipeline)  
**Primary Files:**
- Data Registry: `src/features/blog/data/articles.ts`
- Index Page: `src/app/(app)/blog/page.tsx`
- Article Layout: `src/app/(app)/blog/[slug]/page.tsx`

### How to publish your first article
Your blog currently exhibits a clean empty state (`ARTICLES = []`). A complete starter article is pre-configured for you in `src/features/blog/data/articles.ts`:
1. Open `src/features/blog/data/articles.ts`.
2. Locate line 28 on `SAMPLE_DRAFT_POST`:
   ```typescript
   published: false, // Set to true to publish
   ```
   Change it to:
   ```typescript
   published: true,
   ```
3. Add it to the active list on line 104:
   ```typescript
   export const ARTICLES: BlogPost[] = [
     SAMPLE_DRAFT_POST,
   ]
   ```
4. Save the file. Visiting [http://localhost:3000/blog](http://localhost:3000/blog) will now display the article card, and clicking it will open the fully formatted, syntax-highlighted article!

---

## 3.3 /about (Dedicated About Route)

**Route:** [http://localhost:3000/about](http://localhost:3000/about)  
**File:** `src/app/(app)/about/page.tsx`

This page presents your extended student biography, academic coursework, technical interest deep-dives, and quick links.
- It pulls data directly from `USER`, `EDUCATION`, and `EXPERIENCES` in `src/config/portfolio.ts`.
- Updating `src/config/portfolio.ts` automatically updates both the homepage and the `/about` page simultaneously!

---

## 3.4 /components & /blocks (UI Showcase Pages)

**Routes:**
- `/components`: [http://localhost:3000/components](http://localhost:3000/components)
- `/blocks`: [http://localhost:3000/blocks](http://localhost:3000/blocks)  
**Files:**
- `src/app/(app)/components/page.tsx`
- `src/app/(app)/blocks/page.tsx`

These pages demonstrate your reusable UI library (buttons, badges, tabs, cards, inputs) and pre-assembled layout patterns with interactive copy-to-clipboard code tabs. To add a new component demo, add a new `<section>` block following the existing `<Tabs defaultValue="preview">` pattern in those files.

---

## 3.5 /design-system (Design Tokens & Color Palette)

**Route:** [http://localhost:3000/design-system](http://localhost:3000/design-system)  
**File:** `src/app/(app)/design-system/page.tsx`

Displays the calibrated OKLCH neutral color tokens, drafting typography scales, and blueprint line weights. Colors themselves are configured in `src/styles/globals.css`.

---

## 3.6 CAD Blueprint Footer & Interactive Logotype

**Visual Location:** Bottom of every page.  
**Files:**
- Metadata & Copyright: `src/components/site-footer-cad.tsx`
- Vector Logotype: `src/components/site-footer-brand.tsx`

### How to edit
- **Footer Copyright Text:**  
  In `src/components/site-footer-cad.tsx` line 79:
  ```tsx
  © {new Date().getFullYear()} {USER.name}. Designed & Developed with Precision.
  ```
- **CAD Title Block fields:**  
  Lines 28–71 of `site-footer-cad.tsx` display program ("B.Tech CSE"), institution ("ACE College"), semester ("Semester 6"), and source code links. Edit the `<Field label="...">` tags directly if you wish to adjust your semester or program name.
- **Interactive "ABHIRAM" SVG text:**  
  `src/components/site-footer-brand.tsx` renders large CAD drafting text that responds to mouse movements with dynamic spring gradients.

---

## 3.7 Mobile Bottom Navigation

**Visual Location:** Floating glass pill at the bottom of the screen on mobile devices (< 640px).  
**Files:**
- Container: `src/components/site-bottom-nav.tsx`
- Menu Popover: `src/components/nav-mobile.tsx`
- Data: `MOBILE_NAV` in `src/config/site.ts`

To add or remove mobile navigation items, edit the `MOBILE_NAV` array in `src/config/site.ts` (Lines 52–97).

---

## 3.8 Global Command Palette (Search Dialog)

**Trigger:** Press `⌘K` (Mac) or `Ctrl + K` (Windows) or `/`, or click the search button in the header.  
**File:** `src/components/command-menu.tsx`

The search dialog dynamically indexes:
- Static pages (`/`, `/about`, `/components`, `/blocks`, `/craft`, `/blog`, `/design-system`).
- Homepage anchors (`#projects`, `#education`, `#experience`, `#stack`, `#github`).
- Active projects from `PROJECTS` in `src/config/portfolio.ts`.
- Published articles from `ARTICLES` in `src/features/blog/data/articles.ts`.
- Theme toggle commands.

Whenever you add a project or blog post, it is **automatically indexed** in the command menu without any extra code!

---

## 3.9 Theme Switcher (Dark / Light Mode)

**Trigger:** Header toggle button or pressing hotkey `D`.  
**File:** `src/components/theme-toggle.tsx`  
Uses `next-themes` with instantaneous rotation, tactile click sound synthesis, and automatic synchronization with your operating system preference.

---

# Part 4 — Manual Editing in VS Code

### Step 1: Open the Project
1. Open **Visual Studio Code**.
2. Press `Ctrl + K, Ctrl + O` (or click `File` > `Open Folder...`).
3. Select the folder:  
   `C:\Users\windows 10\.gemini\antigravity\scratch\abhiram-portfolio`
4. Verify you see `package.json`, `src/`, and `public/` in the Explorer pane.

### Step 2: Start the Development Server
Open the built-in terminal (`Ctrl + ~`) and run:
```powershell
npm.cmd run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser. Next.js supports **Fast Refresh**: whenever you save a file in VS Code (`Ctrl + S`), the browser updates automatically in under a second!

### Step 3: Finding Any Text Quickly
If you see text on the website that you want to edit:
1. Press `Ctrl + Shift + F` in VS Code (Global Search).
2. Type the exact visible words (for example: `Third-Year Student` or `ace-college-drone`).
3. Click on the file in the search results to jump directly to the code line.

### Step 4: Safely Editing TypeScript Objects & Arrays
In `src/config/portfolio.ts`, items are wrapped in objects `{}` inside arrays `[]`:
```typescript
export const TECH_STACK: TechStackItem[] = [
  { key: "react", title: "React", category: "Frontend & Web" }, // <-- notice comma at end
  { key: "nextjs", title: "Next.js", category: "Frontend & Web" },
]
```
- **Rule 1:** Always keep quotes around strings (`"React"`, not `React`).
- **Rule 2:** Always separate objects with a comma `,`.
- **Rule 3:** Do not leave an unclosed bracket `]` or brace `}`.

### Step 5: How to Undo If Something Breaks
- **Single file undo:** Press `Ctrl + Z` in VS Code to revert your recent edits.
- **Discard all changes to a file using Git:**
  ```powershell
  git checkout -- src/config/portfolio.ts
  ```

---

# Part 5 — How to Avoid Breaking Your Website

Follow this 5-point safety checklist before and after editing:

1. **Keep `portfolio.ts` as your Primary Editing Zone:** 95% of content changes belong in `src/config/portfolio.ts` or `src/config/site.ts`. Modifying data files avoids the risk of breaking React components or CSS layouts.
2. **Never change component export names:**  
   If a file says `export function Projects()`, do not change it to `export function MyProjects()`. Other pages import that exact name; changing it causes compilation errors.
3. **Preserve React keys in `.map()` lists:**  
   When adding items to arrays, ensure `id` or `key` is unique. React requires unique keys to render lists smoothly.
4. **Run the Type Check & Linter before committing:**  
   After making edits, open your terminal and run:
   ```powershell
   npm.cmd run check-types
   npm.cmd run lint
   ```
   If both commands output clean status, your code is 100% syntactically correct!
5. **Test responsive views:**  
   Press `F12` in Chrome, click the Mobile Device Toggle button (`Ctrl + Shift + M`), and confirm your changes look great on both mobile (375px) and desktop (1280px) screens.

---

# Part 6 — Git, GitHub & Deployment Workflow

### 1. Check your edits locally
Before committing, inspect what files you modified:
```powershell
git status
```
Inspect the exact line-by-line differences:
```powershell
git diff
```

### 2. Stage and commit your changes
```powershell
git add src/config/portfolio.ts
git commit -m "Update technical skills and project details"
```

### 3. Push to GitHub
```powershell
git push origin master
```

### 4. Deploying to Vercel (Complete Step-by-Step Guide)

Vercel is the native cloud platform created by the authors of Next.js. It offers the fastest, zero-configuration global hosting with automatic SSL, Edge Caching, and instant CI/CD on every Git push.

#### Step 4.1: Initial Project Import
1. Navigate to [vercel.com](https://vercel.com) and sign in using your GitHub account (`abhiramas08`).
2. On your Vercel Dashboard, click **Add New...** > **Project**.
3. Locate your portfolio repository (e.g., `abhiram-portfolio`) from the GitHub repository list and click **Import**.

#### Step 4.2: Build Configuration & Environment Variables
Vercel automatically recognizes Next.js 16 and configures optimal presets:
- **Framework Preset:** `Next.js`
- **Root Directory:** `./`
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

Expand the **Environment Variables** accordion before clicking Deploy:
1. **GitHub Token (Optional, for higher API rate limits):**
   - **Key:** `GITHUB_TOKEN`
   - **Value:** `ghp_yourPersonalGitHubToken` *(Generate via GitHub > Settings > Developer Settings > Personal Access Tokens (Classic) with public_repo read permissions)*.
   - *Note: This token is strictly evaluated server-side in `/api/github/route.ts` and is never exposed in client bundles.*
2. **Production URL (Recommended for OpenGraph & SEO):**
   - **Key:** `NEXT_PUBLIC_APP_URL`
   - **Value:** `https://your-custom-domain.com` (or your initial `https://abhiram-portfolio.vercel.app`).

#### Step 4.3: Deploy
Click **Deploy**. Vercel will run `npm run build`, generate static pages for all 12 routes in ~30 seconds, and deploy your site to an initial production URL (e.g. `https://abhiram-portfolio.vercel.app`).

---

### 5. Connecting a Custom Domain (e.g., `abhiramas.dev` or `abhiramas.com`)

Connecting your own personal domain gives your portfolio a polished, professional student engineer brand.

#### Step 5.1: Add Your Domain in Vercel
1. In your Vercel Project Dashboard, click **Settings** (top navigation tab) > **Domains** (left sidebar).
2. Enter your domain name in the input field:
   - For a root domain: `yourname.com`
   - Vercel will ask if you also want to add `www.yourname.com` and automatically redirect one to the other. **Select the recommended option** (redirect `www.yourname.com` to `yourname.com` or vice-versa).
3. Click **Add**.

#### Step 5.2: Configure DNS Records at Your Domain Registrar
Log in to wherever you purchased your domain (Namecheap, GoDaddy, Cloudflare, Hostinger, Google Domains / Squarespace) and navigate to **Manage DNS** / **Advanced DNS**:

Add the following **two records**:

| Type | Name / Host | Target / Value | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A Record** | `@` (or leave blank) | `76.76.21.21` | Automatic / 300 | Points your apex/root domain to Vercel's global Anycast IP |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300 | Routes the `www` subdomain to Vercel with automatic failover |

*If using Cloudflare:* Set the SSL/TLS mode to **Full** (or **Full (strict)**) and set the Proxy status to **DNS Only** (gray cloud) during initial verification.

#### Step 5.3: SSL / HTTPS Verification & Propagation
1. Within 5–15 minutes of saving your DNS records, Vercel will detect the records and automatically issue a free **Let's Encrypt SSL/TLS Certificate**.
2. A green checkmark with `Valid Configuration` and `Issued` will appear beside both domains in your Vercel dashboard.
3. Your portfolio is now permanently accessible over encrypted `https://yourdomain.com`!

#### Step 5.4: Troubleshooting Domain Issues
- **DNS Propagation Delay:** DNS records can take anywhere from 2 minutes up to 24 hours to propagate globally. You can test your DNS status using [whatsmydns.net](https://www.whatsmydns.net/) by searching your domain for `A` records.
- **Conflicting Old Records:** If your domain previously pointed elsewhere, delete any old `A` or `CNAME` records pointing to parking pages or previous web hosts.

---

### 6. Continuous Deployment & Instant Rollbacks

- **Automatic Deployments:** Every time you run `git push origin master`, Vercel immediately creates an atomic production deployment. If any build error occurs, Vercel prevents the broken build from publishing and keeps your previous working version live.
- **Instant 1-Click Rollback:** If you ever push a change that you dislike or that introduces an unexpected bug:
  1. Open your Vercel Dashboard > **Deployments**.
  2. Find your previous healthy deployment.
  3. Click the three dots `...` > **Promote to Production**.
  4. Your website reverts instantly in under 2 seconds without needing a new Git commit!

---

---

# Part 7 — Quick Reference Tables

### Table 1: Section to File Mapping

| What I want to change | Actual file path | What to search for | What to edit | Manual or Automatic? |
| :--- | :--- | :--- | :--- | :--- |
| **My Name & Title** | `src/config/portfolio.ts` | `name:`, `displayName:` | Strings on lines 82–84 | **Manual** |
| **Rotating Flip Sentences** | `src/config/portfolio.ts` | `flipSentences:` | Array on lines 99–104 | **Manual** |
| **Bio & About Paragraphs** | `src/config/portfolio.ts` | `about:` | Array on lines 94–98 | **Manual** |
| **Social Links (GitHub, LinkedIn, Instagram, Email)** | `src/config/portfolio.ts` | `SOCIAL_LINKS` | Array on lines 356–380 | **Manual** |
| **College & Degree** | `src/config/portfolio.ts` | `EDUCATION` | Array on lines 140–160 | **Manual** |
| **Technical Skills** | `src/config/portfolio.ts` | `TECH_STACK` | Array on lines 231–267 | **Manual** |
| **Student Experiences** | `src/config/portfolio.ts` | `EXPERIENCES` | Array on lines 162–229 | **Manual** |
| **Curated Projects** | `src/config/portfolio.ts` | `PROJECTS` | Array on lines 269–354 | **Manual** |
| **Live GitHub Repos Panel** | `src/app/api/github/route.ts` | `fetch("https://api.github.com...` | Server API proxy | **Automatic (Live API)** |
| **Fallback GitHub Repo** | `src/app/api/github/route.ts` | `VERIFIED_FALLBACK` | Object on lines 4–32 | **Manual Fallback** |
| **Header Navigation Links** | `src/config/site.ts` | `MAIN_NAV` | Array on lines 25–50 | **Manual** |
| **Mobile Menu Links** | `src/config/site.ts` | `MOBILE_NAV` | Array on lines 52–97 | **Manual** |
| **Site SEO Metadata** | `src/config/site.ts` | `SITE_INFO` | Object on lines 1–18 | **Manual** |
| **Hardware Projects (/craft)** | `src/app/(app)/craft/page.tsx` | `CRAFTS` | Array on lines 35–78 | **Manual** |
| **Publish Blog Post (/blog)** | `src/features/blog/data/articles.ts` | `ARTICLES` | Array on lines 104–107 | **Manual** |
| **Footer Copyright Text** | `src/components/site-footer-cad.tsx` | `Designed & Developed` | JSX on line 79 | **Manual** |
| **ASCII Visual Animation** | `src/components/abhiram-mark-isometric.tsx` | `<video` / `<Image` | Video sources on lines 69–75 | **Manual** |

---

### Table 2: Common Operations Walkthrough

| Operation | Steps | Files Affected | How to Verify |
| :--- | :--- | :--- | :--- |
| **Update Graduation Year** | Change `academicStatus` or `period` in `EDUCATION` | `src/config/portfolio.ts` | Check homepage `#education` and `/about` |
| **Add a New Programming Language** | Add `{ key: "go", title: "Go", category: "Languages" },` to `TECH_STACK` | `src/config/portfolio.ts` | Check homepage `#stack`; item count increases |
| **Add a New GitHub Project Card** | Add project object to `PROJECTS` array | `src/config/portfolio.ts` | Check homepage `#projects`; card expands on click |
| **Update LinkedIn Profile Link** | Edit `href` under `name: "linkedin"` in `SOCIAL_LINKS` | `src/config/portfolio.ts` | Click LinkedIn icon in header/social bar |
| **Publish a New Blog Article** | Add post to `ARTICLES` in `articles.ts` with `published: true` | `src/features/blog/data/articles.ts` | Visit `/blog`; post appears in search and grid |
| **Update Email Address** | Update both `email` and base64 string `emailB64` in `USER` | `src/config/portfolio.ts` | Click "Copy" button in Overview section |

---

# Part 8 — Beginner Editing Exercises

Practice these step-by-step exercises to build complete confidence:

### Exercise 1: Change One Text String
1. Open `src/config/portfolio.ts`.
2. Locate line 84:
   ```typescript
   headline: "Computer Science Student | Frontend Developer | Aspiring Full-Stack & AI Engineer",
   ```
3. Change it to:
   ```typescript
   headline: "Computer Science Student | Software Engineer | AI & Robotics Enthusiast",
   ```
4. Save the file (`Ctrl + S`) and view your homepage to see the update.

### Exercise 2: Add a New Skill to your Stack
1. Open `src/config/portfolio.ts` around line 240.
2. In the `Frontend & Web` section of `TECH_STACK`, add:
   ```typescript
   { key: "vite", title: "Vite", category: "Frontend & Web" },
   ```
3. Save the file. Look at the `02 Frontend & Web` category on your homepage: `Vite` appears as an active badge, and the Stack counter increases by 1!

### Exercise 3: Add a New Project
1. Open `src/config/portfolio.ts` around line 350.
2. Paste this new entry at the bottom of the `PROJECTS` array:
   ```typescript
   {
     id: "my-new-project",
     title: "Portfolio System 2.0",
     description: "Modernized CAD developer portfolio built with Next.js 16 and Tailwind CSS v4.",
     period: { start: "2026", end: "2026" },
     link: "https://github.com/abhiramas08",
     skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
   },
   ```
3. Save the file. Scroll to `#projects` on your homepage to see your new collapsible project card!

---

**You now possess complete independence and mastery over your portfolio!** Keep this guide saved as your permanent project manual.
