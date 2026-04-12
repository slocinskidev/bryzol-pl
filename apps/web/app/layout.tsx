import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';

import '@workspace/ui/globals.css';
import { Navigation } from '@/components/layout/navigation';
import { Providers } from '@/components/layout/providers';

export const metadata: Metadata = {
	metadataBase: new URL('https://bryzol.pl'),
	title: {
		default: 'Bryzol Catering | Domowe Obiady i Catering w Żorach',
		template: '%s | Bryzol Catering',
	},
	description:
		'Profesjonalny catering na imprezy, domowe obiady, dania na dowóz w Żorach. Smacznie, punktualnie, zawsze dopasowane do Twojego wydarzenia.',
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		siteName: 'Bryzol Catering',
	},
};

const fontSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
});

const fontMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
});

const fontDisplay = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-cormorant',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<head />
			<body
				className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} scroll-pt-32 bg-background font-sans text-foreground antialiased`}
				style={
					{
						'--font-sans':
							'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
						'--font-display': 'var(--font-cormorant), Georgia, ui-serif, serif',
					} as React.CSSProperties
				}
			>
				<Providers>
					<Navigation />
					{children}
				</Providers>
			</body>
		</html>
	);
}
