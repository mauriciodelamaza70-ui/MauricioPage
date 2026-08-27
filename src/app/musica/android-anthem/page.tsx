import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Headphones, PlayCircle, Video } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Android Anthem';
const SUBTITLE =
  'Un futuro imaginado desde el pasado y experimentado en el presente.';
const DESCRIPTION =
  'Android Anthem: un imaginario retrofuturista donde sintetizadores, cuerpos, máquinas, agua y naturaleza forman un mismo lenguaje audiovisual, por Mauricio de la Maza-Benignos.';
const POSTER = '/images/android-anthem-cover.jpg';

// Enlace de HyperFollow para escuchar / guardar el álbum en las plataformas de streaming.
const HYPERFOLLOW_URL = 'https://distrokid.com/hyperfollow/mauriciodelamaza/android-anthem-2';

// Cuando el video esté disponible en YouTube, coloca aquí su ID (por ejemplo 'dQw4w9WgXcQ').
const VIDEO_ID: string | null = 'reJnLwjl2oE';

// Enlace provisional al video mientras se publica en YouTube.
const PROVISIONAL_VIDEO_URL: string | null = 'https://distrokid.com/videos/watch/dv-8CnZ5o5hK';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/android-anthem`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/android-anthem`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    // Imagen oficial de las tres androides (portada del álbum). Se declaran
    // dimensiones y tipo de forma explícita para que Facebook use SIEMPRE esta
    // portada y no sustituya la tarjeta por un frame del videoclip (Vevo/YouTube)
    // embebido más abajo en la página.
    images: [
      {
        url: `${siteConfig.url}${POSTER}`,
        secureUrl: `${siteConfig.url}${POSTER}`,
        width: 2917,
        height: 2917,
        type: 'image/jpeg',
        alt: 'Android Anthem — portada oficial con las tres figuras androides, de Mauricio de la Maza-Benignos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${POSTER}`],
  },
};

const essay: string[] = [
  'Android Anthem explora un imaginario retrofuturista donde la electrónica, el cuerpo y el paisaje convergen. La pieza combina sintetizadores Moog, percusiones 909 con una pulsación cercana al rock y guitarras eléctricas atmosféricas para construir un paisaje sonoro hipnótico, en el que la sensibilidad analógica se encuentra con una visión imaginada del futuro.',
  'La portada lleva este concepto al universo visual: tres figuras androides de apariencia humana, revestidas de metal y situadas frente a una arquitectura circular de luz, evocan una visión del futuro filtrada por la estética tecnológica de finales del siglo XX. El resultado es deliberadamente elegante, escénico y casi cinematográfico.',
  'El video musical traslada ese imaginario a un espacio completamente orgánico. Un hombre navega lentamente por el río de El Salto, en la Huasteca Potosina, mientras la repetición del movimiento, las montañas, los reflejos y la transformación progresiva del color convierten el recorrido en una experiencia visual hipnótica. Las intervenciones gráficas del piano introducen una dimensión tecnológica dentro del paisaje y conectan ambos mundos.',
  'Android Anthem propone así un futuro imaginado desde el pasado y experimentado en el presente: una pieza donde sintetizadores, cuerpos, máquinas, agua y naturaleza forman un mismo lenguaje audiovisual.',
];

export default function AndroidAnthemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    name: TITLE,
    description: DESCRIPTION,
    image: `${siteConfig.url}${POSTER}`,
    byArtist: {
      '@type': 'MusicGroup',
      name: 'Mauricio de la Maza-Benignos',
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/musica/android-anthem`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Poster / encabezado */}
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

          <div className="relative mx-auto w-full max-w-2xl aspect-square rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={POSTER}
              alt="Android Anthem — portada del álbum de Mauricio de la Maza"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center font-headline text-2xl md:text-3xl italic text-accent text-balance">
            {SUBTITLE}
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={HYPERFOLLOW_URL}
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

      {/* Ensayo */}
      <article className="pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {essay.map((text, i) => (
              <p
                key={i}
                className="mb-6 text-lg md:text-xl leading-relaxed text-foreground/80 text-pretty"
              >
                {text}
              </p>
            ))}

            {/* Video musical */}
            <div className="my-12">
              <h2 className="mb-6 text-center font-headline text-2xl md:text-3xl font-bold text-foreground">
                Video musical
              </h2>
              {VIDEO_ID ? (
                <figure>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                      title="Android Anthem — video musical"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </figure>
              ) : PROVISIONAL_VIDEO_URL ? (
                <a
                  href={PROVISIONAL_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl shadow-xl"
                  aria-label="Ver el video de Android Anthem en DistroKid"
                >
                  <Image
                    src={POSTER}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                    <PlayCircle
                      className="h-16 w-16 text-foreground transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="font-headline text-lg font-medium text-foreground text-balance">
                      Ver el video en DistroKid
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Disponible próximamente en YouTube
                    </span>
                  </div>
                </a>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-secondary/40 text-center">
                  <Video className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
                  <p className="px-6 font-headline text-lg font-medium text-muted-foreground text-balance">
                    El video musical estará disponible próximamente en YouTube.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
