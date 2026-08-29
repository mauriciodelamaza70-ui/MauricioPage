import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Busca provocar con su cine — Reforma';
const DESCRIPTION =
  "Perfil de Mauricio de la Maza-Benignos y su película El Gran Makhaira, por Paula Ruiz para Reforma (sección Gente, 28 de agosto de 2026): “estoy en contra de salir a explicarle a la gente qué es lo que acaba de ver”.";
const CLIPPING = '/images/prensa/reforma/recorte.png';
const ONLINE_URL =
  'https://www.reforma.com/busca-mauricio-de-la-maza-benignos-provocar-con-su-cine/ar3265829';

export const metadata: Metadata = {
  title: `${TITLE} | Mauricio de la Maza Benignos`,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/prensa/reforma`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/prensa/reforma`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${siteConfig.url}${CLIPPING}`,
        secureUrl: `${siteConfig.url}${CLIPPING}`,
        width: 865,
        height: 414,
        type: 'image/png',
        alt: "Recorte de la nota 'Busca provocar con su cine' publicada en Reforma, sección Gente, con una fotografía de Mauricio de la Maza-Benignos",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${CLIPPING}`],
  },
};

export default function ReformaPage() {
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
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
            Reforma — sección Gente
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-balance mt-3">
            Busca provocar con su cine
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Por Paula Ruiz · 28 de agosto de 2026
          </p>
        </header>

        {/* Recorte de periódico a tamaño completo */}
        <figure className="mt-12">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src={CLIPPING}
              alt="Recorte de la nota 'Busca provocar con su cine' publicada en la edición impresa de Reforma, sección Gente, con una fotografía del director Mauricio de la Maza-Benignos"
              width={865}
              height={414}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full"
              priority
            />
          </div>
          <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Ruiz, Paula. “Busca provocar con su cine”. <cite className="not-italic font-medium text-foreground">Reforma</cite>, sección Gente, 28 de agosto de 2026.
          </figcaption>
        </figure>

        {/* Enlace al artículo en línea */}
        <div className="mt-10">
          <a
            href={ONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Leer el artículo en Reforma.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
