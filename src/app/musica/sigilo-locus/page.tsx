import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Sigilo y Locus';
const DESCRIPTION =
  'Sigilo y Locus: dos composiciones nacidas de la misma arquitectura rítmica, por Mauricio de la Maza-Benignos.';
const OG_COVER = '/images/sigilo-cover.png';

const SIGILO_COVER = '/images/sigilo-cover.png';
const LOCUS_COVER = '/images/locus-cover.jpg';

// Videos por álbum. Mientras el ID siga en el placeholder, el iframe permanece oculto
// para no romper el layout con un reproductor vacío.
const SIGILO_VIDEO_ID = 'PENDIENTE_URL_YOUTUBE_SIGILO';
const SIGILO_HAS_VIDEO = SIGILO_VIDEO_ID !== 'PENDIENTE_URL_YOUTUBE_SIGILO';
const SIGILO_PLATFORMS_URL = 'PENDIENTE_URL_DISTROKID_SIGILO';

const LOCUS_VIDEO_ID = '2SdPLghPswA';
const LOCUS_HAS_VIDEO = LOCUS_VIDEO_ID !== 'PENDIENTE_URL_YOUTUBE';
const LOCUS_PLATFORMS_URL = 'https://distrokid.com/hyperfollow/mauriciodelamaza/locus';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/sigilo-locus`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/sigilo-locus`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${OG_COVER}`, alt: 'Sigilo y Locus — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${OG_COVER}`],
  },
};

/**
 * Bloques del cuerpo editorial.
 * - 'header'    subtítulo de sección (serif italic accent, mismo nivel que "El fundamento" en Locus)
 * - 'p'         párrafo de cuerpo
 * - 'beat'      línea breve y enfática en su propio párrafo
 */
type Block =
  | { type: 'header'; text: string }
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string };

// Sección compartida de apertura.
const intro: Block[] = [
  { type: 'header', text: 'El punto de partida' },
  {
    type: 'p',
    text: 'Sigilo y Locus nacieron de procesos distintos, pero comparten una misma manera de construir sonido.',
  },
  { type: 'beat', text: 'Ninguna de las dos partió de un género.' },
  { type: 'beat', text: 'Partieron de una estructura.' },
  {
    type: 'p',
    text: 'El punto de partida fue el tresillo del dembow: bombo y contratiempo distribuidos sobre una misma síncopa. No representaba un destino estético. Era simplemente una arquitectura rítmica de extraordinaria solidez.',
  },
  { type: 'p', text: 'Cada composición desarrolló esa estructura de manera distinta.' },
  { type: 'beat', text: 'La orquestación cambió.' },
  { type: 'beat', text: 'La armonía cambió.' },
  { type: 'beat', text: 'La intención cambió.' },
  { type: 'beat', text: 'Pero el pulso permaneció.' },
  { type: 'beat', text: 'Por eso ambas conservan un cierto aire de familia.' },
  { type: 'beat', text: 'No porque pertenezcan al mismo género.' },
  { type: 'beat', text: 'Sino porque comparten una misma forma de organizar el tiempo.' },
  { type: 'p', text: 'La composición continuó desde otros lenguajes.' },
  { type: 'beat', text: 'La música clásica.' },
  { type: 'beat', text: 'El rock progresivo.' },
  { type: 'beat', text: 'El pop.' },
  { type: 'beat', text: 'La escritura orquestal.' },
  { type: 'beat', text: 'Los sintetizadores.' },
  {
    type: 'p',
    text: 'Cada uno aportó una forma distinta de construir tensión, movimiento o espacio.',
  },
  { type: 'beat', text: 'El resultado ya no pertenece por completo a ninguno de ellos.' },
  { type: 'beat', text: 'Compone su propio territorio.' },
  { type: 'beat', text: 'No escucho la música buscando identidades.' },
  { type: 'beat', text: 'La escucho buscando soluciones.' },
  {
    type: 'p',
    text: 'Cada tradición ha descubierto recursos extraordinarios para resolver problemas distintos: una síncopa, un fraseo, una progresión armónica, una manera de distribuir el espacio sonoro o de administrar la energía.',
  },
  { type: 'beat', text: 'Los incorporo cuando la obra los necesita.' },
  { type: 'beat', text: 'Nunca porque pertenezcan a un género.' },
  {
    type: 'p',
    text: 'Las trompetas de Sigilo y Locus no citan una big band. Recuperan el ataque, la síncopa y la energía del jazz latino y de la orquesta afrocaribeña.',
  },
  { type: 'beat', text: 'No como homenaje.' },
  { type: 'beat', text: 'Como lenguaje.' },
];

