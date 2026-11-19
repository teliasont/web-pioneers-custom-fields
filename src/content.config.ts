import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Keystatic "Pioneers" collection, stored as src/content/pioneers/<slug>.mdoc.
// The entry id is the slug Keystatic generates from the title.
const pioneers = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/pioneers' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { pioneers };