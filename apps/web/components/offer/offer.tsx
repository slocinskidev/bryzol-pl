import type { OfferCategory, OfferItem, OfferSection } from "@/lib/offer";

function formatPrice(price: number): string {
	return new Intl.NumberFormat("pl-PL", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
}

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
	return (
		<section id={section.slug} className="scroll-mt-24">
			<header className="mb-8">
				<h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
					{section.title}
				</h2>
				{section.description ? (
					<p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
						{section.description}
					</p>
				) : null}
				{section.meta?.priceNote ? (
					<p className="mt-2 text-sm font-medium text-accent">
						{section.meta.priceNote}
					</p>
				) : null}
				<div className="mt-4 h-0.5 w-12 rounded-full bg-accent" aria-hidden />
			</header>
			<div className="space-y-12">{children}</div>
		</section>
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
			<h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
				{category.title}
			</h3>
			{category.note ? (
				<p className="mt-1 text-sm text-muted-foreground">{category.note}</p>
			) : null}
			<ul className="mt-4 space-y-2">{children}</ul>
		</div>
	);
}

function ItemContent({ item }: { item: OfferItem }) {
	return (
		<li className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 py-2 last:border-0">
			<div className="min-w-0 flex-1">
				<span className="font-medium text-gray-900 dark:text-white">
					{item.name}
				</span>
				{item.description ? (
					<p className="mt-0.5 text-sm text-muted-foreground">
						{item.description}
					</p>
				) : null}
			</div>
			{item.price != null ? (
				<span className="shrink-0 tabular-nums text-gray-700 dark:text-gray-200">
					{formatPrice(item.price)}
					{item.unit ? ` zł/${item.unit}` : " zł"}
				</span>
			) : null}
		</li>
	);
}

export const Offer = {
	Root: OfferRoot,
	Section: SectionContent,
	Category: CategoryContent,
	Item: ItemContent,
};
