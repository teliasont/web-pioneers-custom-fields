import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Keystatic "Pioneers" collection, stored as src/content/pioneers/<slug>.mdoc.
// The entry id is the slug Keystatic generates from the title.
const pioneers = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/pioneers' }),
    schema: z.object({
    title: z.string(),
    // Public URL of the pioneer's image, e.g. "/images/pioneers/<slug>/image.jpg".
    image: z.string().optional(),
    // Short bio shown on the pioneer's page.
    intro: z.string().optional(),
    // Link to the pioneer's site (Keystatic writes null when it's left empty).
    homepage: z.url().nullish(),
  }),
});

export const collections = { pioneers };