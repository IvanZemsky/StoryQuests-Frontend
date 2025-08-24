import { z } from "zod/v4"

export async function getTypedSearchParams<T extends z.ZodTypeAny>(
   schema: T,
   params: Promise<Record<string, string | number | undefined>>,
): Promise<z.ZodSafeParseResult<z.core.output<T>>> {
   const searchParams = await params

   const parsed = schema.safeParse(Object.fromEntries(Object.entries(searchParams ?? {})))

   return parsed
}

export function stringifyObjectValues(obj: Record<string, unknown>) {
   return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, String(value)]),
   )
}
