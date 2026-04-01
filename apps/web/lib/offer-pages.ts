/**
 * Trzy strony oferty — każda grupuje jedną lub więcej sekcji z `data/offer.json`.
 * **Chip** lepiej niż Badge nadaje się do etykiet/kategorii (nie liczników).
 */
export const OFFER_PAGES = [
	{
		slug: 'cateringowa',
		title: 'Oferta cateringowa',
		description:
			'Catering na przyjęcia i firmy: dania na ciepło, blachy biesiadne i przykładowe zestawy. Żory i okolice.',
		sectionSlugs: [
			'pelna-oferta',
			'blachy-biesiadne-koryta',
			'przykladowe-zestawy',
		] as const,
		navId: 'oferta-catering',
	},
	{
		slug: 'dania-na-dowoz',
		title: 'Dania na dowóz',
		description: 'Dania i zestawy pod drzwi — sprawdź aktualną listę i ceny.',
		sectionSlugs: ['dania-na-dowoz'] as const,
		navId: 'oferta-dowoz',
	},
	{
		slug: 'domowe-obiady',
		title: 'Domowe obiady',
		description: 'Domowe obiady i dania dnia — menu tygodniowe, świeże porcje.',
		sectionSlugs: ['domowe-obiady'] as const,
		navId: 'oferta-obiady',
	},
] as const;

export type OfferPageSlug = (typeof OFFER_PAGES)[number]['slug'];

export function isOfferPageSlug(s: string): s is OfferPageSlug {
	return OFFER_PAGES.some((p) => p.slug === s);
}

export function getOfferPageConfig(slug: string) {
	return OFFER_PAGES.find((p) => p.slug === slug);
}
