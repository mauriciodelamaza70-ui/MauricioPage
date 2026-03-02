import type { NavLink, SocialLink, Service, Project, Post, GalleryImage, Achievement, TimelineEvent, Video, ProductionLogo, Collaborator, Movie } from './types';
import { Facebook, Instagram, Linkedin, Youtube, Globe, Film, Award, BookOpen } from 'lucide-react';
import { TheatreIcon, VimeoIcon, WhatsAppIcon, IMDbIcon, WikipediaIcon, SpotifyIcon, AppleMusicIcon, BandcampIcon } from '@/components/icons';

export const siteConfig = {
  name: 'Terra Vision',
  url: 'https://terravision.example.com',
  ogImage: 'https://terravision.example.com/og.jpg',
  description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos.',
  links: {
    twitter: 'https://twitter.com/example',
    github: 'https://github.com/example/terravision',
  },
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/galerias', label: 'Galerías' },
  { href: '/revista', label: 'Revista' },
  { href: '/contacto', label: 'Contacto' },
];

export const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: 'https://www.facebook.com/MauricioDelaMazaBenignos', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/mauriciodelamazabenignos/', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mauricio-de-la-maza-benignos-224a2a9/', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@mauriciodelamaza7834', icon: Youtube },
    { name: 'WhatsApp', href: 'https://wa.me/528110165108', icon: WhatsAppIcon },
];

