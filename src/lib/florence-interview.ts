export type Bilingual = { es: string; en: string };

export type InterviewBlock =
  | { type: 'image'; src: string; caption: Bilingual }
  | { type: 'intro'; text: Bilingual }
  | { type: 'qa'; q: Bilingual; a: { es: string[]; en: string[] } };

export const florenceInterview: InterviewBlock[] = [
  {
    type: 'image',
    src: '/images/prensa/florence/imagen1-dirigiendo.png',
    caption: {
      es: 'En el Wildlife Conservation Film Festival',
      en: 'At the Wildlife Conservation Film Festival',
    },
  },
  {
    type: 'intro',
    text: {
      es: 'Siempre me consideré una combinación de artista, activista, científico y emprendedor, razón por la cual, tras obtener mi primer título universitario en Ingeniería Agrícola, agronomía y zootecnia en el Tec de Monterrey, en México, sentí la necesidad de cursar un MBA Internacional en Lancaster que me permitiera adquirir la experiencia y las herramientas internacionales necesarias para construir una carrera internacional multidisciplinaria fructífera relacionada con lo que más amaba: la naturaleza. He publicado artículos científicos en diversas revistas internacionales relacionados con zoología, he editado libros en distintos campos académicos, he desarrollado análisis legales y trabajo de política pública sobre agua dulce, el medio ambiente y el desarrollo sostenible, y he producido, dirigido y participado en el rodaje de un número importante de cortometrajes, incluido uno con BBC Nature, y un documental de naturaleza de largometraje ganador de premios. Actualmente soy dueño y dirijo "De la Maza Consulting and Films".',
      en: 'I always regarded myself as a combination of an artist, an activist, a scientist, and an entrepreneur which is why, after I obtained my first college degree in Agricultural Engineering, agronomy and animal science from the Monterrey Tech in Mexico, I felt the need to pursue an International MBA at Lancaster that would allow me to acquire the necessary international experience and tools to pursue fruitful multi-disciplinary international career related to what I loved most: nature. I have published scientific papers in various international journals, related to zoology, edited books in various academic fields, developed legal analysis and policy work on freshwater, the natural environment and sustainable development, and produced, directed and assisted in filming a significant number of short films, including one with BBC Nature, and an award-winning feature nature documentary film. Currently I own and direct "De la Maza Consulting and Films".',
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Cuándo te diste cuenta de que querías ser cineasta, actor o escritor?',
      en: 'When did you realize you wanted to be a Filmmaker / Actor / Writer?',
    },
    a: {
      es: [
        'Desde que tengo memoria, siempre soñé con convertirme en cineasta. Pero eso era justamente lo que era: una fantasía. Seré muy honesto, tenía otros sueños relacionados con otros temas, incluyendo la ciencia y las artes. Pero, ¿acaso el cine no tiene ambos elementos, ciencia y arte? Como niño amante de la naturaleza, solía salir al campo, explorar y observar la vida silvestre y la naturaleza. A veces llevaba conmigo mi cámara fotográfica y un par de rollos de 35 mm. Debía tener entre 6 y 10 años. Unos años después, a mediados de los años 80, mi papá trajo a casa una cámara video8 que empecé a llevar conmigo para documentar la naturaleza y el comportamiento animal. Así que, sin saberlo, me había convertido en documentalista a los 15 años. Sin embargo, la vida tomó otro rumbo hasta que, curiosamente, fue el cine documental de naturaleza lo que me trajo de vuelta décadas después, cuando, como biólogo de campo dedicado a la conservación, tuve la oportunidad de colaborar en la realización de un documental de vida silvestre de BBC-Nature. Nuevamente, me enamoré del cine.',
      ],
      en: [
        'As far back as I can remember, I always dreamed of becoming a filmmaker. But that is what it was: a fantasy. I´ll be very honest, I had other dreams, related to other topics including science and arts. But then, doesn´t filmmaking has both elements, science, and art? As a boy that loved nature I would go out to the countryside, explore, and observe wildlife and nature. Sometimes I would take my stills photography camera with me, and a couple of 35 mm rolls. I must have been around 6 and 10 years old. A few years later, in the mid-80s, my dad brought home a video8 camcorder which I started taking out with me to document nature and animal behavior. So, I guess unknowingly, I had become a documentary filmmaker at the age of 15. However life took another course until curiously, it was nature documentary filmmaking that brought me back in course decades later, while, as a field conservation biologist I had the opportunity to collaborate in the making of a BBC-Nature wildlife documentary film. Again, I fell in love with filmmaking.',
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Recuerdas tu primera vez en el cine?',
      en: 'Do you remember your first time at the Movies?',
    },
    a: {
      es: [
        'Mis padres me habrían llevado al cine cuando era muy pequeño; pero fue hacia finales de 1975 o 1976 (las películas llegaban a México más tarde que su estreno en Estados Unidos en aquella época) cuando mi papá nos coló a mi hermano menor y a mí, siendo entonces clasificación B (equivalente a PG-13), a ver la película de Steven Spielberg, Tiburón. Y, vaya, quedé impresionado con los efectos especiales, aunque no muy contento por el tiburón.',
      ],
      en: [
        "My parents would have taken me to the movie theater as very young boy; but it was around late 1975 or 1976, (movies reached Mexico at a later date from their release in the US at the time) that my dad smuggled my younger brother and I into then B (PG-13 equivalent) rated, Steven Spielberg's movie Jaws. And, wow, was I impressed with the special effects, but not happy for the shark.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'Si tuvieras que cambiar de país, ¿dónde te gustaría trabajar?',
      en: 'If you should change country, where would you like to work?',
    },
    a: {
      es: [
        'Amo trabajar y siempre elijo mi país, México. Es un reto, pero también muy gratificante. He tenido la oportunidad de vivir, estudiar y trabajar en el extranjero, en distintos países de Europa, América, Asia y África. Supongo que guardo en el corazón un pedazo de cada país en el que he estado. Amo Italia, su gente, su cultura y su comida; el neorrealismo italiano ha sido una fuente de inspiración en mi trabajo. Roberto Rossellini, Vittorio De Sica... ¡Vaya! Hicieron lo mejor con recursos limitados, llevaron una mezcla de actores profesionales y no profesionales al set... A veces, cuando me doy cuenta de cuán pocos recursos financieros y materiales tengo a mi disposición, he sentido casi la tentación de abandonar en medio de una producción... Entonces pienso en esos tipos, en lo que lograron con lo que tenían; y vuelvo al set renovado, lleno de energía positiva. El talento, la voluntad y el amor por lo que haces son mucho más importantes que el presupuesto en sí. El cine es una forma de expresión artística, y todas las formas de arte son intrínsecamente hermosas. Volviendo a la pregunta, amo Italia, y me encantaría trabajar ahí.',
      ],
      en: [
        'I love to work and always chose my country, Mexico. It\'s challenging, but also very rewarding. I had the opportunity to live, study and work abroad, in different countries in Europe, the Americas. Asia and Africa. I guess I have kept in my heart a piece of every country where I have been. I love Italy, its people, culture, and food; Italian Neorealism films have been a source of inspiration in my work. Roberto Rossellini, Vittorio De Sica... Wow! They made the best with limited resources, brought a mix of professional and nonprofessional actors to the set... Sometimes, when I realize how few financial and material resources I have at my disposal; I have felt almost compelled to quit in the middle of a production... Then, I think of those guys, what they did with what they had; Then, I go back to the set filling renewed, filled with positive energy. Talent, will, and love for what you do are much more important than the budget itself. Filmmaking is a form of artistic expression, and all forms of art are intrinsically beautiful. Returning to the question, I love Italy, and I would love to work there.',
      ],
    },
  },
  {
    type: 'image',
    src: '/images/prensa/florence/imagen2-detras-camaras.png',
    caption: {
      es: 'Detrás de cámaras',
      en: 'Behind the scenes',
    },
  },
  {
    type: 'qa',
    q: {
      es: 'Dos películas que han marcado tu vida, para bien o para mal...',
      en: 'Two films that have marked your life for better or for worse...',
    },
    a: {
      es: [
        'En línea con lo que mencioné antes, no creo que existan, en términos absolutos, películas buenas o malas. Hay películas técnicamente mejor hechas que otras; películas que se apegan más a los cánones que otras; hay historias que a uno le pueden parecer más atractivas que otras; y hay estilos con los que uno se identifica más que con otros. Dicho esto, El Padrino, Alguien voló sobre el nido del cuco y El resplandor (y supongo que Jack Nicholson es lo que hizo que asociara estas dos últimas) me marcaron, no sabría explicar por qué, supongo que representan historias muy bien contadas. Por otro lado, las películas de culto de bajo presupuesto protagonizadas y producidas por el luchador mexicano Santo también me marcaron, supongo que por razones distintas. Recuerdo a mi familia y a mí sentados cada domingo por la mañana frente al televisor en blanco y negro viendo a Santo, con su máscara y capa plateadas, luchando contra vampiros, momias y hombres lobo, entre otras criaturas; ¡a veces se veían en pantalla murciélagos, arañas o algunas criaturas literalmente colgando de un hilo! Efectos especiales terribles, dirían algunos, pero gran narrativa, dirían otros. Supongo que cumplieron su propósito.',
      ],
      en: [
        "In line with what I mentioned above, I don´t think that there are, in absolute terms, good or bad films. There are films which are technically better made than others; films that stick more to canons than others. there are stories that one could find more appealing than others; and there are styles that one may identify with more than with others. In that order of ideas, The Godfather, One Flew Over the Cuckoo's Nest and The Shining (and I guess Jack Nicholson is what made me associate the last two) marked me, I cannot explain why, I guess they represent very well told stories. On the other hand, the low budget cult films produced and acted by Mexican wrestler Santo also marked me, I guess for different reasons. I remember my family and I sitting every Sunday morning around the black and white TV watching Santo, wearing his silver mask and cape, wrestling vampires, mommies, and werewolves among other creatures; as sometimes bats, spiders or some critters literally hung from a piece of string that could be seen on screen! Terrible special effects some would say, buy great story telling, would say others. I guess, they met their purpose.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Qué opinas de las escuelas de actuación o de cine?',
      en: 'What do you think about Acting / filmmaking schools?',
    },
    a: {
      es: [
        'Preguntas interesantes. En mi vida, siempre me he lanzado a hacer cosas nuevas de manera autodidacta, casi intuitiva (el cine no fue la excepción), para luego encontrarme haciendo estudios formales un par de años después. Empecé a hacer cine primero y estudié una maestría en Dirección de Cine años más tarde. La escuela es un lugar donde uno puede sentarse, relajarse y mirar atrás, para reflexionar sobre lo que hacía. Es un lugar donde puedes ampliar tu conocimiento, aprender teoría, interactuar con expertos académicos y con tus pares, y fortalecer tus bases para el trabajo futuro. Dicho esto, no creo que la escuela sustituya la práctica; y siempre existe el riesgo de adquirir hábitos ligados a ciertos paradigmas que no adquirirías si simplemente sales a hacer las cosas. La escuela puede ser un arma de doble filo; pero también puede ser una gran fuente de recursos cognitivos, técnicos e intelectuales que serían muy difíciles de adquirir de manera estrictamente empírica y autodidacta.',
        'En cuanto a la actuación, disfruto haciendo algunos cameos en mis películas, pero me considero un actor no muy bueno. Aun así, he tomado cursos de actuación en la escuela de cine (lo cual probablemente no me hizo mejor actor). Dicho esto, me he familiarizado con distintos métodos; y he observado, como en casi toda disciplina, algunos debates apasionados entre seguidores de un método y devotos de otro. Por ejemplo, Stanislavski contra los seguidores del método, por mencionar dos. Creo que, como director, entender la esencia de los distintos métodos facilita la interacción con los actores y su dirección, independientemente de la técnica actoral que prefieran.',
      ],
      en: [
        'Interesting questions. In my life, I have always engaged into doing new activities in a self-taught almost intuitive manner (filmmaking was not the exception) only to find myself doing formal studies a couple of years later. I began filmmaking first and studied a master\'s degree in film Directing years later. School is a place where one can sit, relax, and look back, to reflect on what you were doing. It is a place where you can enhance your knowledge, learn theory, interact with academic experts and with peers, and strengthen your bases for future work. Said so, I don´t think that school substitutes practice; and there is always the risk of acquiring paradigm related habits that you would not if you just go out there and get things done. School can be a two-edged sword; but it can also be a great source of cognitive, technical, and intellectual resources that would be very difficult to acquire on a strictly empirical, self-taught basis.',
        'As for acting, I enjoy doing some cameos in my films, but I regard myself as a not very good actor. Nonetheless, I have taken acting courses in film school (which probably did not make me a better actor). Said so, I have familiarized myself with different methods; and observed, like in almost every discipline, some passionate debates between followers of one method and devotees of a different one. For example, Stanislavski vs method people, to mention two. I believe that as director, understanding the essence of the different methods facilitates the interaction with the actors, and their directing, independent of their preferred acting techniques.',
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'François Truffaut solía pensar que "los amantes del cine son gente enferma"... ¿tenía razón?',
      en: 'François Truffaut used to think that "Film Lovers are sick people"... was he right?',
    },
    a: {
      es: [
        'Toda la gente está enferma. Empezamos a morir desde el momento en que nacemos... pero sí, unos mueren más rápido que otros, y algunos, incluyendo a los amantes del cine, suelen estar más enfermos que otros... Cuando le mostré el primer corte de Cora a un buen amigo mío, lo primero que se le vino a la mente fue decir: ¡Estás enfermo! Y supongo que lo estoy. Supongo que todos los verdaderos artistas están enfermos de una manera única. Y creo que estar enfermo en el sentido de Truffaut no es malo. La creatividad y el arte emergen del alma. Un alma típica solo puede crear arte típico. Un alma atípica producirá expresiones artísticas sobresalientes, fuera de lo común.',
      ],
      en: [
        "All people are sick. We begin to die from the moment we are born... but yes, some are dying faster than others, and some, including film lovers, are usually sicker than others... When I showed the first cut of Cora to a good friend of mine, the first thing that popped to his mind was saying: You are sick! And I guess I am. I guess all true artists are uniquely sick. And I think that being sick in Truffaut's sense, is not bad. Creativity and art come emerge from the soul. A typical soul can only create typical art. An atypical soul will produce outstanding, out of the box artistical expressions.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'Cierra los ojos... si digo "Cine", ¿qué ves?',
      en: 'Close your eyes... if I say "Cinema" what do you see?',
    },
    a: {
      es: ['Veo a un grupo de personas distintas inmersas en un sueño común.'],
      en: ['I see a group of different people immersed in a common dream.'],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Quién es el director, actor o escritor que más te ha enseñado?',
      en: "Who's the Director / Actor / Writer that taught you the most?",
    },
    a: {
      es: [
        'Encuentro mi inspiración en muchos de los clásicos. Mi película Diálogos de la Muerte fue un homenaje a Nosferatu de Murnau y al expresionismo alemán; en esa misma película, también recurrí (o al menos me inspiré) en la idea del montaje metafórico de Eisenstein... Mi cortometraje experimental Apocalypsis de Esdras se inspiró en el trabajo de Roberto Rossellini... Los disruptivos jump-cuts de Godard (en su momento) han sido una fuente de inspiración para mí... El psicópata de Javier Bardem, Anton Chigurh, en la película No Country for Old Men, inspiró la creación de mi villano, El Morroño, en Cora... para quien, por cierto, ya comencé a escribir una secuela... Y en cuanto a escritores... esa es una pregunta difícil, pero Tennessee Williams sin duda está en mi lista.',
      ],
      en: [
        "I find my inspiration in many of the classics. My film Dialogues of Death was a tribute to Murnau's Nosferatu and German Expressionism; in that same film, I also recurred (or at least was inspired) to Eisenstein´s idea of Metaphoric editing techniques... My experimental shortfilm Apocalypsis de Esdras, was inspired in Roberto Rossellini's work. Godard and his (at the time) disruptive jump-cuts have been a source of inspiration to me... Javier Bardem's psychopath, Anton Chigurh in the movie No Country for Old Men, inspired my creation of my villain, El Morroño in Cora... for whom by the way, I already began to write a sequel... And writers... that is difficult question, but Tennessee Williams for sure is in my list.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'Sobre tu trabajo, cuéntanos tu mayor sueño y tu peor pesadilla...',
      en: 'About your job, tell us your biggest dream and your worst nightmare...',
    },
    a: {
      es: [
        'Mi mayor sueño es poder seguir creando y contando historias a través del cine por mucho tiempo. Mi peor pesadilla es no ser comprendido, no por mi visión atípica del mundo, sino por no lograr comunicar mis ideas en uno de los pocos lenguajes que, como Hermes en la mitología griega, pueden superar las barreras (lingüísticas).',
      ],
      en: [
        'My biggest dream is to be able to continue creating and telling stories through filmmaking for a long time. My worst nightmare is not to be understood, not because my atypical view of the world, but because I failed to communicate my ideas in one of the few languages that, like Hermes in Greek mythology, can overcome (linguistic) barriers.',
      ],
    },
  },
  {
    type: 'image',
    src: '/images/prensa/florence/imagen3-con-elenco.png',
    caption: {
      es: 'En el set con el elenco',
      en: 'On set with the cast',
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Qué tan importante es tener una buena cultura cinematográfica?',
      en: 'How important is to have a good Cinematographic Culture?',
    },
    a: {
      es: [
        'Muy importante. El cine tiene la capacidad de sintetizar ideas muy complejas y expresarlas de una manera que puede ser comunicada y comprendida fácilmente por casi cualquier persona dispuesta a vivir plenamente la experiencia cinematográfica. Dicho esto, creo que es aceptable disfrutar del cine comercial superficial, ¿por qué no? Es igualmente importante ser capaz y estar dispuesto a ver expresiones cinematográficas más profundas y filosóficas, tanto en sus formas narrativas como no narrativas. Una mezcla equilibrada de gustos cinéfilos, comprensión básica de los cánones cinematográficos y filosofía del cine, incluyendo la estética, es fundamental para desarrollar una cultura cinematográfica rica que siente las bases para círculos virtuosos entre la producción y el consumo de buenas películas.',
      ],
      en: [
        'Very important. Filmmaking has the capacity to synthesize very complex ideas and to express them in a way that can be easily communicated and understood by almost any person that is willing to fully live the cinematographic experience. Hence, while I think it is acceptable to enjoy shallow mainstream cinema, why not? It is equally important to be able and willing to watch deeper, more philosophical, artistic expressions of cinema, in both its narrative and non-narrative forms. A balanced mix of cinephile enjoyment preferences, basic understanding cinematographic canons, and cinematographic philosophy, including aesthetics, is critical in the development of a rich cinematographic culture that sets the stage for the establishment of virtuous circles between the production and the consumption of good films.',
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Qué te gustaría mejorar como cineasta, actor o escritor?',
      en: 'What would you like to improve as a Filmmaker / Actor / Writer?',
    },
    a: {
      es: [
        'Siempre hay espacio para mejorar, en todo, tanto en mis películas como en cada aspecto de mi vida. Siempre debemos esforzarnos por mejorar. Ser mejores en lo que hacemos, y ser mejores seres humanos.',
      ],
      en: [
        'There is always room for improvement, everywhere, both in my films, as well as in every single aspect of my life. We should always strive to improve. To be better at what we do, and to be better human beings.',
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'Un gran productor te da la oportunidad de dirigir o actuar en el remake de una de tus películas favoritas en blanco y negro (si tienes alguna)... ¿qué película eliges?',
      en: 'A big producer gives you the chance to direct / to play (in) the remake of one of your favorite black and white Movie (if you have one)... what film do you choose?',
    },
    a: {
      es: [
        'La respuesta probablemente estaría determinada, hasta cierto punto, por el presupuesto; pero puedo imaginar una versión moderna de Metrópolis de Fritz Lang (1927) ambientada en un escenario posmoderno, donde internet, la inteligencia artificial, etc., sean la norma. Sería todo un reto.',
      ],
      en: [
        'The answer would probably be budget determined to certain extent; but I can imagine a modern version of Fritz Lang Metropoli (1927) happening in a postmodern scenario, where internet, Artificial Intelligence, etc. are the norm. It would be quite a challenge.',
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'La industria del cine es un lugar difícil y a veces es normal sentirse perdido y desanimado... ¿quién es la persona que te mantiene motivado?',
      en: "Film Industry it's a tough place and sometimes is normal to feel lost and discouraged... who's the person that keeps you motivated?",
    },
    a: {
      es: [
        'Ah, sí. Puede ser muy, muy desalentador y frustrante, y con mucha frecuencia, injusto. Dicho esto, mi espíritu siempre encuentra la manera de mantenerme motivado. Tiene una necesidad muy profunda de crear. Es mi espíritu el que me dice: no te rindas, no abandones, Mauricio. Si tu cuerpo se siente cansado, descansa. Si tu mente se siente impotente y derrotada, tómate un descanso. Y si tu ego ha sido herido, recuérdale que se trata de tu espíritu, y no de lo que otros piensen de ti. Mi espíritu me impulsa a no rendirme y a seguir creando arte.',
      ],
      en: [
        "Oh yes. It can be very, very discouraging, and frustrating, and very frequently, unfair. Said so, my spirit always finds a way to keep me motivated. It has a very deep need to create. It is my spirit that tells me, you better not surrender, you better not quit Mauricio. if your body feels tired, rest. If your mind feels impotent and defeated, take a break. And if your ego has been hurt, remind it, it's about your spirit, and not about what others think of you. My spirit urges me not to give up, and to continue creating art.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: 'Alfred Hitchcock dijo: "Para hacer una buena película se necesitan tres cosas: el guion, el guion y el guion". ¿Estás de acuerdo con él?',
      en: 'Alfred Hitchcock said: "To make a good film you need 3 things: The script, the script and the script". Do you agree with him?',
    },
    a: {
      es: [
        'No quiero llevarle la contraria al señor Hitchcock. Si por guion se refería a la historia o al argumento (en las formas no narrativas), entonces sí. Si no tienes una buena historia, no puedes hacer una buena película. Podrías hacer bonitas imágenes, pero no una buena película. Dicho esto, añadiría que, incluso si tienes un buen guion, es la economía del cine lo que desafía el proceso. Un cineasta trabaja con recursos limitados. Siempre se trabaja con menos recursos de los que uno quisiera tener. Gestionar esos recursos limitados de manera efectiva es, al final, lo que puede convertir un buen guion en un buen producto fílmico.',
      ],
      en: [
        "I don't want to disagree with Mr. Hitchcock. If by the script he meant the story or the argument (in non-narrative forms); then yes. If you don´t have a good story, then you can´t make a good film. You could make nice pictures, but not a good film. Said so, I would add that, even if you have a good script, it is the economics of filmmaking that challenges the process. A filmmaker works with limited resources. One is always working with fewer resources than you wish you had. Managing those limited resources effectively is what in the end can turns a good script into a good filmic product.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Cuál es tu proyecto más ambicioso para el futuro?',
      en: "What's your most ambitious project for the future?",
    },
    a: {
      es: [
        'Tengo tres guiones esperando a que consiga los recursos para convertirlos en películas. Espero que este año pueda trabajar en mi próxima película, El Morroño, que estoy seguro será una gran película.',
      ],
      en: [
        'I have three scripts waiting for me to have the resources to turn them into movies. I hope this year I can work on my next film, El Morroño, which I am sure will be a great film.',
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Crees que la tristeza, o al menos la melancolía, permiten ser más creativo?',
      en: 'Do you think that sadness or at least melancholy let be more creative?',
    },
    a: {
      es: [
        'Las emociones pueden detonar u obstaculizar la creatividad. Dirigir las propias emociones hacia el proceso creativo imprime fuerza a la creación. Sin importar si se trata de alegría, tristeza, enojo o melancolía. Una buena historia puede ser una historia feliz o una historia triste, siempre y cuando toque efectivamente las emociones. De personas sin emociones no pueden salir buenas historias. Las máquinas no tienen emociones. Por lo tanto, las máquinas no pueden crear buenas historias.',
      ],
      en: [
        "Emotions can trigger or hamper creativity. Guiding one´s emotions towards the creative process imprints power into the creation. Regardless of it being joy, sadness, anger, melancholy. A good story can be a happy story or a sad story, as long as it effectively touches on emotions. No good stories can come out of non-emotional persons. Machines don't have emotions. Hence, machines can't create good stories.",
      ],
    },
  },
  {
    type: 'qa',
    q: {
      es: '¿Qué te deseas a ti mismo como cineasta, actor o escritor?',
      en: 'What do you wish to yourself as a Filmmaker / Actor / Writer?',
    },
    a: {
      es: [
        'Desearía que hubiera más oportunidades para comercializar películas hechas de forma independiente. El monopolio que existe en mi país solo sirve a los intereses de unos pocos y crea un círculo vicioso que frena la cultura cinematográfica en favor de comedias superficiales y/o comerciales, de muy bajo valor canónico, estético y filosófico. Desearía que el país que tiene uno de los mayores números de salas de cine per cápita abriera sus puertas a sus cineastas, actores y escritores. También quiero aprovechar la oportunidad para agradecerles a ustedes, a Florence Film Awards y a su audiencia, por esta oportunidad. ¡Les deseo lo mejor!',
      ],
      en: [
        'I wish there were more opportunities to market independently made films. The monopoly that exists in my country only serves the interests of a few and creates a vicious cycle that hinders cinematographic culture in favor of mainstream and/or shallow comedies with very low canonic, aesthetical, and philosophical value. I wish that the country that has one of the highest numbers of cinema theaters per capita opened its doors to its filmmakers, actors, and writers. I also want to take the opportunity to thank you, the Florence Film Awards and your audience for the opportunity. I wish you all the best!',
      ],
    },
  },
  {
    type: 'image',
    src: '/images/prensa/florence/imagen4-extra.png',
    caption: {
      es: 'Detrás de cámaras durante el rodaje',
      en: 'Behind the scenes during filming',
    },
  },
];
