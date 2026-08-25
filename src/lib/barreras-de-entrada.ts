import { loadEssayContent } from '@/lib/load-essay-content';

export type EssayBlock =
  | { type: 'p'; text: { es: string; en: string } }
  | { type: 'image'; src: string; caption: { es: string; en: string } };

type BarrerasContent = {
  barrerasDeEntrada: EssayBlock[];
};

/**
 * Ensayo bilingüe "Barreras de entrada" / "Barriers to Entry".
 *
 * El contenido vive en `content/essays/barreras-de-entrada.json` y se carga
 * vía `fs` para no entrar en el grafo de módulos de webpack.
 * Los párrafos es/en están alineados 1:1; las imágenes se intercalan en los
 * mismos puntos en ambos idiomas.
 */
const content = loadEssayContent<BarrerasContent>('barreras-de-entrada.json');

export const barrerasDeEntrada = content.barrerasDeEntrada;
