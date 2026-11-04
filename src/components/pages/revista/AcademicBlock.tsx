import { Download, ExternalLink } from 'lucide-react';
import type { AcademicFields } from '@/lib/types';
import type { Lang } from '@/components/pages/lang-article';

const LABELS = {
  es: {
    abstract: 'Resumen',
    keywords: 'Palabras clave',
    cite: 'Cómo citar',
    pdf: 'Descargar PDF',
    zenodo: 'Ver en Zenodo',
    license: 'Licencia',
  },
  en: {
    abstract: 'Abstract',
    keywords: 'Keywords',
    cite: 'Cite as',
    pdf: 'Download PDF',
    zenodo: 'View on Zenodo',
    license: 'License',
  },
} as const;

/** Recuadro académico (resumen, palabras clave, DOI, cita, PDF, licencia). No se renderiza sin DOI. */
export function AcademicBlock({ data, lang }: { data?: AcademicFields; lang: Lang }) {
  if (!data?.doi) return null;

  const t = LABELS[lang];
  const abstract = lang === 'es' ? data.abstractEs : data.abstractEn;
  const keywords = lang === 'es' ? data.keywordsEs : data.keywordsEn;
  const doiUrl = data.zenodoUrl ?? `https://doi.org/${data.doi}`;

  return (
    <aside
      aria-labelledby="academic-abstract-heading"
      className="mt-10 flex flex-col gap-5 rounded-lg border border-border bg-secondary/40 p-5 md:p-8"
    >
      {abstract && (
        <div className="flex flex-col gap-3">
          <h2
            id="academic-abstract-heading"
            className="font-headline text-xl font-bold text-foreground"
          >
            {t.abstract}
          </h2>
          <p className="font-serif text-base leading-relaxed text-foreground/80 text-pretty">
            {abstract}
          </p>
        </div>
      )}

      {keywords && keywords.length > 0 && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">{t.keywords}:</span>{' '}
          {keywords.join(', ')}
        </p>
      )}

      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">DOI:</span>{' '}
        <a
          href={doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all underline underline-offset-4 hover:text-foreground"
        >
          {data.doi}
        </a>
      </p>

      {data.citation && (
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-semibold text-foreground">{t.cite}:</span>
          <p className="break-words leading-relaxed text-muted-foreground">{data.citation}</p>
          {data.history && (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {data.history[lang]}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        {data.pdfUrl && (
          <a
            href={data.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t.pdf}
          </a>
        )}
        <a
          href={doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {t.zenodo}
        </a>
      </div>

      {data.license && (
        <p className="text-xs text-muted-foreground">
          {t.license}:{' '}
          <a
            href={data.license.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {data.license.name}
          </a>
        </p>
      )}
    </aside>
  );
}
