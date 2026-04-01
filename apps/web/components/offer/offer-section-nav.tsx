'use client';

import { cn } from '@workspace/ui/lib/utils';
import type { MouseEvent } from 'react';
import type { OfferSection } from '@/lib/offer';
import { useOfferSectionInView } from './hooks/use-offer-section-in-view';

const SECTION_LABELS: Record<string, string> = {
	'pelna-oferta': 'Pełna oferta',
	'blachy-biesiadne-koryta': 'Blachy i koryta',
	'przykladowe-zestawy': 'Zestawy',
	'dania-na-dowoz': 'Dania na dowóz',
	'domowe-obiady': 'Domowe obiady',
};

function getLabel(section: OfferSection): string {
	return SECTION_LABELS[section.slug] ?? section.title;
}

export function OfferSectionNav({ sections }: { sections: OfferSection[] }) {
	const slugs = sections.map((s) => s.slug);
	const activeSlug = useOfferSectionInView(slugs);

	return (
		<nav
			aria-label="Nawigacja po sekcjach oferty"
			className="sticky top-[5.5rem] z-40 -mx-6 border-border border-b bg-background/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80"
		>
			<ul className="scrollbar-none flex gap-1 overflow-x-auto py-1 md:flex-wrap md:justify-center md:gap-2">
				{slugs.map((slug) => {
					const section = sections.find((s) => s.slug === slug);
					return section ? (
						<OfferSectionNavItem
							key={slug}
							slug={slug}
							label={getLabel(section)}
							isActive={activeSlug === slug}
						/>
					) : null;
				})}
			</ul>
		</nav>
	);
}

function OfferSectionNavItem({
	slug,
	label,
	isActive,
}: {
	slug: string;
	label: string;
	isActive: boolean;
}) {
	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const el = document.getElementById(slug);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<li>
			<a
				href={`#${slug}`}
				onClick={handleClick}
				className={cn(
					'inline-block whitespace-nowrap rounded-lg px-3 py-2 font-medium text-sm transition-colors',
					'focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2',
					isActive
						? 'bg-accent text-accent-foreground'
						: 'text-muted hover:bg-default hover:text-foreground',
				)}
			>
				{label}
			</a>
		</li>
	);
}
