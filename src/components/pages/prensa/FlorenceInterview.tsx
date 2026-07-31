'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { florenceInterview } from '@/lib/florence-interview';
import { cn } from '@/lib/utils';

type Lang = 'es' | 'en';

const ORIGINAL_URL = 'https://florencefilmawards.com/interview8';

const COPY: Record<Lang, { attribution: string; original: string; langLabel: string }> = {
  es: {
    attribution: 'Entrevista publicada originalmente por Florence Film Awards, 13 de marzo de 2024.',
    original: 'Ver publicación original en Florence Film Awards',
    langLabel: 'Español',
  },
  en: {
    attribution: 'Interview originally published by Florence Film Awards, March 13, 2024.',
    original: 'View original publication on Florence Film Awards',
    langLabel: 'English',
  },
};

export default function FlorenceInterview() {
  const [lang, setLang] = useState<Lang>('es');
  const t = COPY[lang];

  return (
    <article className="max-w-3xl">
      {/* Nota de atribución */}
      <div className="rounded-lg border border-border bg-secondary/60 p-4 text-sm text-muted-foreground leading-relaxed">
        {t.attribution}{' '}
        <a
          href={ORIGINAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:no-underline"
        >
          {ORIGINAL_URL.replace('https://', '')}
        </a>
      </div>

      {/* Selector de idioma */}
      <div
        className="mt-8 inline-flex rounded-full border border-border p-1"
        role="tablist"
        aria-label={lang === 'es' ? 'Seleccionar idioma' : 'Select language'}
      >
        {(['es', 'en'] as Lang[]).map((code) => {
          const active = lang === code;
          return (
            <button
              key={code}
              role="tab"
              aria-selected={active}
              onClick={() => setLang(code)}
              className={cn(
                'rounded-full px-5 py-1.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {COPY[code].langLabel}
            </button>
          );
        })}
      </div>

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
          {t.original}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
