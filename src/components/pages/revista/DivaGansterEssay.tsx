import Image from 'next/image';
import { divaGanster, type DivaImage } from '@/lib/la-diva-y-el-ganster';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

const AUTHOR = 'Mauricio de la Maza-Benignos';
const YOUTUBE_ID = 'cX5y8UW0W28';

const LABELS = {
  es: {
    by: 'Por',
    date: '20 de Noviembre, 2026',
    film: 'Ver la película',
    watch: 'Ver en YouTube',
    playerTitle: 'LA DIVA Y EL GÁNSTER — película',
    photoCredit: 'Foto: Margen Magnético',
  },
  en: {
    by: 'By',
    date: 'November 20, 2026',
    film: 'Watch the film',
    watch: 'Watch on YouTube',
    playerTitle: 'LA DIVA Y EL GÁNSTER — film',
    photoCredit: 'Photo: Margen Magnético',
  },
} as const;

const SECTION_HEADING =
  'clear-both pt-8 font-headline text-2xl font-bold text-foreground md:text-3xl text-balance';

function Hero({ lang }: { lang: Lang }) {
  const v = divaGanster[lang];
  const t = LABELS[lang];
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full text-white">
      <Image
        src={v.cover.src}
        alt={v.cover.alt}
        fill
        sizes="100vw"
        className="object-cover object-[center_35%]"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold max-w-4xl text-balance">{v.title}</h1>
        <p className="mt-4 text-lg text-gray-300">
          {t.by}: {AUTHOR} / {t.date}
        </p>
      </div>
      <p className="absolute bottom-3 right-4 z-10 text-xs text-gray-300">{t.photoCredit}</p>
    </section>
  );
}

function Figure({ img, credit }: { img: DivaImage; credit: string }) {
  const side = img.layout === 'side';
  return (
    <figure className={side ? 'w-full md:float-right md:mb-6 md:ml-8 md:w-1/2' : 'clear-both w-full'}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes={side ? '(min-width: 768px) 384px, 100vw' : '(min-width: 768px) 768px, 100vw'}
        className="h-auto w-full"
      />
      <figcaption className="mt-2 text-right text-xs text-muted-foreground">{credit}</figcaption>
    </figure>
  );
}

function DivaBody({ lang }: { lang: Lang }) {
  const v = divaGanster[lang];
  const t = LABELS[lang];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="mt-10 text-center font-serif text-xl italic text-muted-foreground text-balance">
          {v.subtitle}
        </h2>

        <div className="mt-10 space-y-6">
          {v.body.map((block, i) => {
            if (block.type === 'img') return <Figure key={i} img={block} credit={t.photoCredit} />;
            if (block.type === 'h') {
              return (
                <h2 key={i} className={SECTION_HEADING} dangerouslySetInnerHTML={{ __html: block.html }} />
              );
            }
            return (
              <p
                key={i}
                className="font-serif text-lg leading-relaxed text-foreground/80 text-pretty"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );
          })}

          <section aria-labelledby={`${lang}-pelicula-heading`} className="clear-both space-y-4">
            <h2 id={`${lang}-pelicula-heading`} className={SECTION_HEADING}>
              {t.film}
            </h2>
            <div className="relative aspect-video w-full overflow-hidden bg-secondary">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`}
                title={t.playerTitle}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              <a
                href={`https://youtu.be/${YOUTUBE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {t.watch}
              </a>
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm italic text-muted-foreground">{v.credit}</p>
      </div>
    </div>
  );
}

export default function DivaGansterEssay() {
  return (
    <LangArticle
      beforeEs={<Hero lang="es" />}
      beforeEn={<Hero lang="en" />}
      toggleWrapperClassName="flex justify-center px-4 pt-24"
      es={<DivaBody lang="es" />}
      en={<DivaBody lang="en" />}
    />
  );
}
