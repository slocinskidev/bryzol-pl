export const navigationItems = [
	{ href: '/', label: 'Strona główna', id: 'home' },
	{
		href: '/oferta/cateringowa',
		label: 'Oferta cateringowa',
		id: 'oferta-catering',
	},
	{
		href: '/oferta/dania-na-dowoz',
		label: 'Dania na dowóz',
		id: 'oferta-dowoz',
	},
	{
		href: '/oferta/domowe-obiady',
		label: 'Domowe obiady',
		id: 'oferta-obiady',
	},
] as const;

export type NavigationItem = (typeof navigationItems)[number];

// Animation constants
export const ANIMATION_DELAYS = {
	LOGO: 0.2,
	DESKTOP_NAV: 0.4,
	ACTIONS: 0.6,
	ITEM_BASE: 0.1,
} as const;
