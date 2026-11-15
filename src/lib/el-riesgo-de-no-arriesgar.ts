import { loadEssayContent } from '@/lib/load-essay-content';

export type EssayBlock =
  | { type: 'p'; text: { es: string; en: string } }
  | { type: 'h'; text: { es: string; en: string } }
  | {
      type: 'image';
      src: string;
      caption: { es: string; en: string };
    };

type RiesgoArriesgarContent = {
  riesgoArriesgarSubtitle: { es: string; en: string };
  elRiesgoDeNoArriesgar: EssayBlock[];
};

/**
 * Ensayo bilingüe "El riesgo de no arriesgar" / "The Risk of Not Risking".
 *
 * El contenido vive en `content/essays/el-riesgo-de-no-arriesgar.json` y se
 * carga vía `fs` para no entrar en el grafo de módulos de webpack. Los párrafos
 * es/en están alineados 1:1.
 */
const content = loadEssayContent<RiesgoArriesgarContent>(
  'el-riesgo-de-no-arriesgar.json'
);

/** Subtítulo bilingüe del ensayo (se muestra bajo el título del héroe). */
export const riesgoArriesgarSubtitle = content.riesgoArriesgarSubtitle;

export const elRiesgoDeNoArriesgar = content.elRiesgoDeNoArriesgar;
