import type { OfferCategory } from '@/lib/offer';

/** Filters items by name/description; drops empty categories. */
export function filterOfferCategories(
	categories: OfferCategory[],
	query: string,
): OfferCategory[] {
	const q = query.trim().toLowerCase();
	if (!q) {
		return categories;
	}

	return categories
		.map((category) => ({
			...category,
			items: category.items.filter(
				(item) =>
					item.name.toLowerCase().includes(q) ||
					(item.description?.toLowerCase().includes(q) ?? false) ||
					(item.includedDishes?.some((d) => d.toLowerCase().includes(q)) ??
						false),
			),
		}))
		.filter((category) => category.items.length > 0);
}
