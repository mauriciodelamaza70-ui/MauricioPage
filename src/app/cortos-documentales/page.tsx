import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import VideoGrid from "@/components/pages/gallery/VideoGrid";
import { LangArticle } from "@/components/pages/lang-article";
import { videoGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortos documentales | Mauricio De la Maza-Benignos",
  description:
    "Cortos documentales sobre la naturaleza y la conservación del noreste de México. Producción y dirección: Mauricio De la Maza-Benignos.",
};

function Intro({ text }: { text: string }) {
  return (
    <p className="mt-8 mb-16 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center text-pretty">
      {text}
    </p>
  );
}

export default function CortosDocumentalesPage() {
  return (
    <>
      <PageHero title="Cortos documentales" imageId="gallery-prologo-3" objectPosition="object-[center_30%]" />
      <div className="container mx-auto px-4 py-24">
        <LangArticle
          es={
            <>
              <Intro text="Cortos documentales sobre la naturaleza y la conservación del noreste de México. Producción y dirección: Mauricio De la Maza-Benignos." />
              <VideoGrid videos={videoGallery} lang="es" />
            </>
          }
          en={
            <>
              <Intro text="Short documentaries on nature and conservation in northeastern Mexico. Produced and directed by Mauricio De la Maza-Benignos." />
              <VideoGrid videos={videoGallery} lang="en" />
            </>
          }
        />
      </div>
    </>
  );
}
