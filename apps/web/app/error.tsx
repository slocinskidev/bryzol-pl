'use client';

export default function ErrorPage({
	reset,
}: {
	error: globalThis.Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
			<p className="font-bold text-6xl text-accent">Ups</p>
			<h1 className="mt-4 font-bold font-display text-3xl text-foreground md:text-4xl">
				Coś poszło nie tak
			</h1>
			<p className="mt-3 max-w-md text-muted">
				Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę.
			</p>
			<button
				type="button"
				onClick={reset}
				className="mt-8 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:bg-accent-hover"
			>
				Spróbuj ponownie
			</button>
		</main>
	);
}
