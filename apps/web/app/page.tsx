import type { Metadata } from 'next';
import { AboutSection } from '@/components/landing-section/about';

export const metadata: Metadata = {
	title: 'Bryzol Catering | Domowe Obiady i Catering w Żorach',
	description:
		'Profesjonalny catering na imprezy, domowe obiady, dania na dowóz w Żorach. Smacznie, punktualnie, zawsze dopasowane.',
};

import { ContactSection } from '@/components/landing-section/contact-section';
import { Hero } from '@/components/landing-section/hero';
import { StatsSection } from '@/components/landing-section/stats-section';
import { OfferCards } from '@/components/offer/offer-cards';

export default function Page() {
	return (
		<div className="bg-background transition-colors duration-500">
			<Hero />
			<AboutSection />
			<StatsSection />
			<OfferCards />
			<ContactSection />
		</div>
	);
}
