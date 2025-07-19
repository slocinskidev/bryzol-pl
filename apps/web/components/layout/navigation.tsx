"use client";

import { Button } from "@workspace/ui/components/button";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-simple.png";
import { NavigationDrawer } from "./navigation-drawer";

const navigationItems = [
	{ href: "#home", label: "Strona główna", id: "home" },
	{ href: "#about", label: "O nas", id: "about" },
	{ href: "#services", label: "Usługi", id: "services" },
	{ href: "#menu", label: "Menu", id: "menu" },
	{ href: "#contact", label: "Kontakt", id: "contact" },
];

export function Navigation() {
	const [activeSection, setActiveSection] = useState("home");
	const [activeItemRect, setActiveItemRect] = useState({ left: 0, width: 0 });
	const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "about", "services", "menu", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element && element.offsetTop <= scrollPosition) {
					setActiveSection(section);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const activeRef = navRefs.current[activeSection];
		if (activeRef) {
			const rect = activeRef.getBoundingClientRect();
			const navContainer = activeRef.closest(".nav-container");
			if (navContainer) {
				const containerRect = navContainer.getBoundingClientRect();
				setActiveItemRect({
					left: rect.left - containerRect.left,
					width: rect.width,
				});
			}
		}
	}, [activeSection]);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-6 left-6 right-6 z-50"
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 shadow-xl bg-gray-50/95 border dark:bg-black/90">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex items-center gap-3 cursor-pointer"
						onClick={() => scrollToSection("#home")}
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

						{navigationItems.map((item, index) => (
							<motion.div
								key={item.id}
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
									onClick={() => scrollToSection(item.href)}
									className={cn(
										"text-sm font-bold transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg relative overflow-hidden",
										"text-gray-900 dark:text-white hover:text-primary",
										activeSection === item.id && "text-primary",
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
						))}
					</motion.div>

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
							navigationItems={navigationItems}
							activeSection={activeSection}
							onItemClick={scrollToSection}
						/>
					</motion.div>
				</div>
			</div>
		</motion.nav>
	);
}
