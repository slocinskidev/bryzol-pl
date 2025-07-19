import { About } from "@/components/landing-section/about";
import { Contact } from "@/components/landing-section/contact";
import { Hero } from "@/components/landing-section/hero";
import { Menu } from "@/components/landing-section/menu";
import { Services } from "@/components/landing-section/services";

export default function Page() {
	return (
		<div className="bg-white dark:bg-black transition-colors duration-500">
			<Hero />
			<About />
			<Services />
			<Menu />
			<Contact />
		</div>
	);
}
