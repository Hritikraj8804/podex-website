# Podex

> Kubernetes, without the complexity.

Podex is the desktop browser for Kubernetes. Explore clusters, manage pods, stream logs, and deploy applications with a visual interface. Think Docker Desktop, but for Kubernetes.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes (dark/light mode)
- **Testing:** Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/podex/podex-website.git
cd podex-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar, Footer, ThemeProvider)
│   ├── page.tsx                  # Home page
│   ├── not-found.tsx             # Custom 404 page
│   ├── error.tsx                 # Error boundary
│   ├── loading.tsx               # Loading state
│   ├── globals.css               # Global styles + Tailwind config
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt generation
│   ├── features/
│   │   └── page.tsx              # Features page
│   ├── download/
│   │   └── page.tsx              # Download page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── docs/
│   │   ├── page.tsx              # Documentation index
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic doc pages
│   └── blog/
│       ├── page.tsx              # Blog listing
│       ├── blog-list.tsx         # Client-side blog grid
│       └── [slug]/
│           └── page.tsx          # Dynamic blog posts
├── components/
│   ├── ui/                       # Reusable UI primitives
│   │   ├── button.tsx            # Button component
│   │   ├── card.tsx              # Card component
│   │   ├── badge.tsx             # Badge component
│   │   ├── accordion.tsx         # Accordion component
│   │   ├── code-block.tsx        # Code block with syntax display
│   │   ├── theme-toggle.tsx      # Dark/light mode toggle
│   │   └── animated-section.tsx  # Scroll-triggered animations
│   ├── layout/                   # Layout components
│   │   ├── navbar.tsx            # Navigation bar
│   │   ├── footer.tsx            # Site footer
│   │   └── theme-provider.tsx    # Theme context provider
│   ├── home/                     # Home page sections
│   │   ├── hero.tsx              # Hero section
│   │   ├── features.tsx          # Features grid
│   │   ├── how-it-works.tsx      # How it works steps
│   │   ├── screenshots.tsx       # Tabbed app mockups
│   │   ├── testimonials.tsx      # Testimonial cards
│   │   ├── pricing.tsx           # Pricing tiers
│   │   ├── faq.tsx               # FAQ accordion
│   │   └── cta.tsx               # Call to action
│   ├── illustrations/            # SVG illustrations
│   │   ├── animated-background.tsx  # Canvas particle animation
│   │   ├── cluster-diagram.tsx      # K8s cluster diagram
│   │   └── app-mockups.tsx          # UI mockup components
│   └── command-palette.tsx       # Cmd+K command palette
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Responsive breakpoint hook
│   └── use-keyboard-shortcut.ts  # Keyboard shortcut hook
└── lib/                          # Utilities and data
    ├── utils.ts                  # cn() utility function
    └── content-data.ts           # Blog posts + docs content
tests/                            # Test files
```

## Features

### Pages

- **Home** - Hero, features, how it works, screenshots, testimonials, pricing, FAQ, CTA
- **Features** - Detailed feature grid across 4 categories (18 features)
- **Download** - Platform cards, system requirements, release notes, checksums
- **Documentation** - Sidebar navigation, 8 docs across 3 categories
- **Blog** - 5 articles with author cards, related posts
- **About** - Mission, vision, story, roadmap, team

### Components

- Animated gradient backgrounds with canvas particles
- Scroll-triggered fade/slide animations via Framer Motion
- Dark/light theme toggle
- Command palette (Cmd+K / Ctrl+K)
- Custom Kubernetes cluster diagram (SVG)
- App UI mockups (Pods, Logs, Deployments)
- FAQ accordion with smooth transitions
- Pricing toggle (monthly/yearly)

### Technical

- Server-side rendering with React Server Components
- Static site generation for docs and blog
- Dynamic sitemap and robots.txt
- Open Graph / Twitter Card metadata
- Responsive design (mobile-first)
- Custom 404 page
- Error boundary with reset
- Loading states
- Keyboard navigation support

## Design System

### Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | `#6366f1` | `#818cf8` | Buttons, links, accents |
| Accent | `#a855f7` | `#c084fc` | Highlights, badges |
| Emerald | `#10b981` | `#34d399` | Success states, status |
| Gradient | Blue → Purple → Cyan | Same (brighter) | Hero backgrounds, CTAs |

### Typography

- **Sans:** Geist (system-ui fallback)
- **Mono:** Geist Mono (monospace)

## Deployment

### Vercel (Recommended)

```bash
npx vercel
```

### Docker

```bash
docker build -t podex-website .
docker run -p 3000:3000 podex-website
```

### Static Export

```bash
npm run build
# Output in .next/
```

## Roadmap

- [ ] Interactive Kubernetes cluster visualization
- [ ] Animated terminal simulator
- [ ] Live search across all content
- [ ] Theme customization system
- [ ] AI chat placeholder
- [ ] Interactive onboarding walkthrough
- [ ] PWA support
- [ ] Multi-language support

## License

MIT License. See [LICENSE](LICENSE) for details.
