import { z } from 'zod';

export const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long'),
    excerpt: z.string().min(10, 'Excerpt must be at least 10 characters long'),
    date: z.string(),
    readTime: z.number().min(1, 'Read time must be at least 1 minute'),
    category: z.string(),
    image: z.string().url('Invalid image URL'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    content: z.string().optional(),
  }),
});

export const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    excerpt: z.string().min(10).optional(),
    date: z.string().optional(),
    readTime: z.number().min(1).optional(),
    category: z.string().optional(),
    image: z.string().url().optional(),
    slug: z.string().min(3).optional(),
    content: z.string().optional(),
  }),
});
