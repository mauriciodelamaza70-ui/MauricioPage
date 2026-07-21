import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Nacieron los perritos';
const SUBTITLE = 'Una alegría que no necesitó ser fabricada';
const DESCRIPTION =
  'Nacieron los perritos: una obra de Mauricio de la Maza-Benignos sobre la alegría sencilla y genuina de la vida que comienza.';
const COVER = '/images/nacieron-los-perritos-cover.jpg';
const ALBUM_COVER = '/images/nacieron-los-perritos-original.jpg';
const VIDEO_ID = 'XXzzyDbI_pg';
const PLATFORMS_URL =
  'https://distrokid.com/hyperfollow/mauriciodelamaza/nacieron-los-perritos-puppies-were-born';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/nacieron-los-perritos`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/nacieron-los-perritos`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Nacieron los perritos — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Ensayo del álbum "Nacieron los perritos".
 * - 'p'    párrafo de cuerpo
 * - 'beat' línea breve y enfática (respeta la cadencia del texto)
 * - 'quote' cita destacada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string };

const essay: Block[] = [
  {
    type: 'quote',
    text: 'Alguien cercano me hizo una pregunta que se quedó rondando: con todo ese talento, ¿por qué nunca haces algo bonito?',
  },
  {
    type: 'p',
    text: 'Mi primera respuesta fue técnica: claro que puedo. Entiendo las estructuras; puedo replicar cualquiera de ellas, incluida la de la alegría convencional. Pero enseguida entendí que eso habría sido una ilustración, no una obra. Repetir el código de la felicidad no es lo mismo que sentirla.',
  },
  {
    type: 'p',
    text: 'Así que hice algo que no suelo hacer: en vez de reflejar una emoción que ya estaba viviendo, salí a buscar una, deliberadamente. Pensé en los pocos momentos que despiertan en mí una felicidad legítima, sin reservas — y llegué a lo que más respeto en este mundo: un ser vivo incorporándose a él.',
  },
  {
    type: 'p',
    text: 'No hubo análisis esta vez. No hubo sonograma, ni fuente que destilar, ni estructura que reconstruir. Solo una perra con su camada, y la certeza de que ese instante no necesitaba nada más.',
  },
  {
    type: 'beat',
    text: 'Es, quizás, la pieza más simple de todo mi catálogo. Y por eso mismo, la más honesta.',
  },
];

export default function NacieronLosPerritosPage() {
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
    url: `${siteConfig.url}/musica/nacieron-los-perritos`,
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

          <div className="relative mx-auto w-full max-w-4xl aspect-[3/2] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={COVER}
              alt="Un niño observa a una perra con su camada de cachorros recién nacidos"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center font-headline text-2xl md:text-3xl italic text-accent text-balance">
            {SUBTITLE}
          </p>
        </div>
      </section>

      {/* Ensayo + portada original + reproductor */}
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

            {/* Portada original del álbum */}
            <figure className="my-12">
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={ALBUM_COVER}
                  alt="Nacieron los perritos — portada original del álbum, una bulldog francesa con su camada"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Portada original del álbum
              </figcaption>
            </figure>

            {/* Reproductor de YouTube */}
            <figure className="my-12">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Nacieron los perritos — Mauricio de la Maza"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-center">
                <Link
                  href={PLATFORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  <Music className="h-3.5 w-3.5" aria-hidden="true" />
                  Escuchar en todas las plataformas
                </Link>
              </figcaption>
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
