"use client"

import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

import { orderedMusicCategories, MusicCard } from "./MusicCarouselShared"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Fallback estático mostrado durante SSR y hasta que el carrusel interactivo monta en el cliente.
function StaticFallback() {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex gap-4">
        {orderedMusicCategories.map((category) => (
          <div
            key={category.id}
            className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <MusicCard category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MusicCarousel() {
  // El carrusel de embla muta el DOM al inicializarse, por lo que solo se renderiza tras
  // montar en el cliente. El primer render (servidor + cliente) muestra el fallback estático,
  // evitando cualquier desajuste de hidratación sin depender de next/dynamic.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <StaticFallback />
  }

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {orderedMusicCategories.map((category) => (
          <CarouselItem key={category.id} className="sm:basis-1/2 lg:basis-1/3">
            <MusicCard category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-accent border-accent hover:bg-accent hover:text-white" />
      <CarouselNext className="text-accent border-accent hover:bg-accent hover:text-white" />
    </Carousel>
  )
}
