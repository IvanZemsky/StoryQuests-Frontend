import { z } from "zod"

export const StorySortByLengthSchema = z.enum(["", "short", "medium", "long"])

export const StoryOrderBySchema = z.enum(["", "best", "popular", "new"])

export const StorySearchParamsSchema = z.object({
   page: z.coerce.number().positive().optional(),
   search: z.string().optional(),
   order: StoryOrderBySchema.optional(),
   length: StorySortByLengthSchema.optional(),
})
