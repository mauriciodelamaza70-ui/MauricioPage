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
  'teleologia-conciencia-y-sentido': {
    doi: '10.5281/zenodo.23962969',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.23962969',
    pdfUrl:
      'https://zenodo.org/records/23962969/files/Teleology_Consciousness_and_Meaning_Teleologia_conciencia_y_sentido.pdf?download=1',
    license: {
      name: 'CC BY-NC-ND 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    },
    citation:
      'De la Maza-Benignos, M. (2026). Teleology, Consciousness and Meaning / Teleología, conciencia y sentido [Ensayo]. https://doi.org/10.5281/zenodo.23962969',
    keywordsEs: [
      'teleología',
      'teleonomía',
      'sentido',
      'autonomía moral',
      'ética secular',
      'universalizabilidad',
      'nihilismo',
      'Kant',
      'Nietzsche',
      'creencia',
    ],
    keywordsEn: [
      'teleology',
      'teleonomy',
      'meaning',
      'moral autonomy',
      'secular ethics',
      'universalizability',
      'nihilism',
      'Kant',
      'Nietzsche',
      'belief',
    ],
    abstractEs:
      'Escrito como un diálogo interior, el ensayo pregunta si quien no cree en una causa superior puede desarrollar un sentido propio y sostener una brújula moral sin una autoridad trascendente. Distingue la teleonomía, la orientación funcional que comparten todos los seres vivos, de la teleología natural clásica de Aristóteles y Tomás de Aquino, y sostiene que la consciencia no revela una finalidad última, sino que impone la carga de ponerla. Frente a encontrar un sentido dado o crear uno arbitrario, propone desarrollarlo a partir de un sustrato real —biología, memoria, entorno y vínculos—, lo que lo hace falible y sometible a examen. Define la moral como la norma que resiste la universalización, universalizable en su criterio pero situada en su aplicación, y defiende la moral autónoma como la forma más alta de la ética: la conciencia que extiende la empatía endogrupal al extraño. El ensayo reconoce la fragilidad de una moral sin aval externo y la exclusión del no creyente de las comunidades unidas por un relato compartido; responde a las objeciones de Anscombe y Nietzsche, con la capa de ozono y la moral climática como casos de normas nacidas de la ciencia y la conciencia; y concluye que creer y no creer son ambas apuestas: uno está consolado pero dormido; el otro, jodido pero despierto.',
    abstractEn:
      'Written as an inner dialogue, this essay asks whether someone who does not believe in a higher cause can develop a meaning of their own and sustain a moral compass without a transcendent authority. It distinguishes teleonomy, the functional orientation shared by all living beings, from the classical natural teleology of Aristotle and Aquinas, and argues that consciousness does not reveal an ultimate purpose but imposes the burden of setting one. Against both finding a given meaning and creating an arbitrary one, it proposes developing meaning from a real substrate —biology, memory, environment and bonds— which makes it fallible and open to examination. It defines morality as the norm that withstands universalization, universalizable in its criterion but situated in its application, and defends autonomous morality as the highest form of ethics: conscience extending in-group empathy to the stranger. The essay acknowledges the fragility of a morality without external backing and the exclusion of the non-believer from communities bound by a shared story; answers objections from Anscombe and Nietzsche, using the ozone layer and climate morality as cases of norms born from science and conscience; and concludes that belief and unbelief are both wagers: one is consoled but asleep, the other screwed but awake.',
  },
  'ni-tanto-que-queme-al-santo': {
    doi: '10.5281/zenodo.23963803',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.23963803',
    pdfUrl:
      'https://zenodo.org/records/23963803/files/Neither_Burn_the_Saint_Ni_tanto_que_queme_al_santo.pdf?download=1',
    license: {
      name: 'CC BY-NC-ND 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    },
    citationTitle:
      'Ni tanto que queme al santo, ni tanto que no lo alumbre: de los combustibles fósiles a las energías renovables',
    citation:
      'De la Maza-Benignos, M. (2026). Neither Burn the Saint nor Leave Him in the Dark / Ni tanto que queme al santo, ni tanto que no lo alumbre (3.ª rev. / 3rd rev.) [Ensayo / Essay]. https://doi.org/10.5281/zenodo.23963803',
    history: {
      es: 'Escrito el 24 de mayo de 2020; publicado en línea en mayo de 2020 y posteriormente censurado y retirado; revisado en enero de 2022 y publicado en HOMINIS, año 2, núm. 7, 6 de marzo de 2022, pp. 12–13; tercera revisión, 2026.',
      en: 'Written 24 May 2020; first published online in May 2020 and subsequently censored and taken down; revised in January 2022 and published in HOMINIS, year 2, no. 7, 6 March 2022, pp. 12–13; third revision, 2026.',
    },
    keywordsEs: [
      'transición energética',
      'energías renovables',
      'biodiversidad',
      'cambio climático',
      'ética ambiental',
      'energía eólica',
      'energía solar',
      'política energética',
      'México',
    ],
    keywordsEn: [
      'energy transition',
      'renewable energy',
      'biodiversity',
      'climate change',
      'environmental ethics',
      'wind energy',
      'solar energy',
      'energy policy',
      'Mexico',
    ],
    abstractEs:
      "Escrito en mayo de 2020 a raíz de las medidas de política energética emitidas por el gobierno de México durante la emergencia por COVID-19, y revisado en 2022, el ensayo sostiene que nada justifica obstaculizar la transición de los combustibles fósiles hacia las energías renovables, pero que existe un deber moral, como obligación de la razón sobre la voluntad, de considerar sus impactos en la biodiversidad. Con base en los informes del IPCC y en cifras oficiales de la época, examina los argumentos ofrecidos para privilegiar la generación con combustóleo sobre las energías limpias y los caracteriza como falacias argumentativas. Critica también la visión positivista que acepta la pérdida de biodiversidad como daño colateral del progreso, y señala los efectos de parques eólicos mal planeados sobre murciélagos y aves migratorias, de las grandes extensiones solares sobre la conectividad ecosistémica y de las hidroeléctricas sobre las especies acuáticas. Con referencia a la modernidad como proyecto inacabado de Habermas, a Laudato si' y a la ética de la tierra, propone ubicar la infraestructura renovable en ciudades, techos y zonas degradadas, conforme a los criterios de costo de oportunidad y adicionalidad, y pide políticas que incorporen la biodiversidad como variable de la transición energética. Se reproduce como documento histórico; las cifras y el marco normativo no se han actualizado.",
    abstractEn:
      "Written in May 2020 in response to the Mexican government's energy-policy measures issued during the COVID-19 emergency, and revised in 2022, this essay argues that nothing justifies obstructing the transition from fossil fuels to renewable energy, but that there is a moral duty, as an obligation of reason over will, to consider its impacts on biodiversity. Drawing on IPCC assessments and official energy figures of the time, it examines the arguments offered for favoring fuel-oil generation over clean energy and characterizes them as argumentative fallacies. It also criticizes the positivist view that accepts biodiversity loss as collateral damage of progress, pointing to the effects of poorly planned wind farms on bats and migratory birds, of large solar installations on ecosystem connectivity, and of hydropower on aquatic species. Invoking Habermas's notion of modernity as an unfinished project, Laudato si' and the land ethic, it proposes siting renewable infrastructure in cities, rooftops and degraded areas, guided by opportunity cost and additionality, and calls for policies that incorporate biodiversity as a variable in the energy transition. It is reproduced as a historical document; figures and the regulatory framework have not been updated.",
  },
};
