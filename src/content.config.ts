import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Keystatic singletons stored as src/content/pages/<name>.mdoc.
// The entry id is the file name, e.g. "sample".
const pages = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Keystatic "Posts" collection, stored as src/content/posts/<slug>.mdoc.
// The entry id is the slug Keystatic generates from the title.
const posts = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { pages, posts };
