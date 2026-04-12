'use client';

import { ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'bryzol-banner-dismissed';

export function AnnouncementBanner() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const dismissed = localStorage.getItem(STORAGE_KEY);
		if (!dismissed) {
			setVisible(true);
		}
	}, []);

	const dismiss = () => {
		setVisible(false);
		localStorage.setItem(STORAGE_KEY, '1');
	};

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
					<div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm">
						<Link
							href="/oferta/komunijna"
							className="group inline-flex items-center gap-1.5 font-medium"
						>
							Planujesz komunię? Przygotujemy catering od A do Z — zobacz menu
							<ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
						</Link>
						<button
							type="button"
							onClick={dismiss}
							className="ml-2 shrink-0 rounded-full p-1 transition-colors hover:bg-accent-foreground/15"
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
