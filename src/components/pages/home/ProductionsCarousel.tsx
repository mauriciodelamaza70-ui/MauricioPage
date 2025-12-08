"use client"

import React from "react"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
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
                delay: 2000,
                stopOnInteraction: false,
            }),
        ]}
        className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {productionLogos.map((logo, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center">
             <div className="p-1">
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain rounded-md"
                />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
