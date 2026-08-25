import { loadEssayContent } from '@/lib/load-essay-content';

export type FilmmakerLifePage = {
  src: string;
  label: { es: string; en: string };
};

type FilmmakerLifeContent = {
  filmmakerLifePages: FilmmakerLifePage[];
  filmmakerLifeBody: { es: string; en: string }[];
  filmmakerLifeSignature: { es: string; en: string };
};

/**
 * Artículo bilingüe de FilmmakerLife Magazine (Issue 119).
 *
 * El contenido vive en `content/essays/filmmakerlife-article.json` y se carga
 * vía `fs` para no entrar en el grafo de módulos de webpack.
 */
const content = loadEssayContent<FilmmakerLifeContent>('filmmakerlife-article.json');

export const filmmakerLifePages = content.filmmakerLifePages;

/** Cuerpo del artículo, párrafo por párrafo, en ambos idiomas. */
export const filmmakerLifeBody = content.filmmakerLifeBody;

export const filmmakerLifeSignature = content.filmmakerLifeSignature;
