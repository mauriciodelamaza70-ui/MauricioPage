import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpenText, Users, Award, Youtube } from 'lucide-react';

export default function NosotrosPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'nosotros-hero');
  const bioIntroImage = PlaceHolderImages.find((p) => p.id === 'bio-intro');

  const stats = [
    { number: 300, label: 'Artículos publicados', icon: BookOpenText },
    { number: 100, label: 'Clientes satisfechos', icon: Users },
    { number: 14, label: 'Premios recibidos', icon: Award },
  ];
  
  const firstParagraph = "Mauricio de la Maza se graduó summa cum laude con un Doctorado en Biología y Desarrollo Sustentable en la UANL; cuenta con una Maestría en administración de Empresas de la Universidad de Lancaster, Reino Unido, con programa de intercambio con la ESC Clemont, en Lyon Francia, donde se especializó en Planificación Estratégica; es Ingeniero Agrónomo Zootecnista en Ingeniería Agrícola y Zootecnia del Tecnológico de Monterrey; además posee una Licenciatura en Derecho con Mención Honorífica de Excelencia del TecMilenio y estudios de Maestría en Arte Cinematográfico y Multimedia en la Escuela Superior de Cine y Multimedia Ilumina.";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Mauricio De la Maza-Benignos"
            fill
            className="object-cover object-top"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            Mauricio de la Maza-Benignos
          </h1>
          <p className="mt-4 text-lg md:text-xl tracking-[0.2em] uppercase">
            DP | Director | Filmmaker
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-5xl md:text-6xl font-bold text-accent font-headline">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                {bioIntroImage && (
                    <div className="flex justify-center">
                         <Image
                            src={bioIntroImage.imageUrl}
                            alt="Mauricio de la Maza con cámara"
                            width={500}
                            height={500}
                            className="object-cover shadow-lg"
                            data-ai-hint={bioIntroImage.imageHint}
                         />
                    </div>
                )}
                <div>
                    <p className="text-lg text-muted-foreground relative">
                        <span className="font-headline text-7xl text-accent/50 absolute -left-8 -top-4">M</span>
                        <span className="pl-4">{firstParagraph.substring(1)}</span>
                    </p>
                    <div className="mt-8">
                        <Image src="/images/FirmaNegro-1.png" alt="Firma de Mauricio De la Maza" width={200} height={100} />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                    En 1994 le fue otorgada la medalla de “Mejores estudiantes de México” por el CONACYT y el Instituto Mexicano de Cultura, impartido por el presidente a los mejores estudiantes graduandos.
                </p>
                <p>
                    En 2014 recibió el premio “Dr. José Álvarez del Villar”, de la Sociedad Mexicana de Ictiología a la mejor tesis doctoral; y en 2015 fue galardonado con el Premio de Investigación UANL al mejor trabajo académico en Ciencias Naturales.
                </p>
                <p>
                    Desde el 2011 hasta enero de 2021 fue director general de la organización Pronatura Noreste y del 2015 a 2020 fue el primer vocal ambiental y Presidente Suplente del Consejo de Cuenca Río Bravo. Actualmente trabaja como profesionista independiente, es miembro del consejo asesor de AESPAC, A.C., y director de “De la Maza Consulting and Films”.
                </p>
                <p>
                    Antes de trabajar en Pronatura Noreste, fue director del Fondo Mundial para la Naturaleza para los programas de conservación en el norte de México y suroeste de los Estados Unidos.
                </p>
                <p>
                    Es miembro del Sistema Nacional de Investigadores (SNI 1). Ha editado libros, escrito capítulos de libros y publicaciones científicas en diversos campos académicos. También ha desarrollado análisis jurídicos y trabajo de política pública en materia de agua dulce, del ambiente natural y del desarrollo sostenible, así como ha producido y dirigido un número importante de cortometrajes y mediometrajes documentales.
                </p>
                <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-4">Lucha por El Llano de la Soledad</h3>
                    <p>
                    Encabezó la estrategia para salvar El Llano de la Soledad, la colonia más grande de perritos de la pradera, de la devastación por la industria de la papa. Dentro de sus acciones, en diciembre de 2019, Mauricio de la Maza entregó una demanda penal por escrito ante la Fiscalía General de la República, delegación Nuevo León. En el escrito indicaba que las maniobras de los tractores para cultivar papa estaban tapando las madrigueras de los perritos de la pradera y éstos morían asfixiados.
                    </p>
                    <Link href="https://www.youtube.com/watch?v=R4RZDZIX6x0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-accent hover:underline">
                    <Youtube className="mr-2 h-5 w-5" />
                    Ver video en YouTube
                    </Link>
                </div>
                <p>
                    En octubre de 2020, Mauricio de la Maza fue amedrentado con ser encarcelado, y amenazado de muerte, al intentar realizar trabajos para la conservación y restauración de los humedales en Cuatro Ciénegas, Coahuila. Leobardo Sánchez, un trabajador del municipio, acompañado de personas del ejido San Juan de Boquillas, extraían ilegalmente el agua, y al detectar que De la Maza buscaba crear obras para evitar la extracción irracional del agua, pasaron a las amenazas.
                </p>
                <p>
                    En 2020 recibió del Programa Internacional y Fronterizo del Departamento de Caza y Pesca de Arizona, E.E.U.U., el Premio a la Conservación, que otorga dicha agencia gubernamental, por su trayectoria profesional a favor de los humedales y la vida silvestre en la región transfronteriza entre ambos países. Ese mismo año produjo, filmó y dirigió el documental Ad memoriam rei perpetuam, mismo que fue oficialmente seleccionado para exhibición dentro del festival de cine internacional, Wildlife Conservation Film Festival (WCFF).
                </p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
