import z from "zod/v4";

export const storiesFiltersParamsSchema = z.object({
   page: z.number().min(1).optional().default(1),
   search: z.string().optional(),
   length: z.literal(["short", "medium", "long"]).optional(),
   sort: z.literal(["best", "popular", "new"]).optional(),
})

export type StoryFiltersParams = z.infer<typeof storiesFiltersParamsSchema>