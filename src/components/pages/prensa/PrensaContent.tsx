'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { pressArticles } from '@/lib/data';
import type { PressArticle } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Filter = 'todos' | 'cine' | 'conservacion';

const TABS: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'cine', label: 'Cine' },
  { id: 'conservacion', label: 'Conservación y ciencia' },
];

const INITIAL_VISIBLE = 10;
const STEP = 8;

function matchesFilter(article: PressArticle, filter: Filter): boolean {
  if (filter === 'todos') return true;
  if (filter === 'cine') return article.categoria === 'Cine';
  return article.categoria === 'Conservación' || article.categoria === 'Trayectoria';
}

const byYearDesc = (a: PressArticle, b: PressArticle) =>
  (b.anio ?? -Infinity) - (a.anio ?? -Infinity);

export default function PrensaContent() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [ccExpanded, setCcExpanded] = useState(false);
  const [expandedGallery, setExpandedGallery] = useState<string | null>(null);

  const featured = useMemo(
    () => pressArticles.filter((a) => a.destacado).sort(byYearDesc),
    []
  );

  const expandedArticle = useMemo(
    () => featured.find((a) => a.url === expandedGallery) ?? null,
    [featured, expandedGallery]
  );

  const cuatroCienegas = useMemo(
    () => pressArticles.filter((a) => a.cuatroCienegas).sort(byYearDesc),
    []
  );

  const ccYears = useMemo(() => {
    const years = Array.from(
      new Set(cuatroCienegas.map((a) => a.anio).filter((y): y is number => y != null))
    );
    return years.sort((a, b) => a - b);
  }, [cuatroCienegas]);

  const archive = useMemo(
    () =>
      pressArticles
        .filter((a) => !a.destacado)
        .filter((a) => matchesFilter(a, filter))
        .sort(byYearDesc),
    [filter]
  );

  const visibleArchive = archive.slice(0, visibleCount);
  const showCuatroCienegas = filter === 'todos' || filter === 'conservacion';

  const handleFilter = (next: Filter) => {
    setFilter(next);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <div className="space-y-20">
      {/* Destacados */}
      <section>
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((article) => {
            const hasGallery = !!article.galeria?.length;
            const isExpanded = expandedGallery === article.url;

            const inner = (
              <>
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden ${
                    article.esPortada ? 'bg-background' : ''
                  }`}
                >
                  {article.imagen && (
                    <Image
                      src={article.imagen}
                      alt={`${article.fuente} — ${article.titulo}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        article.esPortada ? 'object-contain' : 'object-cover'
                      }`}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                    {article.fuente}
                  </span>
                  <h3 className="font-headline text-xl font-bold mt-2 leading-snug text-pretty">
                    {article.titulo}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-muted-foreground text-sm">{article.anio}</span>
                    {hasGallery ? (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 text-muted-foreground transition-all group-hover:text-accent',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                    )}
                  </div>
                </div>
              </>
            );

            const cardClass =
              'group flex flex-col overflow-hidden rounded-lg bg-secondary border transition-colors text-left ' +
              (isExpanded ? 'border-accent/60' : 'border-border hover:border-accent/60');

            return hasGallery ? (
              <button
                key={article.url}
                type="button"
                onClick={() => setExpandedGallery((cur) => (cur === article.url ? null : article.url))}
                aria-expanded={isExpanded}
                className={cardClass}
              >
                {inner}
              </button>
            ) : (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            );
          })}
        </div>

        {/* Galería expandible de la pieza destacada de FilmmakerLife */}
        {expandedArticle?.galeria && (
          <div className="mt-6 rounded-lg bg-secondary p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expandedArticle.galeria.map((src, i) => (
                <a
                  key={src}
                  href={expandedArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-md bg-background"
                >
                  <Image
                    src={src}
                    alt={`${expandedArticle.fuente} — página ${i + 1}`}
                    width={960}
                    height={1242}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-contain"
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/40 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/70 text-foreground">
                      <ArrowUpRight className="h-6 w-6" />
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Páginas de la edición impresa, reproducidas con autorización de FilmmakerLife Magazine.
            </p>
          </div>
        )}
      </section>

      {/* Filtro de pestañas */}
      <section>
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filtrar prensa por categoría">
          {TABS.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active}
                onClick={() => handleFilter(tab.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-accent text-accent-foreground'
                    : 'border border-border text-muted-foreground hover:text-foreground hover:border-accent/60'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Bloque Cuatro Ciénegas */}
        {showCuatroCienegas && (
          <div className="mt-10 rounded-lg border border-accent/40 bg-accent/5 p-6 md:p-8">
            <h3 className="font-headline text-2xl md:text-3xl font-bold">
              Cuatro Ciénegas — cronología 2018-2023
            </h3>
            <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Cobertura de la lucha por el agua y la conservación del humedal de Cuatro Ciénegas,
              Coahuila, a lo largo de seis años.
            </p>

            {/* Línea de tiempo */}
            <div className="relative mt-10 mb-4">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-accent/30" aria-hidden="true" />
              <ol className="relative flex justify-between">
                {ccYears.map((year) => (
                  <li key={year} className="flex flex-col items-center gap-3">
                    <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background" />
                    <span className="text-sm font-medium text-foreground">{year}</span>
                  </li>
                ))}
              </ol>
            </div>

            <button
              onClick={() => setCcExpanded((v) => !v)}
              aria-expanded={ccExpanded}
              className="mt-6 inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline underline-offset-4"
            >
              {ccExpanded
                ? 'Ocultar artículos'
                : `Ver los ${cuatroCienegas.length} artículos completos`}
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', ccExpanded && 'rotate-180')}
              />
            </button>

            {ccExpanded && (
              <ul className="mt-6 space-y-3 border-t border-accent/20 pt-6">
                {cuatroCienegas.map((article) => (
                  <li key={article.url}>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4"
                    >
                      <span className="flex-1 leading-snug">
                        <span className="text-accent text-xs tracking-wider uppercase mr-2">
                          {article.fuente}
                        </span>
                        <span className="text-foreground group-hover:text-accent transition-colors">
                          {article.titulo}
                        </span>
                      </span>
                      <span className="text-muted-foreground text-sm shrink-0">{article.anio}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>

      {/* Archivo completo */}
      <section>
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">Archivo</h2>
        {visibleArchive.length === 0 ? (
          <p className="text-muted-foreground">No hay artículos en esta categoría.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleArchive.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-lg bg-card border border-border p-5 transition-colors hover:border-accent/60"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                      {article.fuente}
                    </span>
                    <span className="text-muted-foreground/60 text-xs">·</span>
                    <span className="text-muted-foreground text-xs">{article.tipo}</span>
                  </div>
                  <h3 className="font-headline text-lg font-semibold mt-1.5 leading-snug text-pretty group-hover:text-accent transition-colors">
                    {article.titulo}
                  </h3>
                  {article.anio != null && (
                    <span className="text-muted-foreground text-sm mt-2 inline-block">
                      {article.anio}
                    </span>
                  )}
                </div>
                <ArrowUpRight className="h-4 w-4 mt-1 text-muted-foreground transition-colors group-hover:text-accent shrink-0" />
              </a>
            ))}
          </div>
        )}

        {visibleCount < archive.length && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((c) => c + STEP)}
            >
              Cargar más
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
