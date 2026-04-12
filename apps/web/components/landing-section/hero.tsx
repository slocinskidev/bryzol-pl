'use client';

import { AuroraText } from '@workspace/ui/components/aurora-text';
import { WordRotate } from '@workspace/ui/components/word-rotate';
import { motion } from 'motion/react';
import Image from 'next/image';
import heroImage from '@/assets/hero.jpeg';
import { ButtonLink } from '@/components/button-link';

export function Hero() {
	return (
		<div id="home" className="relative flex min-h-dvh flex-col pt-32 font-sans lg:pt-40">
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

			<div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-20">
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
						<ButtonLink href="#oferta" size="lg">
							Zobacz ofertę
						</ButtonLink>
						<ButtonLink href="/kontakt" size="lg" variant="secondary">
							Skontaktuj się
						</ButtonLink>
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
