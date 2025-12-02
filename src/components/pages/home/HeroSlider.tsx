"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"

export default function HeroSlider() {
  const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    Fade()
  ]);

  return (
    <section className="relative h-[85vh] w-full text-white">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {heroImages.map((heroImage, index) => (
            <div key={heroImage.id} className="embla__slide relative h-full">
               <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center p-4 text-center">
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
