import { Card } from '@heroui/react/card';
import { Contact } from '@/components/landing-section/contact';
import { contact } from '@/lib/contact';

function createGoogleMapsEmbedUrl(address: string): string {
	const query = encodeURIComponent(address);
	return `https://www.google.com/maps?q=${query}&output=embed`;
}

export default function ContactPage() {
	const mapEmbedUrl = createGoogleMapsEmbedUrl(contact.address);

	return (
		<div className="bg-background pt-32 transition-colors duration-500">
			<Contact />
			<section className="pb-20 lg:pb-28">
				<div className="container mx-auto max-w-7xl px-6">
					<Card className="overflow-hidden shadow-lg">
						<Card.Header className="border-border border-b p-6">
							<Card.Title className="font-bold font-display text-3xl text-foreground">
								Mapa dojazdu
							</Card.Title>
							<Card.Description>
								Znajdź nas pod adresem: {contact.address}
							</Card.Description>
						</Card.Header>
						<div className="aspect-video w-full">
							<iframe
								title="Mapa lokalizacji Bryzol Catering"
								src={mapEmbedUrl}
								className="h-full w-full border-0"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
							/>
						</div>
					</Card>
				</div>
			</section>
		</div>
	);
}
