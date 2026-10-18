import Image from 'next/image';
import { teleologiaBody, teleologiaSubtitle } from '@/lib/teleologia-conciencia-y-sentido';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

function TeleologiaBody({ lang }: { lang: Lang }) {
  return (
    <>
      <p className="mt-10 text-center font-serif text-xl italic text-muted-foreground text-balance">
        {teleologiaSubtitle[lang]}
      </p>

      <article className="mt-10 space-y-6">
        {teleologiaBody.map((block, i) => {
          if (block.type === 'image') {
            return (
              <figure key={i} className="my-12">
                <Image
                  src={block.src}
                  alt={block.alt[lang]}
                  width={block.width}
                  height={block.height}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full rounded-lg bg-secondary"
                />
                <figcaption className="mt-3 text-sm italic text-muted-foreground">
                  {block.caption[lang]}
                </figcaption>
              </figure>
            );
          }

          if (block.type === 'h') {
            return (
              <h2
                key={i}
                className="pt-8 font-headline text-2xl font-bold text-foreground md:text-3xl text-balance"
              >
                {block.text[lang]}
              </h2>
            );
          }

          if (block.type === 'ul') {
            return (
              <ul
                key={i}
                className="list-disc space-y-3 pl-6 font-serif text-lg leading-relaxed text-foreground/80 marker:text-accent"
              >
                {block.items.map((item, j) => (
                  <li key={j} className="text-pretty">
                    {item[lang]}
                  </li>
                ))}
              </ul>
            );
          }

          return (
            <p
              key={i}
              className="font-serif text-lg leading-relaxed text-foreground/80 text-pretty [&_strong]:font-bold [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: block.text[lang] }}
            />
          );
        })}

        <p className="pt-6 font-serif text-lg font-bold text-foreground">
          Mauricio de la Maza-Benignos
        </p>
      </article>
    </>
  );
}

export default function TeleologiaEssay() {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle es={<TeleologiaBody lang="es" />} en={<TeleologiaBody lang="en" />} />
    </div>
  );
}
