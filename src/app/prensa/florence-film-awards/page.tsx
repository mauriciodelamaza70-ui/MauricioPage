import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FlorenceInterview from '@/components/pages/prensa/FlorenceInterview';

export const metadata: Metadata = {
  title: 'Entrevista — Florence Film Awards | Mauricio de la Maza Benignos',
  description:
    'Entrevista completa a Mauricio De la Maza-Benignos publicada por Florence Film Awards (13 de marzo de 2024), reproducida en versión bilingüe español–inglés.',
};

export default function FlorenceInterviewPage() {
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
            Mauricio De la Maza-Benignos
          </h1>
          <p className="text-accent mt-4 text-lg tracking-wide">Entrevista completa</p>
        </header>

        <div className="mt-12">
          <FlorenceInterview />
        </div>
      </div>
    </main>
  );
}
