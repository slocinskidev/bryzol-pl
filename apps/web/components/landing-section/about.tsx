"use client";

import { AuroraText } from "@workspace/ui/components/aurora-text";
import { Award, ChefHat, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import bgTexture from "@/assets/bg-texture.png";
import heroImage from "@/assets/hero.jpeg";

export function About() {
	return (
		<section
			id="about"
			className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary/[0.06] via-background to-accent/[0.04] dark:from-primary/10 dark:via-stone-900 dark:to-accent/5 py-24 lg:py-36"
		>
			{/* Warm grain overlay — gastronomy atmosphere */}
			<div
				className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06] mix-blend-multiply dark:mix-blend-overlay"
				aria-hidden
			>
				<Image
					src={bgTexture}
					alt=""
					fill
					className="object-cover"
					sizes="100vw"
				/>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl px-6">
				{/* Eyebrow + heading — editorial restaurant style */}
				<motion.header
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
						Poznaj nas
					</p>
					<h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
						O nas
					</h2>
					<div
						className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-accent"
						aria-hidden
					/>
					<p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl md:leading-[1.65]">
						Domowy smak na każdą okazję — od obiadów na dowóz po małe przyjęcia
						i imprezy firmowe. Rodzinna gościnność i dopasowane menu. Dobre
						jedzenie łączy ludzi.
					</p>
				</motion.header>

				{/* Story block: image + pull-quote — magazine / restaurant editorial */}
				<div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-2 lg:gap-20 lg:items-center">
					{/* Featured image — framed, warm overlay */}
					<motion.div
						initial={{ opacity: 0, x: -32 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]"
					>
						<div
							className="absolute inset-0 ring-2 ring-inset ring-accent/20 rounded-2xl z-10 pointer-events-none"
							aria-hidden
						/>
						<Image
							src={heroImage}
							alt="Przykład aranżacji cateringu — elegancki stół i dania"
							fill
							className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
						{/* Warm gradient overlay (green/gold tint) */}
						<div
							className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-accent/10 rounded-2xl"
							aria-hidden
						/>
					</motion.div>

					{/* Founder's Note — Dribbble-style pull-quote + story (who + why + benefit) */}
					<motion.div
						initial={{ opacity: 0, x: 32 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.15 }}
						viewport={{ once: true }}
						className="relative"
					>
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
							Słowo od założyciela
						</p>
						<div className="border-l-4 border-accent pl-6 md:pl-8">
							<blockquote>
								<p className="font-display text-2xl font-bold italic leading-snug text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
									<AuroraText
										className="font-display text-2xl font-bold italic md:text-3xl lg:text-4xl"
										speed={0.6}
									>
										Smak to część naszego życia
									</AuroraText>
								</p>
								<p className="mt-6 max-w-[65ch] text-base leading-[1.7] text-gray-600 dark:text-gray-300 md:text-lg">
									Zaczęliśmy od kuchni, w której liczy się każdy detal. Dziś
									łączymy polskie tradycje z inspiracjami z całego świata.
									Cieszcie się chwilą — my zajmiemy się resztą.
								</p>
							</blockquote>
						</div>

						{/* Founder signature card — warm, refined */}
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
							className="mt-10 flex items-center gap-4 rounded-2xl border border-accent/20 bg-accent/5 px-6 py-5 dark:border-accent/15 dark:bg-accent/10"
						>
							<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 bg-primary/10 dark:bg-primary/20">
								<ChefHat className="h-7 w-7 text-primary" aria-hidden />
							</div>
							<div>
								<p className="font-semibold text-gray-900 dark:text-white">
									Andrzej Słociński
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Założyciel Bryzol Catering
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Values — clean grid, intentional hierarchy (Drizzl-style: flow, clarity) */}
				<div className="mt-24 lg:mt-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="mb-14 text-center"
					>
						<h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
							Nasze wartości
						</h3>
						<div
							className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-accent"
							aria-hidden
						/>
					</motion.div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						{[
							{
								icon: Heart,
								title: "Z pasją",
								description:
									"Każde danie traktujemy jak dzieło — od składników po ostatni detal na talerzu.",
								delay: 0.05,
							},
							{
								icon: Award,
								title: "Doświadczenie",
								description:
									"Dopracowane menu, punktualna dostawa i obsługa na najwyższym poziomie. Spokój dla Was.",
								delay: 0.15,
							},
							{
								icon: Users,
								title: "Rodzinna atmosfera",
								description:
									"Tworzymy klimat, w którym goście czują się jak u siebie — ciepło i wyjątkowo.",
								delay: 0.25,
							},
							{
								icon: ChefHat,
								title: "Tradycja i nowoczesność",
								description:
									"Sprawdzone receptury i nowoczesne podejście — smak, na który można liczyć.",
								delay: 0.35,
							},
						].map(({ icon: Icon, title, description, delay }) => (
							<motion.article
								key={title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay }}
								viewport={{ once: true }}
								className="group flex flex-col text-center"
							>
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 dark:border-stone-600 dark:bg-stone-800/80 dark:group-hover:border-accent/30 dark:group-hover:bg-accent/10">
									<Icon className="h-8 w-8" aria-hidden />
								</div>
								<h4 className="mt-5 font-display text-lg font-semibold text-gray-900 dark:text-white">
									{title}
								</h4>
								<p className="mt-3 flex-1 text-sm leading-[1.7] text-gray-600 dark:text-gray-300">
									{description}
								</p>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
