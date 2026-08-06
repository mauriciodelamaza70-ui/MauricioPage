import type { Metadata } from 'next';
import { BookOpen, Microscope, PenLine } from 'lucide-react';

import { scienceBooks } from '@/lib/data';
import BookCard from '@/components/pages/libros/BookCard';

export const metadata: Metadata = {
  title: 'Libros | Mauricio de la Maza Benignos',
  description:
    'Obra escrita de Mauricio de la Maza-Benignos: publicaciones científicas sobre ictiofauna y conservación de humedales desérticos, y narrativa en desarrollo.',
};

export default function LibrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-black py-32 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-background" />
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <BookOpen className="mb-6 h-10 w-10 text-accent" aria-hidden="true" />
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-accent">Obra escrita</p>
          <h1 className="font-headline text-5xl font-bold md:text-7xl">Libros</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 text-pretty">
            Entre la investigación científica y la narrativa, una obra escrita que documenta ecosistemas
            frágiles y explora los territorios interiores de la ficción.
          </p>
        </div>
      </section>

      {/* Ciencia */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-center gap-4">
              <Microscope className="h-9 w-9 text-accent" aria-hidden="true" />
              <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">Ciencia</h2>
            </div>
            <div className="space-y-10">
              {scienceBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Novela */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex items-center gap-4">
              <PenLine className="h-9 w-9 text-accent" aria-hidden="true" />
              <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">Novela</h2>
            </div>

            <article className="relative flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-20 text-center shadow-sm">
              <span className="mb-6 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Próximamente
              </span>
              <h3 className="font-headline text-3xl font-bold text-card-foreground md:text-4xl">
                La Caverna
              </h3>
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
