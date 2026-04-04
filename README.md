# bryzol-pl

Monorepo for Bryzol Catering (Next.js app + shared UI package).

## Stack

- **Framework:** Next.js (App Router)
- **UI:** [HeroUI v3](https://www.heroui.com/) (`@heroui/react`, `@heroui/styles`)
- **Styling:** Tailwind CSS v4, shared tokens in `packages/ui/src/styles/globals.css`
- **Package manager:** pnpm

## Scripts

```bash
pnpm dev          # Turbo dev (web + packages)
pnpm build        # Production build
pnpm check-types  # TypeScript
pnpm lint         # Biome
```

## Packages

- `apps/web` — marketing site
- `packages/ui` — `@workspace/ui`: global CSS, small primitives (e.g. `ThemeToggle`, re-exports of `Drawer`)

Link buttons that need Next.js routing use `apps/web/components/button-link.tsx` (`ButtonLink` / `ButtonAnchor`) so HeroUI `buttonVariants` apply without `Button` + `render` typing issues.

## Theme

Customize colors in `packages/ui/src/styles/globals.css` (HeroUI CSS variables). `apps/web/components/layout/providers.tsx` syncs `data-theme` with `next-themes` for HeroUI selectors.
