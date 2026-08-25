import type { BookCategory } from '../types';
import { Microscope, PenLine } from 'lucide-react';

export const scienceBooks = [
  {
    id: 'peces-rio-conchos',
    title: 'Los Peces del Río Conchos',
    cover: '/images/libros/los-peces-del-rio-conchos-cover.jpg',
    date: 'Septiembre 2009',
    editor: 'M. de la Maza-Benignos',
    publisher: 'Alianza WWF-FGRA y Gobierno del Estado de Chihuahua',
    year: '2009',
    isbn: '978-607-00-1569-4',
    doi: '10.13140/2.1.2744.2242',
    synopsis:
      'La salud del río Conchos, en el Desierto Chihuahuense, es determinante para el bienestar social y económico de una extensa región del norte de México. Este volumen documenta la ictiofauna de la cuenca —su diversidad, distribución y estado de conservación— como indicador clave de la integridad de un sistema hídrico sometido a crecientes presiones. A través del estudio de sus peces, el libro ofrece una lectura del río como organismo vivo: un territorio donde la ciencia, la gestión del agua y la conservación se entrelazan. Reúne el trabajo de campo, la sistemática y las recomendaciones de manejo necesarias para preservar uno de los afluentes más importantes del río Bravo.',
    pdf: '/pdfs/los-peces-del-rio-conchos.pdf',
  },
  {
    id: 'cuatro-cienegas',
    title: 'Cuatro Ciénegas y su Estado de Conservación a Través de sus Peces',
    cover: '/images/libros/cuatro-cienegas-cover.jpg',
    date: '',
    editor: 'Mauricio de la Maza Benignos',
    publisher: 'Pronatura Noreste',
    year: '',
    isbn: '978-607-96611-1-3',
    doi: '',
    prologue: 'Prólogo de Evan W. Carson',
    synopsis:
      'The importance of and threats to the biodiversity of Cuatro Ciénegas are hard to overstate. This oasis in the Chihuahuan Desert harbors an extraordinary concentration of endemic species found nowhere else on Earth, sustained by a fragile network of spring-fed wetlands. Told through its fishes, this volume assesses the conservation status of the valley: its unique ichthyofauna serves as a sensitive barometer of an ecosystem under mounting hydrological pressure. Combining rigorous field science with a conservation ethic, the book documents what is at stake and what will be lost should the springs of Cuatro Ciénegas continue to decline.',
    pdf: '/pdfs/cuatro-cienegas.pdf',
  },
  {
    id: 'desert-wetlands',
    title: 'Conservation of Desert Wetlands and their Biotas / Conservación de Humedales Desérticos y su Biota',
    cover: '/images/libros/conservation-desert-wetlands-cover.jpg',
    date: '2014',
    editor: 'Mauricio De la Maza-Benignos, Ma. de Lourdes Lozano-Vilano & Evan W. Carson',
    publisher: 'Museum of Southwestern Biology, Pronatura Noreste, y Universidad Autónoma de Nuevo León',
    year: '2014',
    isbn: '978-607-96611-0-6',
    doi: '',
    synopsis:
      'A bilingual monograph gathering research on the conservation of desert wetlands and the singular biotas they sustain. Bringing together scientists from Mexico and the United States, the volume examines the ecology, systematics, and management of aquatic species that persist in some of the most arid landscapes of North America. It underscores the disproportionate biological value of these small, isolated water bodies and the urgent, transboundary cooperation their protection demands.',
    pdf: '/pdfs/conservation-desert-wetlands.pdf',
  },
];

export const bookCategories: BookCategory[] = [
  {
    slug: 'ciencia',
    title: 'Ciencia',
    coverImage: '/images/libros-hero-waterfall.jpg',
    href: '/libros/ciencia',
    description:
      'Décadas de investigación en biodiversidad acuática, taxonomía y gobernanza ambiental.',
    icon: Microscope,
  },
  {
  slug: 'novela',
  title: 'Novela',
  coverImage: '/images/mauricio-autor-portrait.jpg',
    href: '/libros/novela',
    icon: PenLine,
  },
];
