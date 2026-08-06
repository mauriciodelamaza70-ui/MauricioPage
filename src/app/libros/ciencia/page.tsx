import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Microscope } from 'lucide-react';

import { scienceBooks } from '@/lib/data';
import BookCard from '@/components/pages/libros/BookCard';

export const metadata: Metadata = {
  title: 'Ciencia | Libros | Mauricio de la Maza Benignos',
  description:
    'Publicaciones científicas de Mauricio de la Maza-Benignos sobre ictiofauna y conservación de humedales desérticos del norte de México.',
};

export default function LibrosCienciaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[38vh] items-center justify-center overflow-hidden bg-black py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-background" />
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <Microscope className="mb-6 h-10 w-10 text-accent" aria-hidden="true" />
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-accent">Obra escrita</p>
          <h1 className="font-headline text-5xl font-bold md:text-7xl">Ciencia</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 text-pretty">
            Publicaciones que documentan la ictiofauna y la conservación de los frágiles humedales del
            Desierto Chihuahuense.
          </p>
        </div>
      </section>

      {/* Libros de ciencia */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/libros"
              className="mb-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a Libros
            </Link>
            <div className="space-y-10">
              {scienceBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
