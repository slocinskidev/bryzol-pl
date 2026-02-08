# Vercel React Best Practices (skill reference)

Install when possible:

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

Source: <https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices>

## Applied in this project

- **server-cache-react**: `getOffer` wrapped in `React.cache()` in `apps/web/lib/offer.ts` for per-request deduplication.
- **Server-side only**: Offer data is fetched in the Server Component (`app/oferta/page.tsx`) via `await getOffer()`; no Route Handler, no client fetch for initial data.
- **No barrel imports**: Offer types and getter are in a single module; UI imports from `@/lib/offer` and `@/components/offer/offer` directly.
- **Compound components**: Offer UI uses `Offer.Root`, `Offer.Section`, `Offer.Category`, `Offer.Item` (Vercel composition patterns).

## Rule categories (57 rules)

1. **async-** (CRITICAL): Eliminate waterfalls; parallelize with Promise.all.
2. **bundle-** (CRITICAL): Direct imports, next/dynamic, defer third-party.
3. **server-** (HIGH): React.cache, auth in server actions, minimal client payload.
4. **client-** (MEDIUM-HIGH): SWR dedup, passive listeners.
5. **rerender-** (MEDIUM): memo, dependencies, transitions.
6. **rendering-** (MEDIUM): content-visibility, conditional render.
7. **js-** (LOW-MEDIUM): Cache lookups, early exit.
8. **advanced-** (LOW): useLatest, init once.
