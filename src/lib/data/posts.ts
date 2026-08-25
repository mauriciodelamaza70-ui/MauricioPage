import type { Post } from '../types';
import { postsMeta } from './posts-meta';
import { postsContent } from './posts-content';

// Recompone el Post completo (meta + content) para el detalle [slug].
export const posts: Post[] = postsMeta.map((m) => ({ ...m, content: postsContent[m.slug] }));
