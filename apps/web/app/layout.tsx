import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Providers } from "@/components/layout/providers";

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

const fontDisplay = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-cormorant",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</head>
			<body
				className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} font-sans antialiased`}
				style={
					{
						"--font-sans":
							"var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
						"--font-display": "var(--font-cormorant), Georgia, ui-serif, serif",
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
