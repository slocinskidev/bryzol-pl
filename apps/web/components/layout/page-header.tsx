'use client';

import { cn } from '@workspace/ui/lib/utils';
import { motion } from 'motion/react';

const shellVariants = {
	band: 'border-border border-b bg-default/30 py-12 text-center',
	soft: 'border-border/80 border-b bg-gradient-to-b from-background to-accent/[0.03] py-12 text-center md:py-14 dark:to-accent/5',
} as const;

export type PageHeaderVariant = keyof typeof shellVariants | 'inline';

export type PageHeaderProps = {
	title: string;
	description?: string;
	eyebrow?: string;
	as?: 'h1' | 'h2';
	variant?: PageHeaderVariant;
	className?: string;
	innerClassName?: string;
};

function HeaderInner({
	title,
	description,
	eyebrow,
	as,
	innerClassName,
}: Pick<
	PageHeaderProps,
	'title' | 'description' | 'eyebrow' | 'as' | 'innerClassName'
>) {
	const Heading = as ?? 'h1';
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className={cn('mx-auto max-w-4xl px-6 text-center', innerClassName)}
		>
			{eyebrow ? (
				<p className="mb-3 font-semibold text-accent text-sm uppercase tracking-[0.2em]">
					{eyebrow}
				</p>
			) : null}
			<Heading
				className={cn(
					'mb-4 font-bold font-display text-4xl tracking-tight md:text-5xl',
					as === 'h1'
						? 'text-foreground'
						: 'text-gray-900 lg:text-6xl dark:text-white',
				)}
			>
				{title}
			</Heading>
			<div
				className="mx-auto h-1 w-24 rounded-full bg-accent"
				aria-hidden
			/>
			{description ? (
				<p className="mx-auto mt-4 max-w-2xl text-lg text-muted leading-relaxed">
					{description}
				</p>
			) : null}
		</motion.div>
	);
}

export function PageHeader({
	title,
	description,
	eyebrow,
	as = 'h1',
	variant = 'soft',
	className,
	innerClassName,
}: PageHeaderProps) {
	if (variant === 'inline') {
		return (
			<HeaderInner
				title={title}
				description={description}
				eyebrow={eyebrow}
				as={as}
				innerClassName={innerClassName}
			/>
		);
	}

	return (
		<div className={cn(shellVariants[variant], className)}>
			<HeaderInner
				title={title}
				description={description}
				eyebrow={eyebrow}
				as={as}
				innerClassName={innerClassName}
			/>
		</div>
	);
}
