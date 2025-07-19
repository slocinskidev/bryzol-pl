"use client";

import { motion } from "motion/react";

export function Services() {
	return (
		<section
			id="services"
			className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="text-center max-w-4xl px-6"
			>
				<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
					Usługi
				</h2>
				<div className="grid md:grid-cols-3 gap-8 mt-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
					>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
							Catering firmowy
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Profesjonalne usługi dla firm i organizacji
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
					>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
							Wesele i uroczystości
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Wyjątkowe menu na specjalne okazje
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
					>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
							Dostawy obiadów
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Codzienne, zdrowe posiłki do biura
						</p>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
