"use server"

import { headers } from "next/headers"
import { StoriesFilters } from "../../model/types"
import { storyService } from "../service"

export async function fetchStories(filters: StoriesFilters) {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie") ?? ""

   try {
      return await storyService.find(filters, { Cookie: cookieHeader })
   } catch (error) {
      return null
   }
}
