"use client";

import { Spotlight } from "@workspace/ui/components/spotlight";
import { ThemeToggle } from "@workspace/ui/components/theme";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import logo from "@/assets/logo.png";

export default function Hero() {
	return (
		<div className="relative min-h-screen bg-gray-50 dark:bg-black font-inter overflow-hidden transition-colors duration-500">
			{/* Spotlight Effect - Works in both themes */}
			<div className="hidden lg:block">
				<Spotlight
					gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 85%, .12) 0, hsla(220, 100%, 55%, .04) 50%, hsla(220, 100%, 45%, 0) 80%)"
					gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .08) 0, hsla(220, 100%, 55%, .03) 80%, transparent 100%)"
					gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .06) 0, hsla(220, 100%, 45%, .02) 80%, transparent 100%)"
					lightGradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 85%, .20) 0, hsla(270, 100%, 75%, .10) 50%, hsla(220, 100%, 65%, 0) 80%)"
					lightGradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 80%, .15) 0, hsla(220, 100%, 70%, .08) 80%, transparent 100%)"
					lightGradientThird="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 80%, .12) 0, hsla(270, 100%, 70%, .06) 80%, transparent 100%)"
					translateY={-300}
					width={600}
					height={1400}
					smallWidth={280}
					duration={8}
					xOffset={120}
				/>
			</div>

			{/* Header */}
			<div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6">
				{/* Logo */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex items-center gap-3"
				>
					<Image
						src={logo}
						alt="Slocinski.dev"
						width={160}
						height={32}
						className="h-6 w-auto"
					/>
					<span className="text-lg font-bold text-gray-700 dark:text-gray-300 tracking-wide">
						SLOCINSKI.DEV
					</span>
				</motion.div>

				{/* Theme Toggle */}
				<ThemeToggle />
			</div>

			<div className="relative z-10 flex min-h-screen items-center justify-center px-6">
				<div className="text-center max-w-4xl relative">
					{/* Avatar */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mb-8 flex justify-center"
					>
						<div className="relative isolate">
							<div className="overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-lg bg-gray-50 dark:bg-black">
								<Image
									src={avatar}
									alt="Slocinski"
									width={120}
									height={120}
									className="h-24 w-24 object-cover md:h-30 md:w-30"
								/>
							</div>
						</div>
					</motion.div>

					{/* Main Description */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mb-8 space-y-6"
					>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="text-xl text-gray-700 dark:text-gray-300 md:text-2xl font-light tracking-wide"
						>
							Frontend Developer
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="relative"
						>
							<div className="absolute -inset-4 bg-gradient-to-r from-gray-400/3 via-gray-500/2 to-gray-400/3 rounded-xl blur-xl" />
							<p className="relative mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 leading-relaxed md:text-lg">
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
									Passionate
								</span>{" "}
								about building intuitive interfaces and scalable systems. I{" "}
								<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
									transform ideas
								</span>{" "}
								into elegant code, specializing in{" "}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
									React, TypeScript
								</span>
								, and modern web technologies.{" "}
								<span className="italic text-gray-700 dark:text-gray-300 font-medium">
									Always learning, always creating.
								</span>
							</p>
						</motion.div>
					</motion.div>

					{/* Interactive Status & Navigation */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mb-16 space-y-6"
					>
						{/* Main Status */}
						<div className="flex items-center justify-center gap-3">
							<div className="flex items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
								<span className="text-sm text-gray-500 dark:text-gray-400">
									Currently building cool stuff at{" "}
									<a
										href="https://installer.com"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors underline underline-offset-2 decoration-gray-400 dark:decoration-gray-500 group"
										aria-label="Visit Installer.com (opens in a new tab)"
									>
										Installer.com
										<ExternalLink className="w-3 h-3 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
									</a>
								</span>
							</div>
						</div>

						{/* Interactive Links */}
						<div className="flex items-center justify-center gap-8">
							<motion.a
								href="#projects"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
							>
								<div className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
								<span className="font-medium">View Projects</span>
								<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
							</motion.a>

							<motion.a
								href="#blog"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors cursor-pointer"
							>
								<div className="h-1.5 w-1.5 rounded-full bg-purple-500 group-hover:bg-purple-600 transition-colors" />
								<span className="font-medium">Read Blog</span>
								<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
							</motion.a>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.5 }}
				className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
			>
				<div className="flex flex-col items-center gap-3">
					<span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
						Scroll
					</span>
					<div className="w-px h-10 bg-gradient-to-b from-gray-400 dark:from-gray-500 to-transparent" />
				</div>
			</motion.div>
		</div>
	);
}
