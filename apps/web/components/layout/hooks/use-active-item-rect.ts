import { useEffect, useMemo, useState } from "react";

export function useActiveItemRect(
	activeSection: string,
	navRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
) {
	const [activeItemRect, setActiveItemRect] = useState({ left: 0, width: 0 });

	useEffect(() => {
		const activeRef = navRefs.current[activeSection];
		if (activeRef) {
			const rect = activeRef.getBoundingClientRect();
			const navContainer = activeRef.closest(".nav-container");
			if (navContainer) {
				const containerRect = navContainer.getBoundingClientRect();
				setActiveItemRect({
					left: rect.left - containerRect.left,
					width: rect.width,
				});
			}
		}
	}, [activeSection, navRefs]);

	// Memoize the result to prevent unnecessary re-renders
	const memoizedRect = useMemo(() => activeItemRect, [activeItemRect]);

	return memoizedRect;
}
