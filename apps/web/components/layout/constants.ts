import {
	ChefHat,
	Home,
	PartyPopper,
	Truck,
	UtensilsCrossed,
} from 'lucide-react';
import type { ElementType } from 'react';

export type NavigationItem = {
	href: string;
	label: string;
	id: string;
	icon: ElementType;
	badge?: string;
};

export const navigationItems: NavigationItem[] = [
	{ href: '/', label: 'Strona główna', id: 'home', icon: Home },
	{
		href: '/oferta/komunijna',
		label: 'Oferta komunijna',
		id: 'oferta-komunijna',
		icon: PartyPopper,
		badge: 'Sezonowa',
	},
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
];

// Animation constants
export const ANIMATION_DELAYS = {
	LOGO: 0.2,
	DESKTOP_NAV: 0.4,
	ACTIONS: 0.6,
	ITEM_BASE: 0.1,
} as const;
