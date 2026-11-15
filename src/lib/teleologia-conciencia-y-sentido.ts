import { loadEssayContent } from '@/lib/load-essay-content';

type Bilingual = { es: string; en: string };

export type TeleologiaBlock =
  | { type: 'p'; text: Bilingual }
  | { type: 'h'; text: Bilingual }
  | { type: 'ul'; items: Bilingual[] }
  | {
      type: 'image';
      src: string;
      width: number;
      height: number;
      alt: Bilingual;
      caption: Bilingual;
    };

type TeleologiaContent = {
  teleologiaTitle: Bilingual;
  teleologiaSubtitle: Bilingual;
  teleologiaBody: TeleologiaBlock[];
};

/**
 * Text blocks may contain inline <strong>/<em> from the source .docx; the JSON is
 * authored in-repo, so it is trusted markup.
 */
const content = loadEssayContent<TeleologiaContent>('teleologia-conciencia-y-sentido.json');

export const teleologiaSubtitle = content.teleologiaSubtitle;
export const teleologiaBody = content.teleologiaBody;
