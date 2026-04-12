import { DomoweObiadyDinners } from '@/components/domowe-obiady/domowe-obiady-dinners';
import { PageHeader } from '@/components/layout/page-header';
import { OfferRoot } from '@/components/offer/offer';
import { OfferSectionWrapper } from '@/components/offer/offer-section';
import { getDomoweObiadyDinners } from '@/lib/domowe-obiady-dinners';

export const metadata = {
	title: 'Domowe obiady | Bryzol Catering Żory',
	description:
		'Codziennie świeże domowe obiady jak u mamy: aromatyczna zupa i sycące drugie danie. Smacznie, regularnie i bez gotowania.',
};

export default async function DomoweObiadyOfferPage() {
	const dinners = await getDomoweObiadyDinners();

	return (
		<main className="min-h-screen bg-background pt-32 pb-20">
			<PageHeader
				variant="band"
				title="Domowe obiady"
				description="Codziennie świeże domowe obiady jak u mamy: aromatyczna zupa i sycące drugie danie."
			/>
			<OfferRoot>
				<div className="pt-8">
					<OfferSectionWrapper
						section={{
							id: 'domowe-obiady',
							slug: 'domowe-obiady',
							title: 'Menu tygodniowe',
							description: 'Tygodniowe menu domowych obiadów.',
							categories: [],
						}}
					>
						<DomoweObiadyDinners dinners={dinners} />
					</OfferSectionWrapper>
				</div>
			</OfferRoot>
		</main>
	);
}
