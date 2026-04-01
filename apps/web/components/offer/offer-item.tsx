'use client';

import { Chip } from '@heroui/react/chip';
import { useState } from 'react';
import type { OfferItem } from '@/lib/offer';

const DESCRIPTION_CLAMP_LENGTH = 120;

function formatPrice(price: number): string {
	return new Intl.NumberFormat('pl-PL', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
}

export function OfferItemClient({ item }: { item: OfferItem }) {
	const [expanded, setExpanded] = useState(false);
	const description = item.description ?? '';
	const isLong = description.length > DESCRIPTION_CLAMP_LENGTH;
	const showToggle = isLong;
	const clamped =
		showToggle && !expanded
			? `${description.slice(0, DESCRIPTION_CLAMP_LENGTH).trim()}…`
			: description;

	return (
		<li className="-mx-2 flex flex-wrap items-baseline justify-between gap-2 rounded-lg border-border/60 border-b px-2 py-3 transition-colors last:border-0 hover:bg-default/30">
			<div className="min-w-0 flex-1">
				<span className="font-medium text-foreground">{item.name}</span>
				{description ? (
					<p className="mt-0.5 text-muted text-sm">
						{clamped}
						{showToggle && (
							<button
								type="button"
								onClick={() => setExpanded((e) => !e)}
								className="ml-1 rounded font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-1"
							>
								{expanded ? 'Zwiń' : 'Pokaż więcej'}
							</button>
						)}
					</p>
				) : null}
			</div>
			{item.price != null ? (
				<Chip size="sm" variant="soft" className="shrink-0 tabular-nums">
					{formatPrice(item.price)}
					{item.unit ? ` zł/${item.unit}` : ' zł'}
				</Chip>
			) : null}
		</li>
	);
}
