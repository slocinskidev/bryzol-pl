import { Phone, Mail } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { OfferRoot } from '@/components/offer/offer';
import { OfferSectionTabs } from '@/components/offer/offer-section-tabs';
import { ButtonAnchor } from '@/components/button-link';
import { getCateringowa } from '@/lib/offer';
import { contact } from '@/lib/contact';

export const metadata = {
	title: 'Oferta cateringowa | Bryzol Catering Żory',
	description:
		'Catering na przyjęcia i dla firm: dania na ciepło, blachy biesiadne i zestawy.',
};

export default async function CateringowaOfferPage() {
	const sections = await getCateringowa();

	return (
		<main className="min-h-screen bg-background pt-32 pb-20">
			<PageHeader
				variant="band"
				title="Oferta cateringowa"
				description="Catering na przyjęcia i dla firm: dania na ciepło, blachy biesiadne i zestawy."
			/>
			<OfferRoot>
				<OfferSectionTabs sections={sections} />

				<section className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
					<h3 className="font-display font-semibold text-foreground text-lg">
						Zamów catering
					</h3>
					<p className="mt-2 text-muted text-sm">
						Skontaktuj się z nami — przygotujemy propozycję menu i wycenę
						dopasowaną do Twojego wydarzenia.
					</p>
					<div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<ButtonAnchor
							href={`tel:${contact.phone.replace(/\s/g, '')}`}
							size="sm"
						>
							<Phone className="mr-2 h-4 w-4" />
							{contact.phone}
						</ButtonAnchor>
						<ButtonAnchor
							href={`mailto:${contact.email}`}
							size="sm"
							variant="secondary"
						>
							<Mail className="mr-2 h-4 w-4" />
							{contact.email}
						</ButtonAnchor>
					</div>
				</section>
			</OfferRoot>
		</main>
	);
}
