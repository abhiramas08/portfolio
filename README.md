# Abhiram A S — Personal Portfolio & Technical Showcase

A visually faithful, high-performance developer portfolio for **ABHIRAM A S**, a third-year B.Tech Computer Science and Engineering student at ACE College of Engineering, Kerala.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**, engineered with precision CAD blueprint drafting aesthetics.

---

## Recent Updates & Enhancements

- **ASCII Earth-to-Computer Visual Panel**: Replaced the cursor demo with an autonomous looping ASCII video animation (`/media/ascii-earth-computer.mp4`) depicting orbital Earth telemetry transmitting to a desktop computer, complete with high-resolution image fallback and tactile click sound.
- **Clean Circular Portrait Avatar**: Integrated high-resolution portrait photograph (`/images/avatar.webp`) inside the circular header frame with a subtle perimeter ring overlay (`inset-ring-1`), preserving natural grayscale shading and facial landmarks without distracting guide lines or dots.
- **Instagram Social Integration**: Added direct Instagram profile link (`https://www.instagram.com/abhrm.io/`) alongside GitHub, LinkedIn, and Email with custom SVG glyph and unified hover styles.
- **Attribution Cleaned**: Updated footer copyright to `© 2026 Abhiram A S. Designed & Developed with Precision.`, removing external inspiration references.
- **Comprehensive Editing Roadmap**: Authored [`PORTFOLIO_EDITING_GUIDE.md`](./PORTFOLIO_EDITING_GUIDE.md), a 900+ line step-by-step manual covering VS Code editing, component structures, data schemas, domain configuration, and Vercel deployment.

---

## Key Features

