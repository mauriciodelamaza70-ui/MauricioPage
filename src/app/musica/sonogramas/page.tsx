import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Sonogramas';
const SUBTITLE = 'Sobre el método detrás de Erótica y Guerra';
const DESCRIPTION =
  'Sonogramas: sobre el método detrás de Erótica y Guerra, por Mauricio de la Maza-Benignos.';
const COVER = '/images/erotica-cover.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/sonogramas`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/sonogramas`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Sonogramas — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Bloques del ensayo de Sonogramas.
 * - 'p'      párrafo de cuerpo
 * - 'beat'   línea breve y enfática
 * - 'quote'  cita destacada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string };

const essay: Block[] = [
  {
    type: 'beat',
    text: 'Hay instantes humanos que no necesitan ser contados. Necesitan ser sentidos.',
  },
  {
    type: 'p',
    text: 'Un acto erótico. Una batalla real, grabada en Nueva Guinea. Dos eventos que, en su forma original, pertenecen al mundo de la anécdota: algo que ocurrió, a alguien, en algún lugar. Si los hubiera representado tal cual, habría hecho ilustración. Habría contado una historia.',
  },
  { type: 'beat', text: 'No fue eso lo que busqué.' },
  {
    type: 'p',
    text: 'Tomé la grabación de cada instante y la convertí en un sonograma: una traducción matemática de sus frecuencias, su ritmo y su textura. A partir de ahí comenzó el verdadero trabajo. Deshice la voz, el grito, el jadeo, el paso. Deshice el lugar, el rostro y el nombre. Eliminé todo aquello que permitiera reconocer el acontecimiento del que provenía.',
  },
  { type: 'quote', text: 'Lo que sobrevivió fue el patrón.' },
  {
    type: 'p',
    text: 'Porque debajo de cualquier evento humano existe una organización física del tiempo: una manera en que el cuerpo acumula tensión, acelera, contiene y libera energía. Esa organización no pertenece a la anécdota. Pertenece a la biología. Y es lo único que permanece cuando todo lo demás desaparece.',
  },
  {
    type: 'p',
    text: 'Eso es lo que se escucha en Guerra y en Erótica: no una batalla, no un encuentro, sino la dinámica de un cuerpo real atravesando uno de sus momentos de mayor intensidad, despojado de su historia y convertido en un patrón sonoro.',
  },
  {
    type: 'p',
    text: 'Por eso Guerra genera tensión sin representar violencia alguna. El oyente no sabe que detrás existe una escaramuza real, pero su cuerpo responde como si reconociera esa organización interna.',
  },
  {
    type: 'p',
    text: 'Por eso Erótica parece avanzar hacia un punto que se resiste a llegar, hasta que finalmente ocurre. El oyente nunca contempla el acto. Sin embargo, atraviesa su arquitectura temporal.',
  },
  { type: 'quote', text: 'No pretendo que reconozcan la fuente. Pretendo que hereden el estado.' },
  {
    type: 'p',
    text: 'Mi trabajo no consiste en representar acontecimientos, sino en traducirlos. En llevarlos de la experiencia al patrón, del patrón al sonido y del sonido nuevamente a la experiencia. Allí donde desaparecen los nombres, permanecen las formas del cuerpo. Y quizá sea ahí donde comienza la música.',
  },
  {
    type: 'p',
    text: 'Ambas piezas nacen de la misma convicción que atraviesa el resto de mi trabajo: hay fuerzas —el deseo, el conflicto, el poder, la memoria— que son anteriores a cualquier forma de contarlas. Cambian los lenguajes. Cambian las épocas.',
  },
  { type: 'quote', text: 'Los acontecimientos desaparecen. Los patrones permanecen.' },
  {
    type: 'p',
    text: 'Y es en esos patrones donde la música encuentra su materia.',
  },
];

const albums = [
  {
    id: 'erotica',
    title: 'Erótica',
    image: '/images/erotica-cover.jpg',
    imageAlt: 'Erótica — portada del álbum de Mauricio de la Maza',
    videoId: 'YAPxzoRX1_o',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/ertica',
    description:
      'Erótica es una obra instrumental contemporánea construida sobre una arquitectura híbrida que combina elementos de orquesta de cámara y síntesis electrónica. La pieza se desarrolla a partir de un fundamento grave continuo donde sintetizadores, contrabajo y bajo melódico forman una única estructura de soporte. Sobre esta base se despliegan violas, cuernos, marimbas, xilófonos y mazos sintetizados que dialogan entre sí mediante patrones de repetición, variación y respuesta. La energía de la obra no surge de cambios abruptos ni de explosiones percusivas. Su movimiento proviene de la acumulación gradual de densidad, timbre y tensión interna. Los ciclos armónicos generan aproximaciones a la resolución sin agotarla por completo. La percusión cumple una función orgánica más que rítmica: el pulso permanece presente como una referencia fisiológica constante, cercana a la respiración o al latido. La imagen del álbum dialoga con el realismo intimista de finales del siglo XIX y principios del XX. Tres personajes. Una vela. Un instante suspendido que no termina de resolverse.',
  },
  {
    id: 'guerra',
    title: 'Guerra',
    image: '/images/guerra-cover.jpg',
    imageAlt: 'Guerra — portada del álbum de Mauricio de la Maza',
    videoId: '7oKX4PS1A24',
    platformsUrl: 'https://distrokid.com/hyperfollow/mauriciodelamaza/guerrawar',
    description:
      'Guerra es una exploración sonora del estado de preparación colectiva que precede al conflicto, más que del conflicto mismo. A partir de la grabación documental de una escaramuza tribal, la pieza transforma voces humanas reales en una masa armónica y rítmica que funciona, simultáneamente, como memoria, territorio e identidad. Lejos de representar violencia o victoria, la música habita una tensión suspendida donde coexisten la confrontación y el respeto, la alerta y la calma, la competencia y la pertenencia. El resultado es un paisaje ritual contemporáneo que no narra una batalla, sino la conciencia compartida de una comunidad que conoce la guerra, convive con ella y encuentra en esa posibilidad una forma de cohesión y reconocimiento mutuo.',
  },
];

export default function SonogramasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: `${siteConfig.url}${COVER}`,
    author: {
      '@type': 'Person',
      name: 'Mauricio de la Maza-Benignos',
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/musica/sonogramas`,
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

      {/* Ensayo */}
      <article className="pb-16 pt-4">
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
          </div>
        </div>
      </article>

      {/* Álbumes */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {albums.map((album) => (
                <div key={album.id} className="flex flex-col">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src={album.image}
                      alt={album.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 512px"
                      className="object-cover"
                    />
                  </div>

                  <h2 className="mt-6 text-center font-headline text-3xl font-bold text-foreground">
                    {album.title}
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
                    {album.description}
                  </p>

                  <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${album.videoId}`}
                      title={album.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <Link
                      href={album.platformsUrl}
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
            </div>

            {/* Próximamente */}
            <div className="mt-12 rounded-xl border border-dashed border-border py-12 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Próximamente
              </p>
              <h2 className="mt-3 font-headline text-3xl font-bold text-foreground">Poder</h2>
              <p className="mt-2 text-sm italic text-muted-foreground">En proceso</p>
            </div>

            {/* Volver */}
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
      </section>
    </>
  );
}
