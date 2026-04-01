import { ScrollProgress } from '@workspace/ui/components/scroll-progress';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { Offer } from '@/components/offer/offer';
import { OfferSectionNav } from '@/components/offer/offer-section-nav';
import { getOfferSectionsBySlugs } from '@/lib/offer';
import {
	getOfferPageConfig,
	isOfferPageSlug,
	OFFER_PAGES,
} from '@/lib/offer-pages';

export function generateStaticParams() {
	return OFFER_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	if (!isOfferPageSlug(slug)) {
		return { title: 'Oferta' };
	}
	const config = getOfferPageConfig(slug);
	if (!config) {
		return { title: 'Oferta' };
	}
	return {
		title: `${config.title} | Bryzol Catering Żory`,
		description: config.description,
	};
}

export default async function OfertaSegmentPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	if (!isOfferPageSlug(slug)) {
		notFound();
	}
	const config = getOfferPageConfig(slug) as (typeof OFFER_PAGES)[number];
	const sections = await getOfferSectionsBySlugs([...config.sectionSlugs]);

	return (
		<main className="min-h-screen bg-background pt-32 pb-20">
			<ScrollProgress variant="brand" />
			<PageHeader
				variant="band"
				title={config.title}
				description={config.description}
			/>

			<Offer.Root>
				<OfferSectionNav sections={sections} />
				<div className="space-y-16 pt-8">
					{sections.map((section) => (
						<Offer.Section key={section.id} section={section}>
							{section.categories.map((category) => (
								<Offer.Category key={category.id} category={category}>
									{category.items.map((item) => (
										<Offer.Item key={item.id} item={item} />
									))}
								</Offer.Category>
							))}
						</Offer.Section>
					))}
				</div>
			</Offer.Root>
		</main>
	);
}
