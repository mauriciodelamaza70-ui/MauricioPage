import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';

const interviewImage = '/images/prensa/tec-sounds-radio.jpg';
const videoUrl = 'https://www.youtube.com/watch?v=AwOkRxwT04I&t=2700s';

export const metadata: Metadata = {
  title: 'Entrevista en vivo — Tec Sounds Radio 94.9 | Mauricio de la Maza-Benignos',
  description:
    'Mauricio de la Maza habla sobre El Gran Makhaira en entrevista en vivo con Sandra Canales, Tec Sounds Radio 94.9',
  openGraph: {
    title: 'Entrevista en vivo — Tec Sounds Radio 94.9',
    description:
      'Mauricio de la Maza habla sobre El Gran Makhaira en entrevista en vivo con Sandra Canales, Tec Sounds Radio 94.9',
    images: [
      {
        url: interviewImage,
        width: 1303,
        height: 733,
        alt: 'Mauricio de la Maza en entrevista en vivo con Sandra Canales en Tec Sounds Radio 94.9',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrevista en vivo — Tec Sounds Radio 94.9',
    description:
      'Mauricio de la Maza habla sobre El Gran Makhaira en entrevista en vivo con Sandra Canales, Tec Sounds Radio 94.9',
    images: [interviewImage],
  },
};

export default function TecSoundsRadioPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <Link
          href="/prensa"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Prensa
        </Link>

        {/* Encabezado */}
        <header className="mt-8 max-w-3xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            Entrevista en vivo
          </p>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-balance mt-4">
            Tec Sounds Radio 94.9 XHTEC-FM
          </h1>
        </header>

        {/* Foto de la entrevista */}
        <figure className="mt-12 max-w-3xl">
          <Image
            src={interviewImage}
            alt="Mauricio de la Maza en entrevista en vivo con Sandra Canales en Tec Sounds Radio 94.9"
            width={1303}
            height={733}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-lg bg-secondary"
          />
          <figcaption className="mt-3 text-sm italic text-muted-foreground">
            Mauricio de la Maza-Benignos (Cineasta) y Sandra Canales (Conductora) durante la
            transmisión en vivo. Tec Sounds Radio 94.9 XHTEC-FM.
          </figcaption>
        </figure>

        {/* Nota de contexto */}
        <div className="mt-12 max-w-3xl">
          <p className="font-headline text-xl md:text-2xl leading-relaxed text-pretty text-muted-foreground">
            Entrevista transmitida en vivo el 12 de agosto de 2026, conducida por Sandra Canales,
            dos días antes del estreno de <span className="text-foreground italic">El Gran Makhaira</span>. Campus Tec de Monterrey.
          </p>

          {/* Botón destacado hacia el video */}
          <div className="mt-10">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Play className="h-5 w-5 fill-current" />
              Ver la entrevista en vivo
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              El video abre directamente en el minuto 45:00, donde comienza el segmento de Mauricio
              de la Maza-Benignos (hasta 1:01:00).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
