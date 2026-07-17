import type { NavLink, SocialLink, Service, Project, Post, GalleryImage, Achievement, TimelineEvent, Video, ProductionLogo, Collaborator, Movie } from './types';
import { Facebook, Instagram, Linkedin, Youtube, Globe, Film } from 'lucide-react';
import { WhatsAppIcon, IMDbIcon, WikipediaIcon, SpotifyIcon, AppleMusicIcon, BandcampIcon } from '@/components/icons';

export const siteConfig = {
  name: 'Mauricio de la Maza Benignos',
  url: 'https://mauriciodelamaza.com',
  ogImage: 'https://mauriciodelamaza.com/og.jpg',
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
    { name: 'IMDb', href: 'https://www.imdb.com/es/name/nm14485536/', icon: Globe },
    { name: 'FilmFreeway', href: 'https://filmfreeway.com/MauriciodelaMazaBenignos', icon: Film },
    { name: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Mauricio_De_la_Maza-Benignos', icon: Globe },
    { name: 'WCFF', href: 'https://wcff.org', icon: Globe },
];

export const productionLinks = [
    { name: 'Cora', href: 'https://corafilm.com' },
    { name: 'Diálogos de la muerte', href: 'https://dialogosdelamuerte.com' },
    { name: 'El Zapato', href: 'https://theshoe.info' },
];

export const musicLinks: SocialLink[] = [
    { name: 'Spotify', href: 'https://open.spotify.com/intl-es/artist/2qHtMVEyh6uAXl5HiBT9GZ', icon: Globe },
    { name: 'Apple Music', href: 'https://music.apple.com/us/artist/mauricio-de-la-maza/1728959590', icon: Globe },
    { name: 'Bandcamp', href: 'https://mauriciodelamaza.bandcamp.com', icon: Globe },
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
    title: 'DIALOGOS DE LA MUERTE',
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
    title: 'EL ZAPATO',
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
    id: 'post-por-que-compongo',
    slug: 'por-que-compongo',
    title: 'Por qué compongo',
    date: '16 de Julio, 2026',
    excerpt: 'Compongo porque me gusta, porque quiero y porque puedo.',
    content: `<p><em>Por: Mauricio de la Maza-Benignos</em></p>
<p><strong>English below</strong></p>

<h2>Por qué compongo</h2>
<p>Compongo porque me gusta, porque quiero y porque puedo. El límite existe —no leo una partitura como quien lee un libro, nunca aprendí a tocar con mis manos todo lo que soy capaz de imaginar. No tengo el oficio de un concertista. Tengo el oficio de componer. Ese límite no es la razón de la música. Es solo el terreno donde ocurre.</p>
<p>Hay una diferencia que me importa sostener con precisión: no es lo mismo un límite real que una limitación que uno se cuenta a sí mismo para no intentar algo. En teoría podría aprender saxofón. En la práctica, nadie domina todos los instrumentos en una sola vida. Cada músico decide dónde invertir su tiempo. Algunos eligen la profundidad sobre un instrumento. Yo elegí la amplitud de un medio: el sintetizador, la programación y el diseño sonoro. No porque sean superiores, sino porque me permiten pensar el sonido antes que ejecutarlo. El teclado es apenas una interfaz. La verdadera ejecución ocurre en la cabeza. No escribo partituras; dibujo lo que escucho ahí adentro.</p>
<p>De niño, en los años setenta, veía a un baterista con maquillaje de gato y soñaba con tocar así. En retrospectiva, creo que mi memoria mezcló la vibra irreverente de Peter Criss con la precisión de Steve Gadd. Pero el sueño nunca fue la batería. Era poder obtener cualquier sonido que pudiera imaginar. Décadas después comprendí que el sintetizador hacía posible exactamente esa fantasía, aunque por un camino que el niño nunca habría podido anticipar. No reemplazaba la destreza física; cambiaba la naturaleza del problema. Ya no se trataba de dominar un instrumento, sino de organizar una idea.</p>
<p>Con el tiempo entendí también que nunca aprendí sintetizadores para hacer música electrónica. Me interesaron porque son un instrumento abierto. Pueden evocar una flauta medieval, un órgano barroco, una sección de metales, un paisaje sonoro imposible o un timbre que jamás ha existido. No sustituyen a la orquesta; sustituyen la obligación de pertenecer a una.</p>
<p>Quizá por eso mi música recorre territorios muy distintos. He compuesto desde un himno imaginado para la prehistoria hasta piezas inspiradas en el mundo prebarroco; del vals porfiriano al post-punk; de la electrónica ambiental al jazz; de sonoridades del Medio Oriente a colaboraciones con raperos o músicos de reguetón. Nunca he sentido que esas obras se contradigan.</p>
<p>Con frecuencia me preguntan qué tipo de músico soy. Nunca he sabido responder porque la pregunta supone que un creador debe pertenecer a un género. Yo nunca lo he entendido así. Pienso primero; después cada obra encuentra el lenguaje que necesita. A veces ese lenguaje pertenece a un siglo remoto; otras parece venir del futuro. La cronología nunca me ha parecido una jerarquía estética. Un canto ritual, Frescobaldi, un vals decimonónico, un sintetizador analógico o un beat contemporáneo son materiales distintos, pero ninguno posee un privilegio artístico sobre los demás.</p>
<p>Esto me lleva a algo que respeto profundamente: cada camino es lo que es y ninguno invalida a los otros. Steve Gadd representa una tradición extraordinaria de formación, disciplina y virtuosismo. También es real el camino de quien nunca pasó por un conservatorio y, aun así, encontró una voz propia. El mercado podrá valorar una firma y la academia una técnica; ninguna de las dos garantiza la verdad de una obra. La técnica no sustituye a la imaginación, como la imaginación tampoco sustituye al trabajo.</p>
<p>Composición y ejecución nunca me han parecido la misma competencia, aunque casi todo el mundo las confunde. Puedo sentarme frente al piano de un lugar público y tocar Las Mañanitas sin un solo adorno, y eso no le resta nada a lo que sucede cuando compongo: ahí la música ya está completa en mi cabeza, con capas, con forma, contrastada con la teoría después de sentirla, no antes. Mi capacidad como ejecutante y mi capacidad como compositor no dependen de la misma inteligencia ni responden al mismo entrenamiento. Son dos sistemas que apenas se cruzan. Más tarde supe que esto también tiene nombre: Edwin Gordon lo llamó audiation, la capacidad de escuchar y organizar música por dentro, sin sonido físico presente, como una inteligencia distinta de la destreza neuromuscular de ejecutar un instrumento. Y hay un precedente que me resultó especialmente revelador: Berlioz orquestó parte del repertorio más influyente del romanticismo sin ser un pianista competente, escuchando la obra completa en su imaginación antes de escribirla. No lo cito para que me valide. Lo cito porque, una vez más, resultó que llevaba tiempo conversando con alguien sin saber su nombre.</p>
<p>Por eso, cuando compongo, no desconfío de mi propia percepción; simplemente la calibro. No parto de una receta de género ni de una teoría que dicte la forma antes de que exista. Hago lo que se me da la gana y, después, recurro al análisis para saber con exactitud qué estoy torciendo y por qué. Igual que sé que un color es técnicamente gris antes de decidir dejarlo morado. La herramienta no me ata a la norma. Me da la libertad de desviarme de ella con conocimiento de causa, no por ignorancia.</p>
<p>Ese gesto aparece una y otra vez en mi música: una voz escrita que nunca se graba y termina convertida en un órgano; un vals de salón que comienza a insinuar un mambo y acaba suspendido sobre una atmósfera electrónica; unas campanas reales grabadas en un pueblo que dejan de ser documento para convertirse en otra cosa. Nunca busco resolver la tensión. Prefiero sostenerla.</p>
<p>Curiosamente, las referencias filosóficas llegaron después. Casi siempre escribí primero y leí después. Cuando más tarde encontré a Stravinsky hablando del poder creativo de las restricciones, a Pierre Schaeffer transformando sonidos cotidianos en objetos musicales o a Wittgenstein pensando el lenguaje como una forma de habitar el mundo, no sentí que ellos legitimaran mis intuiciones. Sentí algo mucho más interesante: había encontrado interlocutores. A veces coincidimos. Otras no. Pero la conversación ya existía antes de que yo conociera sus nombres.</p>
<p>Estoy convencido de que casi toda idea importante ha sido pensada antes por alguien. Lo interesante no es reclamar su propiedad, sino descubrir con quién llevábamos años conversando sin saberlo. Pensar no consiste en llegar primero. Consiste en aportar una variación honesta a una conversación que empezó mucho antes de nosotros y continuará cuando ya no estemos.</p>
<p>Por eso nunca he sentido la obligación de pertenecer a una escuela, a un instrumento o a una época. Si una pieza termina pareciéndose al post-punk, al jazz, a un himno prehistórico, a una cumbia psicodélica, a un vals porfiriano, al hip-hop, al reguetón o a una música que todavía no tiene nombre, me resulta secundario. Los géneros nunca fueron una casa; fueron un lenguaje. La obra siempre fue la idea.</p>
<p><strong>Mauricio de la Maza-Benignos</strong></p>

<hr class="my-12" />

<h2>Why I Compose</h2>
<p><em>English version</em></p>
<p>I compose because I like it, because I want to, and because I can. The limit exists —I don't read a score the way one reads a book, I never learned to play with my hands everything I'm capable of imagining. I don't have the craft of a concert performer. I have the craft of composing. That limit isn't the reason for the music. It's simply the ground where it happens.</p>
<p>There's a distinction I care about holding with precision: a real limit is not the same as a limitation one tells oneself in order not to try something. In theory I could learn the saxophone. In practice, no one masters every instrument in a single lifetime. Every musician decides where to invest their time. Some choose depth on one instrument. I chose breadth of medium: the synthesizer, programming, and sound design. Not because they're superior, but because they let me think the sound before executing it. The keyboard is just an interface. The real execution happens in the head. I don't write scores; I draw what I hear in there.</p>
<p>As a child, in the seventies, I watched a drummer in cat makeup and dreamed of playing like that. In hindsight, I think my memory blended Peter Criss's irreverent energy with Steve Gadd's precision. But the dream was never the drums. It was being able to get any sound I could imagine. Decades later I understood that the synthesizer made exactly that fantasy possible, though by a path the child could never have anticipated. It didn't replace physical skill; it changed the nature of the problem. It was no longer about mastering an instrument, but about organizing an idea.</p>
<p>Over time I also understood that I never learned synthesizers in order to make electronic music. I was drawn to them because they're an open instrument. They can evoke a medieval flute, a baroque organ, a brass section, an impossible soundscape, or a timbre that has never existed. They don't replace the orchestra; they replace the obligation to belong to one.</p>
<p>Maybe that's why my music moves through such different territories. I've composed everything from an imagined anthem for prehistory to pieces inspired by the pre-baroque world; from the Porfirian waltz to post-punk; from ambient electronic music to jazz; from Middle Eastern sonorities to collaborations with rappers and reggaetón artists. I've never felt those works contradict each other.</p>
<p>People often ask me what kind of musician I am. I've never known how to answer, because the question assumes a creator must belong to a genre. I've never understood it that way. I think first; afterward, each piece finds the language it needs. Sometimes that language belongs to a distant century; other times it seems to come from the future. Chronology has never seemed like an aesthetic hierarchy to me. A ritual chant, Frescobaldi, a nineteenth-century waltz, an analog synthesizer, or a contemporary beat are different materials, but none holds artistic privilege over the others.</p>
<p>This brings me to something I deeply respect: every path is what it is, and none invalidates the others. Steve Gadd represents an extraordinary tradition of training, discipline, and virtuosity. Just as real is the path of someone who never went through a conservatory and, even so, found a voice of their own. The market may value a name, and academia a technique; neither guarantees the truth of a work. Technique doesn't replace imagination, just as imagination doesn't replace work.</p>
<p>Composition and performance have never seemed like the same skill to me, though almost everyone confuses them. I can sit down at a piano in a public place and play Las Mañanitas without a single embellishment, and that takes nothing away from what happens when I compose: there, the music is already complete in my head, layered, shaped, checked against theory after feeling it, not before. My ability as a performer and my ability as a composer don't rely on the same intelligence, nor do they answer to the same training. They're two systems that barely intersect. I later learned this even has a name: Edwin Gordon called it audiation — the ability to hear and organize music internally, with no physical sound present, as an intelligence distinct from the neuromuscular skill of playing an instrument. And there's a precedent I found especially revealing: Berlioz orchestrated some of the most influential repertoire of the Romantic era without being a competent pianist, hearing the entire work in his imagination before writing it down. I don't cite him to validate myself. I cite him because, once again, it turned out I'd been in conversation with someone for years without knowing his name.</p>
<p>That's why, when I compose, I don't distrust my own perception; I simply calibrate it. I don't start from a genre recipe or a theory that dictates form before it exists. I do whatever I feel like, and afterward I turn to analysis to know exactly what I'm bending, and why. The same way I know a color is technically gray before I decide to leave it purple. The tool doesn't tie me to the norm. It gives me the freedom to depart from it knowingly, not out of ignorance.</p>
<p>That gesture shows up again and again in my music: a written vocal line that's never recorded and ends up becoming an organ; a salon waltz that starts hinting at a mambo and ends suspended over an electronic atmosphere; real bells recorded in a village that stop being documentation and become something else. I never try to resolve the tension. I'd rather hold it.</p>
<p>Curiously, the philosophical references arrived afterward. I almost always wrote first and read later. When I later came across Stravinsky speaking about the creative power of constraints, Pierre Schaeffer turning everyday sounds into musical objects, or Wittgenstein thinking of language as a way of inhabiting the world, I didn't feel they legitimized my intuitions. I felt something far more interesting: I had found interlocutors. Sometimes we agree. Sometimes we don't. But the conversation already existed before I knew their names.</p>
<p>I'm convinced that almost every important idea has already been thought by someone else. What's interesting isn't claiming ownership of it, but discovering who we'd been conversing with for years without knowing it. Thinking isn't about arriving first. It's about contributing an honest variation to a conversation that began long before us and will continue after we're gone.</p>
<p>That's why I've never felt obligated to belong to a school, an instrument, or an era. If a piece ends up resembling post-punk, jazz, a prehistoric anthem, a psychedelic cumbia, a Porfirian waltz, hip-hop, reggaetón, or a music that doesn't yet have a name, that seems secondary to me. Genres were never a house; they were a language. The work was always the idea.</p>
<p><strong>Mauricio de la Maza-Benignos</strong></p>
`,
    imageId: 'blog-por-que-compongo-cover',
    category: 'Artículos'
  },
  {
    id: 'post-por-que-filmo',
    slug: 'por-que-filmo',
    title: 'Por qué filmo',
    date: '3 de Julio, 2026',
    excerpt: 'Un ensayo íntimo sobre las razones detrás del oficio de filmar, entre el absurdo de Camus, el poder cotidiano de Foucault y la biología de Nietzsche.',
    content: `<p><em>Por: Mauricio de la Maza-Benignos</em></p>
<p><strong>English below</strong></p>

<h2>Por qué filmo</h2>
<p>Filmo porque no hacerlo sería una forma de traicionarme.</p>
<p>Entendí que el cine, para mí, no es una acumulación de historias, sino una forma de estar en el mundo.</p>
<p>En la escuela de cine me enseñaron que hacer cine consistía, sobre todo, en aprender a contar bien una historia. Había métodos, estructuras, reglas. Supongo que todo eso tiene su lugar. La escuela es, después de todo, un espacio importante —casi sagrado— para el aprendizaje, especialmente cuando se trata del oficio y de la técnica.</p>
<p>La escuela, en un sentido más amplio, también me puso en contacto con muchos de los pensadores que hoy reconozco como interlocutores: filósofos que han reflexionado con profundidad sobre el absurdo, el poder o la condición humana. Ese contacto con la tradición intelectual tiene un valor enorme.</p>
<p>Aun así, la cuestión para mí siempre fue otra.</p>
<p>Mi relación con el cine nunca pasó realmente por el aprendizaje en ese sentido. El aprendizaje supone transmisión: alguien enseña, alguien recibe. Lo que me ocurrió fue distinto. No aprendí; descubrí.</p>
<p>Descubrí que el mundo rara vez se deja ordenar con la claridad que quisiéramos. No afirmo haber encontrado ninguna verdad. De hecho, desconfío de esa pretensión. Pero de algo sí estoy seguro: de la experiencia que me llevó a mirar el mundo de esta manera.</p>
<p>Reconozco esa intuición formulada con claridad por Albert Camus: el absurdo no se resuelve, se sostiene. No llegué a esa idea leyendo filosofía. Solo lo reconocí.</p>
<p>Esa forma de mirar también me lleva a prestar atención a algo más: la manera en que el poder se infiltra en lo cotidiano. No hablo del poder en su forma más visible —los grandes discursos, las instituciones, las figuras de autoridad— sino de algo mucho más discreto. Pequeños gestos, normas aparentemente inocentes, comportamientos que aceptamos sin pensar demasiado.</p>
<p>Esa sospecha también fue pensada con profundidad por Michel Foucault. Pero mi relación con esa idea tampoco nace en la teoría. Nace observando. Observando cómo lo que llamamos normalidad suele contener, ya desde dentro, una forma de violencia silenciosa.</p>
<p>Por eso no me interesa construir villanos evidentes ni discursos programáticos. Prefiero observar cómo esas estructuras aparecen en la vida ordinaria. La cámara, al menos para mí, no debería adoctrinar. Debería acompañar lo suficiente como para que esas tensiones se vuelvan visibles.</p>
<p>Hay otra intuición que se vuelve inevitable: antes que sujetos morales o racionales, somos cuerpos. Organismos. Animales con una biología compleja tratando de construir sentido dentro de ella.</p>
<p>Reconozco esa sospecha formulada con brutal claridad por Friedrich Nietzsche. Pero, como en otros casos, no llegué a ella desde la teoría. Solo lo reconocí.</p>
<p>Tal vez por eso me interesa mostrar momentos en los que esa estructura se resquebraja: gestos absurdos, impulsos que desestabilizan la lógica, situaciones donde la racionalidad deja de ser el centro. No lo concibo como provocación ni como efecto estético. Lo entiendo más bien como un recordatorio antropológico.</p>
<p>A veces basta con recordar algo sencillo: somos primates.</p>
<p>Nuestra conciencia no está fuera de la vida. Surge dentro de ella.</p>
<p>El valor humano no se mide por parámetros cuantificables. Tampoco por logros o desempeños.</p>
<p>Hay algo más simple y más difícil de aceptar al mismo tiempo: la dignidad no depende del rendimiento. Depende de la existencia.</p>
<p>A veces me han preguntado si mi forma de trabajar dialoga con el extrañamiento de Bertolt Brecht. Entiendo la pregunta. También desconfío de las narraciones demasiado cómodas y de la identificación emocional que adormece el pensamiento.</p>
<p>Pero mi camino es distinto. No me interesa romper la cuarta pared ni exponer el artificio para instruir al espectador. No quiero interrumpir la experiencia para explicarla.</p>
<p>Prefiero algo más sencillo y, quizá, más incómodo: sostener la tensión dentro de la propia experiencia. Que la incomodidad no venga de un gesto pedagógico, sino de la fricción entre lo que vemos y lo que creemos comprender.</p>
<p>No concibo el cine como herramienta de redención ni como aparato pedagógico. Tampoco me interesa ofrecer respuestas demasiado limpias a preguntas que el mundo mismo parece incapaz de resolver.</p>
<p>Quizá mi trabajo se acerque, sin proponérselo del todo, a una forma de humanismo crítico. Una manera de mirar la fragilidad humana sin romantizarla y sin pretender que el mundo pueda ordenarse plenamente mediante conceptos tranquilizadores.</p>
<p>No estoy seguro de que ese sea el nombre correcto. Tal vez no importe demasiado.</p>
<p>Lo único que sé: filmo para sostener la grieta.</p>
<p><strong>Mauricio de la Maza-Benignos</strong></p>

<hr class="my-12" />

<h2>On Filming</h2>
<p><em>English version</em></p>
<p>I film because not doing so would feel like a form of betrayal.</p>
<p>I came to understand that cinema, for me, is not an accumulation of stories but a way of being in the world.</p>
<p>In film school I was taught that filmmaking was mainly about learning how to tell a story well. There were methods, structures, rules. All of that certainly has its place. School is, after all, an important—almost sacred—space for learning, especially when it comes to craft and technique.</p>
<p>School in a broader sense also brought me into contact with many of the thinkers I now recognize as interlocutors: philosophers who have reflected deeply on the absurd, power, and the human condition. That encounter with intellectual tradition has enormous value.</p>
<p>Even so, the real question for me was always elsewhere.</p>
<p>My relationship with cinema never truly passed through learning in that sense. Learning assumes transmission: someone teaches, someone receives. What happened to me was different. I did not learn; I discovered.</p>
<p>I discovered that the world rarely allows itself to be ordered with the clarity we would like. I do not claim to have found any truth. In fact, I distrust that ambition. But there is something I am certain of: the experience that led me to look at the world in this way.</p>
<p>I recognize that intuition clearly formulated by Albert Camus: the absurd is not resolved; it is sustained. I did not arrive at that idea through philosophy. I simply recognized it.</p>
<p>That way of looking also leads me to pay attention to something else: how power infiltrates everyday life. I am not speaking about power in its most visible forms—grand discourses, institutions, figures of authority—but something much quieter. Small gestures, seemingly harmless norms, behaviors we accept without thinking too much about them.</p>
<p>That suspicion was also explored with great depth by Michel Foucault. Yet my relationship to that idea does not originate in theory. It comes from observation—seeing how what we call normality often contains, within it, a subtle form of violence.</p>
<p>That is why I am not interested in constructing obvious villains or programmatic messages. I prefer to observe how these structures appear within ordinary life. The camera, at least for me, should not indoctrinate. It should accompany reality long enough for these tensions to become visible.</p>
<p>Another intuition eventually becomes unavoidable: before we are moral or rational subjects, we are bodies. Organisms. Animals with a complex biology trying to construct meaning within it.</p>
<p>I recognize that suspicion expressed with brutal clarity by Friedrich Nietzsche. But, as with the others, I did not arrive there through theory. I simply recognized it.</p>
<p>Perhaps that is why I am drawn to moments when that structure fractures—absurd gestures, impulses that disrupt logic, situations where rationality is no longer at the center. I do not see this as provocation or aesthetic effect, but as an anthropological reminder.</p>
<p>Sometimes it is enough to remember something simple: we are primates.</p>
<p>Our consciousness does not stand outside life. It emerges within it.</p>
<p>Human worth cannot be measured through quantifiable parameters. Nor through achievements or performance.</p>
<p>There is something simpler, and harder to accept: dignity does not depend on productivity. It depends on existence.</p>
<p>Sometimes I am asked whether my approach relates to the estrangement of Bertolt Brecht. I understand the question. I also distrust narratives that are too comfortable, or emotional identification that dulls thought.</p>
<p>But my path is different. I am not interested in breaking the fourth wall or exposing artifice in order to instruct the viewer. I do not want to interrupt the experience to explain it.</p>
<p>What interests me is something simpler, and perhaps more unsettling: sustaining tension within the experience itself. Let the discomfort arise from the friction between what we see and what we believe we understand.</p>
<p>I do not conceive cinema as a tool of redemption or a pedagogical apparatus. Nor am I interested in offering neat answers to questions the world itself seems unable to resolve.</p>
<p>Perhaps my work approaches, without quite intending to, a form of critical humanism—a way of looking at human fragility without romanticizing it, and without assuming that the world can be fully ordered through concepts or comforting narratives.</p>
<p>I am not sure that is the right name. Perhaps it does not matter very much.</p>
<p>The only thing I know: I film to hold the crack open.</p>
<p><strong>Mauricio de la Maza-Benignos</strong></p>
`,
    imageId: 'blog-por-que-filmo-cover',
    category: 'Artículos'
  },
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
<p>Xavier Araiza da forma a un personaje que utiliza la palabra como un recurso de escape, de denuncia y como parte de un ¡Basta! que será lanzado al lector o espectador. Por lo tanto, se le da voz a las que han sido violentadas, quemadas vivas, desaparecidas o convertidas en un objeto para uso egoísta de una mentalidad o sistema machista que cínicamente afirma que no existe tal realidad.</p>
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
    category: 'Colaboradores'
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
<div style=”position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; margin-top: 1.5rem; margin-bottom: 1.5rem; border-radius: 0.5rem;”>
  <iframe
    src=”https://www.youtube.com/embed/pUKqlCbsl-o”
    frameborder=”0”
    allow=”accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture”
    allowfullscreen
    style=”position: absolute; top: 0; left: 0; width: 100%; height: 100%;”>
  </iframe>
</div>
`,
    imageId: 'blog-valle-cocora-cover',
    category: 'Colaboradores'
  },
  {
    id: 'post-4',
    slug: 'aviturismo-nuevo-leon',
    title: 'El aviturismo en Nuevo León: su potencial económico y de conservación',
    date: '27 de Octubre, 2021',
    excerpt: 'Análisis sobre cómo el turismo de observación de aves puede impulsar la economía local y proteger la biodiversidad.',
    content: `<p>Por Leonardo Guzmán y Marilyn Castillo de Kingfisher Birdwatching Nuevo León</p>
<p>¿Alguna vez has visto en la televisión, películas o libros, alguna persona o grupo de personas que andan por ahí buscando pájaros? ¿O te has preguntado qué hace esa persona con binoculares y/o cámara mientras el resto de la gente sale a hacer ejercicio? Quizás te hayas topado con alguien en el parque, el río o la montaña, quien con mucha paciencia y emoción espera a que salgan los pájaros desde temprano para observarlos a través de sus binoculares, identificarlos y, de ser posible, tomar fotografías.</p>
<img src="/images/ave1.jpg" alt="Persona observando aves" class="my-6 rounded-lg shadow-md" />
<p>Observar aves es referido como el arte de reconocer a las distintas especies de aves a través de sus cantos, plumajes o comportamiento. Esta actividad puede sonar fácil ya que se piensa que simplemente “hay que salir al monte a ver pájaros”, sin embargo, va mucho más allá que esto. La observación de aves o “birdwatching” trae consigo numerosos beneficios para aquellos que la practican que van desde un bienestar físico y emocional, un mejor aprendizaje sobre nuestra biodiversidad y el entorno natural a escala local, así como una mayor sensibilización sobre las problemáticas ambientales que enfrentan las aves en sus ecosistemas y realizar aportes a la ornitología a través de las plataformas de ciencia ciudadana.</p>
<p>Adicionalmente, es importante destacar que la observación de aves representa una actividad con alto potencial económico, dado que muchos de quienes la practican realizan viajes fuera de su municipio, estado o país, convirtiéndose en aviturismo o también llamado turismo de observación de aves. El aviturismo implica desplazarse desde un sitio de origen hacia un destino específico con el interés de observar la avifauna local en su entorno natural. Esos viajes implican el hospedaje y la alimentación en la localidad, pagos por transportación, contratación de guías locales, y todo lo relacionado a servicios turísticos en general. Esta derrama económica incita a que exista un interés por la protección de los espacios naturales donde estas aves pueden ser avistadas por lo que el aviturismo incita y estimula la conservación de estos sitios. Tan solo en el 2019, el aviturismo género un total de $4,452,294,489 de pesos para el país a través de la observación de aves acuáticas y marinas.</p>
<img src="/images/ave2.jpg" alt="Ave en su hábitat natural" class="my-6 rounded-lg shadow-md" />
<p>En los últimos años, el interés por la observación de aves ha crecido considerablemente, registrándose hasta la fecha 471 especies de aves para Nuevo León en la plataforma de ciencia ciudadana eBird.  Por su parte, Kingfisher Birdwatching Nuevo León nace en 2016 con la inquietud de contribuir al conocimiento sobre la avifauna estatal con la sociedad, promover la observación de aves como una herramienta para la educación ambiental e impulsar el aviturismo en el estado como una alternativa económica y de conservación de la biodiversidad. Kingfisher ofrece experiencias únicas e inolvidables a través de sus tours para observación de aves en diferentes localidades de Nuevo León a lo largo de todo el año.</p>
<img src="/images/ave3.jpg" alt="Grupo de aviturismo" class="my-6 rounded-lg shadow-md" />
<p>Y tú, ¿qué esperas para vivir la experiencia de “pajarear” y conocer aves increíbles?</p>
`,
    imageId: 'blog-aviturismo-cover',
    category: 'Colaboradores'
  },
  {
    id: 'post-5',
    slug: 'doctor-honoris-causa',
    title: 'Otorga el Claustro Doctoral el grado de Doctor Honoris Causa a Mauricio de la Maza-Benignos',
    date: '25 de Octubre, 2021',
    excerpt: 'Un reconocimiento a la trayectoria y contribuciones en el campo de la biología y el desarrollo sustentable.',
    content: `<p>A través del reconocimiento de generaciones de líderes de excelencia profesional y social, el Claustro Doctoral busca fomentar el liderazgo y la educación. Por ello, el pasado viernes 1 de octubre se organizó la ceremonia de investidura para otorgar el grado de Doctor Honoris Causa a personajes eminentes que se han destacado en diversos ámbitos profesionales, sociales y culturales.</p>
<img src="/images/dr1.jpg" alt="Ceremonia de investidura" class="my-6 rounded-lg shadow-md" />
<p>Entre ellos, se distinguió el trabajo de nuestro fundador Mauricio de la Maza-Benignos, a través del cual se ha conseguido la protección de la flora y la fauna de diferentes ecosistemas mexicanos, la descripción de especies de peces y caracoles hidróbidos y la conservación de cuerpos de agua y recursos naturales del norte de México.</p>
<img src="/images/dr2.jpg" alt="Mauricio de la Maza-Benignos recibiendo el reconocimiento" class="my-6 rounded-lg shadow-md" />
<p>Con estos destacados reconocimientos a la labor social, «se impulsa al propio individuo a continuar y mejorar su trabajo en beneficio de otros. Y al darlo a conocer logra infundir nuevas ideas e inspirar a terceros de manera tangible».</p>
<img src="/images/dr3.jpg" alt="Miembros del Claustro Doctoral" class="my-6 rounded-lg shadow-md" />
<p>Agradecemos al Claustro Doctoral el reconocimiento a la labor de nuestro fundador, estímulo que fomenta la evolución del mismo y lo expone al conocimiento de los demás, inspirando su continuación y la idea de que la protección de la naturaleza, sobrepasando intereses y organizaciones, es una actividad que contribuye a la mejora de la humanidad.</p>
`,
    imageId: 'blog-honoris-causa-cover',
    category: 'Noticias'
  },
  {
    id: 'post-6',
    slug: 'critica-cuatro-cienegas',
    title: 'Crítica de “Cuatro Ciénegas y la tragedia de los comunes” por José Pablo Acevedo',
    date: '09 de Octubre, 2021',
    excerpt: 'Una reseña profunda del documental, analizando su mensaje y su impacto en la conversación ambiental.',
    content: `<p>by Jose Pablo Acevedo/ octubre 9, 2021 2254 Views  No Comments</p>
<p>Artículos / Colaboradores</p>
<blockquote>«La ruina es el destino hacia el cual todos los hombres se apresuran, cada uno persiguiendo su propio interés en una sociedad que cree en la libertad de los bienes comunes. La libertad en un bien de uso común trae ruina a todos». Fragmento del ensayo, «La tragedia de los comunes» publicado en 1969 por Garret Hardin.</blockquote>
<p>Este fenómeno se vive el día de hoy en el valle de Cuatro Ciénegas, ubicado en el estado de Coahuila.</p>
<img src="/images/cuatro1.jpg" alt="Paisaje de Cuatro Ciénegas" class="my-6 rounded-lg shadow-md" />
<p><em>Fotografía de Mauricio De la Maza-Benignos</em></p>
<p>Mauricio De la Maza-Benignos, biólogo, ingeniero agrónomo zootecnista, abogado y cineasta, ha dedicado gran parte de su vida al cuidado y protección de las áreas naturales, en donde la ausencia de Estado de derecho ambiental deja mucho que desear.</p>
<p>Tal es el caso del valle de Cuatro Ciénegas, sitio enigmático por sus pozas en las cuales se “revela” el misterio evolutivo de la vida, desde hace más de 3,000 millones de años.</p>
<p>Este sitio se encuentra en un grave riesgo de extinción, no sólo de sus increíbles pozas, sino de todo ser vivo que habita en ese lugar; debido a la impunidad y la falta de gobernanza ambientales, el uso y trasvase desmedidos del agua que ahí mana, así como las lagunas legales y la corrupción que rodean el manejo de estos humedales.</p>
<p>Debido a todo esto y a la incesante batalla que activistas, biólogos, abogados ambientalistas y científicos han enfrentado por la preservación del sitio, De la Maza quiso evidenciar las maravillas de los humedales, así como la ausencia de justicia ambiental, en su cortometraje titulado «Cuatro Ciénegas y la tragedia de los comunes». Título que hace referencia al supuesto desarrollado por el biólogo y ecologista estadounidense Garret Hardin quien, en pocas palabras, basó su teoría en la idea de que ante la falta de reglas claras que atiendan el bien común, «aquello que es de todos, no es de nadie y por lo tanto a nadie le importa si un recurso natural al borde de su extinción o si cientos de especies están muriendo, pues si el individuo no lo aprovecha, alguien más lo hará».</p>
<img src="/images/cuatro2.jpg" alt="Poza en Cuatro Ciénegas" class="my-6 rounded-lg shadow-md" />
<p><em>Fotografía de Mauricio De la Maza-Benignos</em></p>
<p>En este cortometraje encontrarás bellas tomas de los ecosistemas, la flora y fauna, (por si nunca las has visitado), así como evidencias de la impunidad ambiental que reina el sitio, situación que llena de indignación a cualquiera que la vea.</p>
<p>Este filme está próximo a estrenarse en el Wildlife Conservation Film Festival (WCFF) este próximo 17 de octubre en la Ciudad de Nueva York, EEUU. Pero no te preocupes porque este próximo 16 de octubre lo podremos ver en el Parque Rufino Tamayo en San Pedro Garza García.</p>
<img src="/images/cuatro3.jpg" alt="Fauna de Cuatro Ciénegas" class="my-6 rounded-lg shadow-md" />
<p>Consulta detalles y adquiere tus boletos aquí: <a href=”https://mauriciodelamazabenignos.com/eventorufinotamayo/” target=”_blank” rel=”noopener noreferrer”>https://mauriciodelamazabenignos.com/eventorufinotamayo/</a></p>
`,
    imageId: 'blog-cuatro-cienegas-cover',
    category: 'Colaboradores'
  },
  {
    id: 'post-7',
    slug: 'discriminacion-ongs-ambientales',
    title: 'Discriminación de organizaciones promotoras y defensoras del derecho al medio ambiente sano en la política pública mexicana',
    date: '25 de Septiembre, 2021',
    excerpt: 'Una reflexión crítica sobre los obstáculos que enfrentan las ONGs ambientales en el panorama político actual.',
    content: `<h4>Del surgimiento de las Organizaciones ambientalistas</h4>
<p>by kenia Alvarez Renteria/ septiembre 25, 2021 1159 Views  No Comments</p>
<p>Artículos / Colaboradores</p>
<p>Poco se ha indagado sobre el trato diferenciado hacia organizaciones defensoras del medio ambiente sano, a pesar de que resulta trascendente en la medida de que cada programa de fomento, tiene una normatividad propia en el ámbito administrativo, y a nivel nacional, prevalece una visión excluyente generalizada. Poco, a pesar de que bajo un punto de vista financiero, es imposible deslindar la perspectiva de justiciabilidad de los DESCA, en la medida de que las organizaciones, los promueven y defienden. Sin embargo, cada inicio de año fiscal, puede analizarse argumentación jurídica en un mecanismo de control de constitucionalidad concentrado, a través de las vías dispuestas para tal efecto, para que quienes se estiman agraviados, accionen el juicio de amparo, con la finalidad de proteger intereses difusos y colectivos de los derechos humanos y generar referencias jurisdiccionales de mandatos de optimización -principios-.</p>
<p>Las organizaciones de la sociedad civil nacen ante la necesidad de buscar soluciones a problemas socialmente relevantes; son “el resultado de la presión ciudadana por participar en las decisiones públicas que afectan su vida” (Morera & Quintana, 2019). Según la normatividad civil, se constituyen a través de un conjunto de personas que se dan un marco legal de actividades para regularse de acuerdo con un propósito; además, la Ley Federal de Fomento a las Actividades realizadas por las organizaciones de la sociedad civil (LFFAOSC), instituye cuáles son sus derechos, entre los que destaca, el acceso a los apoyos y estímulos públicos para fomento de las actividades; además de precisar como una de las actividades objeto de fomento, la protección del ambiente, la flora y la fauna, la preservación y restauración del equilibrio ecológico (Diputados, 2018).</p>
<p>En ese orden de ideas, en determinadas circunstancias, cualquier organización ambientalista, cuyo objeto social conlleve actividades de fomento, está en aptitud de ser considerada como promotora y defensora del derecho humano al medio ambiente sano. Son estas organizaciones, las que actualmente están inmersas en una política pública que incide de forma negativa en el desarrollo de su objeto social, el goce y ejercicio de sus derechos, y su participación activa en la agenda pública, y reciben además, un trato desigual. Al respecto, el ordenamiento jurídico en nuestro país, permite el trato diferenciado porque en sí mismo no es contrario a la igualdad y a la no discriminación; no obstante, cuando deriva en la vulneración de los derechos del grupo diferenciado, se violenta el derecho a la no discriminación (Vázquez, 2018).</p>
<img src="/images/discriminación1.jpg" alt="Protesta ambiental" class="my-6 rounded-lg shadow-md" />
<p><em>mohammed_hassan en Pixaby</em></p>
<p>El problema que se genera anualmente, es el trato diferenciado que reciben las organizaciones caracterizadas, frente a las personas morales, en el acceso a recursos públicos, en aras de determinar si las normas aplicables son discriminatorias o no.</p>
<p>En los encuentros con periodistas y el Presidente de la República, en ruedas de prensa o conferencias matutinas, donde además de anunciar programas sociales, surgen participaciones de funcionarios públicos y se atienden preguntas de la prensa. Distintas iniciativas han analizado la repetición de frases, afirmaciones, señalamientos frecuentes y el impacto de los mensajes políticos, así como la exposición de temas de coyuntura. El lic. Andrés Manuel López Obrador, ya había utilizado la capacidad de los medios de comunicación y de otras formas de comunicación pública para establecer una agenda pública, informar a la ciudadanía y coordinar acciones cuando fue Jefe de Gobierno del DF ( (Pérez Cristino & Cuna Pérez, 2020). Actualmente, las redes sociales también han replicado sus mensajes; por ejemplo, nueve de cada 10 tuits de la cuenta oficial de comunicación social del gobierno federal, contienen el hashtag #ConferenciaPresidente, citándolo o parafraseándolo. Con estos actos asume personalmente la comunicación social de la actual administración diariamente (Estrada, 2019), y a través de dichas fuentes, se da a conocer a la percepción pública su opinión respecto a las organizaciones, para posteriormente modificar no solo su retórica, sino su actuación consecuente.</p>
<p>Al respecto, diversos periodistas, han documentado el discurso presidencial, que transitó de un contenido positivo o neutral, a uno negativo, al tiempo que se posicionaban y justificaban programas sociales (Fernández & Moreno, 2019), y dejaba de fomentarse la participación de organizaciones en actividades a que refiere la LFFAOSC. Incluso, Fernández y Moreno (2019) generaron el dato de que de 57 conferencias matutinas que refieren al tema de estudio, el 91% de las ocasiones dirigió descalificaciones sin fundamento administrativo o penal a las organizaciones, y sin referir concretamente a alguna en particular. Y citan como ejemplo, el 28 de enero de 2019, fecha en la que tuvo lugar el siguiente señalamiento:</p>
<blockquote>”El gobierno es un cuerpo de avance lento, entonces por eso estamos procurando que los programas sociales le lleguen de manera directa a la gente, sin pasar por el gobierno, sin pasar por las organizaciones. Era increíble el manejo de moches en todo. Organizaciones ciudadanas, organizaciones campesinas, organizaciones de la llamada sociedad civil, que recibían dinero del presupuesto. Y para todo era dinero, todo lo resolvían repartiendo dinero y no le llegaba nada a la gente. Entonces eso es lo que estamos atendiendo”.</blockquote>
<img src="/images/discriminación2.jpg" alt="Congreso" class="my-6 rounded-lg shadow-md" />
<p><em>Fotografía: Mauricio de la Maza-Benignos</em></p>
<p>Sin soslayar que deben transparentarse los mecanismos para derogar fondos públicos económicos a las organizaciones, y que el manejo de recursos públicos debe realizarse de conformidad con el destino a que están afectados, la perspectiva presidencial solo se ha centrado en que son una fuga de recursos públicos, al tiempo que se operan “Programas Integrales de Bienestar” o “Programas Integrales para el Desarrollo”, y tiene lugar la exclusión de las organizaciones, del acceso a recursos públicos para fomento de sus actividades.</p>
<p>Sobre esto, trasciende al estudio la normatividad, que permite a las personas morales constituidas bajo regímenes diversos al de organización de la sociedad civil, participar y acceder a subsidios, pero para el caso de las organizaciones que satisfacen los mismos requisitos, y son asociaciones civiles, esto no es posible, lo cual deriva en una exclusión de aquellas organizaciones promotoras y defensoras del Derecho al Medio Ambiente Sano, basada en un trato diferenciado.</p>
<img src="/images/Discriminación3.jpeg" alt="Gráficos de datos" class="my-6 rounded-lg shadow-md" />
<p><em>Fotografía: Mauricio de la Maza-Benignos</em></p>
<p>Ahora bien, existen tratos diferenciados que no resultan discriminatorios. Por ejemplo, acciones afirmativas como cuotas de género, que implican modificaciones estructurales de opresión a ciertos grupos, y donde la distinción o diferenciación, no es discriminatoria (CNDH, 2018), si no equitativa, para un eventual trato entre iguales (Juárez, 2011). En el caso de las OSC's, a quienes se les ha vetado de obtener fomento público para el desarrollo de sus actividades, concretamente, a las que cuyo objeto social se relaciona con la protección del ambiente, lo relevante en el trato diferenciado identificado, es que este tenga un fundamento objetivo y razonable, de acuerdo con la finalidad perseguida por la autoridad.</p>
<p>Puede analizarse, a través del test de proporcionalidad, la argumentación jurídica que posibilita a los agraviados combatir anualmente, la normatividad aplicable, vía control de constitucionalidad concentrado; es decir, para que las organizaciones enfocadas en la defensa del medio ambiente como derecho humano, acudan al juicio de amparo indirecto, y logren acceder al fomento de su actividad, como una fuente de financiamiento para su aporte en el desarrollo social de nuestro país.</p>
<p>En conclusión, el veto presupuestal controvertido a través de las vías legales, resulta conveniente para la consecución continua de diversas actividades contempladas en el objeto social, protege intereses difusos y colectivos, prioriza los derechos humanos, y crea el ambiente idóneo, para que otros sigan un legado en forma de juicio, además de que deviene prioritario en el marco de las recientes reformas a la Ley de Impuesto sobre la renta, que lejos de combatir la simulación de actividades que aduce el Presidente de la República, restringen, por ejemplo, las actividades de las donatarias autorizadas y atentan potencialmente contra su derecho de financiamiento y de autonomía (OSC, Alternativas y Capacidades / Centro de Enlace y Desarrollo para, 2020).</p>
`,
    imageId: 'blog-discriminacion-ongs-cover-new',
    category: 'Colaboradores'
  },
  {
    id: 'post-8',
    slug: 'decreto-sierra-picachos',
    title: 'Se publica decreto sobre Sierra de Picachos como ANP',
    date: '22 de Septiembre, 2021',
    excerpt: 'Análisis del decreto que oficializa a la Sierra de Picachos como Área Natural Protegida y lo que significa para su futuro.',
    content: `<p>by De la Maza Team/ septiembre 22, 2021 2907 Views  No Comments</p>
<p>Uncategorized</p>
<p>22 de septiembre de 2021</p>
<p>El Gobierno del Estado atendiendo la solicitud de la Asociación ecológica de la Sierra de Picachos AC, para la creación del Área Natural Protegida, “Ecosistema Sierra de Picachos”, el día de hoy publica el decreto mediante el cual constituye la citada ANP, con esto dan un ejemplo de colaboración entre la Sociedad Civil y Gobierno.</p>
<p>Área Natural Protegida “Ecosistemas de la Sierra Picachos” tiene una superficie de 99,432.49 hectáreas que se suman a las 75,872.55 hectáreas que ya estaban decretadas con anterioridad, en conjunto constituyen una superficie de 175,305.04 hectáreas.</p>
<img src="/images/sierra1.jpg" alt="Mapa del ANP Actual" class="my-6 rounded-lg shadow-md" />
<p><em>ANP Actual</em></p>
<img src="/images/sierra2.png" alt="Mapa del ANP Propuesta" class="my-6 rounded-lg shadow-md" />
<p><em>ANP Propuesta</em></p>
<p>Las Áreas Naturales Protegidas de la Sierra de Picachos, son un espacio geográfico reconocido y dedicado a la naturaleza y sus servicios. En conjunto son el Área Natural Protegida más grande de Nuevo León y una pieza fundamental en el equilibrio ecológico del norte de México, que busca su conservación a largo plazo.</p>
<img src="/images/sierra3.jpeg" alt="Sierra de Picachos" class="my-6 rounded-lg shadow-md" />
<p>Con esta nueva Área Natural Protegida la Sierra de Picachos prestara grandes servicios ambientales, como 52,500 hm3 de agua por año, 2,758,880 toneladas de CO2 por año, 365 días/año limpieza de aire, entre otros, además del apoyo al equilibrio ecológico de la flora y fauna silvestre, aire limpio, el ecoturismo y la preservación de los valores históricos y culturales de nuestro estado además de despertar la conciencia, fomentar la sensibilidad y el respeto por la naturaleza.</p>
<p>Es importante manifestar nuestro reconocimiento y agradecimiento al Gobernador del Estado, Ing. Jaime Rodríguez Calderón y a la Secretaría de Desarrollo Sustentable por su apoyo incondicional en esta acción que traerá grandes beneficios ambientales y sociales para Nuevo León.</p>
`,
    imageId: 'blog-decreto-picachos-cover',
    category: 'Noticias'
  },
  { id: 'post-9', slug: 'tenencia-legal-tierra-parques-nacionales', title: 'Tenencia legal de la tierra en Parques Nacionales', date: '22 de Septiembre, 2021', excerpt: 'Un examen de los complejos desafíos legales y sociales relacionados con la propiedad de la tierra en áreas protegidas.', content: `<img src="/images/tenencia 9.jpg" alt="Tenencia legal de la tierra" class="my-6 rounded-lg shadow-md" />
<p>La tenencia de la tierra en los parques nacionales mexicanos es probablemente el mayor reto para la conservación y el manejo de dichas áreas, toda vez que, contrario a la gran mayoría de los parques nacionales del mundo, en México un gran porcentaje de la tierra dentro de los parques nacionales se encuentra en manos de particulares y no de la federación. Ello se debe, primordialmente, al hecho de que la gran mayoría de los decretos de parque nacional no consideraron la expropiación como un paso fundamental para la consolidación de estos. Al contrario, en México se ha legislado y decretado por décadas bajo la premisa de que los parques nacionales son un bien público que debe ser protegido por la federación, pero cuya tenencia puede ser de particulares.</p>
<img src="/images/tenencia 8.jpg" alt="Tenencia legal de la tierra" class="my-6 rounded-lg shadow-md" />
<p>La historia de la tenencia de la tierra en los parques nacionales mexicanos es un tema tan interesante como complejo. La Ley Forestal de 1926 contempló por primera vez en la legislación mexicana la creación de parques nacionales. A partir de entonces, y sobre todo durante el sexenio de Lázaro Cárdenas (1934-1940), cuando se decretaron 38 de los 77 parques nacionales con los que actualmente cuenta el país, la figura de parque nacional ha sido una de las herramientas más importantes de la política de conservación en México (SEMARNAP 1996, Vargas 2000, SEMARNAT 2016).</p>
<img src="/images/tenencia 7.png" alt="Tabla 1" class="my-6 rounded-lg shadow-md" />
<p>Durante la primera mitad del siglo XX, en México no hubo una política de tierras aparejada a la de creación de parques nacionales; es decir, en la mayoría de los casos no se expropió ni se adquirió la tierra para la federación (Vargas 2000). Al contrario, los primeros decretos fueron simplemente declaratorias que limitaban el uso de la propiedad. Ello se debió a que muchos de los primeros parques nacionales (y todavía algunos de los más recientes) fueron decretados con la intención de protegerlos de los repartos agrarios (Warman 2003, Pineda 2008).</p>
<img src="/images/tenencia 6.png" alt="Tabla 2 leyes forestales" class="my-6 rounded-lg shadow-md" />
<p>Las declaratorias de parque nacional buscaban conservar los bosques que rodeaban a la Ciudad de México y otras importantes ciudades del país. Este fue el caso del Desierto de los Leones, el primer parque nacional de México decretado por Venustiano Carranza en 1917, cuya finalidad fue la de proteger los manantiales ahí existentes, los cuales abastecían de agua a la capital del país. También fue el caso de Cumbres de Monterrey, decretado originalmente en 1939 y re-decretado en el 2000, que hoy es el parque nacional más grande de México, con casi 180 mil hectáreas. Cumbres de Monterrey fue decretado para proteger de la expansión de la mancha urbana a las partes altas de la Sierra Madre Oriental, las cuales sirven de zona de recarga de los acuíferos que abastecen de agua a la tercera ciudad más grande de México (SEMARNAP 1996).</p>
<img src="/images/tenencia 5.jpg" alt="Declaración de Estocolmo" class="my-6 rounded-lg shadow-md" />
<p>En el caso del Parque Nacional Cumbres de Monterrey, el decreto del 2000 fue claro en establecer, en su artículo tercero, que “el establecimiento del parque nacional no implicará la expropiación de las tierras”. Al contrario, el mismo decreto faculta a la federación a promover y celebrar “acuerdos de concertación con los dueños y poseedores de los predios, así como con organizaciones sociales, públicas o privadas, con la finalidad de llevar a cabo las acciones necesarias para la conservación, restauración, protección e investigación” del parque nacional.</p>
<img src="/images/tenencia4.png" alt="Reglamento LGEEPA" class="my-6 rounded-lg shadow-md" />
<p>En 1988, la Ley General del Equilibrio Ecológico y Protección al Ambiente (LGEEPA) retomó el tema de la tenencia de la tierra en las áreas naturales protegidas. Sin embargo, no fue sino hasta el año 2000, con la publicación de su reglamento en materia de áreas naturales protegidas, que por primera vez la legislación mexicana estableció que “la federación, los estados y los municipios, en el ámbito de su competencia, realizarán los actos conducentes para adquirir el dominio de los terrenos que se requieran para el establecimiento, administración y desarrollo de las áreas naturales protegidas de su competencia” (Reglamento de la LGEEPA, en materia de ANP, artículo 21).</p>
<img src="/images/tenencia3.png" alt="Tabla 3 reglamentos de la LGEEPA" class="my-6 rounded-lg shadow-md" />
<p>Es importante señalar que la LGEEPA y su reglamento no distinguen entre las distintas categorías de áreas naturales protegidas para efectos de la tenencia de la tierra. Así, un parque nacional es tratado de la misma manera que un área de protección de flora y fauna, o una reserva de la biosfera. Sin embargo, en la práctica, no todos los tipos de área natural protegida requieren de la misma aproximación para el manejo del tema de la tenencia. Los parques nacionales, por ejemplo, al ser por lo general zonas núcleo que, de acuerdo con la Unión Mundial para la Conservación de la Naturaleza (UICN), deberían de ser propiedad de la nación (Vargas 2000), tendrían que ser objeto de una política de adquisición de tierras mucho más proactiva que la de otras categorías, como las reservas de la biosfera, en donde las actividades productivas de bajo impacto, incluyendo la agricultura y la ganadería, son permitidas en ciertas zonas de amortiguamiento (SEMARNAT 2016).</p>
<img src="/images/tenencia2.png" alt="Tabla de implicaciones" class="my-6 rounded-lg shadow-md" />
<p>Actualmente, de los 77 parques nacionales de México, por lo menos 37 de ellos (casi la mitad) presentan algún tipo de conflicto relacionado con la tenencia de la tierra. Dichos conflictos van desde invasiones y asentamientos humanos irregulares, hasta la tenencia legítima de la tierra por parte de particulares (CONANP 2018). Ello quiere decir que en más de la mitad de los parques nacionales de México, el gobierno federal no tiene la certeza jurídica que le permita invertir en su conservación y manejo, con el riesgo de que dichas inversiones se pierdan o no tengan el efecto deseado, al no ser el gobierno federal el propietario legítimo de las tierras.</p>
<p>Ante esta problemática, es indispensable que la CONANP, y la SEMARNAT en general, diseñen e implementen una estrategia de adquisición de tierras en parques nacionales que incluya, entre otros, los siguientes elementos: a) un diagnóstico preciso sobre la tenencia de la tierra en cada uno de los 77 parques nacionales de México; b) un plan de adquisición de tierras a corto, mediano y largo plazos, con metas claras y un presupuesto asignado para tal efecto; y c) un programa de monitoreo y evaluación de los avances y resultados del plan de adquisición.  Sin una estrategia clara y un presupuesto asignado para tal efecto, difícilmente se podrá avanzar en la consolidación de los parques nacionales de México, los cuales seguirán siendo, en muchos casos, “parques de papel”, con un futuro incierto en cuanto a su conservación a largo plazo.</p>
<img src="/images/tenencia1.jpg" alt="Recomendación" class="my-6 rounded-lg shadow-md" />
<h4>Referencias</h4>
<ul>
    <li>CONANP (2018). Comunicación personal con personal de la Dirección de Asuntos Jurídicos de la Comisión Nacional de Áreas Naturales Protegidas. Ciudad de México.</li>
    <li>Pineda, F. (2008). La política de creación de áreas naturales protegidas en México. Gaceta Ecológica, (87), 45-58.</li>
    <li>SEMARNAP (1996). Programa de áreas naturales protegidas de México, 1995-2000. México: Secretaría de Medio Ambiente, Recursos Naturales y Pesca.</li>
    <li>SEMARNAT (2016). Áreas naturales protegidas de México con decretos federales. México: Secretaría de Medio Ambiente y Recursos Naturales.</li>
    <li>Vargas, F. (2000). Parques nacionales de México. Aspectos históricos, legales y administrativos. En: Áreas naturales protegidas de México, una perspectiva. México: SEMARNAP, CONANP y PNUD.</li>
    <li>Warman, A. (2003). La reforma agraria mexicana: una visión de largo plazo. FAO.</li>
