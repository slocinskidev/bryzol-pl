import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function useActiveSection() {
	const pathname = usePathname();

	return useMemo(() => {
		if (pathname === '/') {
			return 'home';
		}
		if (pathname.startsWith('/o-nas')) {
			return 'home';
		}
		if (pathname.startsWith('/oferta/cateringowa')) {
			return 'oferta-catering';
		}
		if (pathname.startsWith('/oferta/dania-na-dowoz')) {
			return 'oferta-dowoz';
		}
		if (pathname.startsWith('/oferta/domowe-obiady')) {
			return 'oferta-obiady';
		}
		if (pathname === '/oferta' || pathname === '/oferta/') {
			return 'oferta-hub';
		}
		if (pathname.startsWith('/oferta')) {
			return 'oferta-catering';
		}
		return 'home';
	}, [pathname]);
}
