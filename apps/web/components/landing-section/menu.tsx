"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "motion/react";
import Link from "next/link";

export function Menu() {
	return (
		<section
			id="menu"
			className="relative min-h-screen bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-stone-900 py-20 lg:py-32 flex items-center justify-center"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="text-center max-w-3xl mx-auto px-6"
			>
				<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
					Menu
				</h2>
				<div
					className="mx-auto h-1 w-24 rounded-full bg-accent mb-10"
					aria-hidden
				/>
				<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
					Domowe obiady, dania dnia, blachy i zestawy na przyjęcie. Zobacz pełną
					ofertę i wybierz coś na dziś lub na Waszą imprezę.
				</p>
				<Button size="lg" asChild>
					<Link href="/menu">Zobacz pełne menu</Link>
				</Button>
			</motion.div>
		</section>
	);
}
