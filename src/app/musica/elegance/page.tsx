import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Headphones, Video } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Elegance';
const SUBTITLE = 'Chamber music for synthetic orchestra.';
const DESCRIPTION =
  'Elegance: música de cámara sintética donde la lógica espacial, el diálogo entre voces y la construcción de la textura definen una cámara que no existe físicamente, por Mauricio de la Maza-Benignos.';
const POSTER = '/images/elegance-cover.jpg';

// Enlace de HyperFollow para escuchar / guardar el álbum en las plataformas de streaming.
const HYPERFOLLOW_URL = 'https://distrokid.com/hyperfollow/mauriciodelamaza/elegance';

// Cuando el video esté disponible en YouTube, coloca aquí su ID (por ejemplo 'dQw4w9WgXcQ').
const VIDEO_ID: string | null = '_Ym5Fwzwq3s';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/elegance`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/elegance`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${POSTER}`, alt: 'Elegance — Mauricio de la Maza Benignos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${POSTER}`],
  },
};

const essay: string[] = [
  'Esta obra puede entenderse como una pieza de música de cámara construida mediante una paleta instrumental sintética de carácter sinfónico. Los instrumentos no buscan reproducir una orquesta completa como una masa sonora, sino comportarse como voces individuales dentro de un espacio acústico imaginado. Su disposición responde a un mapa virtual de cámara, de modo que la posición de cada instrumento forma parte de la propia composición: el contrapunto no ocurre únicamente entre notas y timbres, sino también entre ubicaciones y profundidades.',
  'La música se desarrolla mediante la incorporación y retirada progresiva de estas voces, creando una textura que pasa de una relativa transparencia a momentos de mayor densidad y posteriormente vuelve a abrirse. Las líneas conservan cierta independencia, permitiendo percibir los instrumentos como participantes de un conjunto antes que como componentes indistinguibles de una masa orquestal. La elección de samples sinfónicos funciona, por tanto, como una paleta tímbrica más que como una pretensión de realismo instrumental.',
  'El resultado se sitúa en un territorio intermedio entre la música de cámara contemporánea y la composición electrónica: una música de cámara sintética, en la que la lógica espacial, el diálogo entre voces y la construcción de la textura son más importantes que la reproducción literal de una interpretación acústica. Hacia el final, la aparición de un drone de sicas introduce deliberadamente un elemento ajeno a esa paleta sinfónica y modifica el carácter del espacio sonoro, como una irrupción que desplaza la pieza fuera del marco camerístico que había establecido.',
  'La obra no intenta ocultar su naturaleza sintética. Al contrario, utiliza esa condición para construir un espacio musical propio: una cámara que no existe físicamente, pero cuya arquitectura determina cómo se escuchan y relacionan sus instrumentos.',
];

export default function ElegancePage() {
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
    url: `${siteConfig.url}/musica/elegance`,
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
              alt="Elegance — portada del álbum de Mauricio de la Maza Benignos"
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
                      title="Elegance — video musical"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </figure>
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
