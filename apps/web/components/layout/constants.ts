export const navigationItems = [
	{ href: '/', label: 'Strona główna', id: 'home' },
	{ href: '/oferta', label: 'Oferta', id: 'oferta' },
	{ href: '/kontakt', label: 'Kontakt', id: 'contact' },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

// Animation constants
export const ANIMATION_DELAYS = {
	LOGO: 0.2,
	DESKTOP_NAV: 0.4,
	ACTIONS: 0.6,
	ITEM_BASE: 0.1,
} as const;
