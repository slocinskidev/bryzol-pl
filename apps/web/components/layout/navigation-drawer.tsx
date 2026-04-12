'use client';

import { Button } from '@heroui/react/button';
import { Chip } from '@heroui/react/chip';
import { Drawer } from '@heroui/react/drawer';
import { ThemeToggle } from '@workspace/ui/components/theme-toggle';
import { cn } from '@workspace/ui/lib/utils';
import { Facebook, Instagram, Menu, Phone } from 'lucide-react';
import Image from 'next/image';

import logo from '@/assets/logo-simple.png';
import { contact } from '@/lib/contact';
import { type NavigationItem, navigationItems } from './constants';

interface NavigationDrawerProps {
	activeSection: string;
	onItemClick: (href: string) => void;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function NavigationDrawer({
	activeSection,
	onItemClick,
	open,
	onOpenChange,
}: NavigationDrawerProps) {
	const navigate = (href: string) => {
		onOpenChange(false);
		setTimeout(() => {
			onItemClick(href);
		}, 300);
	};

	return (
		<>
			<Button
				variant="ghost"
				size="sm"
				className="xl:hidden"
				onPress={() => onOpenChange(true)}
			>
				<Menu />
				<span>Menu</span>
			</Button>

			<Drawer.Backdrop isOpen={open} onOpenChange={onOpenChange} variant="blur">
				<Drawer.Content placement="bottom">
					<Drawer.Dialog>
						<Drawer.Handle />
						<Drawer.Header>
							<Drawer.Heading className="sr-only">Nawigacja</Drawer.Heading>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div className="flex size-12 items-center justify-center rounded-md bg-accent shadow-lg">
										<Image
											src={logo}
											alt="Bryzol Catering"
											width={48}
											height={48}
											className="size-10 object-contain"
										/>
									</div>
									<span className="font-bold text-2xl text-accent">Bryzol</span>
								</div>

								<ThemeToggle />
							</div>
						</Drawer.Header>

						<Drawer.Body className="flex flex-col gap-3 px-4 pt-4 pb-8">
							<nav className="flex flex-col gap-1.5">
								{navigationItems.map((item) => (
									<DrawerNavItem
										key={item.id}
										item={item}
										isActive={activeSection === item.id}
										onNavigate={navigate}
									/>
								))}
							</nav>

							<hr className="border-border" />

							<button
								type="button"
								onClick={() => navigate('/kontakt')}
								className={cn(
									'flex items-center gap-3 rounded-xl px-4 py-3.5 text-left font-medium text-base transition-colors',
									activeSection === 'kontakt'
										? 'bg-accent/10 text-accent'
										: 'text-foreground hover:bg-muted/10',
								)}
							>
								<Phone
									className={cn(
										'size-5 shrink-0',
										activeSection === 'kontakt' ? 'text-accent' : 'text-muted',
									)}
								/>
								Kontakt
							</button>

							<hr className="border-border" />

							<div className="flex items-center gap-3 px-4 pt-1">
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
						</Drawer.Body>
					</Drawer.Dialog>
				</Drawer.Content>
			</Drawer.Backdrop>
		</>
	);
}

function DrawerNavItem({
	item,
	isActive,
	onNavigate,
}: {
	item: NavigationItem;
	isActive: boolean;
	onNavigate: (href: string) => void;
}) {
	const Icon = item.icon;

	return (
		<button
			type="button"
			onClick={() => onNavigate(item.href)}
			className={cn(
				'flex items-center gap-3 rounded-xl px-4 py-3.5 text-left font-medium text-base transition-colors',
				isActive
					? 'bg-accent/10 text-accent'
					: 'text-foreground hover:bg-muted/10',
			)}
		>
			<Icon
				className={cn(
					'size-5 shrink-0',
					isActive ? 'text-accent' : 'text-muted',
				)}
			/>
			<span className="flex-1">{item.label}</span>
			{item.badge && (
				<Chip size="sm" color="accent" variant="soft" className="scale-90">
					{item.badge}
				</Chip>
			)}
		</button>
	);
}
