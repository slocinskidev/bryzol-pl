/**
 * Contact details and map/directions URLs.
 * Override address via NEXT_PUBLIC_CONTACT_ADDRESS (e.g. "ul. Example 1, 00-000 Warszawa").
 */
const defaultAddress = "ul. Bramkowa 3, 44-240 Żory";

export const contact = {
  phone: "+48 533 363 153",
  email: "kontakt@bryzol.pl",
  get address(): string {
    if (
      typeof process !== "undefined" &&
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
