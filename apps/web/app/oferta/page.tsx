import { Card } from '@heroui/react/card';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/page-header';
import { OFFER_PAGES } from '@/lib/offer-pages';

export const metadata = {
	title: 'Oferta | Bryzol Catering Żory',
	description:
		'Oferta cateringowa, dania na dowóz i domowe obiady. Żory i okolice.',
};

export default function OfertaHubPage() {
	return (
		<main className="min-h-screen bg-background pt-32 pb-24">
			<PageHeader
				variant="soft"
				title="Nasza oferta"
				description="Wybierz kategorię — catering na wydarzenia, dowóz pod dom lub domowe obiady."
			/>
			<div className="container mx-auto max-w-5xl px-6">
				<ul className="mt-14 grid gap-6 md:grid-cols-3">
					{OFFER_PAGES.map((page) => (
						<li key={page.slug}>
							<Link href={`/oferta/${page.slug}`} className="block h-full">
								<Card
									variant="secondary"
									className="h-full border-border/80 transition-colors hover:border-accent/40"
								>
									<Card.Header className="gap-2">
										<Card.Title className="font-display text-foreground text-xl">
											{page.title}
										</Card.Title>
										<Card.Description className="text-sm leading-relaxed">
											{page.description}
										</Card.Description>
									</Card.Header>
									<Card.Footer className="font-medium text-accent text-sm">
										Zobacz menu →
									</Card.Footer>
								</Card>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
