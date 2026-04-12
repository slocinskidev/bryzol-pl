'use client';

import { Calendar, ChefHat, Star, Users } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

const stats = [
	{
		icon: Calendar,
		value: 10,
		suffix: '+',
		label: 'Lat doświadczenia',
	},
	{
		icon: ChefHat,
		value: 1000,
		suffix: '+',
		label: 'Przygotowanych dań',
	},
	{
		icon: Users,
		value: 500,
		suffix: '+',
		label: 'Obsłużonych wydarzeń',
	},
	{
		icon: Star,
		value: 100,
		suffix: '%',
		label: 'Zaangażowania',
	},
] as const;

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });
	const motionValue = useMotionValue(0);
	const rounded = useTransform(motionValue, (latest) => Math.round(latest));

	useEffect(() => {
		if (!isInView) return;

		motionValue.set(0);
		const animation = import('motion/react').then(({ animate }) => {
			animate(motionValue, value, {
				duration: 2,
				ease: 'easeOut',
			});
		});

		return () => {
			void animation;
		};
	}, [isInView, motionValue, value]);

	useEffect(() => {
		const unsubscribe = rounded.on('change', (latest) => {
			if (ref.current) {
				ref.current.textContent = `${latest}${suffix}`;
			}
		});
		return unsubscribe;
	}, [rounded, suffix]);

	return (
		<span ref={ref} className="tabular-nums">
			0{suffix}
		</span>
	);
}

export function StatsSection() {
	return (
		<section className="border-border border-y bg-surface/50 py-16 lg:py-20 dark:bg-surface-secondary/30">
			<div className="container mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
					{stats.map((stat, index) => {
						const Icon = stat.icon;

						return (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-accent/10">
									<Icon className="size-6 text-accent" />
								</div>
								<p className="font-bold font-display text-3xl text-foreground md:text-4xl">
									<AnimatedCounter value={stat.value} suffix={stat.suffix} />
								</p>
								<p className="mt-1 text-muted text-sm">{stat.label}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
