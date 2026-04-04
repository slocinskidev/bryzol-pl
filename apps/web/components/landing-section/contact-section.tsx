import { MapPin, Phone, Mail } from 'lucide-react';
import { ButtonAnchor, ButtonLink } from '@/components/button-link';
import { contact } from '@/lib/contact';

export function ContactSection() {
	return (
		<section className="bg-gradient-to-br from-accent/10 via-accent/5 to-background py-20 lg:py-28">
			<div className="container mx-auto max-w-3xl px-6 text-center">
				<h2 className="font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl">
					Porozmawiajmy o Twoim wydarzeniu
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-base text-muted leading-relaxed md:text-lg">
					Zadzwoń lub napisz — przygotujemy szybką propozycję menu i wycenę.
				</p>

				<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<ButtonAnchor
						href={`tel:${contact.phone.replace(/\s/g, '')}`}
						size="lg"
					>
						<Phone className="mr-2 h-5 w-5" />
						{contact.phone}
					</ButtonAnchor>
					<ButtonAnchor
						href={`mailto:${contact.email}`}
						size="lg"
						variant="secondary"
					>
						<Mail className="mr-2 h-5 w-5" />
						{contact.email}
					</ButtonAnchor>
				</div>

				<p className="mt-6 flex items-center justify-center gap-2 text-muted text-sm">
					<MapPin className="h-4 w-4 text-accent" aria-hidden />
					{contact.address}
				</p>

				<ButtonLink
					href="/kontakt"
					size="sm"
					variant="ghost"
					className="mt-3"
				>
					Pełna strona kontaktu
				</ButtonLink>
			</div>
		</section>
	);
}
