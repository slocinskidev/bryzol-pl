'use client';

import { Card } from '@heroui/react/card';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const processSteps = [
	'Rozmowa o wydarzeniu i potrzebach gosci',
	'Propozycja menu oraz szybka wycena',
	'Przygotowanie i dostawa na ustalona godzine',
] as const;

const serviceTypes = [
	'Catering firmowy',
	'Imprezy okolicznosciowe',
	'Dania na dowoz',
	'Menu dopasowane do diety i preferencji',
] as const;

export function SocialProof() {
	return (
		<section className="relative overflow-hidden bg-background py-20 lg:py-28">
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_45%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_40%)]"
				aria-hidden
			/>
			<div className="container mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="relative mx-auto mb-14 max-w-3xl text-center"
				>
					<p className="mb-3 text-accent text-sm uppercase tracking-[0.24em]">
						Dlaczego Bryzol
					</p>
					<h2 className="font-bold font-display text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
						Proces, ktory daje spokoj organizacyjny
					</h2>
					<p className="mt-5 text-gray-600 text-lg leading-relaxed dark:text-gray-300">
						Dzialamy wedlug prostego procesu i jasno pokazujemy zakres uslug.
						Dzieki temu od poczatku wiesz, czego sie spodziewac.
					</p>
				</motion.div>

				<div className="relative grid gap-6 lg:grid-cols-2">
					<motion.article
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="h-full"
					>
						<Card
							variant="default"
							className="h-full border-white/40 bg-surface/90 shadow-lg backdrop-blur-sm dark:border-stone-700/80"
						>
							<Card.Header className="gap-0 p-6 pb-0">
								<Card.Title className="font-semibold text-gray-900 text-xl dark:text-white">
									Jak wygląda współpraca
								</Card.Title>
							</Card.Header>
							<Card.Content className="p-6 pt-5">
								<ul className="space-y-4">
									{processSteps.map((step, index) => (
										<li key={step} className="flex items-start gap-3">
											<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-bold text-accent text-xs">
												{index + 1}
											</div>
											<span className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
												{step}
											</span>
										</li>
									))}
								</ul>
							</Card.Content>
						</Card>
					</motion.article>

					<motion.article
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.08 }}
						viewport={{ once: true }}
						className="h-full"
					>
						<Card
							variant="default"
							className="h-full border-white/40 bg-surface/90 shadow-lg backdrop-blur-sm dark:border-stone-700/80"
						>
							<Card.Header className="gap-0 p-6 pb-0">
								<Card.Title className="font-semibold text-gray-900 text-xl dark:text-white">
									Co obsługujemy
								</Card.Title>
							</Card.Header>
							<Card.Content className="p-6 pt-5">
								<div className="flex flex-wrap gap-2">
									{serviceTypes.map((service) => (
										<span
											key={service}
											className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-accent text-sm"
										>
											<CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
											{service}
										</span>
									))}
								</div>
							</Card.Content>
						</Card>
					</motion.article>
				</div>
			</div>
		</section>
	);
}
