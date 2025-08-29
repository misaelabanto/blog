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
		// Add category (single, broad topic)
		category: z.string(),
		// Add tags (multiple, specific topics)
		tags: z.array(z.string()).default([]),
		// Optional: make posts draft
		draft: z.boolean().default(false),
		// Optional: featured posts
		featured: z.boolean().default(false),
	}),
});

const experience = defineCollection({
	// Load JSON files from language-specific subdirectories
	loader: glob({ base: './src/content/experience', pattern: '**/*.json' }),
	schema: z.object({
		company: z.string(),
		position: z.string(),
		startDate: z.string(),
		endDate: z.string().optional(),
		current: z.boolean().default(false),
		location: z.string(),
		description: z.string(),
		technologies: z.array(z.string()),
		achievements: z.array(z.string()),
		type: z.enum(['work', 'freelance', 'startup']),
		order: z.number().default(0),
	}),
});

const projects = defineCollection({
	// Load JSON files from language-specific subdirectories
	loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		technologies: z.array(z.string()),
		githubUrl: z.string().optional(),
		liveUrl: z.string().optional(),
		featured: z.boolean().default(false),
		startDate: z.string(),
		endDate: z.string().optional(),
		status: z.enum(['completed', 'in-progress', 'archived']),
		order: z.number().default(0),
		category: z.string().optional(),
		highlights: z.array(z.string()).optional(),
	}),
});

const skills = defineCollection({
	// Load JSON files from language-specific subdirectories
	loader: glob({ base: './src/content/skills', pattern: '**/*.json' }),
	schema: z.object({
		category: z.string(),
		title: z.string(),
		icon: z.string(),
		description: z.string().optional(),
		technologies: z.array(z.object({
			name: z.string(),
			level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
			years: z.number().optional(),
		})),
		order: z.number().default(0),
		featured: z.boolean().default(true),
	}),
});

export const collections = { blog, experience, projects, skills };
