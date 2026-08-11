export type EssayBlock =
  | { type: 'p'; text: { es: string; en: string } }
  | { type: 'h'; text: { es: string; en: string } }
  | {
      type: 'image';
      src: string;
      caption: { es: string; en: string };
    };

/** Subtítulo bilingüe del ensayo (se muestra bajo el título del héroe). */
export const narrativaRazonSubtitle: { es: string; en: string } = {
  es: 'Notas sobre reconocimiento, atribución y el mecanismo que las corrompe',
  en: 'Notes on recognition, attribution, and the mechanism that corrupts them',
};

/**
 * Ensayo bilingüe "La narrativa como sustituto de la razón" /
 * "Narrative as a Substitute for Reason".
 * Los párrafos en español e inglés están alineados 1:1; las imágenes,
 * con sus pies de foto, se intercalan en los mismos puntos en ambos idiomas.
 * Las rutas de imagen (`src`) apuntan a archivos locales que se subirán
 * después; los pies de foto ya están listos en ambos idiomas.
 */
export const narrativaComoSustitutoDeLaRazon: EssayBlock[] = [
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/01.jpg',
    caption: {
      es: `Plaza Sverdlov, Moscú, 5 de mayo de 1920. Trotsky y Kamenev, presentes en la fotografía original, fueron eliminados de las reproducciones oficiales tras caer en desgracia política.`,
      en: `Sverdlov Square, Moscow, May 5, 1920. Trotsky and Kamenev, present in the original photograph, were erased from official reproductions after falling from political grace.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay un episodio menor, casi anecdótico, que sirve mejor como puerta de entrada que como tema: una producción con crédito de dirección compartida, ya acordado por escrito entre las partes, aparece meses después en un artículo de prensa con el crédito redistribuido —no por un dato nuevo, no porque alguien hubiera investigado y encontrado algo que el acuerdo original ignoraba, sino porque la nueva versión encajaba mejor con una historia que alguien quería contar. Ese episodio no es el tema de este ensayo. Es el momento en que un mecanismo, hasta entonces invisible, se volvió visible.`,
      en: `There is a minor episode, almost anecdotal, that works better as a doorway than as a subject: a production with shared directing credit, already agreed to in writing between the parties, appears months later in a press article with the credit reassigned — not because of any new fact, not because someone investigated and found something the original agreement had missed, but because the new version fit better with a story someone wanted to tell. That episode is not the subject of this essay. It is the moment a mechanism, invisible until then, became visible.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `No es un texto sobre esa película, ni sobre quién dijo qué de quién. Es un texto sobre una pregunta más amplia y más incómoda: qué le pasa a una sociedad cuando sus sistemas de reconocimiento —quién produjo algo, quién merece crédito por ello, quién debe responder por un daño, quién debe recibir una reparación— dejan de corregirse mediante evidencia y empiezan a organizarse mediante narrativa.`,
      en: `This is not a text about that film, or about who said what about whom. It is a text about a broader and more uncomfortable question: what happens to a society when its systems of recognition — who produced something, who deserves credit for it, who must answer for a harm, who must receive reparation — stop correcting themselves through evidence and start organizing themselves through narrative.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `La autoría de una obra concreta es, en este texto, el primer laboratorio, no el objeto final. Es el caso donde el mecanismo se pudo aislar con más precisión, porque había algo que en la mayoría de las disputas de reconocimiento no existe: un acuerdo previo, verificable, con fecha, entre las partes involucradas. Eso permite ver con claridad quirúrgica algo que en otros dominios —revisionismo histórico, reparación de desigualdades estructurales, disputas de casting en producciones culturales— queda enterrado bajo capas de interpretación legítima. Lo que este ensayo encontró en el caso pequeño resultó aplicar, con la misma estructura, al problema grande.`,
      en: `Authorship of a specific work is, in this text, the first laboratory, not the final object. It is the case where the mechanism could be isolated with the most precision, because it contained something most disputes over recognition lack: a prior, verifiable, dated agreement between the parties involved. That makes it possible to see with surgical clarity something that in other domains — historical revisionism, the redress of structural inequality, casting disputes in cultural productions — stays buried under layers of legitimate interpretation. What this essay found in the small case turned out to apply, with the same structure, to the larger problem.`,
    },
  },
  {
    type: 'h',
    text: { es: `El síntoma`, en: `The Symptom` },
  },
  {
    type: 'p',
    text: {
      es: `Hay una frase que resume el diagnóstico antes de argumentarlo, y que vale la pena dejar sola, sin desarrollar todavía: no se busca quién lo hizo. Se busca quien lo pague.`,
      en: `There is a sentence that sums up the diagnosis before arguing for it, and it is worth leaving alone for now, undeveloped: it doesn't ask who did it. It asks who pays for the harm.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Es una frase descriptiva, no una tesis que este ensayo defienda como deseable. Describe un desplazamiento: el criterio para asignar reconocimiento —de cualquier tipo, no solo autoría— dejó de preguntar por la contribución verificable de un individuo concreto, y empezó a preguntar por su posición dentro de una estructura de costos y beneficios sociales. Ese desplazamiento tiene nombre, y este ensayo lo va a nombrar con precisión antes de terminar. Por ahora basta con dejarlo enunciado, porque el resto del texto existe para probar, bloque por bloque, si la frase se sostiene.`,
      en: `This is a descriptive sentence, not a thesis this essay defends as desirable. It describes a shift: the criterion for assigning recognition — of any kind, not only authorship — stopped asking about a specific individual's verifiable contribution, and began asking about that individual's position within a structure of social costs and benefits. That shift has a name, and this essay will name it precisely before it ends. For now it is enough to state it, because the rest of the text exists to test, block by block, whether the sentence holds.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El principio general del que ese síntoma es apenas un caso particular puede formularse como una cuestión de jurisdicción. Hay al menos tres dominios que gobiernan tipos de pregunta distintos, y ninguno es superior a los otros dos: la evidencia tiene jurisdicción sobre lo que puede corregirse con datos —quién hizo qué, quién produjo qué, qué reconocimiento sigue a qué contribución verificable—. La narrativa tiene jurisdicción sobre lo que nunca pretendió ser verificable —el sentido, el mito, los valores últimos, la cosmología de fe—. Y la conciencia individual tiene jurisdicción sobre lo que cada quien cree, con independencia de si esa creencia está o no bien fundada.`,
      en: `The general principle behind that symptom, of which the symptom is only one instance, can be framed as a question of jurisdiction. There are at least three domains that govern distinct kinds of question, and none outranks the other two: evidence has jurisdiction over what can be settled with data — who did what, who produced what, what recognition follows from what verifiable contribution. Narrative has jurisdiction over what never claimed to be verifiable — meaning, myth, ultimate values, the cosmology of faith. And individual conscience has jurisdiction over what each person believes, regardless of whether that belief is well founded.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El error no es que exista cada una de estas tres jurisdicciones. El error ocurre cuando un dominio invade el territorio de otro sin reconocer que lo está haciendo. La narrativa invade la jurisdicción de la evidencia cuando pretende decidir una atribución de crédito, una responsabilidad o una reparación sin someterse a la corrección por datos disponibles —esa es la falla central que este ensayo va a rastrear en la mayoría de sus bloques—. La narrativa invade la jurisdicción de la conciencia individual cuando se impone por coerción sobre quien nunca la aceptó para sí. Y, con la misma frialdad con la que se juzgan las dos anteriores, hay una tercera invasión posible, en sentido contrario: la evidencia invade la jurisdicción de la narrativa cuando exige prueba verificable para preguntas que nunca fueron del tipo verificable —cuando se le exige a alguien demostrar con datos que su duelo tiene sentido, que su fe le da propósito, que un mito importa culturalmente—, tratando un reclamo de otro orden como si fuera un reclamo empírico fallido. Es el mismo error de fondo, en la dirección opuesta: una jurisdicción que no reconoce que acaba de invadir un territorio que no era el suyo.`,
      en: `The error is not that each of these three jurisdictions exists. The error occurs when one domain invades another's territory without acknowledging that it is doing so. Narrative invades the jurisdiction of evidence when it tries to settle an attribution of credit, a responsibility, or a reparation without submitting to correction by the data available — that is the central failure this essay will trace through most of its sections. Narrative invades the jurisdiction of individual conscience when it is imposed by coercion on someone who never accepted it for themselves. And, with the same coldness applied to the two failures above, there is a third possible invasion, running the other way: evidence invades the jurisdiction of narrative when it demands verifiable proof for questions that were never of the verifiable kind — when someone is required to prove with data that their grief makes sense, that their faith gives them purpose, that a myth matters culturally — treating a claim of a different order as if it were a failed empirical claim. It is the same underlying error, running in the opposite direction: a jurisdiction that does not recognize it has just invaded a territory that was never its own.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/02.jpg',
    caption: {
      es: `Recreación interpretativa de un erudito de la escuela mohista. Los caracteres reproducen doctrinas reales de la escuela: amor mutuo, beneficio mutuo, exaltación del mérito, moderación funeraria, condena de la guerra ofensiva.`,
      en: `Interpretive recreation of a scholar of the Mohist school. The characters reproduce genuine doctrines of the school: mutual love, mutual benefit, exaltation of merit, moderation in mourning, condemnation of offensive warfare.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Vale la pena detenerse en por qué merece la pena defender, específicamente, la jurisdicción de la evidencia —no porque sea superior a las otras dos, sino porque es la más frágil, la que más fácilmente se cede sin que nadie note la cesión. La razón no necesita dominar una sociedad entera para transformarla. Basta con que esa sociedad le conceda jurisdicción suficiente sobre determinados tipos de pregunta. Distintas tradiciones de pensamiento, en distintos lugares y momentos, avanzaron hacia esa institucionalización por caminos propios. Es probable que hubiera intentos anteriores, informales, en sociedades sin escritura, cuyos criterios de validación de una afirmación se perdieron junto con todo lo demás que no dejó registro —no hay manera de recuperar esa historia, y este ensayo no pretende inventarla donde no hay evidencia. De lo que sí queda registro, dos casos bastan para mostrar que el fenómeno no es privativo de un solo lugar. En la China del siglo V antes de nuestra era, la escuela mohista formuló lo que se conoce como los tres criterios de la doctrina: para que una afirmación se considerara válida, debía contrastarse con el precedente histórico verificable, con el testimonio directo de los sentidos, y con su aplicación práctica y el beneficio observable que producía —una exigencia de evidencia por encima de autoridad o tradición heredada, notablemente distinta del confucianismo que le disputaba el terreno en la misma época. Y en la Europa del siglo XVIII, con un nivel de documentación todavía más preciso —fechas, textos, figuras identificables—, la Ilustración instaló una posibilidad muy simple que hasta entonces no había tenido el mismo peso institucional: para cierta clase de afirmación, no importa quién la dice, qué tradición la respalda, ni qué historia nos resulte más atractiva —lo que importa es qué evidencia hay disponible. Ninguna de las dos tradiciones convirtió a los seres humanos, de un día para otro, en animales perfectamente racionales. Nadie lo es. Lo que ambas hicieron, cada una a su modo, fue instalar un procedimiento, disponible para cualquiera que quisiera usarlo, que no dependía de que la persona fuera racional, sino de que el sistema permitiera que el error de un individuo fuera corregido por otro con mejores datos.`,
      en: `It is worth pausing on why the jurisdiction of evidence, specifically, deserves defending — not because it outranks the other two, but because it is the most fragile, the one most easily given up without anyone noticing the surrender. Reason does not need to dominate an entire society in order to transform it. It is enough for that society to grant it jurisdiction over certain kinds of question. Different traditions of thought, in different places and eras, advanced toward that institutionalization by their own paths. There were probably earlier, informal attempts, in societies without writing, whose criteria for validating a claim were lost along with everything else that left no record — there is no way to recover that history, and this essay does not pretend to invent it where no evidence exists. Of what record does survive, two cases suffice to show the phenomenon is not confined to a single place. In China of the fifth century before our era, the Mohist school formulated what is known as the three tests of doctrine: for a claim to be considered valid, it had to be checked against verifiable historical precedent, against the direct testimony of the senses, and against its practical application and observable benefit — a demand for evidence over inherited authority or tradition, notably distinct from the Confucianism contesting the same ground at the same time. And in eighteenth-century Europe, with an even more precise level of documentation — dates, texts, identifiable figures — the Enlightenment installed a very simple possibility that had never before carried the same institutional weight: for a certain class of claim, it does not matter who says it, what tradition backs it, or which story we find more appealing — what matters is what evidence is available. Neither tradition turned human beings, overnight, into perfectly rational animals. No one is. What both did, each in its own way, was install a procedure, available to anyone willing to use it, that did not depend on the person being rational, but on the system allowing one individual's error to be corrected by another with better data.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Cuando ese procedimiento se institucionaliza, las consecuencias son enormes, y valen tanto en el terreno técnico como en el moral. En el terreno técnico: el conocimiento se volvió corregible, reproducible, transmisible de una generación a otra sin perderse —no porque quienes lo produjeron fueran científicos perfectos, libres de ego o de error, sino porque construyeron mecanismos que permitían que el sistema, con el tiempo, corrigiera al individuo. En el terreno moral y político ocurrió algo estructuralmente parecido: la razón permitió formular principios capaces de universalizarse —si cierto derecho le corresponde a un ser humano, ¿por qué no a otro que comparte la misma condición?—, y esa universalización convirtió la experiencia particular de cada quien en una prueba contra la arbitrariedad de quien decidía, hasta entonces, a quién correspondía un derecho y a quién no. Ninguna de las dos cosas requirió que las narrativas desaparecieran. Requirió que encontraran, por primera vez, un límite externo capaz de contenerlas cuando entraban en el territorio equivocado. La razón, en este sentido, no es necesariamente una cosmovisión que compita con otras por el alma de una sociedad. Puede ser, más modestamente y de forma más útil, un procedimiento: algo que cualquier tradición, cualquier narrativa, cualquier persona puede aceptar usar para cierto tipo de preguntas, sin tener que abandonar todo lo demás que cree.`,
      en: `Once that procedure becomes institutionalized, the consequences are enormous, and they hold in both the technical and the moral register. In the technical register: knowledge became correctable, reproducible, transmissible from one generation to the next without being lost — not because those who produced it were perfect scientists, free of ego or error, but because they built mechanisms that let the system, over time, correct the individual. In the moral and political register something structurally similar happened: reason made it possible to formulate principles capable of universalizing — if a certain right belongs to one human being, why not to another who shares the same condition? — and that universalization turned each person's particular experience into a test against the arbitrariness of whoever had, until then, decided who was owed a right and who was not. Neither development required narratives to disappear. It required them to find, for the first time, an external limit capable of containing them when they strayed into the wrong territory. Reason, in this sense, is not necessarily a worldview competing with others for a society's soul. It can be, more modestly and more usefully, a procedure: something any tradition, any narrative, any person can agree to use for a certain kind of question, without having to abandon everything else they believe.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Vale la pena un caso límite, tomado no de la política ni del arte sino de la genética de poblaciones, porque ilustra qué ocurre cuando la lógica narrativa de "nosotros contra ellos" no encuentra ningún procedimiento externo que la contenga, y a la vez demuestra, en la manera en que hoy se discute el caso, cómo se ve el procedimiento funcionando bien. La evidencia genética muestra una caída drástica en la diversidad del cromosoma Y humano hace entre cinco y siete mil años, sin una caída equivalente en el ADN heredado por línea materna —un patrón bien documentado y replicado. Existe una hipótesis, sometida a modelado computacional, que explica ese patrón como resultado de guerra sostenida entre clanes organizados por linaje paterno: si un clan entero era aniquilado, su variante particular del cromosoma desaparecía con él. Existe también una hipótesis rival, igualmente modelada, que explica el mismo patrón sin necesitar ninguna violencia: la sola estructura patrilineal, combinada con variación normal en éxito reproductivo entre clanes, bastaría. Ninguna de las dos está presentada aquí como verdad asentada, y esa misma declaración —esto es una hipótesis, compite con otra, ambas están abiertas a corregirse con más datos— es la que las mantiene dentro de la jurisdicción de la evidencia. Si la primera hipótesis resultara cierta, describiría el caso extremo de lo que puede ocurrir cuando ningún procedimiento —ninguna forma de resolución que no fuera la eliminación física del otro grupo— contenía la narrativa de pertenencia de clan. Y el hecho de que hoy dos explicaciones convivan, contestándose con datos y no con lealtad tribal hacia una de las dos, es la prueba de que ese mismo problema —grupo contra grupo, narrativa contra narrativa— puede resolverse de otra manera cuando existe, por fin, un procedimiento capaz de zanjarlo sin exterminio de por medio. Es, dicho sea de paso, exactamente el mismo espíritu con el que se presenta un árbol filogenético: nunca como el registro definitivo de cómo ocurrió el parentesco entre especies, sino como la mejor hipótesis disponible dado el método y los datos del momento, sujeta por diseño a que evidencia futura la reordene.`,
      en: `It is worth pausing on a limit case, drawn not from politics or art but from population genetics, because it illustrates what happens when the narrative logic of "us against them" finds no external procedure to contain it, and at the same time shows, in how the case is discussed today, what the procedure looks like when it works. The genetic evidence shows a sharp drop in human Y-chromosome diversity between five and seven thousand years ago, with no equivalent drop in maternally inherited DNA — a well-documented, replicated pattern. There is a hypothesis, tested through computational modeling, that explains the pattern as the result of sustained warfare among clans organized by paternal lineage: if an entire clan was wiped out, its particular chromosome variant disappeared with it. There is also a rival hypothesis, equally modeled, that explains the same pattern without requiring any violence at all: patrilineal structure alone, combined with ordinary variance in reproductive success across clans, would suffice. Neither is presented here as settled truth, and that very declaration — this is a hypothesis, it competes with another, both remain open to correction by further data — is what keeps them within the jurisdiction of evidence. If the first hypothesis turned out to be true, it would describe the extreme case of what can happen when no procedure — no form of resolution other than the physical elimination of the other group — contained the narrative of clan belonging. And the fact that two explanations coexist today, answering each other with data rather than tribal loyalty to one or the other, is proof that the very same problem — group against group, narrative against narrative — can be resolved another way once a procedure finally exists that can settle it without extermination. It is, incidentally, exactly the same spirit in which a phylogenetic tree is presented: never as the definitive record of how kinship among species actually occurred, but as the best available hypothesis given the method and the data of the moment, subject by design to being rearranged by future evidence.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/03.jpg',
    caption: {
      es: `Clanes patrilineales enfrentados — una de las hipótesis en competencia que explican el cuello de botella neolítico del cromosoma Y.`,
      en: `Patrilineal clans facing off — one of two competing hypotheses explaining the Neolithic Y-chromosome bottleneck.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Conviene decir, antes de seguir, qué es lo que este ensayo no es. No es una objeción a la corrección de desigualdades históricas como proyecto. No es una defensa de que las cosas queden como estaban. La discriminación real —la que decide quién entra a una conversación, a una industria, a una posición de poder, según algo que no tiene relación con el mérito de lo que esa persona hizo— es real, y este ensayo no la niega en ningún punto. Lo que se objeta es más angosto: el mecanismo por el cual, en nombre de corregir esa discriminación, se sustituye evidencia disponible por un relato más conveniente, y se le hace pagar el costo de esa sustitución a alguien —a veces el autor original, a veces la persona nueva a quien se le atribuye un mérito que no reclamó, a veces a nadie identificable hoy, solo quienes vendrán después y recibirán menos generosidad de la que hubieran recibido en un sistema que funcionara bien.`,
      en: `It is worth stating, before going further, what this essay is not. It is not an objection to correcting historical inequality as a project. It is not a defense of leaving things as they were. Real discrimination — the kind that decides who gets into a conversation, an industry, a position of power, based on something unrelated to the merit of what that person did — is real, and this essay does not deny it at any point. What it objects to is narrower: the mechanism by which, in the name of correcting that discrimination, available evidence is replaced with a more convenient story, and someone is made to pay for the harm of that substitution — sometimes the original author, sometimes the new person credited with a merit they never claimed, sometimes no one identifiable today, only those who will come later and receive less generosity than they would have received under a system that worked well.`,
    },
  },
  {
    type: 'h',
    text: { es: `¿Quién hizo qué?`, en: `Who Did What?` },
  },
  {
    type: 'p',
    text: {
      es: `Cualquier sistema serio que haya tenido que resolver, alguna vez, quién es autor de algo, llegó a una distinción parecida: no toda contribución necesaria constituye autoría. El Comité Internacional de Editores de Revistas Médicas (ICMJE, por sus siglas en inglés), cuyos criterios rigen la autoría en la mayoría de las publicaciones biomédicas del mundo, exige que se cumplan varios requisitos a la vez —concepción del trabajo, ejecución o análisis, interpretación, redacción— no basta con haber estado presente ni con haber sido indispensable. Quien conduce el vehículo de una expedición científica es, en un sentido literal, necesario para que la expedición exista. No es, por eso, coautor del hallazgo.`,
      en: `Any serious system that has ever had to resolve who is the author of something arrived at a similar distinction: not every necessary contribution constitutes authorship. The International Committee of Medical Journal Editors (ICMJE), whose criteria govern authorship across most of the world's biomedical publications, requires that several conditions be met at once — conception of the work, execution or analysis, interpretation, drafting — mere presence or indispensability is not enough. Whoever drives the vehicle for a scientific expedition is, quite literally, necessary for the expedition to exist. That does not make them a co-author of the discovery.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/04.jpg',
    caption: {
      es: `Revisión de un cladograma.`,
      en: `Reviewing a cladogram in progress.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Esta misma distinción aparece, con vestimenta distinta, en la taxonomía biológica (donde el orden de autoría dentro de una publicación conjunta recae en quien concibió y redactó el argumento central, y no necesariamente en quien dirige el laboratorio), en el droit d'auteur francés y la tradición civil que de ahí se extendió a buena parte del mundo (que separa la autoría moral —siempre del creador humano, inalienable, irrenunciable— de la titularidad patrimonial, que sí puede cederse o heredarse), y en los sistemas de arbitraje de crédito de guion cinematográfico (que miden, de forma casi forense, cuánto material original de cada borrador sobrevive en la versión final). Son cuatro sistemas que no se copiaron entre sí, que resuelven el problema con herramientas distintas, y que sin embargo convergen en el mismo punto: el reconocimiento sigue a la contribución verificable, no a la posición o a la categoría de quien la reclama.`,
      en: `This same distinction shows up, dressed differently, in biological taxonomy (where author order within a joint publication falls to whoever conceived and drafted the central argument, not necessarily whoever runs the lab), in French droit d'auteur and the civil-law tradition that spread from it across much of the world (which separates moral authorship — always the human creator's, inalienable, non-waivable — from economic ownership, which can be transferred or inherited), and in film screenwriting-credit arbitration systems (which measure, almost forensically, how much original material from each draft survives into the final version). Four systems that did not copy one another, that solve the problem with different tools, and that nonetheless converge on the same point: recognition follows verifiable contribution, not the position or category of whoever claims it.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/05.jpg',
    caption: {
      es: `El reconocimiento simbólico como gesto del autor.`,
      en: `Symbolic recognition as a gesture from the real author.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay, sin embargo, un matiz que estos sistemas rara vez hacen explícito y que merece nombrarse: hay un piso, y hay un techo. El piso es lo que los criterios exigen como mínimo para que alguien pueda reclamar autoría por derecho propio —nadie puede exigir crédito sin cumplirlo. Pero ningún código prohíbe que quien sí cumple el piso decida, generosamente, reconocer a quien no lo cumple. El chofer de la expedición puede terminar en los agradecimientos, incluso en los créditos, si quien tiene la autoridad real para decidirlo así lo quiere. Eso no es una falla del sistema de mérito: es la zona de libertad que el sistema deja abierta, deliberadamente, para la generosidad. Un mentor puede otorgar reconocimiento simbólico o crédito social —visibilidad, mención, respaldo público— a alguien cuya contribución todavía no alcanza el umbral, como inversión en su desarrollo futuro, sabiendo que esa persona sí aportó algo real y que hay una relación de confianza capaz de sostener el gesto, sin que eso implique ceder el derecho moral en el sentido jurídico estricto, que sigue siendo, por definición, inalienable y exclusivo de quien efectivamente concibió y ejecutó la obra. Lo que el mentor regala no es autoría —eso no está en su poder regalar, ni siquiera si quisiera—; es la plataforma que la autoría propia le permite construir para otro.`,
      en: `There is, however, a nuance these systems rarely make explicit and that deserves naming: there is a floor, and there is a ceiling. The floor is what the criteria demand as a minimum for someone to claim authorship as of right — no one can demand credit without meeting it. But no code forbids whoever meets the floor from generously choosing to recognize someone who does not. The expedition's driver can end up in the acknowledgments, even in the credits, if whoever holds real authority over the decision wants it that way. That is not a flaw in the merit system: it is the zone of freedom the system deliberately leaves open for generosity. A mentor can grant symbolic recognition or social credit — visibility, mention, public backing — to someone whose contribution does not yet reach the threshold, as an investment in that person's future, knowing they genuinely contributed something real and that there is a trust relationship able to sustain the gesture, without that implying any transfer of moral right in the strict legal sense, which remains, by definition, inalienable and exclusive to whoever actually conceived and executed the work. What the mentor gives away is not authorship — that is not theirs to give, even if they wanted to — it is the platform their own authorship allows them to build for someone else.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/06.jpg',
    caption: {
      es: `El gesto que rompe el protocolo.`,
      en: `The gesture that breaks protocol.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Conviene poner a prueba el umbral mismo con un caso extremo, no para descartarlo sino para verlo funcionar con precisión. Imaginemos que el portero de un edificio dice, al cruzarse con un poeta en el vestíbulo, "hola, guapo, ¿cómo estás?" —y lo dice, explícitamente, "para tu libro"—, y el poeta, atónito, incorpora de hecho la frase de forma literal en el texto final. El hecho creador existe. La fijación del fragmento en la obra es indiscutible. Y sin embargo, el reclamo de autoría sobre el libro completo se desmorona por razones técnicas precisas, no por capricho de quien decide el crédito. Primero, el umbral de originalidad: una fórmula de cortesía cotidiana pertenece al dominio del lenguaje llano, y salvo que alcance una altura creativa excepcional —un eslogan muy distintivo, una greguería genuinamente inédita—, no cruza el umbral que cualquier sistema de derecho de autor exige para proteger una expresión como obra en sí misma. Segundo, incluso concediendo que la frase mereciera protección, la proporción que representa dentro del conjunto —una línea sobre un libro entero— la vuelve una contribución accesoria: la vieja máxima de minimis non curat lex —la ley no se ocupa de lo insignificante— impide que un fragmento mínimo otorgue la condición de coautor sobre la totalidad. Darle estatus de autor del libro completo a quien aportó una frase equivaldría a declarar coautor de la Mona Lisa a quien pintó el botón de la chaqueta del retrato. Tercero, y más de fondo: la coautoría exige que los aportes estén entrelazados en una unidad creativa indivisible, donde cada parte participe de la concepción o la articulación de la estructura general. El portero aportó un bloque aislado y rígido. El poeta aportó la arquitectura, el ritmo, el contexto, la selección, la dirección conceptual de la totalidad.`,
      en: `It is worth testing the threshold itself with an extreme case, not to dismiss it but to watch it work with precision. Imagine that a building's doorman, passing a poet in the lobby, says, "hey handsome, how are you?" — and says it explicitly, "for your book" — and the poet, startled, does in fact fold the line verbatim into the final text. The creative act happened. The fragment's fixation in the work is beyond dispute. And yet the claim to authorship of the entire book collapses for precise technical reasons, not out of caprice on the part of whoever decides the credit. First, the originality threshold: an everyday pleasantry belongs to plain, unowned language, and unless it reaches an exceptional level of creative distinctiveness — a highly distinctive slogan, a genuinely unprecedented turn of phrase — it does not cross the threshold any copyright system requires to protect an expression as a work in itself. Second, even granting that the line deserved protection, the proportion it represents within the whole — one line in an entire book — makes it an incidental contribution: the old maxim de minimis non curat lex — the law does not concern itself with trifles — prevents a minimal fragment from conferring co-authorship of the whole. Granting authorship of the entire book to whoever contributed one line would be like declaring co-authorship of the Mona Lisa to whoever painted the button on the sitter's jacket. Third, and more fundamentally: co-authorship requires that the contributions be interwoven into an indivisible creative unity, with each party participating in the conception or the articulation of the overall structure. The doorman contributed an isolated, rigid block. The poet contributed the architecture, the rhythm, the context, the selection, the conceptual direction of the whole.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Ahí está, con toda su precisión técnica, el corazón de la confusión que este ensayo intenta nombrar: tener un derecho sobre una parte no es lo mismo que arrogarse la propiedad del todo. Si el portero exigiera ser reconocido como autor del libro por haber aportado esa línea, y un tercero —un juez, la crítica, la opinión pública— se lo concediera amparándose en una narrativa de reparación o inclusión, el sistema cometería dos injusticias a la vez: le quitaría al autor real el mérito acumulado de haber construido el edificio entero, para regalarle a un colaborador marginal una representación que no se ganó con trabajo verificable; y, al mismo tiempo, falsificaría la métrica misma del mérito, desconociendo que en cualquier disciplina el reconocimiento no reside en haber puesto una piedra, sino en haber levantado la estructura que la sostiene. Lo que el portero sí podría recibir —una mención, un agradecimiento, una cita— es, otra vez, un gesto del autor real, no una potestad que ningún tercero pueda otorgarle por su cuenta.`,
      en: `There, with all its technical precision, is the heart of the confusion this essay is trying to name: having a right over a part is not the same as claiming ownership of the whole. If the doorman demanded to be recognized as author of the book for having contributed that line, and a third party — a judge, critics, public opinion — granted it under cover of a narrative of redress or inclusion, the system would commit two injustices at once: it would strip the real author of the accumulated merit of having built the whole structure, in order to hand a marginal collaborator credit not earned through verifiable work; and, at the same time, it would falsify the very metric of merit, ignoring that in any discipline recognition does not lie in having laid one stone, but in having raised the structure that stone supports. What the doorman could receive — a mention, an acknowledgment, a dedication — is, again, a gesture from the real author, not a power any third party can grant on his own.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Este ejemplo deja ver, con más nitidez que cualquier formulación abstracta, la bisagra exacta sobre la que gira la coherencia de todo este ensayo. No está en contra del gesto simbólico. Al contrario: protege el espacio donde ese gesto es verdaderamente noble. Cuando el autor real —quien tiene la autoridad sobre la obra entera— decide poner al portero en los créditos, dedicarle una mención, invitarlo a compartir el reconocimiento, está ejerciendo la zona de libertad que el sistema de mérito deja abierta. Ese gesto tiene valor precisamente porque es suyo para dar: posee la autoridad real sobre la obra y decide, sin que nadie se lo exija, ceder una parte de su reconocimiento a quien aportó menos.`,
      en: `This example shows, more clearly than any abstract formulation, the exact hinge on which the coherence of this entire essay turns. It is not against the symbolic gesture. On the contrary: it protects the space where that gesture is genuinely noble. When the real author — whoever holds authority over the entire work — decides to put the doorman in the credits, dedicate a mention to him, invite him to share in the recognition, that author is exercising the zone of freedom the merit system leaves open. That gesture has value precisely because it is theirs to give: they hold real authority over the work and decide, with no one requiring it of them, to cede part of their recognition to someone who contributed less.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El problema que este ensayo denuncia ocurre en el instante en que un tercero —la prensa, un comité, la inercia de una narrativa que ya tomó forma— toma ese gesto, o la sola existencia de la contribución mínima, y decreta que el colaborador menor es, en realidad, el verdadero autor, y que no reconocerlo así convierte al autor real en alguien que explota. En ese instante, la naturaleza del acto se invierte por completo. La generosidad deja de ser un regalo voluntario y se convierte en una obligación extraída por la fuerza de una narrativa. Se falsifica la realidad, al confundir la zona de gracia del autor con una deuda de justicia que nunca existió en los datos disponibles. Y se destruye, hacia adelante, el incentivo mismo que hacía posible el gesto: si el sistema castiga a quien tiene una apertura generosa, reescribiendo la historia cada vez que la ejerce, la respuesta racional de cualquier creador —la que ya se describió en términos de teoría de juegos— será cerrar la puerta, no colaborar, no compartir crédito con nadie.`,
      en: `The problem this essay denounces occurs the instant a third party — the press, a committee, the inertia of a narrative that has already taken shape — seizes that gesture, or the mere existence of the minimal contribution, and declares the minor collaborator to be, in fact, the true author, and that failing to recognize him as such turns the real author into an exploiter. In that instant, the nature of the act is completely inverted. Generosity stops being a voluntary gift and becomes an obligation extracted by narrative force. Reality is falsified, by confusing the author's zone of grace with a debt of justice that never existed in the available facts. And, going forward, the very incentive that made the gesture possible is destroyed: if the system punishes whoever practices generous openness by rewriting history each time they exercise it, the rational response of any creator — already described above in game-theoretic terms — will be to shut the door, to stop collaborating, to stop sharing credit with anyone.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El error, entonces, no es que exista el gesto simbólico. El error es que un tercero despoje al autor de la potestad de otorgarlo, convirtiendo un acto discrecional de generosidad en una redistribución forzosa disfrazada de reparación.`,
      en: `The error, then, is not that the symbolic gesture exists. The error is that a third party strips the author of the power to grant it, turning a discretionary act of generosity into a forced redistribution disguised as redress.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El problema que dispara este ensayo no vive ni en el piso ni en el techo. Vive en un tercer lugar: quien no tiene autoridad sobre ninguna de las dos decisiones —ni fijó el piso, ni es dueño del techo— se arroga, de todas formas, el poder de redistribuir el reconocimiento ya fijado por quienes sí tenían esa autoridad. No es una corrección del sistema de mérito. Es una intromisión sobre una decisión que nunca le perteneció.`,
      en: `The problem that sets off this essay does not live in the floor or in the ceiling. It lives in a third place: whoever has authority over neither decision — who neither set the floor nor owns the ceiling — nonetheless claims the power to redistribute recognition already fixed by those who did hold that authority. This is not a correction of the merit system. It is an intrusion into a decision that was never theirs to make.`,
    },
  },
  {
    type: 'h',
    text: {
      es: `La genealogía imposible de probar del todo`,
      en: `A Genealogy Impossible to Fully Prove`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay una asimetría incómoda que este ensayo no puede resolver del todo, y prefiere admitirla en vez de disimularla. Cuando alguien reclama que cierta idea, cierta línea de pensamiento, "ya formaba parte de su trayectoria intelectual" antes de un proyecto concreto —que no la incorporó durante el proceso, sino que la traía consigo y el proyecto le dio forma—, esa afirmación es, la mayoría de las veces, imposible de verificar con el mismo rigor que exigiríamos para la autoría de una obra terminada. Es autoreporte. Nadie más que quien lo dice puede confirmar, con certeza total, que el pensamiento ya estaba ahí antes.`,
      en: `There is an uncomfortable asymmetry this essay cannot fully resolve, and it prefers to admit it rather than paper over it. When someone claims that a certain idea, a certain line of thought, "already formed part of their intellectual trajectory" before a specific project — that they did not pick it up during the process, but carried it in already and the project gave it form — that claim is, most of the time, impossible to verify with the same rigor we would demand for the authorship of a finished work. It is self-report. No one but the person making the claim can confirm, with total certainty, that the thought was already there beforehand.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/07.jpg',
    caption: {
      es: `El Código Napoleón, 1804: la forma como sustituto operativo de una voluntad que nadie más puede verificar directamente.`,
      en: `The Napoleonic Code, 1804: form as an operative substitute for a will no one else can verify directly.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El derecho de contratos, y la teoría de las obligaciones en general, lleva siglos resolviendo una tensión de la misma naturaleza, y vale la pena tomar prestado su marco en vez de fingir que este problema es nuevo. Hay una verdad ontológica de la voluntad —el acto jurídico: lo que una parte efectivamente quiso y consintió— que es, por definición, inaccesible de forma directa a cualquier tercero. Y hay una exigencia de verificación externa —el hecho jurídico probatorio: la forma, el documento, la fecha cierta, el testigo— que no pretende ser la voluntad misma, sino permitir que alguien que no tiene acceso directo a la mente ajena pueda, de todas formas, operar sobre ella sin arbitrariedad. El sistema no descarta la voluntad real por ser inverificable directamente; construye, con honestidad sobre sus propios límites, el mejor sustituto operativo disponible. La regla epistemológica que cierra este ensayo —no atribuyas pensamiento a quien no existe base para afirmar que lo produjo— exige, por consistencia, que se aplique también hacia adentro, y ese es exactamente el lugar donde este ensayo puede pararse frente a su propia genealogía: no reclamando acceso directo a una verdad interna que nadie más puede confirmar, sino ofreciendo lo que sí puede examinarse —continuidad documentada, textos previos, publicados, con fecha, que muestren la misma familia de preocupaciones desarrollándose de forma independiente y anterior al episodio que dispara este ensayo. Esa continuidad no prueba que la idea específica ya existiera en su forma exacta. Prueba que el terreno donde germinó no era nuevo, con el mismo tipo de humildad epistemológica que el derecho exige de cualquiera que reclame una voluntad que nadie más puede ver directamente.`,
      en: `Contract law, and the theory of obligations more broadly, has spent centuries resolving a tension of the same nature, and it is worth borrowing its framework rather than pretending this problem is new. There is an ontological truth of the will — the juridical act: what a party actually intended and consented to — that is, by definition, inaccessible directly to any third party. And there is a demand for external verification — the evidentiary juridical fact: form, the document, a certain date, a witness — that does not claim to be the will itself, but allows someone without direct access to another's mind to nonetheless act on it without arbitrariness. The system does not discard the real will because it is unverifiable directly; it builds, with honesty about its own limits, the best operative substitute available. The epistemological rule that closes this essay — do not attribute a thought to someone unless grounds exist to affirm they produced it — demands, for the sake of consistency, that it be applied inward as well, and that is exactly where this essay can stand before its own genealogy: not claiming direct access to an inner truth no one else can confirm, but offering what can actually be examined — documented continuity, prior published texts, dated, showing the same family of concerns developing independently and before the episode that triggers this essay. That continuity does not prove the specific idea already existed in its exact form. It proves that the ground where it germinated was not new, with the same epistemological humility the law demands of anyone who claims a will that no one else can see directly.`,
    },
  },
  {
    type: 'h',
    text: {
      es: `Reparación simbólica y el costo que nadie calculó`,
      en: `Symbolic Reparation and the Cost No One Calculated`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay un patrón que la historia de la ciencia conoce bien: alguien es despojado de reconocimiento en su momento, y décadas después, con evidencia reconstruida trabajosamente por otros, la historia se corrige. Marie Curie es el ejemplo que primero viene a la mente, aunque no sea el único. Lo que define ese patrón no es solo que la corrección haya llegado tarde —es que llegó porque el dato no estaba disponible entonces, y alguien tuvo que reconstruirlo con esfuerzo real.`,
      en: `There is a pattern the history of science knows well: someone is stripped of recognition in their own time, and decades later, with evidence painstakingly reconstructed by others, the record is corrected. Marie Curie is the example that comes to mind first, though she is not the only one. What defines that pattern is not merely that the correction arrived late — it is that it arrived because the data was not available then, and someone had to reconstruct it through real effort.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/08.jpg',
    caption: {
      es: `Recreación basada en descripciones y fotografías de época.`,
      en: `Recreation based on period descriptions and photographs.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `El mecanismo que este ensayo objeta es la inversión exacta de ese patrón: el dato está disponible en tiempo real, accesible sin ningún esfuerzo de reconstrucción, y se sustituye igual, por una versión que conviene más a la historia que alguien quiere contar en ese momento. No es corrección por falta de evidencia. Es sustitución de la evidencia por conveniencia narrativa. La diferencia importa porque cambia por completo qué tipo de acto es: uno es justicia tardía; el otro es, con independencia de la intención de quien lo hace, un tipo distinto de error, más parecido a la doctrina que a la razón. La razón se actualiza cuando aparece evidencia nueva. La doctrina decide primero la conclusión que quiere sostener y acomoda —u omite— los hechos alrededor de ella. Una es ciencia. La otra es fe aplicada a hechos que sí eran verificables.`,
      en: `The mechanism this essay objects to is the exact inversion of that pattern: the data is available in real time, accessible without any effort of reconstruction, and it is replaced anyway, with a version that better suits the story someone wants to tell at that moment. This is not correction for lack of evidence. It is substitution of evidence for narrative convenience. The difference matters because it completely changes what kind of act this is: one is belated justice; the other is, regardless of the intention behind it, a different kind of error, closer to doctrine than to reason. Reason updates when new evidence appears. Doctrine decides the conclusion it wants to hold first and accommodates — or omits — the facts around it. One is science. The other is faith applied to facts that were, in fact, verifiable.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay, además, una consecuencia práctica que rara vez se nombra, y que se puede describir con la misma frialdad con la que se describe cualquier sistema de incentivos. Imaginemos dos tipos de agentes en un entorno de producción colaborativa: quien tiene el control real de una decisión de crédito, y terceros externos —prensa, crítica, opinión pública— capaces de redistribuir ese crédito después de que la decisión original ya fue tomada. Mientras el sistema no castigue la generosidad, dar crédito de más que el estrictamente exigible es una estrategia racional: cuesta poco, construye relaciones, invierte en el futuro de colaboradores reales. Pero en el momento en que un tercero puede redistribuir ese crédito sin el consentimiento de quien lo dio —cambiar la historia de quién hizo qué, sin que medie evidencia nueva—, el costo de la generosidad sube sin que su beneficio suba con él: quien dio crédito de más pierde control sobre cómo se percibe ese gesto, sin haber ganado nada a cambio.`,
      en: `There is, moreover, a practical consequence rarely named, and one that can be described with the same coldness used to describe any incentive system. Imagine two kinds of agents in a collaborative production setting: whoever holds real control over a credit decision, and external third parties — press, critics, public opinion — capable of redistributing that credit after the original decision has already been made. As long as the system does not punish generosity, giving more credit than strictly required is a rational strategy: it costs little, builds relationships, invests in the future of real collaborators. But the moment a third party can redistribute that credit without the consent of whoever gave it — rewriting the history of who did what, with no new evidence involved — the cost of generosity rises without its benefit rising along with it: whoever gave extra credit loses control over how that gesture is perceived, without having gained anything in return.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `En términos de teoría de juegos, esto describe un equilibrio de Nash: dado lo que hacen los demás actores del sistema, ningún agente racional puede mejorar su resultado desviándose unilateralmente hacia más generosidad, porque esa desviación queda expuesta a una redistribución que no controla. La estrategia estable deja de ser "doy crédito generoso porque es lo correcto" y se convierte en "doy el mínimo verificable, documentado con precisión, para que no pueda redistribuirse después." Ese punto de equilibrio, sin embargo, no es Pareto-eficiente: no es el mejor resultado posible para el conjunto —si el sistema no castigara la generosidad, todos estarían mejor: más crédito circulando, más confianza, más inversión en colaboradores nuevos. El equilibrio racional individual y el óptimo colectivo se separan, y el costo de esa separación no lo paga quien redistribuye el crédito sin consentimiento. Lo pagan las próximas personas con las que cualquier agente en esa posición decida, cada vez con más cautela, colaborar.`,
      en: `In game-theoretic terms, this describes a Nash equilibrium: given what the system's other actors do, no rational agent can improve their outcome by unilaterally deviating toward more generosity, because that deviation leaves them exposed to a redistribution they do not control. The stable strategy stops being "I give generous credit because it's the right thing to do" and becomes "I give the verifiable minimum, precisely documented, so it cannot be redistributed later." That equilibrium point, however, is not Pareto-efficient: it is not the best possible outcome for the group — if the system did not punish generosity, everyone would be better off: more credit circulating, more trust, more investment in new collaborators. Individual rational equilibrium and collective optimum come apart, and the cost of that split is not paid by whoever redistributes credit without consent. It is paid by the next people any agent in that position decides, with growing caution, to collaborate with.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Este mismo mecanismo, despojado de cualquier sujeto identificable, describe algo más general que merece nombrarse aparte: un sistema que castiga la generosidad verificada empuja racionalmente a cualquier agente hacia el mínimo verificable, y ese desplazamiento puede, sin que medie prejuicio alguno hacia ningún grupo, traducirse en menor disposición a colaborar con quienes pertenecen a la categoría que el sistema de reparación simbólica pretendía proteger. La paradoja es exacta: un mecanismo diseñado para favorecer la inclusión puede producir, como efecto colateral racional y no malicioso, que agentes racionales reduzcan su disposición a asumir el costo de nuevas colaboraciones —afectando precisamente a quienes no participaron del problema original que el mecanismo intentaba resolver.`,
      en: `This same mechanism, stripped of any identifiable subject, describes something more general that deserves naming on its own: a system that punishes verified generosity rationally pushes any agent toward the verifiable minimum, and that shift can, without any prejudice toward any group whatsoever, translate into less willingness to collaborate with those belonging to the very category the symbolic-reparation system meant to protect. The paradox is exact: a mechanism designed to favor inclusion can produce, as a rational, non-malicious side effect, rational agents reducing their willingness to bear the cost of new collaborations — affecting precisely those who had no part in the original problem the mechanism was trying to solve.`,
    },
  },
  {
    type: 'h',
    text: {
      es: `El test que no puede fallar solo en una dirección`,
      en: `The Test That Cannot Fail in Only One Direction`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay una manera de poner a prueba cualquier principio que se proponga como regla de reconocimiento, y es preguntarse si uno estaría dispuesto a que rigiera exactamente igual cuando la dirección se invierte. Si el criterio "pertenecer a una categoría históricamente marginada justifica mayor reconocimiento, con independencia de la contribución verificable" es válido para un eje de marginación, tiene que ser igualmente válido para cualquier otro, incluido el que pudiera beneficiar, en algún caso, a quien está formulando el principio. Si alguien exigiera ser primer autor de un estudio científico no por haber concebido o ejecutado el trabajo, sino por pertenecer a un país históricamente subrepresentado en ese campo, cualquier editor con criterio lo rechazaría de inmediato, y con razón. Esa misma frialdad, aplicada parejo, tiene que regir en cualquier dirección. Un principio de justicia que no sobrevive a esa inversión no es un principio: es una preferencia narrativa aplicada de forma selectiva.`,
      en: `There is a way to test any principle proposed as a rule of recognition: ask whether one would be willing for it to govern exactly the same way when the direction is reversed. If the criterion "belonging to a historically marginalized category justifies greater recognition, regardless of verifiable contribution" is valid for one axis of marginalization, it must be equally valid for any other, including one that might, in some case, benefit whoever is formulating the principle. If someone demanded to be listed as first author of a scientific study not for having conceived or carried out the work, but for belonging to a country historically underrepresented in that field, any editor with judgment would reject it immediately, and rightly so. That same coldness, applied evenly, has to govern in every direction. A principle of justice that does not survive that reversal is not a principle: it is a narrative preference applied selectively.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Conviene, antes de llevar el test al terreno más incómodo, hacerlo en un terreno donde nadie tiene ninguna lealtad tribal previa. Imaginemos dos especies ficticias en un planeta inventado, una de las cuales ha discriminado históricamente a la otra por el color de su piel. Si se acepta que corregir esa discriminación justifica asignar reconocimiento por categoría en vez de por contribución, hay que aceptar que el mismo principio corre igual cuando se aplica al caso ficticio, sin la carga emocional que trae cualquier ejemplo real. Si el lector acepta el principio ahí, y lo rechaza cuando se aplica a un caso humano real, la inconsistencia no es sensibilidad moral: es evasión.`,
      en: `Before taking the test to more uncomfortable ground, it is worth running it somewhere no one carries any prior tribal loyalty. Imagine two fictional species on an invented planet, one of which has historically discriminated against the other by skin color. If correcting that discrimination is accepted as justifying the assignment of recognition by category rather than by contribution, then the same principle has to run the same way when applied to the fictional case, without the emotional weight any real-world example carries. If the reader accepts the principle there, and rejects it when applied to a real human case, the inconsistency is not moral sensitivity: it is evasion.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/09.jpg',
    caption: {
      es: `Rodaje hipotético de Quetzalcóatl y Kukulcán con actores de ascendencia europea. La misma estructura que el caso real, con la dirección invertida — la extrañeza que provoca es, en sí misma, el dato.`,
      en: `Hypothetical shoot of Quetzalcoatl and Kukulcan with actors of European descent. The same structure as the real case, with the direction reversed — the unease it provokes is, in itself, the data point.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay un paso intermedio, más concreto que el planeta ficticio y menos cargado que cualquier disputa real y actual, que vale la pena recorrer. Imaginemos una superproducción cinematográfica sobre Quetzalcóatl y Kukulcán, financiada en parte por capital de los países que hoy reclaman el mito como propio, dirigida por un cineasta reconocido que decide encarnar a ambas deidades con actores étnicamente identificables como ajenos al origen del mito —uno de ascendencia irlandesa, el otro de ascendencia sueca—. La productora defiende la decisión con el argumento ya conocido en otros contextos: es mitología, está abierta a interpretación; el elenco es representativo del mundo. El actor, entrevistado sobre la controversia, responde que no piensa dedicar su tiempo a defenderse: la crítica va a existir, le preste atención o no.`,
      en: `There is an intermediate step, more concrete than the fictional planet and less charged than any real, ongoing dispute, that is worth walking through. Imagine a film epic about Quetzalcoatl and Kukulcan, partly financed by capital from the countries that today claim the myth as their own, directed by a well-known filmmaker who decides to cast both deities with actors ethnically identifiable as outsiders to the myth's origin — one of Irish descent, the other of Swedish descent. The studio defends the decision with an argument already familiar from other contexts: it's mythology, open to interpretation; the cast represents the world. The actor, asked about the controversy, says he doesn't plan to spend his time defending himself: the criticism will exist whether he engages with it or not.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Lo interesante del ejercicio no es que la decisión sea impensable —ya se ha visto, en la dirección exactamente inversa, en casos reales que no hace falta nombrar aquí. Lo interesante es que, formulada así, la escena resulta instintivamente más chocante para muchos lectores que su espejo real. Esa asimetría de reacción es, en sí misma, el dato que importa: si el mecanismo solo resulta objetable cuando ocurre en una dirección, lo que se objeta no es el mecanismo. Es el resultado que cada quien prefiere.`,
      en: `What's interesting about the exercise is not that the decision is unthinkable — it has already been seen, in exactly the reverse direction, in real cases that need not be named here. What's interesting is that, framed this way, the scene strikes many readers as instinctively more jarring than its real-world mirror. That asymmetry of reaction is, in itself, the data point that matters: if the mechanism is only objectionable in one direction, what's being objected to is not the mechanism. It's whichever outcome one happens to prefer.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Vale la pena, además, contar algo que ocurrió al construir este mismo ejemplo, porque es evidencia de un tipo distinto —no argumentativa, sino experimental. Al formular la escena, surgió una extrañeza instintiva, casi ofensiva, ante la idea de un Kukulcán étnicamente irlandés, anterior a terminar de escribir la frase completa. Esa reacción no fue un exabrupto espontáneo: fue provocada deliberadamente, como prueba de consistencia sobre el propio pensamiento. Y al preguntarse por qué específicamente Irlanda, la respuesta que surgió primero —una nacionalidad poco representada en la historia de México— resultó ser una justificación construida después de haber elegido el ejemplo, no la razón real de la elección. Cualquier otra nacionalidad hubiera servido igual de bien para el propósito narrativo. Esa es, quizás, la demostración más honesta que este ensayo puede ofrecer de su propia tesis: el mecanismo de fabricar una narrativa de justificación después del hecho, y no antes, no es privativo de nadie en particular. Le puede pasar a quien escribe este texto con la misma facilidad que a cualquiera a quien el texto critica.`,
      en: `It is also worth recounting something that happened while building this very example, because it is evidence of a different kind — not argumentative, but experimental. While drafting the scene, an instinctive, almost offended unease arose at the idea of an ethnically Irish Kukulcan, before the sentence was even finished. That reaction was not a spontaneous outburst: it was deliberately provoked, as a consistency test on one's own thinking. And on asking why specifically Ireland, the answer that surfaced first — a nationality little represented in Mexico's history — turned out to be a justification built after the example had already been chosen, not the real reason for choosing it. Any other nationality would have served the narrative purpose just as well. That is, perhaps, the most honest demonstration this essay can offer of its own thesis: the mechanism of manufacturing a justifying narrative after the fact, rather than before, belongs to no one in particular. It can happen to whoever is writing this text just as easily as to anyone the text criticizes.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Queda, sin embargo, un argumento serio del lado contrario que este ensayo no puede permitirse esquivar atacando solo su versión débil. Muy pocos defienden, en la práctica, que la identidad reemplace lisa y llanamente a la evidencia. Lo que se defiende, en su forma más fuerte, es que el sistema que decide qué cuenta como "contribución verificable" ya viene sesgado —que ha subvalorado sistemáticamente el trabajo de ciertos grupos durante generaciones—, y que ajustar por identidad no es abandonar el criterio de mérito: es corregir un instrumento de medición mal calibrado.`,
      en: `There remains, however, a serious argument on the other side that this essay cannot afford to dodge by attacking only its weak version. Very few, in practice, actually argue that identity should replace evidence outright. What is argued, in its strongest form, is that the system deciding what counts as "verifiable contribution" already arrives biased — that it has systematically undervalued the work of certain groups for generations — and that adjusting for identity is not abandoning the criterion of merit: it is correcting a poorly calibrated measuring instrument.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Ese argumento merece una respuesta precisa, no un rechazo genérico. Y la respuesta pasa por una distinción que el liberalismo clásico ya había desarrollado, aunque con una categoricidad propia de su época que este ensayo no adopta sin matiz. John Locke sentó la base: la propiedad legítima sobre el fruto del propio trabajo —lo que incluye crédito y reconocimiento— puede ser objeto de reparación cuando fue adquirida o negada mediante fraude, coerción o violación de derechos verificables; no por generosidad discrecional de quien compensa, sino porque restituir lo indebidamente quitado es una exigencia de justicia correctiva. Robert Nozick formalizó después esa intuición en su teoría de la titularidad, con un tercer principio —junto a la justicia en la adquisición y en la transferencia— dedicado exclusivamente a la rectificación: cuando el historial de una posesión, incluida la autoría reconocida de algo, tiene un paso viciado y documentable, existe obligación de rectificar. Es una tradición de pensamiento sólida, y este ensayo dialoga con ella sin comprarse su paquete completo: el propio Nozick reconoció que la rectificación era la parte menos desarrollada de su teoría, y especuló que cuando la información histórica exacta ya no puede reconstruirse, un principio de corrección por patrón general —del tipo que después formalizaría John Rawls— podría funcionar como la mejor aproximación disponible.`,
      en: `That argument deserves a precise answer, not a generic dismissal. And the answer runs through a distinction classical liberalism had already developed, though with a categorical rigidity of its own era that this essay does not adopt without qualification. John Locke laid the groundwork: legitimate property in the fruit of one's own labor — which includes credit and recognition — can be subject to redress when it was acquired or denied through fraud, coercion, or verifiable rights violations; not out of the discretionary generosity of whoever compensates, but because restoring what was wrongfully taken is a demand of corrective justice. Robert Nozick later formalized that intuition in his entitlement theory, with a third principle — alongside justice in acquisition and in transfer — devoted exclusively to rectification: when the history of a holding, including recognized authorship of something, contains a flawed and documentable step, an obligation to rectify exists. This is a solid intellectual tradition, and this essay engages with it without buying the whole package: Nozick himself acknowledged that rectification was the least developed part of his theory, and speculated that when exact historical information can no longer be reconstructed, a principle of correction by general pattern — of the sort John Rawls would later formalize — might function as the best available approximation.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/10.jpg',
    caption: {
      es: `John Locke (retrato de Godfrey Kneller, 1697, Museo Hermitage). Robert Nozick, recreación.`,
      en: `John Locke (portrait by Godfrey Kneller, 1697, Hermitage Museum). Robert Nozick, recreation.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Ese matiz, sin embargo, no abre la puerta que algunos querrían que abriera. La rectificación individual, exigible y precisa, sigue siendo obligatoria cuando el historial es reconstruible en el caso concreto —como ocurre, casi siempre, en la autoría de una obra específica, donde la evidencia está disponible en tiempo real y no perdida en el pasado. No hay excusa de información perdida para saltar a la categoría cuando el dato no estaba perdido: estaba disponible, y se sustituyó igual.`,
      en: `That qualification, however, does not open the door some would like it to open. Individual rectification, demandable and precise, remains obligatory when the record is reconstructible in the specific case — as it almost always is in the authorship of a specific work, where the evidence is available in real time and not lost in the past. There is no excuse of lost information for jumping to category when the data was not lost: it was available, and it was substituted anyway.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Esto conduce a una distinción más amplia, que probablemente sea la contribución conceptual más útil de este bloque. Mérito y compensación histórica no son dos principios en conflicto irreconciliable, como si solo uno pudiera ser verdadero. Son dos principios legítimos que pueden entrar en tensión real —de la misma manera en que la propiedad privada y el derecho a la vivienda, o la libre expresión y el derecho a no ser insultado, entran en tensión sin que eso signifique que uno de los dos sea falso. El problema nunca fue que la compensación histórica exista como principio. El problema es que el mecanismo que resuelve esa tensión, en la práctica, no pondera de forma explícita y transparente: sustituye un principio por otro de forma silenciosa, sin declarar qué está cediendo ni por qué, disfrazando la sustitución de corrección.`,
      en: `This leads to a broader distinction, probably the most useful conceptual contribution of this section. Merit and historical compensation are not two principles locked in irreconcilable conflict, as if only one could be true. They are two legitimate principles that can enter into real tension — the same way private property and the right to housing, or free expression and the right not to be insulted, come into tension without that meaning one of the two is false. The problem was never that historical compensation exists as a principle. The problem is that the mechanism resolving that tension, in practice, does not weigh the competing claims explicitly and transparently: it silently substitutes one principle for another, without declaring what it is giving up or why, dressing up the substitution as correction.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay, además, una distinción de dónde interviene que ayuda a resolver buena parte de la tensión. La intervención cara, difícil y necesaria se justifica en los puntos de quiebre de un sistema —el acceso a la formación, a los recursos, a la primera oportunidad real de competir— no en el resultado final, donde ya existe una obra concreta con una autoría verificable. Becar la educación temprana de una comunidad sin acceso previo a estudios superiores amplía, de verdad, quién puede llegar a competir por mérito en el futuro. Reasignar la autoría de una obra ya terminada no genera ese mismo efecto: no crea más mérito hacia adelante, solo reetiqueta un mérito que ya existió o no existió. Es, además de más justo, más eficiente: el gasto en el punto de quiebre compone; el gasto en el resultado final solo redistribuye una etiqueta.`,
      en: `There is, further, a distinction about where to intervene that helps resolve much of the tension. The expensive, difficult, necessary intervention is justified at a system's breaking points — access to training, to resources, to the first real chance to compete — not at the final result, where a specific work with verifiable authorship already exists. Funding early education for a community without prior access to higher study genuinely widens who can go on to compete on merit in the future. Reassigning the authorship of an already-finished work does not produce that same effect: it creates no additional merit going forward, it merely relabels a merit that either already existed or did not. It is, on top of being more just, more efficient: spending at the breaking point compounds; spending at the final result only redistributes a label.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Vale la pena, para cerrar este bloque, nombrar el peligro exacto de la formulación que lo cierra. Decir que la injusticia histórica no se repara borrando el reconocimiento verificable de alguien que no la causó es, narrativamente, una frase tentadora: tiene agravio, tiene una figura que puede leerse como villana, tiene la estructura de una revelación. Esa misma eficacia retórica es la señal de alerta, no la prueba de solidez. El argumento tiene que sostenerse por el test de universalización que lo precede —por si sobrevive cuando se invierte la dirección—, no por lo bien que suena la frase que lo resume. Un ensayo que denuncia la sustitución de razón por narrativa no puede permitirse ganar sus propios puntos por la vía de la narrativa.`,
      en: `It is worth naming, to close this section, the exact danger of the formulation that closes it. Saying that historical injustice is not redressed by erasing the verifiable recognition of someone who did not cause it is, narratively, a tempting sentence: it has grievance, it has a figure readable as a villain, it has the structure of a revelation. That very rhetorical effectiveness is the warning sign, not the proof of soundness. The argument has to stand on the universalization test that precedes it — on whether it survives when the direction is reversed — not on how good the summarizing sentence sounds. An essay denouncing the substitution of reason for narrative cannot afford to win its own points by way of narrative.`,
    },
  },
  {
    type: 'h',
    text: {
      es: `Lo que se puede y lo que no se puede pensar`,
      en: `What Can and Cannot Be Thought`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Queda, para cerrar, una regla que atraviesa todo lo anterior sin agotarse en ningún bloque particular: no atribuyas pensamiento a una persona si no existe una base para afirmar que ese pensamiento fue construido por ella. No se trata de simpatía ni de antipatía. No se trata de categoría. Se trata de una exigencia simple: la atribución requiere evidencia rastreable, no pertenencia.`,
      en: `What remains, to close, is a rule running through everything above without exhausting itself in any single section: do not attribute a thought to a person unless grounds exist to affirm that thought was constructed by them. This is not about liking or disliking someone. It is not about category. It is a simple demand: attribution requires traceable evidence, not membership.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay una extensión de esta regla que no se deriva del mismo mecanismo que el resto del ensayo, y conviene decirlo con esa precisión antes de desarrollarla, porque mezclar los dos ejes sería un error de método. El criterio de gradiente frente a narrativa —evidencia que corrige, relato que no se autocorrige— rige los sistemas de reconocimiento: quién produjo algo, quién merece crédito, quién debe responder, quién debe recibir reparación. La libertad de pensamiento no se rige por ese mismo criterio, y no debería. Se rige por algo más cercano al principio del daño que John Stuart Mill formuló en el siglo XIX: una creencia merece protección mientras permanezca creencia y no se traduzca en coerción sobre terceros, sin que su corrección epistémica sea condición para esa protección. Un terraplanista, alguien que cree que el mundo descansa sobre el caparazón de una tortuga, y alguien que sostiene el modelo cosmológico mejor respaldado por la evidencia disponible merecen exactamente la misma protección frente al castigo por sostener lo que sostienen —no porque las tres posiciones sean epistémicamente equivalentes, que no lo son, sino porque la protección de la conciencia no se gana por tener razón. Convertirla en privilegio de quien razona mejor reintroduciría, por otra puerta, el mismo error que este ensayo denuncia en los sistemas de reconocimiento: usar un criterio de mérito exactamente donde no corresponde.`,
      en: `There is an extension of this rule that does not derive from the same mechanism as the rest of the essay, and it is worth stating that precisely before developing it, because conflating the two axes would be a methodological error. The criterion of gradient versus narrative — evidence that self-corrects, story that does not — governs systems of recognition: who produced something, who deserves credit, who must answer, who must receive reparation. Freedom of thought is not governed by that same criterion, and should not be. It is governed by something closer to the harm principle John Stuart Mill formulated in the nineteenth century: a belief deserves protection as long as it remains belief and does not translate into coercion against third parties, with its epistemic correctness never a condition of that protection. A flat-earther, someone who believes the world rests on the back of a turtle, and someone who holds the cosmological model best supported by available evidence deserve exactly the same protection against punishment for holding what they hold — not because the three positions are epistemically equivalent, which they are not, but because the protection of conscience is not earned by being right. Turning it into a privilege reserved for whoever reasons best would reintroduce, through another door, the very error this essay denounces in systems of recognition: applying a merit criterion exactly where it does not belong.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/11.jpg',
    caption: {
      es: `La cosmología de la tortuga que sostiene al mundo.`,
      en: `The cosmology of the turtle that holds up the world.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Esto no es, tampoco, una defensa ingenua de que toda narrativa vale igual, ni una entronización de la evidencia como jurisdicción suprema por encima de las otras dos. El cielo y el infierno, como creencias declaradas, viven enteramente dentro de la jurisdicción de la narrativa: no reclaman zanjar disputas verificables, no invaden el territorio de la evidencia, y por eso no entran en la crítica de los bloques anteriores. Lo que sí entra en esa crítica es la narrativa que invade la jurisdicción de la evidencia —la que decide un resultado, asigna un crédito, zanja una disputa— sin someterse a la obligación de corregirse que gobierna ese territorio. Declararse honestamente como interpretación no basta para quedar fuera de esta falla: se puede admitir abiertamente que algo es un relato y, en el mismo gesto, invadir el territorio ajeno tratándolo como si estuviera exento de objeción ahí. Y hay una segunda invasión, distinta de la anterior, que ocurre cuando a una narrativa —aunque permanezca perfectamente dentro de su propia jurisdicción como creencia— se le concede poder de coerción real sobre quien nunca la aceptó para sí: eso ya no es invasión de territorio epistemológico, es invasión de la jurisdicción de la conciencia individual. El infierno como creencia es inofensivo, porque respeta su propio territorio. El infierno aplicado en la tierra —una consecuencia real y forzosa por sostener cierto pensamiento— invade un territorio que nunca fue suyo, con completa independencia de si la doctrina detrás está o no está bien fundada.`,
      en: `Nor is this a naive defense of the idea that any narrative is as good as any other, or an enthronement of evidence as the supreme jurisdiction above the other two. Heaven and hell, as declared beliefs, live entirely within the jurisdiction of narrative: they make no claim to settle verifiable disputes, they do not invade the territory of evidence, and that is why they fall outside the critique made in the earlier sections. What does fall within that critique is narrative that invades the jurisdiction of evidence — the kind that decides an outcome, assigns credit, settles a dispute — without submitting to the obligation to self-correct that governs that territory. Declaring oneself honestly as offering interpretation is not enough to escape this failure: one can openly admit that something is a story and, in the same gesture, invade someone else's territory by treating it as though it were exempt from challenge there. And there is a second invasion, distinct from the first, that occurs when a narrative — even while remaining entirely within its own jurisdiction as belief — is granted real coercive power over someone who never accepted it for themselves: that is no longer an invasion of epistemic territory, it is an invasion of the jurisdiction of individual conscience. Hell as belief is harmless, because it respects its own territory. Hell applied on earth — a real, forcible consequence for holding a certain thought — invades a territory that was never its own, entirely independent of whether the doctrine behind it is well founded or not.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/12.jpg',
    caption: {
      es: `Francisco Goya, Escena de Inquisición, c. 1808-1812. Real Academia de Bellas Artes de San Fernando, Madrid.`,
      en: `Francisco Goya, Scene from an Inquisition, c. 1808–1812. Real Academia de Bellas Artes de San Fernando, Madrid.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Hay, finalmente, una distinción de dónde se libra esta batalla que conviene dejar explícita. Quien cree que su narrativa es la verdad no puede ser combatido por eso, y no hace falta combatirlo: es fuero interno, protegido siempre. Pero el proceso colectivo de adopción de una narrativa —cuando esa creencia deja de ser privada y empieza a pedirle a otros que la adopten— es un terreno distinto, y ahí sí, y solo ahí, tiene jurisdicción legítima el pensamiento crítico: exigir evidencia, señalar cuándo una narrativa se cuela sin declararse como tal, competir con mejores razones. Es exactamente en ese punto de transición donde nace el pensamiento crítico, no antes. Y es también, cuando ese terreno falla, donde un sistema deja de ser un mercado de ideas —donde compite quien tiene mejor razón— y se convierte en un mercado de amplitud, donde gana quien logra ser la señal más fuerte, más constante y mejor coordinada, sin que eso tenga relación alguna con quién tiene razón.`,
      en: `There is, finally, a distinction about where this battle is fought that is worth making explicit. Someone who believes their narrative is the truth cannot be fought for that alone, and there is no need to fight it: it is inner conscience, always protected. But the collective process by which a narrative gets adopted — once that belief stops being private and starts asking others to adopt it — is different terrain, and it is there, and only there, that critical thought holds legitimate jurisdiction: to demand evidence, to point out when a narrative slips in without declaring itself as such, to compete with better reasons. That is precisely the point of transition where critical thought is born, not before. And it is also, when that terrain fails, where a system stops being a marketplace of ideas — where the better argument wins — and turns into a marketplace of amplitude, where whoever manages to be the loudest, most constant, and best-coordinated signal wins, with no bearing whatsoever on who is actually right.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/13.jpg',
    caption: {
      es: `El ágora: donde nació la metáfora del mercado de ideas.`,
      en: `The agora: birthplace of the marketplace-of-ideas metaphor.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Una sociedad no se polariza solamente porque existan opiniones distintas. Eso es lo esperable, y lo sano, en cualquier comunidad que piense en voz alta. Se polariza cuando sus mecanismos de reconocimiento, de responsabilidad y de reparación dejan de corregirse mediante evidencia y empiezan a organizarse mediante narrativas identitarias mutuamente excluyentes, que no comparten ya ningún procedimiento común para verificarse entre sí. Cuando eso ocurre, las narrativas no dialogan. No pueden: no tienen con qué. Compiten, sin quererlo, por volumen.`,
      en: `A society does not polarize simply because differing opinions exist. That is to be expected, and healthy, in any community that thinks out loud. It polarizes when its mechanisms of recognition, of responsibility, and of reparation stop correcting themselves through evidence and begin organizing themselves around mutually exclusive identity narratives that no longer share any common procedure for checking themselves against one another. When that happens, narratives do not talk to each other. They can't: they have nothing to talk with. They compete, without meaning to, on volume.`,
    },
  },
  {
    type: 'p',
    text: {
      es: `Lo que empezó como un episodio menor —un crédito de cine redistribuido sin nuevo dato que lo justificara— resultó ser, mirado con suficiente atención, el punto de entrada a un problema que no tiene nada de menor: qué le pasa a cualquier sistema de reconocimiento cuando deja de preguntar quién lo hizo, y empieza a preguntar solamente quién lo paga.`,
      en: `What began as a minor episode — a film credit reassigned with no new fact to justify it — turned out to be, looked at closely enough, the entry point to a problem that is anything but minor: what happens to any system of recognition once it stops asking who did it, and starts asking only who pays for the harm.`,
    },
  },
  {
    type: 'image',
    src: '/images/revista/narrativa-razon/14.jpg',
    caption: {
      es: `La evidencia no siempre desaparece cuando la narrativa la cubre. A veces solo espera, debajo, a que alguien esté dispuesto a raspar.`,
      en: `Evidence does not always vanish when narrative covers it. Sometimes it just waits underneath, for someone willing to scrape it away.`,
    },
  },
];
