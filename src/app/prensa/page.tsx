import type { Metadata } from 'next';
import PrensaContent from '@/components/pages/prensa/PrensaContent';

export const metadata: Metadata = {
  title: 'Prensa | Mauricio de la Maza Benignos',
  description:
    'Entrevistas, reportajes y menciones en medios de cine, ciencia y conservación sobre Mauricio de la Maza-Benignos.',
};

export default function PrensaPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Encabezado */}
        <header className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">Prensa</h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Entrevistas, reportajes y menciones en medios de cine, ciencia y conservación.
          </p>
        </header>

        <div className="mt-16">
          <PrensaContent />
        </div>
      </div>
    </main>
  );
}