export const professionalLinks: SocialLink[] = [
    { name: 'IMDb', href: 'https://www.imdb.com/es/name/nm14485536/', icon: IMDbIcon },
    { name: 'FilmFreeway', href: 'https://filmfreeway.com/MauriciodelaMazaBenignos', icon: Film },
    { name: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Mauricio_De_la_Maza-Benignos', icon: WikipediaIcon },
    { name: 'WCFF', href: 'https://wcff.org', icon: Globe },
];

export const productionLinks = [
    { name: 'Cora', href: 'https://corafilm.com' },
    { name: 'Diálogos de la muerte', href: 'https://dialogosdelamuerte.com' },
    { name: 'El Zapato', href: 'https://theshoe.info' },
];

export const musicLinks: SocialLink[] = [
    { name: 'Spotify', href: 'https://open.spotify.com/artist/mauriciodelamaza', icon: SpotifyIcon },
    { name: 'Apple Music', href: 'https://music.apple.com/artist/mauriciodelamaza', icon: AppleMusicIcon },
    { name: 'Bandcamp', href: 'https://mauriciodelamaza.bandcamp.com', icon: BandcampIcon },
];

export const biography = {
  role: "Cineasta y compositor",
  short: "Explorando aquello que no siempre es visible: la culpa, la memoria, el miedo, el deseo y la conciencia moral.",
  intro: "El trabajo de Mauricio de la Maza-Benignos nace de una inquietud esencial: explorar aquello que no siempre es visible, pero que determina nuestras decisiones — la culpa, la memoria, el miedo, el deseo y la conciencia moral.",
  content: [
    {
      text: "Su cine transita entre el documental ambiental de tono poético y educativo y la ficción de carácter introspectivo. En ambos territorios hay una constante: la búsqueda de aquello que late bajo la superficie. Naturaleza, sostenibilidad, diversidad humana y conflicto interior no aparecen como temas aislados, sino como fuerzas que dialogan entre sí."
    },
    {
      text: "Las imágenes no solo narran: interrogan.\nLos silencios no solo contienen: revelan."
    },
    {
      text: "Su obra combina arte, pensamiento crítico y una dimensión ética que evita el panfleto y privilegia la reflexión. Desde ecosistemas vulnerables hasta dilemas morales íntimos, su mirada propone una relación consciente entre el ser humano y su entorno."
    }
  ],
  fiction: {
    title: "Cine de ficción",
    text: "En la ficción, Mauricio construye relatos donde el conflicto no se resuelve únicamente en la acción externa, sino en la tensión interna de los personajes. El drama psicológico y el misterio funcionan como vehículos para explorar preguntas existenciales y filosóficas.",
    details: "Cora, El zapato y Diálogos de la muerte conforman un cuerpo de obra que se mueve en el terreno del cine de autor contemporáneo, con una puesta en escena contenida y una dirección centrada en el trabajo actoral. La atmósfera y el ritmo deliberado sostienen narrativas donde cada gesto tiene peso moral.",
    awards: "Estas películas han circulado en festivales internacionales de cine independiente en Europa, América y Asia, recibiendo disticones como Best Indie Feature Film, Best Avant-Garde Best Director, Best Mystery Film y Best Acting Ensemble. Más allá de los reconocimientos, consolidan una identidad estética definida y coherente."
  },
  documentary: {
    title: "Documental y naturaleza",
    text: "En su vertiente documental, el enfoque ambiental no es únicamente informativo: es contemplativo. La naturaleza aparece como presencia viva, frágil y profundamente interconectada. El cine se convierte en una forma de pedagogía sensible, donde ciencia y poesía comparten el mismo espacio visual."
  },
  music: {
    title: "Música",
    text: "Su trabajo musical se desarrolla en paralelo, pero nunca separado del universo cinematográfico. Parte de una premisa narrativa: la música no acompaña la imagen, la completa.",
    details: "La composición surge desde la atmósfera y la tensión emocional. Ambient, escritura orquestal minimalista, exploración experimental y texturas contemporáneas convergen en estructuras que dialogan con el conflicto interior de los personajes. Se privilegian procesos graduales, respiraciones largas y decisiones que, en ciertos momentos, pueden incluso contradecir la imagen para profundizarla.",
    concept: "La música respira con la historia.",
    recognition: "Parte de su obra ha sido reconocida en contextos vinculados al circuito audiovisual independiente, incluyendo disticones relacionadas con Best Original Score y menciones en festivales internacionales donde su música acompaña proyectos seleccionados.",
    platforms: "Su catálogo está disponible en plataformas digitales como Spotify, Apple Music y Bandcamp, extendiendo su circulación a públicos y profesionales del ámbito audiovisual en distintas partes del mundo.",
    platformsLinks: "Disponible en Spotify, Apple Music y Bandcamp"
  },
  science: {
    title: "La ciencia como mirada",
    intro: "La dimensión artística de Mauricio de la Maza-Benignos no surgió en el vacío: está profundamente enraizada en décadas de trabajo científico y conservacionista de primer nivel internacional.",
    details: [
      "Doctor en Biología y Desarrollo Sustentable summa cum laude por la UANL, miembro del Sistema Nacional de Investigadores de México, e ictiólogo con publicaciones en revistas científicas internacionales —incluyendo la descripción de nuevas especies de cíclidos del noreste de México—, su formación científica atraviesa toda su obra visual. La naturaleza en su cine no es decorado: es argumento.",
      "Entre 2006 y 2011 dirigió el Programa del Desierto Chihuahuense para el WWF, trabajando con los gobiernos de México y Estados Unidos en la conservación del Río Conchos y el Río Bravo. De 2011 a 2021 fue Director General de Pronatura Noreste, una de las ONG ambientales más influyentes del norte de México. En 2020 recibió el Premio a la Conservación del Arizona Game and Fish Department por su labor en la región transfronteriza.",
      "Desde 2023, es Director General (CEO) del Wildlife Conservation Film Festival (WCFF) —uno de los festivales de cine de naturaleza y conservación más importantes del mundo—, lo que consolida su labor como puente entre el cine, la ciencia y la conservación.",
      "Esta trayectoria no es paralela a su cine: lo informa, lo profundiza y le otorga una perspectiva que muy pocos cineastas en el mundo pueden ofrecer."
    ]
  },
  architecture: {
    title: "Una arquitectura unificada",
    text: "El doble rol como director y compositor permite construir una arquitectura dramática unificada, donde cada decisión sonora responde a una intención cinematográfica precisa. Imagen y sonido no funcionan como capas superpuestas, sino como una sola estructura emocional y conceptual.",
    conclusion: "En su obra, cine y música no se ilustran: se revelan mutuamente."
  }
};

export const featuredMovies: Movie[] = [
  {
    id: 'cora-2024',
    title: 'CORA',
    year: '2024',
    genre: 'Thriller psicológico',
    format: 'largometraje',
    synopsis: 'Cora es una socialité que enfrenta las consecuencias de sus propias decisiones con métodos poco convencionales. Infidelidad, amor prohibido, violencia y elecciones del pasado forman el torbellino que deberá atravesar para recuperar su vida. Inspirada en el Fénix, es un viaje de redención donde la culpa, la memoria y el deseo se entrelazan en una atmósfera de tensión psicológica.',
    awards: 'Best Indie Narrative Feature, Best Original Screenplay, Best Casting Director, Best Arthouse Filmmaker, Best Mystery, Best Actor, Best Actress, Best Supporting Actor, Best Supporting Actress, Best Editing, entre otros en festivales en Europa, América y Asia.',
    streaming: 'Amazon Prime Video, Tubi, Plex, Opprime.tv, Wocoo.tv',
    website: 'corafilm.com',
    imdb: 'https://www.imdb.com/title/tt31151642/',
    poster: '/images/Cora.png'
  },
  {
    id: 'dialogos-2023',
    title: 'DIALOGOS DE LA MUERTE / Dialogues of Death',
    year: '2023',
    subtitle: 'Basada en obra del Marqués de Sade',
    genre: 'Drama filosófico',
    format: 'largometraje',
    synopsis: 'Andrés, un sacerdote rural, visita a Alfonso, su amigo libertino en su lecho de muerte, para convencerlo de arrepentirse. Mientras los dos debaten, Malena, la próxima viuda, trama su venganza. Un homenaje al expresionismo alemán que explora conceptos morales, religiosos y filosóficos de quienes cuestionan sus creencias.',
    awards: '10 premios ganados, 2 nominaciones. Rome International Movie Awards: Best Actor (Diego Abelardo), Best Supporting Actor (Christian Luigi), Best Acting Duo, entre otros.',
    streaming: 'Tubi, Apple TV, Fawesome.tv, Opprime.tv',
    website: 'dialogosdelamuerte.com',
    imdb: 'https://www.imdb.com/title/tt26421317/',
    poster: '/images/Dialogos de la muerte.png'
  },
  {
    id: 'zapato-2025',
    title: 'EL ZAPATO / The Shoe',
    year: '2025',
    subtitle: 'Codirección con Sofía Alejandra Díaz Garza',
    genre: 'Comedia / Horror / Thriller',
    format: 'largometraje',
    synopsis: 'Una propuesta original e ingeniosa que desafía las convenciones del género. “Every once in a while, a film comes along that sort of knocks me on my ass…” — Brian Lutes. “Original, clever, and a true celebration of diversity” — Dr. Daniel Widdowson, Salt House Creative.',
    awards: '12 wins & 7 nominations. IMDb rating: 7.1',
    streaming: 'Tubi',
    website: 'theshoe.info',
    imdb: 'https://www.imdb.com/title/tt36605107/',
    poster: '/images/El zapato.png'
  }
];

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
    summary: 'La música no acompaña la imagen: la completa. Mauricio compone desde la tensión emocional y la atmósfera narrativa, combinando escritura orquestal minimalista, ambient y exploración experimental. Su doble rol como director y compositor permite construir una arquitectura dramática unificada desde la concepción misma del proyecto.',
    details: []
  },
  {
    title: 'Fotografía Contemplativa',
    imageId: 'service-photography',
    summary: 'Una mirada que se detiene donde otras pasan de largo. La fotografía comparte el mismo temple del cine: la búsqueda de lo que late bajo la superficie. Ecosistemas, paisajes y retratos tratados con una sensibilidad que conjuga rigor científico y visión artística.',
    details: []
  },
  {
    title: 'Gestión Cultural y Ética',
    imageId: 'service-culture',
    summary: 'Más de tres décadas vinculando el arte, la ciencia y la sociedad. Como Director General del Wildlife Conservation Film Festival (WCFF) desde 2023, y con trayectoria en dirección de ONG y proyectos culturales binacionales, se ofrece asesoría y liderazgo en iniciativas de alto impacto: festivales, programas educativos, producción institucional y estrategia cultural con propósito ambiental.',
    details: []
  },
  {
    title: 'Consultoría Ambiental Estratégica',
    imageId: 'service-consulting',
    summary: 'Sustentada en una trayectoria científica y de gestión de primer nivel —WWF, Pronatura Noreste, Sistema Nacional de Investigadores—, esta consultoría conbina análisis técnico, visión estratégica y experiencia en política pública. Especialidad en ecosistemas de agua dulce, biodiversidad del norte de México y desarrollo sustentable transfronterizo.',
    details: []
  },
  {
    title: 'Dirección Creativa Narrativa',
    imageId: 'service-digital',
    summary: 'Para proyectos que necesitan encontrar su voz. Acompañamiento a equipos creativos, productoras y organizaciones en el desarrollo de proyectos audiovisuales: desde la concepción de la idea y el guion hasta las decisiones estéticas y narrativas durante la producción.',
    details: []
  },
];

