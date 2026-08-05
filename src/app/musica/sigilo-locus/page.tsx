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

// Cuerpo de Locus.
const locus: Block[] = [
  { type: 'header', text: 'La arquitectura de un sistema' },
  {
    type: 'p',
    text: 'En genética, un locus no es un gen. Es la posición específica que un gen ocupa dentro de un cromosoma. La diferencia parece sutil, pero resulta esencial. Los genes no existen como entidades aisladas; adquieren significado por la posición que ocupan, por sus relaciones con otros genes y por la forma en que participan en un sistema biológico mucho más amplio.',
  },
  {
    type: 'p',
    text: 'Durante muchos años mi trabajo científico estuvo dedicado a la filogenia molecular. Reconstruir la historia evolutiva de un grupo de organismos implicaba comparar secuencias de ADN, pero también integrar información procedente de la geología, la tectónica de placas, la paleohidrología, la biogeografía y el tiempo evolutivo. Ninguna de esas disciplinas explicaba por sí sola la historia de un linaje. La explicación surgía únicamente cuando todas las relaciones podían comprenderse como parte de un mismo sistema.',
  },
  {
    type: 'p',
    text: 'Con el tiempo comprendí que esa forma de pensar había dejado de pertenecer exclusivamente a la investigación científica.',
  },
  { type: 'p', text: 'También se había convertido en mi forma de escribir música.' },
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
  { type: 'p', text: 'El registro grave deja de ser un soporte.' },
  { type: 'p', text: 'Se convierte en el primer plano estructural de la obra.' },
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
    type: 'p',
    text: 'La identidad rítmica de la pieza no pertenece a ninguno de esos instrumentos por separado.',
  },
  { type: 'p', text: 'Pertenece a sus relaciones.' },
  { type: 'header', text: 'Espacio' },
  { type: 'p', text: 'Las texturas electrónicas construyen el espacio donde ocurre la música.' },
  { type: 'p', text: 'No buscan protagonismo.' },
  {
    type: 'p',
    text: 'Su función consiste en generar profundidad, abrir planos y permitir que los demás elementos respiren dentro de un paisaje sonoro que evoluciona constantemente sin llamar la atención sobre sí mismo.',
  },
  { type: 'p', text: 'En ese contexto aparece una guitarra de nylon.' },
  { type: 'p', text: 'No permanece durante toda la obra.' },
  {
    type: 'p',
    text: 'Sus arpegios emergen y desaparecen deliberadamente. No acompañan la composición; preparan sus transformaciones. Funcionan como transiciones que modifican gradualmente la tensión antes de los puntos de inflexión estructural.',
  },
  { type: 'p', text: 'Su presencia anuncia que algo está por cambiar.' },
  { type: 'header', text: 'Precisión' },
  { type: 'p', text: 'Los metales ocupan un lugar completamente distinto.' },
  { type: 'p', text: 'Su presencia es deliberadamente escasa.' },
  {
    type: 'p',
    text: 'Los sforzandos no fueron escritos para producir espectacularidad ni para aumentar artificialmente la intensidad de la obra. Cada intervención aparece exactamente donde la arquitectura musical la necesita.',
  },
  { type: 'p', text: 'La guitarra prepara el cambio.' },
  { type: 'p', text: 'Los metales lo consolidan.' },
  {
    type: 'p',
    text: 'Ambos instrumentos forman parte del mismo mecanismo compositivo: uno reorganiza lentamente la percepción del oyente; el otro redefine instantáneamente el equilibrio del sistema.',
  },
  { type: 'p', text: 'En ese sentido representan el principio que da nombre a la obra.' },
  { type: 'p', text: 'Un locus.' },
  { type: 'p', text: 'Una intervención mínima.' },
  { type: 'p', text: 'Una consecuencia desproporcionadamente grande.' },
  { type: 'header', text: 'Pensar como sistema' },
  {
    type: 'p',
    text: 'Durante mis años de investigación aprendí que la historia evolutiva rara vez depende de acontecimientos espectaculares. En numerosas ocasiones son modificaciones pequeñas, acumuladas durante largos periodos de tiempo, las que terminan alterando por completo el destino de un linaje. Del mismo modo, la tectónica de placas transforma lentamente la geografía del planeta hasta modificar el aislamiento de poblaciones, los procesos de especiación y, finalmente, la estructura completa de la biodiversidad.',
  },
  { type: 'p', text: 'La transformación no surge del caos.' },
  { type: 'p', text: 'Surge de la reorganización de las relaciones.' },
  {
    type: 'p',
    text: 'Creo que esa misma idea terminó infiltrándose, casi sin proponérmelo, en mi manera de escribir música.',
  },
  { type: 'p', text: 'No concibo una composición como una superposición de instrumentos.' },
  {
    type: 'p',
    text: 'La concibo como un sistema complejo donde cada elemento modifica el comportamiento de los demás. La melodía, el ritmo, el espacio, el timbre y la dinámica dejan de ser componentes independientes para convertirse en relaciones.',
  },
  { type: 'p', text: 'Los géneros musicales describen resultados.' },
  { type: 'p', text: 'La composición describe procesos.' },
  { type: 'header', text: 'La portada' },
  {
    type: 'p',
    text: 'La imagen imagina un futuro donde la medicina preventiva ha alcanzado un nivel de precisión que hoy apenas comenzamos a vislumbrar.',
  },
  {
    type: 'p',
    text: 'Una mujer aparentemente sana recibe un diagnóstico genómico continuo mediante dispositivos no invasivos. La enfermedad todavía no existe como experiencia clínica; únicamente ha sido identificada como una posibilidad localizada en un locus específico del genoma. La intervención no constituye un acto dramático ni heroico. Es un procedimiento cotidiano, realizado antes de que el organismo llegue siquiera a manifestar síntomas.',
  },
  { type: 'p', text: 'La escena no habla del futuro de la medicina.' },
  { type: 'p', text: 'Habla del futuro de la precisión.' },
  { type: 'header', text: 'Epílogo' },
  {
    type: 'p',
    text: 'Tal vez por eso Locus terminó convirtiéndose en una obra profundamente personal.',
  },
  { type: 'p', text: 'No porque relate mi trayectoria científica.' },
  {
    type: 'p',
    text: 'Sino porque fue construida exactamente del mismo modo en que aprendí a comprender la naturaleza.',
  },
  {
    type: 'p',
    text: 'Durante años busqué explicar cómo la interacción entre genes, geografía, tiempo y procesos geológicos daba origen a la diversidad biológica. Al componer esta obra descubrí que seguía haciendo la misma pregunta, solo que utilizando otro lenguaje.',
  },
  { type: 'p', text: 'La música, como la evolución, no surge de elementos aislados.' },
  { type: 'p', text: 'Surge de la organización de sus relaciones.' },
  {
    type: 'p',
    text: 'Y, en ocasiones, basta intervenir en un único punto —un locus— para reorganizar el comportamiento del sistema completo.',
  },
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
