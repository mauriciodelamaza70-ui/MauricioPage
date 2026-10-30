import Image from 'next/image';
import { santoBody, santoSubtitle } from '@/lib/ni-tanto-que-queme-al-santo';
import { LangArticle, type Lang } from '@/components/pages/lang-article';

function SantoBody({ lang }: { lang: Lang }) {
  return (
    <>
      <p className="mt-10 text-center font-serif text-xl italic text-muted-foreground text-balance">
        {santoSubtitle[lang]}
      </p>

      <article className="mt-10 space-y-6">
        {santoBody.map((block, i) => {
          if (block.type === 'image') {
            return (
              <figure key={i} className="mx-auto my-12" style={{ maxWidth: block.width }}>
                <Image
                  src={block.src}
                  alt={block.alt[lang]}
                  width={block.width}
                  height={block.height}
                  sizes={`(max-width: 768px) 100vw, ${block.width}px`}
                  className="h-auto w-full rounded-lg bg-secondary"
                />
                <figcaption className="mt-3 text-sm italic text-muted-foreground">
                  {block.caption[lang]}
                </figcaption>
              </figure>
            );
          }

          if (block.type === 'hr') {
            return <hr key={i} className="my-10 border-border" />;
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
                  <li
                    key={j}
                    className="text-pretty"
                    dangerouslySetInnerHTML={{ __html: item[lang] }}
                  />
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
      </article>
    </>
  );
}

export default function NiTantoSantoEssay() {
  return (
    <div className="max-w-3xl mx-auto">
      <LangArticle es={<SantoBody lang="es" />} en={<SantoBody lang="en" />} />
    </div>
  );
}
