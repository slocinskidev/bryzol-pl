import { Chip } from '@heroui/react/chip';
import type { OfferItem } from '@/lib/offer';
import { splitNonEmptyLines } from './render-multiline';

function formatPrice(price: number): string {
	return new Intl.NumberFormat('pl-PL', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
}

export function OfferItemClient({ item }: { item: OfferItem }) {
	const description = item.description ?? '';
	const hasNewLines = description.includes('\n') || description.includes('\r');

	const descriptionLines = hasNewLines ? splitNonEmptyLines(description) : [];

	const renderDescriptionRow = (line: string) => {
		// Friendly formatting for lines like: "Zupa: Gulaszowa."
		const match = /^([^:]+):\s*(.*)$/.exec(line);
		if (!match) {
			return <div>{line}</div>;
		}
		const [, label, value] = match;
		return (
			<div>
				<span className="font-medium text-foreground/90">{label}:</span> {value}
			</div>
		);
	};

	return (
		<li className="-mx-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-md border-border/50 border-b px-2 py-3.5 last:border-0 hover:bg-default/25 motion-safe:transition-colors sm:py-3">
			<div className="min-w-0 flex-1">
				<div className="font-medium text-foreground">{item.name}</div>
				{description ? (
					hasNewLines ? (
						<div className="mt-1 text-muted text-sm leading-relaxed md:text-base">
							{descriptionLines.map((line, idx) => (
								<div key={`${line}-${idx}`}>{renderDescriptionRow(line)}</div>
							))}
						</div>
					) : (
						<p className="mt-1 text-muted text-sm leading-relaxed md:text-base">
							{description}
						</p>
					)
				) : null}
				{item.includedDishes?.length ? (
					<ul className="mt-1.5 list-inside list-disc text-muted text-sm leading-relaxed md:text-base">
						{item.includedDishes.map((dish, idx) => (
							<li key={`${dish}-${idx}`}>{dish}</li>
						))}
					</ul>
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
