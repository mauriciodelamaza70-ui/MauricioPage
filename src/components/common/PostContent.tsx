'use client';

export function PostContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-lg lg:prose-xl max-w-4xl mx-auto text-foreground/80"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
