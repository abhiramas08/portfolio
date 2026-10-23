# Abhiram A S — Personal Portfolio & Technical Showcase

A visually faithful, high-performance developer portfolio for **ABHIRAM A S**, a third-year B.Tech Computer Science and Engineering student at ACE College of Engineering, Kerala.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**, engineered with precision CAD blueprint drafting aesthetics.

---

## Key Features

- **Technical Blueprint Aesthetic**: Precision CAD drafting grid lines extending to infinite viewport edges (`screen-line-*`), diagonal stripe separators, and title block metadata panels.
- **Global Command Palette**: Instant modal search (`⌘K` or `/`) indexing pages, projects, blog articles, UI components, section blocks, craft experiments, tech skills, and theme controls.
- **Dynamic Headline**: Animated vertical text-flip ticker cycling core engineering identities with spring damping.
- **Real-Time Local Clock**: Dynamic analog SVG clock with trigonometric math and viewer timezone delta (`Asia/Kolkata` / IST).
- **Theme Switcher**: Instant Dark/Light mode toggle with global hotkey (`D`), rotating CAD icon, zero flash on load, and operating system preference detection.
- **Genuine GitHub Integration**: Real profile data and repositories fetched from the GitHub API (`/api/github`) with rate-limit handling and verified offline caching.
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

## Files Used to Update Personal Content

To customize or add your genuine projects, articles, and details:

1. **Profile, Education, Stack & Projects**:
   - File: `src/config/portfolio.ts`
   - Update `USER` (headline, bio, interests), `EDUCATION` (coursework, degree), `EXPERIENCES` (self-learning tracks), `TECH_STACK` (skills), and `PROJECTS` (candidate web and embedded applications).
2. **Site Metadata & Social Links**:
   - File: `src/config/site.ts`
   - Update website URL, page title templates, and navigation links.
3. **Blog Articles**:
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

## Remaining Notes & Next Steps

1. **Avatar Image**: The avatar defaults to `/images/avatar.webp`. You can place your preferred portrait in `public/images/avatar.webp`.
2. **Blog Posts**: The blog is set to an elegant empty state as requested (`ARTICLES = []`). A starter template post is preserved in `src/features/blog/data/articles.ts` ready to be published whenever you write new articles.
3. **Analytics**: You can optionally integrate privacy-friendly analytics such as Vercel Analytics or Cloudflare Web Analytics when deploying.

---

## License

- Audio click synthesis assets by Kenney (CC0).
