import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { ButtonAnchor } from '@/components/button-link';
import { PageHeader } from '@/components/layout/page-header';
import { OfferRoot } from '@/components/offer/offer';
import { OfferSectionTabs } from '@/components/offer/offer-section-tabs';
import { contact } from '@/lib/contact';
import { getDaniaNaDowoz } from '@/lib/offer';

export const metadata = {
	title: 'Dania na dowóz | Bryzol Catering Żory',
	description:
		'Dania na dowóz pod wskazany adres: śniadania, ciasto ogniowe, pierogi, sałatki i dania główne.',
};

export default async function DaniaNaDowozOfferPage() {
	const sections = await getDaniaNaDowoz();

	return (
		<main className="min-h-screen bg-background pt-32 pb-20">
			<PageHeader
				variant="band"
				title="Dania na dowóz"
				description="Dania na dowóz pod wskazany adres: śniadania, ciasto ogniowe, pierogi, sałatki i dania główne."
			/>
			<OfferRoot>
				<section
					className="rounded-xl border border-border/70 bg-default/30 p-4 md:p-5"
					aria-label="Informacje o zamawianiu"
				>
					<p className="mb-3 font-medium text-foreground">Jak zamówić</p>
					<div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
						<div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-3">
							<Phone className="mt-0.5 size-5 shrink-0 text-accent" />
							<div>
								<p className="font-medium text-foreground text-sm">
									Zadzwoń lub napisz
								</p>
								<p className="mt-0.5 text-muted text-xs">
									Podaj dania, adres dostawy i godzinę.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-3">
							<MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
							<div>
								<p className="font-medium text-foreground text-sm">
									Dowozimy na terenie Żor
								</p>
								<p className="mt-0.5 text-muted text-xs">
									Darmowa dostawa w Żorach. Dla innych miejscowości koszt
									ustalamy indywidualnie.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-3">
							<Clock className="mt-0.5 size-5 shrink-0 text-accent" />
							<div>
								<p className="font-medium text-foreground text-sm">
									Śniadania zamawiaj do 12:00
								</p>
								<p className="mt-0.5 text-muted text-xs">
									Pozostałe dania dostępne przez cały dzień.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-3 flex flex-wrap gap-2">
						<ButtonAnchor
							href={`tel:${contact.phone.replace(/\s/g, '')}`}
							size="sm"
						>
							<Phone className="mr-1.5 size-4" />
							{contact.phone}
						</ButtonAnchor>
						<ButtonAnchor
							href={`mailto:${contact.email}`}
							size="sm"
							variant="secondary"
						>
							<Mail className="mr-1.5 size-4" />
							{contact.email}
						</ButtonAnchor>
						<ButtonAnchor
							href={contact.facebookUrl}
							size="sm"
							variant="secondary"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Facebook className="mr-1.5 size-4" />
							Facebook
						</ButtonAnchor>
					</div>
				</section>

				<OfferSectionTabs sections={sections} />
			</OfferRoot>
		</main>
	);
}
