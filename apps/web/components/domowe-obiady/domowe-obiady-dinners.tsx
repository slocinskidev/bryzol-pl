'use client';

import { Card } from '@heroui/react/card';
import { Chip } from '@heroui/react/chip';
import {
	Calendar,
	Clock,
	Facebook,
	Mail,
	MapPin,
	Phone,
	Soup,
	Truck,
	UtensilsCrossed,
	Wallet,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ButtonAnchor } from '@/components/button-link';
import { contact } from '@/lib/contact';
import type {
	DomoweObiadyDinner,
	DomoweObiadyMenu,
} from '@/lib/domowe-obiady-dinners';

function formatDateShort(dateStr: string): string {
	const date = new Date(dateStr);
	return date.toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'short',
	});
}

function formatDateRange(start: string, end: string): string {
	const s = new Date(start);
	const e = new Date(end);
	const sDay = s.toLocaleDateString('pl-PL', { day: 'numeric' });
	const eDay = e.toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	return `${sDay}–${eDay}`;
}

function isToday(dateStr: string): boolean {
	const today = new Date();
	const date = new Date(dateStr);
	return (
		today.getFullYear() === date.getFullYear() &&
		today.getMonth() === date.getMonth() &&
		today.getDate() === date.getDate()
	);
}

function DinnerCard({
	dinner,
	index,
}: {
	dinner: DomoweObiadyDinner;
	index: number;
}) {
	const isClosed = dinner.description != null;
	const today = isToday(dinner.date);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, delay: index * 0.06 }}
			viewport={{ once: true }}
		>
			<Card
				className={`group relative overflow-hidden border transition-all duration-200 ${
					today
						? 'border-accent bg-accent/5 shadow-md ring-1 ring-accent/20 dark:bg-accent/10'
						: isClosed
							? 'border-border/30 bg-surface/20 opacity-50'
							: 'border-border/50 bg-surface/60 hover:border-accent/30 hover:shadow-sm dark:bg-surface-secondary/40'
				}`}
			>
				{today && (
					<div className="absolute top-0 right-0 left-0 h-0.5 bg-accent" />
				)}

				<Card.Content className="p-0">
					{/* Day header */}
					<div className="flex items-baseline justify-between gap-3 px-5 pt-5 pb-3">
						<div className="flex items-center gap-2.5">
							<h3 className="font-display font-semibold text-foreground text-xl tracking-tight">
								{dinner.day}
							</h3>
							{today && (
								<Chip size="sm" color="accent" variant="soft">
									Dzisiaj
								</Chip>
							)}
							{isClosed && (
								<Chip size="sm" color="danger" variant="soft">
									Nieczynne
								</Chip>
							)}
						</div>
						<time className="text-muted text-sm tabular-nums">
							{formatDateShort(dinner.date)}
						</time>
					</div>

					{/* Menu items */}
					{!isClosed && (
						<div className="space-y-0 border-border/30 border-t px-5 pt-3 pb-5">
							{dinner.soup && (
								<div className="flex gap-3 py-2">
									<Soup className="mt-0.5 size-4 shrink-0 text-accent/70" />
									<div className="min-w-0">
										<p className="font-medium text-[11px] text-accent uppercase tracking-widest">
											Zupa
										</p>
										<p className="text-foreground leading-snug">
											{dinner.soup}
										</p>
									</div>
								</div>
							)}
							{dinner.set1 && (
								<div className="flex gap-3 border-border/20 border-t py-2">
									<UtensilsCrossed className="mt-0.5 size-4 shrink-0 text-accent/70" />
									<div className="min-w-0">
										<p className="font-medium text-[11px] text-accent uppercase tracking-widest">
											Zestaw 1
										</p>
										<p className="text-foreground leading-snug">
											{dinner.set1}
										</p>
									</div>
								</div>
							)}
							{dinner.set2 && (
								<div className="flex gap-3 border-border/20 border-t py-2">
									<UtensilsCrossed className="mt-0.5 size-4 shrink-0 text-muted/50" />
									<div className="min-w-0">
										<p className="font-medium text-[11px] text-muted uppercase tracking-widest">
											Zestaw 2
										</p>
										<p className="text-muted leading-snug">{dinner.set2}</p>
									</div>
								</div>
							)}
						</div>
					)}
				</Card.Content>
			</Card>
		</motion.div>
	);
}

