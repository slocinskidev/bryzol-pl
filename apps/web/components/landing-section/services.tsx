'use client';

import { Button } from '@workspace/ui/components/button';
import { Briefcase, Cake, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const services = [
	{
		icon: Briefcase,
		title: 'Catering firmowy',
		description:
			'Obiady i śniadania do biura, spotkania integracyjne. Dopasowane menu, punktualna dostawa — oszczędzacie czas.',
	},
	{
		icon: Cake,
		title: 'Imprezy okolicznościowe',
		description:
			'Małe przyjęcia, urodziny, imieniny, spotkania w gronie rodziny i znajomych. Menu na miarę — Wy się cieszycie, my dbamy o jedzenie.',
	},
	{
		icon: UtensilsCrossed,
		title: 'Dania na dowóz',
		description:
			'Domowe obiady i dania dnia prosto pod drzwi. Menu tygodniowe — codziennie świeże, zawsze na czas.',
	},
] as const;

export function Services() {
	return (
		<section
			id="services"
			className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-background via-background to-primary/5 py-20 lg:py-32 dark:to-primary/10"
		>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,hsl(var(--primary)/0.14),transparent_42%)]"
				aria-hidden
			/>
			<div className="container mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mx-auto mb-16 max-w-4xl text-center"
				>
					<h2 className="mb-4 font-bold font-display text-4xl text-gray-900 tracking-tight md:text-5xl lg:text-6xl dark:text-white">
						Usługi
					</h2>
					<div
						className="mx-auto h-1 w-24 rounded-full bg-accent"
						aria-hidden
					/>
					<p className="mt-6 text-gray-600 text-lg leading-relaxed dark:text-gray-300">
						Dla firm, rodzin i organizatorów wydarzeń, którzy chcą mieć
						smacznie, estetycznie i bezproblemowo.
					</p>
				</motion.div>
				<div className="grid gap-8 md:grid-cols-3">
					{services.map(({ icon: Icon, title, description }, index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
							viewport={{ once: true }}
							className="group rounded-2xl border border-gray-200/90 bg-white/90 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl dark:border-stone-700 dark:bg-stone-800/90"
						>
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20 dark:bg-primary/20">
								<Icon className="h-7 w-7 text-primary" aria-hidden />
							</div>
							<h3 className="mb-3 font-semibold text-gray-900 text-xl dark:text-white">
								{title}
							</h3>
							<p className="text-gray-600 leading-relaxed dark:text-gray-300">
								{description}
							</p>
						</motion.div>
					))}
				</div>
				<div className="mt-10 flex items-center justify-center">
					<Button size="lg" variant="outline" asChild>
						<Link href="/oferta">Zobacz pełną ofertę usług</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
