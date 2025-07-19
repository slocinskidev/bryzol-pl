"use client";

import { motion } from "motion/react";

export function About() {
	return (
		<section
			id="about"
			className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="text-center max-w-4xl px-6"
			>
				<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
					O nas
				</h2>
				<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
					Bryzol to rodzinna firma cateringowa z wieloletnim doświadczeniem.
					Specjalizujemy się w tworzeniu wyjątkowych doświadczeń kulinarnych,
					łącząc tradycyjne receptury z nowoczesnymi technikami.
				</p>
			</motion.div>
		</section>
	);
}
