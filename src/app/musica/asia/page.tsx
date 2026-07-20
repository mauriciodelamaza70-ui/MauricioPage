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
// Imagen usada al compartir el enlace en redes sociales (Facebook, X, etc.)
const SOCIAL_IMAGE = '/images/asia-gallery-2.jpg';
const PLATFORMS_URL = 'https://distrokid.com/hyperfollow/mauriciodelamaza/asia';

const videos = [
  {
    id: 'GKEr0SGhvoQ',
    title: 'Asia Menor',
    note: 'Asia Menor abre el recorrido con el primer paso hacia Oriente. Sobre un pulso rítmico que evoca el movimiento constante de caravanas y viajeros, la obra reúne lenguajes musicales separados por siglos. Una flauta de lenguaje jazzístico dialoga con escalas orientales, mientras mantras, ululaciones y los rugidos de camellos se integran al paisaje sonoro de las antiguas rutas caravaneras. La pieza no pretende reconstruir la música del siglo IV a. C.; propone una evocación contemporánea del encuentro entre un viajero del mundo mediterráneo y las culturas que iba descubriendo a medida que avanzaba hacia Oriente.',
  },
  {
    id: 'VlrxPxyfudY',
    title: 'Manisha',
    note: 'Manisha representa el momento en que el viaje alcanza el subcontinente indio. Su nombre, de origen sánscrito, significa sabiduría o entendimiento profundo. A diferencia del impulso de Asia Menor, esta obra propone una pausa. El ritmo adquiere un carácter sereno, mientras los mantras, las escalas inspiradas en la tradición india y una instrumentación de influencia contemporánea construyen un espacio de contemplación. No es una recreación histórica, sino una evocación de la India como lugar de encuentro entre la espiritualidad, la música y la memoria. Más que continuar el viaje, la pieza invita a habitarlo.',
  },
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
    images: [{ url: `${siteConfig.url}${SOCIAL_IMAGE}`, alt: 'Asia — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${SOCIAL_IMAGE}`],
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
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string };

const essay: Block[] = [
  {
    type: 'beat',
    text: 'Algunas obras nacen de un lugar. Otras, de un momento de la historia.',
  },
  {
    type: 'p',
    text: 'Asia nació de una pregunta sencilla: ¿qué habría ofrecido el Asia del mundo clásico a un visitante macedonio durante las campañas de Alejandro Magno?',
  },
  {
    type: 'p',
    text: 'En esta obra, Asia se entiende en el sentido geográfico del mundo antiguo. Aunque Plinio el Viejo escribió más de cuatro siglos después de Alejandro, la concepción de Asia que presenta en su Historia Natural conserva una visión muy cercana a la que inspira este proyecto: el gran corredor que se extiende desde Asia Menor hasta el valle del Indo, donde durante siglos convergieron las tradiciones mediterráneas, persas, centroasiáticas e indias.',
  },
  {
    type: 'image',
    src: '/images/asia-gallery-1.jpg',
    alt: 'Una pastora con su rebaño en las montañas mientras avanza la columna macedonia',
  },
  {
    type: 'p',
    text: 'La música propone un recorrido por ese mismo corredor. La orquesta occidental dialoga con instrumentos de la India, mantras, sonoridades inspiradas en las antiguas rutas caravaneras, una flauta de jazz e incluso ritmos contemporáneos. No pretende reconstruir el sonido del siglo IV antes de nuestra era. Busca imaginar el encuentro entre un viajero del mundo mediterráneo y las culturas que iba descubriendo a medida que avanzaba hacia Oriente. Como toda tradición viva, aquellas culturas se transformaban continuamente mediante el intercambio, y esa misma idea de encuentro constituye el eje de esta obra.',
  },
  {
    type: 'image',
    src: '/images/asia-gallery-2.jpg',
    alt: 'Una bailarina danza junto a la fogata y la caravana de camellos al atardecer',
  },
  {
    type: 'p',
    text: 'La portada nació de la misma convicción. Fue realizada íntegramente en Photoshop, antes de la aparición de la inteligencia artificial, y construida a partir de elementos cuya continuidad histórica permite evocar aquel paisaje humano: camellos bactrianos, un paisaje árido y el horizonte de las antiguas caravanas. El rostro que preside la portada evoca a los pueblos del Hindu Kush, la región montañosa situada entre los actuales Afganistán y Pakistán que Alejandro atravesó antes de llegar al valle del Indo. No retrata a nadie en particular; es una evocación de ese territorio y de quienes lo habitaron hace más de dos mil años.',
  },
  {
    type: 'p',
    text: 'Asia es, en última instancia, una evocación artística del mundo que un macedonio pudo descubrir durante las campañas de Alejandro Magno: un espacio donde el Mediterráneo, Persia, Asia Central y la India entraron en contacto de una manera que transformó profundamente la historia de esas regiones. Como la propia ruta que inspira esta obra, la música también es un viaje: una conversación entre culturas, entre épocas y entre memorias que continúan dialogando hasta el presente.',
  },
];

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
              if (block.type === 'image') {
                return (
                  <div
                    key={i}
                    className="relative my-12 aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg"
                  >
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
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

            {/* Imagen final del recorrido: llegada al valle del Indo */}
            <div className="relative my-12 aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/asia-gallery-3.jpg"
                alt="La llegada al valle del Indo, con un elefante y el río a lo lejos"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

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
                  <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
                    {video.note}
                  </p>
                  <figcaption className="mt-3 text-center font-headline text-lg font-medium italic text-accent">
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
