"use client";

import { AuroraText } from "@workspace/ui/components/aurora-text";
import { Button } from "@workspace/ui/components/button";
import { WordRotate } from "@workspace/ui/components/word-rotate";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import heroImage from "@/assets/hero.jpeg";

export function Hero() {
	return (
		<div id="home" className="relative min-h-screen font-inter">
			<div className="absolute inset-0 z-0">
				<Image
					src={heroImage}
					alt="Elegant catering setup with buffet table"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>

			<div className="relative z-10 flex min-h-screen items-center justify-center px-6">
				<div className="text-center max-w-4xl relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="mb-4"
					>
						<WordRotate
							words={[
								"Profesjonalny catering",
								"Domowe smaki",
								"Mania gotowania",
							]}
							className="text-lg md:text-xl text-white/70 font-medium tracking-wide"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="mb-6"
					>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
							Catering, który{" "}
							<AuroraText
								className="text-4xl md:text-6xl lg:text-7xl font-bold"
								speed={0.8}
							>
								robi wrażenie
							</AuroraText>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mb-12"
					>
						<p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
							Wyjątkowe dania z sercem, podane ze smakiem. Od codziennych
							obiadów po eleganckie przyjęcia. Bryzol łączy domową kuchnię z
							nowoczesną jakością.{" "}
							<AuroraText
								className="text-lg md:text-xl font-semibold"
								speed={0.9}
							>
								Zaskocz gości. Zachwyć siebie.
							</AuroraText>
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
					>
						<Button size="lg">
							Zobacz menu
							<ArrowRight className="w-5 h-5" />
						</Button>

						<Button size="lg" variant="outline">
							Skontaktuj się
							<ArrowRight className="w-5 h-5" />
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant="ghost"
								size="sm"
								className="text-white/80 hover:text-white hover:bg-white/10"
								asChild
							>
								<a href="tel:+48533363153">
									<Phone className="w-4 h-4 mr-2" />
									+48 533 363 153
								</a>
							</Button>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant="ghost"
								size="sm"
								className="text-white/80 hover:text-white hover:bg-white/10"
								asChild
							>
								<a href="mailto:kontakt@bryzol.pl">
									<Mail className="w-4 h-4 mr-2" />
									kontakt@bryzol.pl
								</a>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1.2 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
			>
				<div className="flex flex-col items-center gap-4">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.4 }}
						className="text-xs text-white/70 uppercase tracking-widest font-medium"
					>
						Przewiń w dół
					</motion.span>

					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="relative"
					>
						<div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
							<motion.div
								animate={{
									y: [0, 12, 0],
									opacity: [1, 0.3, 1],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.2,
								}}
								className="w-1 h-3 bg-white/60 rounded-full mt-2"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.6 }}
						className="flex items-center gap-1"
					>
						<motion.div
							animate={{ opacity: [0.3, 1, 0.3] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 0,
							}}
							className="w-1 h-1 bg-white/50 rounded-full"
						/>
						<motion.div
							animate={{ opacity: [0.3, 1, 0.3] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 0.2,
							}}
							className="w-1 h-1 bg-white/50 rounded-full"
						/>
						<motion.div
							animate={{ opacity: [0.3, 1, 0.3] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 0.4,
							}}
							className="w-1 h-1 bg-white/50 rounded-full"
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
