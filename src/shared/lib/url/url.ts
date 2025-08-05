import { z } from "zod/v4"

export async function getTypedSearchParams<T extends z.ZodTypeAny>(
   schema: T,
   params: Promise<Partial<Record<string, string>>>,
): Promise<z.ZodSafeParseResult<z.core.output<T>>> {
   const searchParams = await params

   const parsed = schema.safeParse(Object.fromEntries(Object.entries(searchParams ?? {})))

   return parsed
}
