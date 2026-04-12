'use client';

import { Card } from '@heroui/react/card';
import { AuroraText } from '@workspace/ui/components/aurora-text';
import { Award, ChefHat, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import bgTexture from '@/assets/bg-texture.png';
import heroImage from '@/assets/hero.jpeg';

const values = [
	{
		icon: Heart,
		title: 'Pasja',
		description:
			'Gotowanie, które z czasem stało się czymś większym — i które widać w każdym daniu.',
		number: '01',
	},
	{
		icon: Award,
		title: 'Doświadczenie i smak',
		description:
			'Za każdą potrawą stoi praca ludzi, którym zależy na smaku naprawdę robiącym różnicę.',
		number: '02',
	},
	{
		icon: Users,
		title: 'Dopasowanie do Was',
		description:
			'Menu pod potrzeby, gust i budżet — od domowych obiadów po większe wydarzenia.',
		number: '03',
	},
	{
		icon: ChefHat,
		title: 'Polska baza, światowe inspiracje',
		description:
			'Klasyczna kuchnia polska obok dań inspirowanych smakami świata — zawsze pod Ciebie.',
		number: '04',
	},
] as const;

export function AboutSection() {
	return (
		<section
			id="about"
			className="relative overflow-hidden bg-gradient-to-b from-accent/[0.06] via-background to-accent/[0.04] py-24 lg:py-32 dark:from-accent/10 dark:via-background dark:to-accent/5"
		>
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
				{/* Story: image + text */}
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]"
					>
						<div
							className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-2 ring-accent/20 ring-inset"
							aria-hidden
						/>
						<Image
							src={heroImage}
							alt="Aranżacja cateringu — elegancki stół i dania"
							fill
							className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
						<div
							className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/40 via-transparent to-accent/10"
							aria-hidden
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 24 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<p className="mb-3 font-semibold text-accent text-sm uppercase tracking-[0.2em]">
							O nas
						</p>
						<h2 className="font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
							<AuroraText
								className="font-bold font-display text-3xl md:text-4xl lg:text-5xl"
								speed={0.6}
							>
								Smak, który robi różnicę
							</AuroraText>
						</h2>

						<div className="mt-6 space-y-4 text-base text-muted leading-relaxed md:text-lg">
							<p>
								Bryzol Catering to pasja do gotowania, która przerodziła się w
								coś większego. Za każdą potrawą stoi doświadczenie,
								zaangażowanie i dbałość o smak.
							</p>
							<p>
								Tworzymy domowe obiady i catering na każdą okazję — od
								kameralnych spotkań po większe wydarzenia. Każde menu
								dopasowujemy do potrzeb, gustu i budżetu.
							</p>
							<p className="font-medium text-foreground">
								Nie lubimy zbędnych słów. Wolimy, żeby nasze jedzenie mówiło
								samo za siebie.
							</p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.25 }}
							viewport={{ once: true }}
							className="mt-8"
						>
							<Card
								variant="transparent"
								className="flex flex-row items-center gap-4 border-accent/20 bg-accent/5 px-5 py-4 dark:border-accent/15 dark:bg-accent/10"
							>
								<div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 dark:bg-accent/20">
									<ChefHat className="size-6 text-accent" aria-hidden />
								</div>
								<Card.Content className="min-w-0 p-0">
									<p className="font-semibold text-foreground">
										Andrzej Słociński
									</p>
									<p className="text-muted text-sm">
										Założyciel Bryzol Catering
									</p>
								</Card.Content>
							</Card>
						</motion.div>
					</motion.div>
				</div>

				{/* Values */}
				<div className="mt-20 lg:mt-28">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="mb-14 text-center"
					>
						<p className="mb-3 font-semibold text-accent text-sm uppercase tracking-[0.2em]">
							Dlaczego my
						</p>
						<h3 className="font-display font-semibold text-3xl text-foreground md:text-4xl">
							Nasze wartości
						</h3>
						<div
							className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-accent"
							aria-hidden
						/>
					</motion.div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
						{values.map(({ icon: Icon, title, description, number }, index) => (
							<motion.article
								key={title}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group h-full"
							>
								<Card
									variant="transparent"
									className="group relative flex h-full flex-col overflow-hidden border border-accent/20 bg-accent/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10 hover:shadow-lg dark:border-stone-600 dark:bg-stone-800/80 dark:hover:border-accent/30 dark:hover:bg-accent/10"
								>
									<span
										className="pointer-events-none absolute top-4 right-4 font-bold font-display text-4xl text-accent/10 transition-colors duration-300 group-hover:text-accent/20"
										aria-hidden
									>
										{number}
									</span>
									<Card.Header className="relative flex flex-col items-start gap-0 p-6 pb-0">
										<div className="flex size-14 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 dark:border-stone-600 dark:bg-stone-800/80">
											<Icon className="size-7" aria-hidden />
										</div>
										<Card.Title className="mt-4 font-display font-semibold text-foreground text-lg">
											{title}
										</Card.Title>
									</Card.Header>
									<Card.Content className="flex flex-1 flex-col p-6 pt-3">
										<Card.Description className="flex-1 text-muted text-sm leading-[1.7]">
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
