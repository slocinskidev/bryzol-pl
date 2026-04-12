'use client';

import { Card } from '@heroui/react/card';
import {
	Facebook,
	Instagram,
	Landmark,
	Mail,
	MapPin,
	Navigation,
	Phone,
	UtensilsCrossed,
} from 'lucide-react';
import { motion } from 'motion/react';
import { contact } from '@/lib/contact';

export function ContactInfoPanel() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			className="flex-1 overflow-y-auto md:absolute md:top-28 md:bottom-auto md:left-6 md:z-10 md:w-96 md:overflow-visible"
		>
			<Card className="rounded-none border-border border-x-0 border-t border-b-0 bg-surface md:rounded-xl md:border md:bg-surface/95 md:shadow-2xl md:backdrop-blur-md md:dark:bg-surface-secondary/95">
				<Card.Content className="space-y-5 p-5">
					<h1 className="font-bold font-display text-2xl text-foreground">
						Kontakt
					</h1>

					<div className="space-y-3">
						<a
							href={`tel:${contact.phone.replace(/\s/g, '')}`}
							className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
						>
							<Phone className="size-5 shrink-0 text-accent" />
							<span className="font-medium">{contact.phone}</span>
						</a>
						<a
							href={`mailto:${contact.email}`}
							className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
						>
							<Mail className="size-5 shrink-0 text-accent" />
							<span className="font-medium">{contact.email}</span>
						</a>
						<a
							href={contact.directionsUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
						>
							<MapPin className="size-5 shrink-0 text-accent" />
							<span>{contact.address}</span>
						</a>
						<div className="flex items-center gap-3 pl-8 text-muted text-sm">
							<Navigation className="size-4 shrink-0 text-accent/60" />
							<span>za kinem &ldquo;na starówce&rdquo;</span>
						</div>
					</div>

					<a
						href={contact.directionsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-medium text-accent-foreground text-sm transition hover:bg-accent-hover"
					>
						<MapPin className="size-4" />
						Jak dojechać
					</a>

					<hr className="border-border" />

					<div>
						<h2 className="mb-2 flex items-center gap-2 font-semibold text-foreground text-sm">
							<UtensilsCrossed className="size-4 text-accent" />
							Zwrot naczyń
						</h2>
						<p className="text-muted text-sm">{contact.dishReturnInfo}</p>
					</div>

					<div>
						<h2 className="mb-2 flex items-center gap-2 font-semibold text-foreground text-sm">
							<Landmark className="size-4 text-accent" />
							Numer konta
						</h2>
						<p className="font-medium text-foreground text-sm">
							{contact.bankName}
						</p>
						<p className="font-mono text-muted text-sm">
							{contact.bankAccount}
						</p>
					</div>

					<hr className="border-border" />

					<div className="flex items-center gap-3">
						<a
							href={contact.facebookUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
							aria-label="Facebook"
						>
							<Facebook className="size-5" />
						</a>
						<a
							href={contact.instagramUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
							aria-label="Instagram"
						>
							<Instagram className="size-5" />
						</a>
					</div>
				</Card.Content>
			</Card>
		</motion.div>
	);
}
