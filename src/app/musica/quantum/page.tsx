import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Quantum';
const SUBTITLE = 'La relatividad explica el mecanismo. La memoria explica la vida.';
const DESCRIPTION =
  'Quantum: un álbum sobre la relatividad, la memoria y la imposibilidad de volver, por Mauricio de la Maza-Benignos.';
const POSTER = '/images/quantum-poster.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/quantum`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/quantum`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${POSTER}`, alt: 'Quantum — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${POSTER}`],
  },
};

/**
 * Bloques del ensayo del álbum Quantum.
 * - 'p'       párrafo de cuerpo
 * - 'beat'    línea breve y enfática (respeta la cadencia del texto)
 * - 'quote'   cita destacada
 * - 'image'   imagen intercalada
 */
type Block =
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image' }
  | { type: 'videos' };

const videos = [
  { id: 'iS9aQd9KpoM', title: 'Quantum 1 · El Viaje' },
  { id: 'wFhogRjLi04', title: 'Quantum 2 · El Regreso' },
];

const essay: Block[] = [
  {
    type: 'p',
    text: 'Cuando concebí Quantum, partí de una idea nacida en la física: dos jóvenes emprenden un viaje a velocidades cercanas a la de la luz mientras un observador permanece inmóvil. Según la relatividad especial de Einstein, el tiempo no transcurre igual para todos. Quien viaja puede experimentar apenas unos minutos mientras, para quien permanece, transcurren años o incluso toda una vida.',
  },
  {
    type: 'p',
    text: 'Pero conforme el proyecto fue creciendo comprendí que la relatividad nunca fue realmente el tema del álbum. Era simplemente el lenguaje que necesitaba para hablar de algo mucho más antiguo.',
  },
  { type: 'beat', text: 'La verdadera historia siempre fue la memoria.' },
  {
    type: 'p',
    text: 'El hombre que aparece en la portada soy yo. No representa una versión imaginaria del futuro. Soy yo, tal como soy hoy, sentado frente a un escritorio observando una escena que sólo existe porque la recuerdo. Los dos jóvenes representan una versión de mí mismo y a una mujer que realmente existió en mi vida.',
  },
  { type: 'image' },
  { type: 'videos' },
  {
    type: 'p',
    text: 'Quantum 1 y Quantum 2 nacieron como una única idea partida en dos. No son piezas distintas que comparten un tema: son la misma historia observada desde dos marcos de referencia diferentes. Casi todo permanece igual: el punto de partida, los personajes, la despedida, la promesa de un regreso breve. Lo único que cambia es quién carga con el peso del tiempo.',
  },
  {
    type: 'p',
    text: 'En Quantum 1, ella sufre un pequeño contratiempo. Quizá un minuto. Quizá menos. Cuando finalmente regresa, todo ha desaparecido. La ciudad que dejó atrás ya no existe. El mundo es otro. Su compañero de viaje tampoco existe ya como ella lo conocía. El tiempo hizo su trabajo mientras ella permanecía casi inmóvil dentro de su propio reloj.',
  },
  { type: 'beat', text: 'Para ella pasó un instante.' },
  { type: 'beat', text: 'Para él, una vida.' },
  {
    type: 'p',
    text: 'En Quantum 2 la simetría se invierte por completo. Ella regresa exactamente igual que cuando partió: mismo rostro, misma edad, incluso las mismas maletas. En su experiencia subjetiva apenas ha transcurrido un instante. Pero el observador ya recorrió toda una existencia.',
  },
  { type: 'beat', text: 'La misma arquitectura.' },
  { type: 'beat', text: 'El mismo viaje.' },
  { type: 'beat', text: 'La misma despedida.' },
  {
    type: 'p',
    text: 'Y, sin embargo, quien pierde en una versión es quien permanece intacto en la otra.',
  },
  {
    type: 'p',
    text: 'Que las dos piezas se parezcan tanto entre sí no es un descuido.',
  },
  { type: 'beat', text: 'Es el punto.' },
  {
    type: 'p',
    text: 'Gemelas en estructura, opuestas en consecuencia. Así funciona el tiempo cuando deja de ser el mismo para dos personas que compartieron el mismo instante de partida.',
  },
  {
    type: 'p',
    text: 'No hay culpables en ninguna de las dos versiones. Nadie tomó una mala decisión. Nadie traicionó a nadie. Simplemente el tiempo decidió transcurrir de manera distinta para dos personas que partieron juntas.',
  },
  { type: 'quote', text: 'Es más fácil perdonar una traición que perdonar a la física.' },
  {
    type: 'p',
    text: 'Con los años comprendí que el tiempo no sólo transforma a las personas. También transforma la manera en que las recordamos.',
  },
  { type: 'p', text: 'Creemos que la memoria conserva nuestra vida.' },
  { type: 'beat', text: 'No es cierto.' },
  { type: 'beat', text: 'La memoria conserva apenas fragmentos.' },
  { type: 'beat', text: 'Una mirada.' },
  { type: 'beat', text: 'Una despedida.' },
  { type: 'beat', text: 'Una conversación.' },
  { type: 'beat', text: 'Una tarde cualquiera.' },
  { type: 'beat', text: 'Una fotografía.' },
  { type: 'p', text: 'Todo lo demás se erosiona lentamente hasta volverse inaccesible.' },
  {
    type: 'p',
    text: 'Por eso la fotografía ocupa un lugar tan importante en estas portadas. No representa un documento. Representa el funcionamiento mismo de la memoria. Cada recuerdo es una fotografía detenida mientras el resto de la vida continúa moviéndose.',
  },
  {
    type: 'p',
    text: 'La paradoja es que esas fotografías también envejecen. No porque cambie la imagen, sino porque cambia quien la contempla. Cada vez que recordamos reconstruimos el pasado desde una persona distinta. La memoria no conserva el pasado. Lo vuelve a escribir una y otra vez.',
  },
  { type: 'p', text: 'La física llama a esto relatividad.' },
  { type: 'p', text: 'La filosofía budista lo llama impermanencia.' },
  {
    type: 'p',
    text: 'La memoria intenta reconciliarlas construyendo un museo de instantes que nunca volverán a ocurrir.',
  },
  { type: 'beat', text: 'Al final comprendemos que la vida no puede conservarse.' },
  { type: 'beat', text: 'Sólo puede contemplarse.' },
  {
    type: 'p',
    text: 'Quizá por eso el hombre de la portada no intenta detener a los viajeros. No corre detrás de ellos. No busca corregir el pasado.',
  },
  { type: 'beat', text: 'Simplemente observa.' },
  {
    type: 'p',
    text: 'Porque llega un momento en que comprendemos que amar también consiste en aceptar que algunas personas pertenecen a un tiempo al que ya no podemos regresar.',
  },
  { type: 'p', text: 'Quantum no es un álbum sobre viajes en el tiempo.' },
  { type: 'beat', text: 'Es un álbum sobre la imposibilidad de volver.' },
  { type: 'p', text: 'Porque todos viajamos en el tiempo exactamente una vez.' },
  { type: 'beat', text: 'Y nunca regresamos siendo la misma persona.' },
  { type: 'p', text: 'Quizá ésa sea la verdadera historia de Quantum.' },
  { type: 'beat', text: 'No la de dos viajeros.' },
  { type: 'beat', text: 'Sino la de todos nosotros.' },
];

export default function QuantumPage() {
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
    url: `${siteConfig.url}/musica/quantum`,
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

          <div className="relative mx-auto w-full max-w-5xl aspect-[3/2] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={POSTER}
              alt="Quantum — cartel del álbum de Mauricio de la Maza"
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

      {/* Ensayo */}
      <article className="pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {essay.map((block, i) => {
              if (block.type === 'image') {
                return (
                  <figure key={i} className="my-12">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                      <Image
                        src="/images/quantum-cafe.jpg"
                        alt="Los dos viajeros comparten un café frente a una ciudad futurista al atardecer"
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                );
              }
              if (block.type === 'videos') {
                return (
                  <div key={i} className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {videos.map((video) => (
                      <figure key={video.id}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="mt-3 text-center font-headline text-lg font-medium text-accent">
                          {video.title}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={i}
                    className="my-12 border-l-4 border-accent pl-6 py-2"
                  >
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

            {/* Cierre */}
            <div className="mt-16 border-t pt-10 text-center">
              <p className="font-headline text-2xl md:text-3xl font-bold text-foreground text-balance">
                Porque la relatividad explica el mecanismo.
              </p>
              <p className="mt-3 font-headline text-2xl md:text-3xl font-bold text-accent text-balance">
                Pero la memoria explica la vida.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
