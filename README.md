# Abhiram A S — Personal Portfolio & Technical Showcase

A visually faithful, high-performance developer portfolio for **ABHIRAM A S**, a third-year B.Tech Computer Science and Engineering student.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**, inspired by the precision CAD blueprint drafting aesthetics of [chanhdai.com](https://chanhdai.com).

---

## Overview

### Key Features
- **Technical Blueprint Aesthetic**: Precision CAD drafting grid lines extending to infinite viewport edges (`screen-line-*`), diagonal stripe separators, and title block metadata panels.
- **Interactive 3D CAD Monogram**: Cursor-tracking isometric vector prism with spring physics and metallic click audio feedback.
- **Dynamic Headline**: Animated vertical text-flip ticker cycling core engineering identities.
- **Real-Time Local Clock**: Dynamic analog SVG clock hands with trigonometric math and viewer timezone delta (`Asia/Kolkata` / IST).
- **Spam-Protected Contacts**: Base64 encoded contact links with one-click copy and toast confirmation.
- **Theme Switcher**: Instant Dark/Light mode toggle with global hotkey (`D`), smooth rotating icon, and sound synthesis.
- **Centralized Data Layer**: All credentials, skills, projects, and contact info centralized in `src/config/portfolio.ts` with strict privacy (phone number kept out of the public interface).

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` and OKLCH color spaces
- **Animation**: [Motion](https://motion.dev/) (Framer Motion)
- **Typography**: Geist Sans (`geist`), IBM Plex Serif, Caveat (`next/font/google`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: `next-themes` with zero-flash pre-hydration script
- **Sound Engine**: Native Web Audio API with zero-network base64 audio synthesis

---

## Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher (verified on `v24.18.0`)
- **Package Manager**: `npm` (`v10.x` or higher)

### Installation

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\windows 10\.gemini\antigravity\scratch\abhiram-portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Production Build & Type Checking

- **Run Type Checks**:
  ```bash
  npm run check-types
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Start Production Server**:
  ```bash
  npm run start
  ```

---

## Project Structure

```
src/
├── app/
│   ├── (app)/
│   │   ├── layout.tsx         # Blueprint container, header, CAD footer, bottom fade
│   │   └── page.tsx           # Foundation portfolio homepage
│   ├── not-found.tsx          # 404 error drafting page
│   └── layout.tsx             # Root HTML layout, font variables, theme provider
├── components/
│   ├── ui/                    # Reusable primitives (button, tag, kbd, separator, icon-tile)
│   ├── abhiram-mark.tsx       # Original geometric CAD monogram
│   ├── abhiram-mark-isometric.tsx # 3D isometric interactive CAD monogram with audio
│   ├── site-header.tsx        # Blueprint navigation header with screen bleed rules
│   ├── site-footer-cad.tsx    # Technical drawing title block footer
│   ├── site-footer-brand.tsx  # Interactive mouse-tracking "ABHIRAM" logotype
│   ├── theme-toggle.tsx       # Theme switch with sound & hotkey D
│   └── providers.tsx          # Theme provider wrapper
├── config/
│   ├── site.ts                # Site metadata & navigation links
│   └── portfolio.ts           # Centralized student profile, education, stack, projects
├── features/
│   └── portfolio/
│       └── components/        # ProfileHeader, FlipSentences, Overview, TechStack, Education, Projects
├── hooks/
│   └── soundcn/               # useSound, useClickSound hooks
├── lib/
│   ├── fonts.ts               # Google fonts & typography variables
│   ├── soundcn/               # Native Web Audio sound synthesis engine
│   └── utils.ts               # Class merging (cn) & URL utilities
└── styles/
    └── globals.css            # Tailwind v4 theme, OKLCH tokens, CAD utilities
```

---

## Attribution & License

- Code structure inspired by [chanhdai.com](https://chanhdai.com) under the MIT License.
- In accordance with the reference repository's [TRADEMARK.md](https://github.com/ncdai/chanhdai.com/blob/main/TRADEMARK.md), all personal branding, monograms, logos, and likenesses have been completely replaced with original assets and genuine academic data for **Abhiram A S**.
- UI click sounds are CC0 audio assets by Kenney.
