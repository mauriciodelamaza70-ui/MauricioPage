import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cinema as Risk, Not as a Comfort — FilmmakerLife | Mauricio de la Maza-Benignos',
  description:
    'Perfil editorial de Mauricio de la Maza-Benignos publicado por FilmmakerLife Magazine (Issue 119, 2026). Por Marisa Lovet.',
};

const ORIGINAL_URL =
  'https://www.filmmakerlife.com/mauricio-de-la-maza-benignos-cinema-as-risk-not-as-a-comfort/';

const pages: { src: string; label: string }[] = [
  { src: '/images/prensa/filmmakerlife-issue119.png', label: 'Portada — Issue 119' },
  { src: '/images/prensa/filmmakerlife-pagina-04.png', label: 'Página 4' },
  { src: '/images/prensa/filmmakerlife-pagina-05.png', label: 'Página 5' },
  { src: '/images/prensa/filmmakerlife-pagina-06.png', label: 'Página 6' },
];

export default function FilmmakerLifePage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <Link
          href="/prensa"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Prensa
        </Link>

        {/* Encabezado */}
        <header className="mt-8 max-w-3xl">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-balance">
            Mauricio de la Maza-Benignos: Cinema as Risk, Not as a Comfort
          </h1>
          <p className="text-accent mt-4 text-lg tracking-wide">
            FilmmakerLife Magazine, Issue 119, 2026
          </p>
        </header>

        <article className="mt-12 max-w-3xl">
          {/* Nota de atribución */}
          <div className="rounded-lg border border-border bg-secondary/60 p-4 text-sm text-muted-foreground leading-relaxed">
            Publicado originalmente por FilmmakerLife Magazine, marzo 2026. Por Marisa Lovet.{' '}
            <a
              href={ORIGINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:no-underline"
            >
              filmmakerlife.com
            </a>
          </div>

          {/* Páginas de la revista a tamaño completo */}
          <div className="mt-12 space-y-8">
            {pages.map((page) => (
              <a
                key={page.src}
                href={ORIGINAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-lg bg-secondary"
              >
                <Image
                  src={page.src}
                  alt={`FilmmakerLife Magazine — ${page.label}`}
                  width={960}
                  height={1242}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full object-contain"
                  priority={page.src === pages[0].src}
                />
                <span
                  className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/40 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/70 text-foreground">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Páginas de la edición impresa, reproducidas con autorización de FilmmakerLife Magazine.
          </p>

          {/* Enlace final */}
          <div className="mt-16 border-t border-border pt-8">
            <a
              href={ORIGINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
            >
              Ver publicación original en FilmmakerLife
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
