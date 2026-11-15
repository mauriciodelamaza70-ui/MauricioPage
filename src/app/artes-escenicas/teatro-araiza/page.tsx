import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import FilmCard from "@/components/pages/filmografia/FilmCard";
import { LangArticle, type Lang } from "@/components/pages/lang-article";
import { teatroAraiza, TEATRO_ARAIZA_PLAYLIST_ID } from "@/lib/data/teatro-araiza-data";

export const metadata: Metadata = {
  title: "Teatro de Xavier Araiza | Mauricio De la Maza-Benignos",
  description:
    "Registros cinematográficos de Diálogo entre un sacerdote y un moribundo, A puerta cerrada y La loca del maniquí, obras de Xavier Araiza montadas en formato de cine por Mauricio De la Maza-Benignos.",
};

const COPY = {
  es: {
    title: "Teatro de Xavier Araiza a través de la lente de Mauricio De la Maza-Benignos",
    text: "Registros cinematográficos de obras dirigidas por Xavier Araiza, montados en formato de cine por Mauricio De la Maza-Benignos.",
    playlist: "Lista completa",
  },
  en: {
    title: "Xavier Araiza's Theater Through the Lens of Mauricio De la Maza-Benignos",
    text: "Cinematic recordings of plays directed by Xavier Araiza, edited into film format by Mauricio De la Maza-Benignos.",
    playlist: "Full playlist",
  },
} as const;

function TheaterContent({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <>
      <header className="mt-8 max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-balance">{t.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">{t.text}</p>
      </header>
      <div className="mt-16 space-y-32">
        {teatroAraiza.map((film, index) => (
          <FilmCard key={film.id} film={film} index={index} lang={lang} />
        ))}
      </div>
      <section aria-labelledby={`playlist-${lang}`} className="mt-32 max-w-4xl mx-auto">
        <h3 id={`playlist-${lang}`} className="font-headline text-3xl font-bold text-foreground text-center mb-8">
          {t.playlist}
        </h3>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${TEATRO_ARAIZA_PLAYLIST_ID}`}
            title={t.playlist}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>
    </>
  );
}

export default function TeatroAraizaPage() {
  return (
    <>
      <PageHero title="Teatro de Xavier Araiza" imageId="gallery-prologo-3" objectPosition="object-[center_30%]" />
      <div className="container mx-auto px-4 py-24">
        <LangArticle es={<TheaterContent lang="es" />} en={<TheaterContent lang="en" />} />
      </div>
    </>
  );
}
