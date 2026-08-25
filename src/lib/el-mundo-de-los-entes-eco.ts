import { loadEssayContent } from '@/lib/load-essay-content';

export type EssayBlock =
  | { type: 'p'; text: { es: string; en: string } }
  | {
      type: 'image';
      src: string;
      width: number;
      height: number;
      /** Texto alternativo para lectores de pantalla; no se muestra como pie de foto. */
      alt: { es: string; en: string };
    };

type EntesEcoContent = {
  elMundoDeLosEntesEco: EssayBlock[];
};

/**
 * Ensayo bilingüe "El mundo de los entes-eco" / "The World of Echo-Beings".
 *
 * El contenido vive en `content/essays/el-mundo-de-los-entes-eco.json` y se
 * carga vía `fs` para no entrar en el grafo de módulos de webpack.
 * Los párrafos es/en están alineados 1:1; las imágenes se intercalan en los
 * mismos puntos en ambos idiomas.
 */
const content = loadEssayContent<EntesEcoContent>('el-mundo-de-los-entes-eco.json');

export const elMundoDeLosEntesEco = content.elMundoDeLosEntesEco;
