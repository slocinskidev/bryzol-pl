import { cache } from "react";

export type OfferItem = {
  id: string;
  name: string;
  price?: number;
  unit?: string;
  description?: string;
};

export type OfferCategory = {
  id: string;
  title: string;
  items: OfferItem[];
  note?: string;
};

export type OfferSection = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  categories: OfferCategory[];
  meta?: { validFrom?: string; validTo?: string; priceNote?: string };
};

export type OfferData = {
  sections: OfferSection[];
};

async function getOfferUncached(): Promise<OfferData> {
  const data = await import("@/data/offer.json");
  return data.default as OfferData;
}

export const getOffer = cache(getOfferUncached);

export async function getOfferSection(
  slug: string,
): Promise<OfferSection | null> {
  const { sections } = await getOffer();
  return sections.find((s) => s.slug === slug) ?? null;
}
