"use client";

import { useEffect, useState } from "react";

const ROOT_MARGIN = "-120px 0px -60% 0px";
const THRESHOLD = 0;

export function useOfferSectionInView(slugs: string[]) {
	const [activeSlug, setActiveSlug] = useState<string | null>(slugs[0] ?? null);

	useEffect(() => {
		if (slugs.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const id = entry.target.id;
						if (slugs.includes(id)) setActiveSlug(id);
					}
				}
			},
			{ rootMargin: ROOT_MARGIN, threshold: THRESHOLD },
		);

		const elements = slugs
			.map((slug) => document.getElementById(slug))
			.filter((el): el is HTMLElement => el != null);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [slugs.join(",")]);

	return activeSlug;
}