export const productionLogos: ProductionLogo[] = [
    { src: '/images/Cora.png', alt: 'Cora Poster', width: 500, height: 750, url: 'https://corafilm.com/' },
    { src: '/images/Dialogos de la muerte.png', alt: 'Diálogos de la Muerte Poster', width: 500, height: 750, url: 'https://dialogosdelamuerte.com/' },
    { src: '/images/El zapato.png', alt: 'El Zapato Poster', width: 500, height: 750, url: 'https://theshoe.info/' },
    { src: '/images/Wildligeconservation.png', alt: 'Wildlife Conservation Film Festival Poster', width: 500, height: 750, url: 'https://wcff.org/' },
    { src: '/images/PPPanterra-1.png', alt: 'Pantera Cine Fest Poster', width: 500, height: 750, url: 'https://panterracinefest.org/' },
];

export const projects: Project[] = [
    { id: 'proj-1', title: 'Conservación del Lobo Mexicano', imageId: 'project-1', category: 'Proyectos' },
    { id: 'proj-2', title: 'Desierto Chihuahuense: Un Universo Oculto', imageId: 'project-2', category: 'Proyectos' },
    { id: 'proj-3', title: 'Festival de Cine PanterFest', imageId: 'project-3', category: 'Eventos' },
    { id: 'proj-4', title: 'Estrategia de Conservación Hídrica', imageId: 'project-4', category: 'Consultoría' },
];

