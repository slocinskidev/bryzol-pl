'use client';

import { Card } from '@heroui/react/card';
import { Chip } from '@heroui/react/chip';
import {
	ChefHat,
	Mail,
	Phone,
	Salad,
	Soup,
	UtensilsCrossed,
	Wine,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { ButtonAnchor } from '@/components/button-link';
import { contact } from '@/lib/contact';
import type { OfferSection } from '@/lib/offer';

const sectionMeta: Record<
	string,
	{ icon: ElementType; accent: string; iconBg: string }
> = {
	obiad: {
		icon: ChefHat,
		accent: 'text-accent',
		iconBg: 'bg-accent/10',
	},
	przekaski: {
		icon: UtensilsCrossed,
		accent: 'text-accent',
		iconBg: 'bg-accent/10',
	},
	salatki: {
		icon: Salad,
		accent: 'text-accent',
		iconBg: 'bg-accent/10',
	},
	'kolacja-dania': {
		icon: Soup,
		accent: 'text-accent',
		iconBg: 'bg-accent/10',
	},
	'zestaw-kolacyjny': {
		icon: Wine,
		accent: 'text-accent',
		iconBg: 'bg-accent/10',
	},
};

function PricingCard({
	title,
	price,
	note,
	icon: Icon,
	featured,
	sectionId,
}: {
	title: string;
	price: string;
	note?: string;
	icon: ElementType;
	featured?: boolean;
	sectionId: string;
}) {
	const scrollTo = () => {
		const el = document.getElementById(sectionId);
		el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<button type="button" onClick={scrollTo} className="text-left">
			<Card
				className={`cursor-pointer border p-0 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
					featured
						? 'border-accent/40 bg-accent/5 shadow-sm hover:border-accent/60 dark:bg-accent/10'
						: 'border-border/50 bg-surface/60 hover:border-accent/30 dark:bg-surface-secondary/40'
				}`}
			>
				<Card.Content className="flex flex-col items-center gap-2 px-4 py-5">
					<div
						className={`flex size-10 items-center justify-center rounded-lg ${featured ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent'}`}
					>
						<Icon className="size-5" />
					</div>
					<p className="font-medium text-foreground text-sm">{title}</p>
					<p className="font-bold font-display text-2xl text-foreground">
						{price}
					</p>
					{note && <p className="text-muted text-xs">{note}</p>}
				</Card.Content>
			</Card>
		</button>
	);
}

function MenuSection({
	section,
	index,
}: {
	section: OfferSection;
	index: number;
}) {
	const meta = sectionMeta[section.id] ?? {
		icon: ChefHat,
		accent: 'text-accent',
		iconBg: 'bg-accent/10',
	};
	const Icon = meta.icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.05 }}
			viewport={{ once: true }}
		>
			<div
				id={section.id}
				className="scroll-mt-28 rounded-xl border border-border/50 bg-surface/40 dark:bg-surface-secondary/20"
			>
				{/* Section header */}
				<div className="flex items-center gap-3 border-border/30 border-b px-5 py-4">
					<div
						className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${meta.iconBg}`}
					>
						<Icon className={`size-5 ${meta.accent}`} />
					</div>
					<div className="min-w-0 flex-1">
						<h3 className="font-display font-semibold text-foreground text-lg">
							{section.title}
						</h3>
						{section.description && (
							<p className="text-muted text-sm">{section.description}</p>
						)}
					</div>
					{section.meta?.priceNote && (
						<Chip size="sm" color="accent" variant="soft" className="shrink-0">
							{section.meta.priceNote}
						</Chip>
					)}
				</div>

				{/* Categories & items */}
				<div className="p-5">
					{section.categories.map((category) => (
						<div key={category.id} className="mb-4 last:mb-0">
							<div className="mb-2 flex items-baseline justify-between gap-2">
								<h4 className="font-medium text-foreground text-sm uppercase tracking-wide">
									{category.title}
								</h4>
								{category.note && (
									<span className="text-muted text-xs italic">
										{category.note}
									</span>
								)}
							</div>
							<ul className="space-y-1">
								{category.items.map((item) => (
									<li
										key={item.id}
										className="flex items-baseline justify-between gap-3 rounded-md px-2 py-1.5 text-sm hover:bg-default/20 motion-safe:transition-colors"
									>
										<span className="text-foreground">{item.name}</span>
										<span className="shrink-0 text-muted text-xs tabular-nums">
											{item.price != null
												? `${item.price} zł${item.unit ? `/${item.unit}` : ''}`
												: (item.description ?? '')}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export function KomunijnaMenu({ sections }: { sections: OfferSection[] }) {
	return (
		<div className="space-y-10">
			{/* Pricing overview */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<p className="mb-4 text-center font-medium text-muted text-sm uppercase tracking-wide">
					Ile to kosztuje
				</p>
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
					<PricingCard
						title="Obiad"
						price="123 zł"
						note="na osobę"
						icon={ChefHat}
						sectionId="obiad"
						featured
					/>
					<PricingCard
						title="Przekąski"
						price="75 zł"
						note="8 szt. / os."
						icon={UtensilsCrossed}
						sectionId="przekaski"
					/>
					<PricingCard
						title="Sałatki"
						price="wycena"
						note="miska na 6 os."
						icon={Salad}
						sectionId="salatki"
					/>
					<PricingCard
						title="Kolacja"
						price="od 25 zł"
						note="za porcję"
						icon={Soup}
						sectionId="kolacja-dania"
					/>
					<PricingCard
						title="Zestaw kolacyjny"
						price="65 zł"
						note="na osobę"
						icon={Wine}
						sectionId="zestaw-kolacyjny"
					/>
				</div>
			</motion.div>

			{/* Detailed menu sections */}
			<div className="space-y-4">
				<p className="text-center font-medium text-muted text-sm uppercase tracking-wide">
					Co przygotujemy
				</p>
				{sections.map((section, index) => (
					<MenuSection key={section.id} section={section} index={index} />
				))}
			</div>

			{/* CTA */}
			<motion.section
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 p-6 text-center md:p-8"
			>
				<h3 className="font-display font-semibold text-foreground text-xl">
					Powiedz nam ile gości — resztą się zajmiemy
				</h3>
				<p className="mx-auto mt-2 max-w-md text-muted text-sm">
					Zadzwoń lub napisz. Dopasujemy menu do liczby osób i przygotujemy
					wycenę — bez zobowiązań.
				</p>
				<div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<ButtonAnchor
						href={`tel:${contact.phone.replace(/\s/g, '')}`}
						size="lg"
					>
						<Phone className="mr-2 size-5" />
						{contact.phone}
					</ButtonAnchor>
					<ButtonAnchor
						href={`mailto:${contact.email}`}
						size="lg"
						variant="secondary"
					>
						<Mail className="mr-2 size-5" />
						{contact.email}
					</ButtonAnchor>
				</div>
			</motion.section>
		</div>
	);
}
