'use client';

import { Card } from '@heroui/react/card';
import { AuroraText } from '@workspace/ui/components/aurora-text';
import { Award, ChefHat, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import bgTexture from '@/assets/bg-texture.png';
import heroImage from '@/assets/hero.jpeg';
import { cn } from '@workspace/ui/lib/utils';

export function About({ hideSectionHeader = false }: { hideSectionHeader?: boolean }) {
	return (
		<section
			id="about"
			className="relative min-h-screen overflow-hidden bg-gradient-to-b from-accent/[0.06] via-background to-accent/[0.04] py-24 lg:py-36 dark:from-accent/10 dark:via-background dark:to-accent/5"
		>
			{/* Warm grain overlay — gastronomy atmosphere */}
			<div
				className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-overlay"
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
				{!hideSectionHeader ? (
					<motion.header
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="mx-auto max-w-3xl text-center"
					>
						<p className="mb-3 font-semibold text-accent text-sm uppercase tracking-[0.2em]">
							Poznaj nas
						</p>
						<h2 className="font-bold font-display text-4xl text-gray-900 tracking-tight sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
							O nas
						</h2>
						<div
							className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-accent"
							aria-hidden
						/>
						<div className="mx-auto mt-8 max-w-2xl space-y-2 text-gray-600 text-lg leading-relaxed md:text-xl md:leading-[1.65] dark:text-gray-300">
							<p>Nie budujemy historii o wielkiej firmie.</p>
							<p className="font-semibold text-gray-900 dark:text-white">
								Budujemy ją na talerzu.
							</p>
						</div>
					</motion.header>
				) : null}

				{/* Story block: image + pull-quote — magazine / restaurant editorial */}
				<div
					className={cn(
						'grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20',
						hideSectionHeader ? 'mt-10 lg:mt-16' : 'mt-20 lg:mt-28',
					)}
				>
					{/* Featured image — framed, warm overlay */}
					<motion.div
						initial={{ opacity: 0, x: -32 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]"
					>
						<div
							className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-2 ring-accent/20 ring-inset"
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
							className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/40 via-transparent to-accent/10"
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
						<p className="mb-4 font-semibold text-accent text-xs uppercase tracking-[0.2em]">
							Kim jesteśmy
						</p>
						<div className="border-accent border-l-4 pl-6 md:pl-8">
							<blockquote>
								<p className="font-bold font-display text-2xl text-gray-900 italic leading-snug md:text-3xl lg:text-4xl dark:text-white">
									<AuroraText
										className="font-bold font-display text-2xl italic md:text-3xl lg:text-4xl"
										speed={0.6}
									>
										Smak, który naprawdę robi różnicę
									</AuroraText>
								</p>
								<div className="mt-6 max-w-[65ch] space-y-4 text-base text-gray-600 leading-[1.7] md:text-lg dark:text-gray-300">
									<p>
										Bryzol Catering to pasja do gotowania, która z czasem
										przerodziła się w coś większego. Dziś za każdą potrawą stoi
										doświadczenie, zaangażowanie i dbałość o smak, który
										naprawdę robi różnicę.
									</p>
									<p>
										Tworzymy zarówno domowe obiady, jak i catering na różne
										okazje — od kameralnych spotkań po większe wydarzenia. Każde
										menu dopasowujemy do potrzeb, gustu i budżetu naszych
										klientów.
									</p>
									<p>
										W naszej ofercie znajdziesz klasyczną kuchnię polską, ale
										też dania inspirowane smakami świata. Od prostych,
										codziennych obiadów po finger food, zimne płyty i
										rozbudowane stoły cateringowe.
									</p>
									<p>
										Obsługujemy klientów indywidualnych i firmy, oferując
										również regularne dostawy obiadów oraz kompleksową
										organizację wydarzeń.
									</p>
									<p className="border-border border-t pt-4 text-foreground dark:text-white">
										<span className="font-semibold">
											Nie lubimy zbędnych słów.
										</span>{' '}
										Wolimy, żeby nasze jedzenie mówiło samo za siebie.
									</p>
								</div>
							</blockquote>
						</div>

						{/* Founder signature card — warm, refined */}
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
							className="mt-10"
						>
							<Card
								variant="transparent"
								className="flex flex-row items-center gap-4 border-accent/20 bg-accent/5 px-6 py-5 dark:border-accent/15 dark:bg-accent/10"
							>
								<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 dark:bg-accent/20">
									<ChefHat className="h-7 w-7 text-accent" aria-hidden />
								</div>
								<Card.Content className="min-w-0 p-0">
									<p className="font-semibold text-gray-900 dark:text-white">
										Andrzej Słociński
									</p>
									<p className="text-gray-500 text-sm dark:text-gray-400">
										Założyciel Bryzol Catering
									</p>
								</Card.Content>
							</Card>
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
						<h3 className="font-display font-semibold text-2xl text-gray-900 md:text-3xl dark:text-white">
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
								title: 'Pasja',
								description:
									'Gotowanie, które z czasem stało się czymś większym — i które widać w każdym daniu.',
								delay: 0.05,
							},
							{
								icon: Award,
								title: 'Doświadczenie i smak',
								description:
									'Za każdą potrawą stoi praca ludzi, którym zależy na smaku naprawdę robiącym różnicę.',
								delay: 0.15,
							},
							{
								icon: Users,
								title: 'Dopasowanie do Was',
								description:
									'Menu pod potrzeby, gust i budżet — od domowych obiadów po większe wydarzenia.',
								delay: 0.25,
							},
							{
								icon: ChefHat,
								title: 'Polska baza, światowe inspiracje',
								description:
									'Klasyczna kuchnia polska obok dań inspirowanych smakami świata — zawsze pod Ciebie.',
								delay: 0.35,
							},
						].map(({ icon: Icon, title, description, delay }) => (
							<motion.article
								key={title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay }}
								viewport={{ once: true }}
								className="group h-full text-center"
							>
								<Card
									variant="transparent"
									className="group flex h-full flex-col border border-accent/20 bg-accent/5 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10 dark:border-stone-600 dark:bg-stone-800/80 dark:hover:border-accent/30 dark:hover:bg-accent/10"
								>
									<Card.Header className="flex flex-col items-center gap-0 p-6 pb-0">
										<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 dark:border-stone-600 dark:bg-stone-800/80 dark:group-hover:border-accent/30 dark:group-hover:bg-accent/10">
											<Icon className="h-8 w-8" aria-hidden />
										</div>
										<Card.Title className="mt-5 font-display font-semibold text-gray-900 text-lg dark:text-white">
											{title}
										</Card.Title>
									</Card.Header>
									<Card.Content className="flex flex-1 flex-col p-6 pt-3">
										<Card.Description className="flex-1 text-gray-600 text-sm leading-[1.7] dark:text-gray-300">
											{description}
										</Card.Description>
									</Card.Content>
								</Card>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
