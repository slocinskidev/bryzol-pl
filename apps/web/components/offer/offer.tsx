import type { OfferCategory, OfferItem, OfferSection } from "@/lib/offer";
import { OfferSectionWrapper } from "./offer-section";
import { OfferItemClient } from "./offer-item";

function OfferRoot({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto max-w-5xl px-6 py-12 lg:py-20">
			{children}
		</div>
	);
}

function SectionContent({
	section,
	children,
}: {
	section: OfferSection;
	children: React.ReactNode;
}) {
	const useGrid = section.categories.length > 1;
	return (
		<OfferSectionWrapper section={section}>
			<div
				className={
					useGrid
						? "grid gap-12 lg:grid-cols-2"
						: "space-y-12"
				}
			>
				{children}
			</div>
		</OfferSectionWrapper>
	);
}

function CategoryContent({
	category,
	children,
}: {
	category: OfferCategory;
	children: React.ReactNode;
}) {
	return (
		<div>
			<h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
				{category.title}
			</h3>
			{category.note ? (
				<p className="mt-1 text-sm text-muted-foreground">{category.note}</p>
			) : null}
			<ul className="mt-4 space-y-0">{children}</ul>
		</div>
	);
}

function ItemContent({ item }: { item: OfferItem }) {
	return <OfferItemClient item={item} />;
}

export const Offer = {
	Root: OfferRoot,
	Section: SectionContent,
	Category: CategoryContent,
	Item: ItemContent,
};
