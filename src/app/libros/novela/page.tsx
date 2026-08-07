import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, PenLine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Novela | Libros | Mauricio de la Maza Benignos',
  description:
    'La Caverna, novela corta de Mauricio de la Maza-Benignos. Próximamente.',
};

export default function LibrosNovelaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[38vh] items-center justify-center overflow-hidden bg-black py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-950" />
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
      <section className="bg-neutral-950 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/libros"
              className="mb-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent/80"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a Libros
            </Link>

            <article className="grid grid-cols-1 gap-10 rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-xl md:grid-cols-[minmax(0,300px)_1fr] md:gap-12 md:p-10">
              {/* Cover */}
              <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <Image
                  src="/images/libros/la-caverna-cover.png"
                  alt="Portada de La Caverna, novela corta de Mauricio de la Maza-Benignos"
                  width={600}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <span className="mb-6 inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Próximamente
                </span>

                <h2 className="font-headline text-4xl font-bold text-white md:text-5xl">
                  La Caverna
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Novela corta
                </p>
                <p className="mt-3 text-lg text-gray-300">Mauricio de la Maza-Benignos</p>

                <div className="mt-8 space-y-4 text-pretty leading-relaxed text-gray-300">
                  <p>
                    Ovidio de Velasco-Pieldelobo ha dedicado su vida a proteger lo que el mundo no
                    quiere ver. Biólogo, negociador, conservacionista, amante, hijo, amigo incómodo,
                    enemigo eventual del poder: su historia es la de quienes se atreven a mirar de
                    frente la belleza y la corrupción. Entre despachos y desiertos, entre manantiales
                    y patrimonios, entre la lealtad y la traición, Ovidio recorre un país donde todo
                    está en disputa: la naturaleza, la verdad, el amor y, sobre todo, la libertad.
                  </p>
                  <p className="font-headline text-xl italic text-white">
                    Esta no es una historia de héroes. Es una historia de consecuencias.
                  </p>
                </div>

                <p className="mt-10 text-xs text-gray-500">
                  &copy; Registro U.S. Copyright Office: TXU002549454
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
