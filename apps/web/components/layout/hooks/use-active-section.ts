import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function useActiveSection() {
	const pathname = usePathname();

	return useMemo(() => {
		if (pathname === '/') return 'home';
		if (pathname.startsWith('/o-nas')) return 'home';
		if (pathname.startsWith('/oferta')) return 'oferta';
		if (pathname.startsWith('/kontakt')) return 'contact';
		return 'home';
	}, [pathname]);
}
