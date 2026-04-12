import { AboutValues } from '@/components/landing-section/about';
import { ContactSection } from '@/components/landing-section/contact-section';
import { Hero } from '@/components/landing-section/hero';
import { StatsSection } from '@/components/landing-section/stats-section';
import { OfferCards } from '@/components/offer/offer-cards';

export default function Page() {
	return (
		<div className="bg-background transition-colors duration-500">
			<Hero />
			<AboutValues />
			<StatsSection />
			<OfferCards />
			<ContactSection />
		</div>
	);
}
