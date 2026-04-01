'use client';

import { AuroraText } from '@workspace/ui/components/aurora-text';
import { WordRotate } from '@workspace/ui/components/word-rotate';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import heroImage from '@/assets/hero.jpeg';
import { ButtonAnchor, ButtonLink } from '@/components/button-link';

export function Hero() {
	return (
		<div id="home" className="relative min-h-screen pt-32 font-sans lg:pt-40">
			<div className="absolute inset-0 z-0">
				<Image
					src={heroImage}
					alt="Aranżacja cateringu Bryzol — elegancki stół i dania na przyjęcie"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50" />
				<div className="absolute inset-0 bg-accent/10" aria-hidden />
			</div>

			<div className="relative z-10 flex min-h-[calc(100vh-8rem)] items-center justify-center px-6 pb-20">
				<div className="relative max-w-4xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="mb-4"
					>
						<WordRotate
							words={[
								'Domowe obiady',
								'Imprezy okolicznościowe',
								'Dania na dowóz',
							]}
							className="font-medium text-lg text-white/70 tracking-wide md:text-xl"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="mb-6"
					>
						<h1 className="mb-4 font-bold font-display text-4xl text-white tracking-tight md:text-6xl lg:text-7xl">
							Catering, który{' '}
							<AuroraText
								className="font-bold text-4xl text-accent md:text-6xl lg:text-7xl"
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
						<p className="mx-auto max-w-3xl text-lg text-white/80 leading-relaxed md:text-xl">
							Domowy smak na każdą okazję — obiady na dowóz, małe przyjęcia,
							imprezy firmowe. Dopasowane menu i punktualna dostawa.{' '}
							<AuroraText
								className="font-semibold text-accent text-lg md:text-xl"
								speed={0.9}
							>
								Ty się cieszysz. My dbamy o resztę.
							</AuroraText>
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
					>
						<ButtonLink href="/oferta" size="lg">
							Zobacz menu
						</ButtonLink>
						<ButtonLink
							href="/kontakt"
							size="lg"
							variant="outline"
							className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground"
						>
							Skontaktuj się
						</ButtonLink>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="hidden flex-col items-center justify-center gap-4 sm:flex-row md:flex"
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<ButtonAnchor
								href="tel:+48533363153"
								variant="ghost"
								size="sm"
								className="text-white/80 hover:bg-white/10 hover:text-white"
							>
								<Phone className="mr-2 h-4 w-4" />
								+48 533 363 153
							</ButtonAnchor>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<ButtonAnchor
								href="mailto:kontakt@bryzol.pl"
								variant="ghost"
								size="sm"
								className="text-white/80 hover:bg-white/10 hover:text-white"
							>
								<Mail className="mr-2 h-4 w-4" />
								kontakt@bryzol.pl
							</ButtonAnchor>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1.2 }}
				className="absolute bottom-2 left-1/2 z-20 hidden -translate-x-1/2 transform pb-4 md:block"
			>
				<div className="flex flex-col items-center gap-4">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.4 }}
						className="font-medium text-white/70 text-xs uppercase tracking-widest"
					>
						Przewiń w dół
					</motion.span>

					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className="relative"
					>
						<div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40">
							<motion.div
								animate={{
									y: [0, 12, 0],
									opacity: [1, 0.3, 1],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 0.2,
								}}
								className="mt-2 h-3 w-1 rounded-full bg-white/60"
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
								ease: 'easeInOut',
								delay: 0,
							}}
							className="h-1 w-1 rounded-full bg-white/50"
						/>
						<motion.div
							animate={{ opacity: [0.3, 1, 0.3] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 0.2,
							}}
							className="h-1 w-1 rounded-full bg-white/50"
						/>
						<motion.div
							animate={{ opacity: [0.3, 1, 0.3] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 0.4,
							}}
							className="h-1 w-1 rounded-full bg-white/50"
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
