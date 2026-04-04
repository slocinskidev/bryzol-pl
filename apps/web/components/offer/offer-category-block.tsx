import type { OfferCategory } from '@/lib/offer';
import { OfferItemClient } from './offer-item';
import { MultilineTextBlock } from './render-multiline';

export function OfferCategoryBlock({ category }: { category: OfferCategory }) {
	return (
		<div>
			<header className="space-y-2">
				<h3 className="font-display font-semibold text-foreground text-xl tracking-tight md:text-2xl">
					{category.title}
				</h3>
				<div className="h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
				{category.note ? (
					<p className="max-w-prose text-muted text-sm leading-relaxed md:text-[0.9375rem]">
						<MultilineTextBlock text={category.note} />
					</p>
				) : null}
			</header>
			<ul
				className="mt-6 space-y-0 md:mt-7"
				aria-label={`Pozycje: ${category.title}`}
			>
				{category.items.map((item) => (
					<OfferItemClient key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}
