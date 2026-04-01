import { About } from '@/components/landing-section/about';

export default function AboutPage() {
	return (
		<div className="bg-background pt-24 transition-colors duration-500">
			<About />
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
					</div>
				</div>
			</section>
		</div>
	);
}
