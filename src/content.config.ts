import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per patient in src/content/patients/.
// The filename (without .md) is the slug, and must match the photo filenames
// in src/photos/after/<slug>.jpg.
const patients = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/patients' }),
  schema: z.object({
    name: z.string(),
    /** Month of treatment, YYYY-MM */
    date: z.string().regex(/^\d{4}-\d{2}$/, 'date must be YYYY-MM'),
    /** How it was paid, e.g. "paid by the 2021 raise" */
    funding: z.string(),
    /** Position in the treatment record; determines listing order */
    order: z.number().int().positive(),
  }),
});

export const collections = { patients };
