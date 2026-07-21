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

// Texto introductorio conjunto de la sección.
const intro: Block[] = [
  {
    type: 'p',
    text: 'Pinche Punk y Dulce Sensación parten del vocabulario del post-punk —bajos melódicos, repetición hipnótica y tensión sostenida—, pero lo trasladan a una producción dominada por sintetizadores. Más que reconstruir un sonido histórico, ambas piezas exploran los mecanismos que hicieron del post-punk un lenguaje expresivo, desplazando sus funciones tradicionales: en Pinche Punk, la voz dialoga con el bajo como eje narrativo; en Dulce Sensación, esa misma función vocal es asumida por un órgano Hammond. En ambos casos, el resultado busca una relectura contemporánea de ese lenguaje.',
  },
];

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
    featuring: 'Con la participación de Ana González',
    reviewQuote:
      '«Pinche Punk, de Mauricio de la Maza, ofrece una combinación convincente de letras afiladas y una producción pulida que captura la atención del oyente de inmediato. El intrincado juego de palabras y las imágenes evocadoras de la pieza están a la altura de un paisaje sonoro seguro de sí mismo que invita a escuchas repetidas...»',
    essayBeforeVideo: false,
  },
  {
    id: 'dulce-sensacion',
    title: 'Dulce Sensación',
    image: '/images/dulce-sensacion-cover.jpg',
    imageAlt: 'Dulce Sensación — portada del sencillo de Mauricio de la Maza',
    videoId: '6Ii2-JAcJWs',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/dulce-sensacin',
    essay: [
      {
        type: 'p',
        text: 'Dulce Sensación es una pieza instrumental construida sobre un pulso de synth bass constante y una batería con gated reverb, en clave de Mi menor, a 122 pulsaciones por minuto. Su textura pertenece a un lenguaje synthwave de tonalidad oscura: sintetizadores atmosféricos, un ritmo propulsivo y sostenido, y una energía que no estalla sino que se acumula por capas, como una tensión que crece sin descargarse del todo.',
      },
      {
        type: 'p',
        text: 'La pieza nació con letra y melodía vocal, escrita originalmente para una escena de antro —cuerpo, mirada, cesión— bajo el título Mera Tentación. La urgencia de la producción impidió grabar la voz. En su lugar, un órgano Hammond, configurado deliberadamente en su registro más alejado de lo coral, ocupó el espacio que la voz debía habitar. Lo que iba a cantarse quedó tocado: la melodía persiste, pero despojada de su cuerpo humano, sustituida por un instrumento históricamente asociado a lo litúrgico y lo comunitario, ahora vaciado de esa función y puesto al servicio de algo más frío, más nocturno, más solitario.',
      },
      {
        type: 'p',
        text: 'La letra —que nunca se cantó, pero que sigue ahí, debajo, dictando el fraseo del Hammond— describe una progresión precisa: ruido lento sobre la piel, roce, sugestión, la mirada que primero nadie da y luego todos dan, el fuego que sube, la cesión, la caída. Es una coreografía verbal del cuerpo ante el deseo colectivo, escrita para el espacio físico de un club, con una métrica pensada para el pulso antes que para el oído.',
      },
      {
        type: 'p',
        text: 'Dulce Sensación es, entonces, una canción que se negó a sí misma la voz. No por censura ni por accidente, sino por la misma lógica que atraviesa el resto de mi trabajo: un fundamento riguroso —composición, letra, arreglo y teoría— seguido siempre de una torsión deliberada que lo desvía de su forma esperada. Lo que debía cantarse, se toca. Lo que debía ser coral, se vuelve íntimo. Lo que debía resolverse, permanece en tensión.',
      },
      {
        type: 'p',
        text: 'La imagen que acompaña la pieza sigue la misma lógica que su construcción sonora. Su referencia no es la iconografía del post-punk, sino un registro pictórico contemporáneo a la misma época: la carnalidad cruda y sin idealizar de Lucian Freud, esa pincelada densa que trata el cuerpo como materia antes que como representación. Esa fidelidad al gesto pictórico, a la textura y a la mirada frontal queda, sin embargo, atravesada por una herramienta que no pertenece ni a ese tiempo ni a ese oficio. La imagen no pretende ser un cuadro de Freud ni una reconstrucción documental de los años ochenta; pretende comportarse como uno, del mismo modo en que el Hammond se comporta como una voz que nunca llegó a sonar. En ambos casos, la sustitución no busca ocultar una ausencia, sino convertirla en parte de la obra. La ausencia de voz es, por ahora, la forma que tomó la pieza; no necesariamente su forma definitiva.',
      },
    ],
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