// Cuerpo de Sigilo.
const sigilo: Block[] = [
  { type: 'header', text: 'El deseo como territorio' },
  {
    type: 'p',
    text: 'Sigilo explora el deseo. No el deseo cumplido, sino el que permanece abierto: una mirada, un recuerdo, una promesa, una conversación que todavía no ocurre. El perfume que permanece cuando el cuerpo ya no está.',
  },
  {
    type: 'p',
    text: 'Quizá esa sea una de las facultades más singulares de nuestra especie: la capacidad de habitar simultáneamente el pasado, el presente y el futuro. Y el destiempo. Ese territorio donde la imaginación reúne aquello que fue, aquello que es, aquello que será y aquello que jamás ocurrirá.',
  },
  {
    type: 'p',
    text: 'Donde una conversación imaginada puede permanecer. Donde un encuentro inexistente puede dejar memoria. Donde una despedida nunca pronunciada continúa resonando.',
  },
  { type: 'header', text: 'El destiempo' },
  {
    type: 'p',
    text: 'Vivimos simultáneamente en el mundo que existe y en el mundo que imaginamos. El deseo pertenece a ambos. No se limita a aquello que posee. Habita aquello que recuerda, aquello que espera, y aquello que nunca dejará de imaginar.',
  },
  {
    type: 'p',
    text: 'En ese espacio transcurre Sigilo. Cuando el deseo existe plenamente porque todavía permanece abierto a todas sus posibilidades. Como una melodía suspendida antes de resolver su última nota. Como un perfume que continúa existiendo cuando la presencia ya se ha ido. Como una mirada capaz de transformar una historia.',
  },
  { type: 'header', text: 'La construcción' },
  {
    type: 'p',
    text: 'La composición responde a la misma lógica que su concepto. No fue concebida para narrar una historia, sino para habitar un estado.',
  },
  {
    type: 'p',
    text: 'El impulso nace de los redobles de la percusión, que acumulan expectativa sin precipitar nunca su resolución. La energía no proviene de la velocidad, sino de esa tensión creciente que permanece siempre a punto de desbordarse.',
  },
  {
    type: 'p',
    text: 'Sobre ese pulso, los pianos y la marimba organizan el movimiento rítmico; los metales expanden la tensión; las cuerdas prolongan la resonancia emocional; los coros, desprovistos de palabras, sustituyen el lenguaje por la respiración.',
  },
  {
    type: 'p',
    text: 'Las texturas electrónicas se filtran entre los instrumentos acústicos sin anunciarse, como una segunda respiración de la orquesta.',
  },
  {
    type: 'p',
    text: 'Los instrumentos aparecen, se aproximan y desaparecen antes de agotar su significado. La música evita resolver aquello que la imaginación todavía mantiene abierto.',
  },
  {
    type: 'p',
    text: 'Produce una experiencia simultáneamente física e imaginaria. Invita al movimiento. Pero también a la contemplación. A la cercanía. Y a ese territorio ambiguo donde la elegancia y la sensualidad dejan de ser opuestas.',
  },
];

// Cuerpo de Locus (placeholder temporal, se completará copiando el contenido de /musica/locus).
const locus: Block[] = [
  { type: 'p', text: 'Contenido de Locus pendiente de insertar.' },
];

function BodyBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'header') {
          return (
            <h3
              key={i}
              className="mt-14 mb-6 font-headline text-2xl md:text-3xl italic text-accent text-balance"
            >
              {block.text}
            </h3>
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
    </>
  );
}

function PlatformsLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs italic text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
    >
      <Music className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </Link>
  );
}

export default function SigiloLocusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicPlaylist',
    name: TITLE,
    description: DESCRIPTION,
    image: `${siteConfig.url}${OG_COVER}`,
    byArtist: {
      '@type': 'MusicGroup',
      name: 'Mauricio de la Maza-Benignos',
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/musica/sigilo-locus`,
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

          <h1 className="text-center font-headline text-4xl md:text-6xl font-bold text-foreground text-balance">
            {TITLE}
          </h1>
        </div>
      </section>

      {/* Cuerpo editorial */}
      <article className="pb-24 pt-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Apertura compartida */}
            <BodyBlocks blocks={intro} />

            {/* --- Sigilo --- */}
            <h2 className="mt-20 mb-10 text-center font-headline text-3xl md:text-5xl font-bold text-foreground text-balance">
              Sigilo
            </h2>

            <figure className="my-10">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={SIGILO_COVER}
                  alt="Sigilo — portada de la composición de Mauricio de la Maza"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </figure>

            <BodyBlocks blocks={sigilo} />

            {/* Reproductor de Sigilo — oculto hasta reemplazar el placeholder de URL */}
            <figure className="my-12">
              {SIGILO_HAS_VIDEO && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${SIGILO_VIDEO_ID}`}
                    title="Sigilo — Mauricio de la Maza"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
              <figcaption className={SIGILO_HAS_VIDEO ? 'mt-3 text-center' : 'text-center'}>
                <PlatformsLink href={SIGILO_PLATFORMS_URL} label="Escuchar Sigilo en todas las plataformas" />
              </figcaption>
            </figure>

            {/* --- Locus --- */}
            <h2 className="mt-20 mb-10 text-center font-headline text-3xl md:text-5xl font-bold text-foreground text-balance">
              Locus
            </h2>

            <figure className="my-10">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={LOCUS_COVER}
                  alt="Locus — portada del álbum de Mauricio de la Maza"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </figure>

            <BodyBlocks blocks={locus} />

            {/* Reproductor de Locus */}
            <figure className="my-12">
              {LOCUS_HAS_VIDEO && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${LOCUS_VIDEO_ID}`}
                    title="Locus — Mauricio de la Maza"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
              <figcaption className={LOCUS_HAS_VIDEO ? 'mt-3 text-center' : 'text-center'}>
                <PlatformsLink href={LOCUS_PLATFORMS_URL} label="Escuchar Locus en todas las plataformas" />
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
