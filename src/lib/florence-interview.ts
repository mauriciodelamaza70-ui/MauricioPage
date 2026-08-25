import { loadEssayContent } from '@/lib/load-essay-content';

export type Bilingual = { es: string; en: string };

export type InterviewBlock =
  | { type: 'image'; src: string; caption: Bilingual }
  | { type: 'intro'; text: Bilingual }
  | { type: 'qa'; q: Bilingual; a: { es: string[]; en: string[] } };

type FlorenceContent = {
  florenceInterview: InterviewBlock[];
};

/**
 * Entrevista bilingüe de Florence Film Awards.
 *
 * El contenido vive en `content/essays/florence-interview.json` y se carga
 * vía `fs` para no entrar en el grafo de módulos de webpack.
 */
const content = loadEssayContent<FlorenceContent>('florence-interview.json');

export const florenceInterview = content.florenceInterview;
