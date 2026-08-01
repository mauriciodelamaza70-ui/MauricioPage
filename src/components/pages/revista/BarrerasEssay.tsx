'use client';

import { useState } from 'react';
import Image from 'next/image';
import { barrerasDeEntrada } from '@/lib/barreras-de-entrada';
import { cn } from '@/lib/utils';

type Lang = 'es' | 'en';

const LANG_LABEL: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export default function BarrerasEssay() {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <div className="max-w-3xl mx-auto">
      {/* Selector de idioma */}
      <div className="flex justify-center">
        <div
          className="inline-flex rounded-full border border-border p-1"
          role="tablist"
          aria-label={lang === 'es' ? 'Seleccionar idioma' : 'Select language'}
        >
          {(['es', 'en'] as Lang[]).map((code) => {
            const active = lang === code;
            return (
              <button
                key={code}
                type="button"
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
                {LANG_LABEL[code]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cuerpo del ensayo */}
      <article className="mt-12 space-y-6">
        {barrerasDeEntrada.map((block, i) => {
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
    </div>
  );
}
