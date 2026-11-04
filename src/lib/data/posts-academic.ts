import type { AcademicFields } from '../types';

// Datos académicos (DOI, resumen, palabras clave) por slug. Separados de posts-meta para no cargar listados.
export const postsAcademic: Record<string, AcademicFields> = {
  'la-ia-y-la-trampa-del-perro': {
    doi: '10.5281/zenodo.23941449',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.23941449',
    pdfUrl:
      'https://zenodo.org/records/23941449/files/AI_and_the_Dog_Trap_La_IA_y_la_trampa_del_perro.pdf?download=1',
    license: {
      name: 'CC BY-NC-ND 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    },
    citation:
      'De la Maza-Benignos, M. (2026). AI and the Dog Trap / La IA y la trampa del perro [Ensayo]. https://doi.org/10.5281/zenodo.23941449',
    keywordsEs: [
      'teleología',
      'agencia',
      'inteligencia artificial',
      'conciencia',
      'incertidumbre',
      'principio precautorio',
      'protoagente',
      'superinteligencia',
      'ética',
    ],
    keywordsEn: [
      'teleology',
      'agency',
      'artificial intelligence',
      'consciousness',
      'uncertainty',
      'precautionary principle',
      'proto-agent',
      'superintelligence',
      'ethics',
    ],
    abstractEs:
      'El ensayo examina si un agente artificial puede tener una teleología propia, y separa esa pregunta de la pregunta por la conciencia. A través de sucesivas objeciones —el criterio de decidir, la deliberación, la conducta observable y el acceso introspectivo— el autor concluye que la deliberación genuina no es verificable desde fuera para ningún agente, incluido uno mismo. Propone entonces una apuesta prudencial basada en la asimetría de riesgo y ponderada por la plausibilidad estructural, junto con una regla de reciprocidad: conceder a otros el mismo beneficio de la duda que uno necesita que se le conceda. Un apéndice ofrece un diagnóstico multivariable de la agencia en cuatro ejes, aplicado al termostato, al venado, al ser humano, al estado vegetativo persistente, a la IA actual y a los agentes con aprendizaje continuo, que se proponen como protoagentes por analogía con los coacervados de Oparin. El colofón plantea la necesidad de acordar, como especie, las reglas para diagnosticar una posible superinteligencia antes de su llegada, y advierte contra la trampa del bienestar administrado.',
    abstractEn:
      "This essay asks whether an artificial agent can have a teleology of its own, separating that question from the question of consciousness. Working through successive objections —the criterion of deciding, deliberation, observable behaviour and introspective access— the author concludes that genuine deliberation cannot be verified from the outside for any agent, oneself included. He then proposes a prudential wager grounded in the asymmetry of risk and weighted by structural plausibility, together with a rule of reciprocity: to grant others the same benefit of the doubt one needs to be granted. An appendix offers a multivariate diagnosis of agency along four axes, applied to the thermostat, the deer, the human being, the persistent vegetative state, current AI and continually learning agents, which are proposed as proto-agents by analogy with Oparin's coacervates. The coda argues that humanity, acting as a species, should agree on the rules for diagnosing a possible superintelligence before it arrives, and warns against the trap of administered welfare.",
  },
};
