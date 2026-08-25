import Image from 'next/image';
import {
  narrativaComoSustitutoDeLaRazon,
  narrativaRazonSubtitle,
} from '@/lib/narrativa-como-sustituto-de-la-razon';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

function NarrativaBody({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Subtítulo del ensayo */}
      <p className="mt-10 text-center font-serif text-xl italic text-muted-foreground text-balance">
        {narrativaRazonSubtitle[lang]}
      </p>

      {/* Cuerpo del ensayo */}
      <article className="mt-10 space-y-6">
        {narrativaComoSustitutoDeLaRazon.map((block, i) => {
          if (block.type === 'image') {
            return (
              <figure key={i} className="my-12">
                <Image
                  src={block.src}
                  alt={block.caption[lang]}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full rounded-lg bg-secondary"
                />
                <figcaption className="mt-3 text-sm italic text-muted-foreground">
                  {block.caption[lang]}
                </figcaption>
              </figure>
            );
          }

          if (block.type === 'h') {
            return (
              <h2
                key={i}
                className="pt-8 font-headline text-2xl font-bold text-foreground md:text-3xl text-balance"
              >
                {block.text[lang]}
              </h2>
            );
          }

          return (
            <p
              key={i}
              className="font-serif text-lg leading-relaxed text-foreground/80 text-pretty"
            >
              {block.text[lang]}
            </p>
          );
        })}

        <p className="pt-6 font-serif text-lg font-bold text-foreground">
          Mauricio de la Maza-Benignos
        </p>
      </article>
    </>
  );
}

export default function NarrativaRazonEssay() {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle es={<NarrativaBody lang="es" />} en={<NarrativaBody lang="en" />} />
    </div>
  );
}
