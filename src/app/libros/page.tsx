import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Microscope, PenLine, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Libros | Mauricio de la Maza Benignos',
  description:
    'Obra escrita de Mauricio de la Maza-Benignos: publicaciones científicas sobre ictiofauna y conservación de humedales desérticos, y narrativa en desarrollo.',
};

const categories = [
  {
    href: '/libros/ciencia',
    label: 'Ciencia',
    description:
      'Publicaciones sobre ictiofauna y conservación de humedales desérticos del norte de México.',
    image: '/images/libros/categoria-ciencia.png',
    Icon: Microscope,
  },
  {
    href: '/libros/novela',
    label: 'Novela',
    description: 'Narrativa en desarrollo: los territorios interiores de la ficción.',
    image: '/images/libros/categoria-novela.png',
    Icon: PenLine,
  },
];

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

      {/* Categorías */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map(({ href, label, description, image, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl border border-border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Ver libros de ${label}`}
              >
                <Image
                  src={image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-colors duration-300 group-hover:from-black/95" />
                <div className="relative z-10 p-8">
                  <Icon className="mb-4 h-9 w-9 text-accent" aria-hidden="true" />
                  <h2 className="font-headline text-4xl font-bold text-white md:text-5xl">{label}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-300 text-pretty">
                    {description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    Explorar
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
