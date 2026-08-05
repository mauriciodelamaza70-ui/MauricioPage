"use client"

import dynamic from "next/dynamic"

import { orderedMusicCategories, MusicCard } from "./MusicCarouselShared"

// Fallback estático mostrado durante SSR y hasta que el carrusel interactivo carga en el cliente.
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

// El carrusel de embla muta el DOM al inicializarse, por lo que nunca se renderiza en el
// servidor: se carga solo en el cliente para evitar cualquier desajuste de hidratación.
const MusicCarouselClient = dynamic(() => import("./MusicCarouselClient"), {
  ssr: false,
  loading: () => <StaticFallback />,
})

export default function MusicCarousel() {
  return <MusicCarouselClient />
}
