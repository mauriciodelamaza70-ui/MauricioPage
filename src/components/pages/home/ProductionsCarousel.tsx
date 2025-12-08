"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import { productionLogos } from "@/lib/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProductionsCarousel() {
  return (
    <Carousel
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[
            Autoplay({
                delay: 3000,
                stopOnInteraction: true,
            }),
        ]}
        className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {productionLogos.map((logo, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/4 flex justify-center">
            <Link 
              href={logo.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 cursor-pointer aspect-[2/3] w-[260px] relative block group"
              aria-label={`Visitar sitio de ${logo.alt}`}
            >
              <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain rounded-md shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  )
}
