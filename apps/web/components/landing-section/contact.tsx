'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { contact } from '@/lib/contact';

export function Contact() {
	return (
		<section
			id="contact"
			className="relative min-h-screen bg-gradient-to-b from-background to-accent/5 py-20 lg:py-32 dark:to-accent/10"
		>
			<div className="container mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mx-auto mb-16 max-w-4xl text-center"
				>
					<h2 className="mb-4 font-bold font-display text-4xl text-gray-900 tracking-tight md:text-5xl lg:text-6xl dark:text-white">
						Kontakt
					</h2>
					<div
						className="mx-auto h-1 w-24 rounded-full bg-accent"
						aria-hidden
					/>
				</motion.div>

				<div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="space-y-10">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h3 className="mb-6 font-semibold text-gray-900 text-xl dark:text-white">
								Skontaktuj się z nami
							</h3>
							<div className="space-y-4">
								<a
									href={`tel:${contact.phone.replace(/\s/g, '')}`}
									className="flex min-h-[44px] items-center gap-3 text-gray-600 transition-colors hover:text-accent dark:text-gray-300"
								>
									<Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
									<span>{contact.phone}</span>
								</a>
								<a
									href={`mailto:${contact.email}`}
									className="flex min-h-[44px] items-center gap-3 text-gray-600 transition-colors hover:text-accent dark:text-gray-300"
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
							<h3 className="mb-6 font-semibold text-gray-900 text-xl dark:text-white">
								Godziny pracy
							</h3>
							<div className="space-y-2 text-gray-600 dark:text-gray-300">
								<div className="flex justify-between gap-4">
									<span>Poniedziałek – Piątek</span>
									<span className="font-medium text-gray-900 dark:text-white">
										8:00 – 18:00
									</span>
								</div>
								<div className="flex justify-between gap-4">
									<span>Sobota</span>
									<span className="font-medium text-gray-900 dark:text-white">
										9:00 – 16:00
									</span>
								</div>
								<div className="flex justify-between gap-4">
									<span>Niedziela</span>
									<span className="font-medium text-gray-900 dark:text-white">
										Zamknięte
									</span>
								</div>
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-800"
					>
						<div className="p-6 lg:p-8">
							<h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 text-xl dark:text-white">
								<MapPin className="h-5 w-5 text-accent" aria-hidden />
								Lokalizacja
							</h3>
							<p className="mb-6 text-gray-600 dark:text-gray-300">
								{contact.address}
							</p>
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
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
