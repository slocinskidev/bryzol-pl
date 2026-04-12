/**
 * Contact details and map/directions URLs.
 * Override address via NEXT_PUBLIC_CONTACT_ADDRESS (e.g. "ul. Example 1, 00-000 Warszawa").
 */
const defaultAddress = 'ul. Bramkowa 3, 44-240 Żory';

export const contact = {
	phone: '+48 533 363 155',
	email: 'kontakt@bryzol.pl',
	facebookUrl: 'https://www.facebook.com/bryzolcatering',
	facebookName: 'Bryzol Catering',
	instagramUrl: 'https://www.instagram.com/bryzolcatering',
	instagramName: '@bryzolcatering',
	bankAccount: '33 1050 1676 1000 0090 9160 5494',
	bankName: 'ING Bank Śląski',
	dishReturnInfo: 'Poniedziałek – Piątek: 10:00 – 14:00',
	coordinates: { lat: 50.0455, lng: 18.6987 } as const,
	get address(): string {
		if (
			typeof process !== 'undefined' &&
			process.env?.NEXT_PUBLIC_CONTACT_ADDRESS
		) {
			return process.env.NEXT_PUBLIC_CONTACT_ADDRESS;
		}
		return defaultAddress;
	},
	get directionsUrl(): string {
		return `https://www.google.com/maps/dir//${encodeURIComponent(this.address)}`;
	},
	get mapSearchUrl(): string {
		return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address)}`;
	},
};
