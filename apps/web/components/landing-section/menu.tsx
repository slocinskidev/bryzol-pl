'use client';

import { motion } from 'motion/react';
import { ButtonLink } from '@/components/button-link';

export function Menu() {
	return (
		<section
			id="menu"
			className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-accent/5 to-background py-20 lg:py-32 dark:from-accent/10 dark:to-background"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="mx-auto max-w-3xl px-6 text-center"
			>
				<h2 className="mb-4 font-bold font-display text-4xl text-foreground tracking-tight md:text-5xl lg:text-6xl">
					Menu
				</h2>
				<div
					className="mx-auto mb-10 h-1 w-24 rounded-full bg-accent"
					aria-hidden
				/>
				<p className="mb-10 text-lg text-muted leading-relaxed md:text-xl">
					Domowe obiady, dania dnia, blachy i zestawy na przyjęcie. Zobacz pełną
					ofertę i wybierz coś na dziś lub na Waszą imprezę.
				</p>
				<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
					<ButtonLink href="/oferta" size="lg">
						Zobacz pełne menu
					</ButtonLink>
					<ButtonLink href="/kontakt" size="lg" variant="outline">
						Zapytaj o wycenę
					</ButtonLink>
				</div>
			</motion.div>
		</section>
	);
}
