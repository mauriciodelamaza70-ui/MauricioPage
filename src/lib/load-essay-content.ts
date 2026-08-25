import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Lee un archivo de contenido JSON desde `/content/essays` en tiempo de
 * ejecución del servidor (durante `next build`/prerender o SSR).
 *
 * Se usa `fs` en lugar de `import`/`require` deliberadamente: así el texto
 * pesado de los ensayos NO entra en el grafo de módulos de webpack y no se
 * compila como JavaScript. Solo estas rutas de archivo quedan en el bundle;
 * el contenido se carga como datos.
 *
 * Estos módulos de contenido solo se importan desde Server Components, por lo
 * que el uso de `fs` es seguro (nunca llega al bundle de cliente).
 */
export function loadEssayContent<T>(fileName: string): T {
  const filePath = join(process.cwd(), 'content', 'essays', fileName);
  return JSON.parse(readFileSync(filePath, 'utf8')) as T;
}
