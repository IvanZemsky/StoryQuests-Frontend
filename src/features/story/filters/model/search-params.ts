import z from "zod/v4"

export const storiesFiltersParamsSchema = z.object({
   page: z.preprocess(
      (value) => (value === undefined ? 1 : Number(value)),
      z.number().positive().min(1).default(1),
   ),
   search: z.string().optional(),
   length: z.literal(["short", "medium", "long"]).optional(),
   sort: z.literal(["best", "popular", "new"]).optional(),
})

export type StoriesFiltersParams = z.infer<typeof storiesFiltersParamsSchema>
