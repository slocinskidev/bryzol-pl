import { cache } from 'react';

export type OfferItem = {
	id: string;
	name: string;
	price?: number;
	unit?: string;
	description?: string;
	includedDishes?: string[];
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
	/** Short label for section switchers (e.g. tabs). Falls back to `title`. */
	shortTitle?: string;
	description?: string;
	categories: OfferCategory[];
	meta?: { validFrom?: string; validTo?: string; priceNote?: string };
};

/** Tab / compact labels; CMS can set `shortTitle`. */
export function getOfferSectionTabLabel(section: OfferSection): string {
	return section.shortTitle ?? section.title;
}

export const getCateringowa = cache(async (): Promise<OfferSection[]> => {
	const data = await import('@/data/cateringowa.json');
	return (data.default as { sections: OfferSection[] }).sections;
});

export const getDaniaNaDowoz = cache(async (): Promise<OfferSection[]> => {
	const data = await import('@/data/dania-na-dowoz.json');
	return (data.default as { sections: OfferSection[] }).sections;
});

export const getKomunijna = cache(async (): Promise<OfferSection[]> => {
	const data = await import('@/data/komunijna.json');
	return (data.default as { sections: OfferSection[] }).sections;
});
