import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Pinceladas Mexicanas';
const SUBTITLE = 'Algunas obras nacen del lugar donde uno nació.';
const DESCRIPTION =
  'Pinceladas Mexicanas: una colección de obras que nacen del lugar donde uno nació, por Mauricio de la Maza-Benignos.';
const COVER = '/images/campanas-cover.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/pinceladas-mexicanas`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/pinceladas-mexicanas`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Pinceladas Mexicanas — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Bloques del texto introductorio.
 * - 'p'      párrafo de cuerpo
 * - 'beat'   línea breve y enfática
 * - 'quote'  cita destacada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string };

const intro: Block[] = [];

type Track = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  videoId: string;
  platformsUrl: string;
  description?: string;
};

const tracks: Track[] = [
  {
    id: 'campanas',
    title: 'Campanas',
    image: '/images/campanas-cover.jpg',
    imageAlt: 'Campanas — portada del álbum de Mauricio de la Maza',
    videoId: 'EwtKi7x0pJw',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/campanas-bells',
  },
  {
    id: 'a-que-mi-don-porfirio',
    title: 'A qué, mi Don Porfirio',
    image: '/images/don-porfirio-cover.jpg',
    imageAlt: 'A qué, mi Don Porfirio — portada del álbum de Mauricio de la Maza',
    videoId: '2vv0N6au3is',
    platformsUrl:
      'https://distrokid.com/hyperfollow/mauriciodelamaza/a-qu-mi-don-porfirio-come-on-don-porfirio',
  },
  {
    id: 'prieta-de-mi-amor',
    title: 'Prieta de mi Amor',
    image: '/images/prieta-de-mi-amor-cover.jpg',
    imageAlt: 'Prieta de mi Amor — portada del álbum de Mauricio de la Maza',
    videoId: 'StAwDGMAu30',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/prieta-de-mi-amor',
  },
  {
    id: 'el-gallo-petenero',
    title: 'El Gallo Petenero',
    image: '/images/gallo-petenero-cover.jpg',
    imageAlt: 'El Gallo Petenero — portada del álbum de Mauricio de la Maza',
    videoId: 'Lg6SkhdBKQI',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/el-gallo-petenero',
  },
];

export default function PinceladasMexicanasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicPlaylist',
    name: TITLE,
    description: DESCRIPTION,
    image: `${siteConfig.url}${COVER}`,
    author: {
      '@type': 'Person',
      name: 'Mauricio de la Maza-Benignos',
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/musica/pinceladas-mexicanas`,
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

      {/* Texto introductorio */}
      {intro.length > 0 && (
        <article className="pb-8 pt-4">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {intro.map((block, i) => {
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
      )}

      {/* Pistas */}
      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-col gap-20">
            {tracks.map((track) => (
              <div key={track.id} className="flex flex-col">
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={track.image}
                    alt={track.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-6 text-center font-headline text-3xl font-bold text-foreground text-balance">
                  {track.title}
                </h2>

                {track.description && (
                  <p className="mt-4 text-lg leading-relaxed text-foreground/80 text-pretty">
                    {track.description}
                  </p>
                )}

                <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${track.videoId}`}
                    title={track.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="mt-3 text-center">
                  <Link
                    href={track.platformsUrl}
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

            {/* Volver */}
            <div className="text-center">
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
