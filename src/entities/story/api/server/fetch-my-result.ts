"use server"

import { storyService } from "@/src/entities/story"
import { headers } from "next/headers"

export async function fetchMyResult(storyId: string) {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie") ?? ""

   try {
      return await storyService.findMyResult(storyId, { Cookie: cookieHeader })
   } catch (error) {
      return null
   }
}
