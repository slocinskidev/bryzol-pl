import { Contact } from '@/components/landing-section/contact';
import { contact } from '@/lib/contact';

function createGoogleMapsEmbedUrl(address: string): string {
	const query = encodeURIComponent(address);
	return `https://www.google.com/maps?q=${query}&output=embed`;
}

export default function ContactPage() {
	const mapEmbedUrl = createGoogleMapsEmbedUrl(contact.address);

	return (
		<div className="bg-background pt-24 transition-colors duration-500">
			<Contact />
			<section className="pb-20 lg:pb-28">
				<div className="container mx-auto max-w-7xl px-6">
					<div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
						<div className="border-border border-b p-6">
							<h2 className="font-bold font-display text-3xl text-foreground">
								Mapa dojazdu
							</h2>
							<p className="mt-2 text-muted">
								Znajdz nas pod adresem: {contact.address}
							</p>
						</div>
						<div className="aspect-[16/9] w-full">
							<iframe
								title="Mapa lokalizacji Bryzol Catering"
								src={mapEmbedUrl}
								className="h-full w-full border-0"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
