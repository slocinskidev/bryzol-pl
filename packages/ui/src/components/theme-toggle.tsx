"use client";
import { Button } from "@workspace/ui/components/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
	className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Button variant="ghost" size="icon" asChild className={className}>
			<motion.button
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				<motion.div
					initial={false}
					animate={{ rotate: theme === "dark" ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					{theme === "dark" ? <Sun /> : <Moon />}
				</motion.div>
			</motion.button>
		</Button>
	);
}
