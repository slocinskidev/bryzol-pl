'use client';

import { Card } from '@heroui/react/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHeader } from '@/components/layout/page-header';
import { contact } from '@/lib/contact';

export function Contact() {
	return (
		<section
			id="contact"
			className="relative min-h-screen bg-gradient-to-b from-background to-accent/5 py-20 lg:py-32 dark:to-accent/10"
		>
			<div className="container mx-auto max-w-7xl px-6">
				<PageHeader
					variant="inline"
					as="h2"
					title="Kontakt"
					innerClassName="mb-16"
				/>

				<div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="space-y-10">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h3 className="mb-6 font-semibold text-foreground text-xl">
								Skontaktuj się z nami
							</h3>
							<div className="space-y-4">
								<a
									href={`tel:${contact.phone.replace(/\s/g, '')}`}
									className="flex min-h-[44px] items-center gap-3 text-muted transition-colors hover:text-accent"
								>
									<Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
									<span>{contact.phone}</span>
								</a>
								<a
									href={`mailto:${contact.email}`}
									className="flex min-h-[44px] items-center gap-3 text-muted transition-colors hover:text-accent"
								>
									<Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
									<span>{contact.email}</span>
								</a>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<h3 className="mb-6 font-semibold text-foreground text-xl">
								Godziny pracy
							</h3>
							<div className="space-y-2 text-muted">
								<div className="flex justify-between gap-4">
									<span>Poniedziałek – Piątek</span>
									<span className="font-medium text-foreground">
										8:00 – 18:00
									</span>
								</div>
								<div className="flex justify-between gap-4">
									<span>Sobota</span>
									<span className="font-medium text-foreground">
										9:00 – 16:00
									</span>
								</div>
								<div className="flex justify-between gap-4">
									<span>Niedziela</span>
									<span className="font-medium text-foreground">Zamknięte</span>
								</div>
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<Card
							variant="default"
							className="overflow-hidden border-border bg-surface shadow-lg dark:bg-surface-secondary"
						>
							<Card.Content className="flex flex-col gap-6 p-6 lg:p-8">
								<div>
									<h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground text-xl">
										<MapPin className="h-5 w-5 text-accent" aria-hidden />
										Lokalizacja
									</h3>
									<p className="mb-6 text-muted">{contact.address}</p>
								</div>
								<div className="flex flex-col gap-3 sm:flex-row">
									<a
										href={contact.directionsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md border-2 border-accent bg-transparent px-5 py-2.5 font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
									>
										Jak dojechać
									</a>
									<a
										href={contact.mapSearchUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-accent px-5 py-2.5 font-medium text-accent-foreground transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
									>
										Zobacz na mapie
									</a>
								</div>
							</Card.Content>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
