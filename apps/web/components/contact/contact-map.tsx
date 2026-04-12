'use client';

import { useTheme } from 'next-themes';
import { Map as PigeonMap } from 'pigeon-maps';
import { contact } from '@/lib/contact';
import { CustomMarker } from './custom-marker';

export function ContactMap() {
	const { resolvedTheme } = useTheme();
	const isDark = resolvedTheme === 'dark';

	return (
		<div
			className="h-full w-full"
			style={isDark ? { filter: 'invert(1) hue-rotate(180deg)' } : undefined}
		>
			<PigeonMap
				defaultCenter={[contact.coordinates.lat, contact.coordinates.lng]}
				defaultZoom={16}
				attribution={false}
			>
				<CustomMarker
					left={0}
					top={0}
					anchor={[contact.coordinates.lat, contact.coordinates.lng]}
				/>
			</PigeonMap>
		</div>
	);
}
