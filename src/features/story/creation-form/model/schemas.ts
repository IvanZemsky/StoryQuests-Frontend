import z from "zod/v4"

export const CreateStoryFormSchema = z.object({
   name: z
      .string({ error: "Title is required" })
      .trim()
      .min(15, "Title must be at least 15 characters"),
   desc: z
      .string({ error: "Description is required" })
      .trim()
      .min(25, "Description must be at least 25 characters"),
   img: z
      .string({ error: "Cover image is required" })
      .trim()
      .min(1, "Cover image is required")
      .max(250, "Image URL must be at most 250 characters"),
   tags: z.array(z.string()),
})
