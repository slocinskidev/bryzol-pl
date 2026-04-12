'use client';

import Image from 'next/image';
import logo from '@/assets/logo-simple.png';

interface CustomMarkerProps {
	left?: number;
	top?: number;
	anchor?: [number, number];
}

export function CustomMarker({ left = 0, top = 0 }: CustomMarkerProps) {
	return (
		<div
			className="absolute -translate-x-1/2 -translate-y-full"
			style={{ left, top }}
		>
			<div className="relative flex flex-col items-center">
				<div className="flex size-12 items-center justify-center rounded-full border-3 border-white bg-accent shadow-xl ring-2 ring-accent/30">
					<Image
						src={logo}
						alt="Bryzol Catering"
						width={32}
						height={32}
						className="size-8 object-contain"
					/>
				</div>
				<div className="-mt-1.5 size-3 rotate-45 border-white border-r-3 border-b-3 bg-accent shadow-md" />
			</div>
		</div>
	);
}
