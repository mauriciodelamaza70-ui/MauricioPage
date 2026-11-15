import type { Post } from '../types';
import { postsMeta } from './posts-meta';
import { postsContent } from './posts-content';
import { postsAcademic } from './posts-academic';

// Recompone el Post completo (meta + datos académicos + content) para el detalle [slug].
export const posts: Post[] = postsMeta.map((m) => ({
  ...m,
  ...postsAcademic[m.slug],
  content: postsContent[m.slug],
}));
