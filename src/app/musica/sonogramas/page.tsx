import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Sonogramas';
const SUBTITLE = 'Sobre el método detrás de Erótica y Guerra';
const DESCRIPTION =
  'Sonogramas: sobre el método detrás de Erótica y Guerra, por Mauricio de la Maza-Benignos.';
const COVER = '/images/erotica-cover.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/sonogramas`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/sonogramas`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Sonogramas — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Bloques del ensayo de Sonogramas.
 * - 'p'      párrafo de cuerpo
 * - 'beat'   línea breve y enfática
 * - 'quote'  cita destacada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string };

const essay: Block[] = [
  { type: 'quote', text: 'Lo que sobrevivió fue el patrón.' },
  { type: 'quote', text: 'No pretendo que reconozcan la fuente. Pretendo que hereden el estado.' },
  { type: 'quote', text: 'Los acontecimientos desaparecen. Los patrones permanecen.' },
];

const albums = [
  {
    id: 'erotica',
    title: 'Erótica',
    image: '/images/erotica-cover.jpg',
    imageAlt: 'Erótica — portada del álbum de Mauricio de la Maza',
    videoId: 'YAPxzoRX1_o',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/ertica',
  },
  {
    id: 'guerra',
    title: 'Guerra',
    image: '/images/guerra-cover.jpg',
    imageAlt: 'Guerra — portada del álbum de Mauricio de la Maza',
    videoId: '7oKX4PS1A24',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/guerrawar',
  },
];

export default function SonogramasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: `${siteConfig.url}${COVER}`,
    author: {
      '@type': 'Person',
      name: 'Mauricio de la Maza-Benignos',
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/musica/sonogramas`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Encabezado */}
      <section className="bg-background pt-28 md:pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/musica"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Música
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground text-balance">
              {TITLE}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-headline text-xl md:text-2xl italic text-accent text-balance">
              {SUBTITLE}
            </p>
          </div>
        </div>
      </section>

      {/* Ensayo */}
      <article className="pb-16 pt-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {essay.map((block, i) => {
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="my-12 border-l-4 border-accent pl-6 py-2">
                    <p className="font-headline text-2xl md:text-3xl font-bold italic text-foreground text-balance">
                      {block.text}
                    </p>
                  </blockquote>
                );
              }
              if (block.type === 'beat') {
                return (
                  <p
                    key={i}
                    className="my-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground text-pretty"
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="mb-6 text-lg md:text-xl leading-relaxed text-foreground/80 text-pretty"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* Álbumes */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {albums.map((album) => (
                <div key={album.id} className="flex flex-col">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src={album.image}
                      alt={album.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 512px"
                      className="object-cover"
                    />
                  </div>

                  <h2 className="mt-6 text-center font-headline text-3xl font-bold text-foreground">
                    {album.title}
                  </h2>

                  <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${album.videoId}`}
                      title={album.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <Link
                      href={album.platformsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      <Music className="h-3.5 w-3.5" aria-hidden="true" />
                      Escuchar en todas las plataformas
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Próximamente */}
            <div className="mt-12 rounded-xl border border-dashed border-border py-12 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Próximamente
              </p>
              <h2 className="mt-3 font-headline text-3xl font-bold text-foreground">Poder</h2>
              <p className="mt-2 text-sm italic text-muted-foreground">En proceso</p>
            </div>

            {/* Volver */}
            <div className="mt-16 text-center">
              <Link
                href="/musica"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Música
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
