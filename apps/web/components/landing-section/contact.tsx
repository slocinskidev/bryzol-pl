"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
	return (
		<section
			id="contact"
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
					Kontakt
				</h2>
				<div className="grid md:grid-cols-2 gap-12 mt-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
							Skontaktuj się z nami
						</h3>
						<div className="space-y-4 text-left">
							<div className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-primary" />
								<span className="text-gray-600 dark:text-gray-300">
									+48 533 363 153
								</span>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-primary" />
								<span className="text-gray-600 dark:text-gray-300">
									kontakt@bryzol.pl
								</span>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
							Godziny pracy
						</h3>
						<div className="space-y-2 text-left">
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">
									Poniedziałek - Piątek
								</span>
								<span className="text-gray-900 dark:text-white">
									8:00 - 18:00
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">Sobota</span>
								<span className="text-gray-900 dark:text-white">
									9:00 - 16:00
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">
									Niedziela
								</span>
								<span className="text-gray-900 dark:text-white">Zamknięte</span>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
