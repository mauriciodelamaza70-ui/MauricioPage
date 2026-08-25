import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  filmmakerLifePages,
  filmmakerLifeBody,
  filmmakerLifeSignature,
} from '@/lib/filmmakerlife-article';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

const ORIGINAL_URL =
  'https://www.filmmakerlife.com/mauricio-de-la-maza-benignos-cinema-as-risk-not-as-a-comfort/';

const COPY: Record<
  Lang,
  { attribution: string; pagesCaption: string; textHeading: string; original: string }
> = {
  es: {
    attribution:
      'Publicado originalmente por FilmmakerLife Magazine, Issue 119, marzo 2026. Por Marisa Lovet, periodista cultural.',
    pagesCaption:
      'Páginas de la edición impresa, reproducidas con autorización de FilmmakerLife Magazine.',
    textHeading: 'Traducción al español',
    original: 'Ver publicación original en FilmmakerLife',
  },
  en: {
    attribution:
      'Originally published by FilmmakerLife Magazine, Issue 119, March 2026. By Marisa Lovet, cultural journalist.',
    pagesCaption:
      'Pages from the print edition, reproduced with permission from FilmmakerLife Magazine.',
    textHeading: 'Original English text',
    original: 'View original publication on FilmmakerLife',
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
        filmmakerlife.com
      </a>
    </div>
  );
}

function FilmmakerBody({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Páginas de la revista */}
      <div className="mt-12 space-y-8">
        {filmmakerLifePages.map((page, i) => (
          <a
            key={page.src}
            href={ORIGINAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-lg bg-secondary"
          >
            <Image
              src={page.src}
              alt={`FilmmakerLife Magazine — ${page.label[lang]}`}
              width={960}
              height={1242}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-contain"
              priority={i === 0}
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

      <p className="mt-4 text-xs text-muted-foreground">{COPY[lang].pagesCaption}</p>

      {/* Texto del artículo */}
      <div className="mt-16 border-t border-border pt-10">
        <p className="text-accent text-xs font-medium uppercase tracking-[0.2em]">
          {COPY[lang].textHeading}
        </p>
        <div className="mt-6 space-y-6">
          {filmmakerLifeBody.map((para, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground text-pretty">
              {para[lang]}
            </p>
          ))}
          <p className="italic text-foreground/90">{filmmakerLifeSignature[lang]}</p>
        </div>
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

export default function FilmmakerLifeArticle() {
  return (
    <article className="max-w-3xl">
      <LangArticle
        beforeEs={<Attribution lang="es" />}
        beforeEn={<Attribution lang="en" />}
        toggleWrapperClassName="mt-8 flex justify-start"
        es={<FilmmakerBody lang="es" />}
        en={<FilmmakerBody lang="en" />}
      />
    </article>
  );
}
