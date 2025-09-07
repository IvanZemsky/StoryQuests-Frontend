import { storyService } from "@/src/entities/story"
import { getTokenFromCookie } from "@/src/features/auth"

export async function fetchUserResult(storyId: string) {
   try {
      const token = await getTokenFromCookie()
      return await storyService.findMyResult(storyId, token)
   } catch (error) {
      return null
   }
}
