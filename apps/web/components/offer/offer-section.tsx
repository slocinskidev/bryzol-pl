'use client';

import { Card } from '@heroui/react/card';
import { Separator } from '@heroui/react/separator';
import { motion, useReducedMotion } from 'motion/react';
import type { OfferSection } from '@/lib/offer';

export function OfferSectionWrapper({
	section,
	children,
}: {
	section: OfferSection;
	children: React.ReactNode;
}) {
	const reduceMotion = useReducedMotion();
	const visible = { opacity: 1, y: 0 };
	const hidden = { opacity: 0, y: 16 };

	return (
		<motion.section
			id={section.slug}
			className="scroll-mt-28"
			initial={reduceMotion ? visible : hidden}
			whileInView={visible}
			viewport={{ once: true, margin: '-40px 0px -40px 0px' }}
			transition={{ duration: 0.4 }}
		>
			<Card variant="default" className="gap-6 p-6 shadow-sm md:p-8 lg:p-10">
				<Card.Header className="mb-0 gap-0 pb-0">
					<Card.Title className="font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl">
						{section.title}
					</Card.Title>
					{section.description ? (
						<Card.Description className="mt-2 text-lg text-muted">
							{section.description}
						</Card.Description>
					) : null}
					{section.meta?.priceNote ? (
						<p className="mt-2 font-medium text-accent text-sm">
							{section.meta.priceNote}
						</p>
					) : null}
					<div className="mt-4 h-0.5 w-12 rounded-full bg-accent" aria-hidden />
				</Card.Header>
				<Separator className="bg-border" />
				<Card.Content>{children}</Card.Content>
			</Card>
		</motion.section>
	);
}
