'use client';

import { Label } from '@heroui/react/label';
import { SearchField } from '@heroui/react/search-field';
import { Spinner } from '@heroui/react/spinner';
import { cn } from '@workspace/ui/lib/utils';

type OfferMenuSearchProps = {
	value: string;
	onChange: (value: string) => void;
	className?: string;
	/** True while debounced search is catching up. */
	pending?: boolean;
};

export function OfferMenuSearch({
	value,
	onChange,
	className,
	pending = false,
}: OfferMenuSearchProps) {
	return (
		<div className={cn('flex w-full max-w-lg items-center gap-2', className)}>
			<SearchField
				aria-busy={pending}
				className="min-w-0 flex-1"
				fullWidth
				name="offer-menu-search"
				value={value}
				variant="secondary"
				onChange={onChange}
			>
				<Label className="sr-only">Szukaj w ofercie</Label>
				<SearchField.Group>
					<SearchField.SearchIcon />
					<SearchField.Input
						autoComplete="off"
						placeholder="Szukaj w ofercie…"
					/>
					<SearchField.ClearButton />
				</SearchField.Group>
			</SearchField>
			{pending ? (
				<Spinner
					aria-hidden
					className="shrink-0 text-muted motion-reduce:opacity-100"
					size="sm"
				/>
			) : null}
		</div>
	);
}
