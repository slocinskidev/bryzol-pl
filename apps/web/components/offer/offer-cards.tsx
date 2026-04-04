'use client';

import { Card } from '@heroui/react/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { OFFER_PAGES } from '@/lib/offer-pages';

export function OfferCards() {
	return (
		<section id="oferta" className="container mx-auto max-w-7xl px-6 py-20">
			<div className="mx-auto mb-10 max-w-3xl text-center">
				<h2 className="font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl">
					Oferta
				</h2>
				<p className="mt-4 text-base text-muted leading-relaxed md:text-lg">
					Wybierz interesujący Cię rodzaj oferty. Każda z nich ma własny zestaw opcji i cen.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{OFFER_PAGES.map((page) => (
					<Link
						key={page.slug}
						href={`/oferta/${page.slug}`}
						className="group focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-focus/25"
						aria-label={`Przejdź do oferty: ${page.title}`}
					>
						<Card
							variant="secondary"
							className="h-full border-border/80 p-0 shadow-sm transition-colors group-hover:border-accent/40"
						>
							<Card.Header className="p-6 md:p-6">
								<div className="min-w-0">
									<div className="flex items-center gap-3">
										<Card.Title className="font-display font-semibold text-2xl text-foreground">
											{page.title}
										</Card.Title>
										<span className="sr-only">Zobacz ofertę</span>
										<ArrowRight
											aria-hidden
											className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
										/>
									</div>

									<Card.Description className="mt-3 text-muted text-sm leading-relaxed md:text-base">
										{page.description}
									</Card.Description>
								</div>
							</Card.Header>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}