- **Autonomous ASCII Animation Panel**: Hero visual figure with orbital Earth communication video, responsive sizing, and tactile audio feedback.
- **Clean Profile Avatar**: Circular portrait crop positioned with facial landmark headroom and natural studio background preservation.
- **Technical Blueprint Aesthetic**: Precision CAD drafting grid lines extending to infinite viewport edges (`screen-line-*`), diagonal stripe separators, and title block metadata panels.
- **Global Command Palette**: Instant modal search (`⌘K` or `/`) indexing pages, projects, blog articles, UI components, section blocks, craft experiments, tech skills, and theme controls.
- **Dynamic Headline**: Animated vertical text-flip ticker cycling core engineering identities with spring damping.
- **Real-Time Local Clock**: Dynamic analog SVG clock with trigonometric math and viewer timezone delta (`Asia/Kolkata` / IST).
- **Theme Switcher**: Instant Dark/Light mode toggle with global hotkey (`D`), rotating CAD icon, zero flash on load, and operating system preference detection.
- **Genuine GitHub Integration**: Real profile data and repositories fetched from the GitHub API (`/api/github`) with rate-limit handling and verified offline caching.
- **Social Media Bar**: Quick links to GitHub, LinkedIn, Instagram, and Email with consistent CAD-styled outline buttons.
- **Modular Component & Block Showcases**: Dedicated `/components` and `/blocks` routes displaying interactive UI primitives with code previews and clipboard copy actions.
- **Technical Craft Showcase**: Hardware and embedded vision lab experiments at `/craft`, featuring the *Medicine Expiry Detection System* and *Drone & Robotics Workshop*.
- **Blog Engine**: Extensible Markdown/MDX content layer at `/blog` with support for syntax-highlighted code panels, SEO metadata, reading times, tag filters, and clean empty states.
- **Dedicated About Page**: Comprehensive student background, academic coursework at ACE College of Engineering, core interest areas (Frontend, AI, Robotics, Space Tech), and self-learning milestones.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` and OKLCH color spaces
- **Primitives**: [@base-ui/react](https://base-ui.com/) (Accessible unstyled dialogs, popovers, tabs, buttons)
- **Animation**: [Motion](https://motion.dev/) (Framer Motion)
- **Search Engine**: [cmdk](https://cmdk.paco.me/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Engine**: `next-themes` with zero-flash pre-hydration script
- **Sound Engine**: Native Web Audio API with zero-network base64 audio synthesis

---

## Project Structure

```text
├── public/
│   ├── images/
│   │   ├── avatar.webp            # Active profile photo (786x786 WebP)
│   │   ├── avatar-circular-clean.png # Circular masked portrait
│   │   └── portrait-clean-dark-bg.png# Framed portrait on dark canvas
│   └── media/
│       ├── ascii-earth-computer.mp4 # Looping ASCII animation video
│       └── ascii-earth-computer.jpg # Video fallback poster
├── src/
│   ├── app/                       # Next.js App Router routes & layouts
│   ├── components/                # Global UI components
│   │   ├── abhiram-mark-isometric.tsx # ASCII Earth animation panel
│   │   ├── user-avatar.tsx        # Profile photo circular container
│   │   ├── site-header.tsx        # Sticky top navigation
│   │   ├── site-footer-cad.tsx    # Blueprint footer
│   │   └── command-palette.tsx    # Global search (Cmd+K)
│   ├── config/
│   │   ├── portfolio.ts           # Central personal details & social links
│   │   └── site.ts                # Metadata & nav configuration
│   └── features/
│       └── portfolio/             # Profile header, projects, timeline
└── PORTFOLIO_EDITING_GUIDE.md     # Complete manual maintenance guide
```

---

## Routes

| Route | Description |
| :--- | :--- |
| `/` | Portfolio homepage (Hero, Overview, Socials, Stack, Education, Experience, Projects, GitHub) |
| `/about` | Full profile: Student background, areas of interest, coursework, and self-learning |
| `/blog` | Blog index route with tag filter, search input, and clean empty state |
| `/blog/[slug]` | Dynamic article route with syntax-highlighted `CodePanel`, SEO tags, and pagination |
| `/components` | UI component library showcase (Button, Badge, Tag, Card, Tabs, Input, Tooltip, etc.) |
| `/blocks` | Reusable section block patterns (Hero, Overview, Projects grid, Education, Contact) |
| `/craft` | Technical hardware experiments and robotics schematics |
| `/design-system` | Design system color swatches, typography scales, line utilities, and radii |
| `/api/github` | Server-side GitHub API route handler with secure token support and rate-limit fallback |
| `/sitemap.xml` | Dynamically generated XML sitemap for search engine crawlers |
| `/robots.txt` | Crawler directives allowing indexation of public routes |

---

## Manual Content Customization

For full details, refer to [`PORTFOLIO_EDITING_GUIDE.md`](./PORTFOLIO_EDITING_GUIDE.md). Primary locations:

1. **Profile, Education, Stack & Projects**:
   - File: `src/config/portfolio.ts`
   - Update `USER` (headline, bio, interests), `SOCIAL_LINKS` (GitHub, LinkedIn, Instagram, Email), `EDUCATION`, `EXPERIENCES`, `TECH_STACK`, and `PROJECTS`.
2. **Profile Photo**:
   - File: `public/images/avatar.webp`
   - Replace with any $1:1$ aspect ratio photo. It renders automatically inside `src/components/user-avatar.tsx`.
3. **Hero Visual Panel**:
   - File: `src/components/abhiram-mark-isometric.tsx`
   - Video asset: `public/media/ascii-earth-computer.mp4`.
4. **Blog Articles**:
   - File: `src/features/blog/data/articles.ts`
   - Add new article objects with standard Markdown `content`. Set `published: true` to publish.

---

## Development & Build Commands

### Prerequisites
- **Node.js**: `v20.x` or higher (tested on `v24.x`)
- **Package Manager**: `npm` (`v10.x` or higher)

### Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript checks
npm run check-types

# 3. Run ESLint checks
npm run lint

# 4. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and optimize for production
npm run build

# Start the production server
npm run start
```

---

## Deployment Guide (Vercel / Free Hosting)

This project is fully optimized for zero-configuration deployment on **Vercel**:

### 1. Push to GitHub
Initialize your personal GitHub repository if you haven't already:
```bash
git remote add origin https://github.com/abhiramas08/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Import into Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** and select your `portfolio` repository.
3. Keep the default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`

### 3. Environment Variables (Optional)
Configure the following environment variables in Vercel project settings:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | Production custom domain URL | `https://abhiram.dev` |
| `GITHUB_TOKEN` | Optional GitHub Personal Access Token (for higher API rate limits) | *Unset (Unauthenticated 60 req/hr)* |

*Note: The token is strictly read server-side by `/api/github` and is never exposed in client bundles.*

---

## License

- Audio click synthesis assets by Kenney (CC0).
