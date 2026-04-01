import { type ButtonVariants, buttonVariants } from '@heroui/react/button';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';
import type { ComponentProps } from 'react';

type VariantProps = Pick<
	ButtonVariants,
	'variant' | 'size' | 'fullWidth' | 'isIconOnly'
>;

export type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'className'> &
	VariantProps & {
		className?: string;
	};

/** Next.js `Link` with HeroUI button styles (no `Button`+`render` typing issues). */
export function ButtonLink({
	className,
	variant = 'primary',
	size = 'lg',
	fullWidth,
	isIconOnly,
	...props
}: ButtonLinkProps) {
	return (
		<Link
			{...props}
			className={cn(
				buttonVariants({ variant, size, fullWidth, isIconOnly }),
				className,
			)}
		/>
	);
}

type ButtonAnchorProps = VariantProps &
	Omit<ComponentProps<'a'>, 'className'> & {
		className?: string;
	};

/** Native `<a>` with HeroUI button styles (external URLs, `tel:`, `mailto:`). */
export function ButtonAnchor({
	className,
	variant = 'primary',
	size = 'lg',
	fullWidth,
	isIconOnly,
	...props
}: ButtonAnchorProps) {
	return (
		<a
			{...props}
			className={cn(
				buttonVariants({ variant, size, fullWidth, isIconOnly }),
				className,
			)}
		/>
	);
}
