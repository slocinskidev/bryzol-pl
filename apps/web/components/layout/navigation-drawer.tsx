"use client";

import { Button } from "@workspace/ui/components/button";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@workspace/ui/components/drawer";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";
import { cn } from "@workspace/ui/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-simple.png";

interface NavigationItem {
	href: string;
	label: string;
	id: string;
}

interface NavigationDrawerProps {
	navigationItems: NavigationItem[];
	activeSection: string;
	onItemClick: (href: string) => void;
}

export function NavigationDrawer({
	navigationItems,
	activeSection,
	onItemClick,
}: NavigationDrawerProps) {
	return (
		<Drawer>
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
							<div className="bg-primary size-12 rounded-md flex items-center justify-center shadow-lg">
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

				<div className="px-6 pb-6 flex flex-col gap-2 overflow-y-auto">
					{navigationItems.map((item) => (
						<Button
							variant="ghost"
							size="lg"
							key={item.id}
							onClick={() => onItemClick(item.href)}
							className={cn(
								"justify-start",
								activeSection === item.id && "text-primary",
							)}
						>
							{item.label}
						</Button>
					))}

					<Button size="lg">Zamów teraz</Button>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
