import { ContactInfoPanel } from '@/components/contact/contact-info-panel';
import { ContactMap } from '@/components/contact/contact-map';

export default function ContactPage() {
	return (
		<div className="flex h-dvh flex-col md:relative md:block md:overflow-hidden">
			<div className="h-[45dvh] shrink-0 md:absolute md:inset-0 md:h-full">
				<ContactMap />
			</div>
			<ContactInfoPanel />
		</div>
	);
}
