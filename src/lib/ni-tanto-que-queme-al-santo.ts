import { loadEssayContent } from '@/lib/load-essay-content';

type Bilingual = { es: string; en: string };

export type SantoBlock =
  | { type: 'p'; text: Bilingual }
  | { type: 'h'; text: Bilingual }
  | { type: 'hr' }
  | { type: 'ul'; items: Bilingual[] }
  | {
      type: 'image';
      src: string;
      width: number;
      height: number;
      alt: Bilingual;
      caption: Bilingual;
    };

type SantoContent = {
  santoTitle: Bilingual;
  santoSubtitle: Bilingual;
  santoBody: SantoBlock[];
};

/**
 * Text blocks may contain inline <strong>/<em> from the source .docx; the JSON is
 * authored in-repo, so it is trusted markup.
 */
const content = loadEssayContent<SantoContent>('ni-tanto-que-queme-al-santo.json');

export const santoSubtitle = content.santoSubtitle;
export const santoBody = content.santoBody;
