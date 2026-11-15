import { plataformas } from '@/lib/plataformas-digitales';
import { LangArticle, type Lang } from '@/components/pages/lang-article';
import { AcademicBlock } from '@/components/pages/revista/AcademicBlock';
import type { AcademicFields } from '@/lib/types';

const LABELS = {
  es: {
    notes: 'Notas',
    back: 'Volver al texto',
    credit: 'Imagen de portada: asteroide Bennu. Crédito: NASA/Goddard/University of Arizona.',
  },
  en: {
    notes: 'Notes',
    back: 'Back to text',
    credit: 'Cover image: asteroid Bennu. Credit: NASA/Goddard/University of Arizona.',
  },
} as const;

const PROSE_LINKS =
  '[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-foreground [&_sup]:ml-0.5 [&_sup_a]:no-underline [&_sup_a]:font-sans [&_sup_a]:font-semibold';

function PlataformasBody({ lang, academic }: { lang: Lang; academic?: AcademicFields }) {
  const v = plataformas[lang];
  const t = LABELS[lang];
  const [doiLabel, doiUrl] = v.doi.split(/:\s(?=https?:)/);

  return (
    <>
      <h2 className="mt-10 text-center font-headline text-3xl font-bold text-foreground md:text-4xl text-balance">
        {v.title}
      </h2>
      <p className="mt-4 text-center font-serif text-xl italic text-muted-foreground text-balance">
        {v.subtitle}
      </p>

      <AcademicBlock data={academic} lang={lang} />

      <article className="mt-10 space-y-6">
        <p className="font-serif text-lg italic leading-relaxed text-muted-foreground text-pretty">
          {v.disclaimer}
        </p>

        {v.body.map((block, i) =>
          block.type === 'h' ? (
            <h2
              key={i}
              className="pt-8 font-headline text-2xl font-bold text-foreground md:text-3xl text-balance"
            >
              {block.html}
            </h2>
          ) : (
            <p
              key={i}
              className={`font-serif text-lg leading-relaxed text-foreground/80 text-pretty ${PROSE_LINKS}`}
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          ),
        )}
      </article>

      <section aria-labelledby={`${lang}-notas-heading`} className="mt-16 border-t border-border pt-8">
        <h2 id={`${lang}-notas-heading`} className="font-headline text-2xl font-bold text-foreground">
          {t.notes}
        </h2>
        <ol className="mt-6 flex flex-col gap-4">
          {v.notes.map((note) => (
            <li
              key={note.n}
              id={`${lang}-nota-${note.n}`}
              className="flex scroll-mt-24 gap-3 font-serif text-base leading-relaxed text-foreground/80"
            >
              <a
                href={`#${lang}-ref-${note.n}`}
                aria-label={`${t.back} (${note.n})`}
                className="shrink-0 font-sans font-semibold text-accent hover:text-foreground"
              >
                {note.n}.
              </a>
              <span className={`text-pretty ${PROSE_LINKS}`} dangerouslySetInnerHTML={{ __html: note.html }} />
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-10 font-serif text-lg leading-relaxed text-foreground/80">
        {doiLabel}:{' '}
        <a
          href={doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-accent underline underline-offset-2 hover:text-foreground"
        >
          {doiUrl}
        </a>
      </p>

      <p className="mt-6 text-sm italic text-muted-foreground">{t.credit}</p>
    </>
  );
}

export default function PlataformasDigitalesEssay({ academic }: { academic?: AcademicFields }) {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle
        es={<PlataformasBody lang="es" academic={academic} />}
        en={<PlataformasBody lang="en" academic={academic} />}
      />
    </div>
  );
}
