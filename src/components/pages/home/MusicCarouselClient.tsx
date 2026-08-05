"use client"

import Autoplay from "embla-carousel-autoplay"

import { orderedMusicCategories, MusicCard } from "./MusicCarouselShared"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function MusicCarouselClient() {
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
