'use client';

import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

const STORAGE_KEY = 'bryzol-banner-dismissed';

type BannerContextValue = {
	visible: boolean;
	dismiss: () => void;
};

const BannerContext = createContext<BannerContextValue>({
	visible: false,
	dismiss: () => {},
});

export function BannerProvider({ children }: { children: ReactNode }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const dismissed = localStorage.getItem(STORAGE_KEY);
		if (!dismissed) {
			setVisible(true);
		}
	}, []);

	const dismiss = () => {
		setVisible(false);
		localStorage.setItem(STORAGE_KEY, '1');
	};

	return (
		<BannerContext.Provider value={{ visible, dismiss }}>
			{children}
		</BannerContext.Provider>
	);
}

export function useBanner() {
	return useContext(BannerContext);
}
