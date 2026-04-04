import type { DomoweObiadyDinner } from '@/lib/domowe-obiady-dinners';
import { Chip } from '@heroui/react/chip';
import { ClipboardList, Clock, Wallet, MapPin, Truck, Phone, Mail, Facebook } from 'lucide-react';
import { ButtonAnchor } from '@/components/button-link';
import { contact } from '@/lib/contact';
import type { ReactNode } from 'react';

function SoupRow({ soup }: { soup: string }) {
	return (
		<div>
			<span className="font-medium text-foreground/90">Zupa:</span> {soup}
		</div>
	);
}

function LabeledRow({ label, value }: { label: string; value: string }) {
	return (
		<div>
			<span className="font-medium text-foreground/90">{label}:</span> {value}
		</div>
	);
}

function StepCard({
	icon,
	step,
	title,
	description,
}: {
	icon: ReactNode;
	step: number;
	title: string;
	description: string;
}) {
	return (
		<div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-3">
			<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
				{icon}
			</div>
			<div>
				<p className="text-foreground/60 text-xs uppercase tracking-wide">
					Krok {step}
				</p>
				<p className="mt-0.5 font-semibold text-foreground text-sm">{title}</p>
				<p className="mt-0.5 text-muted text-xs">{description}</p>
			</div>
		</div>
	);
}

function InfoCard({
	icon,
	title,
	description,
}: {
	icon: ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-3">
			<div className="mt-0.5 shrink-0 text-accent">{icon}</div>
			<div>
				<p className="font-medium text-foreground text-sm">{title}</p>
				<p className="mt-0.5 text-muted text-xs">{description}</p>
			</div>
		</div>
	);
}

export function DomoweObiadyDinners({ dinners }: { dinners: readonly DomoweObiadyDinner[] }) {
	return (
		<div>
			{/* 3-step flow */}
			<section
				className="rounded-xl border border-border/70 bg-default/30 p-4 md:p-5"
				aria-label="Jak zamówić"
			>
				<p className="mb-3 font-medium text-foreground">Jak zamówić</p>
				<div className="grid gap-2 sm:grid-cols-3">
					<StepCard
						icon={<ClipboardList className="h-5 w-5" />}
						step={1}
						title="Wybierz zestaw dnia"
						description="Zupa + drugie danie — codziennie inne menu."
					/>
					<StepCard
						icon={<Clock className="h-5 w-5" />}
						step={2}
						title="Zamów do 9:00"
						description="Zamówienia przyjmujemy do godziny 9:00."
					/>
					<StepCard
						icon={<Wallet className="h-5 w-5" />}
						step={3}
						title="33,00 zł za zestaw"
						description="Zupa i drugie danie w cenie."
					/>
				</div>
			</section>

			{/* Logistics & contact */}
			<section
				className="mt-3 rounded-xl border border-border/70 bg-default/30 p-4 md:p-5"
				aria-label="Odbiór i kontakt"
			>
				<p className="mb-3 font-medium text-foreground">Odbiór i kontakt</p>
				<div className="grid gap-2 sm:grid-cols-2">
					<InfoCard
						icon={<MapPin className="h-5 w-5" />}
						title={`Odbiór osobisty — ${contact.address}`}
						description="Zamówienia do odbioru od godziny 13:00."
					/>
					<InfoCard
						icon={<Truck className="h-5 w-5" />}
						title="Dowóz na terenie Żor — DARMOWY"
						description="Dla innych miejscowości koszt ustalamy indywidualnie."
					/>
				</div>
				<div className="mt-3 flex flex-wrap gap-2">
					<ButtonAnchor
						href={`tel:${contact.phone.replace(/\s/g, '')}`}
						size="sm"
					>
						<Phone className="mr-1.5 h-4 w-4" />
						{contact.phone}
					</ButtonAnchor>
					<ButtonAnchor
						href={`mailto:${contact.email}`}
						size="sm"
						variant="secondary"
					>
						<Mail className="mr-1.5 h-4 w-4" />
						{contact.email}
					</ButtonAnchor>
					<ButtonAnchor
						href={contact.facebookUrl}
						size="sm"
						variant="secondary"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Facebook className="mr-1.5 h-4 w-4" />
						Facebook
					</ButtonAnchor>
				</div>
			</section>

			{/* Weekly menu */}
			<ul className="mt-6 space-y-0 md:mt-7" aria-label="Pozycje: Menu tygodniowe">
				{dinners.map((dinner) => {
					const isClosed = dinner.description != null;
					const hasSoup = dinner.soup != null;
					const hasSet1 = dinner.set1 != null;
					const hasSet2 = dinner.set2 != null;

					return (
						<li
							key={dinner.day}
							className="-mx-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-md border-border/50 border-b px-2 py-3.5 last:border-0 hover:bg-default/25 motion-safe:transition-colors sm:py-3"
						>
							<div className="min-w-0 flex-1">
								<div className="flex flex-wrap items-center gap-2">
									<div className="font-medium text-foreground">{dinner.day}</div>
									{isClosed ? (
										<Chip size="sm" color="danger" variant="soft">
											Nieczynne
										</Chip>
									) : null}
								</div>
								<div className="mt-1 text-muted text-sm leading-relaxed md:text-base">
									{isClosed ? (
										<div>{dinner.description}</div>
									) : (
										<>
											{hasSoup ? <SoupRow soup={dinner.soup as string} /> : null}
											{hasSet1 ? <LabeledRow label="Zestaw 1" value={dinner.set1 as string} /> : null}
											{hasSet2 ? <LabeledRow label="Zestaw 2" value={dinner.set2 as string} /> : null}
										</>
									)}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
