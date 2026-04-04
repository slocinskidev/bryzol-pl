'use client';

import { useDebouncedValue } from '@tanstack/react-pacer';
import { cn } from '@workspace/ui/lib/utils';
import { useMemo, useState } from 'react';
import type { OfferCategory } from '@/lib/offer';
import { filterOfferCategories } from '@/lib/offer-filter';
import { OfferCategoryStack } from './offer-category-stack';
import { OfferMenuSearch } from './offer-menu-search';

const MENU_INTRO =
	'Szukaj po nazwie dania albo składniku. Poniżej znajdziesz skróty do kategorii.';

/** Debounce filter work so list reflow doesn’t track every keystroke ([TanStack Pacer](https://tanstack.com/pacer/latest/docs/quick-start)). */
const SEARCH_DEBOUNCE_MS = 280;

/**
 * Search + stacked categories with in-page anchors (no nested tab rail).
 */
export function OfferCategoryTabs({
	categories,
}: {
	categories: OfferCategory[];
}) {
	const [query, setQuery] = useState('');
	const [debouncedQuery, debouncer] = useDebouncedValue(
		query,
		{ wait: SEARCH_DEBOUNCE_MS },
		(state) => ({ isPending: state.isPending }),
	);

	const filtered = useMemo(
		() => filterOfferCategories(categories, debouncedQuery),
		[categories, debouncedQuery],
	);

	const isPending = debouncer.state.isPending;
	const hasNoMatches =
		categories.length > 0 &&
		filtered.length === 0 &&
		debouncedQuery.trim().length > 0;

	if (!categories.length) {
		return null;
	}

	return (
		<div className="space-y-4">
			<p className="max-w-prose text-muted text-sm leading-relaxed">
				{MENU_INTRO}
			</p>
			<OfferMenuSearch value={query} onChange={setQuery} pending={isPending} />

			{/*
			  Stable min-height for the results region so switching between
			  full menu, few hits, and empty state doesn’t jump the page as much.
			*/}
			<div className="min-h-[min(50vh,28rem)] scroll-mt-4 rounded-lg border border-border/30 bg-surface-secondary/15 p-4 md:p-5">
				<div
					className={cn(
						isPending &&
							'opacity-70 motion-safe:transition-opacity motion-safe:duration-200',
					)}
				>
					{hasNoMatches ? (
						<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
							<p className="text-muted text-sm leading-relaxed">
								Nie znaleźliśmy pasujących pozycji dla „{debouncedQuery.trim()}”.
								Spróbuj krótszego hasła albo innego słowa.
							</p>
							<button
								type="button"
								onClick={() => setQuery('')}
								className="inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center self-start rounded-md border border-border bg-default px-3 py-2 font-medium text-foreground text-sm hover:bg-default/80 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-focus/25 motion-safe:transition-colors"
							>
								Wyczyść wyszukiwanie
							</button>
						</div>
					) : (
						<OfferCategoryStack categories={filtered} />
					)}
				</div>
			</div>
		</div>
	);
}
