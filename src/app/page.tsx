'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, FileText, Aperture, Quote } from "lucide-react";
import { siteConfig, services, projects, posts } from "@/lib/data";
import HeroSlider from "@/components/pages/home/HeroSlider";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TheatreIcon } from "@/components/icons";

export default function Home() {
  const bioImage = PlaceHolderImages.find(p => p.id === 'biography-mauricio');
  const serviceIcons = {
    'Producción Audiovisual': <Camera className="h-10 w-10 text-accent" />,
    'Fotografía': <Aperture className="h-10 w-10 text-accent" />,
    'Cultura': <TheatreIcon className="h-10 w-10 text-accent" />,
    'Consultoría': <FileText className="h-10 w-10 text-accent" />,
  };
  const newBio = "Mauricio de la Maza se graduó summa cum laude con un Doctorado en Biología y Desarrollo Sustentable en la UANL; cuenta con una Maestría en administración de Empresas de la Universidad de Lancaster, Reino Unido, con programa de intercambio con ESC, Lyon, Francia, donde se especializó en Planificación Estratégica; es Ingeniero Agrónomo Zootecnista en Ingeniería Agrícola y Zootecnia del Tecnológico de Monterrey; además posee una licenciatura en Derecho con Mención Honorífica de Excelencia del TecMilenio y estudios de Maestría en Arte Cinematográfico y Multimedia en la Escuela Superior de Cine y Multimedia Ilumina.";


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
                <h2 className="font-headline text-2xl font-bold mb-4">Mauricio De la Maza-Benignos</h2>
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
              <div className="order-1 md:order-2 flex justify-center">
                {bioImage && (
                  <Image
                    src={bioImage.imageUrl}
                    alt="Mauricio De la Maza-Benignos"
                    width={400}
                    height={400}
                    className="rounded-full aspect-square object-cover shadow-2xl"
                    data-ai-hint={bioImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-black text-gray-200">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-12">
              <div className="relative inline-block mb-4">
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-px h-5 bg-accent"></div>
                <p className="text-sm tracking-[0.2em] text-accent font-semibold">PORTAFOLIO</p>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Nuestras Producciones</h2>
            </div>
            
            <div className="mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                 <iframe 
                    src="https://player.vimeo.com/video/12860646?h=c33c3a968a&color=D4A373&title=0&byline=0&portrait=0" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen>
                </iframe>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="link" className="text-2xl text-white hover:text-accent font-headline tracking-widest">
                <Link href="/galerias">¡DESCUBRE!</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="text-center p-8 border-2 border-transparent hover:border-accent hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {serviceIcons[service.title as keyof typeof serviceIcons]}
                  </div>
                  <h3 className="font-headline text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.summary}</p>
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
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Desde 1994</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Con una trayectoria que abarca casi tres décadas, hemos sido pioneros en la narrativa ambiental, combinando la ciencia, el arte y la comunicación para inspirar el cambio y promover la conservación en México y más allá.
            </p>
             <Button asChild variant="link" className="text-accent text-lg p-0 h-auto mt-6">
                <Link href="/nosotros">Nuestra historia <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
                        <Link href="/revista">Leer más <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
      </main>
    </div>
  );
}
