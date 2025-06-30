import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		company: z.string(),
		position: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		current: z.boolean().default(false),
		location: z.string(),
		description: z.string(),
		technologies: z.array(z.string()),
		achievements: z.array(z.string()),
		type: z.enum(['work', 'freelance', 'startup']),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		technologies: z.array(z.string()),
		githubUrl: z.string().optional(),
		liveUrl: z.string().optional(),
		featured: z.boolean().default(false),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		status: z.enum(['completed', 'in-progress', 'archived']),
	}),
});

export const collections = { blog, experience, projects };
