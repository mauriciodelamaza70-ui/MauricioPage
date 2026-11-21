import { CONFINIUM_HOME, JOURNAL_BRAND, JOURNAL_NAME, issueLine } from '@/lib/revista-seo';

type Lang = 'es' | 'en';

export function IssueLine({ volume, number, lang = 'es' }: { volume: number; number: number; lang?: Lang }) {
  return (
    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-300">
      <a href={CONFINIUM_HOME} className="underline-offset-4 hover:underline hover:text-white">
        {JOURNAL_NAME}
      </a>{' '}
      · {issueLine(volume, number, lang)}
    </p>
  );
}

export function MoreEssaysLink({ lang = 'es' }: { lang?: Lang }) {
  return (
    <p className="max-w-4xl mx-auto mt-16 font-headline text-xl">
      <a href={CONFINIUM_HOME} className="text-accent underline-offset-4 hover:underline">
        {lang === 'es' ? `Más ensayos en ${JOURNAL_BRAND} →` : `More essays in ${JOURNAL_BRAND} →`}
      </a>
    </p>
  );
}
