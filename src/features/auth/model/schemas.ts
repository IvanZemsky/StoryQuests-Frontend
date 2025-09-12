import z from "zod/v4"

export const AuthFormSchema = z.object({
   login: z
      .string({ error: "Login is required" }).trim()
      .min(4, "Login must be at least 4 characters"),
   password: z
      .string({ error: "Password is required" }).trim()
      .min(4, "Password must be at least 4 characters"),
})
