"use client";

import { motion, useReducedMotion } from "motion/react";
import type { OfferSection } from "@/lib/offer";

export function OfferSectionWrapper({
	section,
	children,
}: {
	section: OfferSection;
	children: React.ReactNode;
}) {
	const reduceMotion = useReducedMotion();
	const visible = { opacity: 1, y: 0 };
	const hidden = { opacity: 0, y: 16 };

	return (
		<motion.section
			id={section.slug}
			className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:p-10"
			initial={reduceMotion ? visible : hidden}
			whileInView={visible}
			viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
			transition={{ duration: 0.4 }}
		>
			<header className="mb-8">
				<h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{section.title}
				</h2>
				{section.description ? (
					<p className="mt-2 text-lg text-muted-foreground">
						{section.description}
					</p>
				) : null}
				{section.meta?.priceNote ? (
					<p className="mt-2 text-sm font-medium text-accent">
						{section.meta.priceNote}
					</p>
				) : null}
				<div className="mt-4 h-0.5 w-12 rounded-full bg-accent" aria-hidden />
			</header>
			{children}
		</motion.section>
	);
}
