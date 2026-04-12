import { DomoweObiadyDinners } from '@/components/domowe-obiady/domowe-obiady-dinners';
import { PageHeader } from '@/components/layout/page-header';
import { OfferRoot } from '@/components/offer/offer';
import { getDomoweObiadyMenu } from '@/lib/domowe-obiady-dinners';

export const metadata = {
	title: 'Domowe obiady | Bryzol Catering Żory',
	description:
		'Codziennie świeże domowe obiady jak u mamy: aromatyczna zupa i sycące drugie danie. Smacznie, regularnie i bez gotowania.',
};

export default async function DomoweObiadyOfferPage() {
	const menu = await getDomoweObiadyMenu();

	return (
		<main className="min-h-screen bg-background pt-32 pb-20">
			<PageHeader
				variant="band"
				title="Domowe obiady"
				description="Codziennie świeże domowe obiady jak u mamy: aromatyczna zupa i sycące drugie danie."
			/>
			<OfferRoot>
				<DomoweObiadyDinners menu={menu} />
			</OfferRoot>
		</main>
	);
}
