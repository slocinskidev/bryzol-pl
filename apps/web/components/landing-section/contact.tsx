"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { contact } from "@/lib/contact";

export function Contact() {
	return (
		<section
			id="contact"
			className="relative min-h-screen bg-gradient-to-b from-background to-primary/5 dark:to-primary/10 py-20 lg:py-32"
		>
			<div className="container mx-auto px-6 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center max-w-4xl mx-auto mb-16"
				>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
						Kontakt
					</h2>
					<div
						className="mx-auto h-1 w-24 rounded-full bg-accent"
						aria-hidden
					/>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					<div className="space-y-10">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
								Skontaktuj się z nami
							</h3>
							<div className="space-y-4">
								<a
									href={`tel:${contact.phone.replace(/\s/g, "")}`}
									className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors min-h-[44px]"
								>
									<Phone
										className="w-5 h-5 shrink-0 text-primary"
										aria-hidden
									/>
									<span>{contact.phone}</span>
								</a>
								<a
									href={`mailto:${contact.email}`}
									className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors min-h-[44px]"
								>
									<Mail className="w-5 h-5 shrink-0 text-primary" aria-hidden />
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
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
								Godziny pracy
							</h3>
							<div className="space-y-2 text-gray-600 dark:text-gray-300">
								<div className="flex justify-between gap-4">
									<span>Poniedziałek – Piątek</span>
									<span className="text-gray-900 dark:text-white font-medium">
										8:00 – 18:00
									</span>
								</div>
								<div className="flex justify-between gap-4">
									<span>Sobota</span>
									<span className="text-gray-900 dark:text-white font-medium">
										9:00 – 16:00
									</span>
								</div>
								<div className="flex justify-between gap-4">
									<span>Niedziela</span>
									<span className="text-gray-900 dark:text-white font-medium">
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
						className="rounded-2xl overflow-hidden border border-gray-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-lg"
					>
						<div className="p-6 lg:p-8">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
								<MapPin className="w-5 h-5 text-primary" aria-hidden />
								Lokalizacja
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-6">
								{contact.address}
							</p>
							<div className="flex flex-col sm:flex-row gap-3">
								<a
									href={contact.directionsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-md border-2 border-accent bg-transparent text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								>
									Jak dojechać
								</a>
								<a
									href={contact.mapSearchUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
