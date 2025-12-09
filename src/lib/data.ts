
import type { NavLink, SocialLink, Service, Project, Post, GalleryImage, Achievement, TimelineEvent, Video, ProductionLogo } from './types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { TheatreIcon, VimeoIcon, WhatsAppIcon } from '@/components/icons';

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
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Vimeo', href: '#', icon: VimeoIcon },
    { name: 'WhatsApp', href: 'https://wa.me/5218110165108', icon: WhatsAppIcon },
];

export const biography = {
  short: "Productor audiovisual, consultor ambiental y cineasta.",
  full: "Mauricio de la Maza se graduó summa cum laude con un Doctorado en Biología y Desarrollo Sustentable en la UANL; cuenta con una Maestría en administración de Empresas de la Universidad de Lancaster, Reino Unido, con programa de intercambio con ESC, Lyon, Francia, donde se especializó en Planificación Estratégica; es Ingeniero Agrónomo Zootecnista en Ingeniería Agrícola y Zootecnia del Tecnológico de Monterrey; además posee una licenciatura en Derecho con Mención Honorífica de Excelencia del TecMilenio y estudios de Maestría en Arte Cinematográfico y Multimedia en la Escuela Superior de Cine y Multimedia Ilumina."
};

export const services: Service[] = [
  {
    title: 'Producción Audiovisual',
    imageId: 'service-audiovisual',
    summary: 'Documentales, videos institucionales y contenido digital con enfoque en naturaleza y conservación.',
    details: [
        {
            title: "Producción de Contenido",
            description: "Creamos contenido audiovisual de alto impacto para diversas plataformas.",
            items: [
                "Documentales de naturaleza y conservación",
                "Videos institucionales y corporativos",
                "Proyectos especiales en colaboración con productoras como BBC Nature",
                "Largometrajes y cortometrajes documentales"
            ]
        }
    ]
  },
  {
    title: 'Fotografía',
    imageId: 'service-photography',
    summary: 'Capturamos la esencia de la naturaleza, eventos y proyectos con una visión artística y profesional.',
     details: [
        {
            title: "Servicios Fotográficos",
            description: "Cobertura fotográfica profesional para una variedad de necesidades.",
            items: [
                "Fotografía de naturaleza y vida silvestre",
                "Fotografía de eventos corporativos y conferencias",
                "Fotografía institucional y de producto",
                "Retratos profesionales y de equipo",
                "Cobertura de expediciones científicas y de aventura"
            ]
        }
    ]
  },
    {
    title: 'Cultura',
    imageId: 'service-culture',
    summary: 'Fomentamos la cultura ambiental a través de festivales, talleres y eventos educativos.',
    details: [
        {
            title: "Gestión y Educación Cultural",
            description: "Diseñamos y ejecutamos proyectos que fusionan cultura y medio ambiente.",
            items: [
                "Curaduría y organización de festivales de cine ambiental",
                "Talleres de cine de naturaleza y conservación para jóvenes y adultos",
                "Conferencias y charlas motivacionales sobre medio ambiente y cine",
                "Desarrollo de eventos culturales con enfoque ambiental para empresas e instituciones",
                "Proyectos educativos y de divulgación científica a través del arte"
            ]
        }
    ]
  },
  {
    title: 'Consultoría',
    imageId: 'service-consulting',
    summary: 'Asesoría experta en conservación, desarrollo sustentable y gestión de proyectos ambientales.',
    details: [
        {
            title: "Asesoría Ambiental Estratégica",
            description: "Ofrecemos soluciones expertas para los desafíos ambientales contemporáneos.",
            items: [
                "Consultoría en desarrollo sustentable y políticas públicas",
                "Asesoría en conservación de ecosistemas y biodiversidad",
                "Análisis legal y normativo en materia ambiental",
                "Planificación estratégica para organizaciones de la sociedad civil (ONGs)",
                "Evaluación de impacto ambiental y social de proyectos",
                "Gestión de proyectos de conservación y recaudación de fondos"
            ]
        }
    ]
  },
  {
    title: 'Contenido Digital',
    imageId: 'service-digital',
    summary: 'Creación y estrategia de contenido para plataformas digitales, maximizando el alcance y la interacción.',
    details: [
        {
            title: "Estrategias Digitales",
            description: "Desarrollamos y ejecutamos estrategias de contenido para el mundo digital.",
            items: [
                "Creación de contenido para redes sociales (cápsulas, reels, etc.)",
                "Gestión de campañas de comunicación digital",
                "Estrategia de posicionamiento de marca en línea",
                "Producción de podcasts y series web",
                "Marketing de contenidos con enfoque ambiental y social"
            ]
        }
    ]
  },
  {
    title: 'Video Editing',
    imageId: 'service-editing',
    summary: 'Post-producción profesional para dar vida a tus proyectos audiovisuales con las últimas tecnologías y un enfoque creativo.',
    details: [
        {
            title: "Post-Producción de Video",
            description: "Servicios completos de edición y post-producción para cine, TV y web.",
            items: [
                "Edición de video y montaje narrativo",
                "Corrección de color y etalonaje cinematográfico",
                "Diseño y mezcla de sonido profesional",
                "Creación de gráficos en movimiento (motion graphics) y efectos visuales (VFX) básicos",
                "Masterización y entrega para diversas plataformas (cine, broadcast, web)"
            ]
        }
    ]
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
    content: `
<p>Por: Aarón Coré</p>
<p>En el año 2000 se publicó la dramaturgia La loca del maniquí, del autor Xavier Araiza. Al año siguiente, se estrenó en la Sala Experimental del Teatro de la Ciudad ubicada en Monterrey, Nuevo León México y fue interpretada por la actriz Alma Morales. La obra ha recorrido importantes espacios universitarios y culturales de Nuevo León.</p>
<p>Al paso del tiempo, directores de teatro de países como Chile, EUA y Australia la han llevado a escena. Actualmente, la obra está por estrenarse en España y Argentina. Además, la dramaturgia se ha traducido al inglés gracias a Cristina Elenes y actualmente una actriz-bailarina venezolana que radica en París llevará a escena el monólogo traducido al francés. ¿Por qué se ha mantenido vigente esta obra al paso del tiempo? ¿Qué se encuentra en la obra La loca del maniquí que necesita urgentemente ser traducida a más idiomas?</p>
<p>El monólogo nos sitúa ante una mujer que va a interactuar en el espacio con diversos elementos, uno de ellos es un maniquí que, a través de esa relación, el lector y espectador será conducido al infierno que existe en una mente que ha sido construida por otros y no por sí misma. Y como producto de esa construcción, se ha suscitado la mutilación externa e interna del personaje. Pero, es un doble discurso al cual el lector y espectador están invitados a vivir de cerca y está basado en una de las realidades que han permanecido a través de los siglos.</p>
<p>Y se trata de la impune y gran injusticia hacia la condición de ser mujer. Esto será importante para el lector que se enfrentará a las siguientes preguntas: ¿Qué es lo que siente esa mujer aparentemente loca? ¿Qué es lo que siente la mujer que se construye en nuestra sociedad? Es decir, se habla acerca de una condición que se ha sometido, domesticado y tratado como a una Femenina bestia de matadero o mujer para el matadero.</p>
<p>Xavier Araiza da forma a un personaje que utiliza la palabra como un recurso de escape, de denuncia y como parte de un ¡Basta! que será lanzado al lector o espectador. Por lo tanto, se le da voz a las que han sido violentadas, quemadas vivas, desaparecidas o convertidas en un objeto para uso egoísta de una mentalidad o sistema machista que cínicamente afirma que no existe tal realidad.</p>
<p>Es por medio de la palabra como podemos ser testigos de ese descender a los infiernos del inconsciente por parte del personaje. Y será necesario el desdoblamiento de La loca del maniquí, quien ha ocultado lo que siente a través de una máscara y del silencio. Pero ¿quién es capaz de mutilar a otro ser humano y de qué manera?</p>
<p>El autor ha realizado una radiografía a la mujer y a su entorno. Observa de cerca las acciones y pensamientos del personaje que se mantiene en el límite, entre la vida y la muerte, incluso todo el tiempo está cuestionando la existencia o el valor de la vida. Porque si algo hay que realizar como parte del análisis psicoanalítico y social es el de reconocer lo que sucede en los entornos familiares, religiosos, políticos y culturales de la Loca del maniquí. Y como es algo oculto, es a través de la palabra donde se puede reconocer la construcción que se le ha impuesto a la mujer y no al hombre o niño que nace en una familia.</p>
<p>Dicho sistema ha permanecido durante siglos y ha dejado claro que se trata de injusticia y falta de humanidad. Porque en ese sistema patriarcal, el hombre es el único que importa por estar hecho a imagen y semejanza de un dios divino. No existe en ese sistema el espacio que permita a una mujer ejercer su condición de ser humano en el mundo. Es la sociedad, la que atrapa, la que acorrala, la que minimiza y condena a la mujer que cada vez más se queda sola en el mundo.</p>
<p>El autor es incisivo al cuestionar a la sociedad de su tiempo del año 2000 y a la del 2020 Y he aquí uno de sus argumentos: ¿Por qué no ha existido o existe una rebelión si se está mutilando externa e internamente a una mujer que es de la misma condición humana que el hombre? Ante ese panorama, ¿Cómo no comprender a la Loca del maniquí que se ha visto obligada a construir una máscara? y ¿Cómo no comprender la condición de ser mujer en un mundo construido por un solo sexo?</p>
<p>Esa es la sensibilidad de la cual está hecho el autor Xavier Araiza, quien ha experimentado con el distanciamiento teatral al dirigir su propia obra e incluso colocado estéticamente a Xavier Caro, un hombre-actor para que exprese parte de lo que psíquicamente guarda una mujer. Xavier Araiza ha sido testigo de la violencia e injusticia que sucede en su tierra del Noreste de México y no se ha cruzado de brazos. Una violencia que habita en el mundo que lo rodea y que sólo ha demostrado falta de empatía ante una condición humana que no ha tenido escapatoria ante la mutilación de su propio ser por parte de quienes deberían cuidarla.</p>
<p>El lector y espectador están invitados a considerar la gran metáfora del teatro…no podemos existir, si no existe el otro. No se puede existir con un ser mutilado y debemos estar completos para poder existir. ¡Larga vida en los escenarios para la Loca del maniquí!</p>
<p>Podrás disfrutar esta obra de teatro en el Teatro Dramatico en Barrio Antiguo los martes 7, 14 y 21 de junio a las 8 PM. Así como verla en la pantalla grande los domingos 12, 19 y 26 de junio a las 3 PM.</p>
`, 
    imageId: 'blog-loca-maniqui', 
    category: 'Literatura' 
  },
  { 
    id: 'post-2', 
    slug: 'consejo-tecnico-picachos', 
    title: 'Establecen consejo técnico para la conservación del ecosistema de Picachos', 
    date: '07 de Noviembre, 2021', 
    excerpt: 'Conoce los detalles sobre la formación del nuevo consejo y sus objetivos para proteger la Sierra de Picachos.', 
    content: `
<p>Después de que el Gobierno del Estado decretara al Ecosistema Sierra de Picachos como Área Natural Protegida, miembros de la sociedad, de la UANL y de AESPAC se citaron el pasado 30 de octubre del 2021 en el Centro Ideas del municipio de Higueras para realizar la ceremonia de establecimiento de un Consejo Técnico que procurará el conservación de esta zona.</p>
<p>Dicho Consejo es liderado por Alfonso Martínez, Secretario de Medio Ambiente; Edgardo Acosta, director general de Parques y Vida Silvestre de Nuevo León; y representantes locales de los municipios que abarca el ecosistema, como la Universidad Autónoma de Nuevo León, la Comisión Nacional del Agua, Profepa y Semanat.</p>
<p><em>Imagen: Asociación Ecológica de la Sierra de Picachos</em></p>
<p>Durante la ceremonia, se reconoció la importancia de cuidar la reserva de bosques, flora y fauna de esta Área Natural Protegida, así como la gran aportación de recursos naturales que provee al estado de Nuevo León, puesto que su superficie de 99,432 hectáreas, sumadas a las 75,872.55 hectáreas que se decretaron anteriormente, abarca los municipios de Doctor González, Agualeguas, Cerralvo, Higueras, Marín, Zuazua, Sabinas Hidalgo y Salinas Victoria.</p>
<p>Alfonso Barragán, presidente de la Asociación Ecológica Sierra de Picachos, reconoció el beneficio del establecimiento del Consejo, que preservará el desarrollo sustentable del ecosistema y generará riqueza de recursos naturales.</p>
<p><em>Imagen: Asociación Ecológica de la Sierra de Picachos</em></p>
<p>De igual forma, se busca proteger la zona de actividades como excavaciones industriales y construcciones; promoviendo así el tursimo, las actividades recreativas sostenibles y acciones beneficiosas para el ecosistema. Un ejemplo de esto último, fue la liberación de dos águilas Harris, dos aguilillas grises y una lechuza que realizó el ambientalista Rodrigo Munrro durante la reunión.</p>
<p><em>Imagen: Asociación Ecológica de la Sierra de Picachos</em></p>
<p>Felicitamos a las autoridades, al Gobierno del Estado, a la Secretaría de Desarrollo Sustentable y a la Asociación Ecológica de Sierra de Picachos por su compromiso en la conservación de uno de los pulmones más grandes de Nuevo León, que llenará de beneficios ambientales y sociales a nuestro estado.</p>
`, 
    imageId: 'blog-picachos', 
    category: 'Conservación' 
  },
  { 
    id: 'post-3', 
    slug: 'valle-del-cocora', 
    title: 'Valle del Cocora', 
    date: '02 de Noviembre, 2021', 
    excerpt: 'Un viaje visual y reflexivo por uno de los paisajes más emblemáticos de Colombia y su importancia ecológica.', 
    content: `
<p>📸 El fotoperiodista David Jaramillo nos comparte el siguiente video del Valle de Cocora, paisaje natural en Quindío, Colombia. 🏞️</p>
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
    imageId: 'blog-cocora', 
    category: 'Viajes' 
  },
  { 
    id: 'post-4', 
    slug: 'aviturismo-nuevo-leon', 
    title: 'El aviturismo en Nuevo León: su potencial económico y de conservación', 
    date: '27 de Octubre, 2021', 
    excerpt: 'Análisis sobre cómo el turismo de observación de aves puede impulsar la economía local y proteger la biodiversidad.', 
    content: `
<p>Por Leonardo Guzmán y Marilyn Castillo de Kingfisher Birdwatching Nuevo León</p>
<p>¿Alguna vez has visto en la televisión, películas o libros, alguna persona o grupo de personas que andan por ahí buscando pájaros? ¿O te has preguntado qué hace esa persona con binoculares y/o cámara mientras el resto de la gente sale a hacer ejercicio? Quizás te hayas topado con alguien en el parque, el río o la montaña, quien con mucha paciencia y emoción espera a que salgan los pájaros desde temprano para observarlos a través de sus binoculares, identificarlos y, de ser posible, tomar fotografías.</p>
<p>Observar aves es referido como el arte de reconocer a las distintas especies de aves a través de sus cantos, plumajes o comportamiento. Esta actividad puede sonar fácil ya que se piensa que simplemente “hay que salir al monte a ver pájaros”, sin embargo, va mucho más allá que esto. La observación de aves o “birdwatching” trae consigo numerosos beneficios para aquellos que la practican que van desde un bienestar físico y emocional, un mejor aprendizaje sobre nuestra biodiversidad y el entorno natural a escala local, así como una mayor sensibilización sobre las problemáticas ambientales que enfrentan las aves en sus ecosistemas y realizar aportes a la ornitología a través de las plataformas de ciencia ciudadana.</p>
<p>Adicionalmente, es importante destacar que la observación de aves representa una actividad con alto potencial económico, dado que muchos de quienes la practican realizan viajes fuera de su municipio, estado o país, convirtiéndose en aviturismo o también llamado turismo de observación de aves. El aviturismo implica desplazarse desde un sitio de origen hacia un destino específico con el interés de observar la avifauna local en su entorno natural. Esos viajes implican el hospedaje y la alimentación en la localidad, pagos por transportación, contratación de guías locales, y todo lo relacionado a servicios turísticos en general. Esta derrama económica incita a que exista un interés por la protección de los espacios naturales donde estas aves pueden ser avistadas por lo que el aviturismo incita y estimula la conservación de estos sitios. Tan solo en el 2019, el aviturismo género un total de $4,452,294,489 de pesos para el país a través de la observación de aves acuáticas y marinas.</p>
<p>En los últimos años, el interés por la observación de aves ha crecido considerablemente, registrándose hasta la fecha 471 especies de aves para Nuevo León en la plataforma de ciencia ciudadana eBird.  Por su parte, Kingfisher Birdwatching Nuevo León nace en 2016 con la inquietud de contribuir al conocimiento sobre la avifauna estatal con la sociedad, promover la observación de aves como una herramienta para la educación ambiental e impulsar el aviturismo en el estado como una alternativa económica y de conservación de la biodiversidad. Kingfisher ofrece experiencias únicas e inolvidables a través de sus tours para observación de aves en diferentes localidades de Nuevo León a lo largo de todo el año.</p>
<p>Y tú, ¿qué esperas para vivir la experiencia de “pajarear” y conocer aves increíbles?</p>
`, 
    imageId: 'blog-aviturismo', 
    category: 'Turismo Sostenible' 
  },
  { 
    id: 'post-5', 
    slug: 'doctor-honoris-causa', 
    title: 'Otorga el Claustro Doctoral el grado de Doctor Honoris Causa a Mauricio de la Maza-Benignos', 
    date: '25 de Octubre, 2021', 
    excerpt: 'Un reconocimiento a la trayectoria y contribuciones en el campo de la biología y el desarrollo sustentable.', 
    content: `
<p>A través del reconocimiento de generaciones de líderes de excelencia profesional y social, el Claustro Doctoral busca fomentar el liderazgo y la educación. Por ello, el pasado viernes 1 de octubre se organizó la ceremonia de investidura para otorgar el grado de Doctor Honoris Causa a personajes eminentes que se han destacado en diversos ámbitos profesionales, sociales y culturales.</p>
<p>Entre ellos, se distinguió el trabajo de nuestro fundador Mauricio de la Maza-Benignos, a través del cual se ha conseguido la protección de la flora y la fauna de diferentes ecosistemas mexicanos, la descripción de especies de peces y caracoles hidróbidos y la conservación de cuerpos de agua y recursos naturales del norte de México.</p>
<p>Con estos destacados reconocimientos a la labor social, «se impulsa al propio individuo a continuar y mejorar su trabajo en beneficio de otros. Y al darlo a conocer logra infundir nuevas ideas e inspirar a terceros de manera tangible».</p>
<p>Agradecemos al Claustro Doctoral el reconocimiento a la labor de nuestro fundador, estímulo que fomenta la evolución del mismo y lo expone al conocimiento de los demás, inspirando su continuación y la idea de que la protección de la naturaleza, sobrepasando intereses y organizaciones, es una actividad que contribuye a la mejora de la humanidad.</p>
`, 
    imageId: 'blog-honoris-causa', 
    category: 'Noticias' 
  },
  { 
    id: 'post-6', 
    slug: 'critica-cuatro-cienegas', 
    title: 'Crítica de “Cuatro Ciénegas y la tragedia de los comunes” por José Pablo Acevedo', 
    date: '09 de Octubre, 2021', 
    excerpt: 'Una reseña profunda del documental, analizando su mensaje y su impacto en la conversación ambiental.', 
    content: `
<blockquote>«La ruina es el destino hacia el cual todos los hombres se apresuran, cada uno persiguiendo su propio interés en una sociedad que cree en la libertad de los bienes comunes. La libertad en un bien de uso común trae ruina a todos». Fragmento del ensayo, «La tragedia de los comunes» publicado en 1969 por Garret Hardin.</blockquote>
<p>Este fenómeno se vive el día de hoy en el valle de Cuatro Ciénegas, ubicado en el estado de Coahuila.</p>
<p><em>Fotografía de Mauricio De la Maza-Benignos</em></p>
<p>Mauricio De la Maza-Benignos, biólogo, ingeniero agrónomo zootecnista, abogado y cineasta, ha dedicado gran parte de su vida al cuidado y protección de las áreas naturales, en donde la ausencia de Estado de derecho ambiental deja mucho que desear.</p>
<p>Tal es el caso del valle de Cuatro Ciénegas, sitio enigmático por sus pozas en las cuales se “revela” el misterio evolutivo de la vida, desde hace más de 3,000 millones de años.</p>
<p>Este sitio se encuentra en un grave riesgo de extinción, no sólo de sus increíbles pozas, sino de todo ser vivo que habita en ese lugar; debido a la impunidad y la falta de gobernanza ambientales, el uso y trasvase desmedidos del agua que ahí mana, así como las lagunas legales y la corrupción que rodean el manejo de estos humedales.</p>
<p>Debido a todo esto y a la incesante batalla que activistas, biólogos, abogados ambientalistas y científicos han enfrentado por la preservación del sitio, De la Maza quiso evidenciar las maravillas de los humedales, así como la ausencia de justicia ambiental, en su cortometraje titulado «Cuatro Ciénegas y la tragedia de los comunes». Título que hace referencia al supuesto desarrollado por el biólogo y ecologista estadounidense Garret Hardin quien, en pocas palabras, basó su teoría en la idea de que ante la falta de reglas claras que atiendan el bien común, «aquello que es de todos, no es de nadie y por lo tanto a nadie le importa si un recurso natural al borde de su extinción o si cientos de especies están muriendo, pues si el individuo no lo aprovecha, alguien más lo hará».</p>
<p><em>Fotografía de Mauricio De la Maza-Benignos</em></p>
<p>En este cortometraje encontrarás bellas tomas de los ecosistemas, la flora y fauna, (por si nunca las has visitado), así como evidencias de la impunidad ambiental que reina el sitio, situación que llena de indignación a cualquiera que la vea.</p>
<p>Este filme está próximo a estrenarse en el Wildlife Conservation Film Festival (WCFF) este próximo 17 de octubre en la Ciudad de Nueva York, EEUU. Pero no te preocupes porque este próximo 16 de octubre lo podremos ver en el Parque Rufino Tamayo en San Pedro Garza García.</p>
<p>Consulta detalles y adquiere tus boletos aquí: <a href="https://mauriciodelamazabenignos.com/eventorufinotamayo/" target="_blank" rel="noopener noreferrer">https://mauriciodelamazabenignos.com/eventorufinotamayo/</a></p>
`, 
    imageId: 'blog-cuatro-cienegas', 
    category: 'Cine' 
  },
  { 
    id: 'post-7', 
    slug: 'discriminacion-ongs-ambientales', 
    title: 'Discriminación de organizaciones promotoras y defensoras del derecho al medio ambiente sano en la política pública mexicana', 
    date: '25 de Septiembre, 2021', 
    excerpt: 'Una reflexión crítica sobre los obstáculos que enfrentan las ONGs ambientales en el panorama político actual.', 
    content: `
<p>Poco se ha indagado sobre el trato diferenciado hacia organizaciones defensoras del medio ambiente sano, a pesar de que resulta trascendente en la medida de que cada programa de fomento, tiene una normatividad propia en el ámbito administrativo, y a nivel nacional, prevalece una visión excluyente generalizada. Poco, a pesar de que bajo un punto de vista financiero, es imposible deslindar la perspectiva de justiciabilidad de los DESCA, en la medida de que las organizaciones, los promueven y defienden. Sin embargo, cada inicio de año fiscal, puede analizarse argumentación jurídica en un mecanismo de control de constitucionalidad concentrado, a través de las vías dispuestas para tal efecto, para que quienes se estiman agraviados, accionen el juicio de amparo, con la finalidad de proteger intereses difusos y colectivos de los derechos humanos y generar referencias jurisdiccionales de mandatos de optimización -principios-.</p>
<h4>Del surgimiento de las Organizaciones ambientalistas</h4>
<p>Las organizaciones de la sociedad civil nacen ante la necesidad de buscar soluciones a problemas socialmente relevantes; son “el resultado de la presión ciudadana por participar en las decisiones públicas que afectan su vida” (Morera & Quintana, 2019). Según la normatividad civil, se constituyen a través de un conjunto de personas que se dan un marco legal de actividades para regularse de acuerdo con un propósito; además, la Ley Federal de Fomento a las Actividades realizadas por las organizaciones de la sociedad civil (LFFAOSC), instituye cuáles son sus derechos, entre los que destaca, el acceso a los apoyos y estímulos públicos para fomento de las actividades; además de precisar como una de las actividades objeto de fomento, la protección del ambiente, la flora y la fauna, la preservación y restauración del equilibrio ecológico (Diputados, 2018).</p>
<p>En ese orden de ideas, en determinadas circunstancias, cualquier organización ambientalista, cuyo objeto social conlleve actividades de fomento, está en aptitud de ser considerada como promotora y defensora del derecho humano al medio ambiente sano. Son estas organizaciones, las que actualmente están inmersas en una política pública que incide de forma negativa en el desarrollo de su objeto social, el goce y ejercicio de sus derechos, y su participación activa en la agenda pública, y reciben además, un trato desigual. Al respecto, el ordenamiento jurídico en nuestro país, permite el trato diferenciado porque en sí mismo no es contrario a la igualdad y a la no discriminación; no obstante, cuando deriva en la vulneración de los derechos del grupo diferenciado, se violenta el derecho a la no discriminación (Vázquez, 2018).</p>
<p><em>mohammed_hassan en Pixaby</em></p>
<p>El problema que se genera anualmente, es el trato diferenciado que reciben las organizaciones caracterizadas, frente a las personas morales, en el acceso a recursos públicos, en aras de determinar si las normas aplicables son discriminatorias o no.</p>
<p>En los encuentros con periodistas y el Presidente de la República, en ruedas de prensa o conferencias matutinas, donde además de anunciar programas sociales, surgen participaciones de funcionarios públicos y se atienden preguntas de la prensa. Distintas iniciativas han analizado la repetición de frases, afirmaciones, señalamientos frecuentes y el impacto de los mensajes políticos, así como la exposición de temas de coyuntura. El lic. Andrés Manuel López Obrador, ya había utilizado la capacidad de los medios de comunicación y de otras formas de comunicación pública para establecer una agenda pública, informar a la ciudadanía y coordinar acciones cuando fue Jefe de Gobierno del DF ( (Pérez Cristino & Cuna Pérez, 2020). Actualmente, las redes sociales también han replicado sus mensajes; por ejemplo, nueve de cada 10 tuits de la cuenta oficial de comunicación social del gobierno federal, contienen el hashtag #ConferenciaPresidente, citándolo o parafraseándolo. Con estos actos asume personalmente la comunicación social de la actual administración diariamente (Estrada, 2019), y a través de dichas fuentes, se da a conocer a la percepción pública su opinión respecto a las organizaciones, para posteriormente modificar no solo su retórica, sino su actuación consecuente.</p>
<p>Al respecto, diversos periodistas, han documentado el discurso presidencial, que transitó de un contenido positivo o neutral, a uno negativo, al tiempo que se posicionaban y justificaban programas sociales (Fernández & Moreno, 2019), y dejaba de fomentarse la participación de organizaciones en actividades a que refiere la LFFAOSC. Incluso, Fernández y Moreno (2019) generaron el dato de que de 57 conferencias matutinas que refieren al tema de estudio, el 91% de las ocasiones dirigió descalificaciones sin fundamento administrativo o penal a las organizaciones, y sin referir concretamente a alguna en particular. Y citan como ejemplo, el 28 de enero de 2019, fecha en la que tuvo lugar el siguiente señalamiento:</p>
<blockquote>“El gobierno es un cuerpo de avance lento, entonces por eso estamos procurando que los programas sociales le lleguen de manera directa a la gente, sin pasar por el gobierno, sin pasar por las organizaciones. Era increíble el manejo de moches en todo. Organizaciones ciudadanas, organizaciones campesinas, organizaciones de la llamada sociedad civil, que recibían dinero del presupuesto. Y para todo era dinero, todo lo resolvían repartiendo dinero y no le llegaba nada a la gente. Entonces eso es lo que estamos atendiendo”.</blockquote>
<p><em>Fotografía: Mauricio de la Maza-Benignos</em></p>
<p>Sin soslayar que deben transparentarse los mecanismos para derogar fondos públicos económicos a las organizaciones, y que el manejo de recursos públicos debe realizarse de conformidad con el destino a que están afectados, la perspectiva presidencial solo se ha centrado en que son una fuga de recursos públicos, al tiempo que se operan “Programas Integrales de Bienestar” o “Programas Integrales para el Desarrollo”, y tiene lugar la exclusión de las organizaciones, del acceso a recursos públicos para fomento de sus actividades.</p>
<p>Sobre esto, trasciende al estudio la normatividad, que permite a las personas morales constituidas bajo regímenes diversos al de organización de la sociedad civil, participar y acceder a subsidios, pero para el caso de las organizaciones que satisfacen los mismos requisitos, y son asociaciones civiles, esto no es posible, lo cual deriva en una exclusión de aquellas organizaciones promotoras y defensoras del Derecho al Medio Ambiente Sano, basada en un trato diferenciado.</p>
<p><em>Fotografía: Mauricio de la Maza-Benignos</em></p>
<p>Ahora bien, existen tratos diferenciados que no resultan discriminatorios. Por ejemplo, acciones afirmativas como cuotas de género, que implican modificaciones estructurales de opresión a ciertos grupos, y donde la distinción o diferenciación, no es discriminatoria (CNDH, 2018), si no equitativa, para un eventual trato entre iguales (Juárez, 2011). En el caso de las OSC’s, a quienes se les ha vetado de obtener fomento público para el desarrollo de sus actividades, concretamente, a las que cuyo objeto social se relaciona con la protección del ambiente, lo relevante en el trato diferenciado identificado, es que este tenga un fundamento objetivo y razonable, de acuerdo con la finalidad perseguida por la autoridad.</p>
<p>Puede analizarse, a través del test de proporcionalidad, la argumentación jurídica que posibilita a los agraviados combatir anualmente, la normatividad aplicable, vía control de constitucionalidad concentrado; es decir, para que las organizaciones enfocadas en la defensa del medio ambiente como derecho humano, acudan al juicio de amparo indirecto, y logren acceder al fomento de su actividad, como una fuente de financiamiento para su aporte en el desarrollo social de nuestro país.</p>
<p>En conclusión, el veto presupuestal controvertido a través de las vías legales, resulta conveniente para la consecución continua de diversas actividades contempladas en el objeto social, protege intereses difusos y colectivos, prioriza los derechos humanos, y crea el ambiente idóneo, para que otros sigan un legado en forma de juicio, además de que deviene prioritario en el marco de las recientes reformas a la Ley de Impuesto sobre la renta, que lejos de combatir la simulación de actividades que aduce el Presidente de la República, restringen, por ejemplo, las actividades de las donatarias autorizadas y atentan potencialmente contra su derecho de financiamiento y de autonomía (OSC, Alternativas y Capacidades / Centro de Enlace y Desarrollo para, 2020).</p>
`, 
    imageId: 'blog-discriminacion-ongs', 
    category: 'Política Ambiental' 
  },
  { 
    id: 'post-8', 
    slug: 'decreto-sierra-picachos', 
    title: 'Se publica decreto sobre Sierra de Picachos como ANP', 
    date: '22 de Septiembre, 2021', 
    excerpt: 'Análisis del decreto que oficializa a la Sierra de Picachos como Área Natural Protegida y lo que significa para su futuro.', 
    content: `
<p>El Gobierno del Estado atendiendo la solicitud de la Asociación ecológica de la Sierra de Picachos AC, para la creación del Área Natural Protegida, “Ecosistema Sierra de Picachos”, el día de hoy publica el decreto mediante el cual constituye la citada ANP, con esto dan un ejemplo de colaboración entre la Sociedad Civil y Gobierno.</p>
<p>Área Natural Protegida “Ecosistemas de la Sierra Picachos” tiene una superficie de 99,432.49 hectáreas que se suman a las 75,872.55 hectáreas que ya estaban decretadas con anterioridad, en conjunto constituyen una superficie de 175,305.04 hectáreas.</p>
<p>Las Áreas Natural Protegidas de la Sierra de Picachos, son un espacio geográfico reconocido y dedicado a la naturaleza y sus servicios. En conjunto son el Área Natural Protegida más grande de Nuevo León y una pieza fundamental en el equilibrio ecológico del norte de México, que busca su conservación a largo plazo.</p>
<p>Con esta nueva Área Natural Protegida la Sierra de Picachos prestara grandes servicios ambientales, como 52,500 hm3 de agua por año, 2,758,880 toneladas de CO2 por año, 365 días/año limpieza de aire, entre otros, además del apoyo al equilibrio ecológico de la flora y fauna silvestre, aire limpio, el ecoturismo y la preservación de los valores históricos y culturales de nuestro estado además de despertar la conciencia, fomentar la sensibilidad y el respeto por la naturaleza.</p>
<p>Es importante manifestar nuestro reconocimiento y agradecimiento al Gobernador del Estado, Ing. Jaime Rodríguez Calderón y a la Secretaría de Desarrollo Sustentable por su apoyo incondicional en esta acción que traerá grandes beneficios ambientales y sociales para Nuevo León.</p>
`, 
    imageId: 'blog-decreto-picachos', 
    category: 'Legislación' 
  },
  { id: 'post-9', slug: 'tenencia-legal-tierra-parques-nacionales', title: 'Tenencia legal de la tierra en Parques Nacionales', date: '22 de Septiembre, 2021', excerpt: 'Un examen de los complejos desafíos legales y sociales relacionados con la propiedad de la tierra en áreas protegidas.', content: 'Contenido completo...', imageId: 'blog-tenencia-tierra', category: 'Legislación' },
  { id: 'post-10', slug: 'etica-documental-naturaleza', title: 'La ética del documental de naturaleza', date: '17 de Septiembre, 2021', excerpt: 'Una discusión sobre las responsabilidades y dilemas éticos que enfrentan los cineastas de vida silvestre.', content: 'Contenido completo...', imageId: 'blog-etica-documental', category: 'Cine' },
];

export const galleryImages: GalleryImage[] = [
  { id: 'gal-1', title: 'Río en el cañón', category: 'Naturaleza', imageId: 'gallery-new-1' },
  { id: 'gal-2', title: 'Hombre en la naturaleza', category: 'Naturaleza', imageId: 'gallery-new-2' },
  { id: 'gal-3', title: 'Paisaje montañoso', category: 'Paisajes', imageId: 'gallery-new-3' },
  { id: 'gal-4', title: 'Pez bajo el agua', category: 'Naturaleza', imageId: 'gallery-new-4' },
  { id: 'gal-5', title: 'Filmando en la naturaleza', category: 'Proyectos', imageId: 'gallery-new-5' },
  { id: 'gal-6', title: 'Pez en el agua', category: 'Naturaleza', imageId: 'gallery-new-6' },
  { id: 'gal-7', title: 'Cámara en la naturaleza', category: 'Proyectos', imageId: 'gallery-new-7' },
  { id: 'gal-8', title: 'Conversación en evento', category: 'Eventos', imageId: 'gallery-new-8' },
  { id: 'gal-9', title: 'Equipo filmando', category: 'Behind the Scenes', imageId: 'gallery-new-9' },
  { id: 'gal-10', title: 'Hombre con cámara', category: 'Behind the Scenes', imageId: 'gallery-new-10' },
  { id: 'gal-11', title: 'Conferencia', category: 'Eventos', imageId: 'gallery-new-11' },
  { id: 'gal-12', title: 'Paisaje de Arramberri', category: 'Paisajes', imageId: 'gallery-new-12' },
  { id: 'gal-13', title: 'Cuatro Ciénegas', category: 'Paisajes', imageId: 'gallery-new-13' },
  { id: 'gal-14', title: 'Paisaje de Perú', category: 'Paisajes', imageId: 'gallery-new-14' },
];

export const videoGallery: Video[] = [
  {
    id: 'vid-1',
    title: 'En busca del águila elegante',
    type: 'Mediometraje',
    youtubeId: 'og-QOYsTTcE',
    thumbnailId: 'video-thumb-1'
  },
  {
    id: 'vid-2',
    title: 'La cotorra serrana oriental',
    type: 'Cortometraje',
    youtubeId: 'MqNwizA7wc0',
    thumbnailId: 'video-thumb-2'
  },
  {
    id: 'vid-3',
    title: 'Ecología del fuego',
    type: 'Cortometraje',
    youtubeId: 'M81DLdDI1HQ',
    thumbnailId: 'video-thumb-3'
  },
  {
    id: 'vid-4',
    title: 'Historias del septentrión, la batalla del carrizal y el cachorrito carbonero',
    type: 'Cortometraje',
youtubeId: 'HE7A1PyqPZo',
    thumbnailId: 'video-thumb-4'
  },
  {
    id: 'vid-5',
    title: 'Los murciélagos de la cueva de la boca',
    type: 'Cortometraje',
    youtubeId: 'suiOUN8zl18',
    thumbnailId: 'video-thumb-5'
  },
  {
    id: 'vid-6',
    title: 'Praderas del Tokio',
    type: 'Cortometraje',
    youtubeId: 'I7StbzrZAlU',
    thumbnailId: 'video-thumb-6'
  },
];

export const achievements: Achievement[] = [
    { year: 2020, title: 'Doctor Honoris Causa', organization: 'Universidad Autónoma de Nuevo León' },
    { year: 2020, title: 'International Conservation Award', organization: 'Arizona Game & Fish Commission' },
    { year: 2011, title: 'CEO / Director General', organization: 'Pronatura Noreste, A.C. (2011-2021)' },
    { year: 2005, title: 'Director del Programa Desierto Chihuahuense', organization: 'World Wildlife Fund (WWF)' },
];

export const history = {
    mission: "Destacar la importancia de la conservación ambiental a través del arte cinematográfico y la consultoría especializada, inspirando a la sociedad a reconectar con la naturaleza y a tomar acciones para su protección.",
    vision: "Ser un referente en la producción audiovisual con contenido ambiental y social en México y Latinoamérica, creando obras que trasciendan fronteras e impulsen un cambio positivo y duradero en nuestra relación con el planeta.",
    values: [
        { title: 'Conservación', description: 'Nuestro motor principal es la protección y el respeto por el mundo natural.' },
        { title: 'Creatividad', description: 'Buscamos formas innovadoras y artísticas para contar historias que importan.' },
        { title: 'Excelencia', description: 'Comprometidos con la más alta calidad técnica y narrativa en cada proyecto.' },
        { title: 'Compromiso Social', description: 'Creemos en el poder de nuestras historias para educar, inspirar y movilizar a la comunidad.' }
    ]
};

export const timelineEvents: TimelineEvent[] = [
  {
      year: '1994',
      description: 'Le otorgan el "Premio a los mejores estudiantes de México" por el Comité Nacional Permanente de los Mejores Estudiantes de México'
  },
  {
      year: '2014',
      description: 'Obtiene el primer lugar en el "Premio Dr. José Álvarez Del Villar" por su tesis doctoral, otorgado por la Sociedad Mexicana de Ictiología'
  },
  {
      year: '2015',
      description: 'Logra el Premio de Investigación UANL al mejor artículo académico en Ciencias Naturales'
  },
  {
      year: '2006 - 2011',
      description: 'Se desempeñó como Director del Fondo Mundial para la Naturaleza.'
  },
  {
      year: '2011 - 2021',
      description: 'Se desempeñó como Director de Ciencias de la Conservación y Director General de la ONG mexicana Pronatura Noreste.'
  },
  {
      year: '2021 - Actualidad',
      description: 'Funge como miembro del consejo asesor de AESPAC, A.C., y director de "De la Maza Consulting and Films"'
  }
];
    
    

    




    


