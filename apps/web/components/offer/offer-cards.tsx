'use client';

import { Card } from '@heroui/react/card';
import { Chip } from '@heroui/react/chip';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { OFFER_PAGES } from '@/lib/offer-pages';

function FeaturedOfferCard({ page }: { page: (typeof OFFER_PAGES)[number] }) {
	const Icon = page.icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="mb-6 lg:mb-8"
		>
			<Link
				href={`/oferta/${page.slug}`}
				className="group block focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
				aria-label={`Przejdź do oferty: ${page.title}`}
			>
				<Card className="relative overflow-hidden border-accent/30 bg-gradient-to-br from-accent/5 via-surface to-accent/10 p-0 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:from-accent/10 dark:via-surface-secondary dark:to-accent/5">
					<div className="absolute top-0 right-0 left-0 h-1 bg-accent" />

					<Card.Header className="p-6 md:p-8">
						<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-start gap-4">
								<div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
									<Icon className="size-7 text-accent group-hover:text-accent-foreground" />
								</div>
								<div>
									<div className="flex items-center gap-2.5">
										<Card.Title className="font-display font-semibold text-2xl text-foreground md:text-3xl">
											{page.title}
										</Card.Title>
										<Chip size="sm" color="accent" variant="soft">
											Sezonowa
										</Chip>
									</div>
									<Card.Description className="mt-2 max-w-lg text-muted leading-relaxed md:text-base">
										{page.description}
									</Card.Description>
								</div>
							</div>
							<div className="flex items-center gap-2 font-medium text-accent text-sm sm:shrink-0">
								Sprawdź menu
								<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
							</div>
						</div>
					</Card.Header>
				</Card>
			</Link>
		</motion.div>
	);
}

function RegularOfferCard({
	page,
	index,
}: {
	page: (typeof OFFER_PAGES)[number];
	index: number;
}) {
	const Icon = page.icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
		>
			<Link
				href={`/oferta/${page.slug}`}
				className="group block h-full focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
				aria-label={`Przejdź do oferty: ${page.title}`}
			>
				<Card
					variant="secondary"
					className="relative h-full overflow-hidden border-border/80 p-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-lg"
				>
					<div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

					<Card.Header className="p-6 pb-4 md:p-8 md:pb-5">
						<div className="mb-4 flex size-14 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
							<Icon className="size-7 text-accent" />
						</div>

						<div className="flex items-center gap-3">
							<Card.Title className="font-display font-semibold text-2xl text-foreground">
								{page.title}
							</Card.Title>
							<ArrowRight
								aria-hidden
								className="size-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
							/>
						</div>

						<Card.Description className="mt-3 text-muted text-sm leading-relaxed md:text-base">
							{page.description}
						</Card.Description>
					</Card.Header>
				</Card>
			</Link>
		</motion.div>
	);
}

export function OfferCards() {
	const featured = OFFER_PAGES.filter((p) => 'temporary' in p && p.temporary);
	const regular = OFFER_PAGES.filter((p) => !('temporary' in p && p.temporary));

	return (
		<section
			id="oferta"
			className="container mx-auto max-w-7xl px-6 py-24 lg:py-32"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mx-auto mb-14 max-w-3xl text-center"
			>
				<p className="mb-3 font-semibold text-accent text-sm uppercase tracking-[0.2em]">
					Co oferujemy
				</p>
				<h2 className="font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
					Oferta
				</h2>
				<div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-accent" />
				<p className="mt-6 text-base text-muted leading-relaxed md:text-lg">
					Wybierz interesujący Cię rodzaj oferty. Każda z nich ma własny zestaw
					opcji i cen.
				</p>
			</motion.div>

			{featured.map((page) => (
				<FeaturedOfferCard key={page.slug} page={page} />
			))}

			<div className="grid gap-6 md:grid-cols-3 lg:gap-8">
				{regular.map((page, index) => (
					<RegularOfferCard key={page.slug} page={page} index={index} />
				))}
			</div>
		</section>
	);
}
