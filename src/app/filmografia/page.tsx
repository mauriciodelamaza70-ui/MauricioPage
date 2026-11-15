import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import FilmCard from "@/components/pages/filmografia/FilmCard";
import { LangArticle, type Lang } from "@/components/pages/lang-article";
import { filmography } from "@/lib/data";

export const metadata: Metadata = {
  title: "Filmografía | Mauricio De la Maza-Benignos",
  description:
    "Largometrajes y documentales de Mauricio De la Maza-Benignos: Cora, Diálogos de la muerte, El zapato, El Gran Makhaira, El bonito, Ad memoriam rei perpetuam y Cuatro Ciénegas.",
};

function FilmList({ lang }: { lang: Lang }) {
  return (
    <div className="mt-16 space-y-32">
      {filmography.map((film, index) => (
        <FilmCard key={film.id} film={film} index={index} lang={lang} />
      ))}
    </div>
  );
}

export default function FilmografiaPage() {
  return (
    <>
      <PageHero title="Filmografía" imageId="gallery-prologo-3" objectPosition="object-[center_30%]" />
      <div className="container mx-auto px-4 py-24">
        <LangArticle es={<FilmList lang="es" />} en={<FilmList lang="en" />} />
      </div>
    </>
  );
}
