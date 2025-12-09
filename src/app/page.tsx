'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, FileText, Aperture, Quote, PlayCircle } from "lucide-react";
import { siteConfig, services, posts, productionLogos } from "@/lib/data";
import HeroSlider from "@/components/pages/home/HeroSlider";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TheatreIcon } from "@/components/icons";
import HistoryTimeline from "@/components/pages/home/HistoryTimeline";
import ProductionsCarousel from "@/components/pages/home/ProductionsCarousel";

export default function Home() {
  const bioImage = PlaceHolderImages.find(p => p.id === 'biography-mauricio');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-bg');

  const serviceIcons = {
    'Producción Audiovisual': <Camera className="h-10 w-10 text-accent" />,
    'Fotografía': <Aperture className="h-10 w-10 text-accent" />,
    'Cultura': <TheatreIcon className="h-10 w-10 text-accent" />,
    'Consultoría': <FileText className="h-10 w-10 text-accent" />,
  };
  const newBio = "Mauricio de la Maza se graduó summa cum laude con un Doctorado en Biología y Desarrollo Sustentable en la UANL; cuenta con una Maestría en administración de Empresas de la Universidad de Lancaster, Reino Unido, con programa de intercambio con ESC, Lyon, Francia, donde se especializó en Planificación Estratégica; es Ingeniero Agrónomo Zootecnista en Ingeniería Agrícola y Zootecnia del Tecnológico de Monterrey; además posee una licenciatura en Derecho con Mención Honorífica de Excelencia del TecMilenio y estudios de Maestría en Arte Cinematográfico y Multimedia en la Escuela Superior de Cine y Multimedia Ilumina.";

  const recognitionLogos = [
    { name: "IMDb", src: "/images/imdb.png", url: "https://www.imdb.com/es/name/nm14485536/" },
    { name: "FilmFreeway", src: "/images/filmlogo.png", url: "https://filmfreeway.com/MauriciodelaMazaBenignos" },
    { name: "Wikipedia", src: "/images/wikilogo.png", url: "https://en.wikipedia.org/wiki/Mauricio_De_la_Maza-Benignos" },
  ];

  const displayedServices = services.filter(service => 
    ['Producción Audiovisual', 'Fotografía', 'Cultura', 'Consultoría'].includes(service.title)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSlider />

        <section className="py-24">
            <div className="container mx-auto px-4 text-center">
                <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
                <blockquote className="font-headline text-3xl md:text-4xl font-bold max-w-4xl mx-auto leading-tight">
                    La Tierra también tiene derechos, y el Estado la obligación de velar por el acceso efectivo a la justicia ambiental.
                </blockquote>
                <p className="mt-6 text-lg font-medium text-muted-foreground">- Mauricio de la Maza-Benignos</p>
            </div>
        </section>

        <section id="nosotros" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-headline text-4xl font-bold mb-4">Mauricio De la Maza-Benignos</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>{newBio}</p>
                </div>
                <div className="mt-6">
                    <Image src="/images/FirmaNegro-1.png" alt="Firma de Mauricio De la Maza" width={200} height={100} />
                </div>
                <Button asChild variant="link" className="text-accent text-lg p-0 h-auto mt-6">
                  <Link href="/nosotros">Leer más <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 flex flex-col items-center justify-center">
                 <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
                  {recognitionLogos.map((logo) => (
                    <Link key={logo.name} href={logo.url} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                       <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={logo.name === 'Wikipedia' ? 40 : 80}
                        height={40}
                        className="object-contain h-10 w-auto"
                      />
                    </Link>
                  ))}
                </div>
                {bioImage && (
                  <Image
                    src={bioImage.imageUrl}
                    alt="Mauricio De la Maza-Benignos"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover shadow-2xl"
                    data-ai-hint={bioImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-12 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Portafolio</p>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                Nuestras Producciones
                </h2>
            </div>
            <ProductionsCarousel />
          </div>
        </section>


        <section id="servicios" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayedServices.map((service) => (
                <Card key={service.title} className="text-center p-8 border-2 border-transparent hover:border-accent hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {serviceIcons[service.title as keyof typeof serviceIcons]}
                  </div>
                  <h3 className="font-headline text-2xl font-semibold mb-2">{service.title}</h3>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="/servicios">Conoce todos los servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-widest text-accent mb-2">DESDE 1994</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12">Nuestra Historia</h2>
            <HistoryTimeline />
            <Button asChild variant="link" className="text-accent text-lg p-0 h-auto mt-12">
              <Link href="/nosotros">Conoce la historia completa <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        <section id="blog" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Nuestro Blog</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => {
                const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
                return (
                  <Card key={post.id} className="overflow-hidden group">
                    {postImage && (
                       <div className="aspect-video overflow-hidden">
                        <Image
                          src={postImage.imageUrl}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           data-ai-hint={postImage.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                      <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <Button asChild variant="link" className="text-accent p-0 h-auto mt-4">
                        <Link href={`/revista/${post.slug}`}>Leer más <ArrowRight className="ml-2 h-5 w-5" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/revista">Visita la revista</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          {ctaImage && (
            <Image
              src={ctaImage.imageUrl}
              alt={ctaImage.description}
              fill
              className="object-cover"
              data-ai-hint={ctaImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              ¿Te interesa fomentar el arte, la ciencia y cultura ambiental?
            </h2>
            <Button asChild size="lg" className="mt-8 bg-accent text-primary-foreground hover:bg-accent/90">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
}
