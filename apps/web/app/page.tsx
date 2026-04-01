import { Button } from '@workspace/ui/components/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { About } from '@/components/landing-section/about';
import { Hero } from '@/components/landing-section/hero';
import { Services } from '@/components/landing-section/services';
import { SocialProof } from '@/components/landing-section/social-proof';
import { contact } from '@/lib/contact';

function createGoogleMapsEmbedUrl(address: string): string {
	const query = encodeURIComponent(address);
	return `https://www.google.com/maps?q=${query}&output=embed`;
}

export default function Page() {
	const mapEmbedUrl = createGoogleMapsEmbedUrl(contact.address);

	return (
		<div className="bg-background transition-colors duration-500">
			<Hero />
			<About />
			<SocialProof />
			<Services />
			<section className="relative min-h-[78vh] overflow-hidden">
				<iframe
					title="Mapa lokalizacji Bryzol Catering"
					src={mapEmbedUrl}
					className="absolute inset-0 h-full w-full border-0"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					allowFullScreen
				/>
				<div className="absolute inset-0 bg-black/50" />
				<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0.64)_100%)]" />
				<div className="container relative z-10 mx-auto flex min-h-[78vh] items-center px-6 py-14 lg:py-20">
					<div className="w-full max-w-xl rounded-2xl border border-white/20 bg-background/90 p-6 shadow-2xl backdrop-blur-md dark:bg-black/75">
						<h2 className="font-bold font-display text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
							Kontakt
						</h2>
						<p className="mt-4 text-gray-600 text-lg leading-relaxed dark:text-gray-300">
							Zadzwon lub napisz, a przygotujemy szybka propozycje menu i
							wycene.
						</p>
						<div className="mt-6 space-y-4">
							<a
								href={`tel:${contact.phone.replace(/\s/g, '')}`}
								className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
							>
								<Phone
									className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
									aria-hidden
								/>
								<span>{contact.phone}</span>
							</a>
							<a
								href={`mailto:${contact.email}`}
								className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
							>
								<Mail
									className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
									aria-hidden
								/>
								<span>{contact.email}</span>
							</a>
							<p className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
								<MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
								<span>{contact.address}</span>
							</p>
						</div>
						<div className="mt-6 flex flex-wrap gap-3">
							<Button size="sm" asChild>
								<Link href="/kontakt">Pelna strona kontaktu</Link>
							</Button>
							<Button size="sm" variant="outline" asChild>
								<a
									href={contact.directionsUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Jak dojechac
								</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
