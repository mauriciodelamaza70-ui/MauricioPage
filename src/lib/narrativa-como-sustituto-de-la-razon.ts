import { loadEssayContent } from '@/lib/load-essay-content';

export type EssayBlock =
  | { type: 'p'; text: { es: string; en: string } }
  | { type: 'h'; text: { es: string; en: string } }
  | {
      type: 'image';
      src: string;
      caption: { es: string; en: string };
    };

type NarrativaContent = {
  narrativaRazonSubtitle: { es: string; en: string };
  narrativaComoSustitutoDeLaRazon: EssayBlock[];
};

/**
 * Ensayo bilingüe "La narrativa como sustituto de la razón" /
 * "Narrative as a Substitute for Reason".
 *
 * El contenido vive en `content/essays/narrativa-como-sustituto-de-la-razon.json`
 * y se carga vía `fs` para no entrar en el grafo de módulos de webpack.
 * Los párrafos es/en están alineados 1:1; las imágenes con sus pies de foto
 * se intercalan en los mismos puntos en ambos idiomas.
 */
const content = loadEssayContent<NarrativaContent>(
  'narrativa-como-sustituto-de-la-razon.json'
);

/** Subtítulo bilingüe del ensayo (se muestra bajo el título del héroe). */
export const narrativaRazonSubtitle = content.narrativaRazonSubtitle;

export const narrativaComoSustitutoDeLaRazon = content.narrativaComoSustitutoDeLaRazon;
