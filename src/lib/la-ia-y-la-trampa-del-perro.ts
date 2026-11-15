import { loadEssayContent } from '@/lib/load-essay-content';

export type EssayBlock =
  | { type: 'p'; text: { es: string; en: string } }
  | { type: 'h'; text: { es: string; en: string } }
  | {
      type: 'image';
      src: string;
      alt: { es: string; en: string };
      caption?: { es: string; en: string };
    };

type IaTrampaPerroContent = {
  laIaTrampaPerroSubtitle: { es: string; en: string };
  laIaTrampaPerroTitle: { es: string; en: string };
  laIaYLaTrampaDelPerro: EssayBlock[];
};

/**
 * Ensayo bilingüe "La IA y la trampa del perro" / "The AI and the Dog's Trap".
 *
 * El contenido vive en `content/essays/la-ia-y-la-trampa-del-perro.json` y se
 * carga vía `fs` para no entrar en el grafo de módulos de webpack. Los párrafos
 * es/en están alineados 1:1; las 4 fotografías (solo presentes en el original
 * en español) se insertan en la misma posición para ambos idiomas.
 */
const content = loadEssayContent<IaTrampaPerroContent>(
  'la-ia-y-la-trampa-del-perro.json'
);

/** Subtítulo bilingüe del ensayo (se muestra bajo el título del héroe). */
export const laIaTrampaPerroSubtitle = content.laIaTrampaPerroSubtitle;

export const laIaYLaTrampaDelPerro = content.laIaYLaTrampaDelPerro;
