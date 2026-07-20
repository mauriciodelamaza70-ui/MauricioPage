import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Asia';
const SUBTITLE =
  'Una evocación artística del mundo que un macedonio pudo descubrir durante las campañas de Alejandro Magno';
const DESCRIPTION =
  'Asia: una evocación artística del mundo que un macedonio pudo descubrir durante las campañas de Alejandro Magno, por Mauricio de la Maza-Benignos.';
const COVER = '/images/asia-cover.jpg';
const PLATFORMS_URL = 'https://distrokid.com/hyperfollow/mauriciodelamaza/asia';

const videos = [
  { id: 'GKEr0SGhvoQ', title: 'Asia Menor' },
  { id: 'VlrxPxyfudY', title: 'Manisha' },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/asia`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/asia`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Asia — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Ensayo del álbum Asia.
 * - 'p'     párrafo de cuerpo
 * - 'beat'  línea breve y enfática (respeta la cadencia del texto)
 * - 'quote' cita destacada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string };

const essay: Block[] = [];

export default function AsiaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    name: TITLE,
    description: DESCRIPTION,
    image: `${siteConfig.url}${COVER}`,
    byArtist: {
      '@type': 'MusicGroup',
      name: 'Mauricio de la Maza-Benignos',
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/musica/asia`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Portada / encabezado */}
      <section className="bg-background pt-28 md:pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/musica"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Música
          </Link>

          <h1 className="sr-only">{TITLE}</h1>

          <div className="relative mx-auto w-full max-w-3xl aspect-square rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={COVER}
              alt="Asia — portada del álbum de Mauricio de la Maza"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center font-headline text-2xl md:text-3xl italic text-accent text-balance">
            {SUBTITLE}
          </p>
        </div>
      </section>

      {/* Ensayo + reproductores */}
      <article className="pb-24 pt-8">
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

            {/* Reproductores de YouTube lado a lado */}
            <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {videos.map((video) => (
                <figure key={video.id}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`${video.title} — Mauricio de la Maza`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-center font-headline text-lg font-medium text-accent">
                    {video.title}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Botón único de plataformas */}
            <div className="text-center">
              <Link
                href={PLATFORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                <Music className="h-3.5 w-3.5" aria-hidden="true" />
                Escuchar en todas las plataformas
              </Link>
            </div>

            {/* Volver a Música */}
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
      </article>
    </>
  );
}
