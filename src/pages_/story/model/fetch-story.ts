import { storyService } from "@/src/entities/story"
import { headers } from "next/headers"

export async function fetchStory(id: string) {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie") ?? ""

   const story = await storyService.findByID(id,
     
      { Cookie: cookieHeader },
   )

   console.log(story)

   return story
}