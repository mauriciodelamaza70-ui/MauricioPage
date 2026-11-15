import Image from 'next/image';
import { elMundoDeLosEntesEco } from '@/lib/el-mundo-de-los-entes-eco';
import { LangArticle, type Lang } from '@/components/pages/lang-article';
import { AcademicBlock } from '@/components/pages/revista/AcademicBlock';
import type { AcademicFields } from '@/lib/types';

function EntesEcoBody({ lang, academic }: { lang: Lang; academic?: AcademicFields }) {
  return (
    <>
      <AcademicBlock data={academic} lang={lang} />

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
    </>
  );
}

export default function EntesEcoEssay({ academic }: { academic?: AcademicFields }) {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle
        es={<EntesEcoBody lang="es" academic={academic} />}
        en={<EntesEcoBody lang="en" academic={academic} />}
      />
    </div>
  );
}