export function DomoweObiadyDinners({ menu }: { menu: DomoweObiadyMenu }) {
	return (
		<div className="space-y-10">
			{/* Week banner — editorial style */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center"
			>
				<div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-accent">
					<Calendar className="size-4" />
					<span className="font-medium text-sm uppercase tracking-wide">
						Menu na tydzień
					</span>
				</div>
				<p className="mt-3 font-bold font-display text-3xl text-foreground tracking-tight md:text-4xl">
					{formatDateRange(menu.weekStart, menu.weekEnd)}
				</p>
				<div
					className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-accent"
					aria-hidden
				/>
			</motion.div>

			{/* Weekly menu cards — the star of the page */}
			<section aria-label="Menu tygodniowe">
				<div className="grid gap-4 sm:grid-cols-2">
					{menu.dinners.map((dinner, index) => (
						<DinnerCard key={dinner.date} dinner={dinner} index={index} />
					))}
				</div>
			</section>

			{/* Ordering info — compact supporting strip */}
			<motion.section
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				aria-label="Jak zamówić"
				className="rounded-2xl border border-border/50 bg-surface/50 p-6 dark:bg-surface-secondary/30"
			>
				<h3 className="mb-5 font-display font-semibold text-foreground text-lg">
					Jak zamówić
				</h3>
				<div className="grid gap-x-8 gap-y-4 sm:grid-cols-3">
					<div className="flex items-start gap-3">
						<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
							<UtensilsCrossed className="size-4" />
						</div>
						<div>
							<p className="font-medium text-foreground text-sm">
								Wybierz zestaw dnia
							</p>
							<p className="text-muted text-xs">
								Zupa + drugie danie, codziennie inne menu.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3">
						<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
							<Clock className="size-4" />
						</div>
						<div>
							<p className="font-medium text-foreground text-sm">
								Zamów do 9:00
							</p>
							<p className="text-muted text-xs">
								Zamówienia przyjmujemy do godziny 9:00.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3">
						<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
							<Wallet className="size-4" />
						</div>
						<div>
							<p className="font-medium text-foreground text-sm">
								33,00 zł za zestaw
							</p>
							<p className="text-muted text-xs">Zupa i drugie danie w cenie.</p>
						</div>
					</div>
				</div>

				<hr className="my-5 border-border/40" />

				<div className="grid gap-4 sm:grid-cols-2">
					<div className="flex items-start gap-3">
						<MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
						<div>
							<p className="font-medium text-foreground text-sm">
								Odbiór osobisty — {contact.address}
							</p>
							<p className="text-muted text-xs">Do odbioru od godziny 13:00.</p>
						</div>
					</div>
					<div className="flex items-start gap-3">
						<Truck className="mt-0.5 size-4 shrink-0 text-accent" />
						<div>
							<p className="font-medium text-foreground text-sm">
								Dowóz na terenie Żor — darmowy
							</p>
							<p className="text-muted text-xs">
								Dla innych miejscowości koszt ustalamy indywidualnie.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-5 flex flex-wrap gap-2">
					<ButtonAnchor
						href={`tel:${contact.phone.replace(/\s/g, '')}`}
						size="sm"
					>
						<Phone className="mr-1.5 size-4" />
						{contact.phone}
					</ButtonAnchor>
					<ButtonAnchor
						href={`mailto:${contact.email}`}
						size="sm"
						variant="secondary"
					>
						<Mail className="mr-1.5 size-4" />
						{contact.email}
					</ButtonAnchor>
					<ButtonAnchor
						href={contact.facebookUrl}
						size="sm"
						variant="secondary"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Facebook className="mr-1.5 size-4" />
						Facebook
					</ButtonAnchor>
				</div>
			</motion.section>
		</div>
	);
}
