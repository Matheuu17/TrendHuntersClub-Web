import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsletter = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/newsletter' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.string(),
		date: z.date(),
		image: z.string().optional(),
	}),
});

export const collections = { newsletter };