import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Post-Punk';
const SUBTITLE = 'Dos piezas donde la crudeza del post-punk se vuelve materia de composición.';
const DESCRIPTION =
  'Post-Punk: dos piezas de Mauricio de la Maza-Benignos, incluyendo «Pinche Punk» (feat. Ana González) y «Dulce Sensación».';
const COVER = '/images/pinche-punk-cover.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/post-punk`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/post-punk`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Post-Punk — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Bloques de texto reutilizables.
 * - 'p'      párrafo de cuerpo
 * - 'beat'   línea breve y enfática
 * - 'quote'  cita destacada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string };

// Texto introductorio conjunto de la sección (pendiente de recibir).
const intro: Block[] = [];

type Track = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  videoId: string;
  platformsUrl: string;
  featuring?: string;
  /** Ensayo o descripción propia de la pieza. */
  essay?: Block[];
  /** Cita de reseña destacada. */
  reviewQuote?: string;
  /** Si true, el ensayo se muestra antes del reproductor; si no, después. */
  essayBeforeVideo?: boolean;
};

const tracks: Track[] = [
  {
    id: 'pinche-punk',
    title: 'Pinche Punk',
    image: '/images/pinche-punk-cover.jpg',
    imageAlt: 'Pinche Punk — portada del sencillo de Mauricio de la Maza feat. Ana González',
    videoId: '8hqyaiI2EGk',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/pinche-punk-feat-ana-gonzlez',
    featuring: 'Featuring Ana González',
    reviewQuote: '',
    essayBeforeVideo: false,
  },
  {
    id: 'dulce-sensacion',
    title: 'Dulce Sensación',
    image: '/images/dulce-sensacion-cover.jpg',
    imageAlt: 'Dulce Sensación — portada del sencillo de Mauricio de la Maza',
    videoId: '6Ii2-JAcJWs',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/dulce-sensacin',
    essay: [],
    essayBeforeVideo: true,
  },
];

function renderBlocks(blocks: Block[]) {
  return blocks.map((block, i) => {
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
  });
}

export default function PostPunkPage() {
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
    url: `${siteConfig.url}/musica/post-punk`,
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
            {SUBTITLE && (
              <p className="mx-auto mt-4 max-w-2xl font-headline text-xl md:text-2xl italic text-accent text-balance">
                {SUBTITLE}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Texto introductorio conjunto */}
      {intro.length > 0 && (
        <article className="pb-8 pt-4">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">{renderBlocks(intro)}</div>
          </div>
        </article>
      )}

      {/* Piezas */}
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

                {track.featuring && (
                  <p className="mt-2 text-center text-sm font-medium uppercase tracking-wide text-accent">
                    {track.featuring}
                  </p>
                )}

                {track.essayBeforeVideo && track.essay && track.essay.length > 0 && (
                  <div className="mt-6">{renderBlocks(track.essay)}</div>
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

                {!track.essayBeforeVideo && track.essay && track.essay.length > 0 && (
                  <div className="mt-6">{renderBlocks(track.essay)}</div>
                )}

                {track.reviewQuote && (
                  <blockquote className="mt-8 border-l-4 border-accent pl-6 py-2">
                    <p className="font-headline text-xl md:text-2xl font-medium italic text-foreground text-balance">
                      {track.reviewQuote}
                    </p>
                  </blockquote>
                )}

                <div className="mt-4 text-center">
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

            {/* Volver a Música */}
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
