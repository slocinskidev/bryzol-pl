#!/usr/bin/env node
/**
 * One-off script to scrape offer content from bryzol.pl into offer.json.
 * Run: node scripts/scrape-offer.mjs
 * Output: apps/web/data/offer.json (overwrites; backup first if needed)
 *
 * URLs: oferta-bryzol-catering, blachy-biesiadne-koryta, przykladowe-zestawy,
 *       ciasto-ogniowe, domowe-obiady
 */

const BASE = "https://bryzol.pl";
const URLS = [
  `${BASE}/oferta-bryzol-catering/`,
  `${BASE}/blachy-biesiadne-koryta/`,
  `${BASE}/przykladowe-zestawy/`,
  `${BASE}/ciasto-ogniowe/`,
  `${BASE}/domowe-obiady/`,
];

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; BryzolScraper/1)" },
  });
  if (!res.ok) throw new Error(`Fetch failed ${url}: ${res.status}`);
  return res.text();
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parsePrice(text) {
  const m = text.match(/(\d+)[.,](\d{2})\s*zł/);
  return m ? Number(`${m[1]}.${m[2]}`) : undefined;
}

function extractSections(html, pageSlug) {
  const sections = [];
  const h4Regex = /<h4[^>]*>([\s\S]*?)<\/h4>/gi;
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
  let m;
  const titles = [];
  while ((m = h4Regex.exec(html)) !== null) {
    const raw = m[1].replace(/<[^>]+>/g, "").trim();
    if (raw && raw.length < 200) titles.push(raw);
  }
  const items = [];
  while ((m = liRegex.exec(html)) !== null) {
    const raw = m[1]
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (raw && raw.length > 2) items.push(raw);
  }
  if (titles.length || items.length) {
    const category = {
      id: pageSlug,
      title: pageSlug.replace(/-/g, " "),
      items: items.slice(0, 80).map((text, i) => {
        const price = parsePrice(text);
        const name = price
          ? text.replace(/\s*\d+[.,]\d{2}\s*zł.*$/i, "").trim()
          : text;
        return {
          id: `${pageSlug}-${i}`,
          name: name || text.slice(0, 80),
          ...(price && { price }),
        };
      }),
    };
    sections.push({
      id: pageSlug,
      slug: pageSlug,
      title: pageSlug.replace(/-/g, " "),
      categories: [category],
    });
  }
  return sections;
}

async function main() {
  const { writeFileSync, mkdirSync } = await import("fs");
  const { fileURLToPath } = await import("url");
  const { dirname, join } = await import("path");
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const outPath = join(__dirname, "..", "apps", "web", "data", "offer.json");

  const allSections = [];
  for (const url of URLS) {
    try {
      const html = await fetchHtml(url);
      const pageSlug =
        url
          .replace(BASE, "")
          .replace(/^\//, "")
          .replace(/\/$/, "")
          .replace(/\//g, "-") || "oferta";
      const sections = extractSections(html, pageSlug);
      allSections.push(...sections);
    } catch (e) {
      console.error(`Skip ${url}:`, e.message);
    }
  }

  const output = { sections: allSections };
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(output, null, 2), "utf8");
  console.log(
    `Wrote ${outPath} (${allSections.length} sections). Review and fix ids/slugs/units if needed.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
