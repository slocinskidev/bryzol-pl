"use client";

import { useState } from "react";
import type { OfferItem } from "@/lib/offer";

const DESCRIPTION_CLAMP_LENGTH = 120;

function formatPrice(price: number): string {
	return new Intl.NumberFormat("pl-PL", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
}

export function OfferItemClient({ item }: { item: OfferItem }) {
	const [expanded, setExpanded] = useState(false);
	const description = item.description ?? "";
	const isLong = description.length > DESCRIPTION_CLAMP_LENGTH;
	const showToggle = isLong;
	const clamped =
		showToggle && !expanded
			? `${description.slice(0, DESCRIPTION_CLAMP_LENGTH).trim()}…`
			: description;

	return (
		<li className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 py-3 last:border-0 transition-colors hover:bg-muted/30 -mx-2 px-2 rounded-lg">
			<div className="min-w-0 flex-1">
				<span className="font-medium text-foreground">{item.name}</span>
				{description ? (
					<p className="mt-0.5 text-sm text-muted-foreground">
						{clamped}
						{showToggle && (
							<button
								type="button"
								onClick={() => setExpanded((e) => !e)}
								className="ml-1 text-accent font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring rounded"
							>
								{expanded ? "Zwiń" : "Pokaż więcej"}
							</button>
						)}
					</p>
				) : null}
			</div>
			{item.price != null ? (
				<span className="shrink-0 tabular-nums text-sm font-medium rounded-md bg-muted px-2.5 py-1 text-foreground">
					{formatPrice(item.price)}
					{item.unit ? ` zł/${item.unit}` : " zł"}
				</span>
			) : null}
		</li>
	);
}
