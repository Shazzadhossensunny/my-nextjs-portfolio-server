import { z } from 'zod';

export const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters'),
    overview: z.string().min(50, 'Overview must be at least 50 characters'),
    image: z.string().url('Image must be a valid URL'),
    gallery: z
      .array(z.string().url('Gallery images must be valid URLs'))
      .optional(),
    coreFeatures: z
      .array(z.string())
      .min(1, 'At least one core feature is required'),
    technologies: z
      .array(z.string())
      .min(1, 'At least one technology is required'),
    links: z.object({
      live: z.string().url('Live link must be a valid URL'),
      github: z.object({
        frontend: z.string().url('Frontend GitHub link must be a valid URL'),
        backend: z
          .string()
          .url('Backend GitHub link must be a valid URL')
          .optional(),
      }),
    }),
  }),
});
export const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').optional(),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters')
      .optional(),
    overview: z
      .string()
      .min(50, 'Overview must be at least 50 characters')
      .optional(),
    image: z.string().url('Image must be a valid URL').optional(),
    gallery: z
      .array(z.string().url('Gallery images must be valid URLs'))
      .optional(),
    coreFeatures: z
      .array(z.string())
      .min(1, 'At least one core feature is required')
      .optional(),
    technologies: z
      .array(z.string())
      .min(1, 'At least one technology is required')
      .optional(),
    links: z
      .object({
        live: z.string().url('Live link must be a valid URL').optional(),
        github: z
          .object({
            frontend: z
              .string()
              .url('Frontend GitHub link must be a valid URL')
              .optional(),
            backend: z
              .string()
              .url('Backend GitHub link must be a valid URL')
              .optional(),
          })
          .optional(),
      })
      .optional(),
  }),
});
