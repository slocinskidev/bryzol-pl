"use client";

import { Briefcase, Cake, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

const services = [
	{
		icon: Briefcase,
		title: "Catering firmowy",
		description:
			"Obiady i śniadania do biura, spotkania integracyjne. Dopasowane menu, punktualna dostawa — oszczędzacie czas.",
	},
	{
		icon: Cake,
		title: "Imprezy okolicznościowe",
		description:
			"Małe przyjęcia, urodziny, imieniny, spotkania w gronie rodziny i znajomych. Menu na miarę — Wy się cieszycie, my dbamy o jedzenie.",
	},
	{
		icon: UtensilsCrossed,
		title: "Dania na dowóz",
		description:
			"Domowe obiady i dania dnia prosto pod drzwi. Menu tygodniowe — codziennie świeże, zawsze na czas.",
	},
] as const;

export function Services() {
	return (
		<section
			id="services"
			className="relative min-h-screen bg-gradient-to-b from-background to-primary/5 dark:to-primary/10 py-20 lg:py-32 flex items-center justify-center"
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
						Usługi
					</h2>
					<div
						className="mx-auto h-1 w-24 rounded-full bg-accent"
						aria-hidden
					/>
				</motion.div>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map(({ icon: Icon, title, description }, index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
							viewport={{ once: true }}
							className="p-8 bg-white dark:bg-stone-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-stone-700 hover:border-accent/30"
						>
							<div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 border border-primary/20">
								<Icon className="w-7 h-7 text-primary" aria-hidden />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
								{title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								{description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
