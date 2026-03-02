'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Service } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export default function ServiciosPage() {
  const talentImage1 = PlaceHolderImages.find(p => p.id === 'talent-1');
  const talentImage2 = PlaceHolderImages.find(p => p.id === 'talent-2');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'services-cta-bg');
  const [selectedService, setSelectedService] = useState<Service | null>(services[0]);

  return (
    <>
      <PageHero title="Servicios" imageId="services-hero-1" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-2">Nuestros Servicios</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Creamos tus producciones</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <button
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "group relative aspect-video block overflow-hidden rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50",
                    selectedService?.title === service.title && 'ring-4 ring-accent ring-opacity-75'
                  )}
                >
                  {serviceImage && (
                    <Image
                      src={serviceImage.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  )}
                  {/* Overlay oscurecido para mejorar contraste */}
                  <div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/45"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-center text-white leading-tight tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      {selectedService && (
        <section id="detalles-servicios" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="mb-20 scroll-mt-24">
                  <h3 className="font-headline text-4xl font-bold mb-4">{selectedService.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{selectedService.summary}</p>
                  {selectedService.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                          <h4 className="font-bold text-2xl mb-4 text-foreground">{detail.title}</h4>
                          <ul className="space-y-3 text-muted-foreground">
                              {detail.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                  <span className="text-accent mr-3 mt-1"><Check size={20} /></span>
                                  <span>{item}</span>
                              </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
        </section>
      )}

       <section className="py-24">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Desarrollamos Talento</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-16">
                  {talentImage1 && (
                    <Image src={talentImage1.imageUrl} alt={talentImage1.description} width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint={talentImage1.imageHint} />
                  )}
                  {talentImage2 && (
                    <Image src={talentImage2.imageUrl} alt={talentImage2.description} width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint={talentImage2.imageHint} />
                  )}
              </div>
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-center md:text-left">
                <div>
                  <h3 className="font-headline text-3xl font-bold mb-4">Acciones con Propósito</h3>
                  <p className="text-muted-foreground mb-6">Las nuevas ideas, proyectos, sueños y mejoras para proteger y resguardar los derechos del medio ambiente son siempre bienvenidos.</p>
                   <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contacto">Contrátanos</Link>
                  </Button>
                </div>
                 <div>
                  <h3 className="font-headline text-3xl font-bold mb-4">Dirección Creativa</h3>
                  <p className="text-muted-foreground mb-6">Muchos de los jóvenes que participaron en la preproducción de nuestros documentales quedaron enamorados de el mundo del cine, ciencia y naturaleza.</p>
                   <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contacto">Contrátanos</Link>
                  </Button>
                </div>
              </div>
          </div>
       </section>

       <section className="relative py-24">
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl mx-auto">¿Listo para dar vida a tu proyecto?</h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Sea una idea para un documental, una necesidad de consultoría o un evento cultural, estamos aquí para ayudarte a hacerlo realidad.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-primary-foreground hover:bg-accent/90">
              <Link href="/contacto">Solicita una cotización</Link>
            </Button>
          </div>
        </section>
    </>
  );
}
