'use client';

import { Toast } from '@heroui/react/toast';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { type ReactNode, useEffect } from 'react';

function DataThemeSync({ children }: { children: ReactNode }) {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) {
			return;
		}
		const t = resolvedTheme === 'dark' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', t);
	}, [resolvedTheme]);

	return children;
}

export function Providers({ children }: { children: ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			enableColorScheme
		>
			<DataThemeSync>{children}</DataThemeSync>
			<Toast.Provider placement="top end" />
		</NextThemesProvider>
	);
}
