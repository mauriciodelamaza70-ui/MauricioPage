import { loadEssayContent } from '@/lib/load-essay-content';
import type { Lang } from '@/components/pages/lang-article';

export type DivaImage = {
  type: 'img';
  src: string;
  alt: string;
  /** `side`: media columna a la derecha con texto alrededor (escritorio); `column`: ancho de columna. */
  layout: 'side' | 'column';
  width: number;
  height: number;
};

export type DivaBlock = { type: 'p' | 'h'; html: string } | DivaImage;

export type DivaVersion = {
  title: string;
  subtitle: string;
  cover: { src: string; alt: string };
  body: DivaBlock[];
  credit: string;
};

/**
 * HTML generated in-repo from the author's manuscript (only <em>), so it is
 * trusted markup.
 */
export const divaGanster = loadEssayContent<Record<Lang, DivaVersion>>('la-diva-y-el-ganster.json');
