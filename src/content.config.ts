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

const catering = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    options: z.array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        price: z.object({
          servings: z.array(
            z.object({
              cost: z.number(),
              title: z.string(),
              platter: z.boolean(),
            }),
          ),
          minimum: z.string().optional(),
        }),
        extras: z
          .array(
            z.object({
              title: z.string(),
              cost: z.number(),
            }),
          )
          .optional(),
      }),
    ),
  }),
});

const buffet = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cost: z.number(),
    minimum: z.number(),
    menu: z.array(
      z.object({
        title: z.string(),
        choices: z.number(),
        options: z.array(z.string()),
      }),
    ),
  }),
});

export const collections = {
  menu,
  menuboard,
  catering,
  buffet,
};
