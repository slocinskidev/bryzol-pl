'use client';

import { Surface } from '@heroui/react/surface';
import { ThemeToggle } from '@workspace/ui/components/theme-toggle';
import { cn } from '@workspace/ui/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import logo from '@/assets/logo-simple.png';
import { ButtonLink } from '@/components/button-link';
import { type NavigationItem, navigationItems } from './constants';
import { useActiveItemRect } from './hooks/use-active-item-rect';
import { useActiveSection } from './hooks/use-active-section';
import { NavigationDrawer } from './navigation-drawer';

export function Navigation() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
	const router = useRouter();

	const activeSection = useActiveSection();
	const activeItemRect = useActiveItemRect(activeSection, navRefs);

	const handleItemClick = (href: string) => {
		router.push(href);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-6 right-6 left-6 z-50"
			aria-label="Main navigation"
		>
			<div className="mx-auto max-w-7xl">
				<Surface
					variant="transparent"
					className="flex items-center justify-between rounded-2xl border border-border bg-surface/95 px-6 py-3 shadow-xl backdrop-blur-md dark:bg-surface-secondary/90"
				>
					<NavigationLogo onClick={() => router.push('/')} />
					<DesktopNavigation
						items={navigationItems}
						activeSection={activeSection}
						activeItemRect={activeItemRect}
						navRefs={navRefs}
						onItemClick={handleItemClick}
					/>
					<NavigationActions
						mobileNavOpen={mobileNavOpen}
						onMobileNavChange={setMobileNavOpen}
						activeSection={activeSection}
						onItemClick={handleItemClick}
					/>
				</Surface>
			</div>
		</motion.nav>
	);
}

function NavigationLogo({ onClick }: { onClick: () => void }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="flex cursor-pointer items-center gap-3"
			onClick={onClick}
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="flex size-10 items-center justify-center rounded-md bg-accent shadow-lg"
			>
				<Image
					src={logo}
					alt="Bryzol Catering"
					width={40}
					height={40}
					className="size-8 object-contain"
				/>
			</motion.div>
			<span className="font-bold text-foreground text-xl">Bryzol</span>
		</motion.div>
	);
}

function DesktopNavigation({
	items,
	activeSection,
	activeItemRect,
	navRefs,
	onItemClick,
}: {
	items: NavigationItem[];
	activeSection: string;
	activeItemRect: { left: number; width: number };
	navRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>;
	onItemClick: (href: string) => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.4 }}
			className="nav-container relative hidden items-center gap-x-1 xl:flex"
		>
			<motion.div
				className="absolute bottom-0 h-0.5 rounded-full bg-accent"
				initial={{ width: 0, left: 0 }}
				animate={{
					width: activeItemRect.width,
					left: activeItemRect.left,
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			/>

			{items.map((item, index) => (
				<NavigationItemComponent
					key={item.id}
					item={item}
					index={index}
					isActive={activeSection === item.id}
					navRefs={navRefs}
					onClick={() => onItemClick(item.href)}
				/>
			))}
		</motion.div>
	);
}

function NavigationItemComponent({
	item,
	index,
	isActive,
	navRefs,
	onClick,
}: {
	item: NavigationItem;
	index: number;
	isActive: boolean;
	navRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>;
	onClick: () => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			className="relative"
		>
			<motion.button
				ref={(el) => {
					navRefs.current[item.id] = el;
				}}
				type="button"
				onClick={onClick}
				className={cn(
					'relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-bold text-sm transition-all duration-300',
					'text-foreground hover:text-accent',
					isActive && 'text-accent',
				)}
				whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
				whileTap={{ scale: 0.95 }}
			>
				<motion.div
					className="absolute inset-0 rounded-lg bg-accent/10"
					initial={{ scale: 0, opacity: 0 }}
					whileHover={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.2 }}
				/>
				<span className="relative z-10">{item.label}</span>
			</motion.button>
		</motion.div>
	);
}

function NavigationActions({
	mobileNavOpen,
	onMobileNavChange,
	activeSection,
	onItemClick,
}: {
	mobileNavOpen: boolean;
	onMobileNavChange: (open: boolean) => void;
	activeSection: string;
	onItemClick: (href: string) => void;
}) {
	const isContactActive = activeSection === 'kontakt';

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.6 }}
			className="flex items-center gap-4"
		>
			<ThemeToggle className="hidden xl:flex" />
			<ButtonLink
				href="/kontakt"
				size="sm"
				variant={isContactActive ? 'secondary' : 'primary'}
				className="hidden shrink-0 xl:flex"
			>
				Kontakt
			</ButtonLink>

			<NavigationDrawer
				open={mobileNavOpen}
				onOpenChange={onMobileNavChange}
				activeSection={activeSection}
				onItemClick={onItemClick}
			/>
		</motion.div>
	);
}
