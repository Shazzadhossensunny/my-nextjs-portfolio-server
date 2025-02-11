import { z } from 'zod';

export const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long'),
    image: z.string().url('Invalid image URL'),
    tags: z.array(z.string()).min(1, 'At least one tag is required'),
    liveLink: z.string().url('Invalid live link URL'),
    githubLink: z.string().url('Invalid GitHub link URL'),
    details: z.string().optional(),
  }),
});
export const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, 'Title must be at least 3 characters long')
      .optional(),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long')
      .optional(),
    image: z.string().url('Invalid image URL').optional(),
    tags: z.array(z.string()).min(1, 'At least one tag is required').optional(),
    liveLink: z.string().url('Invalid live link URL').optional(),
    githubLink: z.string().url('Invalid GitHub link URL').optional(),
    details: z.string().optional().optional(),
  }),
});
