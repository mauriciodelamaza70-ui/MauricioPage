'use client';

import { useEffect, useRef } from 'react';

export function PostContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const imgs = ref.current.querySelectorAll('img');
    imgs.forEach((img) => {
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.borderRadius = '0.5rem';
      img.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
      img.style.marginTop = '1.5rem';
      img.style.marginBottom = '1.5rem';
      // Force reload if broken
      const src = img.getAttribute('src');
      if (src) {
        img.src = '';
        img.src = src;
      }
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose prose-lg lg:prose-xl max-w-4xl mx-auto text-foreground/80"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
