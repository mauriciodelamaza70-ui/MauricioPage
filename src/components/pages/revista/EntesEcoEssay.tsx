'use client';

import { useState } from 'react';
import Image from 'next/image';
import { elMundoDeLosEntesEco } from '@/lib/el-mundo-de-los-entes-eco';
import { cn } from '@/lib/utils';

type Lang = 'es' | 'en';

const LANG_LABEL: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export default function EntesEcoEssay() {
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
    </div>
  );
}
