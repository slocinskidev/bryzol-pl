"use client";

import { motion } from "motion/react";

export function Menu() {
	return (
		<section
			id="menu"
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
					Menu
				</h2>
				<div className="grid md:grid-cols-2 gap-8 mt-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-left"
					>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
							Przystawki
						</h3>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">
									Tatar z łososia
								</span>
								<span className="text-gray-900 dark:text-white font-medium">
									45 zł
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">
									Karpaccio wołowe
								</span>
								<span className="text-gray-900 dark:text-white font-medium">
									38 zł
								</span>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="text-left"
					>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
							Dania główne
						</h3>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">
									Polędwica wołowa
								</span>
								<span className="text-gray-900 dark:text-white font-medium">
									65 zł
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600 dark:text-gray-300">
									Filet z dorsza
								</span>
								<span className="text-gray-900 dark:text-white font-medium">
									55 zł
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
