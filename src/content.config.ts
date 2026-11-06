import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per entry; `order` controls display order.
const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    order: z.number(),
    company: z.string(),
    title: z.string(),
    duration: z.string(),
  }),
});

const technologies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/technologies' }),
  schema: z.object({
    order: z.number(),
    category: z.string(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.object({}),
});

export const collections = { experience, technologies, profile };
