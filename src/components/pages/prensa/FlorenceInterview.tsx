import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { florenceInterview } from '@/lib/florence-interview';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

const ORIGINAL_URL = 'https://florencefilmawards.com/interview8';

const COPY: Record<Lang, { attribution: string; original: string }> = {
  es: {
    attribution: 'Entrevista publicada originalmente por Florence Film Awards, 13 de marzo de 2024.',
    original: 'Ver publicación original en Florence Film Awards',
  },
  en: {
    attribution: 'Interview originally published by Florence Film Awards, March 13, 2024.',
    original: 'View original publication on Florence Film Awards',
  },
};

function Attribution({ lang }: { lang: Lang }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/60 p-4 text-sm text-muted-foreground leading-relaxed">
      {COPY[lang].attribution}{' '}
      <a
        href={ORIGINAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4 hover:no-underline"
      >
        {ORIGINAL_URL.replace('https://', '')}
      </a>
    </div>
  );
}

function FlorenceBody({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Cuerpo de la entrevista */}
      <div className="mt-12 space-y-10">
        {florenceInterview.map((block, i) => {
          if (block.type === 'image') {
            return (
              <figure key={i} className="my-12">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-secondary">
                  <Image
                    src={block.src}
                    alt={block.caption[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm italic text-muted-foreground">
                  {block.caption[lang]}
                </figcaption>
              </figure>
            );
          }

          if (block.type === 'intro') {
            return (
              <p key={i} className="text-lg leading-relaxed text-foreground/90 text-pretty">
                {block.text[lang]}
              </p>
            );
          }

          // qa
          return (
            <div key={i} className="space-y-4">
              <h2 className="font-headline text-xl md:text-2xl font-bold italic text-accent leading-snug text-pretty">
                {block.q[lang]}
              </h2>
              {block.a[lang].map((para, j) => (
                <p key={j} className="leading-relaxed text-muted-foreground text-pretty">
                  {para}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      {/* Enlace final */}
      <div className="mt-16 border-t border-border pt-8">
        <a
          href={ORIGINAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
        >
          {COPY[lang].original}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </>
  );
}

export default function FlorenceInterview() {
  return (
    <article className="max-w-3xl">
      <LangArticle
        beforeEs={<Attribution lang="es" />}
        beforeEn={<Attribution lang="en" />}
        toggleWrapperClassName="mt-8 flex justify-start"
        es={<FlorenceBody lang="es" />}
        en={<FlorenceBody lang="en" />}
      />
    </article>
  );
}
