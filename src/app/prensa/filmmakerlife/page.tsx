import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FilmmakerLifeArticle from '@/components/pages/prensa/FilmmakerLifeArticle';

export const metadata: Metadata = {
  title: 'Cinema as Risk, Not as a Comfort — FilmmakerLife | Mauricio de la Maza-Benignos',
  description:
    'Perfil editorial de Mauricio de la Maza-Benignos publicado por FilmmakerLife Magazine (Issue 119, 2026). Por Marisa Lovet.',
};

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

        <div className="mt-12">
          <FilmmakerLifeArticle />
        </div>
      </div>
    </main>
  );
}
