import { siteConfig } from '@/lib/data/site-data';

export const SITE_NAME = 'Mauricio de la Maza-Benignos';
export const JOURNAL_NAME = 'Confinium';
export const JOURNAL_BRAND = 'Revista Confinium';

export const CONFINIUM_HOME = 'https://confinium.mauriciodelamazabenignos.com';

export const PERSON_ID = `${siteConfig.url}/#person`;
export const PERIODICAL_ID = `${CONFINIUM_HOME}/#periodical`;
export const REVISTA_URL = `${siteConfig.url}/revista`;

/** Volumen 1 corresponde a 2026; cada volumen posterior suma un año. */
export function volumeYear(volume: number): number {
  return 2025 + volume;
}

/** "Confinium · Vol. 1 (2026), art. N" (igual en ambos idiomas). */
export function issueLine(volume: number, article: number): string {
  return `Vol. ${volume} (${volumeYear(volume)}), art. ${article}`;
}

export const REVISTA_TITLE = `${JOURNAL_BRAND} — Ensayos en la frontera | ${SITE_NAME}`;
export const REVISTA_DESCRIPTION =
  'Revista Confinium: ensayos de Mauricio de la Maza-Benignos en la frontera entre el cine, la ciencia, la filosofía y la conservación.';

const SPANISH_MONTHS: Record<string, string> = {
  enero: '01',
  febrero: '02',
  marzo: '03',
  abril: '04',
  mayo: '05',
  junio: '06',
  julio: '07',
  agosto: '08',
  septiembre: '09',
  octubre: '10',
  noviembre: '11',
  diciembre: '12',
};

/** Convierte una fecha en español ("16 de Julio, 2026") a formato ISO 8601 (2026-07-16). */
export function toIsoDate(date: string): string {
  const match = date.match(/(\d{1,2})\s+de\s+([A-Za-zÁÉÍÓÚáéíóú]+),?\s+(\d{4})/);
  if (!match) return date;
  const [, day, monthName, year] = match;
  const month = SPANISH_MONTHS[monthName.toLowerCase()];
  if (!month) return date;
  return `${year}-${month}-${day.padStart(2, '0')}`;
}

/** Serializa JSON-LD escapando `<` para que el contenido no pueda cerrar la etiqueta <script>. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function breadcrumbNode(id: string, items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
