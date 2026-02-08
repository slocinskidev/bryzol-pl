# Scrape Offer from bryzol.pl, Offers Page, and CMS-Ready Data Layer

## Data sources (old site) — 5 URLs

| URL | Content |
|-----|--------|
| [oferta-bryzol-catering](https://bryzol.pl/oferta-bryzol-catering/) | Full catering: Dania ciepłe, Ryby, Pieczenie, Zapiekanki, Wegetariańskie, Zupy, Przekąski zimne, Sałatki, Dodatki (items with price/unit) |
| [blachy-biesiadne-koryta](https://bryzol.pl/blachy-biesiadne-koryta/) | Blachy: Wiosenna, Letnia, Jesienna, Zimowa, Śląska, Mięsna, Keto, Wegetariańska (name, price, description/list of dishes) |
| [przykladowe-zestawy](https://bryzol.pl/przykladowe-zestawy/) | Example sets: Zestaw dla 10 osób, Przekąski dla 10 osób |
| [ciasto-ogniowe](https://bryzol.pl/ciasto-ogniowe/) | Dania na dowóz: Ciasto ogniowe (variants), Sosy, Pierogi, Sałatki, Śniadania, Dania główne |
| [domowe-obiady](https://bryzol.pl/domowe-obiady/) | Weekly lunch: dania dnia (soup + zestaw 1/2 per weekday), price 33 zł, pickup/delivery info |

Optional (seasonal): [oferta-wielkanocna-2](https://bryzol.pl/oferta-wielkanocna-2/) — can be a separate section or merged later.

---

## CMS-ready data contract

**Goal:** Use a single data shape that (1) static JSON can satisfy now, and (2) a future headless CMS API can return later (e.g. Strapi, Contentful, Payload). The UI must not depend on where the data comes from.

**Approach:**

- **Data access layer:** One module (e.g. `apps/web/lib/offer.ts`) that exports `getOffer()` (and optionally `getOfferSection(slug)`). Inside:
  - **Now:** Read from `apps/web/data/offer.json` (or fetch from `/api/offer` that serves that file).
  - **Later:** Replace implementation with `fetch(process.env.NEXT_PUBLIC_CMS_API_URL + '/offer')` (or use CMS SDK). Same return type.
- **JSON shape = API shape:** Design the static JSON so it matches what you’d expect from a CMS: stable `id`, optional `slug` for routing, same nesting (sections → categories → items). Then swapping to CMS is just changing the fetcher, not the UI types.

**Suggested TypeScript contract (CMS-friendly):**

```ts
// apps/web/lib/offer.ts or types/offer.ts

export type OfferItem = {
  id: string;
  name: string;
  price?: number;
  unit?: string;       // "szt" | "porcja" | "kg" | "l" | "L" etc.
  description?: string;
};

export type OfferCategory = {
  id: string;
  title: string;
  items: OfferItem[];
  note?: string;      // e.g. "Minimalne zamówienie 5szt./porcji"
};

export type OfferSection = {
  id: string;
  slug: string;        // for URLs: /oferta#pelna-oferta, /oferta/blachy
  title: string;
  description?: string;
  categories: OfferCategory[];
  meta?: { validFrom?: string; validTo?: string; priceNote?: string };
};

export type OfferData = {
  sections: OfferSection[];
  // optional: updatedAt for cache invalidation when using CMS
};

export async function getOffer(): Promise<OfferData> {
  // Now: return (await import('@/data/offer.json')).default;
  // Later: const res = await fetch(CMS_URL + '/offer'); return res.json();
}
```

- Use **string ids** (e.g. `"zupy"`, `"dania-cieple"`) so a CMS can generate or manage them.
- Optional: add `slug` per section/category for deep links and future `/oferta/[slug]` pages.
- Keep **price as number** in JSON; format (e.g. "19,00 zł") only in the UI.

---

## Next.js and React (Vercel) practices

Apply [Next.js App Router data-fetching patterns](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns) and the [Vercel React composition patterns](file:///Users/erq/.claude/skills/vercel-composition-patterns/SKILL.md) skill so the offer feature stays scalable and maintainable.

### Data fetching (Next.js)

- **Server Components only for offer data:** Call `getOffer()` directly in the offers page (or layout). Do not add a Route Handler that just reads JSON and returns it — that adds an extra network hop; fetch where the data is needed ([Next.js docs](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns)).
- **Optional deduplication:** Wrap the fetcher in `React.cache(getOffer)` so multiple components (e.g. page + layout or future sections) that call `getOffer()` in the same request share one result.
- **No client fetch for initial offer:** Prefer async Server Component that `await getOffer()` and passes data down. If a client subtree needs the same data later, pass it as props or use a Server Component child; avoid duplicate client-side fetch for the same payload.
- **Streaming (optional):** If part of the page is slow (e.g. future CMS), wrap that part in `<Suspense>` and pass an unawaited promise to a Client Component that uses `use(promise)` (React 19) so the rest of the page can stream.

### Component architecture (Vercel composition patterns)

- **Compound components for the offer UI:** Structure the offers page as a small compound component set (e.g. `Offer.Root`, `Offer.Section`, `Offer.Category`, `Offer.Item`) so the page composes pieces explicitly. If there is shared UI state (e.g. expanded section), use a context provider; subcomponents read via context, not props ([architecture-compound-components](file:///Users/erq/.claude/skills/vercel-composition-patterns/rules/architecture-compound-components.md)).
- **Avoid boolean props:** Do not add flags like `isCompact`, `showDescription`, `isBlacha` to one big component. Use composition: e.g. `Offer.Section` vs `Offer.SectionPackage` (for blachy/zestawy with description list), or different children composition ([avoid-boolean-props](file:///Users/erq/.claude/skills/vercel-composition-patterns/rules/architecture-avoid-boolean-props.md)).
- **Explicit variants over modes:** If the same list needs different layouts (e.g. grid vs accordion), create explicit components (`OfferSectionGrid`, `OfferSectionAccordion`) or compose with different children rather than a single component with `layout="grid" | "accordion"`.
- **Children over render props:** Prefer `<Offer.Section>{children}</Offer.Section>` over `renderSection={...}` or `renderItem={...}` ([patterns-children-over-render-props](file:///Users/erq/.claude/skills/vercel-composition-patterns/rules/patterns-children-over-render-props.md)).
- **React 19:** Use `use(Context)` instead of `useContext` where context is used; avoid `forwardRef` — use ref as a normal prop ([react19-no-forwardref](file:///Users/erq/.claude/skills/vercel-composition-patterns/rules/react19-no-forwardref.md)). The repo already uses React 19.

### Summary

- Page: async Server Component; `const data = await getOffer()` (or `cache(getOffer)()`).
- UI: compound `Offer.*` components; no boolean prop proliferation; compose with children; React 19 `use()` for any context.

---

## Step 1: Scrape all 5 URLs into one JSON

- **Script:** One-off script (e.g. `scripts/scrape-offer.mjs` or `apps/web/scripts/scrape-offer.mjs`) that fetches the 5 URLs, parses HTML (e.g. `node-html-parser` or `cheerio`), maps headings → categories, list items → items (name, price, unit), and outputs one JSON file.
- **Output:** `apps/web/data/offer.json` (or `public/api/offer.json` if you prefer to serve it via a route). Structure must match `OfferData` above.
- **Blachy / zestawy:** These are “package” sections: each blacha has a name, total price, and a list of dishes (description). Model as a category with one “item” per blacha, e.g. `{ id, name, price, description: "Udko b/k ...\nKotleciki ..." }` or a structured `includedDishes: string[]`.
- **Domowe obiady:** Either one section with a single category “Dania dnia” whose items are the weekly rows (e.g. Poniedziałek: soup + zestawy), or a dedicated shape like `weeklyMenu: { weekRange, days: { [day]: { soup, set1, set2 } } }` and keep it in the same JSON under a section id `weekly-lunch`. UI can render it differently; important is that the contract is consistent so a CMS could later expose the same structure.

No change to the app in this step — only script + JSON.

---

## Step 2: Data access layer and types

- Add **types** (e.g. in `apps/web/lib/offer.ts` or `apps/web/types/offer.ts`) for `OfferData`, `OfferSection`, `OfferCategory`, `OfferItem` as above.
- Add **getOffer()** (and optionally `getOfferSection(slug)`) that currently returns data from the static JSON. No CMS env yet; just a function so the UI never imports the JSON directly.
- **Next.js:** Optionally wrap in `React.cache(getOffer)` so multiple server calls in one request are deduplicated.
- Ensure `offer.json` matches these types (ids/slugs present so future CMS can mirror them).

---

## Step 3: Offers page and nav

- **Route:** e.g. `apps/web/app/oferta/page.tsx`. Optionally `app/oferta/[slug]/page.tsx` later for one section per page.
- **Data:** Page is an **async Server Component** that calls `await getOffer()` (no Route Handler). No direct import of `offer.json` in components.
- **UI (Vercel composition):** Build the list with compound components, e.g. `Offer.Root` → `Offer.Section` → `Offer.Category` → `Offer.Item`. Use explicit variants for “package” sections (blachy, zestawy) if layout differs (e.g. `Offer.SectionPackage` with description list). No boolean props; compose with children. Simple first version; design polish later.
- **Nav:** Add “Oferta” with `href: "/oferta"` in [constants.ts](apps/web/components/layout/constants.ts). Point “Zobacz pełne menu” (or “Zobacz ofertę”) to `/oferta`.

---

## Step 4: Future CMS swap

- Add env e.g. `NEXT_PUBLIC_CMS_OFFER_URL` (or `NEXT_PUBLIC_CMS_API_URL` + path).
- In `getOffer()`: if env is set, `fetch(CMS_URL)` and return `res.json()`; else keep reading static JSON. Same `OfferData` type.
- CMS content types: e.g. **OfferSection** (title, slug, description, categories relation), **OfferCategory** (title, items relation), **OfferItem** (name, price, unit, description). Populate via migration/seed from the same JSON so ids/slugs match.

Design (catering vs restaurant menu trends, frontend-design skill) stays a separate follow-up.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Scrape 5 URLs into one `offer.json` with CMS-friendly shape (id, slug, sections → categories → items). |
| 2 | Add types and `getOffer()` in `lib/offer.ts` (optional `React.cache`); UI consumes only this API. |
| 3 | Add async `app/oferta/page.tsx` that `await getOffer()` and renders with compound `Offer.*` components (Vercel composition patterns); add “Oferta” to nav and link “Zobacz pełne menu” to `/oferta`. |
| 4 | Later: add CMS env and branch in `getOffer()`; model same structure in headless CMS. |
