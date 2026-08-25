import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Headphones } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Krakatoa';
const SUBTITLE = 'Un volcán no se puede domesticar.';
const DESCRIPTION =
  'Krakatoa: el rugido del volcán transformado en música, tema principal de El Gran Makhaira, por Mauricio de la Maza-Benignos.';
const COVER = '/images/krakatoa-cover.png';
const VIDEO_ID = 'sKX4okPXEyA';
const PLATFORMS_URL = 'https://distrokid.com/hyperfollow/mauriciodelamaza/krakatoa';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/krakatoa`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/krakatoa`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Krakatoa — Mauricio de la Maza-Benignos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Texto del álbum Krakatoa (palabras del autor).
 * - 'p'    párrafo de cuerpo
 * - 'beat' línea breve y enfática (respeta la cadencia del texto)
 */
type Block = { type: 'p'; text: string } | { type: 'beat'; text: string };

const intro: Block[] = [
  { type: 'beat', text: 'Makhaira es un pinche volcán.' },
  {
    type: 'p',
    text: 'Krakatoa is the main musical theme of El Gran Makhaira. The composition began with a historical record of the atmospheric pressure waves produced by the catastrophic eruption of Krakatoa in 1883.',
  },
  {
    type: 'p',
    text: 'The eruption was so powerful that its pressure waves were detected by barometric instruments around the world. These were not recordings in the modern sense: the atmospheric disturbance was mechanically traced onto paper by instruments that recorded changes in pressure over time. The event thus left behind a physical record of its own violence.',
  },
  {
    type: 'p',
    text: 'Years later, I encountered a sonic reconstruction based on this historical record. It was not the original sound of the eruption, but an attempt to make that historical event audible again—to imagine what the roar of Krakatoa might have sounded like. That reconstruction was what first brought the volcano to my attention.',
  },
  {
    type: 'p',
    text: 'I became interested not simply in the sound itself, but in the possibility of treating it as musical material. What if the roar of a volcano could be translated into melody and harmony?',
  },
  { type: 'beat', text: 'Krakatoa emerged from that question.' },
  {
    type: 'p',
    text: 'The composition is built as electronic downtempo music, combining synthesized sounds with sampled strings and other orchestral timbres. The volcanic roar is not reproduced as a sound effect; instead, its perceived movement, resonance and energy became the starting point for melodic and harmonic structures.',
  },
  {
    type: 'p',
    text: 'The result is not an attempt to make music that merely sounds like a volcano. It is an attempt to transform the memory of a physical phenomenon into music.',
  },
  {
    type: 'p',
    text: 'The piece eventually became the musical theme of El Gran Makhaira, where Krakatoa gave way to Makhaira: another volcano, another personality, another form of uncertainty.',
  },
  {
    type: 'beat',
    text: 'You can study a volcano. You can observe it, measure it, film it, and try to understand it.',
  },
  { type: 'beat', text: 'You still cannot negotiate with it.' },
  { type: 'beat', text: 'Makhaira is a fucking volcano.' },
];

export default function KrakatoaPage() {
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
    url: `${siteConfig.url}/musica/krakatoa`,
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
              alt="Krakatoa — portada del álbum de Mauricio de la Maza-Benignos"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center font-headline text-2xl md:text-3xl italic text-accent text-balance">
            {SUBTITLE}
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={PLATFORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-headline text-base font-medium text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Headphones className="h-5 w-5" aria-hidden="true" />
              Escuchar en tu plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Texto + reproductor */}
      <article className="pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {intro.map((block, i) => {
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

            {/* Reproductor de YouTube */}
            <figure className="my-12">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Krakatoa — Mauricio de la Maza-Benignos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </figure>

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
