import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Music } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const TITLE = 'Locus';
const SUBTITLE = 'La arquitectura de un sistema';
const DESCRIPTION =
  'Locus: una composición sobre la arquitectura de los sistemas biológicos y musicales, por Mauricio de la Maza-Benignos.';
const COVER = '/images/locus-cover.jpg';
const VIDEO_ID = 'PENDIENTE_URL_YOUTUBE';
const PLATFORMS_URL = 'PENDIENTE_URL_DISTROKID';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteConfig.url}/musica/locus`,
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/musica/locus`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${siteConfig.url}${COVER}`, alt: 'Locus — Mauricio de la Maza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${siteConfig.url}${COVER}`],
  },
};

/**
 * Texto introductorio del álbum Locus.
 * - 'header' subtítulo de sección (serif, mismo nivel que el subtítulo del álbum)
 * - 'p'      párrafo de cuerpo
 * - 'beat'   línea breve y enfática (respeta la cadencia del texto)
 */
type Block =
  | { type: 'header'; text: string }
  | { type: 'p'; text: string }
  | { type: 'beat'; text: string };

const intro: Block[] = [
  {
    type: 'p',
    text: 'En genética, un locus no es un gen. Es la posición específica que un gen ocupa dentro de un cromosoma. La diferencia parece sutil, pero resulta esencial. Los genes no existen como entidades aisladas; adquieren significado por la posición que ocupan, por sus relaciones con otros genes y por la forma en que participan en un sistema biológico mucho más amplio.',
  },
  {
    type: 'p',
    text: 'Durante muchos años mi trabajo científico estuvo dedicado a la filogenia molecular. Reconstruir la historia evolutiva de un grupo de organismos implicaba comparar secuencias de ADN, pero también integrar información procedente de la geología, la tectónica de placas, la paleohidrología, la biogeografía y el tiempo evolutivo. Ninguna de esas disciplinas explicaba por sí sola la historia de un linaje. La explicación surgía únicamente cuando todas las relaciones podían comprenderse como parte de un mismo sistema.',
  },
  {
    type: 'beat',
    text: 'Con el tiempo comprendí que esa forma de pensar había dejado de pertenecer exclusivamente a la investigación científica.',
  },
  {
    type: 'beat',
    text: 'También se había convertido en mi forma de escribir música.',
  },
  {
    type: 'p',
    text: 'Locus no intenta describir la genética ni traducir el ADN al sonido. Su propósito es diferente: construir una composición utilizando una lógica sistémica, donde cada elemento modifica el comportamiento del conjunto y ninguna decisión puede entenderse de manera aislada.',
  },

  { type: 'header', text: 'El fundamento' },
  {
    type: 'p',
    text: 'La obra comienza donde normalmente termina la atención del oyente: en el registro más grave.',
  },
  {
    type: 'p',
    text: 'En lugar de una única línea de bajo, Locus desarrolla tres voces graves independientes. Ninguna cumple la función tradicional de sostener la armonía mientras los demás instrumentos adquieren protagonismo. Las tres poseen identidad melódica propia. Se aproximan, se separan, se cruzan y vuelven a reorganizarse continuamente, formando un contrapunto cuya finalidad no consiste únicamente en definir la armonía, sino en establecer la arquitectura dinámica de toda la composición.',
  },
  { type: 'beat', text: 'El registro grave deja de ser un soporte.' },
  { type: 'beat', text: 'Se convierte en el primer plano estructural de la obra.' },

  { type: 'header', text: 'Movimiento' },
  {
    type: 'p',
    text: 'Sobre esa arquitectura aparecen sintetizadores rítmicos cuya función no consiste en desarrollar melodías, sino en producir movimiento continuo.',
  },
  {
    type: 'p',
    text: 'La sección rítmica tampoco responde a un único instrumento. Cinco baterías diferentes, complementadas por bongós y otras capas de percusión, fueron concebidas como un solo organismo. Cada una aporta una propiedad distinta —ataque, profundidad, impulso, brillo o textura— y ninguna adquiere pleno sentido fuera del conjunto.',
  },
  {
    type: 'beat',
    text: 'La identidad rítmica de la pieza no pertenece a ninguno de esos instrumentos por separado.',
  },
  { type: 'beat', text: 'Pertenece a sus relaciones.' },

  { type: 'header', text: 'Espacio' },
  {
    type: 'p',
    text: 'Las texturas electrónicas construyen el espacio donde ocurre la música.',
  },
  { type: 'beat', text: 'No buscan protagonismo.' },
  {
    type: 'p',
    text: 'Su función consiste en generar profundidad, abrir planos y permitir que los demás elementos respiren dentro de un paisaje sonoro que evoluciona constantemente sin llamar la atención sobre sí mismo.',
  },
  {
    type: 'p',
    text: 'En ese contexto aparece una guitarra de nylon.',
  },
  { type: 'beat', text: 'No permanece durante toda la obra.' },
  {
    type: 'p',
    text: 'Sus arpegios emergen y desaparecen deliberadamente. No acompañan la composición; preparan sus transformaciones. Funcionan como transiciones que modifican gradualmente la tensión antes de los puntos de inflexión estructural.',
  },
  { type: 'beat', text: 'Su presencia anuncia que algo está por cambiar.' },

  { type: 'header', text: 'Precisión' },
  {
    type: 'p',
    text: 'Los metales ocupan un lugar completamente distinto.',
  },
  { type: 'beat', text: 'Su presencia es deliberadamente escasa.' },
  {
    type: 'p',
    text: 'Los sforzandos no fueron escritos para producir espectacularidad ni para aumentar artificialmente la intensidad de la obra. Cada intervención aparece exactamente donde la arquitectura musical la necesita.',
  },
  { type: 'beat', text: 'La guitarra prepara el cambio.' },
  { type: 'beat', text: 'Los metales lo consolidan.' },
  {
    type: 'p',
    text: 'Ambos instrumentos forman parte del mismo mecanismo compositivo: uno reorganiza lentamente la percepción del oyente; el otro redefine instantáneamente el equilibrio del sistema.',
  },
  {
    type: 'p',
    text: 'En ese sentido representan el principio que da nombre a la obra.',
  },
  { type: 'beat', text: 'Un locus.' },
  { type: 'beat', text: 'Una intervención mínima.' },
  { type: 'beat', text: 'Una consecuencia desproporcionadamente grande.' },

  { type: 'header', text: 'Pensar como sistema' },
  {
    type: 'p',
    text: 'Durante mis años de investigación aprendí que la historia evolutiva rara vez depende de acontecimientos espectaculares. En numerosas ocasiones son modificaciones pequeñas, acumuladas durante largos periodos de tiempo, las que terminan alterando por completo el destino de un linaje. Del mismo modo, la tectónica de placas transforma lentamente la geografía del planeta hasta modificar el aislamiento de poblaciones, los procesos de especiación y, finalmente, la estructura completa de la biodiversidad.',
  },
  { type: 'beat', text: 'La transformación no surge del caos.' },
  { type: 'beat', text: 'Surge de la reorganización de las relaciones.' },
  {
    type: 'p',
    text: 'Creo que esa misma idea terminó infiltrándose, casi sin proponérmelo, en mi manera de escribir música.',
  },
  {
    type: 'p',
    text: 'No concibo una composición como una superposición de instrumentos.',
  },
  {
    type: 'p',
    text: 'La concibo como un sistema complejo donde cada elemento modifica el comportamiento de los demás. La melodía, el ritmo, el espacio, el timbre y la dinámica dejan de ser componentes independientes para convertirse en relaciones.',
  },
  { type: 'beat', text: 'Los géneros musicales describen resultados.' },
  { type: 'beat', text: 'La composición describe procesos.' },

  { type: 'header', text: 'La portada' },
  {
    type: 'p',
    text: 'La imagen imagina un futuro donde la medicina preventiva ha alcanzado un nivel de precisión que hoy apenas comenzamos a vislumbrar.',
  },
  {
    type: 'p',
    text: 'Una mujer aparentemente sana recibe un diagnóstico genómico continuo mediante dispositivos no invasivos. La enfermedad todavía no existe como experiencia clínica; únicamente ha sido identificada como una posibilidad localizada en un locus específico del genoma. La intervención no constituye un acto dramático ni heroico. Es un procedimiento cotidiano, realizado antes de que el organismo llegue siquiera a manifestar síntomas.',
  },
  { type: 'beat', text: 'La escena no habla del futuro de la medicina.' },
  { type: 'beat', text: 'Habla del futuro de la precisión.' },

  { type: 'header', text: 'Epílogo' },
  {
    type: 'p',
    text: 'Tal vez por eso Locus terminó convirtiéndose en una obra profundamente personal.',
  },
  { type: 'beat', text: 'No porque relate mi trayectoria científica.' },
  {
    type: 'p',
    text: 'Sino porque fue construida exactamente del mismo modo en que aprendí a comprender la naturaleza.',
  },
  {
    type: 'p',
    text: 'Durante años busqué explicar cómo la interacción entre genes, geografía, tiempo y procesos geológicos daba origen a la diversidad biológica. Al componer esta obra descubrí que seguía haciendo la misma pregunta, solo que utilizando otro lenguaje.',
  },
  { type: 'beat', text: 'La música, como la evolución, no surge de elementos aislados.' },
  { type: 'beat', text: 'Surge de la organización de sus relaciones.' },
  {
    type: 'p',
    text: 'Y, en ocasiones, basta intervenir en un único punto —un locus— para reorganizar el comportamiento del sistema completo.',
  },
];

export default function LocusPage() {
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
    url: `${siteConfig.url}/musica/locus`,
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
              alt="Locus — portada del álbum de Mauricio de la Maza"
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

      {/* Texto introductorio + reproductor */}
      <article className="pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {intro.map((block, i) => {
              if (block.type === 'header') {
                return (
                  <h2
                    key={i}
                    className="mt-14 mb-6 font-headline text-2xl md:text-3xl italic text-accent text-balance"
                  >
                    {block.text}
                  </h2>
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

            {/* Reproductor de YouTube */}
            <figure className="my-12">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Locus — Mauricio de la Maza"
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
                  className="inline-flex items-center gap-1.5 text-xs italic text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
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