export const posts: Post[] = [
  { 
    id: 'post-1', 
    slug: 'prologo-de-la-loca-del-maniqui',
    title: 'Prólogo de “La loca del maniquí”', 
    date: '26 de Mayo, 2022', 
    excerpt: 'Un vistazo al prólogo del libro, explorando sus temas centrales y el estilo narrativo.', 
    content: `<p>Por: Aarón Coré</p>
<p>En el año 2000 se publicó la dramaturgia La loca del maniquí, del autor Xavier Araiza. Al año siguiente, se estrenó en la Sala Experimental del Teatro de la Ciudad ubicada en Monterrey, Nuevo León México y fue interpretada por la actriz Alma Morales. La obra ha recorrido importantes espacios universitarios y culturales de Nuevo León.</p>
<img src="/images/prologo1.jpeg" alt="Escena de la obra" class="my-6 rounded-lg shadow-md" />
<p>Al paso del tiempo, directores de teatro de países como Chile, EUA y Australia la han llevado a escena. Actualmente, la obra está por estrenarse en España y Argentina. Además, la dramaturgia se ha traducido al inglés gracias a Cristina Elenes y actualmente una actriz-bailarina venezolana que radica en París llevará a escena el monólogo traducido al francés. ¿Por qué se ha mantenido vigente esta obra al paso del tiempo? ¿Qué se encuentra en la obra La loca del maniquí que necesita urgentemente ser traducida a más idiomas?</p>
<p>El monólogo nos sitúa ante una mujer que va a interactuar en el espacio con diversos elementos, uno de ellos es un maniquí que, a través de esa  relación, el lector y espectador será conducido al infierno que existe en una mente que ha sido construida por otros y no por sí misma. Y como producto de esa construcción, se ha suscitado la mutilación externa e interna del personaje. Pero, es un doble discurso al cual el lector y espectador están invitados a vivir de cerca y está basado en una de las realidades que han permanecido a través de los siglos.</p>
<p>Y se trata de la impune y gran injusticia hacia la condición de ser mujer. Esto será importante para el lector que se enfrentará a las siguientes preguntas: ¿Qué es lo que siente esa mujer aparentemente loca? ¿Qué es lo que siente la mujer que se construye en nuestra sociedad? Es decir, se habla acerca de una condición que se ha sometido, domesticado y tratado como a una Femenina bestia de matadero o mujer para el matadero.</p>
<img src="/images/prologo2.png" alt="Maniquí en escena" class="my-6 rounded-lg shadow-md" />
<p>Xavier Araiza da forma a un personaje que utiliza la palabra como un recurso de escape, de denuncia y como parte de un ¡Basta! que será lanzado al lector o espectador. Por lo tanto, se le da voz a las que han sido violentadas, quemadas vivas, desaparecidas o convertidas en un objeto para uso egoísta de una mentalidad o sistema machista que cínicamente afirma que no existe tal reality.</p>
<p>Es por medio de la palabra como podemos ser testigos de ese descender a los infiernos del inconsciente por parte del personaje. Y será necesario el desdoblamiento de La loca del maniquí, quien ha ocultado lo que siente a través de una máscara y del silencio. Pero ¿quién es capaz de mutilar a otro ser humano y de qué manera?</p>
<p>El autor ha realizado una radiografía a la mujer y a su entorno. Observa de cerca las acciones y pensamientos del personaje que se mantiene en el límite, entre la vida y la muerte, incluso todo el tiempo está cuestionando la existencia o el valor de la vida. Porque si algo hay que realizar como parte del análisis psicoanalítico y social es el de reconocer lo que sucede en los entornos familiares, religiosos, políticos y culturales de la Loca del maniquí. Y como es algo oculto, es a través de la palabra donde se puede reconocer la construcción que se le ha impuesto a la mujer y no al hombre o niño que nace en una familia.</p>
<img src="/images/prologo3.png" alt="Actriz en monólogo" class="my-6 rounded-lg shadow-md" />
<p>Dicho sistema ha permanecido durante siglos y ha dejado claro que se trata de injusticia y falta de humanidad. Porque en ese sistema patriarcal, el hombre es el único que importa por estar hecho a imagen y semejanza de un dios divino. No existe en ese sistema el espacio que permita a una mujer ejercer su condición de ser humano en el mundo. Es la sociedad, la que atrapa, la que acorrala, la que minimiza y condena a la mujer que cada vez más se queda sola en el mundo.</p>
<p>El autor es incisivo al cuestionar a la sociedad de su tiempo del año 2000 y a la del 2020 Y he aquí uno de sus argumentos: ¿Por qué no ha existido o existe una rebelión si se está mutilando externa e internamente a una mujer que es de la misma condición humana que el hombre? Ante ese panorama, ¿Cómo no comprender a la Loca del maniquí que se ha visto obligada a construir una máscara? y ¿Cómo no comprender la condición de ser mujer en un mundo construido por un solo sexo?</p>
<p>Esa es la sensibilidad de la cual está hecho el autor Xavier Araiza, quien ha experimentado con el distanciamiento teatral al dirigir su propia obra e incluso colocado estéticamente a Xavier Caro, un hombre-actor para que exprese parte de lo que psíquicamente guarda una mujer. Xavier Araiza ha sido testigo de la violencia e injusticia que sucede en su tierra del Noreste de México y no se ha cruzado de brazos. Una violencia que habita en el mundo que lo rodea y que sólo ha demostrado falta de empatía ante una condición humana que no ha tenido escapatoria ante la mutilación de su propio ser por parte de quienes deberían cuidarla.</p>
<img src="/images/prologo4.jpeg" alt="Detalle de la escenografía" class="my-6 rounded-lg shadow-md" />
<p>El lector y espectador están invitados a considerar la gran metáfora del teatro…no podemos existir, si no existe el otro. No se puede existir con un ser mutilado y debemos estar completos para poder existir. ¡Larga vida en los escenarios para la Loca del maniquí!</p>
<p>Podrás disfrutar esta obra de teatro en el Teatro Dramatico en Barrio Antiguo los martes 7, 14 y 21 de junio a las 8 PM. Así como verla en la pantalla grande los domingos 12, 19 y 26 de junio a las 3 PM.</p>
`, 
    imageId: 'blog-prologo-cover-new', 
    category: 'Artículos' 
  },
  { 
    id: 'post-2', 
    slug: 'consejo-tecnico-picachos', 
    title: 'Establecen consejo técnico para la conservación del ecosistema de Picachos', 
    date: '07 de Noviembre, 2021', 
    excerpt: 'Conoce los detalles sobre la formación del nuevo consejo y sus objetivos para proteger la Sierra de Picachos.', 
    content: `<p>Después de que el Gobierno del Estado decretara al Ecosistema Sierra de Picachos como Área Natural Protegida, miembros de la sociedad, de la UANL y de AESPAC se citaron el pasado 30 de octubre del 2021 en el Centro Ideas del municipio de Higueras para realizar la ceremonia de establecimiento de un Consejo Técnico que procurará el conservación de esta zona.</p>
<img src="/images/eco1.jpg" alt="Ceremonia del Consejo Técnico" class="my-6 rounded-lg shadow-md" />
<p>Dicho Consejo es liderado por Alfonso Martínez, Secretario de Medio Ambiente; Edgardo Acosta, director general de Parques y Vida Silvestre de Nuevo León; y representantes locales de los municipios que abarca el ecosistema, como la Universidad Autónoma de Nuevo León, la Comisión Nacional del Agua, Profepa y Semanat.</p>
<img src="/images/eco2.jpg" alt="Miembros del Consejo Técnico" class="my-6 rounded-lg shadow-md" />
<p><em>Imagen: Asociación Ecológica de la Sierra de Picachos</em></p>
<p>Durante la ceremonia, se reconoció la importancia de cuidar la reserva de bosques, flora y fauna de esta Área Natural Protegida, así como la gran aportación de recursos naturales que provee al estado de Nuevo León, puesto que su superficie de 99,432 hectáreas, sumadas a las 75,872.55 hectáreas que se decretaron anteriormente, abarca los municipios de Doctor González, Agualeguas, Cerralvo, Higueras, Marín, Zuazua, Sabinas Hidalgo y Salinas Victoria.</p>
<p>Alfonso Barragán, presidente de la Asociación Ecológica Sierra de Picachos, reconoció el beneficio del establecimiento del Consejo, que preservará el desarrollo sustentable del ecosistema y generará riqueza de recursos naturales.</p>
<img src="/images/eco3.jpg" alt="Alfonso Barragán" class="my-6 rounded-lg shadow-md" />
<p><em>Imagen: Asociación Ecológica de la Sierra de Picachos</em></p>
<p>De igual forma, se busca proteger la zona de actividades como excavaciones industriales y construcciones; promoviendo así el tursimo, las actividades recreativas sostenibles y acciones beneficiosas para el ecosistema. Un ejemplo de esto último, fue la liberación de dos águilas Harris, dos aguilillas grises y una lechuza que realizó el ambientalista Rodrigo Munrro durante la reunión.</p>
<img src="/images/eco4.jpg" alt="Liberación de aves" class="my-6 rounded-lg shadow-md" />
<p><em>Imagen: Asociación Ecológica de la Sierra de Picachos</em></p>
<p>Felicitamos a las autoridades, al Gobierno del Estado, a la Secretaría de Desarrollo Sustentable y a la Asociación Ecológica de Sierra de Picachos por su compromiso en la conservación de uno de los pulmones más grandes de Nuevo León, que llenará de beneficios ambientales y sociales a nuestro estado.</p>
`, 
    imageId: 'blog-consejo-tecnico-cover-new', 
    category: 'Noticias' 
  },
  { 
    id: 'post-3', 
    slug: 'valle-del-cocora', 
    title: 'Valle del Cocora', 
    date: '02 de Noviembre, 2021', 
    excerpt: 'Un viaje visual y reflexivo por uno de los paisajes más emblemáticos de Colombia y su importancia ecológica.', 
    content: `<p>Por David Jaramillo/ noviembre 2, 2021 1453 Views No Comments</p>
<p>Colaboradores / Home</p>
<p>📸 El fotoperiodista David Jaramillo nos comparte el siguiente video del Valle de Cocora, paisaje natural en Quindío, Colombia. 🏞️</p>
<img src="/images/valle1.jpeg" alt="Valle del Cocora" class="my-6 rounded-lg shadow-md" />
<p>🎥 Este video refleja la parte espiritual profunda de los antiguos pobladores de Colombia a través del arte con el metal, en la búsqueda del color del sol. Trascendiendo entre la vida y la muerte, la orfebrería encuentra en ella misma a la estrella sagrada. ☀️</p>
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; margin-top: 1.5rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
  <iframe 
    src="https://www.youtube.com/embed/pUKqlCbsl-o" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>
`, 
    imageId: 'blog-valle-cocora-cover', 
    category: 'Artículos' 
  },
];


