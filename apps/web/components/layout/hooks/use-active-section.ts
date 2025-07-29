import { useEffect, useState } from "react";
import { NAVIGATION_CONFIG } from "../constants";

export function useActiveSection() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const sections = ["home", "about", "services", "menu", "contact"];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id;
						if (sections.includes(sectionId)) {
							setActiveSection(sectionId);
						}
					}
				});
			},
			{
				rootMargin: NAVIGATION_CONFIG.ROOT_MARGIN,
				threshold: NAVIGATION_CONFIG.THRESHOLD,
			},
		);

		// Observe all sections
		sections.forEach((sectionId) => {
			const element = document.getElementById(sectionId);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return activeSection;
}
