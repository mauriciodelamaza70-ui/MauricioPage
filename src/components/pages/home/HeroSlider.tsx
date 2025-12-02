"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"

export default function HeroSlider() {
  const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

  const carouselPlugins = [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ];

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
        <Carousel
            opts={{ loop: true }}
            plugins={carouselPlugins}
            className="h-full w-full embla-fade"
        >
            <CarouselContent>
                {heroImages.map((heroImage, index) => (
                    <CarouselItem key={heroImage.id}>
                         <div className="relative h-full w-full">
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                fill
                                className="object-cover embla__slide__img"
                                priority={index === 0}
                                data-ai-hint={heroImage.imageHint}
                            />
                             <div className="absolute inset-0 bg-black/40" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      
      <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="font-headline text-5xl font-bold leading-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
          Cine Ambiental...
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
          Explorando la belleza de nuestro planeta y las historias que merecen ser contadas.
        </p>
         <p className="mt-2 text-lg italic text-gray-300 md:text-xl">
            - Mauricio De la Maza-Benignos
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-lg text-primary-foreground hover:bg-accent/90">
          <a href="https://panterracinefest.com" target="_blank" rel="noopener noreferrer">Conoce más</a>
        </Button>
      </div>
    </section>
  )
}