</ul>
`, imageId: 'blog-tenencia-tierra', category: 'Artículos' },
  {
    id: 'post-10',
    slug: 'etica-documental-naturaleza',
    title: 'La ética del documental de naturaleza',
    date: '17 de Septiembre, 2021',
    excerpt: 'Una discusión sobre las responsabilidades y dilemas éticos que enfrentan los cineastas de vida silvestre.',
    content: `<p>by Mauricio de la Maza-Benignos/ septiembre 17, 2021 2320 Views  No Comments</p>
<p>Artículos / Colaboradores</p>
<p>Por Mauricio de la Maza-Benignos</p>
<p>…aplicar los códigos de ética para los seres humanos a los seres otros que humanos es antropomorfizar a los seres vivos otros que humanos con quienes compartimos el planeta. Las especies animales y vegetales no se rigen bajo principios morales y códigos deontológicos, tal y como lo hacemos nosotros; sin embargo, sí requieren de un espacio vital que les permita vivir sus vidas sin sufrimiento ni estrés “artificial”.</p>
<p>…Desde mi perspectiva, existen circunstancias, formas y límites, en ocasiones no tan claros, que separan al cineasta ético del irresponsable o criminal a la hora de rodar documentales de naturaleza. A mi juicio, no deberían filmarse documentales de naturaleza cuyo fin primario no sea generar conocimiento, educar o crear consciencia para conservar, y ya en segunda instancia deleitar al espectador como efecto colateral.</p>
<p>A mi juicio, el documental de naturaleza es un medio ideal, altamente efectivo para educar y concientizar al público acerca del entorno, los servicios ambientales y la historia natural de los elementos bióticos y abióticos originarios y antropogénicos que integran el paisaje, si partimos de la noción de que el ser humano forma parte de la naturaleza.</p>
<p>En su quehacer, el documentalista ambiental se encuentra con distintos dilemas éticos a la hora de documentar su objeto de estudio, y aunque, en sentido estricto, quizá no haya códigos deontológicos para dicha profesión en sentido estricto, sí los existen para los profesionales de la comunicación. Estos por lo general tratan acerca del cumplimiento de ciertas reglas de conducta, incluyendo la profesionalidad, la defensa de la cultura periodística, o veracidad, entendida como “la búsqueda y rastreo de la autenticidad y exactitud de los datos informativos” (Suárez-Villegas, 2011).</p>
<p>En México, el derecho a la información (y a la libertad de expresión) se encuentran positivados desde 1977 en el artículo 6º constitucional que establece que “el derecho a la información será garantizado por el Estado''. El artículo 7º establece que “es inviolable la libertad de difundir opiniones, información e ideas, a través de cualquier medio […]. Ninguna ley ni autoridad puede establecer la previa censura, ni coartar la libertad de difusión, que no tiene más límites que los previstos en el primer párrafo del artículo 6º de esta Constitución”.</p>
<p>Del anterior precepto, además de los tratados internacionales, como la Convención Americana de Derechos Humanos, se desprende que el ''derecho a la información'' y sus inseparables complementos, como la “libertad de expresión”, comprende las facultades que tiene toda persona de buscar, recibir o difundir informaciones, opiniones o ideas por cualquier procedimiento que sea legal, incluyendo de manera oral o escrita, en forma impresa, artística o por cualquier otro procedimiento, la protección de la ''búsqueda'' y ''difusión'', así como la recepción de informaciones, opiniones o ideas por cualquier medio (Lopez-Ayllon, 2000).</p>
<p>A sensu contrario argumentaré que si bien, dentro del estado garantista, el derecho a la información y su complemento, el derecho a la libre expresión, son inherentes a la calidad de ser humano. También lo es que, el ser humano debe tener la plena facultad de reservarse sus ideas, sentimientos o hechos de su vida personal e íntima, así como de decidir con quien sí, y con quien no las comparte. Dicha premisa encuentra sustento jurídico, en, por mencionar dos fuentes, el Pacto Internacional de Derechos Civiles y Políticos (ONU), que establece en su artículo 17. “1. Nadie será objeto de injerencias arbitrarias o ilegales en su vida privada, su familia, su domicilio o su correspondencia, ni de ataques ilegales a su honra o reputación.  2. Toda persona tiene derecho a la protección de la ley contra esas injerencias y esos ataques”.</p>
<p>La Convención Americana sobre Derechos Humanos o Pacto de San José (OEA) preceptúa en su artículo 11 que, “1. Toda persona tiene derecho al respeto de su honra y al reconocimiento de su dignidad. 2. Nadie puede ser objeto de injerencias arbitrarias o abusivas en su vida privada, en la de su familia, en su domicilio, o en su correspondencia, ni de ataques ilegales a su honra y reputación. 3. Toda persona tiene derecho a la protección de la ley contra esas injerencias o esos ataques.”</p>
<p>De ahí que, el derecho a la información tiene como límites el decoro, el honor, el respeto, la circunspección, la honestidad, el recato, la honra y la estimación, pues regresando al artículo 6º constitucional, este otorga a toda persona el derecho de manifestar libremente sus ideas, “sino en el caso de que ataque a la moral, los derechos de terceros, provoque algún delito o perturbe el orden público”.</p>
<p>En dicho sentido, la Suprema Corte de Justicia de la Nación (SCJN) estimó que, la garantía de seguridad jurídica que nos otorga el artículo 16º de la constitución, de que todo gobernado “no puede ser molestado en la privacidad de su persona, de su intimidad familiar, o de sus papeles o posesiones sino en virtud de mandamiento escrito”, reconoce “el respeto a la vida privada, siendo una de las libertades tradicionales […]. Que tiene como finalidad principal el respeto a un ámbito de vida privada personal y familiar que, por regla general, debe quedar excluido del conocimiento ajeno y de las intromisiones de las demás, con la limitante que la propia Ley Fundamental establece para las autoridades. Incluyendo también a todas aquellas intromisiones o molestias que por cualquier medio puedan realizarse en el ámbito de la vida privada.”</p>
<p>Retomando el tema esencial del presente ensayo, Brett Mills de la Universidad de East Anglia considera que la deontología de los medios y la privacidad debería de extenderse más allá de los seres humanos al mundo animal; y cuestiona sin más: “Quizás sea aceptable filmar el evento de una caza, ¿pero inmiscuirse más?</p>
<p>Para Mills, “los animales no deberían de ser vistos por los cineastas como objetos legítimos de uso, de la misma manera como un acto no ético el filmar personas en secreto” (Coughlan, 2010).</p>
<p>Sin embargo, ¿Cómo se obtiene el consentimiento expreso de un animal silvestre para poder filmarlo? ¿Qué no acaso adjudicar atributos humanos a los seres vivos otros que humanos no es un acto de antropomorfismo que solo refuerza la visión antropocéntrica que tenemos del mundo? Desde mi perspectiva no tiene la misma cualidad moral espiar sin su consentimiento a una pareja de novios humanos en la intimidad, que observar el proceso de división celular de una amiba al microscopio.</p>
<p>Equipararlo sería atribuir cualidades humanas, como el derecho a la privacidad a una forma de vida tan básica, cuya dignidad no está siendo afectada, pues carece de conciencia moral. Y partiendo de este ejemplo, tal vez absurdo, vale cuestionarse: ¿qué es la privacidad en términos de los seres vivos otros que humanos?</p>
<p>Y si, conforme a la Real Academia Española, privacidad significa en su segunda acepción: “ámbito de la vida privada que se tiene derecho a proteger de cualquier intromisión”. ¿De qué ámbito estamos hablando cuando nos referimos a los seres vivos otros que humanos?</p>
<p>El derecho mexicano no reconoce personalidad jurídica ni a la naturaleza ni a los seres vivos otros que humanos; no obstante, estos sí son sujetos de derecho en sí mismos. Sucede algo así como los romanos que tampoco reconocían el carácter de persona (sujeto de derechos y obligaciones) a todos los seres humanos, pues el goce de la personalidad distinguía a los esclavos y las personas libres que se subdividían en ciudadanos y no ciudadanos, así como en ingenuos y libertinos, solo por mencionar algunos ejemplos. También separaba las alieni juris, o sometidas a la autoridad de un jefe, de las sui juris que dependían de ellas mismas.</p>
<p>Hoy existen en México leyes que buscan resguardar el equilibrio ecológico, así como leyes que procuran la protección y bienestar de los animales que, aunque substancialmente antropocéntricas, tienen como fin proteger a la biodiversidad, brindarle alojamiento, desarrollo natural, salud y evitarle el maltrato, la crueldad, el sufrimiento y la zoofilia, por mencionar algunas. No obstante, por ejemplo, las peleas de gallos o las corridas de toros siguen siendo legales. Vemos nuevamente que, más allá de los citados distingos, dichas leyes de observancia general y sus disposiciones son de orden público e interés social, otorgando la obligación a los seres humanos de “cuidar” a ciertos animales (generalmente se refieren a los domésticos y en menor grado a los de granja), más no les brindan a estos derechos en sentido estricto. Dicha situación, en el campo de la comunicación y la cinematografía nos remite por default a los campos de la deontología y la ética ambiental.</p>
<img src="/images/etica1.jpg" alt="Fotografía por Mauricio de la Maza-Benignos" class="my-6 rounded-lg shadow-md" />
<p>La ética ambiental es una rama de la filosofía, la cual se refiere a la extensión del constructo ético social hacia el resto de los seres vivos y sus hábitats. Fue inicialmente abordado en la década de los setenta en escritos de pensadores como Aldo Leopold, Garrett Hardin y Lynn White Jr., el último aseverado que la raíz de nuestra crisis ecológica es filosófica.</p>
<p>Existen corrientes deontológicas de la ética ambiental que limitan a los procesos y elementos naturales de manera independiente al valor utilitario que los seres humanos podemos tener sobre los mismos; y dentro de ésta, corrientes holísticas, así como corrientes individualistas, dependiendo de si se coloca a la especie como la unidad fundamental de la vida o de si el valor intrínseco de los seres vivos otros que humanos buscan, como lo hacemos nosotros, su bienestar individual.</p>
<p>Así, mientras que una corriente encabezada por Rolston Holmes, acepta el daño colateral al organismo en lo individual, por ejemplo, en el proceso de las colectas científicas con fines taxonómicos, pues estos son una mera representación de su especie que debe de ser preservada (Preston y Ouderkirk, 2006). La otra, encabezada por Paul W. Taylor, reconoce que como agentes morales en la toma de decisiones debemos de considerar el daño al organismo, que se traduce en el valor de respeto por la naturaleza, no interviniendo y haciendo uso de la racionalidad (Taylor 1986).</p>
<p>Para Leopold (1949), la ética de la tierra simplemente extiende los límites de la comunidad para incluir tierras, aguas, plantas, animales o colectivamente: la Tierra.</p>
<p>Ahora bien, desde una perspectiva antropocéntrica, hoy se reconoce la noción ética de un derecho fundamental a desenvolverse en un medio ambiente sano, entendido como uno conformado por todos sus elementos naturales, incluyendo la totalidad de especies que lo conforman. Es así como, desde mi perspectiva, una visión integral puede contemplarse desde un acercamiento ético/moral, fundados en referentes constitucionales de derecho a un medio ambiente íntegro.</p>
<p>Desde una perspectiva axiológica, una ética medio ambiental que guíe la relación económica con la tierra, presupone la existencia de alguna imagen mental de la tierra concebida como un mecanismo biótico (Leopold, 1949). Esta visión también ha sido reconocida históricamente tanto por las doctrinas y creencias panteístas, como por algunas de las principales religiones institucionalizadas. “Muchos hábitats de la Tierra, animales, plantas, insectos y hasta microorganismos que conocemos como inusuales o en peligro, pueden no ser conocidos en absoluto por futuras generaciones. Tenemos la capacidad y la responsabilidad. Debemos actuar antes de que sea demasiado tarde”. (Dalai Lama, 1986); o bien, “Los recursos de la tierra están siendo depredados a causa de formas inmediatistas de entender la economía y la actividad comercial y productiva. Las especies contienen genes que pueden ser clave para resolver en el futuro ciertas necesidades humanas o regular problemas ambientales. No basta pensar en ellas solo como eventuales recursos explotables, pues tienen un valor en sí mismas. Se están extinguiendo por razones que tienen que ver con las acciones humanas. No tenemos derecho” (Francisco, 2015).</p>
<p>Así, el papa Francisco va más allá al afirmar en su encíclica \'\'\'Laudato si\'\'\'\' la naturaleza jurídica del medio ambiente, pues al rechazar el “derecho” a afectar la naturaleza, el papa en sensu contrario, está reconociendo no solo a nuestra obligación de cuidarla y protegerla, sino a los derechos inherentes a la misma.</p>
<p>Aunque limitado a una obligación de hacer con fuertes tintes antropocéntricos, nuestra constitución preceptúa el derecho humano a un medio ambiente sano, mismo que, en el derecho positivo, nos obliga a cuidar de la naturaleza. Lo mismo sucede en el ámbito supranacional, a través de las convenciones y tratados internacionales de los que México es signatario. Desde una perspectiva de Derecho: Toda persona debe tener la posibilidad de disfrutar de un medio ambiente sano para su desarrollo y bienestar. El Estado garantizará el respeto a este derecho. El daño y deterioro ambiental generará responsabilidad para quien lo provoque en términos de lo dispuesto por la ley (4° Constitucional, párrafo 5°).</p>
<p>Así, en el ámbito supranacional, algunos de los tratados de los que México forma parte incluyen:</p>
<p>RAMSAR: busca la conservación y el uso racional de los humedales mediante acciones locales y nacionales y gracias a la cooperación internacional, como contribución al logro de un desarrollo sostenible en todo el mundo; esto debido a que los humedales están entre los ecosistemas más diversos y productivos. Los humedales suministran toda nuestra agua potable. Su degradación y conversión continúan.</p>
<p>Convenio de Diversidad Biológica (5 de junio de 1992): Conservación de la biodiversidad, utilización sostenible de sus componentes, participación justa y equitativa en los beneficios que derivan de la utilización de los recursos genéticos; para promover un futuro sostenible.</p>
<p>Marco de las Naciones Unidas sobre el Cambio Climático: México firma la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC) en 1992 y ese mismo año es aprobada unánimemente por la Cámara de Senadores del H. Congreso de la Unión.</p>
<p>El uso de animales en el cine, tal y como lo documentó McKeown (1981). En el documental “Cruel camera”, ha sido sumamente inhumano y cruel. Por ejemplo, en éste mismo, a la pregunta de “¿Dado el caso que el productor tiene que escoger entre contratar a un buen entrenador de animales o cometer un acto de crueldad a algún animal para ahorrar dinero? En alrededor del minuto 8:31 de dicho documental, Peter Carter, exdirector de la CBC, poco antes de su muerte, respondió que, aunque él no está de acuerdo con ello, está consciente de directores que preferían sacrificar a un animal para obtener una buena toma, sin embargo, prefirió no dar nombres. “Se dé casos en que algún animal es sacrificado de acuerdo al guion, y en lugar de simular el sacrificio este es llevado a cabo, es más barato y fácil”.</p>
<p>En el mismo film (McKeown, 1981), y Palmer más tarde en 2011, documenta cómo Walt Disney, considerado el “creador” de los filmes comerciales de vida silvestre, muestra (minutos 16:11 a 17:51) la existencia de tomas crueles de supuestos eventos “naturales” que fueron “montadas” por dicha casa productora con el propósito de “entretener a una audiencia”. Tanto como en el film White Wilderness donde además del oso rodando por una colina, se muestra un falso montaje de lemmings “suicidándose” en masa (minutos 22:56 al 26:36); así como la película Perry la ardilla, en la cual fueron sacrificadas cruelmente un número importante de dichos ejemplares en sets artificiales, como se aprecia en los minutos 27:09 a 27:52 del documental.</p>
<p>Más tarde en 1967, se hizo famosa la secuencia fotográfica de John Dominis (1921-2013), que apareció en la revista Life, de un leopardo cazando a un babuino aterrado y destrozando su cráneo. Luego se supo que se trató de un montaje para el cual el leopardo había sido rentado y el babuino previamente capturado. No obstante, de acuerdo a la revista, “en aquellos tiempos no se oponían a realizar montajes que de otro modo eran imposibles de obtener” (Life, S.F).</p>
<img src="/images/etica2.jpg" alt="Leopardo y babuino" class="my-6 rounded-lg shadow-md" />
<p><em>Fotografía por John Dominis. «Leopardo a punto de matar a un babuino aterrorizado», 1966. Revista Life</em></p>
<p>Y aunque hoy los sets “naturales” montados en estudio siguen siendo utilizados en la cinematografía para obtener primeros planos de tomas increíbles, afortunadamente, la crueldad deliberada hacia los animales se ha vuelto algo inaceptable e ilegal, el público exige que se le informe cuando las tomas son hechas en sets artificiales, y por lo menos, en México y los EEUU y México, gracias a organizaciones como el American Humain Association, (https://www.americanhumane.org/program/humane-hollywood/) los cineastas estamos obligados, al menos en el set, a tratar a los animales actores con respeto y dignidad.</p>
<p>Al igual que Palmer (2011) en su experiencia con un primer plano de un oso grizzli, durante mi trabajo de filmación me he visto en la necesidad de utilizar Foleys (efectos especiales) para dar cierto grado de realismo, por ejemplo, al sonido de batir de alas de una codorniz que filmé a casi 50 metros de distancia con una telefoto; y al igual que la esposa de Palmer, cuando expliqué el efecto especial a un colega, su reacción fue “qué tramposo…”, pues el público espera autenticidad y veracidad de un documental de naturaleza.</p>
<p>Para Palmer (2011) los ejemplos anteriores ilustran tres formas distintas de problemas éticos: Primero, el engaño a la audiencia mediante el montaje y la manipulación; segundo, el maltrato y la crueldad hacia los animales y el hábitat; y tercero, un tema ético a su juicio, “más sutil, pero, sin embargo, vital”: ¿Los documentales de la naturaleza fomentan la conservación? Agregaré uno más: ¿Hasta qué grado debe o puede interactuar el documentalista con el objeto de estudio sin invadir su privacidad?</p>
<p>En lo relativo al tercer punto sensu Palmer (2011), no me cabe la menor duda que los documentales de naturaleza son una fuente de investigación, conocimiento y concientización del público, que le permiten al espectador “viajar” a lugares remotos, y contribuyen a acercar la naturaleza a las masas citadinas; por lo que atienden a un bien mucho mayor que el mal que causan, cuando estos se filman de manera respetuosa y responsable. ¿De qué otra manera se puede concientizar a las masas para que conozcan, amen y respeten la naturaleza, sin la necesidad de tener animales cautivos en zoos? Dicho lo anterior, coincido con Palmer (2011). Presentar a los animales “salvajes” como fieras malvadas, como sucede en producciones como “Cara a cara con el Peligro” y “A prueba de todo” de Animal Planet, apelan al morbo, y hacen aún más difícil la tarea de convencer al público sobre la necesidad de proteger a estos animales.</p>
<p>En cuanto al segundo punto, argumentaré que no existe justificación alguna para causar daño o maltrato a ningún ser vivo con fines lúdicos. Es simple y llanamente inmoral. “Sin embargo, muchos conductores de televisión como Jeff Corwin, Bear Grylls o hasta el difunto Steve Irwin, todavía atrapaban y acosan a los animales para crear entretenimiento” (Palmer, 2011).</p>
<p>En cuanto al primero, relativo al “engaño” a la audiencia mediante el uso de sets, montajes, o Foleys, argumentaré, asumiendo que no se causa involuntariamente, ni de forma deliberada sufrimiento o estrés a ningún ser sintiente, que el problema ético no corresponde al montaje, sino al engaño que este produce; por lo que, si se le informa al público acerca del mismo, entonces el problema deja de ser uno de ética para convertirse en uno de naturaleza técnica.</p>
<p>Resulta casi imposible para el cineasta operar efectivamente sin intervenir en los procesos naturales de forma directa o indirecta, sin dejar huella de su trabajo en el entorno. El documentalista de naturaleza se ve obligado a interactuar dentro y con los ecosistemas que pretende documentar. Dicha actividad resulta por naturaleza intrusiva. Sin embargo, existen de intrusiones a intrusiones.</p>
<p>En su artículo, «The Moral Pivots of Wildlife Filmmaking» Boswall (1997) considera que cualquier cosa que provoque que un animal se comporte de manera anormal, por ejemplo, cebarlo, lanzar carnada, etc. constituye engaño a la audiencia. Juntar a dos especies que normalmente no interactúan es engañar; como también no es ético que el equipo de filmación interfiera con el comportamiento de los animales, por ejemplo, espantando una parvada de flamencos, o acercarse demasiado al nido de un ave (Palmer, 2011).</p>
<img src="/images/etica3.jpg" alt="Ave en su nido" class="my-6 rounded-lg shadow-md" />
<p><em>Fotografía por Mauricio de la Maza-Benignos</em></p>
<p>Estoy convencido de que, aplicar los códigos de ética para los seres humanos a los seres otros que humanos es antropomorfizar a los seres vivos otros que humanos con quienes compartimos el planeta. Las especies animales y vegetales no se rigen bajo principios morales y códigos deontológicos, tal y como lo hacemos nosotros; sin embargo, sí requieren de un espacio vital que les permita vivir sus vidas sin sufrimiento ni estrés “artificial”.</p>
<p>Los documentales de naturaleza siguen siendo un medio altamente efectivo para educar y concientizar al público acerca del entorno natural, los servicios ambientales y la historia natural de los elementos bióticos y abióticos que constituyen el paisaje. Sin embargo, hoy más que nunca, el cineasta ambiental se encuentra con distintos dilemas éticos a la hora de documentar su objeto de estudio.</p>
<p>Es en realidad poco lo que se ha escrito acerca de la validez y la ética del documentalista hacia el entorno que pretende documentar. También es un hecho que el público es atraído por escenas de caza, cortejo y violencia dentro del reino animal que en muchas ocasiones apelan, no a las emociones que llegan a la conciencia, sino por el contrario, al morbo que genera la cara más violenta del mundo natural.</p>
<p>La tecnología fílmica ha avanzado mucho en las últimas dos décadas. Formatos amplios como 8K, telefotos más accesibles y de excelente calidad, drones, etc. que nos permiten acercarnos como nunca antes al objeto de estudio sin que este se percate, siquiera, de nuestra presencia. Sin embargo, en un escenario totalmente natural, captar ese instante especial, ese gran momento, esa toma irrepetible, sigue siendo cuestión de suerte, que puede llevar a la quiebra la más reconocida productora. Es por ello que, más allá del consenso casi generalizado de que es inaceptable, bajo cualquier circunstancia maltratar o dañar a propósito a otros seres vivos con el propósito de obtener una buena toma, es una realidad que, en ocasiones, sigue siendo “necesario” hacer uso, desde llamados y señuelos para atraer depredadores, hasta la invasión del espacio del objeto de filmación, por ejemplo, con el uso de drones para poder obtener “la toma”. Estos aspectos son dignos de explorarse desde una perspectiva ética y práctica, que obligue, más allá de lo que exige la ley, al cineasta a preguntarse cuáles comportamientos son éticos y dónde está la línea que divide lo inmoral de lo aceptable durante la documentación de los aspectos relativos a la historia natural. ¿Es válido, cómo y cuándo apelar a la emoción? ¿O simplemente al morbo, siendo que la naturaleza en ocasiones puede llegar a parecer extremadamente cruel?</p>
<p>Desde mi perspectiva, existen circunstancias, formas y límites en ocasiones no tan claros, que separan al cineasta ético del irresponsable o criminal a la hora de rodar documentales de naturaleza. A mi juicio, no deberían filmarse documentales de naturaleza cuyo fin primario no sea generar conocimiento, educar o crear consciencia para conservar, y ya en segunda instancia, deleitar al espectador como efecto colateral.</p>
<p>El cineasta de naturaleza debería aproximarse hacia los ecosistemas, paisajes y sus componentes, incluyendo su flora y fauna con gran respeto a la hora de documentar y siempre preguntarse: ¿El fin justifica los medios?</p>
<p>Frente a las expectativas del público, las tomas espectaculares de naturaleza exigen decisiones con alto grado ético que en muchas ocasiones ponen al documentalista íntegro en una clara desventaja frente al documentalista deshonesto.</p>
<p>Partiendo de la imposibilidad, salvo en raras ocasiones de filmar aspectos de la naturaleza sin interferir en los procesos naturales, debido a la presencia misma del equipo de filmación, ¿hasta qué punto resulta aceptable invadir paisajes o los espacios vitales de los otros seres vivos para captar momentos dramáticos? En el caso de los montajes, por ejemplo, cuando se utilizan animales en cautiverio, ¿cómo se debe abordar el tema sin engañar al público?</p>
<img src="/images/etica 4.jpg" alt="Cineasta en acción" class="my-6 rounded-lg shadow-md" />
<p>Y citando a Palmer (2011), “el documentalista de vida silvestre tiene la responsabilidad de mostrar el mundo natural como es y de una manera en la que inspire a la gente a preservarlo”. No se vale engañar. Desde mi perspectiva, es un deber informar al público acerca del uso de “trucos” cinematográficos en el documental, incluyendo el uso de Foleys o efectos especiales, pues solo así, podemos evitar caer en el engaño y la manipulación de audiencias.</p>
<h4>Bibliografía:</h4>
<ul>
<li>Boswall, J. (1997).The Moral Pivots of Wildlife Filmmaking. EBU Diffusion (Summer):9-12.</li>
<li>Coughlan, S. (2010). Animals need 'right to privacy' from wildlife films. BBC News. https://www.bbc.com/news/10093327</li>
<li>Christopher J. Preston & Wayne Ouderkirk (2006) Nature, Value, Duty: Life on Earth with Holmes Rolston, III. Springer Science & Business Media, 280 pp.</li>
<li>Leopold, A. (1949). The Land Ethic. https://www.uky.edu/~rsand1/china2017/library/Leopold1.pdf</li>
<li>Life (S.F.) The Photography of John Dominis. https://www.life.com/photographer/john-dominis/</li>
<li>López-Ayllon (2000) El derecho a la información como derecho fundamental. UNAM. https://archivos.juridicas.unam.mx/www/bjv/libros/1/7/5.pdf</li>
<li>McKeown B. (1981). Cruel camera. A documentary about animals in movies. TV Series: “The Fifth Estate” (1981). Original Air Date 5 May 1982. https://www.youtube.com/watch?v=DG4jnhrSukQ</li>
<li>Palmer, C. (2011). Salvaje: Documentalistas de la Naturaleza Necesitan un Codigo de Conducta. International Documentary Association. https://www.documentary.org/feature/la-etica-dentro-de-la-vida-salvaje-documentalistas-de-la-naturaleza-necesitan-un-codigo-de</li>
<li>Taylor, P.W. (1986). Respect for Nature: A Theory of Environmental Ethics. Princeton University Press, 329 pp.</li>
<li>Universidad de Sevilla. (2011) La ética de la comunicación a comienzo del siglo XXI. Libro de actas I congreso internacional de ética de la comunicación. Facultad de Comunicación.</li>
</ul>
`,
    imageId: 'blog-etica-documental-cover-new',
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
    bio: 'Ha publicado su trabajo de crítica en diversos medios como Doble Rodada, Vocanova, Correspondencias y el Festival de cine Transcinema.',
    image: '/images/jose.jpg'
  },
  {
    name: 'David Jaramillo',
    title: 'Realizador Audiovisual',
    bio: 'Realizó su ópera prima titulada: “Cuatro Ciénegas”, exhibida en la FIL de Guadalajara, en el FICG33 y ECOZINE, Zaragoza España, 2019.',
    image: '/images/david.jpeg'
  },
  {
    name: 'Claudia Luna Fuentes',
    title: 'Comunicóloga y escritora',
    bio: 'Comunicóloga, maestra en Historia de la Sociedad Contemporánea y directora de Divulgación Científica en el Museo del Desierto.',
    image: '/images/claudia.jpeg'
  },
  {
    name: 'Kenia Álvarez Rentería',
    title: 'Abogada y consultora',
    bio: 'Licenciada en Derecho con mención especial y Maestra en Derecho por la Universidad Autónoma de Chihuahua.',
    image: '/images/kenia.png'
  }
];
