'use client';

import { ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useBanner } from './banner-context';

export function AnnouncementBanner() {
	const { visible, dismiss } = useBanner();

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ y: -40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -40, opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className="fixed top-0 right-0 left-0 z-[60] overflow-hidden bg-accent text-accent-foreground"
				>
					<div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-3 py-2 text-center text-xs sm:px-4 sm:py-2.5 sm:text-sm">
						<Link
							href="/oferta/komunijna"
							className="group inline-flex min-w-0 items-center gap-1.5 font-medium"
						>
							<span className="truncate sm:hidden">
								Planujesz komunię? Zobacz menu
							</span>
							<span className="hidden truncate sm:inline">
								Planujesz komunię? Przygotujemy catering od A do Z — zobacz menu
							</span>
							<ArrowRight className="size-3.5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
						</Link>
						<button
							type="button"
							onClick={dismiss}
							className="-mr-1 ml-1 shrink-0 rounded-full p-1 transition-colors hover:bg-accent-foreground/15 sm:ml-2"
							aria-label="Zamknij"
						>
							<X className="size-3.5" />
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
