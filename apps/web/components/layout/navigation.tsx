"use client";

import { Button } from "@workspace/ui/components/button";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import logo from "@/assets/logo-simple.png";
import { type NavigationItem, navigationItems } from "./constants";
import { useActiveItemRect } from "./hooks/use-active-item-rect";
import { useActiveSection } from "./hooks/use-active-section";
import { NavigationDrawer } from "./navigation-drawer";

export function Navigation() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

	const activeSection = useActiveSection();
	const activeItemRect = useActiveItemRect(activeSection, navRefs);

	const scrollToSection = (href: string) => {
		try {
			const element = document.querySelector(href);
			if (element) {
				const elementTop = element.getBoundingClientRect().top + window.scrollY;
				window.scrollTo({
					top: elementTop,
					behavior: "smooth",
				});
			}
		} catch (error) {
			console.warn(`Failed to scroll to section ${href}:`, error);
		}
	};

	const handleLogoClick = () => scrollToSection("#home");

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-6 left-6 right-6 z-50"
			aria-label="Main navigation"
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 shadow-xl bg-gray-50/95 border dark:bg-black/90">
					<NavigationLogo onClick={handleLogoClick} />
					<DesktopNavigation
						items={navigationItems}
						activeSection={activeSection}
						activeItemRect={activeItemRect}
						navRefs={navRefs}
						onItemClick={scrollToSection}
					/>
					<NavigationActions
						mobileNavOpen={mobileNavOpen}
						onMobileNavChange={setMobileNavOpen}
						navigationItems={navigationItems}
						activeSection={activeSection}
						onItemClick={scrollToSection}
					/>
				</div>
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
			className="flex items-center gap-3 cursor-pointer"
			onClick={onClick}
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="bg-primary size-10 rounded-md flex items-center justify-center shadow-lg"
			>
				<Image
					src={logo}
					alt="Bryzol Catering"
					width={40}
					height={40}
					className="size-8 object-contain"
				/>
			</motion.div>
			<span className="font-bold text-xl text-gray-900 dark:text-white">
				Bryzol
			</span>
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
	items: readonly NavigationItem[];
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
			className="hidden lg:flex items-center gap-8 nav-container relative"
		>
			<motion.div
				className="absolute bottom-0 h-0.5 bg-primary rounded-full"
				initial={{ width: 0, left: 0 }}
				animate={{
					width: activeItemRect.width,
					left: activeItemRect.left,
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 30,
				}}
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
				onKeyDown={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();
						onClick();
					}
				}}
				className={cn(
					"text-sm font-bold transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg relative overflow-hidden",
					"text-gray-900 dark:text-white hover:text-primary",
					isActive && "text-primary",
				)}
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.95 }}
			>
				<motion.div
					className="absolute inset-0 bg-primary/10 rounded-lg"
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
	navigationItems,
	activeSection,
	onItemClick,
}: {
	mobileNavOpen: boolean;
	onMobileNavChange: (open: boolean) => void;
	navigationItems: readonly NavigationItem[];
	activeSection: string;
	onItemClick: (href: string) => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.6 }}
			className="flex items-center gap-4"
		>
			<ThemeToggle className="hidden lg:flex" />
			<Button size="sm" className="hidden md:flex">
				Zamów teraz
			</Button>

			<NavigationDrawer
				open={mobileNavOpen}
				onOpenChange={onMobileNavChange}
				navigationItems={navigationItems}
				activeSection={activeSection}
				onItemClick={onItemClick}
			/>
		</motion.div>
	);
}
