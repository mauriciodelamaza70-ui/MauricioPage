import Image from "next/image";
import Link from "next/link";
import { Award, Globe, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Film } from "@/lib/types";
import type { Lang } from "@/components/pages/lang-article";

const LABELS = {
  es: {
    synopsis: "Sinopsis",
    awards: "Reconocimientos y Premios",
    credits: "Créditos",
    whereToWatch: "Dónde verla",
    officialLinks: "Enlaces oficiales",
    website: "Sitio Web",
    watchOnYoutube: "Ver en YouTube",
    links: "Enlaces",
  },
  en: {
    synopsis: "Synopsis",
    awards: "Awards and Recognition",
    credits: "Credits",
    whereToWatch: "Where to watch",
    officialLinks: "Official links",
    website: "Website",
    watchOnYoutube: "Watch on YouTube",
    links: "Links",
  },
} as const;

export default function FilmCard({ film, index, lang }: { film: Film; index: number; lang: Lang }) {
  const t = LABELS[lang];
  const reversed = index % 2 !== 0;
  const genre = lang === "en" && film.genreEn ? film.genreEn : film.genre;
  const format = lang === "en" && film.formatEn ? film.formatEn : film.format;
  const synopsis = lang === "en" && film.synopsisEn ? film.synopsisEn : film.synopsis;
  const festivals = lang === "en" ? film.festivalsEn ?? film.festivalsEs : film.festivalsEs;
  const festivalsHeading = lang === "en" ? film.festivalsHeadingEn : film.festivalsHeadingEs;
  const note = lang === "en" ? film.noteEn : film.noteEs;
  const yearNote = lang === "en" ? film.yearNoteEn : film.yearNoteEs;
  const isDocumentary = Boolean(film.youtubeId);

  return (
    <article id={film.slug} className="grid lg:grid-cols-12 gap-12 items-center scroll-mt-28">
      <div
        className={`lg:col-span-5 relative w-full mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl group ${
          isDocumentary ? "aspect-video" : "aspect-[2/3] max-w-md"
        } ${reversed ? "lg:order-last" : ""}`}
      >
        {isDocumentary ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}`}
            title={film.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <Link href={`https://${film.website}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={film.poster}
              alt={film.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <p className="text-white text-lg font-bold">
                {film.title} ({film.year})
              </p>
            </div>
          </Link>
        )}
      </div>

      <div className="lg:col-span-7 space-y-8">
        <div>
          <h3 className="font-headline text-4xl font-bold text-foreground leading-tight mb-2 text-balance">
            {film.title} ({film.year})
          </h3>
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
            {[genre, format].filter(Boolean).join(" • ")}
          </p>
          {yearNote && <p className="text-sm text-muted-foreground mb-2">{yearNote}</p>}
          {film.subtitle && <p className="text-muted-foreground italic text-lg">{film.subtitle}</p>}
        </div>

        {synopsis && (
          <div className="space-y-4">
            <h4 className="font-bold text-xl border-l-4 border-accent pl-4">{t.synopsis}</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">{synopsis}</p>
          </div>
        )}

        {film.credits && (
          <div className="space-y-3">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              {t.credits}
            </h4>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
              {film.credits.map((credit) => (
                <div key={credit.roleEs}>
                  <dt className="inline font-semibold text-foreground">
                    {lang === "en" ? credit.roleEn : credit.roleEs}:{" "}
                  </dt>
                  <dd className="inline">{credit.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <div className="bg-secondary p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-accent" />
            <h4 className="font-bold text-lg">{festivals ? festivalsHeading : t.awards}</h4>
          </div>
          {festivals ? (
            <>
              <ul className="list-disc pl-5 text-muted-foreground leading-relaxed italic">
                {festivals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {note && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{note}</p>}
            </>
          ) : (
            <p className="text-muted-foreground leading-relaxed italic">{film.awards}</p>
          )}
        </div>

        {isDocumentary ? (
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-accent" />
              {t.links}
            </h4>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="link" className="p-0 h-auto text-accent">
                <Link
                  href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.watchOnYoutube}
                </Link>
              </Button>
              {film.review && (
                <Button asChild variant="link" className="p-0 h-auto text-accent">
                  <Link href={film.review.href}>
                    {lang === "en" ? film.review.labelEn : film.review.labelEs}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                {t.whereToWatch}
              </h4>
              <p className="text-muted-foreground">{film.streaming}</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-accent" />
                {t.officialLinks}
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="link" className="p-0 h-auto text-accent">
                  <Link href={`https://${film.website}`} target="_blank" rel="noopener noreferrer">
                    {t.website}
                  </Link>
                </Button>
                <Button asChild variant="link" className="p-0 h-auto text-accent">
                  <Link href={film.imdb} target="_blank" rel="noopener noreferrer">
                    IMDb
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