export const galleryImages: GalleryImage[] = [
  { id: 'gal-1', title: 'Río en cañón', category: 'Paisajes', imageId: 'gallery-new-1' },
  { id: 'gal-2', title: 'Hombre en la naturaleza', category: 'Behind the Scenes', imageId: 'gallery-new-2' },
  { id: 'gal-3', title: 'Paisaje montañoso', category: 'Paisajes', imageId: 'gallery-new-3' },
  { id: 'gal-4', title: 'Pez Xenotoca Eiseni', category: 'Naturaleza', imageId: 'gallery-new-4' },
  { id: 'gal-5', title: 'Filmando en la naturaleza', category: 'Behind the Scenes', imageId: 'gallery-new-5' },
  { id: 'gal-6', title: 'Pez en el agua', category: 'Naturaleza', imageId: 'gallery-new-6' },
  { id: 'gal-7', title: 'Cámara en la naturaleza', category: 'Behind the Scenes', imageId: 'gallery-new-7' },
  { id: 'gal-8', title: 'Conversación en evento', category: 'Eventos', imageId: 'gallery-new-8' },
  { id: 'gal-9', title: 'Equipo de filmación', category: 'Proyectos', imageId: 'gallery-new-9' },
  { id: 'gal-10', title: 'Hombre con cámara', category: 'Behind the Scenes', imageId: 'gallery-new-10' },
  { id: 'gal-11', title: 'Conferencia', category: 'Eventos', imageId: 'gallery-new-11' },
  { id: 'gal-12', title: 'Paisaje de Arramberri', category: 'Paisajes', imageId: 'gallery-new-12' },
  { id: 'gal-13', title: 'Paisaje de Cuatro Ciénegas', category: 'Paisajes', imageId: 'gallery-new-13' },
  { id: 'gal-14', title: 'Paisaje de Perú', category: 'Paisajes', imageId: 'gallery-new-14' },
];

