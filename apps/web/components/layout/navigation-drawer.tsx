'use client';

import { Button } from '@workspace/ui/components/button';
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@workspace/ui/components/drawer';
import { ThemeToggle } from '@workspace/ui/components/theme-toggle';
import { cn } from '@workspace/ui/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';

import logo from '@/assets/logo-simple.png';
import type { NavigationItem } from './constants';

interface NavigationDrawerProps {
	navigationItems: readonly NavigationItem[];
	activeSection: string;
	onItemClick: (href: string) => void;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function NavigationDrawer({
	navigationItems,
	activeSection,
	onItemClick,
	open,
	onOpenChange,
}: NavigationDrawerProps) {
	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="sm" className="lg:hidden">
					<Menu />
					<span>Menu</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle className="sr-only">Nawigacja</DrawerTitle>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="flex size-12 items-center justify-center rounded-md bg-primary shadow-lg">
								<Image
									src={logo}
									alt="Bryzol Catering"
									width={48}
									height={48}
									className="size-10 object-contain"
								/>
							</div>
							<span className="font-bold text-2xl text-primary">Bryzol</span>
						</div>

						<ThemeToggle />
					</div>
				</DrawerHeader>

				<div className="flex flex-col gap-4 px-6 pb-6">
					<div className="flex flex-col gap-1 overflow-y-auto">
						{navigationItems.map((item) => (
							<Button
								variant="ghost"
								size="lg"
								key={item.id}
								onClick={() => {
									onOpenChange(false);
									setTimeout(() => {
										onItemClick(item.href);
									}, 300);
								}}
								className={cn(
									'h-12 justify-start',
									activeSection === item.id && 'text-primary',
								)}
							>
								{item.label}
							</Button>
						))}
					</div>

					<Button
						size="lg"
						onClick={() => {
							onOpenChange(false);
							setTimeout(() => {
								onItemClick('/kontakt');
							}, 300);
						}}
					>
						Zapytaj o ofertę
					</Button>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
