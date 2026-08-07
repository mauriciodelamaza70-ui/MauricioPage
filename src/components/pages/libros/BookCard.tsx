'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Download, FileText, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ScienceBook = {
  id: string;
  title: string;
  cover: string;
  date?: string;
  editor: string;
  publisher: string;
  year?: string;
  isbn: string;
  doi?: string;
  prologue?: string;
  synopsis: string;
  pdf: string;
};

const SYNOPSIS_LIMIT = 320;

export default function BookCard({ book }: { book: ScienceBook }) {
  const [expanded, setExpanded] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const isLong = book.synopsis.length > SYNOPSIS_LIMIT;
  const synopsisText =
    isLong && !expanded ? `${book.synopsis.slice(0, SYNOPSIS_LIMIT).trimEnd()}…` : book.synopsis;

  // Inline-viewing URL: served with Content-Disposition: inline so it renders
  // in the iframe / new tab instead of forcing a download like the static path.
  const inlinePdfUrl = `/api/pdf/${book.pdf.split('/').pop() ?? ''}`;

  const meta: { label: string; value?: string }[] = [
    { label: 'Editor', value: book.editor },
    { label: 'Editorial', value: book.publisher },
    { label: 'Año', value: book.year },
    { label: 'ISBN', value: book.isbn },
    { label: 'DOI', value: book.doi },
    { label: 'Prólogo', value: book.prologue },
  ];

  return (
    <article className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-lg md:flex-row md:gap-8 md:p-8">
      {/* Cover */}
      <div className="mx-auto w-40 shrink-0 md:mx-0 md:w-48">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl ring-1 ring-border">
          <Image
            src={book.cover || '/placeholder.svg'}
            alt={`Portada de ${book.title}`}
            fill
            sizes="(max-width: 768px) 160px, 192px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {book.date && (
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">{book.date}</p>
        )}
        <h3 className="font-headline text-2xl font-bold leading-tight text-card-foreground text-balance md:text-3xl">
          {book.title}
        </h3>

        {/* Metadata */}
        <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
          {meta
            .filter((m) => m.value)
            .map((m) => (
              <div key={m.label} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</dt>
                <dd className="text-card-foreground">{m.value}</dd>
              </div>
            ))}
        </dl>

        {/* Synopsis */}
        <div className="mt-5">
          <p className="text-muted-foreground leading-relaxed">{synopsisText}</p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              aria-expanded={expanded}
            >
              {expanded ? 'Leer menos' : 'Leer más'}
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={book.pdf} download>
              <Download className="mr-2 h-4 w-4" />
              Descargar PDF
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowPdf((v) => !v)}
            aria-expanded={showPdf}
          >
            <FileText className="mr-2 h-4 w-4" />
            {showPdf ? 'Ocultar vista previa' : 'Vista previa del PDF'}
          </Button>
        </div>

        {/* PDF preview — toggled purely by showPdf state; no download here */}
        {showPdf && (
          <div className="mt-6 overflow-hidden rounded-lg border border-border bg-background">
            <iframe
              src={`${inlinePdfUrl}#toolbar=0`}
              title={`Vista previa del PDF de ${book.title}`}
              width="100%"
              height="600px"
              className="block w-full border-0"
            />
            <div className="border-t border-border p-3 text-center text-xs text-muted-foreground">
              ¿No se muestra el PDF aquí?{' '}
              <a href={inlinePdfUrl} className="text-accent underline" target="_blank" rel="noopener noreferrer">
                Ábrelo en una pestaña nueva
              </a>
              .
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
