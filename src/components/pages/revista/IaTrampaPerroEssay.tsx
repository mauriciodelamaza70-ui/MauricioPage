import Image from 'next/image';
import {
  laIaYLaTrampaDelPerro,
  laIaTrampaPerroSubtitle,
} from '@/lib/la-ia-y-la-trampa-del-perro';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

function IaTrampaPerroBody({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Subtítulo del ensayo */}
      <p className="mt-10 text-center font-serif text-xl italic text-muted-foreground text-balance">
        {laIaTrampaPerroSubtitle[lang]}
      </p>

      {/* Cuerpo del ensayo */}
      <article className="mt-10 space-y-6">
        {laIaYLaTrampaDelPerro.map((block, i) => {
          if (block.type === 'image') {
            const caption = block.caption?.[lang];
            return (
              <figure key={i} className="my-12">
                <Image
                  src={block.src}
                  alt={block.alt[lang]}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full rounded-lg bg-secondary"
                />
                {caption && (
                  <figcaption className="mt-3 text-sm italic text-muted-foreground">
                    {caption}
                  </figcaption>
                )}
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

export default function IaTrampaPerroEssay() {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle
        es={<IaTrampaPerroBody lang="es" />}
        en={<IaTrampaPerroBody lang="en" />}
      />
    </div>
  );
}
