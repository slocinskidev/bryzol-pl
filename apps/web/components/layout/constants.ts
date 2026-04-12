import { ChefHat, Home, Truck, UtensilsCrossed } from 'lucide-react';

export const navigationItems = [
	{ href: '/', label: 'Strona główna', id: 'home', icon: Home },
	{
		href: '/oferta/catering',
		label: 'Oferta cateringowa',
		id: 'oferta-catering',
		icon: ChefHat,
	},
	{
		href: '/oferta/dania-na-dowoz',
		label: 'Dania na dowóz',
		id: 'oferta-dowoz',
		icon: Truck,
	},
	{
		href: '/oferta/domowe-obiady',
		label: 'Domowe obiady',
		id: 'oferta-obiady',
		icon: UtensilsCrossed,
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
