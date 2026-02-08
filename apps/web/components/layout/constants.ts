export const navigationItems = [
  { href: "#home", label: "Strona główna", id: "home" },
  { href: "#about", label: "O nas", id: "about" },
  { href: "#services", label: "Usługi", id: "services" },
  { href: "#menu", label: "Menu", id: "menu" },
  { href: "/oferta", label: "Oferta", id: "oferta" },
  { href: "#contact", label: "Kontakt", id: "contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

// Animation constants
export const ANIMATION_DELAYS = {
  LOGO: 0.2,
  DESKTOP_NAV: 0.4,
  ACTIONS: 0.6,
  ITEM_BASE: 0.1,
} as const;

export const NAVIGATION_CONFIG = {
  NAV_HEIGHT: 80,
  THRESHOLD: 0.1,
  ROOT_MARGIN: "-80px 0px -50% 0px",
} as const;
