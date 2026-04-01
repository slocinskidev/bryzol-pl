import { About } from '@/components/landing-section/about';

export default function AboutPage() {
	return (
		<div className="bg-background pt-24 transition-colors duration-500">
			<About />
			<section className="py-20 lg:py-28">
				<div className="container mx-auto max-w-7xl px-6">
					<div className="grid gap-8 md:grid-cols-3">
						<article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
							<h3 className="font-display font-semibold text-2xl text-foreground">
								Jak pracujemy
							</h3>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Ustalamy potrzeby wydarzenia, proponujemy menu i dbamy o
								terminowa realizacje. Kazdy etap jest jasny i przewidywalny.
							</p>
						</article>
						<article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
							<h3 className="font-display font-semibold text-2xl text-foreground">
								Co nas wyroznia
							</h3>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Domowy smak, elastyczne porcje i menu dopasowane do charakteru
								przyjecia - od rodzinnych spotkan po eventy firmowe.
							</p>
						</article>
						<article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
							<h3 className="font-display font-semibold text-2xl text-foreground">
								Rozwoj oferty
							</h3>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Ta strona bedzie rozszerzana o galerie realizacji, wiecej zdjec
								i szczegolowe opisy uslug.
							</p>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
}
