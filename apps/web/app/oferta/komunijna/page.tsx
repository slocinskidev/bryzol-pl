import { KomunijnaMenu } from '@/components/komunijna/komunijna-menu';
import { PageHeader } from '@/components/layout/page-header';
import { OfferRoot } from '@/components/offer/offer';
import { getKomunijna } from '@/lib/offer';

export const metadata = {
	title: 'Oferta komunijna | Bryzol Catering Żory',
	description:
		'Catering na komunię w Żorach i okolicach — obiad, przekąski, sałatki i kolacja. Ty cieszysz się z rodziną, my zajmiemy się resztą.',
};

export default async function KomunijnaOfferPage() {
	const sections = await getKomunijna();

	return (
		<main className="min-h-screen bg-background pt-32 pb-20">
			<PageHeader
				variant="band"
				eyebrow="Sezon komunijny 2026"
				title="Oferta komunijna"
				description="Obiad, przekąski, sałatki i kolacja w Żorach i okolicach — wszystko przygotowane, Ty cieszysz się z rodziną."
			/>
			<OfferRoot>
				<KomunijnaMenu sections={sections} />
			</OfferRoot>
		</main>
	);
}
