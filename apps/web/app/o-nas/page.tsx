import { PageHeader } from '@/components/layout/page-header';
import { AboutStory, AboutValues } from '@/components/landing-section/about';

export default function AboutPage() {
	return (
		<div className="bg-background pt-32 transition-colors duration-500">
			<PageHeader
				variant="soft"
				eyebrow="Poznaj nas"
				title="O nas"
				description="Nie budujemy historii o wielkiej firmie. Budujemy ją na talerzu."
			/>
			<AboutStory hideSectionHeader />
			<AboutValues />
			<section className="pb-20 lg:pb-28">
				<div className="container mx-auto max-w-7xl px-6">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="font-bold font-display text-3xl text-foreground tracking-tight sm:text-4xl md:text-5xl">
							<span className="block">Wasze oczekiwania</span>
							<span className="mt-1 block font-semibold text-accent">
								to nasza oferta
							</span>
						</h2>
						<div
							className="mx-auto mt-5 h-0.5 w-16 rounded-full bg-accent"
							aria-hidden
						/>
						<div className="mt-10 space-y-6 text-left text-base text-muted leading-relaxed md:text-lg">
							<p>
								Jesteśmy w stanie przygotować rozbudowaną ofertę dań oraz
								przekąsek, którą mogą Państwo wykorzystać w swoich zestawach
								cateringowych. Zamieszczamy również gotowe propozycje naszych
								autorskich Blach Biesiadnych, jednak ich zawartość również mogą
								Państwo modyfikować.
							</p>
							<p>
								Ponadto, na Państwa życzenie przygotujemy zestaw wraz z wyceną
								dostosowany do konkretnych potrzeb i budżetu.
							</p>
						</div>

						<h3 className="mt-14 font-display font-semibold text-foreground text-xl">
							Jak wygląda współpraca
						</h3>
						<div
							className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-accent"
							aria-hidden
						/>
						<ol className="mt-8 space-y-4 text-left">
							<li className="flex items-start gap-3">
								<div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft font-bold text-accent text-xs">
									1
								</div>
								<span className="text-muted leading-relaxed">
									Rozmowa i poznanie potrzeb
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft font-bold text-accent text-xs">
									2
								</div>
								<span className="text-muted leading-relaxed">
									Propozycja menu i wycena dopasowana do budżetu
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft font-bold text-accent text-xs">
									3
								</div>
								<span className="text-muted leading-relaxed">
									Przygotowanie i dostawa na ustalony termin
								</span>
							</li>
						</ol>
					</div>
				</div>
			</section>
		</div>
	);
}
