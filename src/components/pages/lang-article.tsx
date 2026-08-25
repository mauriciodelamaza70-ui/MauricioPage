'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export type Lang = 'es' | 'en';

const LANG_LABEL: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

/**
 * Isla cliente mínima para el toggle es/en.
 *
 * El contenido pesado (ensayos/entrevistas) se renderiza en el servidor y se
 * pasa aquí como nodos ya renderizados (`es`, `en`, `beforeEs`, `beforeEn`).
 * De esta forma los módulos de texto grandes NO entran al grafo de cliente de
 * webpack: solo esta pequeña isla se compila para el navegador.
 *
 * La conmutación es idéntica para el usuario: dos botones (Español / English)
 * que muestran el idioma activo. Como los árboles `es`/`en` comparten la misma
 * estructura, React reconcilia en el mismo lugar y las imágenes con igual `src`
 * no se vuelven a montar al cambiar de idioma (sin parpadeo).
 */
export function LangArticle({
  es,
  en,
  beforeEs,
  beforeEn,
  toggleWrapperClassName = 'flex justify-center',
}: {
  es: React.ReactNode;
  en: React.ReactNode;
  beforeEs?: React.ReactNode;
  beforeEn?: React.ReactNode;
  toggleWrapperClassName?: string;
}) {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <>
      {lang === 'es' ? beforeEs : beforeEn}

      <div className={toggleWrapperClassName}>
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

      {lang === 'es' ? es : en}
    </>
  );
}