export const videoGallery: Video[] = [
    { id: 'vid-1', title: 'En busca del águila elegante', type: 'Mediometraje', youtubeId: 'og-QOYsTTcE', thumbnailId: 'video-thumb-1'},
    { id: 'vid-2', title: 'La cotorra serrana oriental', type: 'Cortometraje', youtubeId: 'MqNwizA7wc0', thumbnailId: 'video-thumb-2'},
    { id: 'vid-3', title: 'Ecología del fuego', type: 'Cortometraje', youtubeId: 'M81DLdDI1HQ', thumbnailId: 'video-thumb-3'},
    { id: 'vid-4', title: 'Historias del septentrión', type: 'Mediometraje', youtubeId: 'HE7A1PyqPZo', thumbnailId: 'video-thumb-4'},
    { id: 'vid-5', title: 'Los murciélagos de la cueva de la boca', type: 'Cortometraje', youtubeId: 'suiOUN8zl18', thumbnailId: 'video-thumb-5'},
    { id: 'vid-6', title: 'Praderas del Tokio', type: 'Mediometraje', youtubeId: 'I7StbzrZAlU', thumbnailId: 'video-thumb-6'},
];

export const achievements: Achievement[] = [
  { year: 2021, title: 'Doctorado Honoris Causa', organization: 'Claustro Doctoral Iberoamericano' },
  { year: 2020, title: 'Premio a la Conservación', organization: 'Programa Internacional y Fronterizo del Departamento de Caza y Pesca de Arizona' },
  { year: 2015, title: 'Premio de Investigación UANL', organization: 'Universidad Autónoma de Nuevo León' },
  { year: 2014, title: 'Premio "Dr. José Álvarez del Villar"', organization: 'Sociedad Mexicana de Ictiología' },
  { year: 1994, title: 'Medalla "Mejores estudiantes de México"', organization: 'CONACYT e Instituto Mexicano de Cultura' },
];

