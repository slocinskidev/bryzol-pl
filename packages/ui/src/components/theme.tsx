"use client";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<motion.button
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="fixed top-6 right-6 z-50 rounded-full border border-gray-300 bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl dark:border-gray-700 dark:bg-black/80 dark:hover:bg-black"
		>
			<motion.div
				initial={false}
				animate={{ rotate: theme === "dark" ? 180 : 0 }}
				transition={{ duration: 0.3 }}
			>
				{theme === "dark" ? (
					<Sun className="h-4 w-4 text-yellow-500" />
				) : (
					<Moon className="h-4 w-4 text-gray-700" />
				)}
			</motion.div>
		</motion.button>
	);
}
