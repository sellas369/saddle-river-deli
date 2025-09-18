import { z, defineCollection } from 'astro:content';

const menu = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    labeling: z
      .object({
        regular: z.string().optional(),
        large: z.string().optional(),
      })
      .optional(),
    items: z
      .object({
        name: z.string(),
        regular: z.number().optional(),
        large: z.number().optional(),
      })
      .array(),
  }),
});

export const collections = {
  menu,
};
