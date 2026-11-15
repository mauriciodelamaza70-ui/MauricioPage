import { loadEssayContent } from '@/lib/load-essay-content';
import type { Lang } from '@/components/pages/lang-article';

export type PlataformasBlock = { type: 'p' | 'h'; html: string };
export type PlataformasNote = { n: number; html: string };

export type PlataformasVersion = {
  title: string;
  subtitle: string;
  disclaimer: string;
  body: PlataformasBlock[];
  notes: PlataformasNote[];
  doi: string;
};

/**
 * HTML generated in-repo from the author's manuscript (only <em>, <a> and
 * footnote <sup> links), so it is trusted markup.
 */
export const plataformas = loadEssayContent<Record<Lang, PlataformasVersion>>(
  'plataformas-digitales.json',
);
