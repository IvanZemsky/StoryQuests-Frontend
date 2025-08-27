import { StoriesFilters, storyService } from "@/src/entities/story"
import { headers } from "next/headers"

export async function fetchStories(filters: StoriesFilters) {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie") ?? ""

   try {
      return await storyService.find(filters, { Cookie: cookieHeader })
   } catch (error) {
      return null
   }
}
