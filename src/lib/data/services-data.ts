import type { Service, ProductionLogo, Project } from '../types';

export const services: Service[] = [
  {
    title: 'Cine de Ficción y Documental',
    imageId: 'service-audiovisual',
    summary: 'Narrativas que transitan entre el documental ambiental de tono poético y la ficción de carácter introspectivo. Una búsqueda constante de aquello que late bajo la superficie a través del lenguaje cinematográfico.',
    details: [
        {
            title: "Producción Cinematográfica",
            description: "Exploramos aquello que no siempre es visible: la culpa, la memoria, el miedo y el deseo.",
            items: [
                "Documentales ambientales de tono poético",
                "Largometrajes de ficción introspectiva",
                "Cine de autor y drama psicológico",
                "Narrativas de naturaleza y diversidad humana"
            ]
        }
    ]
  },
  {
    title: 'Composición y Diseño Sonoro',
    imageId: 'service-editing',
    summary: 'La música no acompaña la imagen: la completa. Mauricio compone desde la tensión emocional y la atmósfera narrativa, combinando escritura orquestal minimalista, ambient y exploración experimental.',
    details: []
  },
  {
    title: 'Fotografía Contemplativa',
    imageId: 'service-photography',
    summary: 'Una mirada que se detiene donde otras pasan de largo. La fotografía comparte el mismo temple del cine: la búsqueda de lo que late bajo la superficie.',
    details: []
  },
  {
    title: 'Gestión Cultural y Ética',
    imageId: 'service-culture',
    summary: 'Más de tres décadas vinculando el arte, la ciencia y la sociedad. Como Director General del Wildlife Conservation Film Festival (WCFF).',
    details: []
  },
  {
    title: 'Consultoría Ambiental Estratégica',
    imageId: 'service-consulting',
    summary: 'Sustentada en una trayectoria científica y de gestión de primer nivel —WWF, Pronatura Noreste, Sistema Nacional de Investigadores.',
    details: []
  },
  {
    title: 'Dirección Creativa Narrativa',
    imageId: 'service-digital',
    summary: 'Para proyectos que necesitan encontrar su voz. Acompañamiento a equipos creativos, productoras y organizaciones.',
    details: []
  },
];

export const productionLogos: ProductionLogo[] = [
    { src: '/images/Cora.png', alt: 'Cora Poster', width: 500, height: 750, url: 'https://corafilm.com/' },
    { src: '/images/Dialogos de la muerte.png', alt: 'Diálogos de la Muerte Poster', width: 500, height: 750, url: 'https://dialogosdelamuerte.com/' },
  { src: '/images/El zapato.png', alt: 'El Zapato Poster', width: 500, height: 750, url: 'https://theshoe.info/' },
  { src: '/images/El gran Makhaira.png', alt: 'El Gran Makhaira Poster', width: 500, height: 750, url: 'https://makhaira.mauriciodelamazabenignos.com' },
  { src: '/images/El Bonito.png', alt: 'El Bonito Poster', width: 500, height: 750, url: 'https://elbonito.mauriciodelamazabenignos.com' },
  { src: '/images/Wildligeconservation.png', alt: 'Wildlife Conservation Film Festival Poster', width: 500, height: 750, url: 'https://wcff.org/' },
    { src: '/images/PPPanterra-1.png', alt: 'Pantera Cine Fest Poster', width: 500, height: 750, url: 'https://panterracinefest.org/' },
];

export const projects: Project[] = [
    { id: 'proj-1', title: 'Conservación del Lobo Mexicano', imageId: 'project-1', category: 'Proyectos' },
    { id: 'proj-2', title: 'Desierto Chihuahuense: Un Universo Oculto', imageId: 'project-2', category: 'Proyectos' },
    { id: 'proj-3', title: 'Festival de Cine PanterFest', imageId: 'project-3', category: 'Eventos' },
    { id: 'proj-4', title: 'Estrategia de Conservación Hídrica', imageId: 'project-4', category: 'Consultoría' },
];
