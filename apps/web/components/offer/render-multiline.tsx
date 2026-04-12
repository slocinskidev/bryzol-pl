import type { ReactNode } from 'react';

type MultilineBlockProps = {
	text: string;
	/**
	 * Added for empty lines after trimming.
	 * Example: `block h-3` to create spacing inside `<p>` contents.
	 */
	emptyLineClassName?: string;
};

export function splitNonEmptyLines(text: string): string[] {
	return text
		.split(/\r?\n/)
		.map((l) => l.trim())
		.filter(Boolean);
}

/**
 * Renders `\n` as separate block lines (safe inside `<p>`: uses `<span>`).
 * Trims each line and ignores purely-empty lines except for spacing.
 */
export function MultilineTextBlock({
	text,
	emptyLineClassName = 'block h-3',
}: MultilineBlockProps): ReactNode {
	const parts = text.split(/\r?\n/);

	return (
		<>
			{parts.map((raw, idx) => {
				const trimmed = raw.trim();
				if (!trimmed) {
					return <span key={idx} className={emptyLineClassName} aria-hidden />;
				}

				return (
					<span key={idx} className="block">
						{trimmed}
					</span>
				);
			})}
		</>
	);
}
