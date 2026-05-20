import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const houses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/houses' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string(),
    color: z.string(),
    accent: z.string(),
    motto: z.string().optional(),
  }),
});

// `slug` lives in front-matter on news posts but we use file-path ids for
// lookup; expose `slug` only as metadata.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('PolyChampions'),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { houses, news, pages };
