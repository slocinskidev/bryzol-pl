import type { OfferCategory } from '@/lib/offer';
import { OfferCategoryBlock } from './offer-category-block';

export function offerCategorySectionId(categoryId: string): string {
	return `offer-category-${categoryId}`;
}

export function OfferCategoryJumpNav({
	categories,
}: {
	categories: OfferCategory[];
}) {
	return (
		<nav
			className="mb-8 flex max-w-full flex-wrap gap-2"
			aria-label="Skok do kategorii oferty"
		>
			{categories.map((category) => (
				<a
					key={category.id}
					href={`#${offerCategorySectionId(category.id)}`}
					className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface-secondary px-3 py-2 font-medium text-foreground/90 text-xs tracking-tight hover:bg-surface-tertiary hover:text-foreground focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-focus/35 motion-safe:transition-colors sm:min-h-10 sm:text-sm"
				>
					{category.title}
				</a>
			))}
		</nav>
	);
}

export function OfferCategoryStack({
	categories,
}: {
	categories: OfferCategory[];
}) {
	if (categories.length === 0) {
		return (
			<p className="text-muted text-sm">W tej chwili brak pozycji.</p>
		);
	}

	return (
		<>
			<OfferCategoryJumpNav categories={categories} />
			<div className="space-y-14 md:space-y-16">
				{categories.map((category) => (
					<section
						key={category.id}
						id={offerCategorySectionId(category.id)}
						className="scroll-mt-28 border-accent/35 border-l-[3px] pl-5 md:pl-6"
					>
						<OfferCategoryBlock category={category} />
					</section>
				))}
			</div>
		</>
	);
}
