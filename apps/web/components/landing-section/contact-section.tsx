'use client';

import { Card } from '@heroui/react/card';
import {
	ArrowRight,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import bgTexture from '@/assets/bg-texture.png';
import { ButtonLink } from '@/components/button-link';
import { contact } from '@/lib/contact';

export function ContactSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-accent/5 to-background py-24 lg:py-32">
			<div
				className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-overlay"
				aria-hidden
			>
				<Image
					src={bgTexture}
					alt=""
					fill
					className="object-cover"
					sizes="100vw"
				/>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						<p className="mb-3 font-semibold text-accent text-sm uppercase tracking-[0.2em]">
							Kontakt
						</p>
						<h2 className="font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
							Porozmawiajmy o Twoim wydarzeniu
						</h2>
						<p className="mt-4 max-w-lg text-base text-muted leading-relaxed md:text-lg">
							Zadzwoń lub napisz — przygotujemy szybką propozycję menu i wycenę
							dopasowaną do Twojego wydarzenia.
						</p>
						<div className="mt-6 flex items-center gap-3">
							<a
								href={contact.facebookUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
								aria-label="Facebook"
							>
								<Facebook className="size-5" />
							</a>
							<a
								href={contact.instagramUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
								aria-label="Instagram"
							>
								<Instagram className="size-5" />
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 24 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.15 }}
						viewport={{ once: true }}
					>
						<Card className="border border-accent/20 bg-surface shadow-xl transition-shadow duration-150 hover:shadow-2xl dark:border-stone-700 dark:bg-stone-800/90">
							<Card.Content className="space-y-4 p-6 lg:p-8">
								<ContactRow
									href={`tel:${contact.phone.replace(/\s/g, '')}`}
									icon={Phone}
									label="Telefon"
									value={contact.phone}
								/>
								<ContactRow
									href={`mailto:${contact.email}`}
									icon={Mail}
									label="Email"
									value={contact.email}
								/>
								<ContactRow
									href={contact.directionsUrl}
									icon={MapPin}
									label="Adres"
									value={contact.address}
									external
								/>

								<ButtonLink
									href="/kontakt"
									size="lg"
									fullWidth
									className="mt-2"
								>
									Pełna strona kontaktu
									<ArrowRight className="ml-2 size-4" />
								</ButtonLink>
							</Card.Content>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function ContactRow({
	href,
	icon: Icon,
	label,
	value,
	external,
}: {
	href: string;
	icon: React.ElementType;
	label: string;
	value: string;
	external?: boolean;
}) {
	return (
		<motion.a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
			className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-150 hover:border-accent/20 hover:bg-accent/5"
			whileHover="hover"
			initial="idle"
		>
			<motion.div
				className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-150 group-hover:bg-accent group-hover:text-white group-hover:shadow-accent/25 group-hover:shadow-lg"
				variants={{
					idle: { scale: 1, rotate: 0 },
					hover: { scale: 1.15, rotate: -5 },
				}}
				transition={{ type: 'spring', stiffness: 500, damping: 12 }}
			>
				<Icon className="size-5" />
			</motion.div>
			<div className="flex-1">
				<p className="text-muted text-sm transition-colors duration-150 group-hover:text-accent/70">
					{label}
				</p>
				<p className="font-semibold text-foreground transition-colors duration-150 group-hover:text-accent">
					{value}
				</p>
			</div>
			<motion.div
				className="text-accent"
				variants={{
					idle: { opacity: 0, x: -8 },
					hover: { opacity: 1, x: 0 },
				}}
				transition={{ type: 'spring', stiffness: 500, damping: 15 }}
			>
				<ArrowRight className="size-4" />
			</motion.div>
		</motion.a>
	);
}
