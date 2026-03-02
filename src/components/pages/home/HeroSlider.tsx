
"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { biography } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function HeroSlider() {
  const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative h-[85vh] w-full text-white">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((heroImage, index) => {
            // Aplicamos diferentes niveles de zoom para corregir bordes negros
            const isExtraZoom = heroImage.id === 'hero-zapato-1';
            // Aplicamos zoom normal (10%) a ambos diálogos para mayor consistencia
            const isNormalZoom = heroImage.id === 'hero-dialogos-1' || heroImage.id === 'hero-dialogos-2';
            
            return (
              <div key={heroImage.id} className="relative h-full flex-[0_0_100%] overflow-hidden">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    isExtraZoom && "scale-125", // Mayor zoom para zapato1
                    isNormalZoom && "scale-110"  // Zoom normal para dialogos1 y dialogos2
                  )}
                  priority={index === 0}
                  data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center p-4 text-center">
        <h1 className="font-headline text-5xl font-bold leading-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
          Visión Narrativa
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-2xl tracking-wide">
          {biography.role}
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-lg text-primary-foreground hover:bg-accent/90">
            <Link href="/nosotros">Conocer su obra</Link>
        </Button>
      </div>
    </section>
  )
}