export const timelineEvents: TimelineEvent[] = [
  { year: '1994', description: 'Reconocido como uno de los "Mejores Estudiantes de México".' },
  { year: '2005', description: 'Se une al Fondo Mundial para la Naturaleza (WWF).' },
  { year: '2011', description: 'Nombrado Director General de Pronatura Noreste, A.C.' },
  { year: '2014', description: 'Recibe el premio a la mejor tesis doctoral en ictiología.' },
  { year: '2015', description: 'Gana el Premio de Investigación UANL en Ciencias Naturales.' },
  { year: '2019', description: 'Lidera la defensa de El Llano de la Soledad.' },
  { year: '2020', description: 'Recibe el Premio a la Conservación de AZGFD.' },
  { year: '2021', description: 'Recibe el Doctorado Honoris Causa por su trayectoria.' },
  { year: '2022', description: 'Produce el documental "Ad memoriam rei perpetuam".' },
];

export const collaborators: Collaborator[] = [
  {
    name: 'José Pablo Acevedo',
    title: 'Cineasta y docente',
    bio: 'Ha publicado su trabajo de crítica en diversos medios como Doble Rodada, Vocanova, Correspondencias y el Festival de cine Transcinema. Fue becario del Centro de Escritores Cinematográficos de CONARTE en 2018 y su documental “El Barrio de la Luz” fue uno de los ganadores en el concurso A QuedArte en Casa 2020 organizado por la UANL.',
    image: '/images/jose.jpg'
  },
  {
    name: 'David Jaramillo',
    title: 'Realizador Audiovisual',
    bio: 'Realizó su ópera prima titulada: “Cuatro Ciénegas”, exhibida en la FIL de Guadalajara, en el FICG33 y ECOZINE, Zaragoza España, 2019. Editó y realizó la fotografía el libro titulado ¨Parpadeo Cósmico-Cuatro Ciénegas¨ con investigadores del Instituto de Ecología de la UNAM, investigación de más de 5 años donde reitera su compromiso por la conservación del medio ambiente a través del arte y la ciencia.',
    image: '/images/david.jpeg'
  },
  {
    name: 'Claudia Luna Fuentes',
    title: 'Comunicóloga y escritora',
    bio: 'Comunicóloga, maestra en Historia de la Sociedad Contemporánea y directora de Divulgación Científica en el Museo del Desierto. Publicó Donde la piel, Las flores desenfundan sus espinas, Carne para las flores, Casa de sol, entre muchos otros libros. Ha sido traducida al inglés, alemán, francés, portugués y árabe. Parte de sus videopoemas, exploraciones sonoras y fotografías se mostraron en la Galería Mohammed Drissi, en Tánger, Marruecos de julio a agosto de 2021.',
    image: '/images/claudia.jpeg'
  },
  {
    name: 'Kenia Álvarez Rentería',
    title: 'Abogada y consultora',
    bio: 'Licenciada en Derecho con mención especial y Maestra en Derecho por la Universidad Autónoma de Chihuahua, con especialidad en Amparo por el Instituto de la Judicatura Federal extensión Coahuila. Actualmente se desempeña como Directora General de “LEVKA, Consultoría técnica y legal, S.C.”, y dirige el área de Derecho ambiental a través de litigios, proyectos y estudios, con el sector público y organizaciones de la sociedad civil, en los estados de Nuevo León, San Luis Potosí, Coahuila, Chihuahua y Durango.',
    image: '/images/kenia.png'
  }
];
