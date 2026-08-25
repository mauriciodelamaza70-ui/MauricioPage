import Image from 'next/image';
import { elMundoDeLosEntesEco } from '@/lib/el-mundo-de-los-entes-eco';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

function EntesEcoBody({ lang }: { lang: Lang }) {
  return (
    <article className="mt-12 space-y-6">
      {elMundoDeLosEntesEco.map((block, i) => {
        if (block.type === 'image') {
          return (
            <figure key={i} className="my-14">
              <Image
                src={block.src}
                alt={block.alt[lang]}
                width={block.width}
                height={block.height}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full rounded-lg bg-secondary"
              />
            </figure>
          );
        }

        return (
          <p
            key={i}
            className="font-serif text-lg leading-relaxed text-foreground/80 text-justify"
          >
            {block.text[lang]}
          </p>
        );
      })}

      <p className="pt-6 font-serif text-lg font-bold text-foreground">
        Mauricio de la Maza-Benignos
      </p>
    </article>
  );
}

export default function EntesEcoEssay() {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle es={<EntesEcoBody lang="es" />} en={<EntesEcoBody lang="en" />} />
    </div>
  );
}
