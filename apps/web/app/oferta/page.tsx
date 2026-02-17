import { ScrollProgress } from "@workspace/ui/components/scroll-progress";
import { Offer } from "@/components/offer/offer";
import { OfferSectionNav } from "@/components/offer/offer-section-nav";
import { getOffer } from "@/lib/offer";

export const metadata = {
	title: "Oferta | Bryzol Catering Żory",
	description:
		"Pełna oferta cateringowa: dania na dowóz, blachy biesiadne, zestawy na przyjęcie, domowe obiady. Żory i okolice.",
};

export default async function OfertaPage() {
	const { sections } = await getOffer();

	return (
		<main className="min-h-screen bg-background pb-20">
			<ScrollProgress variant="brand" />
			<div className="border-b border-border bg-muted/30 py-12 text-center">
				<h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
					Nasza oferta
				</h1>
				<p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
					Catering na dowóz, blachy biesiadne i dania dnia. Zamów pod drzwi lub
					odbierz w Żorach.
				</p>
			</div>

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
