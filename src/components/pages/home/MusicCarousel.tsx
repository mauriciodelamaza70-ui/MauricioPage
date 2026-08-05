"use client"

import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import { musicCategories } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Orden de las primeras tarjetas visibles al cargar; el resto sigue en el orden del catálogo.
const FEATURED_ORDER = ["lidia", "sigilo-locus", "post-punk"]

const orderedCategories = [
  ...FEATURED_ORDER.map((id) => musicCategories.find((c) => c.id === id)).filter(
    (c): c is (typeof musicCategories)[number] => Boolean(c),
  ),
  ...musicCategories.filter((c) => !FEATURED_ORDER.includes(c.id)),
]

export default function MusicCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {orderedCategories.map((category) => (
          <CarouselItem key={category.id} className="sm:basis-1/2 lg:basis-1/3">
            <Link href={category.href} className="group block h-full" aria-label={`Ver ${category.title}`}>
              <Card className="overflow-hidden h-full">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.imageAlt ?? category.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={category.objectPosition ? { objectPosition: category.objectPosition } : undefined}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-accent border-accent hover:bg-accent hover:text-white" />
      <CarouselNext className="text-accent border-accent hover:bg-accent hover:text-white" />
    </Carousel>
  )
}
