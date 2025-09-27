import { z, reference, defineCollection } from 'astro:content';

function optional(config) {
  return z.union([config, z.null()]);
}

const menu = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: optional(z.string()),
    labeling: optional(
      z.object({
        regular: optional(z.string()),
        large: optional(z.string()),
      }),
    ),
    items: z
      .object({
        name: z.string(),
        regular: optional(z.number()),
        large: optional(z.number()),
      })
      .array(),
  }),
});

const menuboard = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    weight: z.number().int(),
    board: z.array(reference('menu')),
  }),
});

export const collections = {
  menu,
  menuboard,
};
