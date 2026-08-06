import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, PenLine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Novela | Libros | Mauricio de la Maza Benignos',
  description:
    'Narrativa en desarrollo de Mauricio de la Maza-Benignos: los territorios interiores de la ficción.',
};

export default function LibrosNovelaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[38vh] items-center justify-center overflow-hidden bg-black py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-background" />
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <PenLine className="mb-6 h-10 w-10 text-accent" aria-hidden="true" />
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-accent">Obra escrita</p>
          <h1 className="font-headline text-5xl font-bold md:text-7xl">Novela</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 text-pretty">
            Narrativa en desarrollo: los territorios interiores de la ficción.
          </p>
        </div>
      </section>

      {/* Novela */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/libros"
              className="mb-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a Libros
            </Link>

            <article className="relative flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-20 text-center shadow-sm">
              <span className="mb-6 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Próximamente
              </span>
              <h2 className="font-headline text-3xl font-bold text-card-foreground md:text-4xl">
                La Caverna
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Una novela en desarrollo. Pronto compartiremos más sobre este proyecto.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
