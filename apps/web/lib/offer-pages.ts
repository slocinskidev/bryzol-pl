import { ChefHat, Truck, UtensilsCrossed } from 'lucide-react';

/** Offer page metadata used by navigation and offer cards. */
export const OFFER_PAGES = [
	{
		slug: 'cateringowa',
		title: 'Oferta cateringowa',
		description:
			'Catering na przyjęcia i dla firm: dania na ciepło, blachy biesiadne i zestawy.',
		icon: ChefHat,
	},
	{
		slug: 'dania-na-dowoz',
		title: 'Dania na dowóz',
		description:
			'Dania na dowóz pod wskazany adres: śniadania, ciasto ogniowe, pierogi, sałatki i dania główne.',
		icon: Truck,
	},
	{
		slug: 'domowe-obiady',
		title: 'Domowe obiady',
		description:
			'Codziennie świeże domowe obiady jak u mamy: aromatyczna zupa i sycące drugie danie.',
		icon: UtensilsCrossed,
	},
] as const;
