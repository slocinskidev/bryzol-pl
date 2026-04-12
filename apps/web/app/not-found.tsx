import { ButtonLink } from '@/components/button-link';

export default function NotFound() {
	return (
		<main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
			<p className="font-bold text-8xl text-accent">404</p>
			<h1 className="mt-4 font-bold font-display text-3xl text-foreground md:text-4xl">
				Strona nie znaleziona
			</h1>
			<p className="mt-3 max-w-md text-muted">
				Przepraszamy, strona której szukasz nie istnieje lub została
				przeniesiona.
			</p>
			<ButtonLink href="/" size="lg" className="mt-8">
				Wróć na stronę główną
			</ButtonLink>
		</main>
	);
}
